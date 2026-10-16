# PROJECT LOG 105: Integrasi Aset Transparan, Optimasi Mobile Responsif, Orientasi Boss, dan Animasi Dinamis Pertarungan — PASS 🟢

**Tanggal:** 16 Oktober 2026  
**Status:** VERIFIED PASS 🟢 (Implementation & Visual QA Gate)  
**Milestone:** Tahap 2 & 2B — Integrasi Visual, Mobile Responsiveness, Orientasi Boss, dan Animasi Lunge/Counterattack  
**Dokumen Acuan:**  
- `Alur Kerja Proyek/REQUIRED-WORK-SESSION-PROTOCOL.md`  
- `Alur Kerja Proyek/PROJECT-OPERATING-RULES-AI-TECH-VISUAL.md`  
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md`  
- `Alur Kerja Proyek/PROJECT LOG/104-Character-Assets-Alpha-Transparency-Overhaul.md`  

---

## 1. Latar Belakang & Ruang Lingkup Pekerjaan

Menindaklanjuti penyelesaian pembuatan 4 aset karakter transparan PNG RGBA pada Project Log 104, pekerjaan Tahap 2 dan Tahap 2B difokuskan pada pengintegrasian aset ke prototipe utama (`prototype/academic-ascension-rpg-v1.html`) serta penyelesaian 3 defect visual/gameplay utama:
1. **Integrasi Transparan Penuh:** Menggantikan referensi aset legacy JPG dengan aset PNG berkanal alfa sejati (`student-hero-combat.png`, `rifki-scifi-mentor.png`).
2. **Optimasi Mobile Responsif & Header Overflow:** Mengatasi layout mobile yang padat, teks header/tombol yang terpotong/melipat secara anjlok (`⚙️ Akses`, nomor soal, dan badge tantangan menimpa sprite).
3. **Orientasi Alami Boss (Non-Mirrored):** Menghadirkan Boss yang benar-benar menghadap ke kiri (menuju pemain) tanpa melakukan mirror horizontal CSS (`scaleX(-1)`) yang merusak orientasi simbol matematika dan teks naskah kitab suci.
4. **Animasi Serangan Dinamis JRPG:** Menggantikan getaran mikro (5-10px) dengan gerakan menerjang dinamis (*dynamic lunge attack*) melintasi arena saat jawaban benar, dan serangan balik Boss (*counterattack*) saat jawaban salah, sambil mempertahankan piringan hologram pedestal tetap statis di lantai arena.

---

## 2. Rincian Implementasi Teknis

### A. Layout Responsif Mobile & Header Protection
- Menambahkan breakpoints CSS `@media` (900px, 768px, 480px, 340px, dan height 720px).
- Menerapkan `.stat-label` dan `.btn-label-long` dengan `white-space: nowrap;` pada `.stat-pill` dan `.btn-hud` sehingga teks kontrol tidak melipat canggung.
- Mengubah `.combatant-card` menjadi `flex: 1; min-width: 0;` sehingga status Pemain dan Boss tetap berdampingan rapi pada layar 360px dan 320px.
- Memposisikan badge tantangan `.arena-challenge-indicator` satu baris pada `top: -6px` / `top: -10px`, mengeliminasi overlap dengan kepala/senjata Siswa Nusantara.

### B. Aset Kandidat Boss Menghadap Kiri
Dibuat 2 kandidat aset Boss berkualitas tinggi menghadap ke KIRI:
- `candidate-algebra-golem-facing-left.png`: 1024 × 983 px, PNG RGBA 32-bit, glif matematika terbaca alami.
- `candidate-text-guardian-facing-left.png`: 1024 × 958 px, PNG RGBA 32-bit, naskah sastra terbaca alami.
- Referensi dihubungkan ke `#battle-boss-image`, `VERIFIED_POOLS.MAT_WAJIB.bossSprite`, `VERIFIED_POOLS.BI_WAJIB.bossSprite`, dan thumbnail peta konstelasi. Aset kanonikal tetap dipreservasi di disk.

### C. Isolasi Pedestal Statis & Animasi Dinamis Lunge/Counterattack
- Membungkus sprite karakter ke dalam container terisolasi: `.sprite-actor-box` (`#player-actor-box` dan `#boss-actor-box`).
- Elemen piringan hologram `.holo-pedestal` (`.player-pedestal` dan `.boss-pedestal`) diletakkan di luar actor box sebagai sibling mandiri yang tidak terkena transformasi translasi CSS, menjamin pedestal tetap 100% statis di lantai arena.
- Jarak serang dihitung secara dinamis saat runtime melalui `getBoundingClientRect()` dengan jarak aman `gap = 32px` (desktop) dan `16px` (mobile <= 480px) untuk mencegah tumpang-tindih badan.
- **Jawaban Benar:** Pemain meluncur maju ke hadapan Boss; pada puncak lunge (280ms) memicu hit flash dan `-50 DMG`; pemain kembali mulus ke idle pada 680ms.
- **Jawaban Salah:** Boss meluncur maju menyerang balik ke arah pemain; memicu hit recoil, kartu pemain getar (`shake`), penalti persis `-5 HP`, dan toast anti-anxiety.

---

## 3. Bukti Verifikasi QA & Hasil Uji

Pemeriksaan otomatis dijalankan menggunakan harness headless Chrome CDP pada berbagai resolusi dan skenario:
1. `desktop_1440x900_arena.png` (Desktop arena netral)
2. `desktop_player_lunge_correct.png` (Pemain menerjang tepat di depan Boss, pedestal statis)
3. `desktop_boss_counterattack_wrong.png` (Boss menyerang balik, penalti -5 HP terpicu)
4. `desktop_text_guardian_arena.png` (The Text Guardian menghadap kiri)
5. `desktop_958x944_arena.png` (Desktop windowed view)
6. `desktop_vn_briefing_mentor.png` (Briefing mentor Rifki transparan tanpa kotak hitam)
7. `mobile_500x705_arena.png` (Tablet / phablet view)
8. `mobile_430x932_arena.png` (iPhone Pro Max view)
9. `mobile_390x844_arena.png` (iPhone standar view)
10. `mobile_390x844_text_guardian.png` (The Text Guardian mobile view)
11. `mobile_360x800_arena.png` (Android standar bersih tanpa overflow)
12. `mobile_320x640_arena.png` (Mobile ultra-compact tanpa badge overlap)

Seluruh berkas tangkapan layar disimpan di `prototype/qa-screenshots/` dan dilengkapi viewer interaktif di `prototype/qa-screenshots/index.html`.

---

## 4. Integritas Mekanik Game

- **Logika Soal & Bank Soal:** 100% utuh tanpa mutasi pada `VERIFIED_POOLS.MAT_WAJIB` dan `VERIFIED_POOLS.BI_WAJIB`.
- **Durasi Giliran:** Tetap 1600ms (`resolveTurn`), menyatu selaras dengan durasi animasi 680ms.
- **Filosofi Formatif:** Prinsip anti-kecemasan (*Anti-Anxiety Contract*) tetap ditegakkan: penalti jawaban salah persis 5 HP dengan pesan toast kunci jawaban yang transparan.
