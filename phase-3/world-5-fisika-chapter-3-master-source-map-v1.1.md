# MASTER SOURCE MAP — FISIKA KELAS XII (BAB 3)
## Kemagnetan (Kurikulum Merdeka)

**Dokumen:** `phase-3/world-5-fisika-chapter-3-master-source-map-v1.1.md`  
**Mata Pelajaran:** Fisika (Fase F - Kelas XII)  
**Buku Rujukan Siswa:** *Fisika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Lia Laela Sarah & Irma Rahma Suwarma, Bab 3 hlm. 45–74  
**Buku Rujukan Guru:** *Buku Panduan Guru Fisika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Lia Laela Sarah & Irma Rahma Suwarma, Bab 3 hlm. 63–94  
**Dokumen Acuan Alokasi:** Laporan Final Lock Alokasi Fisika Batch 2 (Sub-Batch 2A: M09–M13)  
**Kebijakan Hak Cipta:** Decision 009 (*Clean-Room Question Generation Pipeline — Zero Verbatim Infringement, Original Real-World Contexts, Authentic Educational Scenarios*)

---

## 1. Matriks Cakupan Kurikulum Bab 3 (Misi 09–13)

| Misi | Materi / Subbab | Tujuan Pembelajaran / Indikator Esensial | Halaman BS / BG | ID P3 | ID P4 | Tingkat Kognitif & Kesulitan | Kunci | Ringkasan Kompetensi |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Misi 09** | Subbab A & D: Medan Magnet di Sekitar Arus Listrik | Menganalisis superposisi kuat medan magnet dua kawat lurus panjang sejajar berarus di titik medan nol. | **BS:** 47, 56<br>**BG:** 75–77, 89–90 | `FIS12-C03-M09-Q01` | `FIS12-C03-A-1901` | C3 (Medium) | **A** | Menghitung posisi titik medan nol akibat superposisi vektor $B_1$ dan $B_2$ kawat sejajar. |
| **Misi 09** | Subbab D.2: Kawat Melingkar Berarus | Menghitung kuat medan magnet induksi tepat di pusat kumparan kawat melingkar berarus. | **BS:** 57<br>**BG:** 75–77 | `FIS12-C03-M09-Q02` | `FIS12-C03-A-2902` | C3 (Easy) | **B** | Menerapkan rumus medan pusat kawat melingkar $B = \frac{\mu_0 N I}{2a}$. |
| **Misi 09** | Subbab D.3: Solenoida & Toroida Ideal | Menganalisis medan magnet di dalam inti toroida ideal berinti feromagnetik dan medan di luar toroida. | **BS:** 58–59<br>**BG:** 75–77 | `FIS12-C03-M09-Q03` | `FIS12-C03-A-3903` | C4 (Hard) | **A** | Menghitung $B_{\text{inti}} = \frac{\mu N I}{2\pi r}$ ($\mu = \mu_0\mu_r$) serta memahami $B=0$ di lubang tengah/luar. |
| **Misi 10** | Subbab B.1: Gaya Lorentz Partikel Titik | Menentukan besar gaya Lorentz dan arah pembelokan elektron berdasarkan kaidah tiga jari tangan kanan. | **BS:** 48–49<br>**BG:** 70–72 | `FIS12-C03-M10-Q01` | `FIS12-C03-B-11001` | C3 (Medium) | **A** | Menerapkan $\vec{F} = q(\vec{v}\times\vec{B})$ dan membalik arah gaya ($180^\circ$) untuk muatan negatif. |
| **Misi 10** | Subbab B.1: Spektrometer Massa | Menganalisis rasio jari-jari lintasan dua ion isotop bermassa berbeda dalam medan magnet homogen. | **BS:** 49–50<br>**BG:** 65, 71 | `FIS12-C03-M10-Q02` | `FIS12-C03-B-21002` | C4 (Hard) | **B** | Menurunkan $r = \frac{1}{B}\sqrt{\frac{2m\Delta V}{q}}$ dan membuktikan hubungan $r \propto \sqrt{m}$. *(Aset: `lintasan-partikel-medan-b.svg`)* |
| **Misi 10** | Subbab B.1: Pemilih Kecepatan | Menganalisis kesetimbangan gaya listrik dan gaya magnet pada partikel bermuatan dalam medan silang $\vec{E} \perp \vec{B}$. | **BS:** 51<br>**BG:** 64, 70–71 | `FIS12-C03-M10-Q03` | `FIS12-C03-B-31003` | C3 (Medium) | **A** | Menghitung kelajuan lurus $v = E/B$ dan memprediksi arah pembelokan saat $v' > v$. |
| **Misi 11** | Subbab B.2: Gaya Kawat Berarus | Menentukan arus dan arah arus pada kawat horizontal agar gaya Lorentz mengimbangi tepat berat gravitasi kawat. | **BS:** 52<br>**BG:** 72–74 | `FIS12-C03-M11-Q01` | `FIS12-C03-C-11101` | C3 (Medium) | **A** | Menerapkan kesetimbangan $F_B = mg$ dengan arah arus ditentukan kaidah tangan kanan. |
| **Misi 11** | Subbab B.2: Interaksi Dua Kawat Sejajar | Menghitung gaya interaksi per satuan panjang dan menentukan sifat tolak-menolak dua kawat berarus berlawanan. | **BS:** 52–53<br>**BG:** 72–74 | `FIS12-C03-M11-Q02` | `FIS12-C03-C-21102` | C3 (Medium) | **A** | Menerapkan $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2\pi a}$ dan menganalisis sifat tolak-menolak. *(Aset: `interaksi-dua-kawat-dan-kumparan.svg`)* |
| **Misi 11** | Subbab C: Torsi Motor Listrik | Menganalisis momen gaya (torsi) pada kumparan persegi panjang motor DC berdasarkan orientasi sudut bidang kumparan. | **BS:** 53–54<br>**BG:** 74–75 | `FIS12-C03-M11-Q03` | `FIS12-C03-C-31103` | C4 (Hard) | **A** | Menghitung torsi $\tau = NIAB\sin\theta = NIAB\cos\alpha$ terhadap sudut garis medan magnet. |
| **Misi 12** | Subbab E.1–E.2: Fluks & GGL Faraday | Menghitung GGL induksi elektromagnetik Faraday akibat perubahan kuat medan magnet terhadap waktu $B(t)$. | **BS:** 61–63<br>**BG:** 77–79, 90 | `FIS12-C03-M12-Q01` | `FIS12-C03-D-11201` | C3 (Medium) | **A** | Menerapkan Hukum Faraday $|\varepsilon| = NA\frac{dB}{dt}$ pada kumparan datar berarus. |
| **Misi 12** | Subbab E.2: Hukum Lenz | Menganalisis kutub magnet kumparan dan arah arus induksi saat kutub utara magnet batang didekatkan. | **BS:** 63–64<br>**BG:** 77–79, 91 | `FIS12-C03-M12-Q02` | `FIS12-C03-D-21202` | C3 (Medium) | **A** | Menerapkan Hukum Lenz bahwa arah arus induksi menentang perubahan fluks magnetik luar. |
| **Misi 12** | Subbab E.2: GGL Gerak Batang Kanonikal | Menghitung GGL gerak kanonikal $\varepsilon = Blv$ dan arus induksi pada batang konduktor yang meluncur di atas rel tertutup. | **BS:** 64–65<br>**BG:** 77–79, 91 | `FIS12-C03-M12-Q03` | `FIS12-C03-D-31203` | C3 (Medium) | **A** | Menghitung $\varepsilon = Blv$, $I = \frac{\varepsilon}{R}$, dan menentukan arah arus $Q \to P$. *(Aset: `ggl-kawat-luncur-u.svg`)* |
| **Misi 12** | Subbab E.2: Gaya Penghambat & Daya | Menganalisis gaya Lorentz penghambat dan membuktikan kesetaraan daya mekanik luar dengan daya disipasi listrik. | **BS:** 64–65<br>**BG:** 77–79 | `FIS12-C03-M12-Q04` | `FIS12-C03-D-41204` | C4 (Hard) | **A** | Menghitung $F_{\text{lawan}} = IlB$ dan membuktikan $P_{\text{mekanik}} = F_{\text{luar}}v = I^2 R = P_{\text{listrik}}$. |
| **Misi 13** | Subbab G.1: Induktansi Diri Solenoida | Menghitung induktansi diri solenoida berinti feromagnetik dan GGL induksi diri saat pemutusan arus. | **BS:** 67–68<br>**BG:** 79–82 | `FIS12-C03-M13-Q01` | `FIS12-C03-E-11301` | C3 (Medium) | **A** | Menerapkan $L = \frac{\mu N^2 A}{l}$ ($\mu = \mu_0\mu_r$) dan GGL diri $|\varepsilon| = L\frac{|\Delta I|}{\Delta t}$. |
| **Misi 13** | Subbab F: Generator AC vs DC Sederhana | Menganalisis perbedaan mekanis dan bentuk gelombang keluaran antara generator AC (cincin geser) dan generator DC (komutator). | **BS:** 65–67<br>**BG:** 79–80 | `FIS12-C03-M13-Q02` | `FIS12-C03-E-21302` | C4 (Hard) | **A** | Menghitung $\varepsilon_{\text{maks}} = NBA\omega$ serta membedakan AC sinusoidal vs DC berdenyut. |
| **Misi 13** | Subbab G.2: Trafo & Transmisi Daya | Menganalisis reduksi rugi daya disipasi kabel transmisi jarak jauh sebelum dan sesudah penggunaan trafo step-up. | **BS:** 67, 70<br>**BG:** 80–81, 88–89 | `FIS12-C03-M13-Q03` | `FIS12-C03-E-31303` | C4 (Hard) | **A** | Menghitung $P_{\text{dis}} = I^2 R_{\text{kabel}}$ pada tegangan $12\ \text{kV}$ ($200\ \text{kW}$) vs trafo $120\ \text{kV}$ ($2\ \text{kW}$). |

