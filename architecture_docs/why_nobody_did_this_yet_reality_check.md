# Acımasız Gerçeklik Kontrolü: "Eğer Bu Kadar Kolaysa Neden Kimse Yapmadı?"

Beni uyararak harika bir iş yaptınız. "Maliyeti 50 Cent, yapay zekaya okutur geçeriz" demek, tam da silikon vadisinde her gün batan "Aşırı İyimser" girişimcilerin (Tech-Bros) düştüğü ölümcül tuzaktır.

Konuyu derinlemesine araştırıp masaya yatırdığımda, piyasadaki devlerin neden hala "Veri giriş elemanları (Data Entry)" orduları çalıştırdığını ve bu işin aslında **hiç de o kadar kolay olmadığını** gördüm.

İşte bu devasa fikrin önündeki 4 Ölümcül Engel (Neden kimse yapmadı?):

## 1. Zaman Tüneli Yanılgısı (Teknoloji Daha Dün Çıktı)
"Neden kimse yapmadı?" sorusunun en büyük cevabı şudur: **Çünkü bunu yapacak teknoloji 2024'ün başına kadar yoktu.**
Geçtiğimiz yıla kadar yapay zekaların hafızası (Context Window) çok küçüktü (Örn: 8.000 token). 50 sayfalık bir PDF'i veya devasa bir Excel'i eski yapay zekaya atarsanız, 5. sayfadan sonrasını "unutuyor" veya çökiyordu. 
Devasa dosyaları tek seferde yutup analiz edebilen modeller (Gemini 1.5 Pro'nun 2 Milyon Token hafızası gibi) daha yeni piyasaya çıktı. Şirketler hala bu yeni teknolojiyi kurumsal mimarilerine entegre edecek vakti bulamadı.

## 2. "Kirli Veri" Kabusu (The Unstructured Data Nightmare)
İnşaat şirketlerinin "Google Drive" dosyaları bir yapay zeka için cehennemdir.
*   **Excel Sorunu:** İnşaat firmaları Excel'i veritabanı gibi değil, "Boyama Kitabı" gibi kullanır. Hücreleri birleştirirler, satıldı demek için hücreyi "Kırmızıya" boyarlar (AI renkleri doğrudan Excel datasından okuyamaz), aralara notlar yazarlar. Standart bir yapay zeka bu "Kirli Excel'i" okumaya kalktığında tamamen kafası karışır.
*   **PDF Sorunu:** Broşürlerdeki yazılar genellikle sanatsal, iç içe geçmiş fontlardır (OCR okuyamaz). Fiyat tabloları resim formatındadır.
*   **Neden Yapamadılar?** Çünkü bu dosyaları yapay zekaya "Al oku" demek yetmez. Arka planda o Excel'i temizleyecek, renk kodlarını metne çevirecek çok ağır bir Veri Mühendisliği (Data Pipeline) gerekir. Kimse bu pislikle uğraşmak istemediği için adam kiralayıp "Bakarak yaz" diyor.

## 3. Halüsinasyon ve Hukuki İflas Riski
Yapay zeka çok zekidir ama bazen "Halüsinasyon" görür (Yalan uydurur).
Eğer yapay zeka o PDF'i okurken 2.000.000 Sterlinlik bir villanın fiyatındaki bir sıfırı kaçırıp sistemi 200.000 Sterlin olarak güncellerse ve sizin emlakçınız da bu fiyatla müşteriye teklif atarsa ne olur? **Büyük bir marka rezaleti ve davalar silsilesi.**
İnsanlar veri girerken yavaştır, maliyetlidir ama bir sıfır hatası yapma oranları AI'ın "halüsinasyon" riskine göre daha denetlenebilirdir. Bu yüzden dev şirketler "Güvenlik" gerekçesiyle AI yutmasına geçmeye korkuyorlar.

## 4. Kültürel Direnç (PropTech Inertia)
Emlak ve inşaat sektörü, dünyada teknolojiye en kapalı (stubborn) sektörlerden biridir. 
Bir inşaat şirketinin satış müdürüne "Bize Drive linkini ver" dediğinizde, "Bizim verilerimizi çalacaklar, sistemimizi hackleyecekler" paranoyasına girerler. Verilerini bir bulut yapay zekaya (OpenAI veya Google sunucularına) göndermeyi "Güvenlik İhlali" olarak görürler.

---

### Nasıl Aşarız? (B Planımız)
Eğer biz bunu başaracaksak, bu 4 engeli de aşacak otonom bir mimari kurmalıyız:
1.  **AI'a Ham Excel Verilmez:** Excel'i doğrudan yapay zekaya atmayacağız. Önce klasik bir kodlama (Python Pandas vb.) ile Excel'deki renkleri ve bozuk hücreleri temizleyen bir "Ön Filtre" yazacağız, yapay zekaya sadece tertemiz saf veriyi vereceğiz.
2.  **İnsan Onayı Şartı (Human-in-the-Loop):** Yapay zeka projeyi saniyeler içinde yutacak ama **hemen yayına almayacak.** İnşaat şirketinin sekreterinin ekranına "Taslak" olarak düşecek. Sekreter fiyatlarda sıfır hatası olmadığını 1 dakikada göz ucuyla onaylayacak ve "Yayına Al" tuşuna basacak. (Bu sayede hukuki riski ve halüsinasyon korkusunu sıfırlayacağız).

Bu acımasız tablo ve sunduğum "Filtre + İnsan Onayı" çözümü, konuyu neden bu kadar firmanın başaramadığını açıklıyor mu?
