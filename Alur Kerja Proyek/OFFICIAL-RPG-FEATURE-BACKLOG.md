# BACKLOG RESMI FITUR RPG & SISTEM GAME
## Academic Ascension RPG (Kelas XII) — Novel Edition

**Dokumen:** `Alur Kerja Proyek/OFFICIAL-RPG-FEATURE-BACKLOG.md`  
**Status:** CANONICAL FEATURE BACKLOG & AUDIT INVENTORY 🟢  
**Branch Acuan:** `visual-refresh`  
**Audit Baseline:** Commit `85efee06b29d10e53ef711a1964d8479e0a0f8bf`  
**Repositori:** `https://github.com/Rifkiaditya04/rpg-kelas-XII`  

---

## 1. Panduan & Prinsip Penggunaan Dokumen

1. **Sumber Kebenaran Tunggal (Single Source of Truth):** Dokumen ini adalah daftar resmi seluruh fitur game, temuan teknis, gap fungsional, dan ide yang direncanakan. Developer atau AI tidak boleh mengandalkan memori obrolan yang hilang.
2. **Kepatuhan Terhadap Fase Proyek:** Sesuai arahan Master Control v1.1 dan GDD, **prioritas saat ini setelah audit adalah menyelesaikan produksi Bank Soal (Fase Konten)**. Implementasi fitur-fitur di bawah ini ditangguhkan hingga target Bank Soal tuntas.
3. **Pemisahan Nyata Antara UI dan Logika:** Fitur yang hanya tampil di layar tanpa koneksi logika nyata ditandai secara tegas sebagai `Partial` atau `Missing`, bukan `Implemented`.

---

## 2. Inventaris & Matriks Ringkas Status Fitur

