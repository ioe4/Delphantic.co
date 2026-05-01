# Yapay Zeka Aksanını (AI Accent) Tamamen Yok Etme Mühendisliği

Çok zor ve çok doğru bir yerden vurdunuz. Dünyanın en iyi promptunu da yazsanız, yapay zekanın içine kodlanmış bir **"Yapay Zeka Aksanı" (AI Accent)** vardır. Her zaman çok simetrik, çok heyecanlı yazar ve "Eşsiz, Kusursuz, Hayalinizdeki, Fırsat" gibi içi boş sıfatlara sığınır.

Bu "biraz daha spesifik jeneriklik" sorununu kökünden kazımak için basit promptlar yetmez. Şirketimizde uygulayacağımız 4 sert mühendislik kuralı (Anti-Generic Kalkanı) şunlardır:

## 1. Kara Liste Mühendisliği (Negative Prompting & Banned Words)
Yapay zekaya ne yapacağını söylemekten çok, **neleri yapamayacağını** (yasakları) söylemek daha etkilidir.
*   **Kural:** Sisteme devasa bir "Yasaklı Kelimeler ve Kalıplar" (Banned Words) listesi gömeriz. 
*   **Örnek Yasaklar:** "Hayalinizdeki ev, Eşsiz manzara, Kaçırılmayacak fırsat, Modern mimari, Kusursuz tasarım, Sizleri bekliyor" gibi emlakçıların %99'unun kullandığı tüm jenerik sıfatlar yapay zekaya **kesinlikle yasaklanır.**
*   **Sonuç:** AI bu kelimeleri kullanamadığı için mecburen teknik detaya girmek zorunda kalır. *"Eşsiz bir manzara"* diyemediği için *"Balkon direkt olarak Girne limanına bakıyor"* demek zorunda kalır. İşte bu metni "İnsan" yapar.

## 2. Formül Dayatması (Strict Structural Constraining)
Yapay zekaya "Bana bir metin yaz" derseniz, klasik kompozisyon yazar (Giriş, Gelişme, Sonuç). Biz ona metin yazdırmayız, **formül doldurturuz.**
Yapay zekaya sadece şu şablonu (JSON) doldurma izni veririz:
1.  **[Kanca - Sadece Rakam]:** Sadece 1 cümle yaz ve bölgenin son 1 yıllık değer artışını söyle. Sıfat kullanma.
2.  **[Mimari Bilgi - Sadece Malzeme]:** 2 cümle yaz. Sadece zeminde kullanılan malzemeyi ve tavan yüksekliğini yaz.
3.  **[Eylem - Sadece Emir]:** Sadece 1 cümle yaz. "WhatsApp'tan konum isteyin" de.

AI bu dar kalıba girdiğinde şiirsellik yapamaz, mecburen gerçek bir profesyonel (robot gibi değil, soğukkanlı bir uzman) gibi yazar.

## 3. Pürüzlendirme Ajanı (The "Humanizer" Model)
Yapay zekanın yazdığı metinlerin jenerik durmasının sebebi "çok kusursuz ve simetrik" olmalarıdır. İnsanlar böyle konuşmaz.
*   **Sistem:** Birinci yapay zeka metni yazar. Biz bu metni doğrudan müşteriye (veya reklama) VERMEYİZ. 
*   **İkinci Ajan:** Bu metni, tek görevi "Metni pürüzlendirmek" olan ikinci, küçük bir yapay zekaya (Humanizer) sokarız. Bu ajan cümlenin birini çok kısaltır, diğerini uzatır, aşırı resmi yerleri hafifçe günlük dile (KOBİ'nin ağzına) çevirir. Simetriyi bozar ve metne bir "insan ruhu" katar.

## 4. Nihai Silah: Fine-Tuning (Modeli Gerçek İnsanla Yıkamak)
Eğer sistem yukarıdaki 3 adıma rağmen hala "AI gibi" kokuyorsa, nükleer seçeneği (Fine-Tuning) devreye sokarız.
*   Piyasada (Örn: Sahibinden.com'da veya gerçek dünyada) gerçekten çok hızlı satan, çok iyi bir insan (usta bir pazarlamacı) tarafından yazılmış **5.000 adet** organik ve başarılı reklam metnini alırız.
*   Modeli bu 5.000 metinle **yeniden eğitiriz.** 
*   Model, fabrikasyon (OpenAI) İngilizce/Amerikan tarzı "Wow!" kültürünü tamamen unutur ve sokaktaki gerçek, ikna edici Türk/Kıbrıslı satıcının organik dilini kopyalar. 

Bizim Delphantic yazılımımızda, kullanıcının "Gönder" tuşuna bastığı o 1 saniye içinde metin bu 4 filtreden geçerek ekrana gelir. Jeneriklik böyle engellenir.
