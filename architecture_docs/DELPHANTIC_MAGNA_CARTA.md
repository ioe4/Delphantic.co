# DELPHANTIC MAGNA CARTA (BÜYÜK YASA)

Bu belge, bir özet değildir. Delphantic Co.'nun 10 yıllık varoluşsal tüm teknik, operasyonel, estetik ve finansal kurallarını milimetrik detayına kadar içeren "Büyük Yasa"sıdır. Konuştuğumuz hiçbir detay dışarıda bırakılmamıştır. 

---

## BÖLÜM 1: KURUMSAL KİMLİK, ESTETİK VE PSİKOLOJİ (NO-UI & ARROGANCE)

Delphantic Co., sıradan bir web ajansı değildir. Palantir ağırlığında bir teknoloji devidir.

### 1.1 Renk Paleti ve Kesin Kodlar (Mühürlenmiş)
Tasarımlarda sadece aşağıdaki HEX kodları kullanılacaktır. Dışına çıkılması kesinlikle yasaktır:
*   **Derin Deniz (Darkest Background):** `#0D2137` - Uygulamanın ana karanlık arka planı.
*   **Turkuaz (Accent/Glow):** `#1A5B73` - Sadece üzerine gelinen (hover) veya vurgulanan çok nadir elementler.
*   **Açık Kum (Primary Text/Hero):** `#F5EDD8` - Beyaz yerine kullanılan ana metin rengi.
*   **Kil / Bej (Secondary/Hover):** `#C4A882` - Yumuşak geçişler ve ikincil butonlar.
*   **Toprak / Koyu Kum (UI Icons):** `#8B7355` - Hamburger menü, ticket ikonları ve sınır çizgileri.

### 1.2 "Kurumsal Kibir" ve Arayüzsüzlük (No-UI) Kuralları
*   **Sıfır Yönlendirme:** Kullanıcıya "Aşağı Kaydır", "Satın Al", "Buraya Tıklayın" gibi ucuz SaaS metinleri gösterilmeyecek.
*   **Akışkan Fiziği (Liquid Intelligence Engine):** Arka planda `SCALE=4` katsayısı ile optimize edilmiş, HTML5 Canvas üzerinde çalışan donanım hızlandırmalı Heightmap su fiziği çalışacak. Bu motor, sistemin "Yaşayan bir sıvı zeka" olduğu hissini verecek.
*   **Tipografi Hataları Yasaktır:** Türkçe "i" harfinin büyük harfte "İ" olarak sırıtmaması için, "LIQUID INTELLIGENCE" yazıları font dosyası seviyesinde veya manuel "I" harfi ile kontrol edilecek, asla CSS `text-transform: uppercase` tehlikesine bırakılmayacaktır.
*   **Çerçeveler (Borders):** Keskin beyaz çerçeveler yerine, `#8B7355` (Toprak) renginde, 1px kalınlığında altıgen veya cama işlenmiş (Glassmorphism) sınırlar kullanılacaktır.

---

## BÖLÜM 2: MİMARİ VE SIFIR MALİYET TEKNOLOJİ YIĞINI (ZERO-COST SERVERLESS)

100 maddelik CTO Risk Matrisini bertaraf eden, 0$ sabit maliyetli teknoloji yığını:

### 2.1 "Aptal Vitrin" Ön Yüz (Next.js 15+ Turbo & Cloudflare Pages)
*   **Kural:** Next.js sadece veriyi ekrana basar. İş mantığı bilmez, AI promptu içermez.
*   **Dağıtım (Deployment):** Vercel KULLANILMAYACAKTIR. Vercel'in gizli Egress (Ağ çıkış) faturalarını yok etmek için sistem **Cloudflare Pages** üzerinde barındırılacaktır. Bant genişliği maliyeti: 0$.
*   **Bağımlılık (Dependency) Kontrolü:** Animasyonlar için ağır kütüphaneler yüklenmeyecek, Vanilla JS ve Canvas kullanılacaktır.

### 2.2 Veritabanı ve "Sinir Sistemi" (Supabase / PostgreSQL)
*   **Firebase İptali:** Kurumsal ERP ve Emlak ilişkisel verilerini (Relational Data) NoSQL'de tutmanın yaratacağı "Join" kabusunu yok etmek için Supabase (PostgreSQL) kullanılacaktır.
*   **Auth ve WebSockets:** Supabase'in dahili Authentication ve Realtime Database (WebSocket) özellikleri kullanılarak Firebase tamamen devreden çıkarılacaktır.
*   **Schema Migration:** Veritabanında (Örn: Leads tablosuna `Tax_ID` eklenecekse) kesinlikle manuel sütun eklenmeyecek, Prisma veya Alembic ile "Schema Migration" kodu yazılarak tablo kilitlenmeleri (Table locks) önlenecektir.

