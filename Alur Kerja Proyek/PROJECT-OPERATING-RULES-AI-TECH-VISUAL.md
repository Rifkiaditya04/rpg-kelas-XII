# PROJECT OPERATING RULES — AI, TECHNOLOGY, VISUAL, AND PRODUCT DIRECTION

**Status:** Operational guidance approved as project workflow policy
**Scope:** KELAS 12 — THE FINAL MISSION
**Purpose:** Menambahkan aturan kerja yang memperjelas pembagian pekerjaan AI, pilihan teknologi, timing visual, dan perbedaan antara mekanisme soal dengan pengalaman game.

> Dokumen ini harus dibaca bersama `00-MASTER-CONTROL.md` dan seluruh arsip `Alur Kerja Proyek` sebelum pekerjaan baru dilakukan. Jika ada konflik, Master Control dan keputusan yang lebih baru dan terdokumentasi menjadi sumber otoritatif.

---

## 1. VISUAL FINAL — TIDAK DIPUTUSKAN SEKARANG

Visual final tidak perlu diputuskan secara detail pada tahap content engineering dan controlled gameplay QA.

Yang sudah dikunci oleh Master Control/GDD:

- produk adalah educational adventure / RPG ringan;
- browser-first / HTML5;
- target HP + laptop;
- professional UX;
- mobile-first, touch-friendly, readable, responsive;
- visual final, map, progression, karakter, mission system, dan RPG layer dibahas dalam GDD sebelum implementasi besar;
- prototype dimulai dari World slice yang dapat dimainkan sebelum perluasan seluruh world.

Yang BELUM dikunci dan harus diputuskan ketika fase visual/game-design yang sesuai tiba:

- gaya ilustrasi/pixel art/vector/anime/realistic;
- sudut kamera/top-down/isometric/side-view;
- desain karakter;
- desain rumah, sekolah, kota, ruangan, world map;
- animasi karakter dan lingkungan;
- UI visual final;
- musik dan sound effects;
- efek visual dan transition.

**Aturan:** jangan memaksakan keputusan visual hanya karena teknologi/AI tertentu sedang tersedia. Ketika sampai pada fase visual, buat proposal, bandingkan terhadap GDD dan Master Control, lalu dokumentasikan keputusan sebelum implementasi besar.

Tampilan putih/teks pada renderer QA saat ini tidak boleh dianggap sebagai desain visual final. Renderer tersebut adalah mekanisme challenge/data-driven yang sedang diverifikasi.

---

## 2. PEMBAGIAN PEKERJAAN AI — TIDAK SEMUA HARUS DIKERJAKAN OLEH SATU AI

Proyek menggunakan prinsip:

**AI dipilih berdasarkan pekerjaan, bukan dikunci ke satu layanan.**

Partner/arsitek proyek bertugas menjaga:

- Master Control;
- keputusan arsitektur;
- provenance dan evidence discipline;
- pemilihan workflow;
- cross-validation;
- quality gate;
- integrasi hasil berbagai alat.

Pekerjaan boleh dialihkan kepada AI/tool lain jika lebih sesuai.

Ketika diperlukan, instruksi kerja harus menyebut secara eksplisit:

1. **AI/tool yang digunakan**;
2. **tugas yang diberikan**;
3. **input/source yang wajib dipakai**;
4. **output yang diminta**;
5. **quality check setelah output**;
6. **cara hasil dikembalikan ke repository/proyek**.

Contoh routing:

- Google AI Studio / Gemini: eksperimen prompt, batch drafting, transformasi atau eksplorasi konten ketika sesuai.
- ChatGPT/Codex atau coding-capable AI: coding, refactor, debugging, test harness, dokumentasi teknis ketika sesuai.
- AI lain dapat dipilih untuk independent review agar tidak semua keputusan bergantung pada satu model.
- Image/visual AI digunakan ketika fase visual sudah dibuka dan brief visual telah disetujui.

Nama alat tidak menjadi keputusan permanen. Rekomendasi tool harus mempertimbangkan akses gratis, kualitas, reproducibility, exportability, dan risiko vendor lock-in.

**AI output tidak otomatis menjadi project truth.** Hasil AI harus melewati evidence/provenance/review/quality gate yang sesuai sebelum menjadi artefak resmi.

---

## 3. AI SEBAGAI PEKERJA, REPOSITORY SEBAGAI SUMBER KEBENARAN

Tidak boleh terjadi kondisi di mana pengetahuan penting hanya tersimpan di percakapan dengan satu AI.

Alur wajib:

```text
AI/tool menghasilkan draft
        ↓
Evidence / provenance check
        ↓
Independent verification bila diperlukan
        ↓
Pedagogical / technical review
        ↓
Quality Gate
        ↓
Approved artifact
        ↓
GitHub repository
```

Master Control, GDD, dataset approved, source content, QA artifacts, dan keputusan resmi harus tersimpan di repository.

Jika AI lain digunakan, hasil pentingnya harus diintegrasikan ke artefak repository sehingga pekerjaan dapat dilanjutkan tanpa bergantung pada memory satu AI.

---

## 4. BAHASA PEMROGRAMAN — GAME CORE

Default teknologi game adalah plain web technology sesuai GDD:

- HTML
- CSS
- JavaScript
- JSON untuk content/data contract

Jangan menambahkan framework hanya karena populer. Framework/library hanya dipakai jika ada evidence bahwa manfaatnya jelas dan tidak mengancam prioritas gratis, sederhana, portable static build, maintainability, dan delivery.

Ketika tugas coding diberikan kepada AI tertentu, instruksi kerja harus menyebut bahasa/stack yang wajib digunakan.

Contoh:

> Gunakan HTML + CSS + JavaScript + JSON. Jangan memindahkan content ke hard-coded JavaScript. Pertahankan data-driven renderer.

