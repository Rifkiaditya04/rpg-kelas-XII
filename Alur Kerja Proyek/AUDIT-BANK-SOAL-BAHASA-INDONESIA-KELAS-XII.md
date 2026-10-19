# LAPORAN REKONSILIASI AUDIT PASS 2.2 — BANK SOAL BAHASA INDONESIA KELAS XII
## Audit Integritas Data, Rekonsiliasi Record Fisik vs Runtime, Benturan ID, Pemisahan Objektif Metadata Sumber, dan Verifikasi Matriks Kurikulum Merdeka Revisi 2025

**Dokumen:** `Alur Kerja Proyek/AUDIT-BANK-SOAL-BAHASA-INDONESIA-KELAS-XII.md`
**Siklus Audit:** Reconciliation Pass 2, Pass 2.1, Pass 2.2, & Pass 2.2.2 (Penyelarasan Terminologi Akhir, Klausul Kehati-hatian Hukum, & Verifikasi Konsistensi Diff)
**Tanggal Audit:** 18 Oktober 2026
**Status Evaluasi:** AUDIT VERIFIED IN PROGRESS 🟡 (Integritas Data Tervalidasi; Kualitas Pedagogis Menunggu Review Guru Ahli)
**Branch Kerja:** `visual-refresh`
**HEAD Commit Baseline:** [`634133b`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/634133b97ef94bf0e997b6c5dd711fc9e54b17e1) (`634133b97ef94bf0e997b6c5dd711fc9e54b17e1` — Terverifikasi sinkron dengan `origin/visual-refresh`)
**Repositori:** `https://github.com/Rifkiaditya04/rpg-kelas-XII`

---

## 1. Ringkasan Eksekutif & Mandat Rekonsiliasi Pass 2.2

Reconciliation Pass 2, Pass 2.1, Pass 2.2, dan Pass 2.2.2 dilaksanakan sebagai audit verifikasi akhir berstandar ketat (*strict verification pass*) untuk memastikan seluruh dokumentasi audit memiliki konsistensi faktual, tanpa spekulasi yang tidak terbukti, dengan parameter:
1. **Identitas Record Tidak Ambigu:** Setiap record bank soal diidentifikasi menggunakan kunci inventaris internal:
   `file_path + record_index + question_id`
   Hal ini mencegah kerancuan identitas akibat benturan ID (*ID collision*) antarberkas.
2. **Pemisahan Tegas Populasi Data:**
   - **88 Record Runtime Phase 3:** Dimuat aktif oleh Visual Novel (`prototype/bahasa-indonesia/world-1-rpg-v2.html`): 63 record latihan Misi 1–17 + 25 record Ujian Akhir Misi 18.
   - **3 Record Unreferenced by Current VN Runtime:** Tersimpan di berkas fisik kanonikal `world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json` (`batch_status: CANONICAL_APPROVED`), tidak dirujuk oleh runtime Visual Novel saat ini (karena Misi 2 merujuk ke `batch-02-e4`). Resolusi benturan ID memerlukan keputusan pemilik proyek dan telaah dependensi.
   - **91 Total Record Fisik Phase 3:** 88 runtime + 3 unreferenced.
   - **89 Unique Question IDs:** Terdapat 89 string ID unik di Phase 3 (karena `KM02-E1` dan `KM02-E2` terduplikasi pada dua berkas fisik berbeda).
   - **82 Record Phase 4 Pools:** Mirror cermin terdegradasi (5 butir dikonsumsi hardcoded oleh JRPG `academic-ascension-rpg-v1.html`).
   - **38 Record Knowledge Base v1:** Arsip seed Tingkat Lanjut (masih dirujuk prototipe demonstrator lama).
3. **Pemisahan Objektif Masalah Metadata Sumber:** Membedakan secara definitif antara:
   - **48 record `teacher_guide.pages == "0"`:** Placeholder atau locator belum diselesaikan pada butir Kurikulum Merdeka yang lolos dari validasi skema saat ini (4 di antaranya berstatus utama HOLD dan 44 berstatus REVISE, tidak dihitung ganda).
   - **9 record `teacher_guide.pages == "N/A"`:** Butir jembatan kurikulum (K13 & TKA) di mana field Buku Panduan Guru Kurikulum Merdeka tidak berlaku (*not applicable*), namun rujukan silabus eksternal (PUEBI/K13 & kisi-kisi asesmen TKA) memerlukan verifikasi keterlacakan sumber. Nilai `"N/A"` bukan cacat halaman otomatis.
   - **Total 57 record** memerlukan tindak lanjut metadata atau verifikasi keterlacakan sumber.
4. **Koreksi Presisi Aritmetika Kuota:** Menghitung ulang secara presisi rentang kuota latihan 71–75 butir + 25 ujian akhir = **96–100 butir** objektif (berstatus sementara / provisional).
5. **Kalibrasi Status Akademik:** Menegaskan bahwa verifikasi integritas data mekanis tidak sama dengan sertifikasi kelayakan mutu pedagogis per butir.

**Batasan Bukti & Validasi Sesuai Ruang Lingkup:**
- Tidak ditemukan perbedaan angka pada parameter yang diperiksa silang.
- Pemeriksaan tidak menemukan konflik pada terminologi yang secara eksplisit diperiksa; ini tidak menggantikan review semantik dan telaah pedagogis seluruh dokumen.
- `git diff --check` lulus; working tree tetap memuat tiga modifikasi dokumentasi yang belum di-commit.
- Validasi otomatis maupun pemeriksaan skema tidak membuktikan kebenaran pedagogis, legalitas mutlak, atau kesempurnaan semantik butir soal.

> [!IMPORTANT]
> **Kebijakan Wajib ZERO MUTATION:** Sesi ini murni perbaikan dan validasi dokumentasi. **Tidak ada berkas JSON soal, kunci jawaban, teks stimulus, schema, kode game (HTML/CSS/JS), maupun aset visual yang diubah.** Tidak ada operasi commit atau push pada tahap ini.

---

## 2. Definisi Populasi & Rekonsiliasi Data Lineage

Pemeriksaan komparatif lintas-direktori pada repositori menghasilkan rekapitulasi lineage yang tervalidasi:

| Lapisan / Kategori Data | Lokasi Berkas Fisik | Jumlah Record | Status Konsumen & Runtime | Definisi & Karakteristik Data |
| :--- | :--- | :---: | :--- | :--- |
| **Phase 3 Runtime Active** | `phase-3/world-1-km-*.json` (18 berkas) | **88** | **Active Primary Source** (`world-1-rpg-v2.html`) | 63 record latihan Misi 1–17 + 25 record Ujian Akhir Misi 18. Sumber utama game saat ini. |
| **Phase 3 Unreferenced** | `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json` | **3** | **UNREFERENCED_BY_CURRENT_VN_RUNTIME** | Berkas fisik kanonikal berstatus `CANONICAL_APPROVED` (batch perluasan yang disetujui), tidak direferensikan oleh runtime Visual Novel saat ini (Misi 2 merujuk ke `batch-02-e4`). Mengalami benturan ID (`KM02-E1`, `KM02-E2`). Resolusi memerlukan keputusan pemilik proyek. |
| **Total Record Fisik Phase 3** | `phase-3/` (19 berkas kanonikal/kandidat) | **91** | **Total Bank Soal Fisik Phase 3** | Jumlah record fisik riil: 88 runtime + 3 unreferenced. |
| **Unique Question IDs** | `phase-3/` | **89** | **Unique String IDs** | 89 string ID unik (karena `KM02-E1` dan `KM02-E2` terduplikasi antarberkas). |
| **Phase 4 Pools** | `phase-4-pools/bahasa-indonesia/` (6 berkas) | **82** | **Mirror Kloning Terdegradasi** | Kloning teks dari Phase 3; metadata buku dihilangkan; 9 item Bab 1 (F–H) hilang. **5 item dipakai hardcoded di JRPG `academic-ascension-rpg-v1.html`**. |
| **Knowledge Base v1** | `knowledge-base/bahasa-indonesia/v1/` (5 berkas) | **38** | **Arsip Seed Tingkat Lanjut** | Silabus Bahasa Indonesia Tingkat Lanjut (Surat Lamaran, Film Ekranisasi, Drama, Feature). Masih dirujuk demo lama `world-1-rpg-gameplay-v1.html` s.d. `world-5-rpg-gameplay-v1.html`. |

