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
- Question Renderer: data-driven dan diverifikasi dari source code
- Playable Micro-Prototype: quality gate lulus untuk seed saat ini
- Browser Quality Gate: tersedia di `prototype/bahasa-indonesia/quality-gate.html`
- **Phase 3 — Game Design Document: aktif**
- Phase 3 GDD v1: tersedia di `phase-3/gdd-v1.md`
- **World 1 — Career Mission slice design: selesai untuk prototype**
- **World 1 — Career Mission playable slice: tersedia di `prototype/bahasa-indonesia/career-mission.html`**
- **World 1 — deterministic/source QA: selesai**
- **World 1 — live browser playtest: belum terverifikasi**
- QA report: `phase-3/world-1-qa-report.md`
- **GitHub Pages workflow: dikoreksi agar memakai Pages yang sudah diaktifkan; saat ini Pages belum dapat diaktifkan otomatis oleh GitHub Actions token**
- **GitHub Pages launcher: tersedia di root `index.html`; live rendering belum terverifikasi**
- **Manual prerequisite: pemilik repo perlu mengaktifkan GitHub Pages sekali di Settings → Pages → Source: GitHub Actions. Setelah itu workflow dapat melakukan deployment otomatis.**
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
- The slice now consumes the approved JSON dataset and the mission map; presentation code does not duplicate mission question IDs.
- Runtime reads mission reward configuration for per-correct and completion XP.
- Deterministic/source QA passed; defects found during QA were fixed.
- Live browser playtest remains unverified because the current tool environment has no direct browser runtime and external network access is unavailable. Do not claim live browser playtest passed until it is executed in a real browser/hosted environment.
- QA report: `phase-3/world-1-qa-report.md`.

## 12. QA findings resolved in World 1
- Earlier mission-map bypass was fixed: question selection now comes from `mission.nodes[].question_ids`.
- Earlier completion-XP mismatch was fixed: final XP now includes `mission.rewards.mission_completion_xp`.
- These defects are considered resolved; do not treat them as open implementation issues.

## 13. GitHub Pages — browser playtest path
- Deployment workflow: `.github/workflows/pages.yml`.
- Root launcher: `/index.html`.
- Intended hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`.
- The workflow now relies on the repository's existing GitHub Pages configuration; it no longer asks the Actions token to create/enable the Pages site.
- Verified blocker: the Actions token has `Pages: write` but GitHub rejects automatic site creation with `Resource not accessible by integration` when no Pages site exists.
- Therefore one manual repository-owner action is required: open repository Settings → Pages → Build and deployment → Source → GitHub Actions, then save. This creates/enables the Pages site; the existing workflow will then deploy automatically on the next run.
- Do not use GitHub `blob/main/...` URLs as the game runtime; those are source-code views.
- After manual activation, verify the workflow run reaches Setup Pages → Upload artifact → Deploy to GitHub Pages successfully before claiming the hosted launcher is live.
- After deployment, the user can open the hosted launcher and perform the live click/tap playtest.
- If the hosted launcher loads but a game screen cannot fetch JSON, treat it as a deployment/path defect and investigate before expanding scope.

## 14. Aturan komunikasi kerja
Partner/technical lead menentukan urutan kerja dan keputusan teknis default. Pengguna hanya dimintai keputusan ketika benar-benar membutuhkan preferensi pribadi, akses yang hanya dimiliki pengguna, atau keputusan yang berisiko mengubah tujuan proyek.

## 15. Aturan pembaruan Master Control
Setiap perubahan keputusan, status fase, quality gate, artefak penting, atau prosedur wajib memperbarui file ini setelah perubahan diverifikasi dari repo. Master Control terbaru menjadi aturan kerja terbaru kecuali sengaja direvisi melalui keputusan proyek yang terdokumentasi.

## 16. Pengingat
> **Kita sedang membangun alat belajar yang terasa seperti game, bukan game yang kebetulan berisi soal.**
