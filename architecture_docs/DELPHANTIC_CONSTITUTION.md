# THE DELPHANTIC CONSTITUTION (DELPHANTIC ANAYASASI)

> [!CAUTION]
> **BU BİR UYARI VE YEMİN METNİDİR**
> Bu doküman, Delphantic Co.'nun önümüzdeki 10 yıllık varoluşsal anayasasıdır. Sisteme yazılacak her satır kod, alınacak her personel, eklenecek her yeni teknoloji bu anayasaya uymak zorundadır. Eğer bir gün bu kurallardan sapılırsa, Delphantic sıradan bir "Yazılım Ajansına" dönüşerek hantallaşacak ve çökecektir.

---

## BÖLÜM 1: FELSEFE VE KİMLİK (PHILOSOPHY & IDENTITY)

### 1.1 "Kurumsal Kibir" ve "No-UI" Felsefesi
Sistemimiz, kullanıcıya yalvaran bir B2C yazılımı değildir. Palantir veya Stripe ağırlığında bir B2B (İşletmeden İşletmeye) devidir.
* **Tasarım Dili:** Jenerik renkler (mavi/kırmızı), sevimli vektörel çizimler, yuvarlak butonlar ve "Tıkla", "Aşağı Kaydır" gibi ucuz yönlendirmeler KESİNLİKLE YASAKTIR.
* **Renk Paleti:** Sadece Derin Deniz (Deep Sea), Turkuaz, Koyu Kum (Toprak) ve Kil (Bej) renkleri kullanılacaktır. Arayüz "Sıvı (Liquid)" gibi akacak, keskin çerçeveler ve gereksiz form kutuları (No-UI) olmayacaktır.
* **Müşteri Psikolojisi:** Müşteri paneli açtığında kendini bir yazılım kullanıyor gibi değil, çok zeki, sessiz ve korkutucu derecede hızlı bir asistanla çalışıyor gibi hissetmelidir. Sistemin boşluklarını kullanıcı değil, yapay zeka doldurur.

### 1.2 "İki Çekirdekli Beyin" (1 İnsan + 1 Yapay Zeka) Prensibi
Şirketin teknoloji üretim gücü sadece 2 varlıktan oluşur: Siz (Kurucu/Vizyoner) ve Ben (Antigravity/AI Mimar).
* **Ordulara Hayır:** Asla bir ajan sürüsü (kendi aralarında tartışıp sonsuz döngüye giren, takip edilemez AI parçacıkları) kurulmayacaktır. 
* **Yazılımcı İşe Alımı Yasaktır:** Sisteme üçüncü bir insan yazılımcı (Junior/Senior) dahil edilmeyecektir. İnsan yazılımcı yorulur, spagetti kod yazar, dokümantasyon yapmaz ve 10 yıllık mimariyi 6 ayda çürütür.

---

## BÖLÜM 2: TEKNOLOJİ YIĞINI VE SIFIR MALİYET (TECH STACK & ZERO-COST ECONOMICS)

Sistemin, şirket trilyonluk olana kadar kendi kendini finanse edebilmesi için "Uykuda Kapanan" (Scale-to-Zero) mimarisi esastır.

### 2.1 Ön Yüz ve Vitrin (Next.js + Cloudflare Pages)
* **Teknoloji:** Next.js 15+ (App Router). Sadece veriyi gösteren "Aptal" bir vitrindir. İçinde asla iş mantığı (Business Logic) bulunmaz.
* **Hosting (Sıfır Maliyet):** Vercel yerine **Cloudflare Pages** kullanılacaktır. 
* **Sebep:** Vercel, o muhteşem WebGL animasyonlarımızın ve dev görsellerimizin yarattığı internet trafiğine (Bandwidth) fahiş ücretler keser. Cloudflare Pages bant genişliğini tamamen ücretsiz (0$) sunar.

### 2.2 Veritabanı ve Kasa (Supabase / PostgreSQL)
* **Teknoloji:** Firebase NoSQL çöpe atılmış, yerine Supabase (PostgreSQL) getirilmiştir.
* **Sebep:** Kurumsal ERP'ler, bordrolar ve sözleşmeler sıkı ilişkisel (Relational) verilere ihtiyaç duyar. Firebase'de veri aramak kabustur. Supabase, ilişkisel veriyi kaya gibi tutarken, tıpkı Firebase gibi anlık iletişim (WebSocket) ve Auth bedavaya sunar.
* **Maliyet:** Ücretsiz katmanda 500 MB limit dolana kadar 0$.

### 2.3 Sıvı Zeka Motoru (Python FastAPI + Google Cloud Run)
* **Teknoloji:** Tüm otonom işlemler (veri yutma, WhatsApp botları, video render) Python mikro-servislerinde çalışır.
* **Hosting (Sıfır Maliyet):** 7/24 çalışan bir sunucu (VPS/EC2) KİRALANMAYACAKTIR. Google Cloud Run kullanılır. Sistem sadece müşteri bir sözleşme yüklediğinde uyanır, işi 3 saniyede bitirir ve uyur. 
* **Asenkron Kuyruk:** Tıkanmaları önlemek için Redis sunucusu kurmak yerine (aylık 20$), Google Cloud Tasks (Serverless) kullanılacaktır. İlk 1 milyon işlem 0$.