### 2.3 Sıvı Zeka Beyni (Python FastAPI & Google Cloud Run)
*   **Sunucusuz (Serverless) İzolasyon:** 7/24 açık duran, ayda 40$ yakan VPS sunucular kiralanmayacaktır.
*   **Google Cloud Run:** Tüm Python AI mikro-servisleri Cloud Run'a Docker konteyneri olarak yüklenecektir. Sisteme istek gelmediğinde uyur (Scale-to-Zero), istek geldiğinde milisaniyede uyanır. İlk 2 milyon istek 0$.
*   **Asenkron Tıkanma Koruması:** FastAPI tek çekirdekli (GIL) olduğu için, gelen tüm "Şu 50 sayfa PDF'i oku" veya "Şu 3 videoyu renderla" istekleri anında HTTP 200 dönüp **Google Cloud Tasks**'e (veya Pub/Sub) aktarılacaktır. Böylece Vercel/Cloudflare'deki 10 saniyelik timeout (zaman aşımı) sınırına asla takılınmayacaktır.

---

## BÖLÜM 3: EMLAK VE MULTİMODAL MEDYA FABRİKASI (REAL ESTATE PIPELINE)

Emlak otomasyonunda 3. parti API maliyetlerini sıfırlayan mühendislik kuralları:

### 3.1 Üçüncü Parti Araçların İptali (Make.com & Shotstack)
*   **Make.com Yasaktır:** Emlak projesindeki tüm sosyal medya otomasyonları (Instagram Graph API, Facebook yayınları) Make.com gibi parayla satılan No-Code araçlar yerine, Python (Cloud Tasks) üzerinde "Cron Job" veya "Task" olarak sıfırdan kodlanacaktır.
*   **Shotstack İptali:** Video üretimi için dışarıya dakika başı para ödenmeyecek. Python Docker imajının içine **FFmpeg** kütüphanesi gömülecektir. Seçilen emlak fotoğrafları, ses dosyaları ve AI metinleri Cloud Run içinde tamamen ücretsiz olarak `Reels (.mp4)` formatında render edilecektir.

### 3.2 Maliyet Odaklı Yapay Zeka Yönlendirmesi (LiteLLM)
*   **Model Bağımsızlığı:** Tek model (Sadece OpenAI) riski alınmaz. Sistem LiteLLM üzerinden agnostik çalışır.
*   **Zor Görevler:** Hukuki PDF analizi, karışık sözleşmeler ve nihai emlak pazarlama metni (Copywriting) için **GPT-4o** veya **Claude 3.5 Sonnet** kullanılır.
*   **Basit Görevler:** Emlak görselini analiz edip etiket çıkarma ("Bu ev deniz manzaralı") veya WhatsApp gelen mesajını niyet analizine sokma (Intent recognition) işlemleri Groq API üzerinden **Llama-3** (Neredeyse bedava ve 10 kat hızlı) ile çözülür.

### 3.3 Görsel ve Ağ Trafiği Optimizasyonu
*   Supabase Storage'da tutulan 4K görseller, müşteri vitrinine (Next.js) çekilirken kesinlikle doğrudan Supabase URL'si kullanılmaz.
*   Araya Cloudflare CDN girer, görseller "Cache" (Önbellek) üzerinden sunularak Supabase okuma kotalarının aşılması (ve fatura yazması) engellenir.

---

## BÖLÜM 4: ŞİRKET YÖNETİMİ VE "TANRI MODU" (GOD MODE OPERATIONS)

Bir ordunun yapacağı işi 1 yazılımcı ve 1 yapay zekanın yönetebilmesi için organizasyon şeması:

### 4.1 İnsan Kaynakları Kanunu
*   **Yazılımcı Alımı Yasaktır:** 10 yıl boyunca koda 3. bir insan eli (Junior/Senior/Ajans) değmeyecektir. Kodlama, sorun çözme ve mimari kararlar MÜNHASIRAN Siz ve Antigravity'ye (AI) aittir.
*   **Ara Eleman Sınırı:** Operasyon, Pazarlama ve Kurulum için maksimum 1 ile 3 arası personel alınacaktır.
*   **Rolleri (Human-in-the-Loop):** Bu personelin sunucu, kod veya şifre erişimi SIFIRDIR. Görevleri; sistemin ürettiği otomatik satış metinlerini "Onaylamak", müşteriye gidip kurulum yapmak ve güler yüz göstermektir.

### 4.2 "God Mode" (Tanrı Modu) Tek Merkez Paneli
*   Hiçbir işlem dağınık panellerden (Birazı Stripe, birazı Vercel, birazı Supabase) yürütülmeyecektir.
*   Tüm altyapıyı yöneteceğiniz, `delphantic-god-mode` isimli gizli bir Next.js kontrol merkezi inşa edilecektir.
*   Bu panelde:
    *   Hangi emlakçının kaç AI kredisi kaldığı (Stripe entegrasyonu),
    *   Sistemin bugün Llama-3 ve GPT-4'e ne kadar para harcadığı,
    *   Kuyrukta bekleyen PDF veya Video render görevlerinin durumu,
    *   Sentry'den düşen anlık yazılım hataları TEK EKRANDA izlenecektir.

