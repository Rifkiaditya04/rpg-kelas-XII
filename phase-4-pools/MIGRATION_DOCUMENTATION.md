# Dokumentasi Migrasi Bank Soal (Phase 3 → Phase 4)

## 1. Pendahuluan
Dokumen ini merekam proses migrasi arsitektural Bank Soal Game RPG Edukasi Kelas XII dari format "Berbasis Misi (Phase 3)" menjadi "Berbasis Kolam Kompetensi (*Competency-Based Pool* - Phase 4)". Migrasi ini bertujuan untuk meningkatkan *replayability*, kebersihan data (auditabilitas), serta integrasi *gameplay* (TKA dan sistem XP) tanpa merusak atau mengubah esensi pedagogis materi.

## 2. Metodologi Migrasi (Non-Destructive)
Sesuai arahan, file lama di direktori `phase-3` **tidak dihapus**. Skrip PowerShell (`mass_migrate.ps1`) membaca seluruh file JSON *legacy*, merestrukturisasi JSON schema, dan menulis file-file baru di `phase-4-pools`.

## 3. Perubahan Schema Arsitektural Utama

### A. Dekoupling Misi dan Kolam (Pool)
File sebelumnya dipisah per Misi (contoh: `world-1-misi-1.json`). Kini digabung menjadi satu per Bab mata pelajaran:
* `pool-bahasa-indonesia-BI12-C01.json`
* `pool-matematika-MAT12-C02.json`
* dst.

### B. Pemetaan Kompetensi (Primary Competency)
Atribut `topic_id` dari *legacy* JSON dikonversi menjadi `primary_competency`. 
Masing-masing JSON *Pool* kini memiliki objek `"competencies"` di level root untuk melacak berapa jumlah soal (kuantitas *supply*) per kompetensi.

### C. Integrasi TKA Otomatis (`tka_alignment`)
Fitur *"TKA"* bukan lagi pool terpisah, melainkan sebuah filter meta-data.
Algoritma mendeteksi secara otomatis apabila suatu soal memiliki tag `"tka_bonus"`, bernilai `difficulty: "hard"`, atau `cognitive_level` setara *Evaluate/Create*. 
Jika terdeteksi, atribut `"suitable": true` akan diaktifkan sehingga *Game Engine* dapat menariknya khusus untuk *Boss Battle* atau *Mode Ujian TKA*.

### D. Konversi Jawaban dan Opsi
Jawaban *legacy* yang sebelumnya berbasis string teks utuh (raw text) kini dipetakan ulang menjadi ID Absolut (`A`, `B`, `C`, `D`, `E`). Array `options` menggunakan struktur `[{"id": "A", "text": "..."}]` demi mencegah bug komparasi *string* di sisi *Frontend JavaScript*.

### E. Integrasi Gameplay Engine
Setiap soal kini langsung dibekali JSON properti spesifik *gameplay*:
- `attack_type`: *light, medium, heavy* (berdasarkan *difficulty*).
- `correct_damage`: Besaran *damage* ke musuh.
- `base_xp`: Poin EXP yang didapat.

## 4. Hasil Audit Migrasi
- **Total Soal Terscanning:** 169 Soal
- **Total Soal Termigrasi Sukses:** 169 Soal
- **Lokasi Penyimpanan Pool:** `rpg-kelas-XII\phase-4-pools\`
- **Master Competency Map:** `competency_map.json` (Ekstraksi seluruh ID Kompetensi yang valid).

---
**Dokumentasi otomatis diselesaikan pada:** 10 Oktober 2026.
Tugas selanjutnya yang tersedia: Perumusan `mission_recipes.json` sebagai logika *spawner* (pengambil soal).