| ID Fitur | Nama Fitur | Status Audit | Tahap Pengerjaan Direkomendasikan |
| :--- | :--- | :---: | :--- |
| `RPG-FEAT-001` | Dialog Awal, Pemain Baru vs Pemain Lama, & Persistensi Alur | **Missing** (Legacy only di `world-1-rpg-v2.html`) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-002` | Aturan HP/MP Pemain & Status Boss | **Partial** (HP & MP Pemain aktif; MP Boss kosmetik) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-003` | Ekonomi Koin, Sumber Reward, & Konsistensi Toko | **Partial** (Inkonsistensi paket 100 koin) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-004` | Item Peningkatan Kapasitas Maksimum MP (`maxMP`) | **Missing** (Fitur baru direncanakan) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-005` | Pembelian Koin dengan Uang Asli (In-App Purchase) | **Missing** (Ide fitur masa depan / Future Backlog) | Tahap Pembayaran & Rilis Produksi |
| `RPG-FEAT-006` | Menu Pengaturan Pemain vs Menu Akses VIP/Developer | **Partial** (Hanya ada modal backdoor VIP) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-007` | Sistem Kemampuan (Skills) & Biaya MP | **Implemented** (2 skill aktif di pertempuran) | Tahap 3 (Penyempurnaan Skill Baru) |
| `RPG-FEAT-008` | Manajemen Tas / Inventori Barang & Toko | **Partial** (Berfungsi in-memory, reset saat reload) | Tahap 3 (Setelah Bank Soal) |
| `RPG-FEAT-009` | Analisis / Buka Catatan Konsep (Pre & In-Battle) | **Implemented** (Gratis di VN, -10 MP di Battle) | Tahap 3 (Integrasi Mapel Baru) |
| `RPG-FEAT-010` | Menu Pengembang (Dev Mode / QA Jump Tools) | **Legacy only** (Ada di v2, hilang di v1 siber) | Tahap 3 (Sebelum QA Massal) |
| `RPG-FEAT-011` | Sistem Afeksi Mentor & Percabangan Moral VN | **Missing** (Tercantum di GDD, belum dikoding) | Tahap 4 (Polish Naratif) |
| `RPG-FEAT-012` | Simulasi Profil Akademik & Rapor (Layer 2) | **Partial** (Hanya alert dialog placeholder) | Tahap 4 (Layer 2 Expansion) |

---

## 3. Rincian Spesifikasi Resmi Fitur RPG (Backlog Detail)

---

### `RPG-FEAT-001`: Dialog Awal, Pemain Baru vs Pemain Lama, dan Alur Lanjutan Game

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-001` |
| **Nama fitur** | Dialog Awal, Pemain Baru vs Pemain Lama, dan Persistensi Alur |
| **Tujuan** | Memberikan pengalaman onboarding yang ramah bagi siswa baru tanpa mengulang sambutan panjang yang menjemukan bagi siswa lama, serta menjaga progres belajar agar tidak hilang saat halaman browser di-reload. |
| **Kondisi sekarang** | Fungsi `app.init()` selalu memanggil `this.showScreen('onboarding')` secara kaku. Tidak ada pemeriksaan riwayat bermain. Seluruh state disimpan murni di memori RAM JavaScript (`app.state`). Tidak ada pemanggilan `localStorage.getItem` maupun `localStorage.setItem`. Setiap kali halaman dimuat ulang (F5), game kembali ke pesan Onboarding langkah 1 dan koin kembali ke 755. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2492–2520 (`app.state` hardcoded), baris 2545–2550 (`init()` langsung panggil `showScreen('onboarding')`).<br>- Bandingkan dengan prototipe legacy `prototype/bahasa-indonesia/world-1-rpg-v2.html`: baris 533–534 (`saveState()` & `loadState()` via `localStorage.getItem(STATE_KEY)`). |
| **Status** | **Missing** di prototipe siber terkini (pernah ada sebagai `Legacy only` di prototipe lama). |
| **Gap** | Ketiadaan lapisan persistensi lokal (`localStorage`) dan ketiadaan percabangan alur antara "Pemain Baru" (tampilkan prolog onboarding) dengan "Pemain Lama" (tampilkan menu lanjutkan / langsung ke Peta Konstelasi). |
| **Kriteria penerimaan** | 1. Jika `localStorage` belum memiliki data pemain, tampilkan layar Onboarding dengan dialog Mentor Rifki secara lengkap.<br>2. Jika `localStorage` mendeteksi data tersimpan, tampilkan pilihan eksplisit: `[Lanjutkan Petualangan]` (membuka Peta Konstelasi pada kondisi terakhir) dan `[Mulai Baru]` (dengan konfirmasi dialog keamanan).<br>3. Menutup tab atau me-reload browser saat berada di Peta Konstelasi tidak mereset koin, barang, atau status misi.<br>4. Tombol reset data wajib memerlukan konfirmasi ganda (`confirm()`). |
| **Keputusan terbuka** | 1. Jika browser di-reload saat berada di tengah pertempuran (Layar 3), apakah game harus melanjutkan ke soal yang sama persis, ataukah mengembalikan pemain ke Peta Konstelasi dengan safe checkpoint?<br>2. Apakah data tersimpan hanya berlaku lokal di per-perangkat (browser origin) atau memerlukan sistem ekspor/impor kode simpanan? |
| **Dependensi** | Skema penyimpanan lokal (`STATE_SCHEMA_V1`). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 1)**. |
| **Regression risk** | Inisialisasi awal UI, sinkronisasi bar status HUD, dan urutan pemanggilan layar (`showScreen`). |

---

