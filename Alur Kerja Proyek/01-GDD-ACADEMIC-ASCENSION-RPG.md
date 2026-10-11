# GAME DESIGN DOCUMENT (GDD): ACADEMIC ASCENSION - RPG NOVEL EDITION

**Status:** APPROVED FOR FUTURE IMPLEMENTATION (DRAFTED: 2026-10-07)
**Tujuan Dokumen:** Menjadi acuan mutlak untuk perombakan visual dan mekanik gameplay (*Visual & Engine Overhaul*) setelah seluruh perakitan Bank Soal (JSON) untuk semua mata pelajaran selesai dilakukan.

---

### A. Latar Cerita (Lore)
Tahun 2026, di **Nusantara Academy**. Dunia pendidikan terancam oleh **"The Fog of Ignorance"** (Kabut Ketidaktahuan). Pemain bertugas mengumpulkan **"Knowledge Crystals"** dengan menyelesaikan ujian untuk mengusir kabut dan membuka gerbang Universitas impian.

### B. Konsep Utama (Perpaduan Ide 1 & Ide 3)
Mengubah aplikasi bank soal konvensional menjadi **Visual Novel RPG** yang kaya akan narasi, memadukan 3 elemen utama kurikulum:
1. **K13 (Classic Archive) & Kurikulum Merdeka (Modern Module):** Digabung sebagai "Main Quest" / *Foundation*.
2. **Mata Pelajaran Pilihan / Tingkat Lanjut:** Sebagai "Side Quest Elite" / *Specialization* (DLC).
3. **Ujian UTBK / TKA:** Sebagai "Raid Boss" / *Final Endgame Gate*.

Tidak ada eksplorasi peta *top-down* (jalan-jalan manual). Gameplay difokuskan pada dialog interaktif (Visual Novel) dan fase menjawab soal yang dibalut sebagai pertempuran bergilir (*Turn-Based RPG Battle*).

### C. Sistem Karakter & Profil Akademik (Layer 2)
Daripada membatasi pemain dengan *Class/Rumpun* (Saintek/Soshum/Bahasa) yang kaku, game ini menggunakan **Academic Profile (Profil Akademik)** yang sesuai dengan aturan pendidikan nyata:
- Pemain menentukan *Target Program Studi*.
- Sistem menganalisis *Mata Pelajaran di Rapor* dan *Minat/Kekuatan* pemain.
- Berdasarkan profil ini, pemain bebas merekonstruksi spesialisasi lintas rumpun (misal: Fisika + Ekonomi) selama tersedia di rapor dan relevan dengan target.

---

## 2. STRUKTUR PROGRESI & NODE MAP (ALUR KURIKULUM)

Sistem progresi menggunakan 4 Lapisan (Layers) yang dipresentasikan melalui **Peta Bintang (Constellation Map)**:

- **LAYER 1: Core Foundation (Fondasi Wajib)**
  Berisi kemampuan esensial (B. Indonesia, Matematika, B. Inggris, Literasi, Numerasi, Penalaran). Ini adalah *Base Game* yang bisa diakses semua pemain untuk membangun fondasi, bukan sekadar menyelesaikan bab.
  
- **LAYER 2: Academic Profile (Kenali Target)**
  Pemain menentukan profilnya (Target Prodi, Rapor). Tidak ada pemaksaan mengambil "Tingkat Lanjut" jika tidak relevan dengan profil.

- **LAYER 3: Specialization (Pilih 2 Mapel Pilihan)**
  Sistem menampilkan mapel yang tersedia untuk TKA dan relevan dengan rapor. Pemain memilih **Tepat 2 Mata Pelajaran Pilihan** (misal: Matematika Tingkat Lanjut & Fisika). Status pembukaan level tidak kaku (menggunakan status: *Direkomendasikan, Dapat Dipilih, Perlu Penguatan Dasar*).

- **LAYER 4: TKA Arena (The Endgame)**
  TKA bukan UTBK/SNBT. TKA menguji 3 mapel wajib + 2 mapel pilihan. Terbagi dua mode:
  - **TKA Preview:** Terbuka awal (contoh: 5 soal kontekstual setelah selesai bab Aljabar).
  - **TKA Simulation:** Terbuka di akhir setelah Layer 1 dan Layer 3 selesai.

### A. Validasi Kurikulum & Struktur Database (Backend)
Data bank soal tidak dipisahkan secara kaku antara K13 dan Merdeka di layar depan. Label kurikulum disembunyikan sebagai metadata di dalam JSON (Backend).
Sistem secara tegas membedakan **Tingkat Kesulitan (Difficulty)** dengan **Level Kognitif (Cognitive Level)** serta memisahkan **Tingkat Lanjut (Track/Mata Pelajaran)** dari **Sulit (Difficulty)**.

Setiap soal wajib mengikuti standar skema berikut:
```json
{
  "id": "MAT-FUNGSI-015",
  "subject": "Matematika",
  "track": "wajib", 
  "curriculum_source": ["K13", "Kurikulum Merdeka"],
  "topic": "Fungsi",
  "difficulty": "hard", 
  "cognitive_level": "analyze",
  "question_type": "contextual",
  "estimated_time_seconds": 120
}
```
*Catatan: `difficulty` menggunakan `easy/medium/hard` (menggambarkan persentase kemampuan populasi menjawab benar), sedangkan `cognitive_level` menggunakan `understand/apply/analyze` (menggambarkan proses berpikir Bloom).*

Di antarmuka pemain (Frontend), soal hanya ditampilkan berdasarkan nama mapel dan materi. Label kurikulum dipakai untuk filter rahasia.

