# PONDASI BARU PENGEMBANGAN BANK SOAL — STANDAR LINTAS MATA PELAJARAN

**Dokumen Acuan Tunggal:** Standar Pondasi Lintas Mata Pelajaran
**Repositori:** `rpg-kelas-XII`
**Branch:** `visual-refresh`
**Status Dokumen:** ADOPTED OPERATIONAL STANDARD — MANDATORY ACROSS ALL SUBJECTS
**Tanggal Penetapan:** 10 November 2026
**Dokumen Pendamping & Otoritas Acuan:**
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md` (Seksi 30, Seksi 31, dan Seksi 32)
- `Alur Kerja Proyek/SOP-PRODUKSI-BANK-SOAL-BATCH-v2.0.md`
- `Alur Kerja Proyek/01-GDD-ACADEMIC-ASCENSION-RPG.md`
- `Alur Kerja Proyek/PROJECT LOG/decisions/009-content-source-and-copyright-safe-pipeline.md`
- `Alur Kerja Proyek/PROJECT LOG/decisions/010-informatika-chapter-6-capstone-and-regular-pool-closure.md`

---

## 1. Latar Belakang, Tujuan, dan Ruang Lingkup

### 1.1. Latar Belakang Transformasi
Dalam fase awal perakitan konten Academic Ascension RPG, pengembangan bank soal sering kali menghadapi variasi metodologi antarmata pelajaran, siklus audit mikro yang berulang tanpa ujung, pemaksaan kuota butir soal secara seragam tanpa mempertimbangkan struktur kurikulum asli, inflasi label taksonomi kognitif, serta pemaksaan materi eksperimen/unjuk kerja fisik ke dalam mekanisme pertempuran pilihan ganda (*battle quiz*).

Pengalaman penyelesaian dan stabilisasi mata pelajaran Bahasa Indonesia, Bahasa Inggris, Matematika, dan Informatika membuktikan bahwa keberhasilan proyek bertumpu pada disiplin pemetaan sumber buku resmi, penghormatan terhadap karakter unik disiplin ilmu, serta tata kelola Git dan data yang terkendali.

### 1.2. Tujuan Penetapan Standar
Dokumen ini menetapkan **Pondasi Baru Pengembangan Bank Soal** sebagai standar baku yang mengikat seluruh mata pelajaran di lingkungan repositori `rpg-kelas-XII`. Tujuannya adalah:
1. Menjamin keseragaman prinsip mutu akademik, orisinalitas, dan integritas arsitektur data lintas mata pelajaran.
2. Mengeliminasi inefisiensi alur kerja dan pengulangan audit yang tidak menambah nilai substantif.
3. Memberikan kepastian metodologis bagi mata pelajaran yang sedang dan akan dikerjakan (Fisika, Kimia, Biologi, serta mata pelajaran pilihan lainnya).

### 1.3. Ruang Lingkup dan Batasan
- **Berlaku Menyeluruh:** Standar ini wajib diterapkan pada Fisika, Kimia, Biologi, serta seluruh mata pelajaran berikutnya tanpa pengecualian.
- **Tidak Ada Pondasi Alternatif:** Tidak diizinkan membuat kerangka acuan atau arsitektur tandingan berdasarkan mata pelajaran tertentu.
- **Karakteristik Mata Pelajaran vs Prinsip Induk:** Karakteristik spesifik ilmu (sains eksperimental, bahasa, matematika formal, rekayasa komputasi) diakomodasi pada level kedalaman materi, perumusan stimulus, strategi representasi (grafik/rumus/teks), dan bentuk instrumen asesmen. Namun, sembilan prinsip dasar di bawah ini bersifat mutlak dan tidak boleh ditawar.
- **Perlindungan Pekerjaan Terdahulu:** Pekerjaan pada mata pelajaran yang telah selesai, diverifikasi, dan disahkan (Bahasa Indonesia, Bahasa Inggris, Matematika, Informatika) tetap dipertahankan. Standar ini tidak digunakan sebagai alasan untuk membuka kembali (*reopen*) pekerjaan yang sudah tuntas tanpa temuan bukti baru yang material.

---

## 2. Perbandingan Pendekatan Lama vs Pondasi Baru

| Aspek Evaluasi | Pendekatan Lama (Usang & Tidak Efisien) | Pondasi Baru Lintas Mata Pelajaran (Wajib) |
| :--- | :--- | :--- |
| **Dasar Penentuan Konten** | Menetapkan target kuota butir atau jumlah misi secara seragam per bab sebelum meneliti buku. | Meneliti dan memetakan struktur Buku Siswa (BS) dan Buku Panduan Guru (BG) terlebih dahulu sebelum menetapkan alokasi misi/soal. |
| **Sumber Materi** | Menggunakan ringkasan sekunder, label TKA eksternal, atau asumsi silabus tanpa penelusuran halaman. | Wajib melacak ke halaman cetak fisik resmi BS dan BG Kurikulum Merdeka lokal sebagai rujukan primer. |
| **Taksonomi Bloom** | Inflasi label kognitif (menandai C4–C5 pada soal hafalan/definisi agar tampak berbobot). | Label Bloom jujur (C1–C6) sesuai tuntutan kognitif riil instrumen; distribusi mengikuti karakter materi. |
| **Bentuk Asesmen** | Memaksakan seluruh kompetensi (termasuk praktikum dan proyek rekayasa) menjadi soal pilihan ganda battle. | Memisahkan asesmen objektif ramah-battle dari asesmen kinerja, praktikum, dan proyek kolaboratif portofolio. |
| **Hak Cipta & Orisinalitas** | Menyalin kalimat teks, tabel, atau soal latihan buku secara mentah ke dalam berkas game. | Mematuhi ketat Decision 009: konsep bersumber dari buku, namun stimulus, narasi, soal, dan opsi ditulis orisinal. |
| **Alur QA & Validasi** | Audit mikro berulang-ulang untuk setiap butir soal; mencari validasi tambahan tanpa batas. | Satu QA batch terintegrasi setelah implementasi; pengujian adalah alat penjaminan mutu, bukan tujuan berulang. |
| **Tata Kelola Repositori** | Penggunaan `git add .`, manipulasi branch bebas, dan risiko terhapusnya data laporan penting. | Staging selektif berbasis path eksplisit, perlindungan berkas laporan, pemisahan commit lokal dan push remote. |

---

## 3. Sembilan Prinsip Utama Pondasi Baru

### Prinsip 1 — Sumber Materi adalah Dasar Utama
1. Pengembangan materi bank soal wajib menggunakan buku sumber asli dan resmi, terutama Buku Siswa (BS) dan Buku Panduan Guru (BG) Kurikulum Merdeka yang tersedia di repositori (`Buku Kurikulum/Kurikulum Merdeka/`) atau master PDF (`Bahan/Master Kurikulum Merdeka/`).
2. Setiap butir soal, stimulus, dan kunci jawaban harus dapat ditelusuri secara sahih (*traceable*) ke materi pokok, submateri, tujuan pembelajaran, dan rentang halaman cetak fisik sumber pendukungnya.
3. Dilarang keras mengarang nomor halaman, merekayasa referensi pustaka, atau membuat klaim kesesuaian kurikulum fiktif. Jika suatu nomor halaman belum dapat diverifikasi secara fisik, wajib dinyatakan secara jujur sebagai `UNVERIFIED`.
4. Label kurikulum umum atau kerangka asesmen eksternal (seperti label TKA) diposisikan sebagai pemetaan pengayaan, bukan pengganti sumber materi buku pokok.
5. Materi tambahan atau konteks naratif fantasi/akademik yang dikembangkan khusus untuk kebutuhan RPG harus dibedakan secara tegas dari fakta materi kurikuler yang bersumber langsung dari buku teks.

### Prinsip 2 — Pemetaan Buku Dilakukan Sebelum Menentukan Jumlah Soal
1. Alur perancangan wajib diawali dengan Tahap Pemetaan Sumber (*Master Source Inventory & Mapping*): membaca tuntas struktur bab, subbab, konsep inti, besaran/satuan/hukum, grafik, diagram, eksperimen, dan panduan guru.
2. Kebutuhan asesmen dan jumlah misi ditentukan murni berdasarkan kedalaman cakupan materi dan kesatuan konseptual, bukan berdasarkan kuota seragam artifisial (misalnya: tidak memaksakan "harus 3 misi per bab" atau "harus 15 butir per bab").
3. Memeriksa ketersediaan butir soal pada baseline v1.0: butir soal yang sudah terbukti tepat secara konsep dipertahankan (*KEEP*), sedangkan revisi (*REVISE*) atau penambahan butir baru dilakukan hanya jika terdapat justifikasi akademis yang nyata (mengatasi miskonsepsi, melengkapi submateri yang bolong, atau memperbaiki kunci/distraktor cacat).
4. Berkas Master Source Map per bab yang disusun berfungsi sebagai aset kanonikal yang dapat digunakan kembali (*reusable reference*), bukan dokumen sekali pakai yang harus ditulis ulang setiap pergantian misi.

### Prinsip 3 — Standar Kualitas Soal Harus Tinggi
1. **Pertanyaan Jelas & Presisi:** Pokok soal (*stem*) harus lugas, bebas dari ambiguitas kebahasaan, memiliki konteks stimulus yang fungsional (bukan sekadar tempelan), dan memberikan batasan masalah yang terdefinisi dengan baik.
2. **Kunci Jawaban Terbukti:** Kunci jawaban harus dapat diverifikasi kebenarannya melalui hukum fisika, dalil matematika, atau fakta sains resmi di dalam buku sumber.
3. **Distraktor Rasional & Menguji Pemahaman:** Pilihan pengecoh (*distractor*) tidak boleh berupa pilihan konyol atau salah ketik sepele; pengecoh harus dirancang secara pedagogis untuk mendeteksi miskonsepsi umum, kesalahan umum substitusi rumus, atau kekeliruan perhitungan logika/aritmatika siswa.
4. **Pembahasan Edukatif Komprehensif:** Pembahasan tidak boleh hanya menyebutkan "Jawaban benar adalah A", melainkan wajib menguraikan langkah penalaran, penurunan rumus matematis, analisis fenomena, serta alasan spesifik mengapa pilihan-pilihan lainnya salah.
5. **Kalibrasi Tingkat Kesulitan:** Tingkat kesulitan (*difficulty*: `easy`, `medium`, `hard`) harus proporsional dengan kompleksitas kompetensi yang diuji, bukan ditentukan secara acak untuk memenuhi variasi semu.
6. **Integritas Tujuan:** Soal dibuat untuk menguji pemahaman konsep peserta didik, bukan sekadar pelengkap mekanik permainan (*game filler*).

### Prinsip 4 — Bloom Taxonomy Harus Jujur
1. Penentuan taksonomi kognitif wajib merefleksikan proses berpikir riil yang dituntut oleh instrumen soal:
   - **C1–C2 (Mengingat & Memahami):** Mengenali istilah, satuan, simbol, definisi hukum, atau menjelaskan prinsip fisis dasar.
   - **C3 (Menerapkan):** Menggunakan rumus, prinsip fisis, atau prosedur perhitungan langsung pada masalah standar berangka konkret.
   - **C4 (Menganalisis):** Menguraikan sistem fisis kompleks, membaca grafik/diagram multi-komponen, membandingkan dua keadaan, atau menghubungkan sebab-akibat fenomena.
   - **C5 (Mengevaluasi):** Menilai keabsahan hipotesis ilmiah, mengidentifikasi anomali data eksperimen, atau menentukan efisiensi/kelayakan solusi teknologi.
   - **C6 (Mencipta):** Merancang diagram blok sistem, menyintesis skema solusi inovatif, atau merumuskan rancang bangun pemecahan masalah.
2. Dilarang keras melakukan inflasi label kognitif (misalnya melabeli soal substitusi angka sederhana sebagai C4/C5 semata-mata agar instrumen terkesan memiliki *Higher Order Thinking Skills* / HOTS).
3. Distribusi sebaran tingkat kognitif ditentukan secara organik oleh karakteristik materi ajar dan indikator tujuan pembelajaran, bukan dipaksakan mengikuti kuota persentase kaku.

### Prinsip 5 — Asesmen Harus Sesuai Karakter Kompetensi
1. **Pemisahan Domain Asesmen:**
   - Domain pengetahuan deklaratif, penalaran analitis, kalkulasi matematis, interpretasi grafik, dan pemecahan masalah teoritis dinilai secara valid melalui format objektif (pilihan ganda, pilihan berganda/multi-select) yang kompatibel dengan mekanisme pertempuran (*battle system*) RPG.
   - Domain keterampilan psikomotorik (merangkai sirkuit pada *breadboard*, kalibrasi instrumen osiloskop fisik, perakitan motor listrik), penyelidikan inkuiri lapangan, dan pembuatan produk rekayasa/alat dinilai secara autentik melalui rubrik unjuk kerja, asesmen proses, atau lembar kerja praktikum (LKPD).
2. **Larangan Distorsi Konstruk:** Dilarang memaksakan tugas praktikum laboratorium fisik atau proyek rekayasa lapangan menjadi kuis pilihan ganda hafalan langkah kerja di arena battle. Pemaksaan tersebut merusak validitas konstruk asesmen karena menghilangkan kompetensi kinerja yang sebenarnya dinilai.
3. **Penyaluran Proyek dalam Game:** Kompetensi praktikum dan proyek yang tidak cocok untuk mekanisme battle dialokasikan ke fitur game pendukung yang relevan (seperti narasi *Crafting/Lab*, simulasi virtual interaktif, atau tugas portofolio/capstone) atau dilaporkan secara eksplisit sebagai asesmen kinerja autentik di luar kuis pertempuran.

### Prinsip 6 — Hak Cipta dan Orisinalitas Harus Dijaga (Kepatuhan Decision 009)
1. Seluruh butir soal, bacaan pengantar, stimulus konteks, dan pembahasan wajib mematuhi kebijakan hak cipta yang tertuang dalam **Decision 009** (`009-content-source-and-copyright-safe-pipeline.md`).
2. Alur produksi yang sah adalah:
   $$\text{Buku Sumber} \longrightarrow \text{Identifikasi Konsep/TP} \longrightarrow \text{Penyusunan Narasi/Stimulus Orisinal} \longrightarrow \text{Perumusan Soal \& Opsi Mandiri} \longrightarrow \text{Audit Sitasi/Karakter}$$
3. Dilarang menyalin secara mentah (*verbatim*) atau sekadar mengubah 1–2 kata sepele (*paraphrasing* dangkal) dari teks bacaan, narasi soal latihan, ilustrasi komersial, atau grafik milik pihak ketiga yang dilindungi hak cipta.
4. Karakter, latar cerita, nama entitas fiktif, serta dialog dalam skenario soal harus orisinal dalam semesta Academic Ascension RPG atau menggunakan domain publik yang bebas lisensi komersial.

### Prinsip 7 — Arsitektur Data Harus Konsisten (Base-Plus-Overlay v1.1)
Pengelolaan data bank soal pada seluruh mata pelajaran wajib mempertahankan integritas arsitektur 4 lapis Base-Plus-Overlay:
1. **Canonical v1.0 (Baseline Historis):** Berkas JSON kanonikal awal yang telah terdaftar dalam sistem game dikunci secara mutlak (*immutable baseline*). Tidak boleh ada manipulasi atau penulisan ulang destruktif pada berkas v1.0.
2. **Revision Overlay v1.1 (Lapisan Koreksi Terkendali):** Seluruh perbaikan, penggantian butir soal cacat, pemutakhiran pembahasan, atau perbaikan kunci jawaban ditulis secara terisolasi di dalam berkas overlay v1.1 dengan metadata status yang transparan (`patch`, `rationale`, `qa_pending` $\to$ `qa_passed`).
3. **Canonical v1.1 (State Operasional Terpadu):** Berkas kanonikal akhir yang dihasilkan dari penerapan bersih overlay v1.1 di atas baseline v1.0. Berkas inilah yang menjadi acuan pengujian dan eksekusi resmi.
4. **Phase 4 Pool Synchronization:** Berkas pool bank soal Phase 4 (misalnya format kuis per bab) wajib disinkronkan secara presisi dengan berkas Canonical v1.1, mencakup keselarasan ID soal, teks pertanyaan, opsi jawaban, indeks kunci, dan parameter gameplay.
5. Dilarang membuat skema arsitektur baru atau format metadata tandingan yang merusak interoperabilitas sistem game yang telah stabil.

### Prinsip 8 — QA Dilakukan Terintegrasi, Bukan Berulang-Ulang
1. **Efisiensi Validasi:** Pengujian penjaminan mutu (*Quality Assurance*) bukan merupakan tujuan akhir pekerjaan, melainkan instrumen untuk memverifikasi kebenaran implementasi.
2. **Satu Pintu QA Komprehensif:** Validasi dilakukan secara terpadu satu kali di akhir pengerjaan setiap batch produksi, mencakup validasi skema JSON, ketepatan rumus dan kunci jawaban, sinkronisasi Phase 3/Phase 4, kepatuhan hak cipta, serta kebersihan berkas (*git diff --check*).
3. **Larangan Siklus Validasi Berulang (*Over-Validation Loop*):** Setelah sebuah batch dinyatakan lulus QA dan terbukti memenuhi seluruh parameter pengujian, pekerjaan pada batch tersebut dinyatakan selesai. Tidak diperbolehkan melakukan audit ulang berkali-kali atau mencari celah konfirmasi baru tanpa adanya indikasi cacat fisik atau bukti material baru.
4. **Prinsip Finalitas:** Pekerjaan yang telah selesai dan disahkan pengguna berstatus final dan tidak boleh dibuka kembali.

### Prinsip 9 — Proses Pengerjaan Harus Efisien dan Terkendali
1. **Pengelompokan Batch Rasional:** Produksi konten dikerjakan dalam satuan kelompok kerja (*batch*), umumnya mencakup 3–5 misi (atau setara 1–2 bab materi terpadu), sesuai dengan daya dukung cakupan kurikulum.
2. **Kepatuhan SOP & Master Control:** Setiap tahapan kerja wajib merujuk secara tertib pada SOP Produksi Batch v2.0 dan mencatat kemajuan pada Master Control.
3. **Disiplin Ketat Operasi Git:**
   - Dilarang keras menggunakan perintah global membabi buta seperti `git add .` atau `git add -A`.
   - Staging hanya dilakukan pada berkas yang termasuk dalam ruang lingkup izin kerja eksplisit menggunakan path lengkap.
   - Commit lokal dilakukan hanya setelah batch dinyatakan lulus pengujian QA dan mendapat otorisasi pengguna.
   - Push remote merupakan keputusan terpisah dan tidak boleh dijalankan otomatis bersamaan dengan commit lokal.
   - Dilarang keras menggunakan perintah destruktif seperti `git reset --hard`, `git push --force`, `git clean -fd`, atau rebase tanpa izin.
4. **Perlindungan Berkas Laporan Terlindungi:** Tiga berkas laporan pengujian sistem (`missions/learning_curve_report.json`, `missions/recipe_validation_report.json`, dan `missions/smoke_test_report.json`) merupakan berkas terlindungi yang tidak boleh disentuh, dimodifikasi, di-stage, atau di-commit tanpa perintah khusus.

---

## 4. Ketentuan Penyesuaian Mata Pelajaran (Subject Adaptation Rules)

Setiap disiplin ilmu memiliki kekhasan pedagogis yang wajib dihormati dalam batas-batas yang diizinkan:

| Mata Pelajaran | Kekhasan Disiplin Ilmu yang Diakomodasi | Batasan yang Tetap Wajib Dipatuhi |
| :--- | :--- | :--- |
| **Bahasa Indonesia / Inggris** | Analisis wacana, teks sastra/informasional orisinal, struktur teks, gramatika fungsional. | Tetap berpedoman pada Decision 009 (larangan menyalin cerpen/esai berhak cipta); pemetaan halaman buku resmi. |
| **Matematika** | Penurunan rumus formal, pembuktian teorema, aljabar, kalkulus, geometri, kalibrasi numerik presisi. | Angka soal terkalibrasi rapi tanpa hasil desimal tak berhingga yang merusak gameplay; pemisahan teori dan kalkulasi. |
| **Informatika** | Logika algoritmik, pemrograman modular, arsitektur komputer, etika siber, capstone PLB. | Pemisahan tegas antara bank soal reguler Bab 1–5 dan proyek kinerja kolaboratif Bab 6 (Decision 010). |
| **Fisika** | Pemodelan fenomena alam, analisis vektor gaya 3D, hukum konservasi, kalkulasi matematis, instrumen lab. | Eksperimen fisik (merakit motor/alarm/osiloskop) tidak dipaksakan ke battle; formula matematis diverifikasi ke PDF master. |
| **Kimia** | Reaksi stoikiometri, struktur molekul, kesetimbangan, termokimia, keselamatan kerja laboratorium. | Penyetaraan reaksi terbukti benar; prosedur laboratorium basah berbahaya diposisikan sebagai pemahaman prosedur/teori. |
| **Biologi** | Proses biologis tingkat sel s.d. biosfer, keanekaragaman hayati, fisiologi, genetika, bioteknologi. | Pengamatan mikroskopis dan bedah fisik diakui sebagai asesmen kinerja; materi kuis berfokus pada analisis konsep. |

---

## 5. Tautan Otoritatif & Dokumen Pendukung

1. **Master Control Repositori:** `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md`
2. **SOP Produksi Bank Soal Batch v2.0:** `Alur Kerja Proyek/SOP-PRODUKSI-BANK-SOAL-BATCH-v2.0.md`
3. **Pedoman Hak Cipta:** `Alur Kerja Proyek/PROJECT LOG/decisions/009-content-source-and-copyright-safe-pipeline.md`
4. **Keputusan Capstone Kinerja:** `Alur Kerja Proyek/PROJECT LOG/decisions/010-informatika-chapter-6-capstone-and-regular-pool-closure.md`
5. **Katalog Baseline Mata Pelajaran TKA:** `phase-3/tka-subject-catalog-foundation-v1.json`