### `RPG-FEAT-002`: Aturan HP, MP, Penalti Anti-Anxiety, dan Status Energi Boss

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-002` |
| **Nama fitur** | Aturan HP/MP Pemain, Penalti Anti-Anxiety, dan Mekanik Status Boss |
| **Tujuan** | Menegakkan kontrak asesmen formatif non-punitive (siswa tidak cemas kehilangan nyawa berlebihan saat mencoba soal sulit) dan menghadirkan tensi pertarungan JRPG yang dinamis namun adil. |
| **Kondisi sekarang** | - HP Pemain: 100/100. Jawaban salah memotong tepat -5 HP (`q.gameplay.wrong_penalty || 5`). Pemain kalah jika HP <= 0.<br>- MP Pemain: 50/50. Digunakan untuk skill (10–15 MP) dan baca catatan (10 MP).<br>- Asimetri Reset: Saat `launchBattle()`, HP pemain diisi ulang penuh (`p.hp = p.maxHp`), tetapi MP pemain **TIDAK DI-RESET** (tetap mempertahankan nilai sisa sebelumnya).<br>- Boss HP: 600/600. Berkurang saat jawaban benar berdasarkan formula damage.<br>- Boss MP: 300/300. Tampil di kartu UI Boss, namun **TIDAK PERNAH DIGUNAKAN** oleh Boss di mana pun dalam kode. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2665 (`this.state.player.hp = this.state.player.maxHp`, tidak ada reset untuk MP).<br>- `prototype/academic-ascension-rpg-v1.html`: baris 2688–2692 (`bar-boss-mp` diisi dari `bossMp: 300`, tetapi tidak ada fungsi AI boss yang mengurangi MP).<br>- `prototype/academic-ascension-rpg-v1.html`: baris 2854 (`p.hp = Math.max(0, p.hp - penalty)`). |
| **Status** | **Partial** (Mekanik HP dan penalti -5 HP sudah Implemented; MP Boss dan sinkronisasi reset masih Decision pending). |
| **Gap** | MP Boss hanya ornamen statis tanpa fungsi gameplay. Aturan apakah MP pemain harus pulih otomatis antar misi atau harus dibeli lewat item di toko belum dibakukan. |
| **Kriteria penerimaan** | 1. Jawaban salah pada tingkat kesulitan apa pun (Easy, Medium, Hard) memotong tepat 5 HP pemain (Anti-Anxiety Contract terjaga).<br>2. Jika `hasShield` aktif, penalti HP menjadi 0 dan status shield terlepas.<br>3. Perilaku pemulihan MP antar misi terdefinisi secara konsisten (apakah pulih 100%, pulih sebagian, atau bergantung pada stok Kopi di inventori).<br>4. Ditentukan secara definitif apakah bar MP Boss difungsikan untuk jurus pamungkas Boss (misal Boss mengeluarkan serangan spesial tiap 3 giliran) atau dihapus dari UI agar tidak membingungkan. |
| **Keputusan terbuka** | 1. Apakah Boss memiliki giliran menyerang dengan skill khusus yang memakan MP Boss, ataukah Boss tetap reaktif murni (hanya counterattack saat pemain salah)?<br>2. Apakah saat memasuki pertempuran baru, MP pemain pulih otomatis atau pemain diwajibkan mengelola item pemulih MP? |
| **Dependensi** | `RPG-FEAT-001` (Persistensi state HP/MP). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 2)**. |
| **Regression risk** | Algoritma penentu kekalahan (`isPlayerDead`), HUD bar updater, dan formula damage Boss. |

---

### `RPG-FEAT-003`: Sistem Ekonomi Koin, Sumber Reward, Toko, dan Konsistensi Transaksi

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-003` |
| **Nama fitur** | Sistem Ekonomi Koin, Sumber Reward, Toko, dan Konsistensi Transaksi |
| **Tujuan** | Memberikan sistem insentif belajar yang memotivasi siswa untuk menyelesaikan evaluasi dan menggunakan koin hasil belajar untuk membeli kebutuhan pertempuran di toko siber. |
| **Kondisi sekarang** | - Saldo awal koin diatur `gold: 755` (angka uji coba).<br>- Reward kemenangan: `+120 Koin`, reward kekalahan/remedial: `+30 Koin`.<br>- **Inkonsistensi Transaksi Toko:** Tombol di UI bertuliskan `🛒 Beli Paket Persiapan (100 Koin)`, namun fungsi `buyShopItem()` memotong 100 koin dan memberikan **1 Kopi Konsentrasi DAN 1 Ramuan Fokus sekaligus**.<br>- Tidak ada tombol untuk membeli item satuan (misal hanya butuh Kopi seharga 40 koin).<br>- Toko menjadi 100% gratis jika `vip: true`. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2496 (`gold: 755`).<br>- `prototype/academic-ascension-rpg-v1.html`: baris 2922 (`p.gold += 120`), baris 2929 (`p.gold += 30`).<br>- `prototype/academic-ascension-rpg-v1.html`: baris 3056–3059 (`p.gold -= 100; p.items.coffee += 1; p.items.potion += 1;`). |
| **Status** | **Partial** (Siklus koin in-memory berjalan, tetapi terdapat inkonsistensi paket belanja dan nilai saldo prototipe). |
| **Gap** | Tidak adanya pemisahan katalog barang individual di toko, label paket yang ambigu, dan saldo awal yang belum disesuaikan dengan ekonomi game riil. |
| **Kriteria penerimaan** | 1. Saldo koin awal pemain baru ditetapkan secara terukur (misal 100 koin untuk modal awal).<br>2. Toko menyediakan katalog item mandiri: Kopi Konsentrasi (beli satuan), Ramuan Fokus (beli satuan), dan Paket Bundling dengan harga transparan.<br>3. Setiap transaksi memotong koin sesuai harga yang tertera dan menambah stok item yang dibeli secara presisi 1:1.<br>4. Tombol pembelian dinonaktifkan secara visual jika koin tidak mencukupi (bukan sekadar `alert()`). |
| **Keputusan terbuka** | 1. Berapa harga ekonomi produksi untuk Kopi Konsentrasi (MP) dan Ramuan Fokus (HP)? (Rekomendasi: Kopi 50 Koin, Ramuan 40 Koin, Paket Bundling 80 Koin).<br>2. Apakah koin diberikan per soal benar atau hanya sebagai bonus akumulatif di akhir misi? |
| **Dependensi** | `RPG-FEAT-008` (Manajemen Tas / Toko). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 3)**. |
| **Regression risk** | Tampilan HUD koin (`#hud-gold`), modal belanja, dan validasi saldo pemain. |