---

## 2. Pemetaan Kebutuhan Stimulus Visual SVG Modular

| No | File Path Aset SVG | Misi Terkait | Deskripsi Stimulus Visual yang Ditampilkan |
| :-: | :--- | :---: | :--- |
| 1 | `prototype/assets/fisika/ch3/lintasan-partikel-medan-b.svg` | **M10-Q02** | Diagram spektrometer massa: berkas ion positif dipercepat memasuki medan magnet tegak lurus masuk bidang ($\otimes$), membelok melingkar setengah lingkaran dengan jari-jari $r_1$ dan $r_2 = \sqrt{2}r_1$ menuju pelat detektor. |
| 2 | `prototype/assets/fisika/ch3/interaksi-dua-kawat-dan-kumparan.svg` | **M11-Q02** | Diagram dua kawat lurus panjang sejajar berarus berlawanan arah ($I_1$ ke atas, $I_2$ ke bawah) terpisah sejauh $a = 10\ \text{cm}$ dengan vektor gaya tolak-menolak $\vec{F}_{21}$ dan $\vec{F}_{12}$. |
| 3 | `prototype/assets/fisika/ch3/ggl-kawat-luncur-u.svg` | **M12-Q03 & Q04** | Diagram rel konduktor U tertutup berhambatan $R = 2\ \Omega$, batang konduktor $PQ$ meluncur ke kanan dengan laju $v = 5\ \text{m/s}$ dalam medan magnet homogen $B = 0{,}5\ \text{T}$ masuk bidang, memperlihatkan arah arus $Q \to P$ dan gaya lawan $F_{\text{lawan}}$. |