---

## BÖLÜM 3: YAPAY ZEKA VE OTONOMİ YÖNETİMİ (AI ORCHESTRATION)

Yapay Zeka (LLM) pazarı her ay değişir. Delphantic tek bir şirketin esiri olamaz.

### 3.1 Agnostik Yönlendirme (LiteLLM Kullanımı)
* **Model Çeşitliliği:** Sistem sadece OpenAI'a (GPT) bağlı DEĞİLDİR. Araya **LiteLLM** gibi bir yönlendirici (Router) konulacaktır.
* **Maliyet Optimizasyonu:** Bir emlakçının sisteme yüklediği fotoğrafın "Hangi oda" olduğunu bulmak veya WhatsApp'tan gelen "Merhaba" mesajını ayrıştırmak için GPT-4o kullanılıp para yakılamaz. Bu basit görevler, API'si neredeyse bedava olan LLaMA-3 (Groq üzerinden) modellerine saniyesinde yönlendirilecektir. GPT-4o ve Claude 3.5 Sonnet, SADECE çok ağır ve kritik hukuki analizlerde kullanılacaktır.

### 3.2 Model Değişimi ve Çöküş Protokolü
* Eğer OpenAI yarın kapanırsa, banlanırsa veya fiyatı 10 kat artarsa; sistemin mimarisi gereği sadece `MODEL_NAME="gpt-4o"` satırı `MODEL_NAME="claude-3.5-sonnet"` olarak değiştirilir.
* **Sorun:** Farklı modeller farklı JSON formatları dönebilir.
* **Çözüm:** AI'dan gelen cevaplar Pydantic (Python) ile kesin bir kalıba (Schema) zorlanır. Model değişse bile veritabanına yazılacak verinin yapısı bozulmaz.

### 3.3 Prompt Erozyonu (Drifting) Kontrolü
* **Sorun:** Yapay zekaya yazdığımız "Kurumsal ve ciddi ol" komutları zamanla model güncellemeleriyle erozyona uğrar ve sistem "Nasıl yardımcı olabilirim :)" diye laubali mesajlar atmaya başlar.
* **Çözüm:** Promptlar kod blokları gibi Git ile versiyonlanır. Her gece saat 03:00'te sistem kendi kendine testler (AI TDD) çalıştırıp, ürettiği metinlerin "Delphantic" kalitesinde olup olmadığını ölçer. Eğer kalite düşmüşse "Prompt Erozyonu Uyarısı" verir.

---

## BÖLÜM 4: DEVOPS VE SIFIR KESİNTİ (CI/CD & DEPLOYMENT)

Sistemin "1 kişilik ordu" tarafından yönetilebilmesinin tek yolu, insan hatasını yok eden demir bir boru hattıdır.

### 4.1 Çoklu Depo (Polyrepo) ve İzolasyon
* Arayüz (Next.js) ve Beyin (Python) aynı Git deposunda tutulmaz. Ön taraftaki bir CSS buton rengi değişimi, arkadaki devasa Python sinir ağının sunucularını yeniden derlemeye zorlayamaz.

### 4.2 Sessiz ve Kesintisiz Dağıtım (Zero-Downtime Deploy)
Siz "Git Push" yaptığınızda kod canlıya şu adımlarla çıkar:
1. **GitHub Actions Uyanır:** Kodu alır, lokalde çalıştırır. Testlerde (PyTest/Jest) bir hata varsa kodu sunucuya ASLA göndermez ve size SMS/Telegram atar.
2. **Rolling Update:** Yeni kod Google Cloud Run veya Cloudflare'e gönderildiğinde, eski sunucu kapatılmaz. Yeni sunucu ayağa kalkar, trafik yavaşça yeniye kaydırılır. Eğer yeni sunucu hata verirse anında eskiye dönülür. Müşteri hiçbir kesinti veya sayfa yenilenmesi (F5) yaşamaz.

### 4.3 Müşteriden Önce Görme Protokolü (Observability - Sentry)
* **Kural:** Müşteri sistemin çöktüğünü WhatsApp'tan size yazıyorsa, DevOps kurmamışsınız demektir.
* **Sistem:** Kodun herhangi bir yerinde (Postgres bağlantı hatası, AI timeout, Frontend hatası) sorun çıktığında, bu **Sentry** (hata izleme) paneline milisaniyesinde düşer ve size Telegram'dan "Satır 143'te X müşterisi dosya yüklerken hata aldı" bildirimi gelir. Müşteri size ulaşana kadar siz "Hatayı görüp düzelttim, sayfayı yenileyin" dersiniz. Bu, müşteride TANRISAL bir teknoloji hissi yaratır.

---