### B. Pemisahan TKA dan SNBT/UTBK
- **Mode TKA:** Berfokus murni pada capaian akademik (3 mapel wajib + 2 pilihan).
- **Mode UTBK/SNBT:** Mode simulasi tes seleksi masuk PTN yang terpisah. Keduanya tidak boleh disamakan karena memiliki tujuan seleksi yang berbeda.

---

## 3. MEKANIK "BATTLE" (FASE MENJAWAB SOAL)

Mengubah UI HTML/JS `world-1-rpg-v2.html` saat ini menjadi antarmuka ala JRPG modern.
Semua teks, antarmuka, dan sistem dilokalisasi 100% menggunakan **Bahasa Indonesia**.

### A. Antarmuka Pemain (UI) & Visual Tensi
- **Bar Status:** HP (Nyawa) dan MP (Energi) untuk Pemain dan Monster.
- **Wujud Monster:** Materi direpresentasikan sebagai monster.
- **Indikator Tantangan (Bukan Label Siswa):** Soal diberi ikon dan teks netral untuk menunjukkan status tantangan:
  - 🟢 **Pemanasan** (Soal Easy)
  - 🟡 **Tantangan** (Soal Medium)
  - 🔴 **Penalaran** (Soal Hard) - *Monster menunjukkan animasi mengumpulkan energi/layar bergetar.*

### B. Opsi Tindakan & Mekanik Reward (Anti-Anxiety)
Di sebelah kiri layar soal, terdapat menu aksi:
1. **JAWAB (FIGHT):** Membuka soal. Mekanik *Damage* & *Reward* diatur agar mendidik, bukan menghukum:
   - **Soal Easy:** Damage standar, Reward standar, Feedback konsep dasar. Jika salah: -5 HP.
   - **Soal Medium:** Damage lebih besar, Reward lebih besar. Jika salah: -5 HP.
   - **Soal Hard:** Damage sangat besar ke monster (Critical), Bonus XP tinggi (jika First Clear). **Jika salah: Tetap -5 HP (tidak ada hukuman ekstrem agar siswa tidak takut mencoba tantangan)**.
2. **KEMAMPUAN (SKILLS):** Pasif/Aktif skill yang didapat dari NPC Mentor.
3. **BARANG (ITEMS):** Membuka inventori.
4. **ANALISIS / BUKA CATATAN (DEFEND):** Membaca kembali pembekalan rumus dengan mengorbankan MP, pemain wajib menjawab setelahnya.

### C. Profil Penguasaan Pemain (Result Screen Diagnostics)
Di akhir misi, sistem tidak sekadar melabeli pemain "Lulus" atau "Gagal". Sistem memisahkan **Item Difficulty** dari **Player Mastery**.
Evaluasi didasarkan pada metrik presisi:
- Jika akurasi *easy* < 70%: **"Fondasi belum stabil"** (Saran: Remedial konsep).
- Jika *easy* ≥ 80% & *medium* < 60%: **"Aplikasi konsep perlu latihan"**.
- Jika *easy* ≥ 80%, *medium* ≥ 70%, *hard* < 50%: **"Penalaran analitis perlu penguatan"**.
- Jika akurasi baik namun *time elapsed* tinggi: **"Kecepatan pengerjaan perlu ditingkatkan"**.

---

## 4. SISTEM VISUAL NOVEL & NPC RELATIONSHIP

Fase *Briefing* (Pembekalan) sebelum misi diubah menjadi adegan Visual Novel yang indah (*glassmorphism UI*).
- **NPC Mentor:** Karakter (Rifki, Leli, Raka) digambar utuh (*anime-style*) lengkap dengan latar belakang ruangan (Lab, Perpustakaan, Aula).
- **Sistem Afeksi (Affection Meter):** Setiap kali pemain mendapat skor tinggi di mapel milik seorang NPC, level afeksi NPC tersebut naik. Level maksimal bisa membuka *item* gratis atau *title* khusus.
- **Pilihan Moral (Branching Dialog):** Pemain sesekali diberi pilihan respon saat dialog yang bisa memberi bonus atribut pasif.

---

## 5. SISTEM CHEAT / VIP UNTUK KELUARGA (FAMILY ACCESS)

Mengingat game ini dirancang dengan sistem *Inventory* dan *Item* (yang lazimnya berbayar/membutuhkan *grinding*), sebuah *backdoor* wajib ditanam untuk akses gratis khusus keluarga Developer.

- **Mekanisme:** Di menu Pengaturan (Settings), ada kolom input tersembunyi.
- **Kode Rahasia:** Jika pengguna memasukkan string `AKSES_KELUARGA_VIP`.
- **Dampak:** Sistem otomatis menyuntikkan "Infinite Gold / 99999 Koin" atau "VIP Flag = True", yang membuat semua *Items* di toko (*Hint, Energy Drink*) menjadi **GRATIS SELAMANYA**. Hal ini memastikan keluarga Developer tidak terhalang *paywall* atau *grinding*.

---

## 6. TIMELINE IMPLEMENTASI (WHEN TO START)

**Kapan desain RPG Novel ini mulai dikoding ke dalam `world-1-rpg-v2.html`?**
- Desain ini **DITUNDA** hingga Fase Produksi Konten (Fase 3: Pembuatan Bank Soal JSON) selesai secara mayoritas (minimal Matematika & Sosiologi selesai dirakit).
- Begitu Master Control mendeklarasikan transisi ke **Fase 4: UI/UX & Visual Polish**, dokumen GDD ini secara resmi diaktifkan sebagai blueprint utama perombakan *frontend*.
- Saat diaktifkan, AI/Developer diinstruksikan untuk menggunakan gambar-gambar dari `rpg_novel_concept_mockups.md` (di arsip proyek) sebagai patokan estetika CSS (*Glassmorphism*, palet neon-siber, tata letak ala JRPG).