---

## 3. Analisis Benturan ID (*ID Collision*) dan Record Unreferenced

Pemeriksaan kunci inventaris internal `file_path + record_index + question_id` membuktikan keberadaan 2 kasus tabrakan ID fisik antarberkas di `phase-3/`:

### A. Benturan ID `KM02-E1`:
1. **Record Runtime Active:**
   `phase-3/world-1-km-chapter-2-misi-7-canonical-v1.0.json[0]:KM02-E1`
   - *Bab & Misi:* Bab 2, Misi 7 (L13–48)
   - *Topik:* `BI12-C02-E` (Refleksi Gagasan Teks Prosedur)
   - *Locator:* Buku Siswa hlm 74–76, Buku Guru hlm 98–102 (Valid)
   - *Status Runtime:* Dimuat aktif di Misi 7 Visual Novel.
2. **Record Unreferenced by Current VN Runtime:**
   `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[0]:KM02-E1`
   - *Bab & Misi:* Bab 1, Unreferenced (L13–48)
   - *Topik:* `BI12-C01-E` (Kesalahan Kaidah Penulisan Surat Resmi)
   - *Locator:* Buku Siswa hlm 19–28, Buku Guru hlm 50–53 (Valid)
   - *Status Runtime:* `UNREFERENCED_BY_CURRENT_VN_RUNTIME` (tidak direferensikan oleh runtime Visual Novel saat ini; Misi 2 merujuk ke berkas `batch-02-e4`).

### B. Benturan ID `KM02-E2`:
1. **Record Runtime Active:**
   `phase-3/world-1-km-chapter-2-misi-7-canonical-v1.0.json[1]:KM02-E2`
   - *Bab & Misi:* Bab 2, Misi 7 (L51–87)
   - *Topik:* `BI12-C02-E` (Refleksi Tindakan Nyata Prosedur)
   - *Locator:* Buku Siswa hlm 74–76, Buku Guru hlm 98–102 (Valid)
   - *Status Runtime:* Dimuat aktif di Misi 7 Visual Novel.
2. **Record Unreferenced by Current VN Runtime:**
   `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[1]:KM02-E2`
   - *Bab & Misi:* Bab 1, Unreferenced (L51–87)
   - *Topik:* `BI12-C01-E` (Analisis Huruf Kapital Surat Resmi)
   - *Locator:* Buku Siswa hlm 19–28, Buku Guru hlm 50–53 (Valid)
   - *Status Runtime:* `UNREFERENCED_BY_CURRENT_VN_RUNTIME` (tidak direferensikan oleh runtime Visual Novel saat ini; Misi 2 merujuk ke berkas `batch-02-e4`).

### C. Record Unreferenced Tambahan `KM02-E3`:
- `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[2]:KM02-E3`
  - *Bab & Misi:* Bab 1, Unreferenced (L90–125)
  - *Topik:* `BI12-C01-E` (Tanda Baca Surat Resmi)
  - *Locator:* Buku Siswa hlm 19–28, Buku Guru hlm 50–53 (Valid)
  - *Status Runtime:* `UNREFERENCED_BY_CURRENT_VN_RUNTIME` (tidak direferensikan oleh runtime Visual Novel saat ini; Misi 2 merujuk ke berkas `batch-02-e4`).

> [!NOTE]
> Ketiga record ini memiliki status berkas `batch_status: CANONICAL_APPROVED` dan deskripsi sebagai batch tambahan yang disetujui. Namun, karena runtime Visual Novel saat ini merujuk ke berkas `batch-02-e4` untuk Misi 2 serta terdapat tabrakan ID pada `KM02-E1` dan `KM02-E2`, ketiga record ini diklasifikasikan sebagai `UNREFERENCED_BY_CURRENT_VN_RUNTIME`. Resolusi terhadap ketiga record ini (apakah akan dihapus, diganti ID-nya, atau diintegrasikan ke runtime) memerlukan keputusan pemilik proyek serta analisis dependensi menyeluruh. Auditor tidak melakukan modifikasi sepihak.

---

## 4. Rekonsiliasi Status dan Distribusi Butir Soal

Distribusi status dilaporkan secara terpilah antara record runtime aktif dan record unreferenced:

### A. Rekapitulasi Status 88 Record Runtime Aktif:
- **`HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD`:** **4 record** (4,5%)
  - Bab 3 Misi 9 & 10: `KM03-B1`, `KM03-B2`, `KM03-C1`, `KM03-D1` (mengutip langsung teks, karakter Pak Harfan & Mahar, serta alur SD Gantong dari novel *Laskar Pelangi*).
  - *Klausul Kehati-hatian Hukum & Batasan Risiko Proyek:*
    1. Penetapan status HOLD adalah tindakan pencegahan internal (*precautionary containment*) proyek berdasarkan ketetapan *Decision 009: Content Source and Copyright Safe Pipeline*.
    2. Klasifikasi tersebut merupakan penilaian risiko hak cipta dan orisinalitas konten pembelajaran untuk keputusan rilis guna memitigasi risiko klaim karya turunan (*derivative works*), dan **bukan merupakan putusan pengadilan atau kesimpulan hukum final**.
    3. Faktual tekstual membuktikan adanya kutipan karakter dan alur khas tanpa lisensi adaptasi, sehingga keempat butir ini **tetap ditahan (HOLD)** dari promosi produksi sampai keputusan konten ditetapkan oleh pemilik proyek.
    4. Analisis ini tidak mengurangi maupun menghapus temuan faktual yang mendasari penetapan status HOLD.
- **`REVISE — Metadata / Source Traceability Follow-up`:** **53 record** (60,2%)
  - 44 record Kurikulum Merdeka dengan placeholder / locator belum diselesaikan bernilai `teacher_guide.pages == "0"`:
    - Bab 3: 6 butir (`KM03-A1`, `KM03-A2`, `KM03-C2`, `KM03-F1`, `KM03-F2`, `KM03-F3`)
    - Bab 4: 9 butir (`KM04-A1` s.d. `KM04-C3`)
    - Bab 5: 9 butir (`KM05-A1` s.d. `KM05-E2`)
    - Final Exam: 20 butir (`FINAL-C02-1` s.d. `FINAL-C05-5`)
  - 9 record jembatan kurikulum eksternal K13 & TKA bernilai `teacher_guide.pages == "N/A"` yang memerlukan verifikasi keterlacakan rujukan silabus eksternal:
    - Bab 1: 3 butir (`K13-C01-EJAAN-01`, `K13-C01-KALIMAT-02`, `TKA-C01-BONUS-01`)
    - Bab 2: 2 butir (`K13-C02-PROSEDUR-01`, `TKA-C02-BONUS-01`)
    - Bab 3: 2 butir (`K13-C03-MAJAS-01`, `TKA-C03-BONUS-01`)
    - Bab 4: 1 butir (`K13-C04-EKSPLANASI-01`)
    - Bab 5: 1 butir (`K13-C05-ESAI-01`)
  *(Catatan: 4 record HOLD di Bab 3 juga memiliki `teacher_guide.pages == "0"`. Total record bernilai `"0"` adalah 44 + 4 = 48 record dan tidak dihitung ganda dalam total status utama).*
- **`MECHANICALLY VERIFIED — PENDING INDIVIDUAL ACADEMIC REVIEW`:** **31 record** (35,2%)
  - 16 record Bab 1 Runtime (`KM01-A1`, `KM01-B1`, `KM01-B2`, `KM01-C1`, `KM01-D1`, `KM01-D2`, `KM02-E4`, `F-Q01` s.d. `G-Q03`, `H-Q01` s.d. `H-Q03`).
  - 10 record Bab 2 Runtime (`KM02-A1`, `KM02-B1`, `KM02-B2`, `KM02-C1`, `KM02-D1`, `KM02-D2`, `KM02-E1`, `KM02-E2`, `KM02-F1`, `KM02-G1`).
  - 5 record Ujian Akhir Bab 1 (`FINAL-C01-1` s.d. `FINAL-C01-5`).
- **Total Runtime:** 4 + 53 + 31 = **88 record**.

### B. Status 3 Record Unreferenced by Current VN Runtime:
- `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[0..2]`:
  Ketiga record (`KM02-E1`, `KM02-E2`, `KM02-E3`) secara mekanis memiliki metadata valid, namun berstatus:
  **`UNREFERENCED_BY_CURRENT_VN_RUNTIME (Pending Project Owner Decision & ID Collision Resolution)`** (3 record).

