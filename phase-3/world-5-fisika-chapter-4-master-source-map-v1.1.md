# MASTER SOURCE MAP — FISIKA KELAS XII (BAB 4)
## Arus Bolak-Balik (Kurikulum Merdeka)

**Dokumen:** `phase-3/world-5-fisika-chapter-4-master-source-map-v1.1.md`  
**Mata Pelajaran:** Fisika (Fase F - Kelas XII)  
**Buku Rujukan Siswa:** *Fisika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Lia Laela Sarah & Irma Rahma Suwarma, Bab 4 hlm. 77–94  
**Buku Rujukan Guru:** *Buku Panduan Guru Fisika untuk SMA/MA Kelas XII* (Pusat Perbukuan Kemendikbudristek 2022), Penulis: Lia Laela Sarah & Irma Rahma Suwarma, Bab 4 hlm. 95–114  
**Dokumen Acuan Alokasi:** Laporan Final Lock Alokasi Fisika Batch 2 (Sub-Batch 2B: M14–M16)  
**Kebijakan Hak Cipta:** Decision 009 (*Clean-Room Question Generation Pipeline — Zero Verbatim Infringement, Original Real-World Contexts, Authentic Educational Scenarios*)

---

## 1. Matriks Cakupan Kurikulum Bab 4 (Misi 14–16)

