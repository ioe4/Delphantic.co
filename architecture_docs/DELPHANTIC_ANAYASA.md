# DELPHANTIC CO. - BÜYÜK YASA (ANAYASA)

> [!IMPORTANT]
> **NEXUS DİREKTİFİ:** Bu belge, Delphantic Co.'nun yegane teknik, mimari ve estetik otoritesidir. Tüm önceki belgeler (`recommendation.md`, `SWOT`, vb.) imha edilmiş ve bu belgenin içine asimile edilmiştir. Bu anayasadaki kurallar **esnetilemez.** Bir sorunla karşılaşıldığında çözüm sadece bu belgenin vizyonu doğrultusunda üretilecektir.

---

## 1. TEMEL İLKELER

1.  **SIFIR HALÜSİNASYON (Zero-Hallucination):** Yapay zekanın uydurma yapmasına tolerans **sıfırdır**. LLM'lerin (Claude, GPT vb.) dış dünya bilgisi kısıtlanmalı; yalnızca `pgvector` üzerinden çekilen kesin verilere ve onaylanmış JSON-Schema şablonlarına dayanarak konuşmalarına izin verilmelidir.
2.  **SIVI ZEKA (Liquid Intelligence) & ALIEN UX:** Kullanıcı arayüzünde "Yükleniyor" (Loading spinner) animasyonu kullanmak **kesinlikle yasaktır**. Arayüz, kullanıcının ne yapacağını önceden tahmin edip veriyi arka planda işleyen "Ghost State" (Hayalet Durum) mimarisi ile çalışmalı; his olarak bir web sitesi değil, telepatiyle yönetilen "uzaylı" bir işletim sistemi gibi davranmalıdır.
3.  **ANTI-MONOREPO:** Frontend (`delphantic-web`) ve Backend (`delphantic-brain`) fiziksel ve mantıksal olarak birbirinden tamamen izole edilecektir.

---

## 2. KATMAN 1-2-3 YAPAY ZEKA KASKAD MİMARİSİ

Sistem, tek bir devasa yapay zeka yerine, görevleri uzmanlaşmış alt birimlere bölen bir komuta zinciri olarak çalışır.

### KATMAN 1: SESLİ RESEPSİYON (Voice-First Gatekeeper)
*   **Görev:** Kullanıcıyla ilk teması kurmak (B2C Chatbot, Sesli Komutlar).
*   **Kulak (ASR):** **Groq Whisper** (Anlık, gecikmesiz ses tanıma).
*   **Ağız (TTS):** **OpenAI TTS-1** (Doğal seslendirme).
*   **Niyet Sınıflandırıcı:** Basit konuşmaları kendi çözer, ağır iş emirlerini Katman 2'ye iletir.

### KATMAN 2: YÖNETİCİ BEYİN (Liquid Intelligence Core)
*   **Görev:** Sistemin orkestra şefi. Alt katmanlara emir verir, veritabanını okur ve son kararları denetler.
*   **Çekirdek Zeka:** **Claude 3.5 Haiku** (Mükemmel akıl yürütme, anlık hız).
*   **Güvenlik Duvarı:** "Yetki Kontrolü" ve "Anomali Dedektörü" ile kullanıcının yetkisi olmayan verilere ulaşmasını veya zararlı prompt girmesini engeller.
*   **GÖRSEL GÜVENLİK DUVARI ('SATIŞ İPTAL' KARTI):** Katman 2, bir sözleşmeyi veya finansal işlemi onaylamadan önce, arayüzde (UI) kesinlikle **kullanıcının fiziksel onayını (tıklamasını)** gerektiren bir kırmızı/onay kartı çıkartır. AI asla otonom olarak paraya veya hukuka kendi başına dokunamaz.

### KATMAN 3: ÇOKLU-MODALİTE UZMANLARI
Katman 2'nin emirleriyle uyanan, sadece kendi işini yapıp uykuya dalan uzmanlar:
*   **Hukuk / Sözleşme Analizi:** Claude 3.5 Sonnet
*   **Finans / Veri Analizi:** GPT-4o
*   **Görsel Anlama (Vision):** GPT-4o Vision
*   **Görsel Üretim (Image):** Flux API
*   **Video Üretim:** Runway Gen-3
*   **Ses / Dublaj / Müzik:** ElevenLabs

---

## 3. İKİ VİTESLİ VERİTABANI (CQRS STRATEJİSİ)

Delphantic, anlık UI tepkileri (Liquid Intelligence) için veritabanını ikiye böler:

*   **VİTES 2 (ÇEKİRDEK DB):** **Supabase PostgreSQL.** Sistemin kalbidir. Mutlak doğru veriyi (Single Source of Truth) barındırır.
    *   **RLS (Row Level Security):** Emlakçı A, Emlakçı B'nin müşterisini veritabanı düzeyinde göremez. API hacklense bile veri sızmaz.
    *   **pgvector:** RAG (Hukuk ve sözleşme aramaları) için vektör veritabanı olarak kullanılır.