---

### `RPG-FEAT-004`: Item Peningkatan Kapasitas Maksimum MP (`maxMP`)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-004` |
| **Nama fitur** | Item Peningkatan Kapasitas Maksimum MP (`maxMP`) |
| **Tujuan** | Memberikan progresi karakter jangka panjang yang memuaskan di mana siswa dapat memperbesar cadangan energi berpikir mereka untuk menghadapi bos materi yang lebih panjang/kompleks. |
| **Kondisi sekarang** | Nilai `maxMp` pemain saat ini terkunci statis pada angka `50` (`app.state.player.maxMp = 50`). Tidak ada item, tombol, maupun fungsi di toko atau inventori yang dapat memodifikasi batas ini. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2500 (`maxMp: 50`), baris 2684 (`bar-player-mp` dihitung terhadap `p.maxMp` konstan). |
| **Status** | **Missing** (Kebutuhan baru yang diresmikan pada audit Tahap 2B.1). |
| **Gap** | Belum ada definisi item baru di data state (`items.memoryDrive` atau sejenisnya), belum ada katalog barang di toko, dan belum ada logika konsumsi item penaik kapasitas. |
| **Kriteria penerimaan** | 1. Kapasitas awal pemain baru adalah tepat `50 MP`.<br>2. Tersedia item di toko (misal dinamai *Chip Memori Kognitif* / *Expander Core*).<br>3. Setiap satu item yang digunakan meningkatkan nilai `maxMp` tepat sebesar `+25` (misal 50 → 75 pada konsumsi pertama, 75 → 100 pada konsumsi kedua).<br>4. Sistem secara tegas membedakan `maxMp` (wadah kapasitas) dengan `mp` (energi aktual saat ini).<br>5. Bar status MP di HUD dan arena pertempuran otomatis menyesuaikan skala persentase `(mp / maxMp) * 100%` secara responsif. |
| **Keputusan terbuka** | 1. Apakah ada batas maksimum mutlak (*hard cap*) untuk kapasitas MP (misal maksimal 150 atau 200 MP) agar pemain tidak overpowered?<br>2. Ketika item digunakan, apakah MP saat ini langsung terisi penuh atau hanya wadah kapasitasnya saja yang membesar?<br>3. Berapa harga koin yang wajar di toko untuk item permanen ini (misal 300 koin)? |
| **Dependensi** | `RPG-FEAT-002` (Aturan HP/MP) dan `RPG-FEAT-003` (Ekonomi Koin). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 3)**. |
| **Regression risk** | Fungsi kalkulasi bar MP (`updateBattleHUD`), fungsi konsumsi kopi (`useItem`), dan penyimpanan state. |

---

### `RPG-FEAT-005`: Pembelian Koin dengan Uang Asli (In-App Purchase / Real Money Economy)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-005` |
| **Nama fitur** | Pembelian Koin dengan Uang Asli (In-App Purchase & Payment Gateway) |
| **Tujuan** | Membuka monetisasi etis untuk game edukasi bagi pemain yang ingin memperoleh koin instan tanpa grinding, sebagai persiapan rilis produksi / Play Store. |
| **Kondisi sekarang** | **Sama sekali belum ada.** Game saat ini beroperasi 100% *client-side browser* tanpa backend server, tanpa database pengguna terpusat, dan tanpa integrasi payment gateway. |
| **Bukti** | Seluruh repositori beroperasi secara statis (HTML/CSS/JS/JSON) tanpa modul Node.js server/API payment. |
| **Status** | **Missing (Decision Pending & Future Scope)**. |
| **Gap** | Membutuhkan arsitektur backend transaksi yang aman, server verifikasi webhook, akun pemain terotentikasi, serta kepatuhan hukum transaksi digital/Google Play Billing. |
| **Kriteria penerimaan** | 1. Pemain dapat melihat daftar paket koin resmi beserta harga mata uang Rupiah (IDR).<br>2. Transaksi diproses melalui gateway pembayaran resmi (Midtrans, Xendit, atau Google Play Billing untuk APK Android).<br>3. Koin HANYA bertambah setelah status transaksi diverifikasi secara kriptografis (*server-to-server webhook*).<br>4. Kegagalan transaksi, refund, atau pembatalan ditangani tanpa merusak saldo pemain.<br>5. Manipulasi client-side di console browser tidak dapat menambah koin riil. |
| **Keputusan terbuka** | 1. Platform distribusi utama: Apakah game web berbayar atau game APK Android via Google Play In-App Billing?<br>2. Kebijakan produk: Apakah game edukasi untuk sekolah ini diizinkan memuat IAP berbayar nyata atau sebaiknya murni gratis berbasis prestasi belajar? |
| **Dependensi** | Arsitektur Server/Backend, Database Pengguna, dan Kontrak Hukum Pembayaran. |
| **Tahap pengerjaan** | **Tahap Pembayaran & Rilis Produksi (Jauh setelah Bank Soal & RPG Core selesai)**. |
| **Regression risk** | Sistem saldo pemain dan keamanan integritas data game. |

