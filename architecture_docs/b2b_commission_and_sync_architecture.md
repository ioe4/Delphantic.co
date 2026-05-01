# B2B Mimarisi Bölüm 3: Komisyon Oyunlaştırması ve Maliyet Optimizasyonu

Sistem Düşüncesi protokolümüz tam olarak budur! Sadece fikri değil, "Operasyonel Maliyeti (OPEX)" ve "Emlakçının Motivasyonunu" da düşünmek zorundayız.

Getirdiğiniz iki eleştiri de projenin can damarıdır. Bu sorunları "AI Maliyetlerini patlatmadan" ve "Emlakçıyı sahada aç bir kurda çevirerek" nasıl çözeceğimizi aşağıda modelledim:

## 1. Komisyon Şeffaflığı ve Oyunlaştırma (Broker Gamification)
Emlakçı, bir projeyi satmak için önce "Ne kazanacağını" görmek zorundadır. İnşaat şirketleri bazı projelerde %3, bazı zor projelerde (stok eritmek için) %8 komisyon verebilir.

*   **Mimari Çözüm:** İnşaat firması projeyi sisteme tanımlarken, yetki verdiği emlakçılar için "Komisyon Oranını" sisteme girer.
*   **Emlakçının Ekranı:** Emlakçı Delphantic uygulamasını açtığında sadece evleri görmez. Üstte yeşil ve büyük puntolarla **"Beklenen Kazanç"** yazar. 
    *Örneğin:* Asistan ona bir bildirim atar: *"Noyanlar Grand Sapphire'de 3 numaralı stüdyoyu satarsanız, bugünkü kurla anında £4.500 komisyon hak edeceksiniz. Müşteriniz Ahmet Bey'in bütçesi buna uyuyor, o projeyi ona WhatsApp'tan göndereyim mi?"*
*   Bu yaklaşım, emlakçıyı sadece bir kullanıcı olmaktan çıkarır; onu motive eden, parasını hesaplayan bir "Finansal Asistan" yaratır.

## 2. Maliyet Krizi: Google Drive Senkronizasyonu (Sync Architecture)
Google Drive'daki PDF'leri, yüzlerce sayfalık Excel tablolarını ve fotoğrafları yapay zekaya günde 10 kere okutursak, "Token" maliyetlerinden dolayı yazılımımız ilk ayda iflas eder.

Bunu çözmek için mimarimizi "Ağır İş" ve "Hafif İş" olarak ikiye böleceğiz:

### A. Ağır İş (AI Ingestion - Sadece 1 Kere Çalışır)
*   İnşaat şirketi projeyi sisteme İLK KEZ yüklediğinde, yapay zeka (LLM ve Vision modelleri) PDF'leri okur, fotoğrafları analiz eder, pazarlama metinlerini ve evin özelliklerini çıkarır. 
*   **Maliyet:** Yüksektir (Örn: 1 Dolar), ancak **sadece projenin ilk açılış gününde 1 kez ödenir.**

### B. Hafif İş (Real-time Syncing - AI Yok, Sadece Script)
Evin satılıp satılmadığını (Müsaitlik Durumunu) yapay zekaya sormak, saati öğrenmek için profesöre gitmek gibidir; çok pahalı ve gereksizdir.
*   İnşaat şirketlerinin stok tuttuğu o meşhur "Google Sheets (Excel)" dosyaları vardır. 
*   Bizim sistemimiz yapay zekayı uyandırmadan, sadece **Google Sheets API** ile o Excel tablosuna saniyede bir bağlanır (Çok ucuz, hatta bedavadır).
*   Sistem sadece o Excel'deki bir hücreyi okur. Eğer hücre "Müsait" (Yeşil) iken "Satıldı" (Kırmızı) olursa; sistemdeki emlakçının ekranında o daire anında kararır ve üzerine "Satıldı" damgası vurulur.
*   **Sonuç:** Sizin sistemde olmayan diğer (dışarıdaki) emlakçılar inşaat firmasının merkezinden evi satsalar bile; inşaat firmasının sekreteri kendi Google Excel'ini "Satıldı" yaptığı milisaniye, bizim Delphantic sistemindeki tüm yetkili emlakçıların ekranı da güncellenir. 

Böylece ne API maliyetlerimiz patlar, ne de sizin emlakçılarınız müşterilerine "Satılmış evi satmaya çalışarak" rezil olur.
