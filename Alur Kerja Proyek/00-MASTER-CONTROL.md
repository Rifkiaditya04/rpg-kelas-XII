# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — Alur Kerja Proyek

Dokumen ini adalah **pagar proyek**. Sebelum mengambil keputusan, membuat artefak baru, berpindah fase, atau memilih teknologi, baca dokumen ini terlebih dahulu.

## Status saat ini
- Phase 0 — Concept & Architecture: selesai
- Phase 1 — Content Audit: selesai pada level struktural/pedagogis; provenance produksi tetap wajib dijaga
- Phase 2 — Knowledge Base: quality gate selesai untuk seed prototype
- Exam Blueprint v1: selesai
- Golden Dataset v1: approved seed
- Question Schema v1.1: selesai dan selaras dengan renderer
- Question Renderer: data-driven, mendukung interaction types pada seed, dan diverifikasi dari source code
- Playable Micro-Prototype: quality gate lulus setelah perbaikan renderer
- Browser Quality Gate: tersedia di `prototype/bahasa-indonesia/quality-gate.html`
- **Phase 3 — Game Design Document: aktif**
- Phase 3 GDD v1: tersedia di `phase-3/gdd-v1.md`
- **World 1 — Career Mission slice design: selesai untuk prototype**
- **World 1 — Career Mission playable slice: tersedia di `prototype/bahasa-indonesia/career-mission.html`**
- **World 1 — deterministic/source QA: selesai; defects yang ditemukan dari feedback live sudah diperbaiki**
- **World 1 — live browser playtest: sebagian terverifikasi oleh pengguna; full regression tetap diperlukan setelah deployment terbaru**
- QA report: `phase-3/world-1-qa-report.md`
- **GitHub Pages workflow: aktif dan deployment berhasil pada run `31472505502`**
- **GitHub Pages launcher: tersedia di root `index.html`; deployment live sudah terverifikasi oleh GitHub Actions**
- Hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`
- Workflow verification protocol: aktif dan wajib dipakai

## 1. Tujuan utama
Membangun game edukasi kelas XII berbasis browser untuk membantu persiapan ujian, dimulai dari Bahasa Indonesia dan kemudian dapat diperluas ke mata pelajaran lain.

## 2. Keputusan yang sudah dikunci
- Judul kerja: **KELAS 12 — THE FINAL MISSION**
- Platform akhir: browser / HTML5
- Target perangkat: HP dan laptop
- Genre: educational adventure / RPG ringan
- Mata pelajaran pertama: Bahasa Indonesia Kelas XII
- Tujuan utama: persiapan ujian
- Sumber akademik: Buku Siswa sebagai sumber utama dan Buku Guru sebagai validator pedagogis
- Prioritas teknologi: gratis → mudah dikembangkan → profesional
- AI dipilih berdasarkan pekerjaan, bukan dikunci ke satu layanan
- Game tidak boleh menjadi sekadar PDF/kuis yang diberi skin; materi harus diubah menjadi pengalaman belajar

## 3. Prinsip akademik wajib
1. Tidak ada soal produksi tanpa provenance.
2. Setiap soal minimal menyimpan chapter, topic, source, source page/section, skill, cognitive level, difficulty, answer key, explanation, dan generation method.
3. Soal baru harus bersumber pada kompetensi/materi buku, bukan menyalin mentah latihan buku.
4. Jawaban single-answer harus tidak ambigu.
5. Distraktor harus masuk akal dan source-grounded.
6. Kesulitan ditentukan oleh tuntutan berpikir, bukan bahasa yang sengaja membingungkan.
7. Tugas kreatif memakai rubric.
8. Jangan mengarang nomor halaman, fakta, kompetensi, atau klaim kurikulum.
9. Blueprint internal proyek tidak boleh disebut sebagai komposisi ujian resmi.

## 4. Arsitektur konten
Sumber Buku → Knowledge Base → Exam Blueprint → Golden Dataset → Question Renderer → Game Mechanics → Training / Exam Simulation.

## 5. Arsitektur pengalaman
- World 1 — Career Mission
- World 2 — Film Detective
- World 3 — Drama Stage
- World 4 — Nusantara Explorer
- Semua world mengarah ke Final Exam dan analisis kelemahan siswa.

## 6. Aturan perubahan
- Jangan mengubah keputusan yang sudah dikunci hanya karena teknologi baru terlihat menarik.
- Jika keputusan teknis mengancam tujuan akademik, tujuan akademik menang.
- Jika fitur tidak meningkatkan pembelajaran atau pengalaman bermain secara nyata, tunda.
- Prototype digunakan untuk membuktikan asumsi, bukan memperluas scope.
- Setiap fase menghasilkan artefak yang dapat diperiksa sebelum pindah fase.

## 7. PROTOKOL VERIFIKASI WAJIB
Setiap sesi baru, sinkronisasi repo, upload/perubahan file, atau keputusan baru:
1. Re-sync sumber asli; state percakapan lama dianggap stale.
2. Baca seluruh file dalam `Alur Kerja Proyek` satu per satu sebelum bekerja.
3. Pisahkan **Evidence**, **Implementation**, dan **Interpretation**.
4. Temuan material harus tertelusur ke file + nomor baris + potongan aktual; jangan mengarang lokasi.
5. Cross-validate klaim penting dengan sumber independen yang sesuai.
6. Jika ada konflik, nyatakan `confirmed`, `partially confirmed`, `conflicting`, atau `unverified`.

## 8. Quality gate sebelum Phase 3
- Provenance student-book: terisi untuk seluruh seed
- Provenance teacher-guide: terisi untuk seluruh seed
- Answer shape: tervalidasi
- Unique question IDs: tervalidasi
- Supported interaction types: tervalidasi
- Renderer dispatch: berdasarkan `question_type`, bukan ID soal
- Gameplay flow: soal → jawaban → feedback → XP → hasil
- Source cross-validation: Buku Siswa ↔ Buku Guru dilakukan pada seed

## 9. Batasan Phase 3
- Golden Dataset v1 tetap approved seed, bukan bank soal produksi massal.
- Mass generation tetap memerlukan QA batch dan provenance.
- Creative/open-ended assessment belum masuk renderer generik; rubric renderer dirancang bila diperlukan.
- Visual final, map, progression, karakter, mission system, dan RPG layer dibahas dalam GDD sebelum implementasi besar.
- Prototype expansion dimulai dari satu World slice yang dapat dimainkan sebelum empat world diperluas.
- Multiplayer, online accounts, complex 3D, real-time AI NPC, monetization, dan social features tidak masuk scope kecuali keputusan terdokumentasi membuktikan manfaatnya.

## 10. Phase 3 GDD v1 — keputusan desain awal
- Core loop: Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check.
- Mode belajar: Learn, Training, Exam Simulation.
- Game progression dan learning progression dipisahkan.
- Final Exam internal: 40 soal / 60 menit / 10 per world / 8 easy / 22 medium / 10 hard; ini target desain internal, bukan komposisi ujian resmi.
- Hasil Final Exam menghasilkan weakness ranking dan Recommended Training.
- Challenge tetap content-driven dan data-driven.
- Browser-first, gratis, portable static build, maintainable content, professional UX.
- Mobile-first: touch-friendly, readable, responsive, no hover-only controls.
- Phase 3 berikutnya: bangun satu playable World 1 slice sebelum memperluas semua world.

## 11. World 1 — Career Mission slice
- Mission: `BI12-W01-M01`
- Sequence: Mission Brief → Relevance Scan → Error Hunt → Application Review → Debrief.
- Seed items: `BI12-GOLD-001`, `BI12-GOLD-002`, `BI12-GOLD-009`.
- Learning focus: relevance, evaluation, application/review process.
- Mission map: `phase-3/world-1-mission-map.json`.
- Slice design: `phase-3/world-1-career-mission.md`.
- Playable slice: `prototype/bahasa-indonesia/career-mission.html`.
- The slice consumes the approved JSON dataset and the mission map; presentation code does not duplicate mission question IDs.
- Runtime reads mission reward configuration for per-correct and completion XP.
- Runtime randomizes challenge order per mission start and option order per question render using Fisher-Yates-style shuffling; answer evaluation uses answer text, so correctness is independent of A/B/C/D position.
- Deterministic/source QA passed; defects found during QA were fixed.
- User live playtest confirmed: three challenges rendered, all-correct run produced 400 XP, wrong answers showed explanation/source verification.
- User live playtest also identified fixed issues: static challenge order and static option order; both are now randomized.
- Micro-prototype user feedback identified an unsupported `document_inspection` type; renderer and quality gate now explicitly support it.
- `prototype/bahasa-indonesia/index.html` now loads renderer with cache-busting query `renderer.js?v=2`.
- Full post-fix browser regression is still required after the latest deployment; do not claim that regression passed until the user tests the new deployment.
- **Multi-select UX fix:** renderer now explicitly labels `multi_select` questions as “Pilih semua jawaban yang benar” and states the number of correct choices from the dataset; selection state is exposed through `aria-pressed`.
- Multi-select scoring remains answer-value based; Training feedback may reveal all correct options after submission. Exam Simulation will use stricter post-session review behavior when that mode is implemented.
- QA report: `phase-3/world-1-qa-report.md`.

## 12. QA findings resolved in World 1
- Earlier mission-map bypass was fixed: question selection now comes from `mission.nodes[].question_ids`.
- Earlier completion-XP mismatch was fixed: final XP now includes `mission.rewards.mission_completion_xp`.
- Unsupported `document_inspection` in the seed was a renderer/quality-gate contract defect; it is now included in supported types and option validation.
- Static challenge order was a usability/anti-memorization defect; mission questions are now shuffled at mission load.
- Static answer-option order was an anti-memorization defect; options are now shuffled on each question render and evaluated by answer value rather than fixed position.
- Multi-select instruction ambiguity was a UX defect; the renderer now explicitly communicates that multiple answers must be selected and how many are expected when the dataset provides that count.
- These implementation/UX defects are considered resolved; the remaining gate is post-fix live regression, not an open design defect.

## 13. GitHub Pages — browser playtest path
- Deployment workflow: `.github/workflows/pages.yml`.
- Root launcher: `/index.html`.
- Hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`.
- GitHub Actions deployment run `31472505502`: Setup Pages, Upload artifact, and Deploy to GitHub Pages all completed successfully.
- Do not use GitHub `blob/main/...` URLs as the game runtime; those are source-code views.
- After every runtime change, verify the new Pages deployment succeeds before asking for live regression.

## 14. Aturan komunikasi kerja
Partner/technical lead menentukan urutan kerja dan keputusan teknis default. Pengguna hanya dimintai keputusan ketika benar-benar membutuhkan preferensi pribadi, akses yang hanya dimiliki pengguna, atau keputusan yang berisiko mengubah tujuan proyek.

## 15. Aturan pembaruan Master Control
Setiap perubahan keputusan, status fase, quality gate, artefak penting, atau prosedur wajib memperbarui file ini setelah perubahan diverifikasi dari repo. Master Control terbaru menjadi aturan kerja terbaru kecuali sengaja direvisi melalui keputusan proyek yang terdokumentasi.

## 16. Pengingat
> **Kita sedang membangun alat belajar yang terasa seperti game, bukan game yang kebetulan berisi soal.**
