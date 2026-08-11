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

## 7. Status saat ini
- Phase 0 — Concept & Architecture: selesai
- Phase 1 — Content Audit: selesai pada level struktural/pedagogis; provenance mendalam tetap harus dijaga pada produksi
- Phase 2 — Knowledge Base: aktif
- Exam Blueprint v1: selesai
- Golden Dataset v1: validation candidate
- Question Renderer: prototype selesai
- Playable Micro-Prototype: tersedia di `prototype/bahasa-indonesia/index.html`
- Phase 3 — Game Design Document: belum dimulai

## 8. Quality gate sebelum Phase 3
Micro-prototype harus diperiksa untuk:
- alur permainan
- kejelasan feedback
- scoring
- responsif HP/laptop
- kualitas soal
- provenance
- kesesuaian mekanik dengan kompetensi

Golden Dataset belum boleh dimassalkan sampai quality gate terpenuhi.

## 9. Aturan komunikasi kerja
Partner/technical lead menentukan urutan kerja dan keputusan teknis default. Pengguna hanya perlu dimintai keputusan ketika benar-benar membutuhkan preferensi pribadi, akses yang hanya dimiliki pengguna, atau keputusan yang berisiko mengubah tujuan proyek.

## 10. Satu kalimat pengingat
> **Kita sedang membangun alat belajar yang terasa seperti game, bukan game yang kebetulan berisi soal.**
