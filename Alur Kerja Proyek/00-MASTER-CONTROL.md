# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — Alur Kerja Proyek

Dokumen ini adalah **pagar proyek**. Sebelum mengambil keputusan, membuat artefak baru, berpindah fase, atau memilih teknologi, baca dokumen ini terlebih dahulu.

## 1. Tujuan utama
Membangun game edukasi kelas XII berbasis browser untuk membantu persiapan ujian, dimulai dari Bahasa Indonesia dan kemudian dapat diperluas ke mata pelajaran lain.

## 2. Keputusan yang sudah dikunci
- Judul kerja: **KELAS 12 — THE FINAL MISSION**
- Platform akhir: browser / HTML5
- Target perangkat: HP dan laptop
- Genre: educational adventure / RPG ringan
- Mata pelajaran pertama: Bahasa Indonesia Kelas XII
- Tujuan utama: persiapan ujian
- Sumber akademik: buku Kurikulum Merdeka milik proyek; Buku Siswa sebagai sumber utama dan Buku Guru sebagai validator pedagogis
- Prioritas teknologi: gratis → mudah dikembangkan → profesional
- AI bukan dikunci ke satu layanan; alat dipilih berdasarkan pekerjaan yang sedang dilakukan
- Game tidak boleh menjadi sekadar PDF/kuis yang diberi skin. Materi harus diubah menjadi pengalaman belajar.

## 3. Prinsip akademik wajib
1. Tidak ada soal produksi tanpa provenance.
2. Setiap soal minimal menyimpan chapter, topic, source, source page/section, skill, cognitive level, difficulty, answer key, explanation, dan generation method.
3. Soal baru harus bersumber pada kompetensi/materi buku, bukan menyalin mentah latihan buku.
4. Jawaban single-answer harus tidak ambigu.
5. Distraktor harus masuk akal dan source-grounded.
6. Kesulitan ditentukan oleh tuntutan berpikir, bukan oleh kalimat yang sengaja dibuat membingungkan.
7. Tugas kreatif memakai rubric.
8. Jangan mengarang nomor halaman, fakta, kompetensi, atau klaim kurikulum.
9. Blueprint internal proyek tidak boleh disebut sebagai komposisi ujian resmi.

## 4. Arsitektur konten
```text
Sumber Buku
  ↓
Knowledge Base
  ↓
Exam Blueprint
  ↓
Golden Dataset
  ↓
Question Renderer
  ↓
Game Mechanics
  ↓
Training / Exam Simulation
```

## 5. Arsitektur pengalaman
Bahasa Indonesia mempunyai empat World:
- World 1 — Career Mission
- World 2 — Film Detective
- World 3 — Drama Stage
- World 4 — Nusantara Explorer

Semua world mengarah ke Final Exam dan analisis kelemahan siswa.

## 6. Aturan perubahan
- Jangan mengubah keputusan yang sudah dikunci hanya karena teknologi baru terlihat menarik.
- Jika sebuah keputusan teknis mengancam tujuan akademik, tujuan akademik menang.
- Jika sebuah fitur tidak meningkatkan pembelajaran atau pengalaman bermain secara nyata, tunda.
- Prototype digunakan untuk membuktikan asumsi, bukan alasan untuk memperluas scope.
- Setiap fase harus menghasilkan artefak yang dapat diperiksa sebelum pindah ke fase berikutnya.

## 7. PROTOKOL VERIFIKASI WAJIB — berlaku mulai 11 Agustus 2026
Setiap sesi kerja baru, sinkronisasi repo, upload/perubahan file, atau sebelum mengambil keputusan baru wajib mengikuti urutan berikut:

### 7.1 Re-sync dari sumber asli
- Jangan memperlakukan state dari context percakapan sebagai sumber kebenaran.
- Tarik ulang file dan data yang relevan dari repository/proyek sebelum menganalisis.
- Jika ada perubahan repo sejak pemeriksaan sebelumnya, gunakan versi terbaru sebagai dasar.

### 7.2 Baca dokumen alur kerja lengkap sebelum bekerja
Sebelum melakukan pekerjaan apa pun, baca **seluruh isi** file dalam folder `Alur Kerja Proyek` yang relevan, dan untuk sesi proyek ini default-nya adalah semua file di folder tersebut satu per satu.
- `00-MASTER-CONTROL.md`
- `game edukasi kelas XII.txt`
- `Golden Dataset v1.txt`
- `PHASE 1.txt`
- `PHASE 2.txt`
- `PHASE 2.2 — Exam Blueprint.txt`

Judul file, ringkasan lama, atau ingatan percakapan tidak boleh menggantikan pembacaan isi dokumen.