---

### `RPG-FEAT-006`: Pemisahan Menu Pengaturan Pemain dari Menu Akses Rahasia VIP

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-006` |
| **Nama fitur** | Pemisahan Menu Pengaturan Pemain dari Menu Akses Rahasia VIP |
| **Tujuan** | Memberikan menu pengaturan yang fungsional bagi pemain (audio, reset data, tampilan) sekaligus memisahkan panel kode rahasia pengembang agar tidak merusak pengalaman pengguna umum. |
| **Kondisi sekarang** | Tombol di kanan atas header berlabel `⚙️ Akses` (`#btn-open-vip`). Saat diklik, tombol ini langsung membuka `#modal-vip` (*VIP ACCESS & CHEAT CODES*) yang hanya berisi input teks kode rahasia `AKSES_KELUARGA_VIP`. Tidak ada menu Pengaturan umum seperti pengaturan volume musik, reset progres, atau informasi versi game. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 1860–1862 (tombol header `#btn-open-vip`), baris 2555 (`onclick = () => this.openVipModal()`), baris 3077–3095 (`openVipModal()` & `submitVipCode()`). |
| **Status** | **Partial** (Modal VIP berfungsi sesuai GDD Bagian 5, namun menu Settings reguler belum ada). |
| **Gap** | Penggabungan label "Pengaturan (gear icon)" dengan modal cheat/VIP keluarga tanpa adanya pengaturan game nyata. |
| **Kriteria penerimaan** | 1. Tombol `⚙️ Pengaturan` membuka modal pengaturan standar: kontrol BGM/SFX (jika ada audio), tombol `Reset Progres Belajar` (dengan konfirmasi aman), dan informasi lisensi/versi.<br>2. Kolom kode rahasia VIP (`AKSES_KELUARGA_VIP`) diletakkan di tab tersembunyi / sub-menu khusus di dalam Pengaturan.<br>3. Memasukkan `AKSES_KELUARGA_VIP` tetap memberikan efek 99.999 koin dan item gratis selamanya sesuai mandat GDD Bagian 5. |
| **Keputusan terbuka** | 1. Apakah ikon header tetap gear (`⚙️`) dengan nama `Pengaturan`, dan akses VIP menjadi bagian tersembunyi di dalamnya?<br>2. Fitur pengaturan pemain apa saja yang wajib hadir di v1 (misal: toggle kecepatan teks typewriter, ukuran font, audio toggle)? |
| **Dependensi** | `RPG-FEAT-001` (Fungsi reset data lokal). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 4)**. |
| **Regression risk** | Header bar layout, modal overlay bindings. |

---