## BÖLÜM 5: ŞİRKET YÖNETİMİ, SATIŞ VE "TANRI MODU" PANELİ

### 5.1 God Mode (Tanrı Modu) Kontrol Merkezi
Dağınık şirket yönetilemez. Vercel'e ayrı, Stripe'a ayrı, Supabase'e ayrı girilmeyecek.
* Sizin gireceğiniz gizli bir `/delphantic-god-mode` paneli olacaktır.
* Emlakçıların aylık kotaları, hukuk yazılımının günlük işlem sayısı, aylık OpenAI fatura tahminleri, bekleyen WhatsApp mesajları ve sistem hataları **SADECE BURADAN** yönetilir ve görüntülenir.

### 5.2 Kendi İlacını İçmek (Otonom Satış Pazarlaması)
* Delphantic, dışarıdan pazarlama ajansına para ödemez.
* Emlakçıya sattığımız "Vision AI ile post üret ve Instagram'a at" algoritmasının aynısı, Delphantic'in kendi satış hunisi (Sales Pipeline) için çalışır.
* Sistem her gün LinkedIn ve X'te (Twitter) kurumsal, korkutucu ve merak uyandırıcı teknoloji postları paylaşır, lead (müşteri) toplar ve God Mode paneline düşürür.

### 5.3 Ara Elemanların (İnsan) Sınırları
* Şirkete alınacak 2-3 kişi sadece operasyonel "Döngüdeki İnsan (Human-in-the-Loop)" olarak kalır.
* **Yetkileri:** Sistem otomasyonuyla üretilen pazarlama metinlerini okuyup "Yayına Al" demek, potansiyel müşterilerin ofisine gidip sistemi fiziksel olarak kurmak, basit Müşteri Hizmetleri şikayetlerini dinleyip God Mode panelinden "İade Et" veya "Kredi Yükle" butonlarına basmaktır.
* Kod, veritabanı veya mimari kararlara erişimleri SIFIRDIR. Şifreleri göremezler. Böylece "Bus Factor" (Kritik eleman işten ayrılınca sistemin çökmesi) riski sıfıra iner.

---

## BÖLÜM 6: KIYAMET SENARYOLARI (DOOMSDAY PROTOCOLS)

Bir CTO olarak "Google batmaz" veya "Supabase kapanmaz" diyemem. Teknolojide her an her şey kapanabilir.

### 6.1 Kıyamet Senaryosu 1: Supabase / PostgreSQL Çökerse?
* **Risk:** Supabase fiyatları fahiş artırdı veya battı. Kurumsal kasa tehlikede.
* **Protokol:** Supabase aslında açık kaynak bir PostgreSQL'dir. Veritabanının her gece saat 04:00'te otomatik tam yedeği (pg_dump) alınıp şifreli olarak farklı bir AWS S3 bucket'ında tutulacaktır. Kriz anında, DigitalOcean veya Google Cloud üzerinde boş bir PostgreSQL açılır, yedek basılır ve `.env` dosyasındaki `DATABASE_URL` değiştirilir. Kesinti: Max 2 saat. Veri kaybı: Sıfır.

### 6.2 Kıyamet Senaryosu 2: Cloudflare (Ön Yüz) Engellenirse?
* **Risk:** Bazen devletler veya ağ sağlayıcılar Cloudflare'i yavaşlatır veya engeller.
* **Protokol:** Next.js kodu herhangi bir sunucuda çalışabilen "Portable" (Taşınabilir) bir yapıdadır. Cloudflare çöktüğü an, GitHub Actions tetiklenir ve kod doğrudan Vercel veya AWS Amplify üzerindeki yedek sunuculara yönlendirilir. DNS kaydı güncellenir. Kesinti: 15 Dakika.

### 6.3 Kıyamet Senaryosu 3: Meta, WhatsApp Numaramızı Engellerse?
* **Risk:** Çok fazla otomatik mesaj atıldığı için WhatsApp Business numarası "Spam" yiyip banlandı. Müşteriler (Emlakçılar vs) botlara belge atamıyor.
* **Protokol:** Sistem sadece WhatsApp'a bağımlı tasarlanmayacaktır. Kod mimarisindeki `SendMessageService` bir arayüzdür (Interface). Kriz anında tek bir butona basılarak iletişim hattı "Telegram Bot API"sine kaydırılır ve tüm müşterilere sistem paneli üzerinden "WhatsApp hatlarımızdaki güncelleme sebebiyle geçici olarak Telegram asistanını kullanınız" şeklinde Push Notification atılır. 

---

### ANAYASANIN MÜHRÜ
Bu 6 bölümlük anayasa, 2 kişilik bir devin, yüz binlerce dolarlık bütçeleri olan devlete ve kurumlara karşı **Sıfır Maliyet, Sıfır Kesinti ve Mutlak Otonomi** ile 10 yıl boyunca hayatta kalmasının matematiksel ve felsefi kanıtıdır. 

Bunu yapabilir miyiz? Bu anayasaya sadık kaldığınız sürece; Evet, yaparız.
