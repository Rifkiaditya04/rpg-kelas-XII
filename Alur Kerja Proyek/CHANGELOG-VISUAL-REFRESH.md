# CATATAN PERUBAHAN TERVERIFIKASI — VISUAL REFRESH & JRPG COMBAT
## Academic Ascension RPG (Kelas XII)

**Dokumen:** `Alur Kerja Proyek/CHANGELOG-VISUAL-REFRESH.md`  
**Status:** VERIFIED AUDIT RECORD 🟢  
**Branch:** `visual-refresh`  
**Audit Baseline:** Commit `85efee06b29d10e53ef711a1964d8479e0a0f8bf`  
**Repositori:** `https://github.com/Rifkiaditya04/rpg-kelas-XII`  

---

## 1. Ringkasan Eksekutif Perubahan

Seluruh transformasi visual, pembaruan aset karakter, responsivitas antarmuka mobile, orientasi Boss, serta animasi pertarungan dinamis bergilir (*turn-based RPG battle*) yang diimplementasikan pada branch `visual-refresh` telah diaudit secara teknis dan diverifikasi langsung melalui browser engine (Chrome CDP headless).

Dokumen ini mencatat seluruh perubahan faktual berdasarkan riwayat commit, diff kode, berkas aset, dan bukti pengujian visual lokal maupun remote.

---

## 2. Kronologi Commit & Riwayat Perubahan