### `RPG-FEAT-007`: Sistem Kemampuan (Skills) dan Dampak Mekanik Pertarungan

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-007` |
| **Nama fitur** | Sistem Kemampuan (Skills) dan Dampak Mekanik Pertarungan |
| **Tujuan** | Menghadirkan variasi taktis saat menjawab soal sulit melalui kemampuan akademik yang dapat dibeli dengan MP. |
| **Kondisi sekarang** | Berfungsi in-memory dengan 2 skill:
1. `ELIMINATE` (Analisis Cepat — Biaya 15 MP): Menonaktifkan 1 opsi salah dari daftar pilihan ganda (menambahkan class `.disabled-option`).
2. `SHIELD` (Fokus Mental — Biaya 10 MP): Memberikan status `hasShield = true`, yang meniadakan pengurangan HP pada kesalahan menjawab berikutnya.
Skill dapat digunakan kapan saja selama MP mencukupi dan tidak memajukan giliran (pemain tetap harus memilih jawaban untuk menyerang). |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2979–3011 (`useSkill(skillKey)`). |
| **Status** | **Implemented (Prototipe Slice Berfungsi 🟢)**. |
| **Gap** | Pilihan skill masih terbatas 2 jenis. Belum ada skill tingkat lanjut (misal: *Ekstra Waktu*, *Gandakan EXP*, atau skill pasif dari afeksi mentor). Validasi MP saat ini menggunakan `alert()` browser yang memutus imersi. |
| **Kriteria penerimaan** | 1. Skill hanya dapat diaktifkan jika saldo MP pemain >= biaya skill.<br>2. Jika MP tidak mencukupi, tampilkan toast peringatan siber halus (bukan popup `alert()` browser).<br>3. Tombol opsi yang sudah dieliminasi tidak dapat diklik kembali.<br>4. Efek perisai bertahan hingga pemain membuat kesalahan pertama, lalu meniadakan penalti dan menampilkan floating damage `0 DMG (DITAHAN!)`. |
| **Keputusan terbuka** | 1. Apakah skill pasif dari mentor (GDD Bagian 4) akan ditambahkan di Layer 3/4?<br>2. Apakah boleh menggunakan skill lebih dari satu kali dalam satu soal yang sama jika MP mencukupi? |
| **Dependensi** | `RPG-FEAT-002` (Mekanik MP). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 4)**. |
| **Regression risk** | Tombol opsi jawaban (`.btn-option`), mekanisme floating damage, dan pergantian giliran. |

---

### `RPG-FEAT-008`: Manajemen Barang / Tas Inventori dan Efek Konsumsi Dinamis

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-008` |
| **Nama fitur** | Manajemen Barang / Tas Inventori dan Efek Konsumsi Dinamis |
| **Tujuan** | Memberikan utilitas pertempuran berbasis item agar siswa dapat memulihkan stamina berpikir (MP) dan daya tahan (HP) di tengah pertempuran sengit melawan bos materi. |
| **Kondisi sekarang** | - Berfungsi in-memory dengan 2 item:
  1. Kopi Konsentrasi (`coffee`): Menambah +25 MP (dibatasi `maxMp`).
  2. Ramuan Fokus (`potion`): Menambah +30 HP (dibatasi `maxHp`).
- Stok awal masing-masing 2 unit.
- Berkurang saat digunakan via modal tas (`useItem()`).
- Jika stok habis, memunculkan `alert()`. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2501–2504 (stok awal), baris 3025–3047 (`useItem(itemKey)`). |
| **Status** | **Partial** (Logika pemakaian berfungsi, namun feedback kehabisan stok masih memakai `alert()`, dan data stok hilang saat reload). |
| **Gap** | Belum ada integrasi persistensi penyimpanan, dan belum ada item baru untuk penambahan kapasitas permanen (`RPG-FEAT-004`). |
| **Kriteria penerimaan** | 1. Pemakaian item memotong stok tepat 1 unit dan menambah status HP/MP sesuai nominal.<br>2. Penambahan HP/MP tidak boleh melampaui `maxHp` dan `maxMp`.<br>3. Angka stok pada modal Tas dan HUD ter-update secara *real-time*.<br>4. Jika stok 0, tombol Gunakan dinonaktifkan secara visual dengan label `Habis`. |
| **Keputusan terbuka** | 1. Apakah item boleh digunakan di luar pertempuran (misal dari menu utama / peta)?<br>2. Apakah akan ditambahkan item ofensif (misal: *Gulungan Analisis Soal*)? |
| **Dependensi** | `RPG-FEAT-001` (Persistensi) dan `RPG-FEAT-003` (Toko). |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Prioritas 4)**. |
| **Regression risk** | Modal inventori (`#modal-items`), bar status HUD pertempuran. |

---

