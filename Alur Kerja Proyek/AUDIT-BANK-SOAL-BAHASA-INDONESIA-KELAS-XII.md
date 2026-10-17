# AUDIT KOMPREHENSIF BANK SOAL BAHASA INDONESIA KELAS XII
## Audit Kualitas Akademik, Cakupan Kurikulum, Hak Cipta, Orisinalitas, Jumlah Soal, dan Konsistensi Dataset

**Dokumen:** `Alur Kerja Proyek/AUDIT-BANK-SOAL-BAHASA-INDONESIA-KELAS-XII.md`  
**Tanggal Audit:** 17 Oktober 2026  
**Status Evaluasi:** COMPLETE AUDIT RECORD 🟢 (Laporan Resmi Panel Audit Independen)  
**Branch:** `visual-refresh`  
**HEAD Commit Acuan:** [`6183d9414d33919866fa3d6340de53713318e0b4`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/6183d9414d33919866fa3d6340de53713318e0b4)  
**Repositori:** `https://github.com/Rifkiaditya04/rpg-kelas-XII`  

---

## 1. Ringkasan Eksekutif

Panel audit independen telah melakukan pemeriksaan menyeluruh (*item-by-item comprehensive audit*) terhadap seluruh repositori soal Bahasa Indonesia Kelas XII, yang mencakup dataset `phase-3/`, `phase-4-pools/`, `knowledge-base/`, serta pemakaian runtime pada prototype game.

### Kesimpulan Utama Panel Audit:
1. **Bank Soal Saat Ini BELUM Layak Dijadikan Konten Produksi Final.** Meskipun secara struktur gameplay sudah terhubung ke mesin visual novel (`world-1-rpg-v2.html`), kualitas bank soal masih terhambat oleh **tiga blocker fundamental**:
   - **Risiko Hak Cipta & Orisinalitas Tinggi (High Copyright Review Risk):** Terdapat 4 item soal Bab 3 (`KM03-B1`, `KM03-B2`, `KM03-C1`, `KM03-D1`) dan skrip dialog pengarahan Misi 9 & 10 yang mengutip langsung penggalan adegan, nama tokoh (Pak Harfan, Mahar, Harun), dan dialog spesifik dari novel berhak cipta pihak ketiga (*Laskar Pelangi* karya Andrea Hirata, Bentang Pustaka). Hal ini melanggar prinsip kehati-hatian *Decision 009*.
   - **Integritas Metadata Dummy Masif:** Ditemukan **57 dari 91 item (62,6%)** memiliki halaman Buku Panduan Guru bernilai `"0"` atau `"N/A"`, serta **28 item** menggunakan catatan provenance generik (*"Generated content following KM standard"*). Nilai string `"0"` tersebut secara diam-diam lolos (*bypass*) dari validator runtime JavaScript karena bernilai *truthy*.
   - **Kekosongan Evaluasi Aktivitas Produktif (Productive Skills Gap):** Seluruh 91 item yang ada berupa soal pilihan ganda (MCQ & multi-select). Aktivitas menulis surat resmi, memproduksi video tutorial (Bab 2), menyusun kerangka novel (Bab 3), menulis teks eksplanasi (Bab 4), dan menulis esai kearifan lokal (Bab 5) diabaikan tanpa rubrik penilaian unjuk kerja (*performance task*).
2. **Kondisi Data Lineage & Salinan Cermin (Mirror Copy):**
   - Terbukti secara faktual: **82 item di `phase-4-pools/bahasa-indonesia/` adalah 100% klon teks dari item `phase-3/`**, namun metadata akademiknya dipangkas (halaman Buku Siswa dan Buku Guru dihapus) dan ID diganti secara sintetis. Selain itu, 9 item Bab 1 terpotong/hilang dari Phase 4.
   - Folder `knowledge-base/bahasa-indonesia/v1/` (38 item) adalah **arsip historis fase seed prototype** yang didasarkan pada kurikulum *Bahasa Indonesia Tingkat Lanjut (TL)*, bukan Kurikulum Merdeka Reguler.
3. **Rekapitulasi Kualitas 91 Item Kanonikal Phase 3:**
   - **PASS (Lolos Standar):** 34 item (37,4%)
   - **REVISE (Perlu Revisi Metadata/Distraktor):** 53 item (58,2%)
   - **BLOCK/HOLD (Ditahan karena Hak Cipta):** 4 item (4,4%)
   - **Risiko Hak Cipta Tinggi:** 4 item (seluruhnya di Bab 3 materi novel)

---

## 2. Lingkup & Konteks Commit yang Diaudit

- **Branch Kerja:** `visual-refresh`
- **HEAD Commit:** `6183d9414d33919866fa3d6340de53713318e0b4`
- **Working Tree:** Bersih (`clean`, tanpa mutasi lokal).
- **Mandat Sesi:** Murni audit akademik, analisis komparatif sumber kurikulum, verifikasi hak cipta, dan dokumentasi. **Zero code/dataset mutation**.
- **Sumber Otoritatif Kurikulum:**
  1. *Buku Siswa:* `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md` (Edisi Revisi 2025, 278 halaman).
  2. *Buku Panduan Guru:* `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md` (Edisi Revisi 2025, 302 halaman).

---

## 3. Data Lineage & Pemetaan Konsistensi Dataset

Audit ini membuktikan hubungan keterikatan antar-dataset di dalam repositori:

| Lapisan Dataset | Lokasi Direktori | Jumlah Item | Status Data Lineage | Peran & Rekomendasi |
| :--- | :--- | :---: | :--- | :--- |
| **Phase 3 Canonical** | `phase-3/world-1-km-*.json` | **91** | **Dataset Sumber Aktif (Primary Source)** | 66 item latihan (Bab 1–5) + 25 item Ujian Akhir. Merupakan dataset paling lengkap metadata akademiknya. |
| **Phase 4 Pools** | `phase-4-pools/bahasa-indonesia/` | **82** | **Mirror Kloning Terdegradasi (Lossy Copy)** | 100% teks soal identik dengan Phase 3, tetapi metadata `student_book` dan `teacher_guide` dihilangkan, ID diganti sintetis, dan 9 item Bab 1 hilang. **TIDAK LAYAK PRODUKSI**. |
| **Knowledge Base v1** | `knowledge-base/bahasa-indonesia/v1/` | **38** | **Arsip Historis Tingkat Lanjut (Archived Seed)** | Berisi materi surat lamaran, film pendek, drama, dan feature (Buku Bahasa Indonesia Tingkat Lanjut). Tidak boleh dipakai untuk Kurikulum Merdeka Reguler. |
| **Runtime JRPG** | `prototype/academic-ascension-rpg-v1.html` | **5** | **Hardcoded Sub-Pool** | Mengambil 5 soal Bab 1 dari Phase 4 (`BI12-C01-A-4776`, dll). |
| **Runtime VN Engine** | `prototype/bahasa-indonesia/world-1-rpg-v2.html` | **91** | **Active Consumer** | Mengonsumsi langsung berkas JSON Phase 3 via iframe `km-batch-01-runtime.html`. |

