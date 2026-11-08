# MASTER SOURCE MAP — INFORMATIKA KELAS XII (BAB 2)
## Sistem Komputer (Kurikulum Merdeka)

**Dokumen:** `phase-3/world-4-informatika-chapter-2-master-source-map-v1.1.md`
**Mata Pelajaran:** Informatika (Fase F - Kelas XII)
**Buku Rujukan Siswa:** *Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana, R. Kurweni Ukar, Dela Chaerani, Solehkun Kodir, hlm. 23–48
**Buku Rujukan Guru:** *Buku Panduan Guru Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana dkk., hlm. 58–84
**Kebijakan Hak Cipta:** Decision 009 (Content Source and Copyright Safe Pipeline — Zero Verbatim Infringement, Original Contexts, Authentic Educational Scenarios)

---

## 1. Matriks Cakupan Kurikulum Bab 2 (Misi 4–7)

| Misi | Materi / Subbab | Tujuan Pembelajaran / Kompetensi Inti | Halaman BS / BG | ID P3 | ID P4 | Tingkat Kognitif & Kesulitan | Kunci | Ringkasan Kompetensi |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Misi 4** | Subbab A: Single Board Computer (SBC) & GPIO | Memahami arsitektur Single Board Computer (Raspberry Pi), perbedaan SBC vs mikrokontroler vs PC, dan fungsi pinout GPIO untuk antarmuka fisik. | **BS:** 25–27<br>**BG:** 60–64 | `INF12-C02-M04-Q01`<br>`INF12-C02-M04-Q02`<br>`INF12-C02-M04-Q03` | `INF12-C02-A-1101`<br>`INF12-C02-A-2102`<br>`INF12-C02-A-3103` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**C**<br>**B** | - Membedakan karakteristik arsitektur SBC terintegrasi vs PC modular.<br>- Menerapkan pemanfaatan pin GPIO untuk antarmuka perangkat keras eksternal.<br>- Menganalisis kriteria pemilihan perangkat SBC vs mikrokontroler sesuai tuntutan komputasi. |
| **Misi 5** | Subbab B.1–B.2: Single Board Controller & Ekosistem Arduino | Memahami karakteristik mikrokontroler, papan sirkuit Arduino Uno, struktur dasar program (`void setup()` vs `void loop()`), dan logika inisialisasi pin. | **BS:** 27–33<br>**BG:** 65–68 | `INF12-C02-M05-Q01`<br>`INF12-C02-M05-Q02`<br>`INF12-C02-M05-Q03` | `INF12-C02-B-4201`<br>`INF12-C02-B-5202`<br>`INF12-C02-B-6203` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**C**<br>**C** | - Membedakan siklus eksekusi fungsi `void setup()` dan `void loop()`.<br>- Menerapkan konfigurasi mode pin input (sensor) dan output (aktuator).<br>- Menganalisis kesalahan logika penempatan baris kode yang menyebabkan eksekusi terhenti. |
| **Misi 6** | Subbab B.3–B.4: Komponen Penunjang & Simulator Mikrokontroler | Menguasai polaritas komponen LED, resistor pembatas arus, sensor LDR, serta pemanfaatan simulator (UnoArduSim, Tinkercad, Wokwi) dalam perancangan sirkuit. | **BS:** 33–39<br>**BG:** 69–74 | `INF12-C02-M06-Q01`<br>`INF12-C02-M06-Q02`<br>`INF12-C02-M06-Q03` | `INF12-C02-C-7301`<br>`INF12-C02-C-8302`<br>`INF12-C02-C-9303` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**A**<br>**C** | - Membedakan polaritas kaki anoda-katoda LED dan fungsi resistor pembatas arus.<br>- Menerapkan karakteristik perubahan resistansi sensor cahaya LDR pada kondisi gelap.<br>- Menganalisis nilai tambah simulator dalam verifikasi algoritma dan pencegahan korsleting. |
| **Misi 7** | Subbab B.5: Pemrograman Mikrokontroler & Eksperimen I/O | Menganalisis perintah kontrol digital (`digitalWrite`, `delay`), perancangan pola sinyal Morse S.O.S, dan optimasi efisiensi kode dengan loop `for`. | **BS:** 39–46<br>**BG:** 75–80 | `INF12-C02-M07-Q01`<br>`INF12-C02-M07-Q02`<br>`INF12-C02-M07-Q03` | `INF12-C02-D-8401`<br>`INF12-C02-D-9402`<br>`INF12-C02-D-9403` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**B**<br>**B** | - Memahami arti operasional perintah `digitalWrite(HIGH)` dan `delay(ms)`.<br>- Menerapkan perancangan pola kedipan panjang kode Morse 'O' pada lampu LED.<br>- Menganalisis keunggulan struktur perulangan `for` dibanding duplikasi kode manual pada memori mikrokontroler. |

---

## 2. Distribusi Taksonomi Bloom & Tingkat Kesulitan

- **C2 (Understand / Pemahaman):** 4 butir (33,3%) — Tingkat Kesulitan: *Easy*
- **C3 (Apply / Penerapan Konseptual):** 4 butir (33,3%) — Tingkat Kesulitan: *Medium*
- **C4 (Analyze / Penalaran Analitis):** 4 butir (33,3%) — Tingkat Kesulitan: *Hard*
- **Total Soal Bab 2:** Tepat 12 butir soal objektif terkalibrasi.

---

## 3. Kepatuhan Hak Cipta & Orisinalitas (Decision 009)

1. **Rujukan Konseptual Murni:** Materi arsitektur SBC, pin GPIO, pemrograman mikrokontroler Arduino Uno, simulator UnoArduSim, dan kode morse S.O.S bersumber dari Buku Siswa hlm. 23–48 dan Buku Panduan Guru hlm. 58–84 Kurikulum Merdeka (Kemendikbudristek 2022).
2. **Skenario Studi Kasus Baru:** Seluruh narasi soal (absensi RFID sekolah, pemantauan rumah kaca cerdas, alarm pintu, instalasi pembagi tegangan LDR, optimasi loop memori) disusun orisinal secara mandiri oleh proyek.
3. **Bebas Salin Harfiah:** Tidak ada penyalinan kalimat latihan atau kode verbatim dari buku teks; setiap kode program dirancang sebagai skenario analitis instruksional mandiri.
