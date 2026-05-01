# Jenerikliği Kırmak Bölüm 2: "Kültürel ve Yerel (TR/KKTC) Dil Enjeksiyonu"

Harika bir "Dive Deeper" (Derinlemesine İnceleme) talebi. Metni robotik sıfatlardan arındırdık ama metin bu sefer de "Wikipedia makalesi" veya "İngilizce'den çok iyi çevrilmiş bir metin" gibi durdu. 

İşte o eksik olan şey **"Lokal Piyasa Ritmi ve Jargonudur"**. Sokaktaki veya plazadaki gerçek Türk / Kıbrıslı yatırımcı, yapay zekanın kullandığı o soğuk gramerle değil, piyasanın kendi dinamik kelimeleriyle ikna olur. 

Bunu sağlamak için arka plandaki mühendisliğimize "Yerel Dil Sözlüğü (Local Lexicon)" eklemeliyiz.

## 1. AI Dili vs. Gerçek Piyasa Dili (Farklar)

Yapay Zeka (AI) kelimeleri doğru çevirir ama "Piyasa Ağzını" bilmez. Bizim sisteme zorla öğretmeniz gereken asıl pazarlama dili şudur:

| Yapay Zeka'nın Tercihi (Jenerik Çeviri) | TR / KKTC Gerçek Uzman Jargonu |
| :--- | :--- |
| "Yüksek getiri potansiyeli" | **"Amortismanı yüksek", "Kupon yer", "Kira çarpanı düşük"** |
| "Bu mülk deniz kenarında konumlanmıştır" | **"Denize sıfır", "Kapanmaz manzaralı"** |
| "Mülkiyet belgesi (Title Deed)" | **KKTC için: "Eşdeğer Koçan", "Türk Koçanlı" / TR için: "İskanlı, Kat Mülkiyetli"** |
| "100 metrekare alan" | **KKTC için: "Evlek/Ayak hesabı" eklentisi veya net "Kapalı Alan" vurgusu** |
| "Fiyatta pazarlık payı vardır" | **"Pazarlığa açık", "Ciddi alıcıyla görüşülür"** |

## 2. KKTC ve TR Pazarına Özel "Persona" Mimarisi

Daha özgün ve doğru pazarlama dilini yakalamak için AI'a sadece kurallar değil, **bölgesel bir "Persona" (Karakter)** yükleyeceğiz. Emlakçı konumunu "Kıbrıs" olarak seçtiğinde AI arka planda şu karakteri giyecek:

*   **Sterlin Ekonomisi Vurgusu:** KKTC'de hayat Sterlin üzerinden döner. AI'a *"Asla TL üzerinden konuşma, kira getirisini her zaman GBP (£) olarak belirt ve İngiliz yatırımcı standartlarında yaz"* kuralını koyacağız.
*   **Ada Ritmi ve Güven:** Türkiye'de dil daha "Hızlı ve Agresif" iken (Hemen Alın, Kaçırmayın!), Kıbrıs pazarında dil "Güven, Oturum İzni (Residency) ve Rahatlık" üzerine kuruludur. AI bunu bilecek.
*   **Hukuki Terimler:** Türkiye'de "Tapu işlemleri", KKTC'de "Koçan devri ve sözleşme kayıt işlemleri". 

## 3. "Few-Shot" Yöntemiyle Ritmi Öğretmek

Yapay zekaya "Kıbrıslı gibi yaz" dersek gidip şiveli ("Napan" vs) komik bir şey yazabilir. Bizim istediğimiz bu değil; biz şive değil, **"Lokal Profesyonel Ritim"** istiyoruz.

Bunu sağlamanın tek yolu **Örnekleme Dayatmasıdır (Few-Shot Prompting)**. Veritabanımıza, sektörün en iyi gayrimenkul danışmanlarının (örneğin sizin) bizzat yazdığı **10 adet Altın Standart** metin koyacağız.

Sistem promptu şu şekilde değişecek:
> *"Sen KKTC'de çalışan bir uzmansın. Kesinlikle AI gibi, 'Konumlanan bu mülk' gibi yapay çeviri cümleleri kurma. Aşağıdaki 'Gerçek Uzman' örneklerine bak. Onların kullandığı 'Eşdeğer Koçan', 'Kapanmaz Manzara', 'Krediye Uygun' gibi piyasa jargonlarını kullan. Cümle ritmini tamamen bu örneklere benzet."*

## 4. Yeni Nesil (Lokalize Edilmiş) Test Çıktısı

Eğer bu yerel jargonu ve ritmi sisteme entegre edersek, aynı 2+1 ev için AI'ın yazacağı yeni, daha "Özgün ve Piyasaya Hakim" metin şu seviyeye çıkacaktır:

> *"Alsancak’ta, denize yürüyüş mesafesinde (200m) yatırımlık 2+1 daire. Eşdeğer koçanlı. Aylık £1500 düzenli kira getirisiyle, amortismanını 12 yılda tamamlıyor. Koçan devri ve adadaki hukuki süreç yönetimi için bize WhatsApp’tan ulaşabilirsiniz."*

**Farkı Hissettiniz mi?** 
"Konumlanan bu daire" gibi soğuk ve çeviri kokan yapay bir dil yerine; doğrudan "yatırımlık", "eşdeğer koçanlı", "amortismanını tamamlıyor" gibi tam olarak o bölgenin yatırımcısının duymak istediği **"Lokal Piyasa Ritmi"** yakalanmış oldu. Sizi anlıyorum, bu ince ayar (Fine-Tuning) süreci, yazılımımızın sıradan bir bottan "Bölge Uzmanına" dönüşeceği asıl yerdir.
