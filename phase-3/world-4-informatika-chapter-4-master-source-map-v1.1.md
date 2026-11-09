# MASTER SOURCE MAP — INFORMATIKA KELAS XII (BAB 4)
## Jaringan Komputer dan Internet (Kurikulum Merdeka)

**Dokumen:** `phase-3/world-4-informatika-chapter-4-master-source-map-v1.1.md`
**Mata Pelajaran:** Informatika (Fase F - Kelas XII)
**Buku Rujukan Siswa:** *Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana, R. Kurweni Ukar, Dela Chaerani, Solehkun Kodir, hlm. 87–138
**Buku Rujukan Guru:** *Buku Panduan Guru Informatika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Budi Permana dkk., hlm. 134–204
**Kebijakan Hak Cipta:** Decision 009 (Content Source and Copyright Safe Pipeline — Zero Verbatim Infringement, Original Contexts, Authentic Educational Scenarios)

---

## 1. Matriks Cakupan Kurikulum Bab 4 (Misi 12–16)

| Misi | Materi / Subbab | Tujuan Pembelajaran / Kompetensi Inti | Halaman BS / BG | ID P3 | ID P4 | Tingkat Kognitif & Kesulitan | Kunci | Ringkasan Kompetensi |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Misi 12** | Subbab A & B: Arsitektur Jaringan, Pengalamatan IP, & Klasifikasi Geografis | Memahami pengalamatan IPv4 (Network-ID vs Host-ID, Kelas A/B/C, subnet mask) dan klasifikasi jangkauan geografis jaringan (PAN, LAN, MAN, WAN, Internet). | **BS:** 89–93<br>**BG:** 144–154 | `INF12-C04-M12-Q01`<br>`INF12-C04-M12-Q02`<br>`INF12-C04-M12-Q03` | `INF12-C04-A-1101`<br>`INF12-C04-A-2102`<br>`INF12-C04-A-3103` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**C**<br>**B** | - Membedakan pembagian Network-ID dan Host-ID pada alamat IP Kelas C.<br>- Menerapkan klasifikasi jaringan WAN pada konektivitas antar-wilayah kepulauan.<br>- Menganalisis dampak kelangkaan alamat IPv4 dan strategi transisi ke IPv6/NAT. |
| **Misi 13** | Subbab C & D: Topologi Jaringan & Pemodelan Aspek Teknis | Menganalisis karakteristik topologi fisik (Bus, Ring, Star, Mesh, Tree/Hybrid), isolasi kegagalan, dan pertimbangan aspek teknis perancangan jaringan sekolah. | **BS:** 94–99<br>**BG:** 155–163 | `INF12-C04-M13-Q01`<br>`INF12-C04-M13-Q02`<br>`INF12-C04-M13-Q03` | `INF12-C04-B-4201`<br>`INF12-C04-B-5202`<br>`INF12-C04-B-6203` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**C**<br>**B** | - Memahami keunggulan isolasi gangguan pada topologi Star dibanding topologi Bus.<br>- Menerapkan perancangan topologi Full Mesh berkeandalan tinggi untuk server rumah sakit.<br>- Menganalisis efisiensi biaya dan skalabilitas topologi Tree pada jaringan kampus SMK. |
| **Misi 14** | Subbab E: Pemodelan Lapisan Protokol (OSI vs TCP/IP) | Memahami hierarki fungsi model referensi OSI 7 Layer, perbandingannya dengan arsitektur TCP/IP 4 Layer, dan karakteristik protokol transport (TCP vs UDP). | **BS:** 100–103<br>**BG:** 164–173 | `INF12-C04-M14-Q01`<br>`INF12-C04-M14-Q02`<br>`INF12-C04-M14-Q03` | `INF12-C04-C-7301`<br>`INF12-C04-C-8302`<br>`INF12-C04-C-9303` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **C**<br>**B**<br>**B** | - Memahami fungsi pengalamatan logis dan routing pada Network Layer model OSI.<br>- Menerapkan pemetaan 3 lapisan teratas OSI ke Application Layer model TCP/IP.<br>- Menganalisis perbedaan keandalan TCP (transaksi perbankan) vs kecepatan UDP (streaming video). |
| **Misi 15** | Subbab F & G: Komponen Jaringan, Media Transmisi, & Pengkabelan | Menguasai perbedaan fungsional perangkat jaringan (Hub vs Switch), transmisi media fisik (UTP, Serat Optik, Wi-Fi), dan standar kabel UTP (Straight vs Cross-Over). | **BS:** 104–118<br>**BG:** 174–183 | `INF12-C04-M15-Q01`<br>`INF12-C04-M15-Q02`<br>`INF12-C04-M15-Q03` | `INF12-C04-D-8401`<br>`INF12-C04-D-9402`<br>`INF12-C04-D-9403` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **B**<br>**B**<br>**C** | - Membedakan mekanisme broadcast pasif pada Hub vs unicast cerdas pada Switch.<br>- Menerapkan pemilihan kabel Cross-Over untuk koneksi peer-to-peer antar-laptop.<br>- Menganalisis kekebalan interferensi elektromagnetik kabel Serat Optik di gardu industri. |
| **Misi 16** | Subbab H, I, J: Keamanan Siber, Tata Kelola Data, & Firewall | Menguasai prinsip CIA Triad, tata kelola kontrol akses (Autentikasi vs Otorisasi), metode ancaman siber (Phishing, DDoS), dan peran mitigasi Firewall. | **BS:** 118–137<br>**BG:** 184–193 | `INF12-C04-M16-Q01`<br>`INF12-C04-M16-Q02`<br>`INF12-C04-M16-Q03` | `INF12-C04-E-9501`<br>`INF12-C04-E-9502`<br>`INF12-C04-E-9503` | C2 (Easy)<br>C3 (Medium)<br>C4 (Hard) | **C**<br>**B**<br>**B** | - Memahami definisi dan fungsi pilar Integrity dalam kerangka CIA Triad.<br>- Menerapkan diferensiasi proses Autentikasi identitas vs Otorisasi hak akses peran guru.<br>- Menganalisis karakteristik serangan Phishing dan DDoS botnet beserta mitigasi Firewall. |

---

## 2. Distribusi Taksonomi Bloom & Tingkat Kesulitan

- **C2 (Understand / Pemahaman):** 5 butir (33,3%) — Tingkat Kesulitan: *Easy*
- **C3 (Apply / Penerapan Konseptual):** 5 butir (33,3%) — Tingkat Kesulitan: *Medium*
- **C4 (Analyze / Penalaran Analitis):** 5 butir (33,3%) — Tingkat Kesulitan: *Hard*
- **Total Soal Bab 4:** Tepat 15 butir soal objektif terkalibrasi.

---

## 3. Kepatuhan Hak Cipta & Orisinalitas (Decision 009)

1. **Rujukan Konseptual Murni:** Konsep IPv4, model OSI vs TCP/IP, topologi jaringan, pengkabelan T-568A/B, CIA Triad, tata kelola akses data, dan arsitektur firewall merujuk pada Buku Siswa hlm. 87–138 dan Panduan Guru hlm. 134–204 Kurikulum Merdeka (Kemendikbudristek 2022).
2. **Skenario Studi Kasus Orisinal:** Seluruh teks stimulus (jaringan antarpulau dinas pendidikan, sistem server rumah sakit rujukan, jaringan kampus SMK, sistem rapor digital, dan mitigasi serangan DDoS PPDB) disusun mandiri secara orisinal oleh proyek.
3. **Bebas Salin Harfiah:** Tidak ada teks latihan atau kutipan diagram berhak cipta yang disalin secara verbatim ke dalam berkas repositori.