| Misi | Materi / Subbab | Tujuan Pembelajaran / Indikator Esensial | Halaman BS / BG | ID P3 | ID P4 | Tingkat Kognitif & Kesulitan | Kunci | Ringkasan Kompetensi |
| :-: | :--- | :--- | :--- | :--- | :--- | :---: | :---: | :--- |
| **Misi 14** | Subbab A: Persamaan Arus Bolak-Balik | Menganalisis besaran sinyal AC sinusoidal, menghitung nilai efektif terukur voltmeter AC, frekuensi, dan tegangan sesaat. | **BS:** 77–81<br>**BG:** 97, 100–102 | `FIS12-C04-M14-Q01` | `FIS12-C04-A-11401` | C3 (Medium) | **A** | Menerapkan $V_{\text{ef}} = V_{\text{maks}}/\sqrt{2}$, $\omega = 2\pi f$, dan evaluasi $V(t)$ pada $t$ tertentu. |
| **Misi 14** | Subbab A: Interpretasi Layar Osiloskop | Menganalisis tampilan gelombang sinusoidal pada kisi layar osiloskop (Volt/div dan Time/div) untuk mengekstrak $V_{pp}$, $V_{\text{ef}}$, dan frekuensi. | **BS:** 78–81<br>**BG:** 97, 100–102 | `FIS12-C04-M14-Q02` | `FIS12-C04-A-21402` | C4 (Hard) | **A** | Mengekstrak simpangan vertikal ($4\ \text{div} \times 5\ \text{V/div} = 20\ \text{V}$) dan periode horizontal ($5\ \text{div} \times 2\ \text{ms/div} = 10\ \text{ms}$). *(Aset: `sinyal-osiloskop-ac.svg`)* |
| **Misi 14** | Subbab A: Konsep Fisis Nilai Efektif (RMS) | Menganalisis kesetaraan disipasi termal pemanas resistor antara sumber AC sinusoidal dan sumber DC murni. | **BS:** 80–81<br>**BG:** 101–102 | `FIS12-C04-M14-Q03` | `FIS12-C04-A-31403` | C3 (Medium) | **A** | Memahami bahwa tegangan DC ekuivalen adalah $V_{\text{DC}} = V_{\text{ef}}$, $V_{\text{maks}} = V_{\text{ef}}\sqrt{2}$, dan daya $P = V_{\text{ef}}^2/R$. |
| **Misi 15** | Subbab B: Reaktansi R, L, C & Respons Frekuensi | Menganalisis perubahan reaktansi induktif ($X_L$) dan reaktansi kapasitif ($X_C$) serta arus efektifnya saat frekuensi sudut sumber dinaikkan dua kali lipat. | **BS:** 81–84<br>**BG:** 97, 102–104 | `FIS12-C04-M15-Q01` | `FIS12-C04-B-11501` | C3 (Medium) | **A** | Menerapkan $X_L \propto \omega$ (naik 2x, arus turun $1/2$) dan $X_C \propto 1/\omega$ (turun $1/2$, arus naik 2x). |
| **Misi 15** | Subbab B: Rangkaian Seri RLC & Penjumlahan Fasor | Menghitung impedansi total $Z$, tegangan masing-masing komponen, dan membuktikan tegangan sumber melalui penjumlahan fasor kuadratis. | **BS:** 84–86<br>**BG:** 98, 104–105 | `FIS12-C04-M15-Q02` | `FIS12-C04-B-21502` | C3 (Medium) | **A** | Menghitung $Z = \sqrt{R^2 + (X_L - X_C)^2} = 100\ \Omega$ dan $V_{\text{total}} = \sqrt{V_R^2 + (V_L - V_C)^2} = 200\ \text{V}$ (bukan penjumlahan aljabar). *(Aset: `rangkaian-seri-rlc.svg`)* |
| **Misi 15** | Subbab B: Diagram Fasor & Sifat Kapasitif | Menganalisis diagram fasor tegangan, menentukan pergeseran sudut fase $\phi$, sifat kapasitif ($X_C > X_L$), dan menyusun persamaan tegangan sumber sesaat $V(t)$. | **BS:** 84–86<br>**BG:** 104–105 | `FIS12-C04-M15-Q03` | `FIS12-C04-B-31503` | C4 (Hard) | **A** | Menghitung $\tan\phi = (V_L - V_C)/V_R = -4/3$ ($\phi = -53^\circ$, kapasitif) dan merumuskan $V(t) = 50\sqrt{2}\sin(\omega t - 53^\circ)\ \text{V}$. *(Aset: `diagram-fasor-rlc.svg`)* |
| **Misi 15** | Subbab B: Eksperimen Inti Besi Rangkaian RL | Menganalisis dampak fisis penambahan inti besi feromagnetik pada kumparan terhadap peningkatan reaktansi induktif, impedansi, dan reduksi arus. | **BS:** 86–87<br>**BG:** 99, 105–106 | `FIS12-C04-M15-Q04` | `FIS12-C04-B-41504` | C3 (Medium) | **A** | Menghitung lonjakan impedansi dari $50\ \Omega$ ke $104{,}4\ \Omega$, penurunan arus, dan peredupan intensitas nyala lampu indikator. |
| **Misi 16** | Subbab C: Daya Nyata, Daya Semu, & Faktor Daya | Menghitung faktor daya ($\cos\phi$), daya semu ($S$), dan daya aktif rata-rata ($P$) pada rangkaian AC beban induktif bengkel industri. | **BS:** 85, 87<br>**BG:** 98, 104–105 | `FIS12-C04-M16-Q01` | `FIS12-C04-C-11601` | C3 (Medium) | **A** | Menerapkan $\cos\phi = R/Z = 0{,}8$, daya semu $S = V_{\text{ef}}I_{\text{ef}} = 800\ \text{VA}$, dan daya nyata $P = S\cos\phi = 640\ \text{W}$. |
| **Misi 16** | Subbab C: Karakteristik Resonansi Seri RLC | Menganalisis frekuensi sudut resonansi ($\omega_0$), arus maksimum rangkaian, serta tegangan induktor dan kapasitor yang saling meniadakan secara fasor. | **BS:** 88–90<br>**BG:** 99, 107–109 | `FIS12-C04-M16-Q02` | `FIS12-C04-C-21602` | C4 (Hard) | **A** | Menghitung $\omega_0 = 1/\sqrt{LC} = 1.000\ \text{rad/s}$, $I = 0{,}5\ \text{A}$, dan membuktikan $V_L = V_C = 25\ \text{V}$ (tegangan tidak nol melainkan saling menghilangkan). |
| **Misi 16** | Subbab C: Aplikasi Resonansi Penala Radio FM | Menganalisis hubungan frekuensi resonansi $f_0 \propto 1/\sqrt{C}$ pada tuner radio variabel untuk memindahkan penerimaan ke frekuensi dua kali lipat. | **BS:** 88–90<br>**BG:** 99, 107 | `FIS12-C04-M16-Q03` | `FIS12-C04-C-31603` | C3 (Medium) | **A** | Menerapkan $C_2/C_1 = (f_1/f_2)^2 = (1/2)^2 = 1/4$ sehingga kapasitansi variabel harus diperkecil menjadi $2{,}5\ \text{pF}$. |

