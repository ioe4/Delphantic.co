# Birim Ekonomi Analizi: Yapay Zeka ile Proje Yutma Maliyetleri (Unit Economics)

Kritik bir yatırımcı sorusu daha. Bir iş fikri kağıt üzerinde harika olabilir ama ölçeklenirken (scale up) maliyetler katlanarak artıyorsa o proje bir kara deliğe dönüşür.

KKTC'de 1.000'in üzerinde proje olduğunu ve her birinin devasa Google Drive klasörleri (PDF kataloglar, Excel fiyat listeleri, 3D görseller) barındırdığını varsayalım. Delphantic Kernal'in bu devasa veriyi "Sadece Bir Kez" yutmasının yapay zeka (Token) maliyetini matematiksel olarak hesaplayalım.

## 1. Tek Bir Projenin Yutulma Maliyeti (Örnek Senaryo)
Devasa bir proje klasörünü gelişmiş bir yapay zekaya (Örn: Gemini 1.5 Pro veya GPT-4o Vision) verdiğimizi düşünelim.

*   **Veri Yükü (Input):**
    *   50 Sayfalık PDF Katalog = ~50.000 Token
    *   Büyük Excel Fiyat Listesi = ~10.000 Token
    *   20 Adet Yüksek Çözünürlüklü 3D Görsel (Vision Analizi) = ~5.000 Token
    *   **Toplam Girdi:** Yaklaşık 65.000 Token
*   **Çıktı (Output / JSON Üretimi):**
    *   Veritabanına işlenecek proje detayları ve özet metinler = ~2.000 Token

**Maliyet Hesabı (Güncel API Fiyatlarıyla):**
1 Milyon Input Token maliyeti ortalama $5.00'dır.
1 Milyon Output Token maliyeti ortalama $15.00'dır.
*   65.000 Input = ~$0.32
*   2.000 Output = ~$0.03
*   **TOPLAM MALİYET: Proje başına ortalama $0.35 - $0.50 (Maksimum 50 Cent)**

## 2. Ölçeklenme ve Ülke Çapı Maliyeti (1.000 Proje)
Eğer KKTC'deki **1.000 projenin tamamını** sistemimize çekmeye karar verirsek (ki bu tüm ülkenin sıfır emlak pazarını dijitalleştirmek demektir);
*   1.000 Proje x $0.50 = **Toplam 500 Dolar!**

Evet, yanlış okumadınız. Bütün bir ülkenin devasa inşaat projelerini, PDF'leri okuyarak ve görselleri analiz ederek kusursuz bir veritabanına dönüştürmenin toplam "Yapay Zeka API" maliyeti sadece 500 Dolardır. Bu, bir B2B SaaS (Yazılım) firması için çerez parasıdır; bir akşam yemeği faturası kadardır.

## 3. Sistem "Sadece Okuma" Mı Yapacak? (Write Access Krizi)
"Yazılım sadece okuma mı yapacak?" sorunuz mimari açıdan hayati önem taşıyor.
*   **Canlı Fiyat Senkronizasyonu İçin:** Kesinlikle EVET. Sadece okuyacağız. İnşaat devleri, 3. parti bir yazılımın kendi Master Excel dosyalarına "Yazma (Write)" yetkisine sahip olmasına asla izin vermezler. Sistemimiz saniyede bir o Excel'i "Okur" (Read), eğer satıldı yazıyorsa bizim sistemde anında kapatır. Okuma işlemi (Google API üzerinden) neredeyse sıfır maliyetlidir (Aylık 1-2 doları geçmez).
*   **Rezervasyon/Kapora Geldiğinde Ne Olacak?** Bizim emlakçımız evi sattığında, bizim sistemimiz İnşaat Şirketinin Excel'ini değiştirmeye kalkmaz. Bunun yerine şirketin satış müdürüne resmi bir API veya Webhook üzerinden "Rezervasyon Talebi" (Veya WhatsApp Bildirimi) atar. Satış müdürü kendi eliyle Excel'i "Rezerve" yapar. Excel değiştiği milisaniye bizim sistem bunu "Okur" ve daireyi sistemde kilitler.

### Sonuç
O ilk veri çekme işi bir insan grubuna (veri giriş elemanlarına) yaptırılsaydı aylarca sürer ve on binlerce dolara mal olurdu. AI sayesinde proje başına sadece 50 Cent'e (ve saniyeler içinde) bu devasa veri yükünü (Data Ingestion) aşabiliyoruz.