| Commit SHA | Tanggal | Tipe | Pesan Commit & Ruang Lingkup Utama |
| :--- | :---: | :---: | :--- |
| [`71c44c8`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/71c44c8) | 13 Okt 2026 | `feat(visual)` | Implementasi estetika siber masa depan (*Nusantara Academy Cyber Theme*) dan arena pertarungan standoff 2 sisi pada `prototype/academic-ascension-rpg-v1.html`. |
| [`2d02cf4`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/2d02cf4) | 14 Okt 2026 | `feat(assets)` | Pembuatan 4 aset karakter transparan PNG RGBA murni (Project Log 104) di `phase-3/visuals/Desain referensi fix/`. |
| [`d4ee062`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/d4ee062) | 16 Okt 2026 | `feat(prototype)` | Integrasi aset PNG transparan, aset kandidat Boss menghadap kiri, layout responsif mobile multi-tier, animasi lunge & counterattack dinamis, dan 11 screenshot QA (Project Log 105). |
| [`85efee0`](https://github.com/Rifkiaditya04/rpg-kelas-XII/commit/85efee0) | 16 Okt 2026 | `fix(prototype)` | **Tahap 2B.1:** Kalibrasi jarak serang aman (eliminasi batas keras 40px), penyelarasan kaskade media query 320×640 vs 720px, penambahan bukti screenshot briefing mentor `desktop_vn_briefing_mentor.png`, dan update galeri QA. |

---

## 3. Rincian Perubahan Terverifikasi

### A. Perombakan Visual & Tema Sci-Fi Futuristik (*Nusantara Academy*)
- **Kondisi Sebelum:** Menggunakan foto sekolah konvensional (gerbang, ruang kelas, ruang guru) dengan UI flat legacy.
- **Kondisi Sesudah:**
  - Latar belakang kampus teknologi masa depan: `tech-campus-bg.jpg` (1440×900).
  - Peta konstelasi kosmos siber: `cyber-constellation-bg.jpg` dengan garis rasi SVG interaktif.
  - Ruang pengarahan taktis 3D: `briefing-room-bg.jpg`.
  - Arena pertarungan lantai grid digital: `cyber-battle-arena.jpg`.
  - Palet warna: Neon cyan (`#38bdf8`), ungu siber (`#c084fc`), emerald (`#34d399`), amber (`#fbbf24`), dan dark obsidian slate (`#070a0e`, `#0f172a`).
  - Tipografi: *Orbitron* (display sci-fi) dan *Plus Jakarta Sans* (bacaan teks/soal).
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### B. Aset Karakter PNG Transparan Penuh (Eliminasi Kotak Hitam)
- **Kondisi Sebelum:** Aset berupa JPEG 24-bit RGB tanpa kanal alfa, menimbulkan bidang persegi panjang hitam yang memotong pemandangan latar belakang.
- **Kondisi Sesudah:**
  - Dihasilkan 4 berkas PNG 32-bit (ColorType 6, 8-bit/channel RGBA) dengan transparansi sejati di `phase-3/visuals/Desain referensi fix/`:
    1. `student-hero-combat.png` (670 × 1126 px, 824.5 KB) — Siswa Nusantara dengan seragam siber dan *stylus pen* energi digital utuh.
    2. `algebra-golem-sprite.png` (976 × 899 px, 1.70 MB) — Golem aljabar kristal tanpa platform batu retak.
    3. `text-guardian-sprite.png` (902 × 949 px, 1.92 MB) — Sphinx bersayap naskah dan tongkat pena emas tanpa dungeon/pedestal tertanam.
    4. `rifki-scifi-mentor.png` (602 × 1151 px, 806.6 KB) — Mentor Rifki berseragam siber dengan tablet proyeksi hologram transparan.
  - Uji tepi perimeter 1px: 100% piksel pada batas luar bernilai `alpha = 0`.
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### C. Aset Kandidat Boss Menghadap Alami ke Kiri (Non-Mirrored)
- **Kondisi Sebelum:** Sprite monster menghadap ke kanan atau menggunakan transformasi CSS horizontal `transform: scaleX(-1)` yang membalik simbol matematika dan teks naskah kitab suci secara canggung.
- **Kondisi Sesudah:**
  - Dihasilkan 2 aset kandidat asli berorientasi hadap kiri secara natural:
    1. `candidate-algebra-golem-facing-left.png` (1024 × 983 px, 1.22 MB, PNG RGBA) — Pose tempur 3/4 menghadap ke kiri, gada kristal dan tinju terarah ke pemain, glif matematika terbaca tegak.
    2. `candidate-text-guardian-facing-left.png` (1024 × 958 px, 1.06 MB, PNG RGBA) — Pose 3/4 menghadap ke kiri, tongkat pena bulu emas terarah ke kiri, teks naskah suci terbaca alami tanpa mirror.
  - Direferensikan pada `prototype/academic-ascension-rpg-v1.html` (L1908, L1932, L2120, L2307, L2401).
  - Aset kanonikal lama tetap dipertahankan utuh di disk tanpa tertimpa.
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### D. Panggung Arena Standoff 2 Sisi & Isolasi Pedestal Statis
- **Kondisi Sebelum:** Desain kartu tunggal terpusat (tata letak berbasis formulir).
- **Kondisi Sesudah:**
  - Panggung dua sisi: Siswa Nusantara di kiri (menghadap kanan) vs Boss Monster di kanan (menghadap kiri).
  - Karakter dibungkus ke dalam container terisolasi: `.sprite-actor-box` (`#player-actor-box` dan `#boss-actor-box`).
  - Piringan hologram lantai `.holo-pedestal` diletakkan di luar actor box sebagai elemen *sibling*.
  - Transformasi translasi CSS hanya diterapkan pada `.sprite-actor-box`. Piringan hologram pedestal **100% diam dan statis di lantai arena**.
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### E. Animasi Pertarungan Dinamis & Kalibrasi Jarak Serang Aman
- **Kondisi Sebelum:** Sprite hanya bergetar mikro di tempat (5–10px) saat menjawab.
- **Kondisi Sesudah:**
  - **Jawaban Benar (Player Lunge):**
    - Siswa meluncur maju melintasi arena menuju tepat di depan batas Boss.
    - Pada puncak lunge (280ms), memicu reaksi benturan pada Boss (`boss-hit-reaction`) dan floating damage `-50 DMG`.
    - Pemain kembali mulus ke posisi idle di atas pedestal pada 680ms.
  - **Jawaban Salah (Boss Counterattack):**
    - Siswa tidak bergerak maju. Boss meluncur maju melintasi arena menyerang ke arah Siswa.
    - Pada puncak serangan (280ms), memicu recoil Siswa (`player-hit-recoil`), getar kartu pemain (`shake`), dan penalti `-5 HP`.
    - Boss kembali mulus ke posisi idle di atas pedestal pada 680ms.
  - **Kalibrasi Jarak Serang Aman (Commit `85efee0`):**
    - Menghapus batas minimum keras `Math.max(40, ...)` yang sebelumnya berisiko memaksakan gerakan menembus tubuh lawan pada ruang sempit.
    - Menggunakan perhitungan runtime `getBoundingClientRect()`:
      `rawClearance = bRect.left - pRect.right`
      `safeGap = Math.max(10, Math.min(baseGap, (pRect.width + bRect.width) * 0.1))`
      `maxSafeDistance = rawClearance - safeGap`
    - Jika `maxSafeDistance > 4`, jarak di-clamp maksimal 45% lebar panggung (`stageWidth * 0.45`). Jika celah sempit/negatif, jarak serang bernilai `0` (tidak ada gerakan paksa).
    - Jarak serang Siswa dan Boss terbukti **100% simetris** (terukur `446px` pada desktop 1440×900).
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### F. Responsivitas Mobile & Penyelarasan Kaskade CSS Media Query
- **Kondisi Sebelum:** Header melipat secara vertikal, tombol `⚙️ Akses` dan angka koin/MP bertumpuk, badge tantangan menimpa kepala/senjata karakter pada layar kecil, dan pada 320 × 640 aturan `max-height: 720px` menimpa dimensi `max-width: 340px`.
- **Kondisi Sesudah:**
  - Breakpoints berjenjang:
    - `<= 900px`: Kompresi padding HUD dan jarak kartu status.
    - `<= 768px`: Subtitle disembunyikan, kartu status `flex: 1; min-width: 0;` (berdampingan rapi).
    - `<= 480px`: Label teks `Koin`/`MP` disembunyikan (hanya emoji + angka), tinggi panggung 170px, badge tantangan di `top: -10px`.
    - `<= 720px (Height)`: Kompresi panggung menjadi 155px untuk layar pendek (misal foldable/tablet 500×705).
    - `<= 340px (Ultra-Narrow, Commit `85efee0`)`: Ditempatkan setelah query height dan diperkuat dengan `@media (max-width: 340px), (max-width: 340px) and (max-height: 720px)`.
  - Hasil computed style terbukti:
    - Viewport 320 × 640: Panggung = 125px, Pemain = 110px, Boss = 120px, Pedestal = 85px (nilai ultra-narrow tidak lagi tertimpa).
    - Viewport 360 × 800: Panggung = 170px, Pemain = 135px, Boss = 145px, Pedestal = 105px.
    - Viewport 500 × 705: Panggung = 153.8px, Pemain = 125px, Boss = 135px, Pedestal = 100px.
    - Viewport 1440 × 900: Panggung = 300px, Pemain = 250px, Boss = 270px, Pedestal = 180px.
- **Status:** **Telah Diuji di Browser (Verified Pass 🟢)**.

### G. Bukti Visual QA & Galeri Terpadu
- Seluruh 12 berkas bukti tangkapan layar tersimpan di `prototype/qa-screenshots/` dan tersedia di GitHub:
  1. `desktop_1440x900_arena.png` (Arena pertempuran 1440×900 netral)
  2. `desktop_player_lunge_correct.png` (Terjangan lunge Siswa saat jawaban benar, pedestal statis)
  3. `desktop_boss_counterattack_wrong.png` (Serangan balik Boss saat jawaban salah, penalti -5 HP)
  4. `desktop_text_guardian_arena.png` (The Text Guardian menghadap kiri unmirrored)
  5. `desktop_958x944_arena.png` (Tampilan windowed desktop)
  6. `desktop_vn_briefing_mentor.png` (Layar briefing Mentor Rifki transparan tanpa kotak hitam)
  7. `mobile_500x705_arena.png` (Layar pendek / foldable)
  8. `mobile_430x932_arena.png` (iPhone Pro Max / flagship)
  9. `mobile_390x844_arena.png` (iPhone standar)
  10. `mobile_390x844_text_guardian.png` (The Text Guardian mobile)
  11. `mobile_360x800_arena.png` (Android standar)
  12. `mobile_320x640_arena.png` (Ultra-narrow compact tanpa badge overlap)
- Viewer interaktif mandiri: `prototype/qa-screenshots/index.html` dengan kartu perbandingan dan modal lightbox zoom.
- **Status:** **Tersimpan di Git & Remote GitHub (Verified Pass 🟢)**.

---

## 4. Matriks Status Validasi Perubahan

| Komponen Perubahan | Status Implementasi | Status Uji Statis | Status Uji Browser | Validasi Pengguna |
| :--- | :---: | :---: | :---: | :---: |
| Estetika Siber Nusantara Academy | Telah Diterapkan | PASS | PASS (CDP Headless) | Siap Direviu |
| 4 Aset Karakter Transparan PNG | Telah Diterapkan | PASS (Alpha Audit) | PASS (CDP Headless) | Siap Direviu |
| 2 Aset Boss Menghadap Kiri (Non-Mirrored) | Telah Diterapkan | PASS (Dimension & Bit) | PASS (CDP Headless) | Siap Direviu |
| Standoff 2 Sisi & Isolasi Pedestal | Telah Diterapkan | PASS | PASS (CDP Headless) | Siap Direviu |
| Animasi Menerjang & Serangan Balik | Telah Diterapkan | PASS | PASS (CDP Headless) | Siap Direviu |
| Perhitungan Jarak Serang Aman | Telah Diterapkan | PASS | PASS (CDP Headless) | Siap Direviu |
| Kaskade Media Query (Termasuk 320×640) | Telah Diterapkan | PASS | PASS (Computed Style) | Siap Direviu |
| Bukti Screenshot QA (12 Berkas + Index) | Telah Diterapkan | PASS | PASS (HTML Viewer) | Siap Direviu |
| Dokumentasi Master Control v1.1 & Log 105 | Telah Diterapkan | PASS | PASS | Siap Direviu |
