# WhatsApp Veri Toplama Protokolü (Slot Filling Mimarisi)

Çok kritik bir noktayı fark ettiniz. Eğer emlakçı WhatsApp'tan sadece fotoğraf atıp "Bunu 40 Bine sat" derse, yapay zekanın elinde "Vektörel Benzerlik" yapacak ve doğru metni yazacak yeterli veri olmaz.

Bunu çözmek için yapay zeka arka planda bir "Boşluk Doldurma" (Slot Filling) mantığıyla çalışmalıdır. Asistan, belirlediğimiz o "Zorunlu Veri Listesi" tamamlanmadan asla işlem yapmaz ve eksik verileri emlakçıya çok doğal, sohbete dayalı bir dille sorar.

## 1. Zorunlu Veri Listesi (Minimum Gereksinimler)
Doğru bir rayiç analizi ve kaliteli bir "Insider" (Uzman) metni yazılabilmesi için AI'ın toplaması ŞART olan veriler şunlardır:

1.  **Fiyat ve Para Birimi:** (Örn: 40.000 £)
2.  **Konum / Alt Bölge:** Sadece şehir yetmez. (Örn: Girne değil, *Girne Alsancak veya İskele Long Beach*)
3.  **Oda Sayısı ve Konut Tipi:** (Örn: 2+1 Daire, 4+1 Müstakil Villa)
4.  **Bina Yaşı / Proje Durumu:** (Örn: Sıfır / İnşaat Aşamasında / 5 Yıllık)
5.  **Koçan / Tapu Durumu:** (KKTC için çok kritik: Eşdeğer, Tahsis, Türk Koçanı)
6.  **Değer Yaratan 2 Ana Özellik (Şerefiye):** (Örn: Eşyalı, Havuzlu, Denize sıfır, Güvenlikli site)

## 2. WhatsApp'ta Konuşma Akışı (Örnek Senaryo)

Emlakçıyı yormamak adına AI ona hiçbir zaman bir "Form" veya "Excel" doldurtmaz. Sadece eksik olanı sorar.

**Adım 1: KOBİ Eksik Veri Girer**
*   **Emlakçı:** *(Birkaç fotoğraf atar)* "Kemal, bu evi satıyoruz. İskele'de 2+1, 60 bin Sterlin."
*   **AI'ın İç Sesi (Arka Plan):** *Fiyat (Var), Konum (Var), Tip (Var). Eksiklikler: Yaş, Koçan, Özellikler.*

**Adım 2: AI Eksikleri Doğal Bir Dille Sorar**
*   **AI (WhatsApp Cevabı):** *"Harika bir portföy patron. Hemen analize başlıyorum ancak fiyatlamayı tam oturtabilmem ve doğru kitleyi vurabilmemiz için üç ufak detaya ihtiyacım var:
    1. Bina sıfır mı, kaç yıllık?
    2. İçindeki eşyalar fiyata dahil mi?
    3. Koçan türü eşdeğer mi?
    Bu üçünü tek mesajda yazarsan ilanı anında yayına hazırlıyorum."*

**Adım 3: Veri Tamamlanır ve İşlem Başlar**
*   **Emlakçı:** "5 yıllık, eşyalı, eşdeğer."
*   **AI:** *"Tüm bilgiler alındı. 60.000 Sterlinlik fiyat, İskele eşyalı emsallerine göre %10 avantajlı duruyor. Senin kurumsal dilinle reklam metnini hazırlıyorum..."*

---
### Neden Bu Yaklaşım Mükemmeldir?
Bu sistem, KOBİ'nin hiçbir "Zorunlu Alan (*) doldurunuz" hatasıyla karşılaşmamasını sağlar. KOBİ sadece asistanıyla sohbet eder. Asistan ise arka planda katı bir form doldurmaktadır. Tüm boşluklar dolduğunda, sistem hem Rayiç Bedel Analizini hem de Dinamik Reklam Metnini %100 doğrulukla üretebilir.