### 7.3 Pisahkan tiga lapisan temuan
Dalam setiap analisis atau laporan, pisahkan secara eksplisit:
- **Evidence** — apa yang benar-benar terbukti dari sumber/data.
- **Implementation** — apa yang benar-benar terkonfirmasi dari kode/artefak yang ada.
- **Interpretation** — hipotesis, inferensi, atau keputusan desain yang belum merupakan fakta sumber.

Jangan mencampurkan ketiganya menjadi satu klaim.

### 7.4 Traceability ke baris aktual
- Setiap temuan teknis atau data yang material harus dapat ditelusuri ke file dan nomor baris.
- Untuk kode, ambil potongan kode aktual pada baris terkait; jangan menggantinya dengan generalisasi.
- Untuk data, kutip/ambil nilai aktual dari baris/record yang menjadi dasar.
- Jika perlu gunakan pencarian/grep/query langsung terhadap sumber.
- Jika nomor baris belum tersedia atau sumber tidak dapat dibaca dengan presisi, nyatakan keterbatasannya dan jangan mengarang lokasi.

### 7.5 Cross-validation independen
- Klaim penting tidak boleh dipercaya hanya karena muncul pada satu sumber.
- Cross-check dengan sumber independen yang sesuai, misalnya Buku Siswa ↔ Buku Guru, source data ↔ kode renderer, atau blueprint ↔ dataset.
- Jika sumber berbeda atau konflik, catat konflik tersebut dan jangan memilih salah satu secara diam-diam.
- Status klaim harus jelas: `confirmed`, `partially confirmed`, `conflicting`, atau `unverified`.

### 7.6 Tidak percaya state lama
Artefak, status fase, angka progres, commit, source page, dan hasil validasi lama harus dianggap **stale** sampai diverifikasi ulang dari repo/proyek saat sesi berlangsung.

## 8. Status saat ini — diperbarui setelah quality gate
- Phase 0 — Concept & Architecture: selesai
- Phase 1 — Content Audit: selesai pada level struktural/pedagogis; provenance produksi tetap wajib dijaga
- Phase 2 — Knowledge Base: **quality gate selesai untuk seed prototype**
- Exam Blueprint v1: selesai
- Golden Dataset v1: **approved seed**
- Question Schema v1.1: selesai dan selaras dengan renderer
- Question Renderer: **data-driven dan diverifikasi dari source code**
- Playable Micro-Prototype: **quality gate lulus untuk seed saat ini**
- Browser Quality Gate: tersedia di `prototype/bahasa-indonesia/quality-gate.html`
- Phase 3 — Game Design Document: **berikutnya / siap dimulai**
- Workflow verification protocol: **aktif dan wajib dipakai**

## 9. Quality gate yang sudah dilalui sebelum Phase 3
- Provenance student-book: terisi untuk seluruh seed
- Provenance teacher-guide: terisi untuk seluruh seed
- Answer shape: tervalidasi
- Unique question IDs: tervalidasi oleh renderer/quality gate
- Supported interaction types: tervalidasi
- Renderer dispatch: berdasarkan `question_type`, bukan ID soal
- Gameplay flow: soal → jawaban → feedback → XP → hasil
- Source cross-validation: Buku Siswa ↔ Buku Guru dilakukan pada seed

## 10. Batasan setelah quality gate
- Golden Dataset v1 disetujui sebagai **seed**, bukan sebagai bank soal produksi massal.
- Mass generation tetap memerlukan QA batch dan provenance.
- Creative/open-ended assessment belum menjadi bagian renderer saat ini; rubric renderer akan dirancang bila dibutuhkan pada fase konten/gameplay.
- Visual final, map, progression, karakter, mission system, dan RPG layer masuk Phase 3, bukan diperluas di micro-prototype.

## 11. Aturan komunikasi kerja
Partner/technical lead menentukan urutan kerja dan keputusan teknis default. Pengguna hanya perlu dimintai keputusan ketika benar-benar membutuhkan preferensi pribadi, akses yang hanya dimiliki pengguna, atau keputusan yang berisiko mengubah tujuan proyek.

## 12. Aturan pembaruan Master Control
- Setiap perjalanan kerja yang menghasilkan perubahan keputusan, status fase, quality gate, artefak penting, atau prosedur wajib memperbarui file ini.
- Pembaruan harus dilakukan **setelah fakta perubahan diverifikasi dari repo**, bukan berdasarkan asumsi.
- Catat perubahan penting secara ringkas agar dokumen tetap menjadi sumber kontrol, bukan jurnal panjang.
- Jika ada konflik antara dokumen lama dan Master Control terbaru, Master Control menjadi aturan kerja terbaru kecuali sengaja direvisi melalui keputusan proyek yang terdokumentasi.

## 13. Satu kalimat pengingat
> **Kita sedang membangun alat belajar yang terasa seperti game, bukan game yang kebetulan berisi soal.**