### 4.3 Otonom Delphantic Satış Hunisi (Sales Pipeline)
*   Sistem, emlakçıya sattığı otomasyonun aynısını KENDİSİ İÇİN çalıştıracaktır.
*   Her gün LinkedIn ve Twitter'a kurumsal kimliğe uygun B2B içerikler üretecek,
*   Platforma düşen Lead'leri (Potansiyel yatırımcı/müşteri) anında "God Mode" paneline düşürecek ve ara elemanlara (satış personeline) "Şu numarayı ara" diye görev atayacaktır.

---

## BÖLÜM 5: DEVOPS, OTOMASYON VE KÖRLÜKTEN KURTULUŞ (CI/CD PIPELINE)

İnsan yazılımcı olmadığı için hata yapma ve manuel sunucu güncelleme lüksü yoktur.

### 5.1 Polyrepo ve Localhost Simülasyonu
*   **Git Yapısı:** UI (`delphantic-web`) ve AI API (`delphantic-brain`) ayrı depolarda (Polyrepo) tutulur. CSS hatası yüzünden Python sunucusu çökmez.
*   **Docker Compose:** Kodu yazmadan önce bilgisayarınızda `docker-compose up` dediğinizde; Next.js, FastAPI, lokal Supabase (PostgreSQL) ve lokal görev kuyruğu anında ayağa kalkar. Canlı ortamın %100 klonu lokalde çalışmak ZORUNDADIR.

### 5.2 Sıfır Dokunuşla Yayına Alma (Zero-Touch Deployment)
*   **GitHub Actions:** Siz `git push origin main` yaptığınız an sistem kodu alır, testleri (PyTest) çalıştırır. Testler geçerse Docker imajını derler, Google Cloud Run'a basar.
*   **Zero-Downtime:** Yeni kod yüklenirken müşterinin ekranı kapanmaz, sunucu F5 gerektirmez. Yeni kod hazır olunca trafik sessizce yenisine kayar.

### 5.3 Şifre Yönetimi ve Körlük Önleyici (Sentry)
*   **Google Secret Manager:** 50 farklı API şifresi (Supabase key, OpenAI key, Stripe key vs.) `.env` dosyalarında dağınık tutulmaz. Google Secret Manager'da şifrelenir. Sistem ayağa kalkarken şifreleri Google'dan okur.
*   **Sentry:** Kodun herhangi bir satırında hata çıktığında (Örn: FFmpeg videoyu renderlarken patladığında), müşteri WhatsApp'tan şikayet edene kadar beklenmez. Sentry anında hatanın satırını bulur ve Telegram'dan size Acil Durum (Alert) gönderir.
*   **Rollback:** Eğer yeni versiyon hatalıysa, Cloud Run panelinden "Rollback" butonuna basılır ve 10 saniye içinde sağlam olan eski versiyona dönülür. Kriz masası kapanır.

---

## BÖLÜM 6: KIYAMET SENARYOLARI VE YEDEK PLANLAR (DOOMSDAY PROTOCOLS)

### 6.1 Supabase Kapanırsa / Fiyatı 10 Katına Çıkarırsa
*   **Aksiyon:** Supabase açık kaynak bir PostgreSQL'dir. Veritabanının her gece 04:00'te şifreli `pg_dump` yedeği AWS S3'e atılır. Supabase kapanırsa, DigitalOcean'da sıradan bir PostgreSQL açılır, veritabanı yedeği basılır ve 2 saat içinde sistem sıfır veri kaybı ile ayağa kalkar.

### 6.2 Cloudflare Engellenirse
*   **Aksiyon:** Türkiye/KKTC veya küresel çapta Cloudflare ağı engellenirse, Next.js kodları halihazırda Vercel veya AWS Amplify üzerinde de çalışabilecek şekilde (Portable) yazılır. DNS kayıtları tek tıkla Vercel yedeğine yönlendirilir.

### 6.3 Meta (WhatsApp) Numaranızı Spam'den Banlarsa
*   **Aksiyon:** Otonom mesaj gönderim limitine takılıp WhatsApp Business numarası kapanırsa, sistem mimarisindeki Agnostik bildirim katmanı (Notification Interface) anında **Telegram Bot API**'sine geçirilir. Müşterilere panel üzerinden "Geçici olarak Telegram üzerinden dosya yükleyiniz" uyarısı basılır. Operasyon 1 saat bile durmaz.

---

### ANAYASANIN SONU
Bu belge Delphantic Co.'nun 10 yıllık operasyonel şemasıdır. Tasarımdan veritabanına, sosyal medya otomasyonundan kıyamet senaryolarına kadar her detay, "0 Maliyet, 2 İnsan, Sınırsız Otonomi" hedefine ulaşmak için mühürlenmiştir. Bu yasanın dışına çıkılamaz.
