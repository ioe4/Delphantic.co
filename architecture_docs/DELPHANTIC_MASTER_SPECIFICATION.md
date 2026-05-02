# DELPHANTIC MASTER SPECIFICATION (TEKNİK ŞARTNAME VE KURULUM REHBERİ)

> [!IMPORTANT]
> **EKİBİN DİKKATİNE:** Bu belge, kurulum ekibinin ve sistem yöneticilerinin "Sistem çöktüğünde" veya "Sıfırdan sunucu kurulduğunda" bakacağı tek teknik rehberdir. Stack Overflow'da çözüm aramayın. Tüm ezber bozan mimari kararlar ve kriz çözümleri bu belgenin içindedir.

Bu belge, Büyük Yasa'nın (Magna Carta) teknik bir koda ve klasör yapısına dökülmüş halidir. "Herkes böyle yapıyor" tuzağına (Generic Trap) düşülmeden, benzersiz bir vizyonla tasarlanmıştır.

---

## 1. KLASÖR YAPISI VE REPO İZOLASYONU (ANTI-MONOREPO STRATEJİSİ)

Herkesin yaptığı hata: Frontend ve Backend'i aynı monorepoya koyup derleme sürelerini 30 dakikaya çıkarmaktır. Delphantic'te sistem tamamen ikiye bölünmüştür.

### A. `delphantic-web` (Next.js 15+ Vitrini)
Kurulum Komutu: `npx create-next-app@latest delphantic-web --turbo`
**Klasör Hiyerarşisi:**
```text
delphantic-web/
├── src/
│   ├── app/
│   │   ├── (public)/          # Yatırımcı Vitrini (Açık Erişim)
│   │   ├── (auth)/            # Supabase Auth Login Ekranı
│   │   └── (god-mode)/        # Tanrı Modu Kontrol Paneli
│   ├── components/
│   │   ├── ui/                # Sadece Kendi Yazdığımız No-UI Bileşenler (Kütüphane yasak)
│   │   └── liquid/            # Canvas/WebGL Su Fiziği Motoru (concept_fluid.js'in React hali)
│   ├── lib/
│   │   └── supabase/          # Sadece okuma/yazma yapan Supabase Client
│   └── styles/
│       └── globals.css        # Sadece 5 Renk (Toprak, Bej, Derin Deniz, Turkuaz)
```

### B. `delphantic-brain` (Python FastAPI Otonomisi)
**Klasör Hiyerarşisi:**
```text
delphantic-brain/
├── api/
│   ├── routes/
│   │   ├── whatsapp_webhook.py  # WhatsApp'tan gelen veriyi yutar
│   │   └── drive_ingestion.py   # PDF Sözleşmelerini okur
├── core/
│   ├── llm_router.py            # LiteLLM (Groq Llama-3 vs OpenAI GPT-4o yönlendiricisi)
│   └── ffmpeg_engine.py         # Shotstack İPTALİ - Videoları kendi renderlar
├── worker/
│   └── celery_tasks.py          # Cloud Tasks / Asenkron İşlemler
├── Dockerfile                   # Cloud Run için Konteyner Şablonu
└── requirements.txt
```

---

## 2. VERİTABANI: SUPABASE (POSTGRESQL) KESİN KURALLARI

Herkes veritabanını açık bırakıp API tarafında güvenlik yazar. Delphantic, güvenliği doğrudan veritabanının çekirdeğine (Row Level Security - RLS) gömer.

### 2.1 Emlak İzolasyonu (RLS SQL Kodu)
Emlakçı A, Emlakçı B'nin müşterilerini teknik olarak göremez. API hacklense bile Postgres veriyi vermez.
```sql
-- Tablo oluşturma
CREATE TABLE real_estate_leads (
    id UUID PRIMARY KEY,
    realtor_id UUID REFERENCES auth.users(id),
    client_name TEXT,
    budget DECIMAL
);

-- Satır Seviyesi Güvenlik (RLS) Aktivasyonu
ALTER TABLE real_estate_leads ENABLE ROW LEVEL SECURITY;

-- Kural: Sadece kendi ID'sine sahip emlakçı veriyi okuyabilir
CREATE POLICY "Emlakçılar sadece kendi müşterisini görür" 
ON real_estate_leads 
FOR SELECT 
USING (auth.uid() = realtor_id);
```

### 2.2 Veri Göçü (Migration) Kuralı
Canlı sistemde veritabanına asla manuel sütun eklenmeyecektir. Prisma (`npx prisma migrate deploy`) ile kod üzerinden versiyonlanarak değişiklik yapılacaktır.

---

## 3. MULTİMODAL FABRİKA: FFMPEG VE LITELLM (ANTI-GENERIC MİMARİ)

