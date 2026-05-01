# Yapay Zeka Sunucuları Neden Çöker? (Self-Hosting Gerçekleri)

Harika bir soru. Klasik bir web sitesini (örneğin bir e-ticaret sitesini) barındırmak ile bir Yapay Zeka modelini (LLM) barındırmak arasında dağlar kadar fark vardır. Klasik web sunucuları "İşlemci (CPU) ve RAM" kullanır, yapay zeka ise **"Ekran Kartı (GPU) ve VRAM"** kullanır.

İşte en baştan kendi yapay zeka sunucumuzu kurduğumuzda başımıza gelecek ve sistemi çökertecek 4 ana kabus:

## 1. VRAM Taşması (Out of Memory - OOM)
Yapay zeka modelleri metin üretirken devasa hafızaya (VRAM) ihtiyaç duyar.
*   **Klasik Web:** 1000 kişi aynı anda web sitenize girse, sunucu sadece HTML dosyası gönderir. 2 GB RAM bile bunu kaldırır.
*   **Yapay Zeka:** Sadece **1 kişi** yapay zekaya 20 sayfalık bir Hukuk dosyası yüklediğinde, yapay zeka o dosyayı aklında tutmak için (KV Cache) ekran kartının hafızasını doldurur. Tam o sırada **2. bir kişi** de sisteme soru sorarsa, ekran kartının hafızası %100'ü aşar ve sunucu **"CUDA Out of Memory"** hatası vererek anında ve geri döndürülemez şekilde çöker. Sunucuyu elle yeniden başlatmanız gerekir.

## 2. Eşzamanlılık (Concurrency) ve Kuyruk Tıkanması
Bir ekran kartı (Örneğin 30.000 Dolarlık Nvidia A100) aynı anda sadece birkaç kişinin cümlesini kelime kelime üretebilir.
*   Pazartesi sabahı saat 09:00'da 50 emlakçı aynı anda sisteme girip "Haftalık raporumu hazırla" derse, ekran kartı kilitlenir. 
*   Bu 50 kişiyi sıraya sokmak (Queueing ve Continuous Batching) olağanüstü zor bir mühendisliktir. Kuyruk uzadıkça 50. sıradaki emlakçının ekranında 5 dakika boyunca kum saati döner, sonunda sistem "Timeout (Zaman Aşımı)" vererek çöker. Müşteri sinirlenip çıkar.

## 3. Donanım ve Sürücü (Driver) Hataları
Klasik sunucularda işletim sistemi kurar geçersiniz. Yapay zeka sunucularında ise "Nvidia Sürücüleri, CUDA versiyonları, PyTorch kütüphaneleri" gibi çok hassas katmanlar vardır.
*   Sunucu 7/24 %100 kapasiteyle ve aşırı ısıyla çalıştığı için ekran kartları hata vermeye başlar.
*   Kiraladığınız bulut sunucusunda (AWS, RunPod vb.) küçük bir donanım dalgalanması yaşandığında yapay zeka sessizce donar. Siz web sitesi çalışıyor sanırsınız ama müşteriler "Asistan cevap vermiyor" diye şikayet etmeye başlar.

## 4. DevOps (Yönetim) Maliyeti
Klasik bir yazılımcı (Web Developer) çöken bir web sitesini 5 dakikada ayağa kaldırabilir. Ancak "vLLM Memory Fragmentation" veya "NCCL Timeout" hatası veren bir yapay zeka sunucusunu ayağa kaldırmak için **MLOps (Yapay Zeka Operasyon) Mühendisine** ihtiyacınız vardır. Bu mühendislerin aylık maaşları tek başına küçük bir servettir.

---

### Sonuç: Neden API (OpenAI/Anthropic) ile Başlıyoruz?

OpenAI veya Google gibi devler, bu çökmeleri önlemek için arkada binlerce ekran kartını birbirine bağlayan milyar dolarlık veri merkezleri kullanır. Biri çökerse saniyesinde diğeri devreye girer. Biz API kullandığımızda (Örneğin GPT-4o), sunucunun çökme derdi, ısınması, ekran kartının yanması bizim değil, **onların problemidir.** Biz sadece kullandığımız kadar (birkaç sent) öderiz. 

Biz ancak kullanıcı sayımız on binlere ulaştığında ve aylık on binlerce dolar API faturası ödemeye başladığımızda, "Artık bu fatura çok yüksek, kendi MLOps ekibimizi kurup kendi donanımımızı yönetelim" deriz. İlk günden bu yükün altına girmek, inşaata temel atmadan çatıya helikopter indirmeye çalışmak gibidir.
