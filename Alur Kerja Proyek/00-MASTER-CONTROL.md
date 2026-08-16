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
- **World 1 — deterministic/source QA: selesai; defects dari live feedback sudah diperbaiki**
- **World 1 — live regression: user-verified; expansion gate active**
- World 1 expansion plan: `phase-3/world-1-expansion-plan.md`
- **A–C v1.1: canonical merge + full batch quality gate PASS; promoted to Approved World 1 Content v1.1**
- **D–F v1.1: revision quality gate + canonical merge + full batch quality gate + controlled live regression + final promotion PASS; promoted to Approved World 1 D–F Content v1.1**
- **Golden Dataset v1 remains unchanged; A–C/D–F remain additive/versioned**
- **Controlled expansion XP defect RESOLVED and user-verified: 6/6 = 700 XP**
- **World 1 A–F Integrated QA / Regression Gate: PASS; 18/18 approved IDs; A–C 900 XP + D–F 900 XP; feedback PASS; additive/versioned integration PASS**
- **World 1 approved A–F gameplay integration: implemented for controlled mission `BI12-W01-M02`**
- **Mission System Specification v1: CREATED and verified** `phase-3/world-1-mission-system-specification-v1.md`
- **Controlled World 1 Mission System Prototype v1: IMPLEMENTED and PROMOTED after user-verified hosted/browser regression PASS** `phase-3/world-1-mission-system-prototype-v1.json`, `phase-3/world-1-mission-system-prototype-v1-dataset.json`, `prototype/bahasa-indonesia/mission-system-prototype-v1.html`
- **Mission System QA / Regression Gate: PASS — revised v1 scope user-verified in hosted browser**
- **Mission System v1: APPROVED / PROMOTED** `Alur Kerja Proyek/PROJECT LOG/012-Mission-System-v1-Promotion.md`
- **Training Room: DEFERRED to the later Progression / RPG Layer gate; Mission System v1 uses Retry / Remedial below 70%**
- **Current next gate: determine and execute the next Phase 3 progression/gameplay gate from the verified Master Control; do not retroactively expand Mission System v1**
- GitHub Pages workflow active; hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`

### Phase 3 visual/game design status
- **Visual Direction v1: APPROVED by user.** `phase-3/world-1-visual-direction-proposal-v1.md`
- Visual decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/003-world-1-visual-direction-approved.md`
- **World 1 Map / World Structure v1: APPROVED by user as structural design basis.** `phase-3/world-1-map-world-structure-proposal-v1.md`
- Map decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/004-world-1-map-structure-proposal.md`
- **World 1 Character Design Proposal v1: SUPERSEDED by v2.** `phase-3/world-1-character-design-proposal-v1.md`
- **World 1 Character Design Proposal v2: APPROVED by user on 14 August 2026.** `phase-3/world-1-character-design-proposal-v2.md`
- Canonical visual reference wrappers: `phase-3/visuals/karakter-fix.svg` and `phase-3/visuals/desain-fix.svg`.
- User-provided source SVGs remain source of truth until a standalone fixed copy is successfully committed and verified.
- **Approved character direction:** user-selected illustrated/anime-inspired male/female visual family; Grade 12 school costume adaptation; female uniform uses the requested short school skirt; no further character/design changes requested at this gate.
- **Approved camera direction:** elevated top-down / 3-quarter perspective based on the user's environment reference; exact numeric angle/zoom remains an implementation test parameter.
- **Approved animation/gameplay direction:** readable four-direction gameplay views, idle/walk/interaction states, exploration → interaction → mission → challenge → feedback → debrief → XP/progress → unlock.
- **Camera / Character Gameplay Specification v1: APPROVED by user on 14 August 2026.** `phase-3/world-1-camera-character-gameplay-spec-v1.md`
- **Mobile input direction: APPROVED by user on 14 August 2026 — contextual virtual analog stick, hidden while idle, shown during active touch movement, supporting smooth diagonal steering and turning while already moving.**
- **Camera + Character visual gameplay prototype: IMPLEMENTED; contextual analog movement implemented.** `prototype/bahasa-indonesia/camera-character-prototype.html`
- **Camera + Character Visual QA v1: PASS — user live browser/device verified on 14 August 2026.** `phase-3/world-1-camera-character-visual-qa-v1.md`
- QA record: `Alur Kerja Proyek/PROJECT LOG/qa/001-camera-character-visual-qa-pass.md`
- Decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/007-camera-character-visual-qa-approved.md`
- **Mission System follows Visual QA in the Phase 3 sequence; no stage is skipped merely because it was previously undiscussed.**