---

## 5. PYTHON DAN TOOLING

Python bukan dependency runtime game siswa.

Python boleh digunakan sebagai tooling untuk pekerjaan seperti:

- preprocessing PDF/TXT;
- parsing dan normalisasi data;
- dataset generation;
- schema validation;
- duplicate detection;
- statistical analysis;
- QA automation;
- report generation;
- batch processing.

Hasil tooling Python harus tetap menghasilkan artefak yang dapat dikonsumsi game web, terutama JSON/data contract yang tervalidasi.

Jika sebuah tugas lebih tepat dilakukan dengan Python, partner proyek harus secara eksplisit memberitahu user:

> Gunakan Python untuk tugas X, dengan output Y, kemudian masukkan hasilnya ke pipeline Z.

Python tidak boleh diperkenalkan sebagai backend runtime hanya karena tersedia jika kebutuhan proyek tidak memerlukannya.

---

## 6. WEB-FIRST DAN RENCANA ANDROID

Arsitektur harus mempertahankan kemungkinan satu codebase untuk browser dan Android.

Target saat ini tetap:

```text
HTML + CSS + JavaScript + JSON
        ↓
Browser / HTML5
```

Setelah browser version stabil dan final QA selesai, kemungkinan packaging Android dapat dievaluasi dengan pendekatan hybrid/web-to-mobile yang sesuai, misalnya Capacitor atau teknologi setara.

Keputusan packaging APK/AAB belum menjadi implementation requirement pada tahap content/World 1 QA.

Jangan membuat dua game terpisah hanya untuk web dan Android jika arsitektur satu codebase dapat dipertahankan.

---

## 7. "GAME QUIZ" VS "PLATFORM BELAJAR LIGHT RPG"

Keduanya tidak bertentangan; perbedaannya adalah **posisi mekanisme soal dalam keseluruhan pengalaman**.

### Game quiz

Pertanyaan adalah pusat pengalaman.

```text
Buka game
 ↓
Pertanyaan
 ↓
Jawaban
 ↓
Skor
 ↓
Pertanyaan berikutnya
```

Jika diberi gambar rumah, karakter, warna, atau musik tetapi alur utamanya tetap hanya membuka dan menjawab soal, itu masih pada dasarnya quiz yang diberi dekorasi.

### Platform belajar berbentuk light RPG

Soal/challenge adalah salah satu mekanisme di dalam pengalaman belajar yang lebih besar.

```text
Explore
 ↓
Mission
 ↓
Learn / Inspect Context
 ↓
Interaction
 ↓
Challenge / Question
 ↓
Feedback
 ↓
XP / Progress
 ↓
Unlock
 ↓
Review Weak Skill
 ↓
Mastery Check
```

Ini persis selaras dengan Core Game Loop GDD.

Dalam proyek ini, **kita memang sejak awal ingin mengubah seluruh materi buku paket menjadi pengalaman belajar yang lebih menarik dan tidak cepat membosankan**. Jadi "platform belajar light RPG" bukan tujuan yang berbeda dari tujuan awal. Itu adalah cara mengimplementasikan tujuan awal pada level pengalaman/game architecture.

Perbedaan pentingnya hanya:

> Soal tetap menjadi mekanisme assessment/challenge, tetapi bukan satu-satunya bentuk interaksi atau keseluruhan game.

Contoh konsep yang boleh dipertimbangkan ketika fase game-world dibuka:

```text
Rumah / Hub
   ↓
Karakter bergerak
   ↓
Sekolah / Subject Hub
   ↓
Pilih mata pelajaran
   ↓
World
   ↓
Mission
   ↓
Eksplorasi / inspeksi / interaksi
   ↓
Challenge
   ↓
Question Renderer
   ↓
Feedback + XP
   ↓
Progression / Mastery
```

**Catatan status:** struktur Rumah → Sekolah → Mata Pelajaran → World → Mission di atas adalah proposal desain yang belum menjadi keputusan final kecuali kemudian disetujui dan dimasukkan ke Master Control/GDD.

---

## 8. TUJUAN PRODUK TETAP SAMA

Jangan mengubah tujuan proyek menjadi "membuat RPG" hanya demi game feel.

Tujuan utama yang sudah dikunci:

> Membangun game edukasi kelas XII berbasis browser untuk membantu persiapan ujian, dimulai dari Bahasa Indonesia dan kemudian dapat diperluas ke mata pelajaran lain.

RPG adalah bentuk pengalaman untuk mencapai tujuan tersebut.

Prinsip GDD tetap:

> **Competency → learning experience → challenge → feedback → progression → mastery.**

RPG elements are supporting systems, not the learning objective.

---

## 9. ATURAN KETIKA MEMASUKI FASE VISUAL

Saat fase visual/game presentation benar-benar dibuka:

1. Baca Master Control + seluruh Alur Kerja Proyek.
2. Baca GDD.
3. Tentukan visual brief sebagai proposal.
4. Pastikan proposal tidak bertentangan dengan academic objective, accessibility, mobile-first, performance, dan scope.
5. Setelah keputusan disetujui, arsipkan keputusan.
6. Baru gunakan AI visual/coding untuk implementasi.
7. QA visual tidak boleh menggantikan content/academic QA.

---

## 10. STATUS DOKUMEN

Dokumen ini adalah **workflow policy**, bukan pengganti Master Control.

Jika dokumen ini menyebut teknologi atau AI tertentu sebagai contoh, itu bukan berarti tool tersebut wajib digunakan. Tool dipilih pada saat tugas dilakukan berdasarkan kebutuhan dan akses aktual.

Setiap keputusan baru yang mengubah scope, platform, architecture, learning model, atau product direction harus masuk ke Master Control/GDD melalui proses keputusan yang terdokumentasi.