*   **VİTES 1 (GÖLGE DB):** **SQLite.** Kullanıcının cihazında (veya Edge lokasyonunda) bulunur. Supabase ile Realtime WebSockets üzerinden senkronize olur. Arayüzün (UI) anlık tepki vermesini sağlayan yapıdır.

---

## 4. ESTETİK VE MARKA KİMLİĞİ (BRAND IDENTITY)

`delphantic-brand.jsx` dosyasında belirlenen kimlik katı bir şekilde uygulanacaktır. Tailwind gibi hazır kütüphanelerin varsayılan renkleri **yasaktır**.

### Renk Paleti (Doğa ve Derinlik)
*   **Birincil (Primary):** Deep Sea (`#0D2137`), Navy (`#1A3A5C`), Ocean (`#1E5F8C`).
*   **Vurgu (Accent):** Turkuaz (`#2AABB5`), Aqua (`#4ECDC4`).
*   **Nötr (Neutral - Kumsal/Toprak):** Warm White (`#FBF7F0`), Sand (`#F5EDD8`), Beige (`#E8D9B8`), Clay (`#C4A882`), Earth (`#8B7355`).

### Tipografi ve UI Prensipleri
*   **Başlıklar (Display/Heading):** `Georgia, serif`. Prestijli, köklü ve güvenilir B2B hissiyatı verir.
*   **Sistem/Data Yazıları:** `Monospace`. Analitik, teknik ve hatasız olma hissini vurgular.
*   **Gövdeler (Body):** `Georgia, serif` (veya okunabilirliğe göre uyumlu sans-serif, ancak ana kimlik Georgia'dır).
*   **Görsel Derinlik:** Dark Mode (Koyu mod) varsayılandır veya önceliklidir (Deep Sea arka plan üzerine Sand/Turkuaz yazılar). Kartlarda yumuşak gölgeler (box-shadow) ve cam (glassmorphism) etkisinden ziyade, net, okyanus derinliğini hissettiren katmanlaşma kullanılır.

---

## 5. "EDGE & EPHEMERAL" YAPAY ZEKA OPTİMİZASYONLARI

Klasik ve pahalı mimarilerden kaçınmak için aşağıdaki akıllı yöntemler sisteme entegre edilecektir:

1.  **Görünmez CRM (Ses-Veri Mutasyonu):** Arayüzde veri girmek için onlarca input alanı kullanılmaz. Emlakçı "Ahmet'e evi gösterdim, bütçesi 850k, salı ara" diye sesli not atar; Katman 1 (Whisper) ve Katman 2 (Haiku) anında veritabanındaki 3 tabloyu (Müşteri, Finans, Takvim) arka planda günceller.
2.  **Pre-emptive RAG (Öngörülü Sözleşme Okuma):** Sözleşme sisteme yüklendiği an kullanıcı sorusunu beklemeden arka planda Claude 3.5 Haiku ile taranır. Önemli maddeler (Fesih, Kapora, Aidat) JSON olarak önbelleğe alınır. Kullanıcı soru sorduğunda vektör araması yapılmadan anında JSON'dan cevap dönülür (Sıvı Zeka).
3.  **Edge Semantic Caching:** Aynı bina hakkında sık sorulan sorular Cloudflare Workers/Redis üzerinde (Edge) tutulur. Aynı soru tekrar gelirse LLM tetiklenmez, önbellekten 10ms'de cevap verilir.
4.  **Psiko-Görsel Fiyatlama Motoru:** GPT-4o Vision, sadece odaları saymaz; "Kullanılan mermer birinci sınıf, gün ışığı harika" diyerek mülkün "Estetik Skorunu" çıkarır ve standart metrekare fiyatının üzerine "Duygusal Prim" ekleyerek emlakçıya taktik verir.
5.  **Ghost State (Hayalet Durum):** Sunucu veriyi işlerken UI'da "Yükleniyor" yerine, gerçekleşecek olası durumun yarı şeffaf (Ghost) renklerle önceden render edilmesi sağlanır.
6.  **Temporal Price Phantoms:** UI'daki bir kaydırıcı (slider) ile evin gelecekteki tahmini fiyatı görülürken, **Sıfır Halüsinasyon** kuralı gereği LLM'in uydurma yapmaması için tahminler sadece gerçek belediye/finans API verilerine (JSON-Schema) dayandırılır.

---
**SYNTACT (CODEX) DİREKTİFİ:** Bu anayasa yürürlüğe girmiştir. Kod yazarken uygulanacak tek kural seti budur.
