# Delphantic Kernal: Sesli ve Çok Boyutlu Yapay Zeka Asistanı (PWA) Uygulama Planı

Bugüne kadar yaptığımız tüm o derin araştırmaların, marka anayasalarının ve "Acımasız Dürüstlük" seanslarının meyvesini toplama vakti geldi. Artık ne yapacağımızı %100 biliyoruz.

Müşterilere (KOBİ'lere) satacağımız ürün sıradan bir web sitesi veya basit bir ChatGPT klonu değildir. Ürünümüz; emlakçıların arabada giderken sesli komutla ilan girebildiği, rayiç bedel analizi yapabilen, kendi PWA (Mobil Web) ekranımızda çalışan **"Delphantic Kernal Sesli Asistanıdır."**

Bu doküman, bu vizyonu koda dökmek için hazırladığım teknik yol haritasıdır. Lütfen inceleyin ve onay verin.

## User Review Required

> [!IMPORTANT]
> **Ses Altyapısı (Voice API) Seçimi:**
> Sesli komutları metne çevirmek (Speech-to-Text) için OpenAI **Whisper API** kullanacağız (Çok ucuz ve Türkçe/Kıbrıs aksanında bile harikadır). 
> Asistanın KOBİ'ye "Sesli" cevap vermesi için (Text-to-Speech) **OpenAI TTS** (Robotik olmayan insan sesi) kullanabiliriz. Ses işlemenin milisaniyeler (Latency) sürebileceğini ve API maliyetlerine (çok düşük de olsa) ekleneceğini bilmenizi isterim. Onaylıyor musunuz?

> [!WARNING]
> **PWA (Progressive Web App) Kararı:**
> Apple App Store veya Google Play'e komisyon ödemek ve onay süreçleriyle uğraşmak YOKTUR. Sistem bir web sitesi olarak kodlanacak ancak müşteri telefondan girdiğinde bir "Uygulama" gibi telefonuna kurulacaktır. Bu sayede WhatsApp masrafı ve Telegram imaj sorunları %100 çözülmüştür. Onaylıyor musunuz?

## Proposed Changes

Proje 3 temel aşamada inşa edilecektir:

### Phase 1: Arayüz ve PWA Temeli (The Interface)

Müşterinin göreceği tek yer olan o "Okyanus ve Kum" renklerindeki lüks sohbet ekranının kodlanması.
#### [NEW] `src/components/ChatInterface.jsx`
- Müşterinin asistanla konuşacağı ana ekran.
- Dosya/Fotoğraf yükleme butonu.
- **Ses Kaydet (Mikrofon)** butonu (Bas-Konuş mantığı).

#### [NEW] `vite.config.js` (PWA Eklentileri)
- Sitenin telefonlara bir mobil uygulama (App) gibi inmesini sağlayacak `vite-plugin-pwa` entegrasyonu.

---
### Phase 2: Zeka Motoru (The 3D Matrix Backend)

Yapay zekanın jenerikleşmesini engelleyeceğimiz o derin mühendislik kodları.
#### [NEW] `server/services/PromptEngine.js`
- **1. Boyut (Marka DNA'sı):** KOBİ'nin Nef mi, Sotheby's mi yoksa Ağaoğlu tarzı mı konuştuğunu hafızada tutan modül.
- **2. Boyut (Varlık Sınıfı):** Gelen fiyatı okuyup "Bu bir lüks villa mı yoksa ucuz bir stüdyo mu?" diye soran ayırıcı (Router).
- **3. Boyut (Rayiç/Emsal Kontrolü):** Gelen fiyatın, o bölgenin rayicine göre kelepir olup olmadığını sorgulayan (Location Intelligence) modül.

#### [NEW] `server/services/SlotFilling.js`
- Asistanın "Eksik Veri" avcısı. Eğer koçan türü veya bina yaşı eksikse, asistanın arka planda o muazzam "Tatlı dilli" soruları sormasını sağlayan tetikleyici.

---
### Phase 3: Ses (Voice) Entegrasyonu

Müşterinin "Arabada giderken" kullanabileceği eller-serbest (hands-free) özelliği.
#### [NEW] `server/api/voice-to-text.js`
- Mikrofon butonuna basılıp gönderilen ses kaydını OpenAI Whisper API'ye gönderip metne çeviren servis.
#### [NEW] `server/api/text-to-voice.js`
- AI'ın yazdığı o derin pazarlama metnini veya "Patron, koçan türü eksik" sorusunu, kaliteli bir insan sesiyle (MP3) emlakçıya geri gönderen servis.

## Verification Plan

### Automated Tests
- Ses dosyası yüklenip, sistemin bunu metne kayıpsız çevirdiğinin test edilmesi.
- "Long Beach, 40.000 Sterlin" girildiğinde sistemin otomatik olarak "Bu fiyat emsallerinin altındadır" alarmını (3D Matrix) vermesinin simülasyonu.
- PWA kurulumunun mobilde (iOS ve Android) test edilmesi.

### Manual Verification
- Sizinle birlikte sistemi cep telefonumuza "Uygulama" olarak indireceğiz.
- Siz arabanızdayken uygulamayı açıp mikrofona basarak *"Girne'de 2+1 eşyalı ev satıyorum, 60 bin sterlin, koçan eşdeğer"* diyeceksiniz.
- Asistanın bu sesi kusursuz anlayıp, size o profesyonel "Broker" dilinde metni saniyeler içinde yazıp yazdığını canlı test edeceğiz.