### TKA / Academic Planning foundation
- **TKA evidence pass is current and design-only.** `phase-3/tka-subject-selection-evidence-v1.md`
- TKA terminology is locked: TKA is an assessment, not an additional school subject.
- Official evidence verifies 3 mandatory TKA subjects for SMA/MA/SMK (Bahasa Indonesia, Matematika, Bahasa Inggris) plus 2 selected choice subjects.
- Official TKA information states that assessment content considers applicable competencies/materials from Kurikulum Merdeka and Kurikulum 2013. This does **not** require rebuilding a separate Kurikulum 2013 curriculum.
- **TKA Preparation / Academic Planning foundation v1 created.** `phase-3/tka-study-path-foundation-v1.md`
- **TKA subject catalogue foundation v1 created.** `phase-3/tka-subject-catalog-foundation-v1.json`
- **Approved Academic Planning Office structure:** School → Classrooms / Academic Office → Study Planning → Mandatory + Choice; Mandatory contains Bahasa Indonesia, Matematika, Bahasa Inggris; Choice contains Choice Slot 1 and Choice Slot 2.
- The future game may contain an Academic Planning Office with mandatory subjects, two selected choice slots, locked unselected rooms, progression gates, and optional mastery gates.
- This is a **game design foundation only**. It is not official TKA registration and does not yet encode final curriculum/subject-room rules.
- SMK program-specific catalogue reconciliation remains `pending` before it can become a final game rule.

## 1. Tujuan utama
Membangun game edukasi kelas XII berbasis browser untuk membantu persiapan ujian, dimulai dari Bahasa Indonesia dan dapat diperluas ke mata pelajaran lain.

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
- **TKA preparation is an extension layer, not a replacement for the main curriculum/content architecture.**

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
10. Untuk TKA preparation, gunakan official TKA assessment framework sebagai assessment specification; gunakan Student Book/Teacher Guide sebagai learning-content sources; jangan menganggap TKA sebagai buku pelajaran baru.

## 4. Arsitektur konten
Sumber Buku → Knowledge Base → Exam Blueprint → Golden Dataset → Question Renderer → Game Mechanics → Training / Exam Simulation.

Untuk future TKA subjects:
Official TKA Framework + applicable curriculum intersection + Student Book/Teacher Guide → Subject Knowledge Base → Subject Blueprint → Controlled Question Pipeline.

## 5. Arsitektur pengalaman
- World 1 — Career Mission
- World 2 — Film Detective
- World 3 — Drama Stage
- World 4 — Nusantara Explorer
- Semua world mengarah ke Final Exam dan analisis kelemahan siswa.
- Future Academic Planning Office can act as the subject-selection/planning hub before additional subject worlds are implemented.

## 6. Aturan perubahan
- Jangan mengubah keputusan yang sudah dikunci hanya karena teknologi baru terlihat menarik.
- Jika keputusan teknis mengancam tujuan akademik, tujuan akademik menang.
- Jika fitur tidak meningkatkan pembelajaran atau pengalaman bermain secara nyata, tunda.
- Prototype digunakan untuk membuktikan asumsi, bukan memperluas scope.
- Setiap fase menghasilkan artefak yang dapat diperiksa sebelum pindah fase.

## 7. PROTOKOL VERIFIKASI WAJIB
Setiap sesi baru, sinkronisasi repo, upload/perubahan file, atau keputusan baru:
1. Re-sync sumber asli; state percakapan lama dianggap stale.
2. Baca seluruh file dalam `Alur Kerja Proyek` satu per satu.
3. Baca artefak aktif yang relevan.
4. Pisahkan **Evidence**, **Implementation**, dan **Interpretation**.
5. Temuan material harus tertelusur ke file + nomor baris + potongan aktual bila line-level evidence tersedia; jangan mengarang lokasi.
6. Cross-validate klaim penting dengan sumber independen yang sesuai.
7. Jika ada konflik, nyatakan `confirmed`, `partially confirmed`, `conflicting`, atau `unverified`.
8. Setelah pekerjaan, verifikasi hasil dan simpan kejadian/keputusan penting di `Alur Kerja Proyek/PROJECT LOG/`.

