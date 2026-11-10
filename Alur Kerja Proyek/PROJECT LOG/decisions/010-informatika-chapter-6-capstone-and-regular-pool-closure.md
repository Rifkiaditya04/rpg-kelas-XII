# Decision 010 — Penutupan Bank Soal Reguler Informatika (Bab 1–5) & Penetapan Asesmen Capstone Kinerja Bab 6

**Tanggal:** 9 November 2026
**Fase:** Phase 3 — Mission System & Content Architecture (World 4 Informatika)
**Status:** APPROVED — USER APPROVED (2026-11-10) (Persetujuan diberikan oleh pemilik proyek pada 10 November 2026)
**Dokumen Acuan:**
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md`
- `Alur Kerja Proyek/01-GDD-ACADEMIC-ASCENSION-RPG.md`
- `Alur Kerja Proyek/SOP-PRODUKSI-BANK-SOAL-BATCH-v2.0.md`
- `Buku Kurikulum/Kurikulum Merdeka/Informatika_BS_KLS_XII.pdf` (hlm. 1–217)
- `Buku Kurikulum/Kurikulum Merdeka/Informatika_BG_KLS_XII.md` (hlm. 12–15, 252–288)

---

## 1. Konteks & Bukti Akademik

1. Produksi bank soal objektif Informatika Kelas XII Bab 1–5 telah menghasilkan 21 misi (Misi 1–21) dengan total 63 butir soal objektif melalui alur Base-Plus-Overlay v1.1.
2. Secara khusus, validasi batch Bab 5 menggunakan skrip `validate_bab5.js` menghasilkan 388/388 pemeriksaan lulus (PASS).
3. Bab 6 Buku Siswa (hlm. 191–217) dan Buku Panduan Guru (hlm. 252–288) berjudul resmi **Praktik Lintas Bidang** dengan tema utama pengelolaan sampah 3R (*Reuse, Reduce, Recycle*) berparadigma *from ego to eco*.
4. Aktivitas Bab 6 dirancang sebagai pembelajaran berbasis proyek (*Project-Based Learning*) selama 8 pertemuan (40 JP) yang menuntut pembentukan tim kolaboratif, observasi lapangan, pembagian peran kelompok (Ketua Proyek, Pencari Data, Analisis Data, Penanggung Jawab Prototipe, Presentasi Data), perancangan artefak komputasi (program basis data atau rekayasa mikrokontroler Arduino), penulisan laporan teknis tertulis, dan presentasi publik/poster.
5. Panduan penilaian resmi Bab 6 menggunakan rubrik observasi proses kerja kelompok, penilaian artefak produk, asesmen kelompok, asesmen pribadi, dan asesmen antarteman, bukan instrumen tes tertulis pilihan ganda mandiri.

---

## 2. Keputusan yang Diusulkan

### A. Penutupan Bank Soal Reguler Informatika pada Misi 21
- Bank soal reguler objektif untuk mata pelajaran Informatika Kelas XII diusulkan resmi **DITUTUP pada Misi 21 (Bab 5 Subbab E)**.
- Total inventaris bank soal reguler berjumlah **63 butir soal objektif** yang terdistribusi ke dalam 5 pool Phase 4 (`pool-informatika-INF12-C01.json` s.d. `pool-informatika-INF12-C05.json`).
- Total berkas Phase 3 yang dihasilkan berjumlah **63 berkas misi** untuk 21 misi (setiap misi memiliki tiga berkas Phase 3 per misi: baseline v1.0, revision overlay v1.1, dan canonical v1.1), serta didukung oleh **5 berkas Master Source Map** per bab.
- Tidak ada penambahan misi pilihan ganda reguler untuk Bab 6.

### B. Usulan Status Kurikuler Bab 6: Praktik Lintas Bidang
- Bab 6 tetap diakui secara sah dan tidak terpisahkan dari ruang lingkup kurikulum Informatika Kelas XII.
- Bab 6 diusulkan sebagai **Capstone Proyek Kolaboratif Berbasis Kinerja**, bukan sebagai pool soal pilihan ganda konvensional. Memaksakan proyek kelompok rekayasa lapangan menjadi kuis pilihan ganda hafalan dilarang karena merusak validitas konstruk asesmen.

### C. Penangguhan Misi 22–25 & Status Capstone Quest
- Gagasan integrasi naratif Bab 6 ke dalam game (konsep *Eco-Informatics Capstone Quest* / Misi 22–25 simulasi keputusan rekayasa proyek) **TIDAK DIBUAT** pada batch perakitan bank soal ini.
- Konsep tersebut diklasifikasikan sebagai **Eksplorasi Fitur Game Masa Depan (*Future Feature Backlog*)** dan disimpan dalam dokumentasi backlog arsitektur game, bukan dihitung sebagai konten yang telah diproduksi.

### D. Penegasan Batasan Cakupan Elemen Fase F
- Proyek **TIDAK MENYATAKAN** bahwa seluruh elemen Capaian Pembelajaran (CP) Informatika Fase F telah tercakup 100% hanya berdasarkan selesainya bank soal Bab 1–5.
- Sesuai struktur kurikulum resmi (BG Tabel I.1 hlm. 12–15), CP Fase F merupakan capaian multi-tahun yang mencakup Kelas XI dan XII. Tabel I.1 memperlihatkan alokasi struktur kurikulum di mana elemen TIK dan AD dasar tidak memiliki CP mandiri di kelas XII (ditandai dengan tanda strip), yang diperlakukan murni sebagai bukti alokasi kurikulum dan bukan sebagai bukti bahwa seluruh kompetensi TIK dan AD telah tuntas.
- Elemen SK (khususnya rekayasa kit mikrokontroler single board controller) dan elemen PLB secara kurikuler terintegrasi di dalam proyek kinerja Bab 6.
- Pemetaan formal kompetensi lintas tahun (Kelas X, XI, dan XII) serta verifikasi ketercakupan CP Fase F secara menyeluruh tetap memerlukan verifikasi terpisah dan tidak boleh diasumsikan tuntas hanya dari materi Bab 1–5 buku teks Kelas XII.

### E. Integritas Laporan Terlindungi
- Tiga berkas laporan terlindungi (`missions/learning_curve_report.json`, `missions/recipe_validation_report.json`, dan `missions/smoke_test_report.json`) tetap berada dalam status `modified/unstaged` dan ditegaskan tidak disentuh dalam pelaksanaan keputusan ini.
