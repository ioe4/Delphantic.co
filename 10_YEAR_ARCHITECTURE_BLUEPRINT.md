# Delphantic Co. 10 Yıllık Hibrit Sistem Mimarisi

Bu doküman, Delphantic Co.'nun otonom B2B yazılımlarını (Kernal ERP, HR, Smart Legal) 10 yıl boyunca esnek, sarsılmaz ve hantallaşmadan ayakta tutacak kesinleşmiş "Parçalanmış (Decoupled) Mimari" planıdır.

> [!IMPORTANT]
> **Durum: ONAYLANDI.** 
> Eski sistemlerde hiçbir veri bulunmadığı (veri göçü olmadığı) teyit edilmiştir. Bu sebeple "MVP'yi Firebase'de çıkaralım" gibi geçici çözümlere hiç girilmeyecek, Kurumsal Kasa (PostgreSQL) 1. Günden itibaren ana omurga olarak kurulacaktır.

---

## Kesinleşen Mimari Katmanları (Liquid Architecture)

Sistemi 4 ana bloğa (kaleye) böldük. Hiçbiri diğerine göbekten bağlı değil. Biri çökerse veya güncellenirse diğerleri etkilenmez.

### 1. FRONTEND KATMANI: "Aptal Vitrin" (The Dumb UI)
**Teknoloji:** Next.js 15+ (App Router), React, Vanilla CSS (veya Tailwind).
**Görevi:** Sadece görsel (Liquid Intelligence konsepti), kullanıcı tıklamaları ve veriyi ekrana çizmek.
**Kural:** İçinde ASLA karmaşık hesaplama, veritabanı sorgusu veya yapay zeka algoritması barındırmaz. Sadece arkadan gelen veriyi "şık bir kibre" büründürüp sunar.
**Hosting:** Vercel veya Google Cloud Run.

### 2. CORE DATABASE: "Kurumsal Kasa" (The Vault) - (1. GÜNDEN İTİBAREN AKTİF)
**Teknoloji:** PostgreSQL (Google Cloud SQL veya Supabase).
**Görevi:** ERP, Muhasebe, İnsan Kaynakları hiyerarşisi, Faturalar ve Sözleşmelerin *tek ve mutlak* kaynağı.
**Neden?** Karmaşık raporlar, finansal tablolar ve veri bütünlüğü (ACID uyumluluğu) sadece ilişkisel (Relational/SQL) veritabanlarında güvenle saklanır.

### 3. REAL-TIME & AUTH: "Sinir Sistemi" (The Nerve System)
**Teknoloji:** Firebase (Auth & Firestore).
**Görevi:**
- Sadece Kullanıcı Girişi (Authentication).
- Canlı sohbetler (Tickets), bildirimler (Push Notifications).
- Next.js'e verinin değiştiğini anında haber veren Web-Socket katmanı.
**Kural:** Firestore'da asla kritik finansal kayıt tutulmaz. Sadece geçici/önbellek veri ve anlık iletişim için kullanılır.

### 4. AI & OTONOM MOTOR: "Sıvı Zeka" (The Liquid Brain)
**Teknoloji:** Python (FastAPI), LangChain/LiteLLM.
**Görevi:**
- Google Drive, WhatsApp veya Telegram'dan gelen veriyi yutmak (Ingestion).
- Agnostik (Bağımsız) bir yapı ile arka planda veriyi işlemek. (Örn: Model değiştirmek istenirse, tek satır kodla OpenAI'dan Gemini'ye geçilir).
- İşlenen veriyi analiz edip **Core Database (PostgreSQL)** içine yazmak.
- Yazma işlemi bitince **Firebase'e** "İşlem bitti, kullanıcıya bildirim yolla" sinyali çakmak.
**Hosting:** Bağımsız bir Google Cloud Run servisi.

---

## Uygulama Haritası (Diğer Bilgisayar İçin Talimatlar)

Şantiyeye (Next.js bilgisayarına) geçtiğinizde Antigravity'ye verilecek ilk görevler:

1. **Repo Kurulumu:** `npx create-next-app@latest --turbo` ile frontend çatısını kurmak.
2. **Kasa Kurulumu:** PostgreSQL (Supabase veya Cloud SQL) veritabanı şemalarını (ERP, HR için) sıfırdan modellemek.
3. **Zeka Kurulumu:** Python/FastAPI mikro servisini ayağa kaldırıp ilk "Drive Veri Yutma" denemesini yapmak.
4. **Entegrasyon:** Firebase Auth'u kurup, Python'dan gelen bildirimleri Next.js vitrinine yansıtmak.

Yukarıdaki mimari taslak, Delphantic'i 10 yıl boyunca her türlü teknolojik devrime karşı "Sıvı ve Uyarlanabilir" tutacaktır. Sistem tasarımı kilitlenmiştir.