## 8. Quality gate
- Provenance student-book dan teacher-guide terisi untuk seed.
- Answer shape, unique IDs, supported interaction types, dan renderer dispatch tervalidasi.
- Gameplay flow: soal → jawaban → feedback → XP → hasil.
- Source cross-validation Buku Siswa ↔ Buku Guru dilakukan pada seed.
- Controlled batch baru wajib melewati answer verification, pedagogical review, provenance audit, renderer compatibility, batch quality gate, dan live regression sebelum promosi.
- Visual gameplay gates requiring browser interaction remain `QA_PENDING` until user browser evidence exists; Camera + Character Visual QA v1 is now closed as PASS after user live playtest.
- **Mission System Prototype v1 QA / Regression Gate is now PASS by user-verified hosted/browser evidence and Mission System v1 is promoted.**
- TKA foundation/catalogue does not become a final subject-rule gate until authoritative subject mapping and game-design decisions are approved.

## 9. Batasan Phase 3
- Golden Dataset v1 tetap approved seed, bukan bank soal produksi massal.
- Mass generation tetap memerlukan QA batch dan provenance.
- Creative/open-ended assessment belum masuk renderer generik; rubric renderer dirancang bila diperlukan.
- Visual final, map, progression, karakter, mission system, dan RPG layer dibahas dalam GDD sebelum implementasi besar.
- Prototype expansion dimulai dari satu World slice sebelum empat world diperluas.
- Multiplayer, online accounts, complex 3D, real-time AI NPC, monetization, dan social features tidak masuk scope kecuali keputusan terdokumentasi membuktikan manfaatnya.
- TKA subject catalogue is a future expansion layer; do not build full subject worlds before the current World 1 gameplay architecture is validated.

## 10. Phase 3 GDD v1 — keputusan desain awal
- Core loop: Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check.
- Mode belajar: Learn, Training, Exam Simulation.
- Game progression dan learning progression dipisahkan.
- Final Exam internal: 40 soal / 60 menit / 10 per world / 8 easy / 22 medium / 10 hard; ini target desain internal, bukan komposisi ujian resmi.
- Hasil Final Exam menghasilkan weakness ranking dan Recommended Training.
- Challenge tetap content-driven dan data-driven.
- Browser-first, gratis, portable static build, maintainable content, professional UX.
- Mobile-first: touch-friendly, readable, responsive, no hover-only controls.

## 11. World 1 — Career Mission slice
- Mission `BI12-W01-M01`; sequence Mission Brief → Relevance Scan → Error Hunt → Application Review → Debrief.
- Seed items: `BI12-GOLD-001`, `BI12-GOLD-002`, `BI12-GOLD-009`.
- Mission map: `phase-3/world-1-mission-map.json`.
- Playable slice: `prototype/bahasa-indonesia/career-mission.html`.
- Runtime consumes approved JSON data and mission map; presentation code does not duplicate question IDs.
- Runtime uses mission reward configuration and randomizes challenge/option order; answer evaluation uses answer value.
- User live playtest verified challenge rendering, correct/wrong feedback, explanation/source verification, randomized order, and clear multi-select instructions.

## 12. World 1 expansion and promotion
- A–C v1.1 and D–F v1.1 passed their documented independent review, revision, provenance, renderer compatibility, regression, and promotion gates.
- A–C approved pool: `phase-3/world-1-approved-content-v1.1.json`.
- D–F approved pool: `phase-3/world-1-approved-content-d-f-v1.1.json`.
- Approved pools are additive/versioned; Golden Dataset v1 is not overwritten.
- A–F integrated regression PASS: 18/18 approved IDs; A–C 900 XP + D–F 900 XP; feedback/explanation PASS.
- Controlled student-facing integration `BI12-W01-M02` uses six explicit approved IDs through `phase-3/world-1-controlled-expansion-v1.1.json` and `prototype/bahasa-indonesia/world-1-expansion.html`.
- Difficulty labels remain provisional until empirical production analytics are available.
- Specialized document-inspection UX remains a later technical task and does not block current approved content.

## 13. QA findings resolved in World 1
- Mission-map bypass fixed.
- Completion-XP mismatch fixed.
- Unsupported `document_inspection` seed support fixed.
- Static challenge order and static answer-option order fixed.
- Multi-select instruction ambiguity fixed.
- Regression harness data-resolution and final-navigation bugs fixed.
- Controlled expansion XP defect fixed and user-verified: 6/6 = 700 XP.