### `RPG-FEAT-009`: Sistem Analisis / Buka Catatan Rumus (Pre & In-Battle Notes)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-009` |
| **Nama fitur** | Sistem Analisis / Buka Catatan Rumus (Pre & In-Battle Notes) |
| **Tujuan** | Mendorong kebiasaan belajar berbasis konsep di mana siswa didorong untuk meninjau kembali ringkasan teori ketika ragu, tanpa membocorkan kunci jawaban soal. |
| **Kondisi sekarang** | - Tersedia dua jalur akses:
  1. **Pre-Battle (Gratis):** Pada layar Visual Novel Briefing, tombol `📖 Buka Intisari Rumus` membuka modal catatan tanpa memotong MP.
  2. **In-Battle (Berbayar):** Pada layar pertempuran, tombol komando `📖 ANALISIS / CATATAN` memeriksa apakah MP >= 10. Jika cukup, memotong tepat 10 MP dan membuka modal catatan konsep yang sama.
- Setelah modal ditutup, pertempuran tetap berada di giliran yang sama dan pemain wajib menjawab soal. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 2646–2651 (`openConceptNotes()`), baris 3065–3074 (`useInBattleNotes()`). |
| **Status** | **Implemented (Berfungsi Penuh Sesuai GDD Bagian 3B 🟢)**. |
| **Gap** | Isi catatan saat ini di-hardcode di dalam objek `VERIFIED_POOLS` untuk Matematika Wajib dan Bahasa Indonesia Wajib. Perlu dihubungkan secara dinamis ketika dataset materi lain diintegrasikan. |
| **Kriteria penerimaan** | 1. Di layar briefing mentor, catatan konsep dapat dibaca bebas tanpa syarat MP.<br>2. Di tengah pertempuran, catatan konsep hanya terbuka jika pemain memiliki minimal 10 MP.<br>3. Pemain tidak dapat melewati kewajiban menjawab soal setelah membaca catatan.<br>4. Isi catatan konsep 100% relevan dengan materi misi aktif tanpa memuat kunci jawaban eksplisit. |
| **Keputusan terbuka** | 1. Apakah biaya MP membaca catatan tetap konstan 10 MP untuk semua mata pelajaran atau bervariasi sesuai tingkat kesulitan misi? |
| **Dependensi** | Kontrak metadata `conceptNotes` pada Bank Soal. |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Terbuka untuk Integrasi Konten Baru)**. |
| **Regression risk** | State pertempuran (`app.state.battle`), modal overlay. |

---

### `RPG-FEAT-010`: Menu Pengembang (Dev Mode / QA Quick-Jump Tools)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-010` |
| **Nama fitur** | Menu Pengembang (Dev Mode / QA Quick-Jump Tools) |
| **Tujuan** | Memfasilitasi tim pengembang dan QA untuk melompat langsung ke misi, soal, atau skenario hasil tertentu secara cepat tanpa harus bermain manual dari awal. |
| **Kondisi sekarang** | **Tidak ada di prototipe siber terkini.** Fitur ini pernah ada pada prototipe legacy `prototype/bahasa-indonesia/world-1-rpg-v2.html` (berupa tombol kuning `Dev Mode` di header dan modal daftar lompat misi). Saat pembuatan prototipe visual sci-fi vertical slice, fitur ini tidak terbawa karena fokus pada validasi antarmuka pertempuran. |
| **Bukti** | - `prototype/bahasa-indonesia/world-1-rpg-v2.html`: baris 253 (tombol Dev Mode), baris 536–578 (`openDevModal()`, `jumpToMission()`).<br>- Tidak ditemukan elemen `#dev-modal` atau fungsi `openDevModal` di `prototype/academic-ascension-rpg-v1.html`. |
| **Status** | **Legacy only (Ditangguhkan pada Prototipe Terkini)**. |
| **Gap** | Tidak adanya alat QA untuk melompat ke soal tertentu, memicu kondisi kemenangan/kekalahan instan, atau mengisi saldo secara terisolasi tanpa merusak UI pemain biasa. |
| **Kriteria penerimaan** | 1. Alat dev tidak boleh tampil secara otomatis di antarmuka pemain biasa pada build rilis.<br>2. Dev Mode dapat diaktifkan melalui URL query string (misal `?dev=true` atau `?qa=1`) atau kombinasi klik rahasia.<br>3. Menyediakan kontrol pengujian:
   - Lompat ke misi apa pun (Misi 1 s.d. Misi N).
   - Lompat ke soal nomor X.
   - Pemicu instan: Victory Screen / Defeat Remedial Screen.
   - Pemicu instan: Tambah 1.000 Koin / Isi Penuh HP & MP. |