### C. Total Agregat 91 Record Fisik:
Jika seluruh record fisik di direktori `phase-3/` digabungkan, distribusinya adalah:
- **HOLD:** 4 record (4,4%)
- **REVISE — Metadata / Source Traceability Follow-up:** 53 record (58,2%)
- **UNVERIFIED (Pending Individual Academic Review):** 34 record (37,4%) — terdiri atas **31 record runtime aktif + 3 record unreferenced**.

---

## 5. Metodologi Audit: Pemisahan Pemeriksaan Mekanis vs Review Akademik Individual

Untuk menjaga ketepatan evaluasi dan kejujuran pelaporan, laporan audit menetapkan batas tegas antara verifikasi teknis/mekanis otomatis dan telaah akademik kualitatif individual oleh penelaah manusia:

### A. Checklist dan Batasan Pemeriksaan Mekanis (Automated & Heuristic)
Pemeriksaan mekanis mencakup lima kelompok pengujian teknis yang tercatat dalam baseline audit:
1. **Validitas Format dan Schema JSON:** Memvalidasi sintaksis JSON, tipe data, struktur properti, dan kepatuhan terhadap skema validasi dataset.
   - *Batas Pemeriksaan:* Kelolosan skema hanya membuktikan berkas dapat di-parse oleh engine tanpa crash runtime; hal ini tidak membuktikan kebenaran substansi konsep maupun mutu pedagogis materi soal.
2. **Kelengkapan Field Wajib:** Memeriksa keberadaan seluruh kunci wajib (`id`, `question`, `options`, `answer`, `explanation`, `source`, `provenance`).
   - *Batas Pemeriksaan:* Memastikan field tidak kosong (*non-empty*), namun tidak menjamin kedalaman isi penjelasan atau kelayakan stimulus pembelajaran.
3. **Keberadaan String Jawaban di dalam Array Opsi:** Memverifikasi bahwa string nilai `answer` identik dengan salah satu elemen pada array `options`.
   - *Batas Pemeriksaan:* Menemukan string jawaban dalam opsi hanya memastikan runtime tidak gagal memproses pilihan pemain, tetapi sama sekali tidak membuktikan bahwa jawaban tersebut benar secara akademik, bebas dari ambiguitas semantik, atau tidak memiliki multitafsir.
4. **Pemeriksaan Heuristik Berbasis Kata Kunci / Regex Hak Cipta:** Memindai kemunculan entitas, nama tokoh, dan frasa khas pihak ketiga yang dilindungi hak cipta (seperti *Pak Harfan*, *Mahar*, *SD Gantong* dari novel *Laskar Pelangi*).
   - *Batas Pemeriksaan:* Pemeriksaan regex hanya mendeteksi kecocokan string harfiah; ketiadaan temuan regex tidak membuktikan orisinalitas secara menyeluruh bila terdapat parafrasa non-harfiah, adaptasi alur, atau derivasi ide yang memerlukan telaah kualitatif manusia.
5. **Kelengkapan Locator Sumber atau Halaman:** Memeriksa keterisian string nomor halaman pada Buku Siswa dan Buku Panduan Guru.
   - *Batas Pemeriksaan:* Validasi keterisian string halaman tidak memvalidasi apakah materi butir soal benar-benar selaras dengan teks pada halaman tersebut sebelum dilakukan verifikasi silang langsung ke buku fisik Kurikulum Merdeka Revisi 2025. Terbukti nilai placeholder `"0"` dapat lolos validasi mekanis skema.

> [!NOTE]
> Panel auditor tidak menyatakan bahwa semua butir telah lolos setiap pemeriksaan bila bukti yang tersedia hanya mendukung sebagian pemeriksaan.