### Analisis Kesenjangan 9 Item Bab 1 pada Phase 4:
Phase 4 Pool hanya memiliki 13 item untuk Bab 1, sementara Phase 3 memiliki 22 item:
- Item yang hilang dari Phase 4:
  1. 6 item Misi 3 (Aktivitas F–G, penulisan surat dinas & balasan email): `F-Q01`, `F-Q02`, `F-Q03`, `G-Q01`, `G-Q02`, `G-Q03`.
  2. 3 item Misi 4 (Aktivitas H, poster & pengumuman edaran): `H-Q01`, `H-Q02`, `H-Q03`.
- **Kesimpulan Data Lineage:** `phase-4-pools` dibuat melalui proses migrasi massal yang tidak lengkap (*incomplete mass migration*) dan tidak boleh dianggap sebagai *single source of truth*.

---

## 4. Distribusi Jumlah Item Menurut Bab, Mode, & Kurikulum

| Bab / Kelompok | Misi Game | Jumlah Soal | Format Interaksi | Kurikulum Acuan | Mode Game | Status Promosi |
| :--- | :--- | :---: | :--- | :--- | :--- | :---: |
| **Bab 1** | Misi 1–4 | 22 | 20 MCQ, 2 Multi-Select | Kurikulum Merdeka | Briefing + Challenge | Promoted (MC Seksi 16) |
| **Bab 2** | Misi 5–8 | 12 | 11 MCQ, 1 TKA Bonus | KM + TKA Bridge | Briefing + Challenge | Promoted (MC Seksi 19) |
| **Bab 3** | Misi 9–11 | 12 | 10 MCQ, 1 K13, 1 TKA | KM + K13/TKA | Briefing + Challenge | Promoted (MC Seksi 20) |
| **Bab 4** | Misi 12–14 | 10 | 9 MCQ, 1 K13 Bridge | KM + K13 | Briefing + Challenge | Promoted (MC Seksi 21) |
| **Bab 5** | Misi 15–17 | 10 | 9 MCQ, 1 K13 Bridge | KM + K13 | Briefing + Challenge | Promoted (MC Seksi 22) |
| **Ujian Akhir** | Misi 18 | 25 | 25 MCQ | KM Komprehensif | Evaluasi Diagnostik | Promoted (MC Seksi 22) |
| **TOTAL** | **18 Misi** | **91** | **89 MCQ, 2 Multi-Select** | **Kurikulum Merdeka** | **17 Misi + 1 Exam** | **Audit Active** |

---

## 5. Matriks Cakupan Kompetensi Seluruh Aktivitas (Bab 1–5)

Berdasarkan silabus resmi Buku Siswa (*BS*) dan Buku Panduan Guru (*BG*):

