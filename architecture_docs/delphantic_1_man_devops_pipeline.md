# DELPHANTIC CO. - 1 KİŞİLİK ORDU İÇİN DEVOPS VE CI/CD BORU HATTI (PIPELINE)

Haklısınız. "Supabase kullanacağız" demekle sistem kurulmaz. Eğer arkada her push atıldığında kodu test eden, sunucuyu ayağa kaldıran, çökerse eski versiyona dönen o demir ağları (DevOps) kurmazsak; siz kod yazmak yerine gününüzün 10 saatini sunucu resetleyip log okuyarak geçirirsiniz. 

1 kişilik bir teknik ekibin (Siz + AI) devasa bir yapıyı yönetebilmesinin tek yolu, insan eli değmeyen, acımasız bir CI/CD (Sürekli Entegrasyon / Sürekli Dağıtım) boru hattıdır.

İşte Delphantic'in gerçek DevOps mimarisi:

---

## 1. YEREL GELİŞTİRME ORTAMI (Local Dev - Tek Tuşla Şantiye)
Eğer sisteminiz kendi bilgisayarınızda (localhost) 5 ayrı terminal açarak çalışıyorsa, zaten kaybettiniz demektir.
- **Araç:** `Docker Compose`
- **Kural:** Sisteminiz `docker-compose up` yazıldığında;
  - Supabase'in lokal versiyonunu,
  - Next.js (Web App) sunucusunu,
  - Python (FastAPI + AI) sunucusunu,
  - Ve lokal mesaj kuyruğunu (Task Emulator) aynı anda ayağa kaldırmak zorundadır.
- Bilgisayarınızda prodüksiyon ortamının %100 bir simülasyonu çalışmazsa, canlı sunucularda her zaman sürprizlerle (Works on my machine - "Benim bilgisayarda çalışıyordu" sendromu) karşılaşırsınız.

## 2. GİT MİMARİSİ VE KOD DEPOLARI (Repositories)
Monorepo (Her şeyin tek depoda olması) 1 kişilik ekip için ölümcüldür. Bir taraftaki hata diğer tarafın derlemesini bozar. 
**Karar: Ayrıştırılmış Depolar (Polyrepo)**
- **Repo 1:** `delphantic-web` (Sadece Next.js ve Arayüz kodu)
- **Repo 2:** `delphantic-brain` (Sadece Python AI ve API mikro servisleri)
- Böylece UI tarafında yapılan basit bir CSS değişikliği, arkadaki devasa Python motorunu yeniden derlemeye ve sunucuları meşgul etmeye zorlamaz.

## 3. CI/CD: İNSAN ELİ DEĞMEYEN OTOMATİK DAĞITIM (GitHub Actions)
Kodu yazdınız ve GitHub'a `git push origin main` dediniz. Siz kahvenizi yudumlarken arka planda şunlar olmak zorundadır:

### A. Next.js (Web App) Dağıtım Hattı
1. **Test:** GitHub Actions uyanır. `npm run lint` ve `npm test` çalıştırır. (Hata varsa dağıtımı durdurur ve size mail atar).
2. **Build:** Kodu derler (Turbopack).
3. **Deploy:** Kodu otomatik olarak Cloudflare Pages (veya Vercel) sunucularına aktarır. Sistem kapanmaz (Zero-downtime deploy).

### B. Python (Liquid Brain) Dağıtım Hattı
1. **Test:** PyTest çalışır. Önemli AI veri yutma algoritmalarının hala doğru JSON dönüp dönmediği sahte verilerle test edilir.
2. **Konteynerizasyon:** Docker Image'ı oluşturulur (Örn: `delphantic-brain:v1.2`).
3. **Kayıt (Registry):** Bu image, Google Cloud Artifact Registry'ye yüklenir.
4. **Sunucuya Basma:** Google Cloud Run'a "Yeni imaj geldi, eski sunucuları yavaşça kapatıp bunu devreye al" komutu (Rolling Update) gönderilir. Sistem 1 saniye bile kapalı kalmaz.

## 4. GİZLİ ANAHTAR VE ÇEVRE BİRİMİ YÖNETİMİ (Secrets Management)
Next.js, Python, Supabase, OpenAI, WhatsApp API... Elinizde en az 20 tane kritik API şifresi (Secret) olacak.
- **Felaket Senaryosu:** Şifreleri `.env` dosyalarına elinizle yazıp sunuculara tek tek kopyalamak.
- **DevOps Çözümü:** **Google Secret Manager.**
- Tüm şifreler sadece Google Secret Manager'da durur. Cloud Run ve GitHub Actions derleme sırasında "Şifre 1 nedir?" diye Google'a sorar ve hafızasına alır. Böylece bir şifre çalındığında veya değiştirildiğinde, tek bir yerden güncellersiniz ve tüm sistem otomatik olarak o şifreyi okur.

## 5. İZLEME, KÖRLÜK VE ERKEN UYARI SİSTEMİ (Observability)
Emlakçı sisteme girdi, fotoğrafı yükledi ama sistem "Hata" verdi. Sizin ruhunuz bile duymaz, müşteri WhatsApp'tan küfredene kadar hatayı göremezsiniz.
- **Araç:** **Sentry** (veya eşdeğeri LogRocket/Datadog).
- **Kural:** Sistemde Next.js veya Python fark etmeksizin **HERHANGİ BİR** kod hata verdiğinde (Örn: "GPT-4 limit doldu", "PostgreSQL bağlantı hatası"), bu hata anında Sentry paneline düşmeli ve Telegram/WhatsApp'ınıza bir acil durum bildirimi gelmelidir.
- Hangi kullanıcının, hangi saniyede, hangi dosyayı yüklerken hangi satırdaki kodun patladığını **müşteri sizi aramadan önce** görüp düzeltmiş olmalısınız.

## 6. GERİYE DÖNÜŞ (Rollback) STRATEJİSİ
Cuma akşamı kod pushladınız, testleri geçti ama canlı sistemde her şey kilitlendi. 
- **Eski Usül:** Yeni kod yazıp düzeltmeye çalışmak (Saatler sürer).
- **DevOps Usulü:** Google Cloud Run ve Cloudflare Pages üzerinde **"Tek Tıkla Rollback"**. 
- GitHub Actions'dan veya panelden "Bir önceki versiyona dön" butonuna bastığınızda, sistem 5 saniye içinde eski konteyneri devreye alır. Siz hatayı bilgisayarınızda (localhost) rahatça çözerken, şirket operasyonları kesintisiz devam eder.

---

### SONUÇ: OTO-PİLOT
1 Kişilik ekibin bir "Ordu" gibi çalışmasını sağlayan şey zeka değil, bu yukarıdaki demir boru hatlarıdır. 
Bu DevOps mimarisi kurulmadan bir satır bile ürün kodu yazılmaz. Şimdi bir DevOps altyapısı kurmuş olduk mu? Yoksa bu kuleyi de yıkmak ister misiniz?
