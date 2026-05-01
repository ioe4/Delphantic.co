# Büyük Veri Zorluğu: Rayiç Bedel Nasıl Hesaplanacak? (AVM Mimarisi)

Çok büyük ve tam bir mühendis/girişimci sorusu. Bir evin fiyatını belirleyen 50 farklı değişken vardır (katı, cephesi, bina yaşı, sitede güvenlik olup olmaması, manzarası, aidatı...). Klasik bir yazılımla bunları "Eğer bina yaşı 5 ise fiyattan %10 düş" gibi sabit kurallarla (algoritma) hesaplamaya kalkarsak sistem ilk günden çöker, çünkü piyasa böyle çalışmaz.

Zillow'un "Zestimate" veya Türkiye'deki "Endeksa"nın kullandığı bu sistemlere **AVM (Automated Valuation Model)** denir. Delphantic Kernal olarak bu devasa veri sorununu "Eski usül algoritmalarla" değil, **Yapay Zeka Vektör Benzerliği (Vector Similarity)** ile çok akıllıca bir yoldan çözeceğiz.

## 1. Veri Nereden Gelecek? (Data Sourcing)
Rayiç bedeli hesaplamak için elimizde veri olması şarttır. Veriyi iki kanaldan besleriz:
1.  **Dış Kaynak API'leri (Kolay Yol):** Türkiye pazarı için **Endeksa** gibi devlerin sunduğu "Bölge Değerleme API'leri" vardır. Sistemimiz adresi ve evin özelliklerini Endeksa'ya gönderir, oradan resmi rayiç bedeli saniyeler içinde çeker.
2.  **Platformun Kendi Havuzu (Kıbrıs gibi Kapalı Pazarlar İçin):** KKTC'de Endeksa gibi bir veri sağlayıcı yoktur. Burada "Wisdom of the Crowd" (Kolektif Zeka) devreye girer. Bizim yazılımımızı kullanan 100 farklı emlakçının sisteme girdiği tüm veriler, isimler gizlenerek (Anonimleştirilerek) ortak bir "Delphantic Veri Havuzuna" akar. 

## 2. Karmaşık Algoritma Yerine "Vektörel Benzerlik" (RAG Mimarisi)
Evin sitede olması, yaşı veya havuzu gibi 50 farklı detayı klasik bir matematik formülüyle hesaplayamayız. Bunun yerine veritabanımız (Vector DB), evleri "Anlamlarına" göre üç boyutlu bir uzaya yerleştirir.

**Nasıl Çalışır?**
*   Emlakçı ilanı girer: *"Long Beach, 2+1, 5 yıllık bina, 7/24 Güvenlikli Site İçi, Ortak Havuzlu, 40.000 Sterlin."*
*   Sistemimiz matematik hesabı yapmaz. Veritabanına şunu sorar: *"Bana bu evle KELİMESİ KELİMESİNE en çok örtüşen (En Benzer Vektöre Sahip) son 6 ayda girilmiş 20 ilanı getir."*
*   Veritabanı anında o bölgedeki "5 yıllık, güvenlikli, havuzlu 2+1" olan 20 emsal ilanı bulur. (Çünkü havuzsuz veya eski evler vektörel olarak uzağa düşer, eşleşmez).
*   AI, eşleşen bu 20 kusursuz emsalin fiyatlarının ortalamasını alır (Örn: 70.000 Sterlin).
*   İşte şimdi emlakçının girdiği 40.000 Sterlinlik fiyatın **"Tam Emsallerine Göre"** bir arbitraj (kelepir) fırsatı olduğunu kesin olarak ispatlamış oluruz.

## Sonuç: Manuel Matematik Yok, AI Eşleştirmesi Var
Yani bina yaşına, manzaraya veya site özelliklerine "puan verip" fiyat hesaplayan ilkel bir kod yazmayacağız. Yapay zekanın "Benzerlik Bulma" gücünü kullanarak, girilen evin özelliklerine **tıpatıp benzeyen** diğer evleri bulup onların ortalama fiyatını (Rayiç) baz alacağız. 

Bu sayede algoritma yazmakla aylarca uğraşmayız; veri havuzumuz doldukça sistem kendi kendine bölgedeki "Site içi, yeni bina, deniz manzaralı" evin fiyatını öğrenmiş olur.