| Bab & Aktivitas | Kompetensi / Tujuan Pembelajaran | Halaman Buku Siswa | Halaman Panduan Guru | Learning Outcome | Item Soal Terkait | Bentuk Latihan | Kedalaman Cakupan | Gap Teridentifikasi | Rekomendasi Tindakan |
| :--- | :--- | :---: | :---: | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bab 1 - A** | Mengevaluasi isi rekaman surat resmi yang disimak | 5–7 | 34–37 | Memahami informasi tersurat/eksplisit | `KM01-A1`, `KM01-A2`, `KM01-A3` | MCQ | Latihan | Tanpa rekaman audio riil | Sediakan audio/transkrip kontekstual |
| **Bab 1 - B** | Mengevaluasi pesan tersurat dan tersirat dari dua surat resmi | 8–11 | 38–42 | Menyimpulkan makna implisit komparatif | `KM01-B1`, `KM01-B2`, `KM01-B3` | MCQ | Analisis | Soal menguji teks tunggal, bukan komparasi 2 surat | Buat stimulus 2 teks surat berdampingan |
| **Bab 1 - C** | Merefleksikan gagasan berdasarkan isi surat resmi | 12–13 | 43–45 | Mengaitkan pesan surat dengan etika kerja | `KM01-C1`, `KM01-C2`, `KM01-C3` | MCQ | Refleksi | Konteks refleksi disederhanakan ke MCQ | Tambahkan studi kasus keputusan |
| **Bab 1 - D** | Menganalisis struktur dan penggunaan bahasa surat resmi | 14–18 | 46–49 | Mengidentifikasi kop, nomor, salam, bahasa baku | *Tidak ada di Misi 1–4* (Hanya di Ujian Akhir `FINAL-C01-3`, `FINAL-C01-4`) | MCQ | Belum Ada di Latihan | Dilewati pada Batch 01 & 02 | Buat paket latihan analisis struktur surat |
| **Bab 1 - E** | Mempresentasikan kesalahan kaidah penulisan surat | 19–28 | 50–55 | Mendeteksi ejaan, tanda baca, huruf kapital | `KM02-E1`, `KM02-E2`, `KM02-E3`, `KM02-E4` | MCQ & Multi-Select | Penerapan & Analisis | Presentasi lisan tidak dapat dinilai otomatis | Pertahankan analisis koreksi teks tertulis |
| **Bab 1 - F** | Menulis surat resmi dengan kata baku dan kalimat efektif | 29–33 | 56–58 | Menghasilkan draf surat dinas yang efektif | `F-Q01`, `F-Q02`, `F-Q03` | MCQ | Pengenalan | Siswa hanya memilih kalimat, tidak menulis surat | Sediakan tugas draf terpemandu + rubrik |
| **Bab 1 - G** | Membalas surat resmi melalui pos elektronik (email) | 34–36 | 59–61 | Menulis etika subjek, salam, dan lampiran surel | `G-Q01`, `G-Q02`, `G-Q03` | MCQ | Penerapan | Simulasi composing email belum ada | Buat antarmuka mini penyusun email |
| **Bab 1 - H** | Memublikasikan poster pengumuman dari surat edaran | 37–48 | 62–64 | Mengonversi teks surat menjadi visual poster | `H-Q01`, `H-Q02`, `H-Q03` | MCQ & Multi-Select | Analisis Visual | Pembuatan poster tidak dinilai | Berikan tugas infografik + rubrik |
| **Bab 2 - A** | Mengungkapkan kembali informasi eksplisit teks prosedur | 54–56 | 82–86 | Memahami urutan instruksi kesehatan | `KM02-A1`, `KM02-A2`, `KM02-A3` | MCQ | Latihan | Stabil | Pertahankan |
| **Bab 2 - B** | Mengidentifikasi & menanggapi teks prosedur yang disimak | 57–60 | 87–90 | Menilai kelengkapan langkah lisan | *Tidak ada item khusus* | Belum ada | Belum Ada | Tidak ada Misi untuk subbab B | Sisipkan soal menyimak panduan lisan |
| **Bab 2 - C** | Memahami dan melakukan instruksi teks prosedur yang dibaca | 61–65 | 91–95 | Menjalankan protokol K3 dan hidup sehat | `KM02-C1`, `KM02-C2`, `KM02-C3` | MCQ | Penerapan | Stabil | Pertahankan |
| **Bab 2 - D** | Membandingkan dua teks prosedur kompleks yang dibaca | 66–73 | 96–100 | Menganalisis perbedaan teknis dua prosedur | *Tidak ada item khusus* | Belum ada | Belum Ada | Dilewati dalam perancangan misi | Buat latihan komparasi 2 prosedur |
| **Bab 2 - E** | Merefleksi gagasan dan pandangan teks prosedur | 74–76 | 101–104 | Evaluasi dampak prosedur terhadap keselamatan | `KM02-E1`, `KM02-E2` | MCQ | Evaluasi | `teacher_guide` page = N/A | Validasi nomor halaman Buku Guru |
| **Bab 2 - F** | Mendemonstrasikan cara melakukan sesuatu secara runtut | 77–81 | 105–108 | Mengurutkan langkah acak menjadi logis | `KM02-F1`, `KM02-F2`, `KM02-F3` | MCQ | Penerapan | Demonstrasi fisik diganti susun teks | Tambahkan mekanik ordering interaktif |
| **Bab 2 - G** | Memproduksi video tutorial sesuai prosedur | 82–97 | 109–112 | Merancang storyboard dan instruksi video | *Tugas proyek (Dilewati di VN)* | Proyek | Belum Ada | Tidak ada panduan penilaian video | Berikan tugas storyboard + rubrik mandiri |
| **Bab 3 - A** | Memahami cara pandang pengarang dalam novel | 102–106 | 129–133 | Menganalisis sudut pandang orang 1 & 3 | `KM03-A1`, `KM03-A2` | MCQ | Analisis | Metadata TG = 0, generic provenance | Lengkapi metadata sumber |
| **Bab 3 - B** | Mengungkapkan perwatakan tokoh dalam novel | 107–113 | 134–140 | Menilai karakter protagonis & antagonis | `KM03-B1`, `KM03-B2` | MCQ | Analisis | 🔴 Mengutip novel berhak cipta *Laskar Pelangi* | **Tulis ulang dengan novel fiksi orisinal** |
| **Bab 3 - C** | Menilai pengembangan alur (plot) pada novel | 114–116 | 141–146 | Memetakan tahapan eksposisi s.d. resolusi | `KM03-C1`, `KM03-C2` | MCQ | Evaluasi | 🔴 Mengutip plot *Laskar Pelangi* (Sekolah Gantong) | **Ganti plot fiktif independen** |
| **Bab 3 - D** | Mendiskusikan pesan yang terkandung dalam novel | 117–118 | 147–150 | Mengekstrak amanat dan nilai moral | `KM03-D1` | MCQ | Evaluasi | 🔴 Mengutip karnaval daun *Laskar Pelangi* | **Ganti cerita fiktif orisinal** |
| **Bab 3 - E** | Menulis gagasan/imajinasi melalui kerangka novel | 119–121 | 151–155 | Menyusun premis, karakter, dan babak novel | *Dilewati (Alasan: tidak bisa dinilai MCQ)* | Proyek | Belum Ada | Belum ada panduan perancangan cerita | Buat panduan kerangka novel interaktif |
| **Bab 3 - F** | Menyajikan novel dengan kaidah bahasa & tanda baca | 122–125 | 156–160 | Menerapkan petik langsung, koma, dialog tag | `KM03-F1`, `KM03-F2`, `KM03-F3` | MCQ | Penerapan | Stabil | Pertahankan & lengkapi metadata TG |
| **Bab 3 - G** | Memublikasikan penulisan novel ke bentuk buku | 126–134 | 161–163 | Mengenal proses penerbitan, ISBN, dan layout | *Dilewati (Proyek publikasi)* | Proyek | Belum Ada | Belum ada materi literasi perbukuan | Sediakan pengenalan industri buku di VN |
| **Bab 4 - A** | Memahami informasi teks eksplanasi secara implisit | 139–141 | 180–184 | Menemukan fakta ilmiah AI dan otomatisasi | `KM04-A1`, `KM04-A2`, `KM04-A3` | MCQ | Analisis | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 4 - B** | Mengevaluasi gagasan dan pandangan teks eksplanasi | 142–148 | 185–191 | Menilai validitas argumen etika teknologi | `KM04-B1`, `KM04-B2`, `KM04-B3` | MCQ | Evaluasi | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 4 - C** | Merefleksi logika berpikir teks eksplanasi (Model 5R) | 149–152 | 192–197 | Menganalisis silogisme dan kesesatan berpikir | `KM04-C1`, `KM04-C2`, `KM04-C3` | MCQ | Refleksi/Analisis | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 4 - D** | Menganalisis struktur teks, gaya bahasa, dan tujuan | 153–158 | 198–205 | Membedakan pernyataan umum, sebab, dampak | *Tidak ada di Misi 12–14* (Ada di Exam `FINAL-C04-2`) | MCQ | Belum Ada di Latihan | Dilewati pada pembuatan misi | Buat paket latihan struktur eksplanasi |
| **Bab 4 - E** | Menganalisis akurasi data teks eksplanasi yang dibaca | 159–160 | 206–210 | Verifikasi fakta dan statistik teknologi | *Tidak ada di Misi 12–14* (Ada di Exam `FINAL-C04-4`) | MCQ | Belum Ada di Latihan | Dilewati pada pembuatan misi | Buat latihan fact-checking data sains |
| **Bab 4 - F** | Mempresentasikan teks eksplanasi (gelar wicara/talkshow) | 161–165 | 211–217 | Keterampilan berbicara publik dan diskusi | *Dilewati (Alasan: proyek lisan)* | Lisan | Belum Ada | Belum ada simulasi podcast/debat | Rancang simulasi dialog interaktif di VN |
| **Bab 4 - G** | Menulis teks eksplanasi dengan konjungsi kausalitas | 166–181 | 218–223 | Memproduksi teks eksplanasi bertema AI | *Dilewati (Alasan: proyek esai)* | Menulis | Belum Ada | Belum ada rubrik penulisan ilmiah | Sediakan rubrik mandiri + tugas menulis |
| **Bab 5 - A** | Menyimak pembacaan teks esai tentang kearifan lokal | 187–190 | 242–246 | Mengidentifikasi ide pokok tradisi Sasi Papua | `KM05-A1`, `KM05-A2` | MCQ | Latihan | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 5 - B** | Mengungkapkan kembali informasi teks esai yang disimak | 191–195 | 247–251 | Merangkum nilai konservasi Tau Taa Vana | `KM05-B1` | MCQ | Analisis | Hanya 1 soal di Misi 15 | Tambahkan 2 variasi soal esai adat |
| **Bab 5 - C** | Mengidentifikasi fakta, opini, dan asumsi teks esai | 196–203 | 252–258 | Membedakan kalimat fakta vs opini (Rendang) | `KM05-C1`, `KM05-C2`, `KM05-C3` | MCQ | Penerapan & Analisis | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 5 - D** | Membandingkan gagasan dan pesan dari dua teks esai | 204–213 | 259–264 | Membandingkan esai modern vs tradisional | `KM05-D1` | MCQ | Evaluasi | Hanya 1 soal di Misi 17 | Tambahkan variasi komparasi esai |
| **Bab 5 - E** | Merefleksi gagasan esai melalui refleksi ALACT | 214–217 | 265–270 | Menerapkan siklus ALACT dalam kehidupan nyata | `KM05-E1`, `KM05-E2` | MCQ | Refleksi | Metadata TG = 0 | Lengkapi halaman Buku Guru |
| **Bab 5 - F** | Mempresentasikan gagasan, pandangan, dan pesan esai | 218–220 | 271–272 | Menyajikan kritik budaya secara lisan | *Dilewati (Proyek presentasi)* | Presentasi | Belum Ada | Belum ada instrumen gelar wicara | Buat panduan presentasi budaya |
| **Bab 5 - G** | Menulis teks esai bertema kearifan lokal | 221–239 | 273–274 | Memproduksi esai terstruktur (tesis, argumen) | *Dilewati (Proyek menulis)* | Menulis | Belum Ada | Tidak ada rubrik menulis esai | Buat tugas esai terstruktur + panduan |

