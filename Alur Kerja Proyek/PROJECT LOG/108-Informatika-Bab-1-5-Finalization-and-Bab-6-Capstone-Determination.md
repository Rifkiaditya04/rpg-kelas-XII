# Project Log 108 — Rekapitulasi Bank Soal Reguler Informatika (Bab 1–5) & Usulan Penetapan Desain Capstone Bab 6

**Tanggal:** 9 November 2026
**Pelaksana:** Content Architecture & Curriculum Engineering Agent
**Status:** APPROVED — USER APPROVED (2026-11-10) (Persetujuan diberikan oleh pemilik proyek pada 10 November 2026)
**Referensi Riwayat:** Melanjutkan Project Log 107 (`Audit-Komprehensif-Bank-Soal-Bahasa-Indonesia-Kelas-XII.md`) dan Decision 009 (`content-source-and-copyright-safe-pipeline.md`).

---

## 1. Ringkasan Eksekutif
Sesi kerja ini menyelesaikan verifikasi teknis commit Bab 5 (`32f8f8b`), investigasi lingkungan pengujian `npm test`, kajian akademik kurikuler Bab 6 Praktik Lintas Bidang (PLB), dan perumusan usulan penutupan bank soal reguler mata pelajaran Informatika Kelas XII.

---

## 2. Hasil Verifikasi Teknis Bab 5 & Lingkungan Pengujian
1. **Commit HEAD Terverifikasi:** `32f8f8bd557fc37683994f3e40d44e8cb3ce6080` (ahead 5 commits dari `origin/visual-refresh`).
2. **Penyebab `npm test` Exit Code 1:** Kegagalan terbukti murni akibat konfigurasi lingkungan (ketiadaan berkas `package.json` pada repositori web statis vanilla ini), bukan kegagalan skema maupun konten Bab 5.
3. **Hasil Validasi Batch Bab 5:** Skrip pengujian terpadu batch Bab 5 (`validate_bab5.js`) mencatat kelulusan **388/388 pemeriksaan (100% PASS)** mencakup resolusi Base-Plus-Overlay v1.1, kesesuaian kunci, format opsi, paritas Phase 3/Phase 4, dan parameter gameplay.
4. **Status Berkas Terlindungi:** Tiga laporan pengujian sistem berada dalam status `modified/unstaged` dan ditegaskan tidak disentuh:
   - `missions/learning_curve_report.json`
   - `missions/recipe_validation_report.json`
   - `missions/smoke_test_report.json`

---

## 3. Matriks Inventaris Bank Soal Reguler Informatika (Bab 1–5)

Matriks berikut mencatat judul resmi bab sesuai Buku Siswa, materi utama bab buku teks, keterkaitan elemen kurikulum secara indikatif, dan sebaran butir soal objektif:

| Bab | Judul Resmi Bab (Buku Siswa) | Halaman Cetak BS | Materi Utama Bab | Keterkaitan Elemen Kurikulum (indikatif / perlu pemetaan formal) | Cakupan Misi | Berkas Misi Phase 3 | Jumlah Butir | Berkas Pool Phase 4 |
| :---: | :--- | :---: | :--- | :--- | :---: | :---: | :---: | :---: |
| **Bab 1** | Informatika Sekarang dan Masa Depan | 1–22 | Perkembangan informatika, profesi/karier komputasi, dan literasi digital era industri 4.0/society 5.0 | Belum dipetakan ke elemen formal secara spesifik | Misi 1–3 | 9 berkas (3 misi $\times$ 3 berkas) | 9 butir | `pool-informatika-INF12-C01.json` |
| **Bab 2** | Sistem Komputer | 23–48 | Komponen internal perangkat keras, interaksi perangkat, siklus instruksi, dan mekanisme sistem operasi | Terkait Sistem Komputer (SK) | Misi 4–7 | 12 berkas (4 misi $\times$ 3 berkas) | 12 butir | `pool-informatika-INF12-C02.json` |
| **Bab 3** | Berpikir Komputasional dan Algoritma Pemrograman | 49–86 | Struktur data abstrak (graf, pohon), strategi algoritmik, dan pemrograman modular bahasa C/C++ | Terkait Berpikir Komputasional (BK) dan materi algoritma/pemrograman; pemetaan formal perlu verifikasi | Misi 8–11 | 12 berkas (4 misi $\times$ 3 berkas) | 12 butir | `pool-informatika-INF12-C03.json` |
| **Bab 4** | Jaringan Komputer dan Internet | 87–138 | Arsitektur jaringan, pengalamatan IPv4, topologi, OSI/TCP layer, transmisi UTP, dan proteksi keamanan siber/firewall | Terkait Jaringan Komputer dan Internet (JKI) | Misi 12–16 | 15 berkas (5 misi $\times$ 3 berkas) | 15 butir | `pool-informatika-INF12-C04.json` |
| **Bab 5** | Dampak Sosial Informatika | 139–190 | Karakteristik dan algoritma media sosial, fenomena FOMO, transformasi TIK pendidikan & ekonomi, hukum siber UU ITE, dan detoksifikasi digital | Terkait Dampak Sosial Informatika (DSI) | Misi 17–21 | 15 berkas (5 misi $\times$ 3 berkas) | 15 butir | `pool-informatika-INF12-C05.json` |
| **Subtotal** | **5 Bab Materi Pokok Buku Teks** | **1–190** | **Inventaris Bank Soal Objektif Reguler Bab 1–5** | **Pemetaan formal multi-tahun perlu verifikasi** | **21 Misi** | **63 Berkas Misi** | **63 Butir** | **5 Berkas Pool P4** |
| **Bab 6** | Praktik Lintas Bidang | 191–217 | Proyek kolaboratif pengelolaan sampah 3R berbasis tim, rancang bangun prototipe komputasi/Arduino, pelaporan ilmiah, dan presentasi publik | Praktik Lintas Bidang (PLB); terdapat penerapan Sistem Komputer (SK) | — | — | — | — |

*Status Asesmen Bab 6:* Bab 6 diusulkan sebagai **Capstone Proyek Kolaboratif Berbasis Kinerja** (bukan berupa pool soal pilihan ganda reguler).

*Catatan Inventaris Teknis Phase 3:* Setiap misi memiliki tiga berkas Phase 3 per misi (baseline v1.0, revision overlay v1.1, dan canonical v1.1), sehingga 21 misi menghasilkan total 63 berkas misi Phase 3, 5 berkas Master Source Map per bab, dan 5 berkas pool Phase 4.

---

## 4. Usulan Ketetapan Akademik dan Desain Bab 6
1. **Penutupan Bank Soal Reguler:** Bank soal objektif reguler Informatika diusulkan berhenti pada Misi 21 dengan inventaris 63 butir soal objektif.
2. **Karakter Asesmen Bab 6:** Karakter asesmen Bab 6 yang diusulkan adalah **Capstone Proyek Kolaboratif Berbasis Kinerja** bertema pengelolaan sampah 3R dengan paradigma *from ego to eco*. Proyek kolaboratif berkelompok ini tidak dipaksakan menjadi butir soal pilihan ganda konvensional.
3. **Status Konsep Capstone Quest:** Ide pengembangan Misi 22–25 (*Eco-Informatics Capstone Quest*) disimpan ke dalam backlog fitur game masa depan dan tidak diproduksi pada batch ini.
4. **Batasan Klaim Ketercakupan Kurikulum:** Proyek secara ketat membedakan antara penuntasan bank soal materi buku teks Bab 1–5 dengan pemetaan utuh seluruh elemen Fase F multi-tahun (Kelas XI–XII).