---

## 2. Pemetaan Kebutuhan Stimulus Visual SVG Modular

| No | File Path Aset SVG | Misi Terkait | Deskripsi Stimulus Visual yang Ditampilkan |
| :-: | :--- | :---: | :--- |
| 1 | `prototype/assets/fisika/ch4/sinyal-osiloskop-ac.svg` | **M14-Q02** | Tampilan kisi osiloskop (10 div horizontal $\times$ 8 div vertikal) menampilkan gelombang sinusoidal dengan simpangan puncak-ke-puncak 4 div ($V_{pp} = 20\ \text{V}$ pada $5\ \text{V/div}$) dan 1 periode 5 div ($T = 10\ \text{ms}$ pada $2\ \text{ms/div}$). |
| 2 | `prototype/assets/fisika/ch4/rangkaian-seri-rlc.svg` | **M15-Q02** | Diagram skematik rangkaian seri RLC dihubungkan ke sumber generator AC dengan resistor $R = 60\ \Omega$, induktor $X_L = 100\ \Omega$, kapasitor $X_C = 20\ \Omega$, dan arus $I_{\text{ef}} = 2\ \text{A}$. |
| 3 | `prototype/assets/fisika/ch4/diagram-fasor-rlc.svg` | **M15-Q03** | Diagram fasor tegangan pada sumbu kartesius menunjukkan fasor horizontal $V_R = 30\ \text{V}$, fasor reaktif netto $(V_L - V_C) = -40\ \text{V}$ ke arah $-y$, fasor resultan $V_{\text{total}} = 50\ \text{V}$ di kuadran IV dengan sudut $\phi = -53^\circ$ (sifat kapasitif). |

---

## 3. Kebijakan Hak Cipta & Orisinalitas (Decision 009)

1. **Bebas Salin Teks (Zero Verbatim Infringement):** Seluruh narasi stimulus, teks pertanyaan, variasi opsi jawaban, dan penjelasan ilmiah disusun secara mandiri (*clean-room authoring*).
2. **Kesesuaian Sumber Belajar Otentik:** Angka-angka, parameter fisis, dan fenomena alamiah berakar murni dari konsep kurikulum resmi Buku Siswa dan Buku Panduan Guru Fisika Kelas XII Kemendikbudristek 2022.
3. **Penyebutan Rujukan Jelas:** Setiap butir soal dilengkapi metadata `source` dan `source_basis` yang mencantumkan nomor halaman cetak dan subbab buku yang bersangkutan.

---

## 4. Catatan Pemisahan Asesmen Praktis / Non-Battle

Aktivitas unjuk kerja fisik berikut dialokasikan khusus pada modul portofolio/kinerja praktikum non-battle dan **tidak dipaksakan** menjadi soal MCQ battle:
- **Aktivitas 4.1:** Penyelidikan fisik grafik tegangan AC dan pengoperasian osiloskop CRO / mini DSO di laboratorium (BS hlm. 78–81; BG hlm. 97, 100–102).
- **Aktivitas 4.2:** Merangkai resistor, induktor, dan kapasitor serta menyelidiki pergeseran fase menggunakan osiloskop (BS hlm. 82–84; BG hlm. 97, 102–104).
- **Aktivitas 4.3:** Praktikum pengukuran tegangan dan arus rangkaian seri RLC menggunakan multimeter dan catu daya (BS hlm. 84–86; BG hlm. 98, 104–105).
- **Aktivitas 4.4:** Eksperimen pengaruh penambahan batang inti besi ke dalam kumparan terhadap kenaikan reaktansi induktif (BS hlm. 86–87; BG hlm. 99, 105–106).
- **Aktivitas 4.5:** Penyelidikan penentuan frekuensi resonansi rangkaian RLC secara virtual atau fisik di laboratorium (BS hlm. 88–89; BG hlm. 99, 107).
- **Proyek Bab 4:** Rancang bangun prototipe pemanfaatan rangkaian resonansi (seperti prototipe detektor logam atau penala radio) (BG hlm. 99).

