# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — Alur Kerja Proyek

Dokumen ini adalah **pagar proyek**. Sebelum mengambil keputusan, membuat artefak baru, berpindah fase, atau memilih teknologi, baca dokumen ini terlebih dahulu.

## Status saat ini
- Phase 0 — Concept & Architecture: selesai
- Phase 1 — Content Audit: selesai pada level struktural/pedagogis; provenance produksi tetap wajib dijaga
- Phase 2 — Knowledge Base: quality gate selesai untuk seed prototype
- Exam Blueprint v1: selesai
- Golden Dataset v1: approved seed dan tetap immutable
- Question Schema v1.1: selesai dan selaras dengan renderer
- Question Renderer: data-driven, mendukung interaction types pada seed, dan diverifikasi dari source code
- Playable Micro-Prototype: quality gate lulus setelah perbaikan renderer
- Browser Quality Gate: tersedia di `prototype/bahasa-indonesia/quality-gate.html`
- **Phase 3 — Game Design Document: aktif / prototype expansion**
- Phase 3 GDD v1: tersedia di `phase-3/gdd-v1.md`
- **World 1 — Career Mission slice design: selesai untuk prototype**
- **World 1 — Career Mission playable slice: tersedia di `prototype/bahasa-indonesia/career-mission.html`**
- **World 1 — deterministic/source QA: selesai; defects yang ditemukan dari feedback live sudah diperbaiki**
- **World 1 — live regression: user-verified for the current slice; expansion gate is active**
- QA report: `phase-3/world-1-qa-report.md`
- **World 1 expansion plan v1: tersedia di `phase-3/world-1-expansion-plan.md`**
- **Chapter I Deep Content / Provenance Pass v1: selesai untuk controlled lanes A–C**
- Provenance artifact A–C: `phase-3/chapter-1-deep-content-provenance.md`
- **World 1 controlled content batch A–C v1.1: canonical merge completed; full batch quality gate passed with documented renderer limitation**
- Canonical batch artifact: `phase-3/world-1-question-batch-a-c-v1.1-canonical.json`
- Full quality-gate artifact: `phase-3/world-1-question-batch-a-c-v1.1-quality-gate.md`
- Revision artifact: `phase-3/world-1-question-batch-a-c-v1.1-revisions.json`
- Revision review: `phase-3/world-1-question-batch-a-c-v1.1-review.md`
- **Controlled Regression Harness v1: implemented and live-verified against the actual renderer**
- Harness: `prototype/bahasa-indonesia/regression-harness.html`
- Resolved QA dataset: `phase-3/world-1-question-batch-a-c-v1.1-regression-dataset.json`
- Harness protocol: `phase-3/world-1-controlled-regression-harness-v1.md`
- **Live nine-item regression: PASS. DATA, SCHEMA, TYPES, LOAD, ANSWER, SCORE, COVERAGE, and FEEDBACK all passed; 9/9 and 900 XP; all 9 IDs played in randomized order.**
- **Final Promotion Checks: PASS. World 1 A–C v1.1 is promoted to Approved World 1 Content v1.1.**
- Approved pool: `phase-3/world-1-approved-content-v1.1.json`
- Promotion record: `phase-3/world-1-promotion-v1.1.md`
- **Chapter I Deep Content / Provenance Pass v1 — lanes D–F: PASS for controlled expansion; not yet approved for production promotion**
- Provenance artifact D–F: `phase-3/chapter-1-deep-content-provenance-lanes-d-f-v1.md`
- **D–F controlled batch v1: created as 9 source-grounded items (3 D, 3 E, 3 F); status QA_PENDING, not promoted.**
- D–F controlled batch artifact: `phase-3/world-1-question-batch-d-f-v1.json`
- **D–F independent answer verification + pedagogical review: completed. Seven items passed as written; DF-001 required a content revision because its original scenario did not establish the claimed prior experience; DF-002 required a cognitive-metadata revision from evaluate to analyze.**
- D–F review artifact: `phase-3/world-1-question-batch-d-f-v1-review.md`
- D–F revision overlay: `phase-3/world-1-question-batch-d-f-v1.1-revisions.json`
- **D–F v1.1 Revision Quality Gate: PASS.**
- Revision gate artifact: `phase-3/world-1-question-batch-d-f-v1.1-revision-quality-gate.md`
- **Canonical Batch D–F v1.1 Merge: completed as deterministic manifest; effective IDs DF-001 … DF-009.**
- Canonical artifact: `phase-3/world-1-question-batch-d-f-v1.1-canonical.json`
- **Full Batch Quality Gate D–F v1.1: PASS.**
- Full quality-gate artifact: `phase-3/world-1-question-batch-d-f-v1.1-quality-gate.md`
- **D–F v1.1 resolved QA dataset created for live regression; QA-only and separate from Golden Dataset v1.**
- Resolved QA dataset: `phase-3/world-1-question-batch-d-f-v1.1-regression-dataset.json`
- **D–F v1.1 Controlled Live Regression: PASS. User-verified against the actual hosted renderer; DATA, SCHEMA, TYPES, LOAD, ANSWER, SCORE, COVERAGE, and FEEDBACK all passed; 9/9 and 900 XP; all 9 IDs played in randomized order.**
- D–F harness: `prototype/bahasa-indonesia/regression-harness-df-v1.1.html`
- **D–F v1.1 Final Promotion Checks: PASS.**
- Final promotion checks artifact: `phase-3/world-1-d-f-v1.1-final-promotion-checks.md`
- **D–F v1.1 PROMOTED to Approved World 1 D–F Content v1.1.**
- Approved D–F pool: `phase-3/world-1-approved-content-d-f-v1.1.json`
- Promotion record: `phase-3/world-1-promotion-d-f-v1.1.md`
- **A–C and D–F approved pools remain additive/versioned; no consolidation is performed without a separate explicit gate.**
- **Golden Dataset v1 remains unchanged and is not overwritten by World 1 expansion batches.**
- **Mass generation remains blocked from uncontrolled scaling; every new batch must pass the same gates.**
- **Controlled expansion XP defect: RESOLVED.** User live playtest after renderer/data-contract fix produced 6/6, 700 XP, 100% accuracy.
- XP QA artifact: `phase-3/world-1-controlled-expansion-xp-fix-qa.md` — PASS.
- **World 1 A–F Integrated QA / Regression Gate: PASS.** User-verified hosted browser regression covered 18/18 approved IDs; A–C 900 XP + D–F 900 XP; feedback/explanation PASS; additive/versioned integration PASS.
- Integrated harness: `prototype/bahasa-indonesia/world-1-integrated-regression-harness.html`.
- **World 1 approved A–F gameplay integration: implemented.** The controlled student-facing gameplay slice is `BI12-W01-M02`, using six explicit approved IDs (one per lane A–F) through `phase-3/world-1-controlled-expansion-v1.1.json` and the actual renderer.
- Approved-content index: `phase-3/world-1-approved-content-v1.1-index.json`.
- Expansion mission map: `phase-3/world-1-expansion-mission-map-v1.1.json`.
- Controlled runtime dataset: `phase-3/world-1-controlled-expansion-v1.1.json`.
- Student-facing launcher: `prototype/bahasa-indonesia/world-1-expansion.html`.
- **World 1 gameplay integration is additive and explicit: no uncontrolled sampling, no Golden Dataset mutation, and no consolidation of A–C/D–F pools.**
- Integration record: `Alur Kerja Proyek/PROJECT LOG/002-World-1-Approved-AF-Gameplay-Integration.md`.
- **GitHub Pages workflow: aktif dan deployment berhasil**
- **GitHub Pages launcher: tersedia di root `index.html`; deployment live sudah terverifikasi oleh GitHub Actions**
- Hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`
- Workflow verification protocol: aktif dan wajib dipakai
- **Phase 3 Visual Direction v1: APPROVED by user.** `phase-3/world-1-visual-direction-proposal-v1.md`
- Visual direction decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/003-world-1-visual-direction-approved.md`
- **World 1 Map / World Structure v1: APPROVED by user as the structural design basis; final asset-level map production remains a later implementation step.** `phase-3/world-1-map-world-structure-proposal-v1.md`
- Map decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/004-world-1-map-structure-proposal.md`
- **Next Phase 3 design step: Character Design, followed by Mission System, Progression System, and RPG Layer; no stage is skipped merely because it was previously undiscussed.**

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

## 8. Quality gate
- Provenance student-book: terisi untuk seluruh seed
- Provenance teacher-guide: terisi untuk seluruh seed
- Answer shape: tervalidasi
- Unique question IDs: tervalidasi
- Supported interaction types: tervalidasi
- Renderer dispatch: berdasarkan `question_type`, bukan ID soal
- Gameplay flow: soal → jawaban → feedback → XP → hasil
- Source cross-validation: Buku Siswa ↔ Buku Guru dilakukan pada seed
- Controlled batch baru wajib melewati answer verification, pedagogical review, provenance audit, renderer compatibility, batch quality gate, dan live regression sebelum promosi.

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
- World 1 slice sudah live-regression user-verified; controlled content expansion A–C v1.1 sudah dipromosikan.

## 11. World 1 — Career Mission slice
- Mission: `BI12-W01-M01`
- Sequence: Mission Brief → Relevance Scan → Error Hunt → Application Review → Debrief.
- Seed items: `BI12-GOLD-001`, `BI12-GOLD-002`, `BI12-GOLD-009`.
- Learning focus: relevance, evaluation, application/review process.
- Mission map: `phase-3/world-1-mission-map.json`.
- Slice design: `phase-3/world-1-career-mission.md`.
- Playable slice: `prototype/bahasa-indonesia/career-mission.html`.
- Runtime consumes approved JSON data and the mission map; presentation code does not duplicate mission question IDs.
- Runtime reads mission reward configuration for per-correct and completion XP.
- Runtime randomizes challenge order per mission start and option order per question render using Fisher-Yates-style shuffling; answer evaluation uses answer text.
- User live playtest confirmed: three challenges rendered, all-correct run produced 400 XP, wrong answers showed explanation/source verification, and post-fix multi-select instructions were clear.
- User live playtest identified and subsequently verified fixes for static challenge order and static option order.
- Multi-select UX explicitly labels multiple-answer questions and states the number of expected choices.
- Development-status text is intentionally retained until final release cleanup.

## 12. World 1 expansion and promotion
- Expansion plan: `phase-3/world-1-expansion-plan.md`.
- Chapter I Deep Content / Provenance Pass A–C: `phase-3/chapter-1-deep-content-provenance.md`.
- Controlled lanes A–C are source-mapped: relevance/vacancy fit, systematics/structure, and language features.
- Student Book and Teacher Guide were cross-validated for Chapter I goals, indicators, structure, language features, writing/revision, digital submission, and summative indicators.
- Page + subsection is the current human-auditable provenance locator for converted Markdown sources when stable original-file line numbers are unavailable; no artificial line numbers are invented.
- Controlled batch `BI12-W01-BATCH-AC-V1`: 9 items; independent answer/pedagogical review completed; 7 pass, AC-003 and AC-004 initially blocked by renderer interaction mismatch.
- AC-003 revision: `evidence_matching` → supported `mcq`, mechanic `relevance_scan`.
- AC-004 revision: `ordering` → supported `mcq`, mechanic `structure_check`.
- Revision artifact: `phase-3/world-1-question-batch-a-c-v1.1-revisions.json`.
- Revision review: `phase-3/world-1-question-batch-a-c-v1.1-review.md`.
- Canonical batch: `phase-3/world-1-question-batch-a-c-v1.1-canonical.json`, deterministic manifest with 9 effective item IDs.
- Resolved QA dataset: `phase-3/world-1-question-batch-a-c-v1.1-regression-dataset.json`; browser-regression artifact, not Golden Dataset v1.
- Full batch quality gate: PASS with documented limitation; schema, IDs, answer shape, provenance, answer verification, pedagogy, explanations, and renderer compatibility passed. Difficulty remains provisional.
- AC-005 content passes, but its `document_inspection` label currently uses generic option-selection rendering; specialized document-inspection UI remains a later implementation task.
- Controlled Regression Harness v1: live PASS; all 9 IDs played through actual renderer; 9/9 and 900 XP; randomized coverage; feedback/explanation verified.
- Regression bugs resolved: manifest-vs-items mismatch, failed Blob URL approach, and final-`#next` control-flow omission.
- Final Promotion Checks: PASS. Approved content pool: `phase-3/world-1-approved-content-v1.1.json`.
- Promotion record: `phase-3/world-1-promotion-v1.1.md`.
- Approved status is additive/versioned; Golden Dataset v1 remains unchanged.
- Difficulty labels remain provisional until empirical production analytics are available; this does not block controlled content promotion.
- Specialized document-inspection UX remains a later technical task and does not block the current approved content pool.
- **D–F provenance pass:** `phase-3/chapter-1-deep-content-provenance-lanes-d-f-v1.md`; PASS for controlled expansion into writing/revision, presentation/publication, and integrated application.
- **D–F controlled batch v1:** `phase-3/world-1-question-batch-d-f-v1.json`; 9 items (3 D, 3 E, 3 F), QA_PENDING, not promoted.
- **D–F independent answer verification + pedagogical review:** completed. Seven items passed as written; DF-001 required a content revision because its original scenario did not establish the claimed prior experience; DF-002 required a cognitive-metadata revision from evaluate to analyze.
- D–F review artifact: `phase-3/world-1-question-batch-d-f-v1-review.md`.
- D–F revision overlay: `phase-3/world-1-question-batch-d-f-v1.1-revisions.json`.
- **D–F v1.1 Revision Quality Gate: PASS.**
- Revision gate artifact: `phase-3/world-1-question-batch-d-f-v1.1-revision-quality-gate.md`.
- **Canonical Batch D–F v1.1 Merge: completed as deterministic manifest; effective IDs DF-001 … DF-009.**
- Canonical artifact: `phase-3/world-1-question-batch-d-f-v1.1-canonical.json`.
- **Full Batch Quality Gate D–F v1.1: PASS.**
- Full quality-gate artifact: `phase-3/world-1-question-batch-d-f-v1.1-quality-gate.md`.
- **D–F v1.1 resolved QA dataset created for live regression; QA-only and separate from Golden Dataset v1.**
- Resolved QA dataset: `phase-3/world-1-question-batch-d-f-v1.1-regression-dataset.json`.
- **D–F v1.1 Controlled Live Regression: PASS. User-verified against the actual hosted renderer; DATA, SCHEMA, TYPES, LOAD, ANSWER, SCORE, COVERAGE, and FEEDBACK all passed; 9/9 and 900 XP; all 9 IDs played in randomized order.**
- D–F harness: `prototype/bahasa-indonesia/regression-harness-df-v1.1.html`.
- **D–F v1.1 Final Promotion Checks: PASS.**
- Final promotion checks artifact: `phase-3/world-1-d-f-v1.1-final-promotion-checks.md`.
- **D–F v1.1 PROMOTED to Approved World 1 D–F Content v1.1.**
- Approved D–F pool: `phase-3/world-1-approved-content-d-f-v1.1.json`.
- Promotion record: `phase-3/world-1-promotion-d-f-v1.1.md`.
- **A–C and D–F approved pools remain additive/versioned; no consolidation is performed without a separate explicit gate.**
- **Golden Dataset v1 remains unchanged and is not overwritten by World 1 expansion batches.**
- **Mass generation remains blocked from uncontrolled scaling; every new batch must pass the same gates.**
- **Controlled expansion XP defect fixed and user-verified: 6/6 = 700 XP.**
- **World 1 A–F Integrated QA / Regression Gate: PASS.** User-verified hosted browser regression: 18/18 approved IDs, A–C 900 XP + D–F 900 XP, feedback PASS, additive/versioned integration PASS.
- **Approved A–F gameplay integration: implemented for controlled mission `BI12-W01-M02`.** Six explicit approved IDs (one per lane A–F) are resolved through `phase-3/world-1-controlled-expansion-v1.1.json` and played through the actual renderer via `prototype/bahasa-indonesia/world-1-expansion.html`.
- Approved-content index: `phase-3/world-1-approved-content-v1.1-index.json`.
- Expansion mission map: `phase-3/world-1-expansion-mission-map-v1.1.json`.
- Integration record: `Alur Kerja Proyek/PROJECT LOG/002-World-1-Approved-AF-Gameplay-Integration.md`.

