# MASTER SOURCE MAP — INFORMATIKA KELAS XII (BAB 3)
## Berpikir Komputasional dan Algoritma Pemrograman (Kurikulum Merdeka)

**Dokumen:** `phase-3/world-4-informatika-chapter-3-master-source-map-v1.1.md`
**Mata Pelajaran:** Informatika (Fase F - Kelas XII)
**Buku Rujukan Siswa:** *Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana, R. Kurweni Ukar, Dela Chaerani, Solehkun Kodir, hlm. 49–86
**Buku Rujukan Guru:** *Buku Panduan Guru Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana dkk., hlm. 86–132
**Kebijakan Hak Cipta:** Decision 009 (Content Source and Copyright Safe Pipeline — Zero Verbatim Infringement, Original Contexts, Authentic Educational Scenarios)

---

## 1. Matriks Cakupan Kurikulum Bab 3 (Misi 8–11)

| Misi | Materi / Subbab | Tujuan Pembelajaran / Kompetensi Inti | Halaman BS / BG | ID P3 | ID P4 | Tingkat Kognitif & Kesulitan | Kunci | Ringkasan Kompetensi |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Misi 8** | Subbab A & B: Empat Pilar BK & Representasi Algoritma | Memahami 4 pilar Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma), representasi algoritma (Deskriptif, Flowchart, Pseudocode), dan aturan pencarian string dengan wildcard (`?` dan `*`). | **BS:** 52–60<br>**BG:** 88–98 | `INF12-C03-M08-Q01`<br>`INF12-C03-M08-Q02`<br>`INF12-C03-M08-Q03` | `INF12-C03-A-1101`<br>`INF12-C03-A-2102`<br>`INF12-C03-A-3103` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **C**<br>**B**<br>**B** | - Memahami definisi dan fungsi pilar Abstraksi dalam menyaring informasi esensial.<br>- Menerapkan aturan pola pencarian teks berbasis karakter wildcard (`?` dan `*`).<br>- Menganalisis keunggulan representasi Pseudocode sebagai jembatan ke bahasa C. |
| **Misi 9** | Subbab B.2–B.3: Algoritma Logika Analitis & Rekursi | Menguasai strategi pencarian biner (*binary search*), pemodelan pohon keputusan alir (*decision tree / pruning*), dan analisis pola rekursif fraktal Segitiga Sierpinski. | **BS:** 61–64<br>**BG:** 99–106 | `INF12-C03-M09-Q01`<br>`INF12-C03-M09-Q02`<br>`INF12-C03-M09-Q03` | `INF12-C03-B-4201`<br>`INF12-C03-B-5202`<br>`INF12-C03-B-6203` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **C**<br>**B**<br>**B** | - Memahami efisiensi pembagian ruang pencarian biner (*binary search*) pada tebakan pertama.<br>- Menerapkan pemodelan pohon keputusan (*decision tree / pruning*) pada optimasi rute selamat.<br>- Menganalisis formulasi barisan geometri rekursif pembentukan fraktal Segitiga Sierpinski. |
| **Misi 10** | Subbab C–I: Sintaks Bahasa C Arduino & Operator | Memahami aturan sintaks bahasa C Arduino (#define, semicolon, blok kurung), operator aritmatika/modulo (`%`) dan logika (`&&`), serta fungsi komunikasi serial monitor. | **BS:** 65–74<br>**BG:** 107–114 | `INF12-C03-M10-Q01`<br>`INF12-C03-M10-Q02`<br>`INF12-C03-M10-Q03` | `INF12-C03-C-7301`<br>`INF12-C03-C-8302`<br>`INF12-C03-C-9303` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**A**<br>**B** | - Membedakan perilaku pencetakan `Serial.print()` dan `Serial.println()`.<br>- Menerapkan evaluasi ekspresi operator modulo (`%`) dan logika boolean AND (`&&`).<br>- Menganalisis perbandingan direktif preprosesor `#define` vs alokasi RAM variabel integer. |
| **Misi 11** | Subbab J–O: Kontrol I/O Analog-Digital & Array | Menguasai perbedaan resolusi sinyal ADC `analogRead` vs `digitalRead`, pengindeksan array 1 dimensi frekuensi nada musik Piezo Speaker, dan analisis efek *blocking* fungsi `delay()`. | **BS:** 74–86<br>**BG:** 115–126 | `INF12-C03-M11-Q01`<br>`INF12-C03-M11-Q02`<br>`INF12-C03-M11-Q03` | `INF12-C03-D-8401`<br>`INF12-C03-D-9402`<br>`INF12-C03-D-9403` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**C**<br>**B** | - Membedakan sinyal biner `digitalRead` vs rentang nilai 10-bit `analogRead` (0-1023).<br>- Menerapkan pemanggilan elemen array nada musik Piezo Speaker berbasis indeks 0.<br>- Menganalisis kelemahan instruksi blocking `delay()` terhadap responsivitas sensor *real-time*. |

---

## 2. Distribusi Taksonomi Bloom & Tingkat Kesulitan

- **C2 (Understand / Pemahaman):** 4 butir (33,3%) — Tingkat Kesulitan: *Easy*
- **C3 (Apply / Penerapan Konseptual):** 4 butir (33,3%) — Tingkat Kesulitan: *Medium*
- **C4 (Analyze / Penalaran Analitis):** 4 butir (33,3%) — Tingkat Kesulitan: *Hard*
- **Total Soal Bab 3:** Tepat 12 butir soal objektif terkalibrasi.

---

## 3. Kepatuhan Hak Cipta & Orisinalitas (Decision 009)

1. **Rujukan Konseptual Murni:** Konsep 4 pilar BK, wildcard pencarian, pohon keputusan alir sungai, fraktal Sierpinski, sintaks bahasa C Arduino, operator modulo/logika, komunikasi serial, ADC analog 10-bit, dan array nada piezo merujuk pada Buku Siswa hlm. 49–86 dan Panduan Guru hlm. 86–132 Kurikulum Merdeka (Kemendikbudristek 2022).
2. **Skenario Studi Kasus Orisinal:** Seluruh teks stimulus (studi kasus otorisasi transaksi, pencarian pola wildcard, robot pemadam api real-time, optimasi memori preprosesor) disusun mandiri oleh proyek.
3. **Bebas Salin Harfiah:** Tidak ada penyalinan kalimat latihan atau kode verbatim dari buku sumber; kode program disusun sebagai instrumen penalaran analitis mandiri.