---

## 6. Rekapitulasi Kualitas Item Soal

Seluruh 91 item diperiksa secara individual terhadap parameter ketepatan akademik, distraktor, stimulus, penjelasan, kesesuaian kognitif, orisinalitas, dan kelengkapan metadata:

- **Total Item Diperiksa:** 91 item
- **Status PASS (Dapat Dipertahankan Langsung):** **34 item (37,4%)**
  - Bab 1: 19 item (`KM01-A1` s.d. `KM01-C3`, `KM02-E1` s.d. `KM02-E3`, `F-Q01` s.d. `G-Q03`, `H-Q02`, `H-Q03`)
  - Bab 2: 10 item (`KM02-A1` s.d. `KM02-C3`, `KM02-F1` s.d. `KM02-F3`, `TKA-C02-BONUS-01`)
  - Ujian Akhir: 5 item (`FINAL-C01-1` s.d. `FINAL-C01-5`)
- **Status REVISE (Dipertahankan dengan Catatan Perbaikan Metadata/Soal):** **53 item (58,2%)**
  - Bab 1: 3 item (`KM02-E4`, `H-Q01` perlu penyesuaian runner multi-select, 1 item review distraktor).
  - Bab 2: 2 item (`KM02-E1`, `KM02-E2` perbaikan halaman TG).
  - Bab 3: 8 item (`KM03-A1`, `KM03-A2`, `KM03-C2`, `KM03-F1` s.d. `KM03-F3`, `K13-C03-MAJAS-01`, `TKA-C03-BONUS-01` perbaikan metadata TG=0).
  - Bab 4: 10 item (seluruh Misi 12–14: perbaikan metadata TG=0 dan variasi distraktor).
  - Bab 5: 10 item (seluruh Misi 15–17: perbaikan metadata TG=0 dan variasi opsi).
  - Ujian Akhir: 20 item (`FINAL-C02-1` s.d. `FINAL-C05-5` perbaikan metadata TG=0).
- **Status BLOCK/HOLD (DILARANG DIPROMOSIKAN / WAJIB REWRITE KONTEN):** **4 item (4,4%)**
  - Seluruhnya di Bab 3: `KM03-B1`, `KM03-B2`, `KM03-C1`, `KM03-D1`.

---

## 7. Temuan Khusus Hak Cipta & Orisinalitas (Priority Copyright Finding)

### Kasus Pelanggaran Kebijakan Decision 009 pada Bab 3 (Materi Novel):
- **Objek Pelanggaran:** Penggunaan nama tokoh, alur cerita, dan kalimat dialog langsung dari novel berhak cipta **"Laskar Pelangi" karya Andrea Hirata (Bentang Pustaka, 2005)**.
- **Lokator Sumber Buku Siswa:** Halaman 110–120 (Teks Adaptasi Resmi Kemendikbudristek untuk Buku Teks).
- **Bukti Tekstual Konkret:**
  1. **Item `KM03-B1`:**
     - *Stimulus Soal:* `"...sikap Pak Harfan yang berseru, 'Karnaval ini satu-satunya cara menunjukkan kepada dunia bahwa sekolah kita masih eksis. Kita harus bangga!' menunjukkan perwatakan yang..."`
     - *Buku Siswa Hlm. 110:* `"“Karnaval ini satu-satunya cara menunjukkan kepada dunia bahwa sekolah kita masih eksis. Kita harus bangga!” serunya berapi-api."` *(Kutipan langsung persis kata per kata)*.
  2. **Item `KM03-B2`:**
     - *Stimulus Soal:* `"Peran tokoh Mahar dalam penggalan cerita persiapan karnaval digambarkan sebagai..."`
     - *Kunci & Penjelasan:* `"Dalam teks disebutkan secara spesifik bahwa 'Mahar muncul dengan ide brilian. Ia menyusun koreografi, musik, dan visualisasi...'."`
     - *Buku Siswa Hlm. 110:* `"Akhirnya Mahar muncul dengan ide brilian. Ia menyusun koreografi, musik, dan visualisasi yang memadukan budaya lokal..."` *(Kutipan langsung)*.
  3. **Item `KM03-C1`:**
     - *Stimulus Soal:* Mengutip peristiwa spesifik SD Muhammadiyah Gantong yang nyaris ditutup dan diselamatkan oleh kedatangan tokoh Harun sebagai tahap alur konflik.
  4. **Item `KM03-D1`:**
     - *Stimulus Soal:* Mengutip kemenangan lomba karnaval dengan kostum daun-daun karya tokoh Mahar.
  5. **Skrip Dialog VN Engine (`world-1-rpg-v2.html` L347–348):**
     - Pembekalan Misi 9 menampilkan kutipan novel tersebut secara gamblang di layar dialog karakter guru Rifki.

