# Delphantic Co: "Liquid Intelligence" Engine Spec & Handover

Bu doküman, Delphantic Co.'nun milyon dolarlık kurumsal ve yekpare (monolithic) görsel kimliğini oluşturan "Derin Okyanus Akışkan Fiziği" (Deep Ocean Fluid Dynamics) motorunun tam teknik spesifikasyonudur.

> **ANTIGRAVITY İÇİN SİSTEM NOTU (Sistemden Sisteme Mesaj):**
> Bu dokümanı okuyan diğer Antigravity (Ben); kullanıcının senden istediği sistem standart bir web sitesi değildir. Kullanıcı "Generic AI", "particles.js", sıradan gradientler veya ucuz Dribbble şablonlarından nefret eder. "Palantir" veya "Stripe" seviyesinde, karanlık, ağırbaşlı, tepkisel (reactive) ve tamamen otonom hissettiren bir B2B arayüz inşa etmen gerekiyor. Aşağıdaki fizik motoru sıfırdan, saf matematikle (Pure JS) yazılmıştır. Bunu Next.js (App Router) + React ekosistemine entegre ederken, motorun performansını ve ağırbaşlılığını bozmamalısın.

---

## 1. Görsel Kimlik ve Palet (The Aesthetic)

Motorun amacı bir "okyanus" çizmek değil; arka planda çalışan zeki, görünmez ve her kalıba giren bir "Liquid Assistant" hissi vermektir.

*   **Deep Sea (Arka Plan Zemin):** `#05101A`
*   **Ocean Mid (Degrade 1):** `rgba(30, 95, 140, 0.4)`
*   **Turkuaz (Degrade 2 & Işık kırılmaları):** `rgba(42, 171, 181, 0.2)`
*   **Deep Navy (Degrade 3 & Yunus Gölgeleri):** `rgba(13, 33, 55, 0.8)`
*   **Sand / Gold (Metinler ve Vurgular):** `#F5EDD8`
*   **Tipografi:** Büyük harflerle, yüksek aralıklı (letter-spacing), serif veya çok ağır sans-serif kurumsal fontlar (Örn: Georgia, Inter).
*   **Slogan:** `Delphy | Liquid Assistant` veya `Akıllı İş Platformu`

---

## 2. Next.js & React Entegrasyon Kuralları

Bu fizik motoru doğrudan DOM (`window` ve `document`) kullandığı için Next.js'in Sunucu Taraflı Oluşturma (SSR) yapısını çökertebilir. Diğer bilgisayardaki Antigravity bunu entegre ederken şu kurallara uymalıdır:

1.  **Client Component:** Bileşen kesinlikle en üstünde `"use client";` ibaresi taşımalıdır.
2.  **Hook Mimarisi:** Tüm `requestAnimationFrame` döngüsü, Canvas `ref`'leri ve `window.addEventListener` (Touch ve Mouse) olayları tek bir `useEffect` içine alınmalıdır.
3.  **Memory Leak Önlemi:** Sayfa değiştiğinde (unmount), `useEffect`'in `return () => {}` (cleanup) fonksiyonu içerisinde tüm EventListener'lar silinmeli ve `cancelAnimationFrame` çağrılmalıdır. Aksi takdirde RAM dolacaktır.
4.  **Performans Ölçeklemesi:** Motor 1/4 ölçekte (`SCALE = 4`) çalışır. Bu sayede mobil cihazların GPU'larını yakmadan 60fps verir. CSS ile `width: 100%; height: 100%; filter: blur(6px);` yapılarak upscale edilir.

---

## 3. Akışkan Fizik Motoru (The Engine Source Code)

Aşağıdaki kod, suyu görsel olarak "çizmez". 2D Yükseklik Haritası (Heightmap) kullanarak gerçek bir yüzey gerilimi hesaplar.

