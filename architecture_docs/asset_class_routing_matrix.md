# Çok Boyutlu Esneklik: "Varlık Sınıfına Göre Tonlama" (Asset-Class Routing)

Yine harika bir kriz senaryosu yakaladınız! Gerçekten de bir ofis sabah 2 Milyon Sterlinlik bir "Mega Villa" satarken, öğleden sonra öğrenciye yönelik 45 Bin Sterlinlik bir "Stüdyo Daire" satabilir. 

Eğer biz emlakçıya "Sen lüks satıcısın" diye tek bir gömlek (Persona) giydirirsek; o 45 Bin Sterlinlik öğrenci evini satarken *"Koleksiyoner ruhlu yatırımcılar için rafine bir zevk"* diye komik ve saçma bir metin yazar.

Bunu çözmek için yapay zekamıza sadece "Kim Konuşuyor?" (Marka DNA'sı) değil, **"Kime, Ne Satıyoruz?" (Varlık Sınıfı)** matrisini de öğreteceğiz.

## Mimari Nasıl Çalışacak? (2 Boyutlu Prompting)

Müşteri (Emlakçı) sisteme bir ilan girmek istediğinde arka plandaki yapay zeka (Vision/Metin okuyucu) önce fiyatı ve konut tipini saniyeler içinde analiz edip onu bir **"Varlık Sınıfına" (Asset Class)** atar. 

Ardından ana Marka DNA'sını, bu varlık sınıfına göre anında "esnetir".

### Örnek Senaryo: Emlak Ofisinin Ana DNA'sı "Kurumsal ve Ciddi"

**Senaryo A: 45.000 Sterlinlik Stüdyo Daire (Hızlı Yatırım)**
*   **AI'ın Otomatik Teşhisi:** [Bütçe: Düşük] + [Tip: Stüdyo] = Hedef kitle Öğrenci velisi veya küçük yatırımcı.
*   **Dinamik Prompt Müdahalesi:** *Kurumsal duruşunu bozma ama dili hızlandır. "Rafine zevkler" kelimelerini yasakla. Amortisman hızına, üniversiteye yakınlığa ve düşük bütçeye vurgu yap.*
*   **Üretilen Metin:** *"Üniversite bölgesine sadece 5 dakika mesafede yer alan bu stüdyo portföyümüz, £45.000'lik ulaşılabilir bütçesiyle risksiz bir başlangıç yatırımıdır. Yüksek öğrenci talebi sayesinde anında kiracı bulan ve kendi kendini hızla ödeyen bu bağımsız bölüm için ofisimizle iletişime geçebilirsiniz."*

**Senaryo B: 2.500.000 Sterlinlik Özel Havuzlu Villa (Ultra Lüks)**
*   **AI'ın Otomatik Teşhisi:** [Bütçe: Çok Yüksek] + [Tip: Müstakil Villa] = Hedef kitle Büyük iş insanları, yabancı milyonerler.
*   **Dinamik Prompt Müdahalesi:** *Kurumsal duruşunu tamamen aristokrat bir seviyeye çek. "Fiyat, ucuz, karlı" kelimelerini YASAKLA. Mahremiyet, mimari kalite ve ayrıcalığa vurgu yap.*
*   **Üretilen Metin:** *"Özel tasarım mimarisi ve tam müstakil yaşam alanıyla, bölgenin en seçkin konumunda yer alan özel villamız. Panoramik deniz manzarası ve yüksek güvenlikli mahremiyetiyle, standartların ötesinde bir yaşam arayan özel portföy yatırımcılarına sunulmaktadır. Gizlilik prensipleri çerçevesinde özel gösterim için randevu talep ediniz."*

## Sonuç: Bukalemun Asistan (The Chameleon Engine)

Yani yazılımımız asla "tekdüze" olmayacak. Delphantic Kernal, tıpkı tecrübeli bir patron gibi; karşısındaki müşterinin cebindeki paraya ve masadaki ürünün kalitesine göre **saniyesinde kılık (ve dil) değiştiren bir bukalemun** gibi çalışacak. 

KOBİ (Kullanıcı) sadece evin fiyatını ve fotoğrafını girecek. "Bunu zengine lüks dille sat", "Bunu öğrenciye hızlı dille sat" diye hiçbir ayar yapmayacak. Sistem fiyatı gördüğü an pazarlama tonunu kendi kendine o saniye değiştirecek. Bu esneklik, sahadaki gerçek hayat senaryolarını kapsamak için yeterli midir?