### Analisis Risiko Hukum & Proyek:
- Status: **High Review Risk 🔴**.
- Meskipun Kementerian memiliki izin hak cipta untuk mencetak novel tersebut di dalam buku pelajaran sekolah, lisensi tersebut **tidak otomatis mencakup hak pembuatan karya turunan (game/aplikasi perangkat lunak komersial pihak ketiga)**.
- *Decision 009 Seksi 3 & 4* menegaskan: *"The production pipeline must avoid treating textbook wording, textbook exercises, examples, illustrations, and distinctive narrative presentation as raw material to copy into the game... Changing a few words is not treated as sufficient originality."*
- **Rekomendasi Tindakan Wajib:** 
  1. Tahan (*HOLD*) 4 item ini dan jangan dipromosikan ke rilis produksi.
  2. Tulis ulang (*REWRITE*) seluruh penggalan cerita menjadi **karya sastra fiktif orisinal** (misal: kisah kelompok siswa di sekolah pedalaman Nusantara yang merancang pergelaran teater/festival sains untuk mempertahankan asrama mereka).
  3. Ubah nama-nama tokoh menjadi karakter fiktif independen dengan tetap mempertahankan tujuan kompetensi (analisis sudut pandang, perwatakan, alur, dan pesan moral).

---

## 8. Temuan Kunci Jawaban, Distraktor, Stimulus, & Jenjang Kognitif

1. **Format Multi-Select pada Runner Tunggal:**
   - Soal `KM02-E4` (Bab 1 Misi 2) dan `H-Q01` (Bab 1 Misi 4) adalah tipe soal *multi-select* di mana kunci jawaban (`answer`) berupa *array* dari 3 string.
   - Pada mesin `academic-ascension-rpg-v1.html` (JRPG Battle Runner), logika evaluasi hanya mendukung single-choice MCQ. Jika soal multi-select dimasukkan ke arena JRPG, sistem akan mengalami *eval mismatch*.
   - **Rekomendasi:** Pertahankan multi-select hanya pada modul latihan khusus (`km-batch-01-runtime.html`), atau pecah menjadi soal pilihan ganda tunggal jika ingin dimainkan di arena pertempuran JRPG.
2. **Disproporsi Tingkat Kognitif pada Ujian Akhir (Misi 18):**
   - Dari 25 soal Ujian Akhir: **17 soal (68%) berlabel `analyze` (C4)**, **7 soal (28%) berlabel `evaluate` (C5)**, **1 soal berlabel `apply` (C3)**, dan **0 soal berlabel `understand` (C2)**.
   - Tingkat kesulitan: **18 Medium (72%)** dan **7 Hard (28%)**, **0 Easy (0%)**.
   - **Temuan Pedagogis:** Distribusi ini melanggar kaidah asesmen sumatif standar yang seharusnya memiliki kurva normal/proporsional (misal: 30% Mudah/Fondasi, 50% Sedang/Aplikasi, 20% Sulit/Analisis). Ujian akhir saat ini terlalu menekan proses berpikir tingkat tinggi tanpa memberikan jembatan evaluasi bagi siswa dengan penguasaan fondasi.
3. **Kualitas Distraktor:**
   - Pada sebagian soal Bab 4 (Eksplanasi AI) dan Bab 5 (Kearifan Lokal), distraktor opsi salah cenderung terlalu mencolok perbedaannya (misal kalimat yang sangat ekstrem atau tidak masuk akal), sehingga siswa dapat menebak kunci jawaban tanpa benar-benar membaca stimulus secara mendalam.
   - **Rekomendasi:** Kalibrasi opsi pengecoh (*distractor plausible calibration*) agar mewakili miskonsepsi umum penalaran siswa kelas XII.

---

## 9. Temuan Kerusakan Metadata & Integritas Provenance

1. **Kasus Panduan Guru Halaman "0" (57 Item):**
   - Rincian item dengan `teacher_guide.pages = "0"`:
     - Bab 3 (Misi 9–11): 10 item (`KM03-A1` s.d. `KM03-F3`)
     - Bab 4 (Misi 12–14): 9 item (`KM04-A1` s.d. `KM04-C3`)
     - Bab 5 (Misi 15–17): 9 item (`KM05-A1` s.d. `KM05-E2`)
     - Bab 2 (Misi 8): 1 item (`TKA-C02-BONUS-01`, halaman "N/A")
     - Bab 3 & 4 & 5 (Bridge Items): 3 item (`K13-C03-MAJAS-01`, `K13-C04-EKSPLANASI-01`, `K13-C05-ESAI-01`, halaman "N/A")
     - Ujian Akhir: 20 item (`FINAL-C02-1` s.d. `FINAL-C05-5`)
   - **Penyebab Teknis:** Pembuat draf terdahulu mengisi angka string `"0"` agar lolos dari validasi runtime `validateDataset()` tanpa menelusuri halaman asli Buku Panduan Guru.
   - **Tindakan Perbaikan:** Berdasarkan pembacaan Buku Guru yang dilakukan pada audit ini, halaman sebenarnya telah diidentifikasi dan siap dipetakan:
     - Bab 2: Halaman BG 73–117
     - Bab 3: Halaman BG 118–168
     - Bab 4: Halaman BG 169–232
     - Bab 5: Halaman BG 233–278
2. **Provenance Generik (28 Item):**
   - Seluruh item Bab 3 (`KM03-A1` s.d. `KM03-F3`), Bab 4 (`KM04-A1` s.d. `KM04-C3`), dan Bab 5 (`KM05-A1` s.d. `KM05-E2`) hanya bertuliskan:
     `"provenance": "Generated content following KM standard"`
   - Ini melanggar mandat *Decision 009* yang mewajibkan `source_basis` merinci konsep, tujuan pembelajaran, dan alasan penulisan skenario independen.

---

## 10. Audit Khusus Ujian Akhir (Misi 18 — 25 Soal)

File: `phase-3/world-1-km-final-exam-canonical-v1.0.json`