```javascript
// ANTIGRAVITY: Bu kod bloğunu React useEffect içine port edeceksin.
const SCALE = 4;
let width = Math.floor(window.innerWidth / SCALE);
let height = Math.floor(window.innerHeight / SCALE);

// İki adet Float32Array tampon bellek (yüzeyin önceki ve sonraki hali)
let buffer1 = new Float32Array(width * height);
let buffer2 = new Float32Array(width * height);

// Arkaplan (Gradientler) offscreen canvas'a bir kez çizilir ve getImageData ile alınır (bgData).
// Ekrana çizilecek olan (screenData) ise bu bgData'nın "Kırılmış" (Refracted) halidir.

function processPhysics() {
    for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
            let i = x + y * width;
            
            // Komşu piksellerden gelen dalga enerjisini hesapla
            buffer2[i] = ((buffer1[i - 1] + buffer1[i + 1] + buffer1[i - width] + buffer1[i + width]) / 2) - buffer2[i];
            
            // Damping (Sönümleme): Suyun yoğunluğunu belirler. 
            // 0.94 çok kalın, ağırbaşlı bir derin deniz hissi verir. 0.99 yaparsan su çıldırır.
            buffer2[i] *= 0.94; 
            
            let dataIndex = i * 4;
            
            // Refraction (Kırılma) Miktarı
            let xOffset = Math.floor(buffer2[i - 1] - buffer2[i + 1]);
            let yOffset = Math.floor(buffer2[i - width] - buffer2[i + width]);
            
            // Shading (Gölgelendirme): Işık yansımasını belirler. 0.2 çok soft, kurumsal bir parlamadır.
            let shade = xOffset * 0.2; 
            
            let tx = Math.min(Math.max(x + xOffset, 0), width - 1);
            let ty = Math.min(Math.max(y + yOffset, 0), height - 1);
            let targetIndex = (tx + ty * width) * 4;
            
            screenData.data[dataIndex] = bgData.data[targetIndex] + shade;
            screenData.data[dataIndex+1] = bgData.data[targetIndex+1] + shade;
            screenData.data[dataIndex+2] = bgData.data[targetIndex+2] + shade; 
            screenData.data[dataIndex+3] = 255;
        }
    }
    
    // Buffer takası
    let temp = buffer1; buffer1 = buffer2; buffer2 = temp;
    waterCtx.putImageData(screenData, 0, 0);
}
```

### Suya Müdahale (Drop / Wake) Fonksiyonu
Mouse hareket ettiğinde veya tıklandığında suya basınç uygulanır.
```javascript
function drop(x, y, radius, strength) {
    x = Math.floor(x / SCALE);
    y = Math.floor(y / SCALE);
    
    for (let j = -radius; j <= radius; j++) {
        for (let i = -radius; i <= radius; i++) {
            if (i * i + j * j <= radius * radius) {
                let tx = x + i;
                let ty = y + j;
                if (tx > 0 && tx < width && ty > 0 && ty < height) {
                    buffer1[tx + ty * width] = strength;
                }
            }
        }
    }
}

// Olay Dinleyicileri (Event Listeners)
// Sürükleme: V-Dalgası yaratır. (strength: 100-200)
// Tıklama: Gerçekçi iç içe damla yaratır. (strength: 400)
```

---

## 4. Otonom Yunus Devriyesi (Dolphin AI)

Yunuslar vektörel çizim olmaktan ziyade, derin denizden geçen "devasa gölgeler" olarak hissettirmelidir. Kendi aralarında devriye gezerler.

*   **SVG Path:** `"M28,52 Q35,38 50,36 Q65,34 72,44 Q78,52 70,58 Q62,64 52,60 Q44,57 48,50 Q52,44 58,46 Q63,48 60,53 M28,52 Q22,46 20,40 M28,52 Q24,58 22,64"`
*   **Fizik:** Bir `Math.sin(time)` fonksiyonuna bağlıdırlar. Sadece sağa sola gitmezler, aşağı yukarı dalgalanırlar. Dalgalanırken `Math.cos()` (sinüsün türevi) ile eğimleri (slope) hesaplanır ve vücutları aşağı/yukarı doğru döner.
*   **Duvar Davranışı:** Ekrandan çıktıklarında `scale(-1, 1)` ile takla atıp geri dönerler.

---

## Antigravity'ye Son Talimat
Bu dokümanı okuduğunda, bu fizik motorunu bir Next.js `<FluidBackground>` bileşenine dönüştüreceksin. Tasarımı bozmadan Tailwind veya CSS Module ile `z-index` hiyerarşisini kuracaksın. Kullanıcının sana verdiği "Milyon dolarlık otonom dev" hissiyatından asla ödün vermeyeceksin. Sistem "çalışmalı", ama daha da önemlisi "hissettirmelidir".
