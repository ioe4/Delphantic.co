# Sektör Liderlerinin Ortak Noktaları ve Delphantic "Şartlar" Listesi

Türkiye ve KKTC pazarında hızla yayılan, herkesin ortak kullandığı (Luca, Paraşüt, Sahibinden, UYAP, Zirve, Sinerji vb.) yazılımların başarı sırlarını incelediğimizde, hepsinin ortak 5 temel kuralı uyguladığını görüyoruz. 

Delphantic Co. olarak "Commodore 64" (herkes için erişilebilir AI) vizyonunu hayata geçirirken, rakipleri tahtından etmek için **yapmamız şart olanlar** şunlardır:

---

## 1. Piyasaya Hakim Olan Yazılımların Ortak Noktaları

1. **"Asistan/Sekreter" Dostu Olmaları (Gatekeeper Etkisi):**
   *   *Gerçek:* Yazılımı patron satın alır, ancak sekreter/asistan kullanır. Eğer yazılım asistanın işini zorlaştırıyorsa, asistan "bu sistem çalışmıyor, sürekli çöküyor" diyerek yazılımı iptal ettirir.
   *   *Ortak Nokta:* En çok yayılan yazılımlar veri girişini en aza indiren, "Tek Tuşla" işlem yaptıran sistemlerdir.
2. **Resmi Kurum ve Lokal Entegrasyonlar (Zorunluluk Hissi):**
   *   *Gerçek:* Türkiye'de bir yazılım e-Fatura/e-Arşiv (GİB) entegrasyonu sunmuyorsa, veya hukukta UYAP'tan veri çekmiyorsa yaşayamaz. 
   *   *Ortak Nokta:* Kullanıcıya "Bunu kullanırsam devlete bildirimleri de otomatik yapmış olurum" rahatlığı sunarlar.
3. **Masaüstü Hızında Çalışan Bulut Sistemleri:**
   *   *Gerçek:* Türk KOBİ'leri eski tip (muhasebe programı gibi) hızlı çalışan sistemlere alışıktır. Sayfa yüklenmesini beklemek istemezler.
   *   *Ortak Nokta:* Klavye kısayolları (F5, F8 gibi) olan ve sayfa yenilemeden (Single Page App) anında tepki veren sistemler tutunur.
4. **Sektörel Jargona Hakimiyet:**
   *   *Gerçek:* Yazılımın dili genel "Business" İngilizcesinden çeviri gibi durmamalıdır. Emlakçıya "Lead", "Conversion" demez, "Müşteri", "Randevu" der.
   *   *Ortak Nokta:* Tamamen o nişe (Avukata, Emlakçıya) özel bir terim sözlüğü kullanırlar.

---

## 2. Delphantic Co. İçin "Olmazsa Olmazlar" (Must-Haves)

Bu pazara "Commodore 64 gibi basit ama premium" bir yapay zeka asistanı sunacaksak, sistemimizde şunları **kesinlikle** yapmalıyız:

### 🔴 1. WhatsApp'ın "Ana Arayüz" Gibi Çalışması
*   **Neden Şart?** KKTC ve Türkiye'de iş WhatsApp üzerinden döner. Emlakçı yoldayken sisteme web'den girmek istemez.
*   **Nasıl Olmalı?** Delphantic Asistan'ın bir WhatsApp numarası olmalı. Emlakçı banka ekstresinin fotoğrafını WhatsApp'tan asistana atmalı, AI bunu arka planda sisteme (gider olarak) işlemeli. *"Kemal Bey, bu faturayı sisteme ofis gideri olarak kaydettim, e-faturasını da kestim"* diye WhatsApp'tan cevap vermeli.

### 🔴 2. Sıfır Öğrenme Eğrisi (Text-to-Action)
*   **Neden Şart?** KOBİ'lerin eğitime ayıracak vakti yoktur. Yazılımı açtıklarında ne yapacaklarını bilemezlerse kapatırlar.
*   **Nasıl Olmalı?** Ekranda karmaşık menüler yerine ortada dev bir Google arama çubuğu gibi bir "Asistan Çubuğu" olmalı. Kullanıcı oraya *"Ahmet'in davası için duruşma gününü takvime ekle ve ona SMS at"* yazdığında veya ses kaydı gönderdiğinde sistem bunu algılayıp yapmalı. Klasik menüler sadece detay incelemek için kullanılmalı.

### 🔴 3. "Premium ama Ulaşılabilir" Görsel Kimlik
*   **Neden Şart?** Şahıs şirketleri (özellikle doktor, avukat, gayrimenkul ofisi) prestije çok önem verir. Müşterilerine gösterecekleri ekranın (veya müşteriye gidecek olan faturanın/raporun) çok lüks görünmesini isterler.
*   **Nasıl Olmalı?** Kararlaştırdığımız Deep Sea, Sand ve Beige (Okyanus ve Kum) konseptini, bol boşluklu, okuması kolay (Georgia font) rapor ekranlarıyla birleştirmeliyiz. Müşteriye giden her PDF rapor Delphantic şıklığını yansıtmalı.

### 🔴 4. Açık Bankacılık (Open Banking) ve E-Fatura Standardı
*   **Neden Şart?** Finansal süreçlerin otomasyonu en büyük satış noktasıdır. 
*   **Nasıl Olmalı?** Yazılım, KOBİ'nin banka hesaplarına entegre olmalı. Gelen bir EFT'nin açıklamasına bakarak AI bunun "Lefkoşa'daki kiralık evin kaporası" olduğunu anlamalı ve faturasını otomatik hazırlayıp onay istemelidir.

### 🔴 5. Offline Toleransı (Local-First)
*   **Neden Şart?** Sahada (şantiyede, adliyede) internet her zaman iyi çekmeyebilir.
*   **Nasıl Olmalı?** Modern web teknolojileri (PWA) kullanılarak, uygulama internet koptuğunda da veri girmeye izin vermeli, internet geldiğinde sunucuya senkronize etmelidir.

---
**Özet:** En çok yayılan yazılımlar **"Kullanıcının tembellik etmesine en çok izin veren"** yazılımlardır. Delphantic Asistan, kullanıcının yerine düşünen, yazan ve hazırlayan proaktif bir yol arkadaşı olmalıdır.