## 14. GitHub Pages — browser playtest path
- Deployment workflow: `.github/workflows/pages.yml`.
- Root launcher: `/index.html`.
- Hosted launcher: `https://rifkiaditya04.github.io/rpg-kelas-XII/`.
- GitHub Actions deployment has been verified successfully.
- Do not use GitHub `blob/main/...` URLs as the game runtime; those are source-code views.
- After every runtime change, verify the new Pages deployment succeeds before live regression.

## 15. Final-release cleanup rule
- Development-status text `Seed tervalidasi melalui quality gate konten dan renderer data-driven. Ini tetap micro-prototype, bukan desain visual final.` is intentionally retained during prototype/QA.
- Do not remove it yet.
- Remove it only during final release-cleanup after the entire game passes final QA and is declared ready for distribution.

## 16. Current Phase 3 decision trail
- Visual Direction v1 — APPROVED.
- Map / World Structure v1 — APPROVED.
- Character Design v1 — SUPERSEDED.
- Character Design v2 — **APPROVED 14 August 2026**.
- Camera / Character Gameplay Specification v1 — **APPROVED 14 August 2026**.
- **Mobile input direction — APPROVED 14 August 2026: contextual virtual analog stick, hidden while idle and visible only during active touch movement; supports smooth diagonal steering and turning without requiring the character to stop.**
- **Camera + Character visual gameplay prototype — UPDATED; contextual analog movement implemented.**
- **Camera + Character Visual QA v1 — PASS 14 August 2026, user live browser/device verified.**
- QA record: `Alur Kerja Proyek/PROJECT LOG/qa/001-camera-character-visual-qa-pass.md`.
- Decision record: `Alur Kerja Proyek/PROJECT LOG/decisions/007-camera-character-visual-qa-approved.md`.
- TKA subject-selection evidence — verified from current official sources; game subject-gating remains a design hook pending Mission/Progression System decisions.
- **TKA Preparation / Academic Planning foundation v1 — DOCUMENTED; not yet implemented as final student-facing rules.**
- **TKA subject catalogue foundation v1 — DOCUMENTED; current SMK program-specific catalogue remains pending reconciliation.**
- **Academic Planning Office structure — APPROVED as a game-design foundation:** School → Classrooms / Academic Office → Study Planning → Mandatory + Choice; Mandatory = Bahasa Indonesia, Matematika, Bahasa Inggris; Choice = Choice Slot 1 + Choice Slot 2.
- User's locked subject-room idea is recorded as a design hook: selection gates, progression gates, and optional mastery gates will be designed during Mission/Progression System work.
- **Mission System Specification v1 — CREATED and verified.** `phase-3/world-1-mission-system-specification-v1.md`
- **Controlled World 1 Mission System Prototype v1 — IMPLEMENTED and promoted after user-verified hosted/browser regression PASS.** `phase-3/world-1-mission-system-prototype-v1.json`, `phase-3/world-1-mission-system-prototype-v1-dataset.json`, `prototype/bahasa-indonesia/mission-system-prototype-v1.html`.
- **Mission System QA / Regression Gate — PASS; revised v1 scope user-verified in hosted browser.**
- **Mission System v1 — APPROVED / PROMOTED.** `Alur Kerja Proyek/PROJECT LOG/012-Mission-System-v1-Promotion.md`
- **Below-70% scope decision — APPROVED: Mission System v1 uses Retry / Remedial; dedicated Training Room is deferred to Progression / RPG Layer.** `Alur Kerja Proyek/PROJECT LOG/011-Mission-System-QA-below-70-retry-correction.md`

## 17. REQUIRED WORK SESSION PROTOCOL
Operational procedure is also archived in `Alur Kerja Proyek/REQUIRED-WORK-SESSION-PROTOCOL.md`.

Before every new work session, repo sync, upload/change, or decision:
**re-sync source → read every file in `Alur Kerja Proyek` → read relevant active artifacts → verify Master Control → Evidence / Implementation / Interpretation → cross-validation → execute applicable gate.**

After work:
**verify result → update QA artifacts → update Master Control when status/decision/defect changes → store important decisions in Project Log.**

Do not repeat completed work without first searching the repository and documenting why a new version is necessary. Browser-required gates remain `QA_PENDING` until actual hosted browser evidence exists.