## 13. QA findings resolved in World 1
- Mission-map bypass fixed: question selection comes from `mission.nodes[].question_ids`.
- Completion-XP mismatch fixed: final XP includes `mission.rewards.mission_completion_xp`.
- Unsupported `document_inspection` in the seed fixed in renderer/quality gate.
- Static challenge order fixed by shuffling at mission load.
- Static answer-option order fixed by shuffling on render and evaluating by answer value.
- Multi-select instruction ambiguity fixed by explicit multiple-choice instruction and expected count.
- Controlled regression harness manifest/data-resolution bug fixed.
- Controlled regression harness final-navigation bug fixed.
- **Controlled expansion XP defect fixed and user-verified: 6/6 = 700 XP.**

## 14. GitHub Pages — browser playtest path
- Deployment workflow: `.github/workflows/pages.yml`.
- Root launcher: `/index.html`.
- Hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`.
- GitHub Actions deployment has been verified successfully.
- Do not use GitHub `blob/main/...` URLs as the game runtime; those are source-code views.
- After every runtime change, verify the new Pages deployment succeeds before asking for live regression.
- Integrated QA harness: `prototype/bahasa-indonesia/world-1-integrated-regression-harness.html`.

## 15. Final-release cleanup rule
- The development-status text `Seed tervalidasi melalui quality gate konten dan renderer data-driven. Ini tetap micro-prototype, bukan desain visual final.` is intentionally retained during prototype/QA.
- **Do not remove it yet.**
- It must be removed from the student-facing production build only during the final release-cleanup pass, after the entire game has passed final QA and is declared ready for distribution.

## 16. REQUIRED WORK SESSION PROTOCOL
- Operational procedure is also archived in `Alur Kerja Proyek/REQUIRED-WORK-SESSION-PROTOCOL.md`.
- Before every new work session, repo sync, upload/change, or decision: re-sync source → read every file in `Alur Kerja Proyek` → read relevant active artifacts → verify Master Control → separate Evidence / Implementation / Interpretation → cross-validate → execute the applicable gate.
- After work: verify the gate, update QA artifacts, update Master Control when status/decision/defect changes, and store important decisions in the repository.
- Do not repeat completed work without first searching the repository and documenting why a new version is necessary.
- Browser-required gates remain `QA_PENDING` until actual hosted browser evidence exists.