### B. Checklist Instrumen Review Akademik Individual (Human Subject-Matter Review)
Checklist ini disiapkan sebagai instrumen telaah kualitatif mendalam bagi penelaah manusia (panel guru/ahli asesmen Bahasa Indonesia Kelas XII) pada fase review berikutnya:
1. **Kecukupan, Relevansi, dan Kejelasan Stimulus:** Menilai apakah stimulus wajar, autentik, tidak bertele-tele, bebas bias, dan relevan dengan tujuan pembelajaran Capaian Pembelajaran (CP) fase F.
2. **Ketunggalan Kunci Jawaban & Ketiadaan Ambiguitas:** Menilai apakah kunci jawaban mutlak tunggal, tepat secara tata bahasa/PUEBI, serta bebas dari ambiguitas linguistik atau semantik.
3. **Kelayakan Distraktor (Opsi Pengecoh):** Menguji kewajaran dan plausibilitas setiap pilihan yang salah, kesetaraan bentuk dan struktur opsi jika relevan, kesesuaian opsi dengan miskonsepsi yang mungkin dialami siswa kelas XII, ketiadaan petunjuk tidak sengaja yang membuat kunci terlalu mudah ditebak, serta ketiadaan ambiguitas yang menyebabkan lebih dari satu pilihan bisa dianggap benar (tanpa menjadikan kemiripan semantik antarsemua opsi sebagai tujuan mutlak).
4. **Kesesuaian Proses Kognitif Aktual vs Label Kognitif:** Menguji apakah proses mental yang benar-benar dituntut oleh soal sesuai dengan label kognitif (`understand`, `apply`, `analyze`, `evaluate`, `create`) dan tujuan pembelajaran (menuntut penalaran HOTS bermakna, bukan sekadar hafalan/*textual recall*).
5. **Kualitas Penjelasan (*Explanation*) dan Umpan Balik:** Menilai apakah uraian penjelasan edukatif, membantu siswa memahami alasan suatu jawaban benar atau salah, serta membangun refleksi metakognitif saat bermain RPG.

> [!IMPORTANT]
> **Penegasan Status:** Checklist review akademik individual di atas merupakan instrumen terstandar yang disiapkan untuk penelaahan fase berikutnya. **Review guru ahli belum pernah dilakukan secara individual** pada butir-butir soal di repositori ini. Sebanyak 31 butir yang tidak masuk kategori HOLD atau REVISE berdasarkan klasifikasi audit saat ini dan tetap menunggu review akademik individual berstatus **`MECHANICALLY VERIFIED — PENDING INDIVIDUAL ACADEMIC REVIEW`** (rumusan ini tidak menyiratkan bahwa record tersebut terbukti bebas dari seluruh cacat, melainkan menandakan bahwa butir tersebut masih menunggu telaah kualitatif oleh guru ahli).

---

## 6. Pemisahan Objektif Masalah Metadata Sumber: Analisis Presisi 57 Record

Verifikasi berbasis kode sumber terhadap metadata Buku Panduan Guru membuktikan pembagian objektif berikut (total 57 record tindak lanjut):

| Kategori Metadata | Jumlah Record | Karakteristik Masalah & Batasan Bukti | Butir Soal Terdampak | Tindakan Koreksi Rekomendasi |
| :--- | :---: | :--- | :--- | :--- |
| **`teacher_guide.pages == "0"`** (Placeholder / Locator Belum Selesai) | **48 record** (44 REVISE + 4 HOLD) | Nilai string `"0"` merupakan placeholder atau locator yang belum diselesaikan pada butir Kurikulum Merdeka yang lolos dari validasi skema saat ini. Tidak boleh ditafsirkan sebagai niat tertentu tanpa bukti langsung. | - Bab 3 (10 item: `KM03-A1`..`KM03-D1`, `KM03-F1`..`KM03-F3`; catatan: 4 item di antaranya berstatus utama HOLD)<br>- Bab 4 (9 item: `KM04-A1`..`KM04-C3`)<br>- Bab 5 (9 item: `KM05-A1`..`KM05-E2`)<br>- Final Exam (20 item: `FINAL-C02-1`..`FINAL-C05-5`) | Petakan rentang halaman Buku Panduan Guru edisi Revisi 2025 yang sesungguhnya (BG hlm 82–274). |
| **`teacher_guide.pages == "N/A"`** (Silabus Eksternal / Not Applicable) | **9 record** (9 REVISE) | Butir soal jembatan kurikulum (K13 & TKA) di mana field Buku Guru Kurikulum Merdeka memang tidak berlaku (*not applicable*). Nilai `"N/A"` **bukan cacat halaman otomatis**, melainkan penanda bahwa butir ini memerlukan verifikasi keterlacakan rujukan silabus eksternal (PUEBI/K13 & Kisi-kisi asesmen TKA). | - Bab 1: `K13-C01-EJAAN-01`, `K13-C01-KALIMAT-02`, `TKA-C01-BONUS-01`<br>- Bab 2: `K13-C02-PROSEDUR-01`, `TKA-C02-BONUS-01`<br>- Bab 3: `K13-C03-MAJAS-01`, `TKA-C03-BONUS-01`<br>- Bab 4: `K13-C04-EKSPLANASI-01`<br>- Bab 5: `K13-C05-ESAI-01` | Dokumentasikan dan verifikasi keterlacakan rujukan silabus eksternal secara definitif. |
| **Metadata TG Valid** | **34 record** | Memiliki rentang halaman Buku Panduan Guru yang valid dan terverifikasi. | - 31 record runtime (Bab 1 Misi 1–4: 16 butir; Bab 2 Misi 5–8: 10 butir; Final Exam Bab 1: 5 butir).<br>- 3 record unreferenced Bab 1 (`batch-02-e1-e3`). | Pertahankan metadata; lanjutkan ke telaah kualitas pedagogis individual oleh guru ahli. |
| **Catatan Provenance Generik** | **28 record** | Memuat string generik: `"Generated content following KM standard"`. | Seluruh item KM pada Bab 3 (10 item), Bab 4 (9 item), dan Bab 5 (9 item). | Lengkapi catatan provenance dengan deskripsi konsep pedagogis dan alasan penulisan skenario independen (*Decision 009*). |

---

## 7. Audit Ulang Pemetaan Aktivitas & Silabus Buku Teks 2025

Berdasarkan silabus **Buku Siswa Bahasa Indonesia Kelas XII Revisi 2025** (278 hlm) dan **Buku Panduan Guru Revisi 2025** (302 hlm), pemetaan aktivitas direkonsiliasi sebagai berikut:

> [!NOTE]
> Seluruh penetapan tingkat kedalaman cakupan di bawah ini berstatus **`PROVISIONAL — NEEDS ACADEMIC REVIEW`** karena evaluasi kedalaman substantif membutuhkan penelaahan pedagogis per butir oleh guru ahli, bukan sekadar hitungan jumlah record.

### Bab 1: Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan (hlm. 1–48)
- **Aktivitas A (Menyimak Rekaman Surat Resmi, hlm. 5–7):** `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[0]:KM01-A1`. Menguji informasi tersurat surat dinas via teks (belum ada audio riil). Status: *Provisional — Needs Academic Review*.
- **Aktivitas B (Pesan Tersurat & Tersirat Dua Surat, hlm. 8–11):** `batch-01[1]:KM01-B1`, `batch-01[2]:KM01-B2`. Menguji pesan eksplisit dan implisit surat permohonan. Status: *Provisional — Needs Academic Review*.
- **Aktivitas C (Refleksi Gagasan Surat Resmi, hlm. 12–13):** `batch-01[3]:KM01-C1`. Menguji refleksi etika kerja dinas via MCQ. Status: *Provisional — Needs Academic Review*.
- **Aktivitas D (Struktur & Penggunaan Bahasa Surat, hlm. 14–18):** `batch-01[4]:KM01-D1`, `batch-01[5]:KM01-D2` (didukung Ujian Akhir `FINAL-C01-3`, `FINAL-C01-4`). Menguji kop, salam, nomor, dan kalimat baku. Status: *Provisional — Needs Academic Review*.
- **Aktivitas E (Kesalahan Kaidah Penulisan Surat, hlm. 19–28):** `batch-02-e4[0]:KM02-E4` (multi-select). Menguji deteksi kesalahan tanda baca/huruf kapital. Status: *Provisional — Needs Academic Review*. *(Catatan: Record unreferenced `batch-02-e1-e3[0..2]:KM02-E1..E3` juga menguji subbab ini).*
- **Aktivitas F (Menulis Surat Resmi Kata Baku, hlm. 29–33):** `candidate-v1.2-id[0..2]:F-Q01..F-Q03`. Menguji pemilihan kalimat efektif. Status: *Tugas Produktif Tanpa Rubrik*.
- **Aktivitas G (Membalas Email Resmi, hlm. 34–36):** `candidate-v1.2-id[3..5]:G-Q01..G-Q03`. Menguji etika subjek surel, salam, dan lampiran. Status: *Tugas Produktif Tanpa Rubrik*.
- **Aktivitas H (Publikasi Poster Pengumuman, hlm. 37–48):** `candidate-v1[0..2]:H-Q01..H-Q03`. Menguji pengubahan teks surat edaran ke poin visual. Status: *Tugas Produktif Tanpa Rubrik*.
- *Jembatan Kurikulum Misi 1:* `batch-01[6..8]:K13-C01-EJAAN-01, K13-C01-KALIMAT-02, TKA-C01-BONUS-01` (REVISE — Metadata / Source Traceability Follow-up).

### Bab 2: Meningkatkan Produktivitas Melalui Gaya Hidup Sehat, Aktif, dan Seimbang (hlm. 49–97)
- **Aktivitas A (Informasi Eksplisit Prosedur, hlm. 54–56):** `misi-5[0]:KM02-A1`. Menguji langkah eksplisit teks prosedur kesehatan. Status: *Provisional — Needs Academic Review*.
- **Aktivitas B (Menyimak Prosedur Kompleks, hlm. 57–60):** `misi-5[1]:KM02-B1`, `misi-5[2]:KM02-B2`. Menguji informasi lisan prosedur dan deteksi risiko instruksi acak. Status: *Provisional — Needs Academic Review*.
- **Aktivitas C (Instruksi Prosedur Dibaca, hlm. 61–65):** `misi-6[0]:KM02-C1`. Menguji pemahaman instruksi keselamatan/kesehatan kerja (K3). Status: *Provisional — Needs Academic Review*.
- **Aktivitas D (Membandingkan Dua Prosedur, hlm. 66–73):** `misi-6[1]:KM02-D1`, `misi-6[2]:KM02-D2`. Menguji verba material dan konjungsi temporal komparatif. Status: *Provisional — Needs Academic Review*.
- **Aktivitas E (Refleksi Gagasan Prosedur 4F, hlm. 74–76):** `misi-7[0]:KM02-E1`, `misi-7[1]:KM02-E2`. Menguji kerangka refleksi 4F. Status: *Provisional — Needs Academic Review* (Buku Guru valid hlm 98–102).
- **Aktivitas F (Demonstrasi Urutan Langkah Runtut, hlm. 77–81):** `misi-8[0]:KM02-F1`. Menguji penyusunan prosedur acak menjadi logis. Status: *Provisional — Needs Academic Review*.
- **Aktivitas G (Video Tutorial K3 Sesuai Prosedur, hlm. 82–97):** `misi-8[1]:KM02-G1`. Menguji evaluasi penyuntingan video tutorial K3. Status: *Tugas Produktif Tanpa Rubrik*.
- *Jembatan Kurikulum Misi 8:* `misi-8[2..3]:K13-C02-PROSEDUR-01, TKA-C02-BONUS-01` (REVISE — Metadata / Source Traceability Follow-up).

### Bab 3: Menciptakan Lingkungan Sekolah Aman dan Nyaman (hlm. 98–134)
- **Aktivitas A (Sudut Pandang Pengarang, hlm. 102–106):** `misi-9[0]:KM03-A1`, `misi-9[1]:KM03-A2`. Menguji sudut pandang orang 1 & 3. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas B (Perwatakan Tokoh Novel, hlm. 107–113):** `misi-9[2]:KM03-B1`, `misi-9[3]:KM03-B2`. Status: **`HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD`** (Mengutip langsung tokoh Pak Harfan & Mahar dari *Laskar Pelangi*).
- **Aktivitas C (Alur/Plot Novel, hlm. 114–116):** `misi-10[0]:KM03-C1` (Status: **`HOLD`** — Mengutip alur penutupan SD Gantong); `misi-10[1]:KM03-C2` (Status: *REVISE — Metadata / Source Traceability Follow-up [TG=0]*).
- **Aktivitas D (Pesan/Amanat Novel, hlm. 117–118):** `misi-10[2]:KM03-D1`. Status: **`HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD`** (Mengutip karnaval daun Mahar).
- **Aktivitas E (Menulis Kerangka Novel, hlm. 119–121):** *Tidak ada butir soal di dataset manapun*. Status: *Gap Materi Kerangka Cerita*.
- **Aktivitas F (Kaidah Bahasa & Tanda Baca Novel, hlm. 122–125):** `misi-11[0..2]:KM03-F1..KM03-F3`. Menguji kalimat langsung dan tanda petik PUEBI. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas G (Publikasi Novel Bentuk Buku, hlm. 126–134):** *Tidak ada butir soal di dataset manapun*. Status: *Gap Literasi Perbukuan*.
- *Jembatan Kurikulum Misi 11:* `misi-11[3..4]:K13-C03-MAJAS-01, TKA-C03-BONUS-01` (REVISE — Metadata / Source Traceability Follow-up).

### Bab 4: Menerapkan Kecerdasan Artifisial dalam Kehidupan Modern (hlm. 135–181)
- **Aktivitas A (Pemahaman Implisit Teks Eksplanasi, hlm. 139–141):** `misi-12[0]:KM04-A1`. Menguji paragraf induktif bertema digital. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas B (Evaluasi Gagasan & Argumen AI, hlm. 142–148):**
  - Terletak di Misi 12: `misi-12[1]:KM04-A2` dan `misi-12[2]:KM04-A3`.
  - *Analisis Temuan:* Meskipun menggunakan prefiks `KM04-A*` dan metadata `topic_id: BI12-C04-A`, kedua record ini memiliki `section: "Bab 4, Subbab B"`, `pages: "147"` dan menguji tiga aspek evaluasi argumen teks eksplanasi. Secara substantif, keduanya adalah butir Aktivitas B. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0, Anomali Topik)*.
- **Aktivitas C (Refleksi Logika Berpikir Model 5R, hlm. 149–152):**
  - Terletak di Misi 13: `misi-13[1]:KM04-B2` dan `misi-13[2]:KM04-B3`.
  - *Analisis Temuan:* Meskipun menggunakan prefiks `KM04-B*` dan metadata `topic_id: BI12-C04-B`, locator sumbernya adalah `section: "Bab 4, Subbab C"`, `pages: "150-151"` (Model Refleksi 5R: *Relating* dan *Reconstructing*). Secara substantif, keduanya adalah butir Aktivitas C. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0, Anomali Topik)*.
- **Aktivitas D (Struktur Teks, Gaya Bahasa, dan Tujuan, hlm. 153–158):**
  - Tersebar di Misi 13 & 14:
    1. `misi-13[0]:KM04-B1` (Struktur 3 bagian eksplanasi; SB hlm 154 Subbab D).
    2. `misi-14[0]:KM04-C1` (Konjungsi kausalitas; SB hlm 155 Subbab D).
    3. `misi-14[1]:KM04-C2` (Gaya bahasa analogi; SB hlm 157 Subbab D).
    4. `misi-14[2]:KM04-C3` (Gaya bahasa objektif dan lugas; SB hlm 157 Subbab D).
  - Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0, Anomali Topik)*.
- **Aktivitas E (Akurasi Data Teks Eksplanasi, hlm. 159–160):** *Hanya ada di Ujian Akhir `final-exam[18]:FINAL-C04-4` (SB hlm 157). Belum ada di sesi latihan misi.*
- **Aktivitas F (Gelar Wicara / Presentasi Lisan, hlm. 161–165):** *Tidak ada butir soal*. Status: *Tugas Produktif Lisan Belum Ada*.
- **Aktivitas G (Menulis Teks Eksplanasi Kompleks, hlm. 166–181):** *Tidak ada butir soal*. Status: *Tugas Produktif Menulis Belum Ada*.
- *Jembatan Kurikulum Misi 14:* `misi-14[3]:K13-C04-EKSPLANASI-01` (REVISE — Metadata / Source Traceability Follow-up).

### Bab 5: Mengungkapkan Kekaguman tentang Kearifan Lokal (hlm. 182–239)
- **Aktivitas A (Menyimak Pembacaan Teks Esai Budaya, hlm. 187–190):** `misi-15[0]:KM05-A1` (Tradisi Sasi Raja Ampat), `misi-15[1]:KM05-A2` (Hakikat esai). Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas B (Informasi Esai yang Disimak, hlm. 191–195):** `misi-15[2]:KM05-B1` (Kearifan lokal suku Tau Taa Vana). Hanya 1 butir di Misi 15. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas C (Identifikasi Fakta, Opini, Asumsi Esai, hlm. 196–203):** `misi-16[0]:KM05-C1` (Fakta/opini Rendang), `misi-16[1]:KM05-C2` (Konjungsi korelatif), `misi-16[2]:KM05-C3` (Kosakata serapan/baku). Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas D (Membandingkan Gagasan Dua Teks Esai, hlm. 204–213):** `misi-17[0]:KM05-D1` (Kaidah sintaksis komparasi esai). Hanya 1 butir di Misi 17. Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas E (Refleksi Gagasan Esai Model ALACT, hlm. 214–217):** `misi-17[1]:KM05-E1` (Internalisasi kearifan alam), `misi-17[2]:KM05-E2` (Tahap Action siklus ALACT). Status: *REVISE — Metadata / Source Traceability Follow-up (TG=0)*.
- **Aktivitas F (Presentasi Gagasan Teks Esai, hlm. 218–220):** *Tidak ada butir soal*. Status: *Tugas Produktif Lisan Belum Ada*.
- **Aktivitas G (Menulis Teks Esai Terstruktur, hlm. 221–239):** *Tidak ada butir soal*. Status: *Tugas Produktif Menulis Belum Ada*.
- *Jembatan Kurikulum Misi 17:* `misi-17[3]:K13-C05-ESAI-01` (REVISE — Metadata / Source Traceability Follow-up).

---

## 8. Catatan Historis Koreksi Matriks & Rekam Jejak 11 String ID Terdahulu

Sebagai bagian dari integritas dokumentasi dan transparansi riwayat audit, dicatat rekam jejak koreksi terhadap versi pelaporan awal:
Pada matriks laporan audit terdahulu sempat tercantum 11 string ID butir soal yang diperoleh dari ekstrapolasi pola penomoran:
`KM01-A2`, `KM01-A3`, `KM01-B3`, `KM01-C2`, `KM01-C3`, `KM02-A2`, `KM02-A3`, `KM02-C2`, `KM02-C3`, `KM02-F2`, `KM02-F3`.

Pemeriksaan aktual terhadap seluruh repositori membuktikan bahwa ke-11 string ID tersebut **tidak ditemukan sebagai ID aktual** dalam inventaris yang telah diverifikasi:
1. Daftar ini murni merupakan **rekam jejak koreksi dokumentasi terdahulu** guna menjelaskan mengapa ID-ID tersebut tidak lagi muncul pada tabel audit.
2. Ke-11 string ID tersebut **bukan ID soal aktif** dan **bukan usulan ID baru**.
3. ID tersebut **tidak dimasukkan kembali** ke dalam pemetaan cakupan kurikulum, penghitungan kuota, maupun tabel inventaris aktif.

---

## 9. Koreksi Presisi Hitungan Rekomendasi Kuota Soal

Audit rekonsiliasi mengoreksi perhitungan aritmetika kuota agar konsisten di seluruh dokumen:

### A. Rincian Alokasi Per Bab (Status Sementara / Provisional):
- **Bab 1 (Komunikasi Resmi):** 19 record runtime (+ 3 unreferenced) -> Rekomendasi: **18 – 20 butir latihan**.
- **Bab 2 (Teks Prosedur):** 12 record runtime -> Rekomendasi: **14 butir latihan** (+2 butir untuk Aktivitas A & C).
- **Bab 3 (Karya Sastra):** 12 record runtime (4 HOLD) -> Rekomendasi: **14 butir latihan** (rewrite 4 butir fiksi orisinal + 2 butir Aktivitas E).
- **Bab 4 (Teks Eksplanasi):** 10 record runtime -> Rekomendasi: **13 – 14 butir latihan** (+3 s.d. +4 butir untuk Aktivitas E & A).
- **Bab 5 (Teks Esai):** 10 record runtime -> Rekomendasi: **12 – 13 butir latihan** (+2 s.d. +3 butir untuk komparasi esai Aktivitas B & D).
- **Ujian Akhir (Misi 18):** 25 record runtime -> Rekomendasi: **25 butir evaluasi diagnostik**.

### B. Perhitungan Aritmetika Terkalibrasi:
- **Batas Bawah Soal Latihan:** 18 + 14 + 14 + 13 + 12 = **71 butir**.
- **Batas Atas Soal Latihan:** 20 + 14 + 14 + 14 + 13 = **75 butir**.
- **Total Bersama Ujian Akhir (25 Butir):**
  - Minimum: 71 + 25 = **96 butir**.
  - Maksimum: 75 + 25 = **100 butir**.

> [!IMPORTANT]
> **Koreksi Rentang Total:** Rentang total soal objektif yang benar secara matematis adalah **96 – 100 butir**, **BUKAN 96 – 101 butir**.
> Seluruh rekomendasi kuota ini berstatus **SEMENTARA (PROVISIONAL)** dan tidak boleh dijadikan dasar penambahan butir soal baru sebelum telaah kualitas akademik per butir diselesaikan oleh guru ahli.

---

## 10. Inventaris Lengkap 91 Record Fisik Berdasarkan Kunci Unik

Berikut adalah tabel lengkap 91 record fisik di `phase-3/` menggunakan identitas kunci inventaris internal tidak ambigu:

| No | Kunci Inventaris Internal (`File[Index]:ID`) | Bab | Misi | Tipe | Cog Level | Diff | SB Page | TG Page | Kategori TG | Status Audit Terverifikasi | Catatan Audit & Rekonsiliasi |
| :---: | :--- | :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| 1 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[0]:KM01-A1` | Bab 1 | Misi 1 | mcq | `analyze` | `med` | 5–7 | 34–35 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 2 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[1]:KM01-B1` | Bab 1 | Misi 1 | mcq | `analyze` | `med` | 8–11 | 38–42 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 3 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[2]:KM01-B2` | Bab 1 | Misi 1 | mcq | `evaluate` | `hard` | 8–11 | 38–42 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 4 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[3]:KM01-C1` | Bab 1 | Misi 1 | mcq | `apply` | `med` | 12–13 | 43–45 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 5 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[4]:KM01-D1` | Bab 1 | Misi 1 | mcq | `understand` | `easy` | 14–18 | 46–48 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 6 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[5]:KM01-D2` | Bab 1 | Misi 1 | mcq | `evaluate` | `med` | 14–18 | 46–49 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 7 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[6]:K13-C01-EJAAN-01` | Bab 1 | Misi 1 | mcq | `understand` | `easy` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan PUEBI |
| 8 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[7]:K13-C01-KALIMAT-02` | Bab 1 | Misi 1 | mcq | `apply` | `med` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan sintaksis |
| 9 | `phase-3/world-1-km-chapter-1-original-content-batch-01-canonical-v1.1.json[8]:TKA-C01-BONUS-01` | Bab 1 | Misi 1 | mcq | `evaluate` | `hard` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; pengayaan TKA; butuh verifikasi keterlacakan kisi TKA |
| 10 | `phase-3/world-1-km-chapter-1-original-content-batch-02-e4-canonical-v1.1.json[0]:KM02-E4` | Bab 1 | Misi 2 | multi | `analyze` | `hard` | 19–28 | 50–53 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; multi-select; lolos mekanis |
| 11 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[0]:F-Q01` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 29–33 | 55–57 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 12 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[1]:F-Q02` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 29–33 | 55–57 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 13 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[2]:F-Q03` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 29–33 | 55–58 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 14 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[3]:G-Q01` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 34–36 | 59–61 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 15 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[4]:G-Q02` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 34–36 | 59–61 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 16 | `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json[5]:G-Q03` | Bab 1 | Misi 3 | mcq | `apply` | `med` | 34–36 | 59–61 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 17 | `phase-3/world-1-km-chapter-1-h-production-content-candidate-v1.json[0]:H-Q01` | Bab 1 | Misi 4 | multi | `analyze` | `med` | 37 | 61–63 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; multi-select; lolos mekanis |
| 18 | `phase-3/world-1-km-chapter-1-h-production-content-candidate-v1.json[1]:H-Q02` | Bab 1 | Misi 4 | mcq | `apply` | `med` | 37 | 61–63 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 19 | `phase-3/world-1-km-chapter-1-h-production-content-candidate-v1.json[2]:H-Q03` | Bab 1 | Misi 4 | mcq | `evaluate` | `med` | 37 | 61–63 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; kandidat promosi; lolos mekanis |
| 20 | `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[0]:KM02-E1` | Bab 1 | Unref | mcq | `analyze` | `med` | 19–28 | 50–53 | TG_VALID | `UNREFERENCED_BY_CURRENT_VN_RUNTIME (ID Collision)` | **UNREFERENCED**; benturan ID dengan Misi 7; resolusi butuh keputusan pemilik proyek |
| 21 | `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[1]:KM02-E2` | Bab 1 | Unref | mcq | `analyze` | `med` | 19–28 | 50–53 | TG_VALID | `UNREFERENCED_BY_CURRENT_VN_RUNTIME (ID Collision)` | **UNREFERENCED**; benturan ID dengan Misi 7; resolusi butuh keputusan pemilik proyek |
| 22 | `phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-canonical-v1.1.json[2]:KM02-E3` | Bab 1 | Unref | mcq | `evaluate` | `hard` | 19–28 | 50–53 | TG_VALID | `UNREFERENCED_BY_CURRENT_VN_RUNTIME` | **UNREFERENCED**; berkas fisik cadangan; resolusi butuh keputusan pemilik proyek |
| 23 | `phase-3/world-1-km-chapter-2-misi-5-canonical-v1.0.json[0]:KM02-A1` | Bab 2 | Misi 5 | mcq | `understand` | `easy` | 54–56 | 82–85 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 24 | `phase-3/world-1-km-chapter-2-misi-5-canonical-v1.0.json[1]:KM02-B1` | Bab 2 | Misi 5 | mcq | `analyze` | `med` | 57–60 | 87–90 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 25 | `phase-3/world-1-km-chapter-2-misi-5-canonical-v1.0.json[2]:KM02-B2` | Bab 2 | Misi 5 | mcq | `evaluate` | `med` | 57–60 | 87–90 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 26 | `phase-3/world-1-km-chapter-2-misi-6-canonical-v1.0.json[0]:KM02-C1` | Bab 2 | Misi 6 | mcq | `understand` | `med` | 61–65 | 91–94 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 27 | `phase-3/world-1-km-chapter-2-misi-6-canonical-v1.0.json[1]:KM02-D1` | Bab 2 | Misi 6 | mcq | `analyze` | `hard` | 66–73 | 94–98 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 28 | `phase-3/world-1-km-chapter-2-misi-6-canonical-v1.0.json[2]:KM02-D2` | Bab 2 | Misi 6 | mcq | `evaluate` | `med` | 66–73 | 94–98 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 29 | `phase-3/world-1-km-chapter-2-misi-7-canonical-v1.0.json[0]:KM02-E1` | Bab 2 | Misi 7 | mcq | `evaluate` | `med` | 74–76 | 98–102 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; benturan ID dengan unref Bab 1 |
| 30 | `phase-3/world-1-km-chapter-2-misi-7-canonical-v1.0.json[1]:KM02-E2` | Bab 2 | Misi 7 | mcq | `create` | `hard` | 74–76 | 98–102 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; benturan ID dengan unref Bab 1 |
| 31 | `phase-3/world-1-km-chapter-2-misi-8-canonical-v1.0.json[0]:KM02-F1` | Bab 2 | Misi 8 | mcq | `apply` | `hard` | 77–81 | 102–106 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 32 | `phase-3/world-1-km-chapter-2-misi-8-canonical-v1.0.json[1]:KM02-G1` | Bab 2 | Misi 8 | mcq | `create` | `med` | 82–87 | 106–111 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; lolos verifikasi mekanis |
| 33 | `phase-3/world-1-km-chapter-2-misi-8-canonical-v1.0.json[2]:K13-C02-PROSEDUR-01` | Bab 2 | Misi 8 | mcq | `analyze` | `med` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan K13 |
| 34 | `phase-3/world-1-km-chapter-2-misi-8-canonical-v1.0.json[3]:TKA-C02-BONUS-01` | Bab 2 | Misi 8 | mcq | `evaluate` | `hard` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; pengayaan TKA; butuh verifikasi keterlacakan TKA |
| 35 | `phase-3/world-1-km-chapter-3-misi-9-canonical-v1.0.json[0]:KM03-A1` | Bab 3 | Misi 9 | mcq | `analyze` | `med` | 103 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 36 | `phase-3/world-1-km-chapter-3-misi-9-canonical-v1.0.json[1]:KM03-A2` | Bab 3 | Misi 9 | mcq | `analyze` | `med` | 103 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 37 | `phase-3/world-1-km-chapter-3-misi-9-canonical-v1.0.json[2]:KM03-B1` | Bab 3 | Misi 9 | mcq | `analyze` | `med` | 110 | 0 | TG_ZERO | `HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD` | Runtime; HOLD tindakan pencegahan internal (Decision 009); kutipan dialog Pak Harfan (*Laskar Pelangi*); BG=0 |
| 38 | `phase-3/world-1-km-chapter-3-misi-9-canonical-v1.0.json[3]:KM03-B2` | Bab 3 | Misi 9 | mcq | `analyze` | `med` | 110 | 0 | TG_ZERO | `HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD` | Runtime; HOLD tindakan pencegahan internal (Decision 009); kutipan peran tokoh Mahar (*Laskar Pelangi*); BG=0 |
| 39 | `phase-3/world-1-km-chapter-3-misi-10-canonical-v1.0.json[0]:KM03-C1` | Bab 3 | Misi 10 | mcq | `analyze` | `med` | 113 | 0 | TG_ZERO | `HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD` | Runtime; HOLD tindakan pencegahan internal (Decision 009); kutipan alur SD Gantong (*Laskar Pelangi*); BG=0 |
| 40 | `phase-3/world-1-km-chapter-3-misi-10-canonical-v1.0.json[1]:KM03-C2` | Bab 3 | Misi 10 | mcq | `analyze` | `med` | 113 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 41 | `phase-3/world-1-km-chapter-3-misi-10-canonical-v1.0.json[2]:KM03-D1` | Bab 3 | Misi 10 | mcq | `analyze` | `med` | 120 | 0 | TG_ZERO | `HIGH COPYRIGHT/ORIGINALITY REVIEW RISK — HOLD` | Runtime; HOLD tindakan pencegahan internal (Decision 009); kutipan karnaval daun Mahar (*Laskar Pelangi*); BG=0 |
| 42 | `phase-3/world-1-km-chapter-3-misi-11-canonical-v1.0.json[0]:KM03-F1` | Bab 3 | Misi 11 | mcq | `analyze` | `med` | 124 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 43 | `phase-3/world-1-km-chapter-3-misi-11-canonical-v1.0.json[1]:KM03-F2` | Bab 3 | Misi 11 | mcq | `analyze` | `med` | 124 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 44 | `phase-3/world-1-km-chapter-3-misi-11-canonical-v1.0.json[2]:KM03-F3` | Bab 3 | Misi 11 | mcq | `analyze` | `med` | 123 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 45 | `phase-3/world-1-km-chapter-3-misi-11-canonical-v1.0.json[3]:K13-C03-MAJAS-01` | Bab 3 | Misi 11 | mcq | `apply` | `easy` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan majas |
| 46 | `phase-3/world-1-km-chapter-3-misi-11-canonical-v1.0.json[4]:TKA-C03-BONUS-01` | Bab 3 | Misi 11 | mcq | `evaluate` | `hard` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; pengayaan TKA; butuh verifikasi keterlacakan TKA |
| 47 | `phase-3/world-1-km-chapter-4-misi-12-canonical-v1.0.json[0]:KM04-A1` | Bab 4 | Misi 12 | mcq | `analyze` | `med` | 143 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 48 | `phase-3/world-1-km-chapter-4-misi-12-canonical-v1.0.json[1]:KM04-A2` | Bab 4 | Misi 12 | mcq | `analyze` | `med` | 147 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab B); butuh pemetaan BG |
| 49 | `phase-3/world-1-km-chapter-4-misi-12-canonical-v1.0.json[2]:KM04-A3` | Bab 4 | Misi 12 | mcq | `analyze` | `med` | 147 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab B); butuh pemetaan BG |
| 50 | `phase-3/world-1-km-chapter-4-misi-13-canonical-v1.0.json[0]:KM04-B1` | Bab 4 | Misi 13 | mcq | `analyze` | `med` | 154 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab D); butuh pemetaan BG |
| 51 | `phase-3/world-1-km-chapter-4-misi-13-canonical-v1.0.json[1]:KM04-B2` | Bab 4 | Misi 13 | mcq | `analyze` | `med` | 150 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab C); butuh pemetaan BG |
| 52 | `phase-3/world-1-km-chapter-4-misi-13-canonical-v1.0.json[2]:KM04-B3` | Bab 4 | Misi 13 | mcq | `analyze` | `med` | 151 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab C); butuh pemetaan BG |
| 53 | `phase-3/world-1-km-chapter-4-misi-14-canonical-v1.0.json[0]:KM04-C1` | Bab 4 | Misi 14 | mcq | `analyze` | `med` | 155 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab D); butuh pemetaan BG |
| 54 | `phase-3/world-1-km-chapter-4-misi-14-canonical-v1.0.json[1]:KM04-C2` | Bab 4 | Misi 14 | mcq | `analyze` | `med` | 157 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab D); butuh pemetaan BG |
| 55 | `phase-3/world-1-km-chapter-4-misi-14-canonical-v1.0.json[2]:KM04-C3` | Bab 4 | Misi 14 | mcq | `analyze` | `med` | 157 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0; anomali topik (materi Subbab D); butuh pemetaan BG |
| 56 | `phase-3/world-1-km-chapter-4-misi-14-canonical-v1.0.json[3]:K13-C04-EKSPLANASI-01` | Bab 4 | Misi 14 | mcq | `understand` | `med` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan kalimat pasif |
| 57 | `phase-3/world-1-km-chapter-5-misi-15-canonical-v1.0.json[0]:KM05-A1` | Bab 5 | Misi 15 | mcq | `analyze` | `med` | 189 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 58 | `phase-3/world-1-km-chapter-5-misi-15-canonical-v1.0.json[1]:KM05-A2` | Bab 5 | Misi 15 | mcq | `analyze` | `med` | 183 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 59 | `phase-3/world-1-km-chapter-5-misi-15-canonical-v1.0.json[2]:KM05-B1` | Bab 5 | Misi 15 | mcq | `analyze` | `med` | 207 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 60 | `phase-3/world-1-km-chapter-5-misi-16-canonical-v1.0.json[0]:KM05-C1` | Bab 5 | Misi 16 | mcq | `analyze` | `med` | 197 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 61 | `phase-3/world-1-km-chapter-5-misi-16-canonical-v1.0.json[1]:KM05-C2` | Bab 5 | Misi 16 | mcq | `apply` | `med` | 203 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 62 | `phase-3/world-1-km-chapter-5-misi-16-canonical-v1.0.json[2]:KM05-C3` | Bab 5 | Misi 16 | mcq | `apply` | `easy` | 201 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 63 | `phase-3/world-1-km-chapter-5-misi-17-canonical-v1.0.json[0]:KM05-D1` | Bab 5 | Misi 17 | mcq | `evaluate` | `hard` | 212 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 64 | `phase-3/world-1-km-chapter-5-misi-17-canonical-v1.0.json[1]:KM05-E1` | Bab 5 | Misi 17 | mcq | `analyze` | `med` | 215 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 65 | `phase-3/world-1-km-chapter-5-misi-17-canonical-v1.0.json[2]:KM05-E2` | Bab 5 | Misi 17 | mcq | `analyze` | `med` | 214 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; BG=0 (placeholder); butuh pemetaan BG riil & provenance |
| 66 | `phase-3/world-1-km-chapter-5-misi-17-canonical-v1.0.json[3]:K13-C05-ESAI-01` | Bab 5 | Misi 17 | mcq | `analyze` | `easy` | N/A | N/A | TG_NA | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; jembatan K13; butuh verifikasi keterlacakan fakta/opini |
| 67 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[0]:FINAL-C01-1` | Exam | Misi 18 | mcq | `analyze` | `med` | 5–7 | 34–35 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; Ujian Akhir Bab 1; lolos mekanis |
| 68 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[1]:FINAL-C01-2` | Exam | Misi 18 | mcq | `analyze` | `med` | 8–11 | 38–42 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; Ujian Akhir Bab 1; lolos mekanis |
| 69 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[2]:FINAL-C01-3` | Exam | Misi 18 | mcq | `evaluate` | `med` | 14–18 | 46–48 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; Ujian Akhir Bab 1; lolos mekanis |
| 70 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[3]:FINAL-C01-4` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 14–18 | 46–49 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; Ujian Akhir Bab 1; lolos mekanis |
| 71 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[4]:FINAL-C01-5` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 8–11 | 38–42 | TG_VALID | `UNVERIFIED — Needs Academic Review` | Runtime; Ujian Akhir Bab 1; lolos mekanis |
| 72 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[5]:FINAL-C02-1` | Exam | Misi 18 | mcq | `analyze` | `med` | 50–55 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 2; BG=0 (placeholder); butuh pemetaan BG |
| 73 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[6]:FINAL-C02-2` | Exam | Misi 18 | mcq | `analyze` | `med` | 60–65 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 2; BG=0 (placeholder); butuh pemetaan BG |
| 74 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[7]:FINAL-C02-3` | Exam | Misi 18 | mcq | `analyze` | `med` | 65–70 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 2; BG=0 (placeholder); butuh pemetaan BG |
| 75 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[8]:FINAL-C02-4` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 75–80 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 2; BG=0 (placeholder); butuh pemetaan BG |
| 76 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[9]:FINAL-C02-5` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 50–55 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 2; BG=0 (placeholder); butuh pemetaan BG |
| 77 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[10]:FINAL-C03-1` | Exam | Misi 18 | mcq | `analyze` | `med` | 103 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 3; BG=0 (placeholder); butuh pemetaan BG |
| 78 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[11]:FINAL-C03-2` | Exam | Misi 18 | mcq | `analyze` | `med` | 110 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 3; BG=0 (placeholder); butuh pemetaan BG |
| 79 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[12]:FINAL-C03-3` | Exam | Misi 18 | mcq | `analyze` | `med` | 113 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 3; BG=0 (placeholder); butuh pemetaan BG |
| 80 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[13]:FINAL-C03-4` | Exam | Misi 18 | mcq | `analyze` | `med` | 120 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 3; BG=0 (placeholder); butuh pemetaan BG |
| 81 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[14]:FINAL-C03-5` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 124 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 3; BG=0 (placeholder); butuh pemetaan BG |
| 82 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[15]:FINAL-C04-1` | Exam | Misi 18 | mcq | `analyze` | `med` | 143 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 4; BG=0 (placeholder); butuh pemetaan BG |
| 83 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[16]:FINAL-C04-2` | Exam | Misi 18 | mcq | `analyze` | `med` | 154 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 4; BG=0 (placeholder); butuh pemetaan BG |
| 84 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[17]:FINAL-C04-3` | Exam | Misi 18 | mcq | `analyze` | `med` | 155 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 4; BG=0 (placeholder); butuh pemetaan BG |
| 85 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[18]:FINAL-C04-4` | Exam | Misi 18 | mcq | `analyze` | `med` | 157 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 4; BG=0 (placeholder); butuh pemetaan BG |
| 86 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[19]:FINAL-C04-5` | Exam | Misi 18 | mcq | `analyze` | `hard` | 150 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 4; BG=0 (placeholder); butuh pemetaan BG |
| 87 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[20]:FINAL-C05-1` | Exam | Misi 18 | mcq | `analyze` | `med` | 183–187 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 5; BG=0 (placeholder); butuh pemetaan BG |
| 88 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[21]:FINAL-C05-2` | Exam | Misi 18 | mcq | `analyze` | `med` | 197–199 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 5; BG=0 (placeholder); butuh pemetaan BG |
| 89 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[22]:FINAL-C05-3` | Exam | Misi 18 | mcq | `apply` | `med` | 203 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 5; BG=0 (placeholder); butuh pemetaan BG |
| 90 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[23]:FINAL-C05-4` | Exam | Misi 18 | mcq | `evaluate` | `hard` | 212 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 5; BG=0 (placeholder); butuh pemetaan BG |
| 91 | `phase-3/world-1-km-final-exam-canonical-v1.0.json[24]:FINAL-C05-5` | Exam | Misi 18 | mcq | `analyze` | `med` | 214–215 | 0 | TG_ZERO | `REVISE — Metadata / Source Traceability Follow-up` | Runtime; Ujian Akhir Bab 5; BG=0 (placeholder); butuh pemetaan BG |

> [!NOTE]
> **Catatan Kehati-hatian Hukum (Butir No. 37, 38, 39, 41):**
> Penetapan status HOLD pada `KM03-B1`, `KM03-B2`, `KM03-C1`, dan `KM03-D1` merupakan tindakan pencegahan internal (*precautionary containment*) proyek berdasarkan ketetapan *Decision 009* guna memitigasi risiko klaim karya turunan (*derivative works*), dan **bukan merupakan putusan pengadilan atau kesimpulan hukum final**. Butir tetap ditahan dari promosi produksi sampai keputusan penggantian konten fiksi orisinal ditetapkan oleh pemilik proyek.

---

## 11. Status Resmi Master Control dan Project Log

1. **Master Control Seksi 29:**
   - Ditetapkan status resmi: **`CORRECTIVE AUDIT PASS / AUDIT VERIFIED IN PROGRESS 🟡`**.
   - Ringkasan mencatat rekonsiliasi 88 record runtime aktif, 3 record `UNREFERENCED_BY_CURRENT_VN_RUNTIME` (termasuk 2 benturan ID fisik `KM02-E1` dan `KM02-E2`), 82 record mirror Phase 4, dan 38 record seed KB v1.
   - Gerbang kualitas konten tetap **TERKUNCI / TERTUNDA (BLOCKED / HOLD 🛑)** sampai review pedagogis individual dilaksanakan, verifikasi keterlacakan silabus eksternal diselesaikan, dan 4 butir berisiko hak cipta Bab 3 diganti.
   - Seluruh metrik diselaraskan dengan putaran audit Pass 2.2.
2. **Project Log 107:**
   - Dimutakhirkan secara terkoordinasi agar memuat metodologi kunci inventaris internal, rincian benturan ID, pemilahan status runtime (31 UNVERIFIED, 53 REVISE, 4 HOLD), pemulihan checklist metodologi audit mekanis vs individual, klausul kehati-hatian hukum, pencatatan 11 string ID historis, dan koreksi rentang kuota (96–100 butir).

---

## 12. Konfirmasi Batasan Operasi Proyek (Zero Mutation) & Verifikasi Git

Panel auditor dokumen dan integritas data mengonfirmasi berdasarkan ruang lingkup bukti verifikasi faktual:
- **TIDAK ADA** dataset JSON soal pada `phase-3/`, `phase-4-pools/`, atau `knowledge-base/` yang diubah.
- **TIDAK ADA** kunci jawaban, teks stimulus, opsi, atau metadata butir soal yang dimodifikasi di dataset.
- **TIDAK ADA** perubahan pada engine Visual Novel, prototipe JRPG, CSS, renderer, skema JSON, maupun aset visual.
- **TIDAK ADA** butir soal baru yang ditulis dan tidak ada promosi status kanonikal baru.
- **TIDAK ADA** commit atau push pada tahap ini.

**Ringkasan Status Verifikasi Git Pass 2.2.2:**
- `git diff --check` lulus tanpa whitespace error.
- Working tree tetap memuat tiga modifikasi dokumentasi yang belum di-commit (`AUDIT-BANK-SOAL-BAHASA-INDONESIA-KELAS-XII.md`, `107-Audit-Komprehensif-Bank-Soal-Bahasa-Indonesia-Kelas-XII.md`, dan `00-MASTER-CONTROL-v1.1.md`).
- Tidak ditemukan perbedaan angka pada parameter yang diperiksa silang.
- Pemeriksaan otomatis dan regex tidak membuktikan kebenaran pedagogis atau kesempurnaan semantik seluruh isi dokumen.

*Laporan rekonsiliasi Pass 2.2 ini tuntas dan memfinalkan seluruh dokumentasi audit. Langkah selanjutnya menunggu arahan eksplisit dari pemilik proyek.*