Rakipler videolar için dışarıya dakika başı para öder (Shotstack). Biz kendi videomuzu renderlarız.

### 3.1 Ücretsiz Video Render Mimarisi (FFmpeg Engine)
`delphantic-brain/core/ffmpeg_engine.py` içindeki mantık:
1.  Supabase'den 3 villa fotoğrafını çek.
2.  Llama-3 Vision ile en iyi fotoğrafları tespit et.
3.  Python `subprocess` üzerinden Linux'un yerleşik `FFmpeg` motoruna komut yolla.
4.  Geçiş efektli (crossfade) ve metinli Reels videosunu `.mp4` olarak üret.
5.  Videoyu Cloudflare CDN destekli Supabase Storage'a geri yükle.
*Hata Çözümü:* Video üretimi hata verirse sunucuda `ffmpeg` kurulu olup olmadığını (Dockerfile içindeki `RUN apt-get install -y ffmpeg` komutunu) kontrol edin.

### 3.2 Agnostik LLM Yönlendirmesi
Yapay zeka için doğrudan `import openai` KULLANILMAYACAKTIR.
```python
# YANLIŞ VE MALİYETLİ KULLANIM (Generic Trap)
# response = openai.ChatCompletion.create(model="gpt-4o", prompt="Ev fotoğrafındaki detaylar nedir?")

# DELPHANTIC DOĞRU KULLANIM (LiteLLM Router)
from litellm import completion

def analyze_intent(text, complexity):
    if complexity == "low":
        # Basit işleri Groq Llama-3'e (Sıfıra yakın maliyet) at.
        return completion(model="groq/llama3-8b-8192", messages=[...])
    else:
        # Karmaşık hukuki belgeleri GPT-4o'ya at.
        return completion(model="gpt-4o", messages=[...])
```

---

## 4. DEVOPS, YAYINA ALMA VE KRİZ YÖNETİMİ ÇÖZÜMLERİ

Kurulum ekibinin "Sistem çöktü ne yapalım?" diyeceği anlarda bakılacak ilk reçeteler.

### 4.1 GitHub Actions Otomasyonu (Sıfır Dokunuş)
Next.js kodu Push edildiğinde Vercel Egress tuzaklarına düşmemek için doğrudan **Cloudflare Pages**'e derlenir.
```yaml
# .github/workflows/deploy-web.yml
name: Deploy Delphantic Web to Cloudflare
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          projectName: delphantic-web
          directory: out
```

### 4.2 Hata Çözüm Reçeteleri (Troubleshooting)

**SORUN 1:** "Emlakçı PDF yükledi ama sistem 1 dakikadır yanıt vermiyor (Timeout)."
**ÇÖZÜMÜ:** Frontend doğrudan Python API'sini bekliyor. Bu yanlıştır. Python API'si belgeyi aldığı an HTTP 202 (Accepted) dönmeli, işi arka planda `Google Cloud Tasks` kuyruğuna atmalıdır. Asenkron işlendiğinden emin olun.

**SORUN 2:** "Sistem Supabase'e bağlanamıyor, veriler gelmiyor."
**ÇÖZÜMÜ:** Supabase Pooler (PgBouncer) bağlantısını kontrol edin. `.env` dosyasındaki `DATABASE_URL` 5432 (Direct) portunu değil, 6543 (Pooler/Transaction) portunu kullanmalıdır. Aksi takdirde Python 500 bağlantıyı saniyeler içinde tüketir.

**SORUN 3:** "OpenAI API kilitlendi, sistem durdu."
**ÇÖZÜMÜ:** LiteLLM config dosyasından `FALLBACK_MODEL="anthropic/claude-3-5-sonnet"` aktif edilir. Kodda hiçbir değişiklik yapmaya gerek yoktur. Sistem saniyeler içinde Anthropic'e kayar.

**SORUN 4:** "Yeni yüklenen kod tüm arayüzü bozdu."
**ÇÖZÜMÜ:** Yeni kod yazmaya çalışmayın. Cloudflare Pages paneline veya Google Cloud Run arayüzüne girin. Deployment geçmişinden bir önceki versiyona tıklayıp "Rollback (Geri Al)" tuşuna basın. Sistem 5 saniyede eski haline döner, hatayı lokalde çözersiniz.

---

**KURULUM EKİBİNE SON SÖZ:** 
Eğer bir sorunun cevabı bu dökümanda veya Magna Carta'da yoksa, bu problemi çözerken jenerik (herkesin yaptığı) yolu seçmeyin. Sıfır maliyet ve sonsuz sürdürülebilirlik prensibine uygun kendi inovasyonunuzu yaratıp bu dökümana ekleyin.