---

## 3. Kebijakan Hak Cipta & Orisinalitas (Decision 009)

1. **Bebas Salin Teks (Zero Verbatim Infringement):** Seluruh narasi stimulus, teks pertanyaan, variasi opsi jawaban, dan penjelasan ilmiah disusun secara mandiri (*clean-room authoring*).
2. **Kesesuaian Sumber Belajar Otentik:** Angka-angka, parameter fisis, dan fenomena alamiah berakar murni dari konsep kurikulum resmi Buku Siswa dan Buku Panduan Guru Fisika Kelas XII Kemendikbudristek 2022.
3. **Penyebutan Rujukan Jelas:** Setiap butir soal dilengkapi metadata `source` dan `source_basis` yang mencantumkan nomor halaman cetak dan subbab buku yang bersangkutan.

---

## 4. Catatan Pemisahan Asesmen Praktis / Non-Battle

Aktivitas unjuk kerja fisik berikut dialokasikan khusus pada modul portofolio/kinerja praktikum non-battle dan **tidak dipaksakan** menjadi soal MCQ battle:
- **Aktivitas 3.2:** Merangkai motor listrik sederhana dengan kawat tembaga, baterai, dan magnet neodymium (BS hlm. 53–54).
- **Aktivitas 3.3:** Penyelidikan fisik medan magnet di sekitar kawat dengan serbuk besi dan kompas jarum (BS hlm. 55–56).
- **Aktivitas 3.5:** Eksperimen fisik GGL induksi dengan variasi lilitan kumparan dan galvanometer (BS hlm. 61–62).
- **Proyek Bab 3:** Rancang bangun produk rekayasa elektromagnetik (generator mikrohidro, turbin angin, mobil solenoida) (BS hlm. 70; BG hlm. 82–84).