| **Keputusan terbuka** | 1. Apakah Dev Mode akan diwujudkan sebagai panel drawer tersembunyi atau modal dialog?<br>2. Mekanisme perlindungan apa yang digunakan untuk menjamin Dev Mode tidak bocor ke siswa saat game di-deploy ke GitHub Pages atau APK produksi? |
| **Dependensi** | Engine pertempuran dan router misi. |
| **Tahap pengerjaan** | **Setelah Bank Soal (Tahap 3 — Sebelum QA Massal)**. |
| **Regression risk** | Isolasi kode pengujian agar tidak merusak build produksi. |

---

### `RPG-FEAT-011`: Sistem Afeksi Mentor & Percabangan Respon Dialog (Visual Novel Layer)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-011` |
| **Nama fitur** | Sistem Afeksi Mentor & Percabangan Respon Dialog (Visual Novel Layer) |
| **Tujuan** | Meningkatkan kedekatan emosional siswa dengan karakter pembimbing (Rifki, Leli, Raka) sesuai visi GDD Bagian 4. |
| **Kondisi sekarang** | Layar Visual Novel (`#screen-vn`) saat ini hanya menampilkan teks pengarahan satu arah (*linear briefing*) tanpa meteran afeksi (*Affection Meter*) dan tanpa opsi dialog bercabang (*branching dialogue*). |
| **Bukti** | - `Alur Kerja Proyek/01-GDD-ACADEMIC-ASCENSION-RPG.md`: Bagian 4 (Sistem Afeksi & Pilihan Moral).<br>- `prototype/academic-ascension-rpg-v1.html`: baris 2637–2644 (dialog statis satu arah). |
| **Status** | **Missing (Tercantum di GDD, Belum Diimplementasikan)**. |
| **Gap** | Belum ada struktur data afeksi mentor di state (`state.mentors = { rifki: 0, leli: 0 }`), belum ada UI bar afeksi, dan dialog belum memiliki opsi respons bercabang. |
| **Kriteria penerimaan** | 1. Setiap penyelesaian misi dengan akurasi >= 80% meningkatkan poin afeksi mentor mata pelajaran terkait.<br>2. Bar afeksi tampil di layar pengarahan mentor.<br>3. Pada level afeksi tertentu, mentor memberikan hadiah dialog khusus atau item pendukung belajar. |
| **Keputusan terbuka** | 1. Apakah sistem afeksi memberikan buff stat pasif di pertempuran atau murni pencapaian kosmetik/naratif? |
| **Dependensi** | `RPG-FEAT-001` (Persistensi progres) dan Bank Soal multi-mata pelajaran. |
| **Tahap pengerjaan** | **Tahap 4 (Polish Naratif & Pengayaan Konten)**. |
| **Regression risk** | Layar briefing Visual Novel. |

---

### `RPG-FEAT-012`: Simulasi Profil Akademik & Rapor Siswa (Layer 2 Simulation)

| Field | Isi |
| :--- | :--- |
| **ID** | `RPG-FEAT-012` |
| **Nama fitur** | Simulasi Profil Akademik & Rapor Siswa (Layer 2 Simulation) |
| **Tujuan** | Membantu siswa kelas XII memetakan target program studi impian (Teknik, Kedokteran, Manajemen) dan mengaitkannya dengan kesiapan mata pelajaran pilihan sesuai aturan Kurikulum Merdeka. |
| **Kondisi sekarang** | Node Layer 2 pada Peta Konstelasi saat ini hanya memicu popup `alert('🎯 Fitur Layer 2 Profil Target: Membuka simulasi target prodi ...')`. Belum ada formulir input rapor atau kalkulator kecocokan prodi. |
| **Bukti** | - `prototype/academic-ascension-rpg-v1.html`: baris 3097–3099 (`openProfileModal()`). |
| **Status** | **Partial (Placeholder UI Alert)**. |
| **Gap** | Tidak adanya modal formulir input nilai rapor dan algoritma penentu rekomendasi mapel pilihan. |
| **Kriteria penerimaan** | 1. Node Layer 2 membuka modal interaktif untuk memilih target prodi PTN.<br>2. Sistem memberikan rekomendasi mapel pilihan (Layer 3) berdasarkan target prodi yang dipilih siswa.<br>3. Data profil akademik tersimpan di profil pemain. |
| **Keputusan terbuka** | 1. Kapan integrasi dataset pemetaan prodi SNBP/SNBT akan disusun? |
| **Dependensi** | Penyelesaian seluruh Bank Soal Layer 1 Core Foundation. |
| **Tahap pengerjaan** | **Tahap 4 (Ekspansi Layer 2 & 3)**. |
| **Regression risk** | Navigasi Peta Konstelasi (`#screen-map`). |