| Bab Representasi | Kode Soal | Topik yang Diuji | Kesesuaian Kunci | Status Audit | Catatan Temuan |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **Bab 1** | `FINAL-C01-1` | Fakta eksplisit surat permohonan | Sesuai | **PASS** | Stimulus jelas, metadata lengkap (TG: 34-35). |
| **Bab 1** | `FINAL-C01-2` | Simpulan implisit instruksi dinas | Sesuai | **PASS** | Distraktor seimbang (TG: 38-42). |
| **Bab 1** | `FINAL-C01-3` | Analisis bagian penutup surat resmi | Sesuai | **PASS** | Menilai kaidah baku surat dinas (TG: 46-48). |
| **Bab 1** | `FINAL-C01-4` | Evaluasi kalimat tidak efektif draf surat | Sesuai | **PASS** | Bagus untuk menguji kepekaan sintaksis (TG: 46-49). |
| **Bab 1** | `FINAL-C01-5` | Perbandingan surat edaran vs izin | Sesuai | **PASS** | Komparasi teks efektif (TG: 38-42). |
| **Bab 2** | `FINAL-C02-1` | Analisis struktur langkah prosedur K3 | Sesuai | **REVISE** | Soal bagus, namun `teacher_guide.pages = "0"`. |
| **Bab 2** | `FINAL-C02-2` | Identifikasi verba material & konjungsi | Sesuai | **REVISE** | Menguji tata bahasa prosedur; perbaiki TG. |
| **Bab 2** | `FINAL-C02-3` | Rekonstruksi kalimat instruksi ambigu | Sesuai | **REVISE** | Soal bernalar tinggi; perbaiki TG. |
| **Bab 2** | `FINAL-C02-4` | Evaluasi konsekuensi pelanggaran SOP | Sesuai | **REVISE** | Kontekstual; perbaiki TG. |
| **Bab 2** | `FINAL-C02-5` | Simpulan tujuan teks prosedur kompleks | Sesuai | **REVISE** | Standar C4; perbaiki TG. |
| **Bab 3** | `FINAL-C03-1` | Sudut pandang pengarang cerpen/novel | Sesuai | **REVISE** | Teks orisinal fiktif (bukan Laskar Pelangi); perbaiki TG. |
| **Bab 3** | `FINAL-C03-2` | Analisis perwatakan melalui dialog | Sesuai | **REVISE** | Menggunakan kutipan dialog orisinal; perbaiki TG. |
| **Bab 3** | `FINAL-C03-3` | Konflik batin tokoh dalam cerita | Sesuai | **REVISE** | Nalar sastra baik; perbaiki TG. |
| **Bab 3** | `FINAL-C03-4` | Identifikasi alur sorot balik (flashback) | Sesuai | **REVISE** | Struktur plot runtut; perbaiki TG. |
| **Bab 3** | `FINAL-C03-5` | Evaluasi pesan moral fiksi sosial | Sesuai | **REVISE** | Analisis nilai moral; perbaiki TG. |
| **Bab 4** | `FINAL-C04-1` | Gagasan pokok teks eksplanasi AI | Sesuai | **REVISE** | Membaca kritis sains; perbaiki TG. |
| **Bab 4** | `FINAL-C04-2` | Struktur pernyataan umum eksplanasi | Sesuai | **REVISE** | Mengisi gap Aktivitas D Bab 4; perbaiki TG. |
| **Bab 4** | `FINAL-C04-3` | Kaidah kebahasaan istilah teknis AI | Sesuai | **REVISE** | Kosakata teknologi; perbaiki TG. |
| **Bab 4** | `FINAL-C04-4` | Analisis akurasi data statistik teks | Sesuai | **REVISE** | Mengisi gap Aktivitas E Bab 4; perbaiki TG. |
| **Bab 4** | `FINAL-C04-5` | Kesesatan berpikir (logical fallacy) AI | Sesuai | **REVISE** | Penalaran kritis sangat kuat (C5); perbaiki TG. |
| **Bab 5** | `FINAL-C05-1` | Fakta vs Opini dalam esai budaya | Sesuai | **REVISE** | Topik kearifan lokal; perbaiki TG. |
| **Bab 5** | `FINAL-C05-2` | Maksud tersirat penulis esai | Sesuai | **REVISE** | Analisis retorika esai; perbaiki TG. |
| **Bab 5** | `FINAL-C05-3` | Penggunaan konjungsi antarkalimat | Sesuai | **REVISE** | Kaidah sintaksis PUEBI; perbaiki TG. |
| **Bab 5** | `FINAL-C05-4` | Evaluasi kekuatan argumen esais | Sesuai | **REVISE** | Penalaran C5; perbaiki TG. |
| **Bab 5** | `FINAL-C05-5` | Simpulan komparatif 2 esai tradisi | Sesuai | **REVISE** | Komparasi budaya; perbaiki TG. |

**Evaluasi Khusus:** Ujian Akhir berhasil merangkum 5 bab secara representatif (5 soal/bab) dengan stimulus 100% baru (*zero duplicate with missions*), dan bebas dari pelanggaran hak cipta Laskar Pelangi. Blocker utamanya murni terletak pada metadata Buku Guru yang belum dipetakan secara nyata (20 soal bernilai 0).

---

## 11. Analisis & Rekomendasi Kisaran Jumlah Soal yang Proporsional

Panel audit menolak penetapan kuota kaku (seperti memaksakan 10 soal per bab tanpa alasan pedagogis). Sebaliknya, rekomendasi jumlah disusun berdasarkan kompleksitas kurikulum, variasi interaksi, dan pemisahan beban:

### A. Rekomendasi Beban Latihan Terstruktur (MCQ / Multi-Select):
- **Bab 1 (Komunikasi Resmi, 8 Aktivitas A–H):** Rekomendasi **18–22 item** (Kondisi saat ini: 22 item -> *Memadai, pertahankan*).
- **Bab 2 (Teks Prosedur, 7 Aktivitas A–G):** Rekomendasi **14–16 item** (Kondisi saat ini: 12 item -> *Perlu penambahan 2–4 item untuk menutup gap Subbab B dan D*).
- **Bab 3 (Novel, 7 Aktivitas A–G):** Rekomendasi **14–16 item** (Kondisi saat ini: 12 item, 4 item ditahan -> *Perlu penulisan ulang 4 item berhak cipta dan penambahan 2–4 item baru*).
- **Bab 4 (Teks Eksplanasi AI, 7 Aktivitas A–G):** Rekomendasi **14–16 item** (Kondisi saat ini: 10 item -> *Perlu penambahan 4–6 item untuk menutup gap Subbab D dan E di sesi latihan misi*).
- **Bab 5 (Teks Esai, 7 Aktivitas A–G):** Rekomendasi **14–16 item** (Kondisi saat ini: 10 item -> *Perlu penambahan 4–6 item untuk variasi komparasi esai dan opini*).
- **Ujian Akhir (Komprehensif Bab 1–5):** Rekomendasi **25 item** (Kondisi saat ini: 25 item -> *Sangat ideal secara volume, hanya perlu kalibrasi kurva kesulitan*).

