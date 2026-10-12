# PROJECT LOG 101: UI Vertical Slice Scope Determination & GDD Activation

**Date:** 2026-10-11
**Status:** APPROVED BY USER
**Milestone:** Tahap 9 — UI / UX Overhaul & Vertical Slice Prototype (RPG Novel Edition)

---

## 1. Latar Belakang & Aktivasi GDD
Setelah fondasi data (Tahap 6-7: 169 Soal lolos Pool Readiness Gate) dan kalkulator logika (Tahap 8: Game Engine Architecture Unit & Integration Tests PASS) selesai dibangun dan diverifikasi, proyek secara resmi beralih ke **Jalur 2: Desain UI (Vertical Slice Prototype)** atas persetujuan User.

Sesuai instruksi User dan aturan di `Alur Kerja Proyek/01-GDD-ACADEMIC-ASCENSION-RPG.md` (Seksi 6), dokumen GDD tersebut kini **RESMI DIAKTIFKAN** sebagai cetak biru (*blueprint*) mutlak antarmuka game.

---

## 2. Ruang Lingkup Pengerjaan (Vertical Slice Scope)
Prototipe ini akan mengintegrasikan engine yang sudah ada (`engine/`) dengan antarmuka web modern yang mencakup 4 pilar visual:

### A. Layar 1: Peta Bintang Kurikulum (The Academic Constellation Map)
* Antarmuka visual pemilihan materi berbentuk rasi bintang (Skill Tree / Node Map) dengan estetika gelap bercahaya (*cyber-neon glassmorphism*).
* **4 Lapisan Progresi:**
  1. **Layer 1 (Core Foundation):** Gugus bintang tengah aktif (Matematika Wajib, Bahasa Indonesia Wajib, Bahasa Inggris Wajib).
  2. **Layer 2 (Academic Profile):** Penentuan target prodi & analisis minat/kekuatan rapor (pengganti rumpun kaku).
  3. **Layer 3 (Specialization):** Gugus bintang cabang (Peminatan / Tingkat Lanjut) yang terkunci di awal dan terbuka setelah Layer 1 tuntas.
  4. **Layer 4 (TKA Arena):** Gugus bintang puncak terkunci gembok (*Endgame Raid Boss*).
* Penyembunyian label K13 vs Kurmer di tampilan murid (murni data backend).

### B. Layar 2: Visual Novel Naratif (Pre-Mission Briefing)
* Antarmuka dialog karakter bergaya Visual Novel modern.
* Dialog interaktif dengan karakter NPC (Safira, Rifki, Guru Mentor) untuk pembekalan konsep materi sebelum menghadapi tantangan.

### C. Layar 3: JRPG Battle Interface (Menjawab Soal sebagai Pertempuran)
* Antarmuka turn-based battle bergaya JRPG modern.
* Siswa menghadapi perwujudan materi (Monster/Boss, misal: *Algebra Golem* atau *Debt Collector*).
* **Bar Status:** HP (Nyawa) & MP (Energi) untuk Pemain dan Musuh.
* **Kotak Perintah (100% Bahasa Indonesia):**
  - **JAWAB / SERANG:** Pilihan ganda A, B, C, D yang diumpan dari `engine/questionSelector.js` dan dihitung oleh `engine/battleEngine.js`.
  - **KEMAMPUAN:** Skill pendukung dari mentor.
  - **BARANG / TAS:** Inventori item (didukung backdoor secret code untuk akses bebas keluarga).
  - **ANALISIS / BUKA CATATAN:** Membuka ringkasan materi/rumus (memakan MP, soal tetap wajib dijawab).
* **Indikator Tantangan:** 🟢 Pemanasan (Easy), 🟡 Tantangan (Medium), 🔴 Penalaran (Hard) dengan visual charging efek.
* Efek visual web: *Screen shake*, *floating damage text*, *combo counter*.

### D. Layar 4: Hasil & Diagnosa Penguasaan (Mastery Diagnostics)
* Evaluasi transparan memisahkan akurasi Easy, Medium, dan Hard sesuai kalkulasi `engine/masteryCalculator.js`.
* Update otomatis terhadap status level, XP, gold, dan mastery di penyimpanan progres pemain.

---

## 3. Disiplin & Kepatuhan
1. **Tidak Ada Dependensi Server:** Seluruh antarmuka tetap berjalan menggunakan teknologi web murni (HTML5 + Vanilla CSS + Vanilla JS) agar langsung kompatibel untuk pengemasan APK Android via Capacitor di kemudian hari.
2. **Koneksi Engine Asli:** UI wajib terhubung langsung ke modul logika `engine/` yang telah lulus uji Tahap 8 tanpa melakukan *hardcoding* soal di dalam file HTML/CSS.
3. **Kriteria Kelulusan:** Tahap ini baru dianggap **HIJAU / PASS** setelah prototipe dapat dimainkan secara live di browser dengan alur: *Peta Bintang $\rightarrow$ Briefing VN $\rightarrow$ Battle Soal $\rightarrow$ Result Diagnostics* berjalan mulus tanpa error.