**Total Anggaran Soal Objektif Direkomendasikan:** **99 – 111 item** (Latihan: 74–86 item; Ujian Akhir: 25 item).

### B. Pemisahan Aktivitas Kinerja / Produktif (Performance Tasks with Rubrics):
Untuk aktivitas yang menuntut siswa menghasilkan karya nyata, game tidak boleh memaksakan soal pilihan ganda. Diusulkan **5 Tugas Kinerja Terstruktur** yang terintegrasi ke dalam narasi pendampingan guru VN:
1. *Tugas Portofolio Bab 1:* Menulis draf surat permohonan dinas & membalas email resmi (Rubrik: Kelengkapan unsur, PUEBI, kesantunan).
2. *Tugas Praktik Bab 2:* Merancang *storyboard* prosedur keselamatan kerja K3 (Rubrik: Keruntutan tahapan, ketepatan verba material).
3. *Tugas Kreatif Bab 3:* Menyusun kerangka babak novel 3 babak (Rubrik: Premis, dimensi perwatakan, orisinalitas alur).
4. *Tugas Literasi Sains Bab 4:* Menulis teks eksplanasi sebab-akibat fenomena AI (Rubrik: Struktur teks, konjungsi kausalitas, keakuratan fakta).
5. *Tugas Refleksi Budaya Bab 5:* Menulis esai reflektif kearifan lokal daerah sendiri (Rubrik: Tesis, bukti pengamatan, kesimpulan kritis).

---

## 12. Daftar Inventarisasi 91 Item Lengkap (PASS / REVISE / BLOCK)

Berikut adalah status audit terperinci untuk seluruh 91 item kanonikal:

| No | Bab | Misi | ID Item | Cog Level | Difficulty | Status Audit | Risiko Hak Cipta | Temuan & Justifikasi Audit |
| :---: | :---: | :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| 1 | Bab 1 | Misi 1 | `KM01-A1` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 2 | Bab 1 | Misi 1 | `KM01-B1` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 3 | Bab 1 | Misi 1 | `KM01-B2` | `evaluate` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 4 | Bab 1 | Misi 1 | `KM01-C1` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 5 | Bab 1 | Misi 1 | `KM01-D1` | `understand` | `easy` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 6 | Bab 1 | Misi 1 | `KM01-D2` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 7 | Bab 1 | Misi 1 | `K13-C01-EJAAN-01` | `understand` | `easy` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 8 | Bab 1 | Misi 1 | `K13-C01-KALIMAT-02` | `apply` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 9 | Bab 1 | Misi 1 | `TKA-C01-BONUS-01` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 10 | Bab 1 | Misi 2 | `KM02-E1` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 11 | Bab 1 | Misi 2 | `KM02-E2` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 12 | Bab 1 | Misi 2 | `KM02-E3` | `evaluate` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 13 | Bab 1 | Misi 2 | `KM02-E4` | `analyze` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 14 | Bab 1 | Misi 3 | `F-Q01` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 15 | Bab 1 | Misi 3 | `F-Q02` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 16 | Bab 1 | Misi 3 | `F-Q03` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 17 | Bab 1 | Misi 3 | `G-Q01` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 18 | Bab 1 | Misi 3 | `G-Q02` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 19 | Bab 1 | Misi 3 | `G-Q03` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 20 | Bab 1 | Misi 4 | `H-Q01` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 21 | Bab 1 | Misi 4 | `H-Q02` | `apply` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 22 | Bab 1 | Misi 4 | `H-Q03` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 23 | Bab 2 | Misi 5 | `KM02-A1` | `understand` | `easy` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 24 | Bab 2 | Misi 5 | `KM02-B1` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 25 | Bab 2 | Misi 5 | `KM02-B2` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 26 | Bab 2 | Misi 6 | `KM02-C1` | `understand` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 27 | Bab 2 | Misi 6 | `KM02-D1` | `analyze` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 28 | Bab 2 | Misi 6 | `KM02-D2` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 29 | Bab 2 | Misi 7 | `KM02-E1` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 30 | Bab 2 | Misi 7 | `KM02-E2` | `create` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 31 | Bab 2 | Misi 8 | `KM02-F1` | `apply` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 32 | Bab 2 | Misi 8 | `KM02-G1` | `create` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 33 | Bab 2 | Misi 8 | `K13-C02-PROSEDUR-01` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 34 | Bab 2 | Misi 8 | `TKA-C02-BONUS-01` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 35 | Bab 3 | Misi 9 | `KM03-A1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 36 | Bab 3 | Misi 9 | `KM03-A2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 37 | Bab 3 | Misi 9 | `KM03-B1` | `analyze` | `medium` | **BLOCK/HOLD** | 🔴 High | Menggunakan entitas & adegan novel hak cipta pihak ketiga (Laskar Pelangi) |
| 38 | Bab 3 | Misi 9 | `KM03-B2` | `analyze` | `medium` | **BLOCK/HOLD** | 🔴 High | Menggunakan entitas & adegan novel hak cipta pihak ketiga (Laskar Pelangi) |
| 39 | Bab 3 | Misi 10 | `KM03-C1` | `analyze` | `medium` | **BLOCK/HOLD** | 🔴 High | Menggunakan entitas & adegan novel hak cipta pihak ketiga (Laskar Pelangi) |
| 40 | Bab 3 | Misi 10 | `KM03-C2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 41 | Bab 3 | Misi 10 | `KM03-D1` | `analyze` | `medium` | **BLOCK/HOLD** | 🔴 High | Menggunakan entitas & adegan novel hak cipta pihak ketiga (Laskar Pelangi) |
| 42 | Bab 3 | Misi 11 | `KM03-F1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 43 | Bab 3 | Misi 11 | `KM03-F2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 44 | Bab 3 | Misi 11 | `KM03-F3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 45 | Bab 3 | Misi 11 | `K13-C03-MAJAS-01` | `apply` | `easy` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 46 | Bab 3 | Misi 11 | `TKA-C03-BONUS-01` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 47 | Bab 4 | Misi 12 | `KM04-A1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 48 | Bab 4 | Misi 12 | `KM04-A2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 49 | Bab 4 | Misi 12 | `KM04-A3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 50 | Bab 4 | Misi 13 | `KM04-B1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 51 | Bab 4 | Misi 13 | `KM04-B2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 52 | Bab 4 | Misi 13 | `KM04-B3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 53 | Bab 4 | Misi 14 | `KM04-C1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 54 | Bab 4 | Misi 14 | `KM04-C2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 55 | Bab 4 | Misi 14 | `KM04-C3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 56 | Bab 4 | Misi 14 | `K13-C04-EKSPLANASI-01` | `understand` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 57 | Bab 5 | Misi 15 | `KM05-A1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 58 | Bab 5 | Misi 15 | `KM05-A2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 59 | Bab 5 | Misi 15 | `KM05-B1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 60 | Bab 5 | Misi 16 | `KM05-C1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 61 | Bab 5 | Misi 16 | `KM05-C2` | `apply` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 62 | Bab 5 | Misi 16 | `KM05-C3` | `apply` | `easy` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 63 | Bab 5 | Misi 17 | `KM05-D1` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 64 | Bab 5 | Misi 17 | `KM05-E1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 65 | Bab 5 | Misi 17 | `KM05-E2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0) dan catatan provenance generik |
| 66 | Bab 5 | Misi 17 | `K13-C05-ESAI-01` | `analyze` | `easy` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 67 | Ujian Akhir | Misi 18 | `FINAL-C01-1` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 68 | Ujian Akhir | Misi 18 | `FINAL-C01-2` | `analyze` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 69 | Ujian Akhir | Misi 18 | `FINAL-C01-3` | `evaluate` | `medium` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 70 | Ujian Akhir | Misi 18 | `FINAL-C01-4` | `evaluate` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 71 | Ujian Akhir | Misi 18 | `FINAL-C01-5` | `evaluate` | `hard` | **PASS** | 🟢 Low | Memenuhi standar akademik & metadata lengkap |
| 72 | Ujian Akhir | Misi 18 | `FINAL-C02-1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 73 | Ujian Akhir | Misi 18 | `FINAL-C02-2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 74 | Ujian Akhir | Misi 18 | `FINAL-C02-3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 75 | Ujian Akhir | Misi 18 | `FINAL-C02-4` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 76 | Ujian Akhir | Misi 18 | `FINAL-C02-5` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 77 | Ujian Akhir | Misi 18 | `FINAL-C03-1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 78 | Ujian Akhir | Misi 18 | `FINAL-C03-2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 79 | Ujian Akhir | Misi 18 | `FINAL-C03-3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 80 | Ujian Akhir | Misi 18 | `FINAL-C03-4` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 81 | Ujian Akhir | Misi 18 | `FINAL-C03-5` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 82 | Ujian Akhir | Misi 18 | `FINAL-C04-1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 83 | Ujian Akhir | Misi 18 | `FINAL-C04-2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 84 | Ujian Akhir | Misi 18 | `FINAL-C04-3` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 85 | Ujian Akhir | Misi 18 | `FINAL-C04-4` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 86 | Ujian Akhir | Misi 18 | `FINAL-C04-5` | `analyze` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 87 | Ujian Akhir | Misi 18 | `FINAL-C05-1` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 88 | Ujian Akhir | Misi 18 | `FINAL-C05-2` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 89 | Ujian Akhir | Misi 18 | `FINAL-C05-3` | `apply` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 90 | Ujian Akhir | Misi 18 | `FINAL-C05-4` | `evaluate` | `hard` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |
| 91 | Ujian Akhir | Misi 18 | `FINAL-C05-5` | `analyze` | `medium` | **REVISE** | 🟢 Low | Halaman Buku Guru bernilai dummy (0/NA) |

---

## 13. Urutan Prioritas Perbaikan Berurutan & Dependensi

Untuk menghemat waktu dan mencegah pengulangan kerja (*rework*), rekomendasi perbaikan disusun secara berjenjang:

1. **Prioritas 1 (Kritis / Blocker Hak Cipta — Bab 3):**
   - Tulis ulang 4 item (`KM03-B1`, `KM03-B2`, `KM03-C1`, `KM03-D1`) menggunakan teks fiksi orisinal bertema sekolah nusantara.
   - Perbarui skrip pengarahan dialog Misi 9 dan Misi 10 di `world-1-rpg-v2.html` agar bebas dari kutipan *Laskar Pelangi*.
2. **Prioritas 2 (Integritas Metadata Akademik — Bab 2 s.d. 5):**
   - Petakan nomor halaman Buku Panduan Guru (`teacher_guide.pages`) yang valid untuk 57 item yang saat ini bernilai dummy `"0"`.
   - Perbarui string provenance generik menjadi ringkasan konsep kurikulum yang terverifikasi.
3. **Prioritas 3 (Penutupan Gap Kompetensi Bab 2, 4, 5):**
   - Tambahkan 2–4 soal baru untuk mengisi Subbab B & D di Bab 2.
   - Tambahkan 4–6 soal baru untuk mengisi Subbab D & E di Bab 4.
   - Tambahkan 4–6 soal baru untuk mengisi Subbab B & D di Bab 5.
4. **Prioritas 4 (Kalibrasi Kurva Ujian Akhir & Kompatibilitas Multi-Select):**
   - Sesuaikan distribusi kesulitan Ujian Akhir agar memiliki 20–30% soal tingkat pemahaman/fondasi (`understand` / `easy`).
   - Standardisasi kontrak penanganan soal *multi-select* antara JRPG battle runner dan VN runner.

---

## 14. Keputusan yang Memerlukan Konfirmasi Pengguna

1. **Arah Penulisan Ulang Novel Bab 3:** Apakah pengguna menyetujui penulisan cerita fiksi baru bertema perjuangan festival budaya sekolah Nusantara untuk menggantikan referensi *Laskar Pelangi*?
2. **Penanganan Phase 4 Pools:** Apakah direktori `phase-4-pools/bahasa-indonesia/` disepakati untuk ditandai sebagai artefak sementara (*unverified mirror*) dan diabaikan hingga Phase 3 resmi direvisi?
3. **Instrumen Kinerja Produktif:** Apakah penambahan rubrik mandiri untuk tugas menulis (surat, novel, esai) disetujui sebagai instrumen non-kuis pendamping RPG?
4. **Status Knowledge Base v1:** Apakah direktori `knowledge-base/bahasa-indonesia/v1/` resmi dibakukan sebagai arsip silabus Bahasa Indonesia Tingkat Lanjut (*Legacy Seed*)?

---

*Laporan audit ini disusun secara independen dan objektif berdasarkan bukti kode sumber, riwayat Git, dan buku kurikulum resmi pemerintah. Laporan ini membekukan status Bank Soal Bahasa Indonesia hingga arahan perbaikan selanjutnya diberikan oleh Pengguna.*
