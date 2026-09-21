# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — v1.1 CONTINUATION

> **MASTER CONTROL v1.1 adalah LANJUTAN RESMI dari `Alur Kerja Proyek/00-MASTER-CONTROL.md`.**
> Dokumen ini tidak menggantikan, menghapus, atau membatalkan Master Control pertama. Untuk setiap sesi kerja, keputusan, perubahan, implementasi, QA, atau promotion, **WAJIB membaca lengkap `00-MASTER-CONTROL.md` terlebih dahulu dan kemudian membaca lengkap `00-MASTER-CONTROL-v1.1.md` ini**.

## 0. Aturan kontinuitas
- `00-MASTER-CONTROL.md` = Master Control utama / bagian pertama.
- `00-MASTER-CONTROL-v1.1.md` = kelanjutan resmi / bagian kedua.
- Keduanya bersama-sama membentuk Master Control aktif proyek.
- Jangan membuat ringkasan pengganti yang menyebabkan pembacaan Master Control pertama dilewati.
- Jika ada konflik, tandai `conflicting`, cross-validate artefak sumber, dan dokumentasikan resolusinya di PROJECT LOG.

## 1. Progression v1 — PROMOTED / APPROVED
- Progression System Specification v1: APPROVED.
- Controlled World 1 Progression Prototype v1: IMPLEMENTED.
- Progression QA / Regression Gate: PASS — user-verified live browser evidence.
- Progression v1: PROMOTED / APPROVED.
- Evidence includes fresh private-browser state, completion XP, Mission Complete, learning evidence accumulation, accuracy, anti-farming, unlock eligibility, and persistence.
- Training Room was deferred from Mission System v1 and is now implemented as the next controlled RPG-layer component.
- No universal player-level curve or mastery threshold is approved without a separate design decision.

## 2. RPG Layer v1 — PROMOTED / APPROVED
- World 1 RPG Layer & Training Room Specification v1: APPROVED.
- Controlled World 1 RPG Layer Prototype v1: IMPLEMENTED.
- Controlled World 1 RPG Layer QA / Regression Gate: **PASS — user-verified browser evidence**.
- World 1 RPG Layer v1: **PROMOTED / APPROVED**.
- Promotion record: `Alur Kerja Proyek/PROJECT LOG/022-World-1-RPG-Layer-Promotion-v1.md`.
- QA record: `Alur Kerja Proyek/PROJECT LOG/021-World-1-RPG-Layer-QA-Gate-PASS-and-Promotion-v1.md`.
- Promoted integration scope: Explore → NPC/Context → Learn → Mission → Progression → Learning Weakness / Training Hook.
- Verified runtime boundaries: Learn/context does not mutate XP or Mission Complete; Training Hook does not award XP; Retry remains distinct from Training Room; mission/progression state persists and M01 → M02 unlock remains deterministic.

## 3. Training Room v1 — PROMOTED / APPROVED
- World 1 Training Room Specification v1: **APPROVED**.
- Approval record: `Alur Kerja Proyek/PROJECT LOG/024-Training-Room-Specification-v1-Approval.md`.
- Controlled Training Room Prototype v1: **IMPLEMENTED**.
- Implementation record: `Alur Kerja Proyek/PROJECT LOG/025-Training-Room-Prototype-v1-Implementation.md`.
- Prototype: `prototype/bahasa-indonesia/world-1-training-room-prototype-v1.html`.
- Progression Training Hook integration: `prototype/bahasa-indonesia/world-1-progression-prototype-v1.html`.
- Training Room QA / Regression Gate: **PASS — user-verified live browser evidence**.
- QA record: `Alur Kerja Proyek/PROJECT LOG/026-Training-Room-QA-Gate.md`.
- **Training Room v1: PROMOTED / APPROVED for the controlled World 1 prototype scope.**
- Promotion record: `Alur Kerja Proyek/PROJECT LOG/027-Training-Room-v1-Promotion.md`.
- Training Room must not become an XP-farming mechanism or duplicate Mission completion rewards.
- Training Room is competency/evidence-oriented rather than a random extra-quiz loop.
- Retry/Remedial remains distinct from Training Room.
- Final mastery thresholds/algorithms remain unapproved until separately specified and approved.

## 4. Training Room implementation boundary
Implemented and live-verified flow:
`Learning Weakness → Training Hook → Competency Context → Explanation → Guided Example → Practice → Return to Mission/Progression`.

Verified runtime boundaries:
- Training Room awards 0 additional XP.
- Training Room does not increment Mission Complete.
- Existing progression state is preserved.
- Existing learning evidence is not deleted.
- Competency, Explanation/Pembekalan, Guided Example/Contoh Terbimbing, Practice, and Return to Mission were verified by live browser playtest.
- Normal-browser persistence retains previous progression history; this is expected behavior. Fresh-state testing uses a private/incognito browser.
- No account/backend persistence is introduced.
- This is a controlled prototype, not final visual presentation.

## 5. Current scope determination
The post-RPG promotion scope was formally determined as Training Room Specification v1, then approved by the user. The specification was implemented, passed the core live QA checks, and was subsequently promoted through a separate documented promotion gate.

**Current status: Training Room v1 PROMOTED / APPROVED.**

The next scope has now been determined through the mandatory protocol as a **World 1 Kurikulum Merdeka Standard Chapter 1 Content Rebaseline** before any new question-bank expansion.

Reason: the repository's current standard Kurikulum Merdeka Bahasa Indonesia Class XII Student Book (`Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`) defines Chapter 1 around surat resmi and related communication activities, while the existing World 1 A–F expansion provenance artifacts were built from an older Tingkat Lanjut source set centered on surat lamaran kerja/CV. Existing approved prototype content is preserved for regression/history, but new main-game content must not silently continue the old source basis.

Determination record: `Alur Kerja Proyek/PROJECT LOG/028-World-1-Next-Scope-Determination.md`.
Rebaseline proposal: `phase-3/world-1-kurikulum-merdeka-chapter-1-content-rebaseline-v1.md`.

**Current next gate: USER REVIEW / APPROVAL of World 1 Kurikulum Merdeka Standard Chapter 1 Content Rebaseline v1.**

## 6. Existing project boundaries remain active
- Golden Dataset v1 remains immutable.
- Approved A–F content remains additive/versioned and is not deleted by the rebaseline.
- Mission System v1 remains approved/promoted.
- Progression v1 remains approved/promoted.
- Visual Direction, Map/World Structure, Character Design v2, Camera/Character Gameplay Specification, and Visual QA remain approved according to Master Control first.
- TKA Academic Planning remains a design foundation and is not replaced by the current Training Room or World 1 content rebaseline.
- Light RPG Educational Platform remains the project direction; the project is not reduced to a quiz with an RPG skin.
- K13 remains reserved for the future TKA Preparation / Academic Planning intersection where supported by the official TKA framework; it is not the automatic source for new main-game World 1 content.

## 7. Mandatory work-session protocol
Every future session:
**re-sync → read all `Alur Kerja Proyek` → read complete `00-MASTER-CONTROL.md` → read complete `00-MASTER-CONTROL-v1.1.md` → verify latest artifacts → Evidence / Implementation / Interpretation → cross-validation → execute.**

After work:
**verify result → document event/decision/bug/QA in PROJECT LOG → update relevant Master Control without deleting history.**

## 8. Promotion gate discipline
No component may be marked PROMOTED solely because source code looks correct. Promotion requires implementation evidence, relevant deterministic/source QA, runtime evidence when required, documented PASS, a PROJECT LOG promotion record, and traceable Master Control status.

## 9. Current milestone
**World 1 RPG Layer v1: PROMOTED / APPROVED.**

**World 1 Training Room v1: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Batch 01: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Teaching / NPC / Remedial Rebinding: RUNTIME QA PASS.**

**World 1 KM Chapter 1 integrated learning loop: RUNTIME QA PASS.**

**World 1 KM Chapter 1 Batch 02 E1–E3: PROMOTED / APPROVED as additive/versioned content.**

**Learning Evidence production boundary: raw JSON hidden in final student-facing UI; underlying evidence state retained.**

**Approved KM Chapter 1 UI reference archived; 3D NPC presentation direction recorded without replacing the canonical character-design baseline.**

**KM02-E4 multi_select renderer capability: RUNTIME QA PASS — user-verified hosted browser evidence.**

**KM02-E4 original content v1.0: reviewed and superseded by additive reviewed draft v1.1; not canonical or promoted.**

**KM02-E4 academic/pedagogical/provenance review: PASS after controlled wording refinement.**

**KM02-E4 v1.1 static/schema QA: PASS; not canonical or promoted.**

## 10. Current next gate — 2026-08-21 continuation
The previous KM integration browser gate is closed by user-verified evidence recorded in `Alur Kerja Proyek/PROJECT LOG/056-World-1-KM-Chapter-1-Integrated-Learning-Loop-QA-PASS.md`.

Batch 02 E1–E3 is promoted through `Alur Kerja Proyek/PROJECT LOG/057-World-1-KM-Chapter-1-Batch-02-E1-E3-Final-QA-and-Promotion.md`.

The independent `multi_select` renderer capability gate is closed by user browser evidence recorded in `Alur Kerja Proyek/PROJECT LOG/058-World-1-KM-Chapter-1-Multi-Select-Renderer-Capability-QA.md`: the synthetic fixture accepted the intended two-selection combination and completed 1/1.

KM02-E4 v1.1 has passed the academic, pedagogical, provenance, originality, and schema/static review gates. Review is recorded in `Alur Kerja Proyek/PROJECT LOG/059-World-1-KM-Chapter-1-KM02-E4-Academic-Pedagogical-Provenance-Review.md`; static QA is recorded in `phase-3/world-1-km-chapter-1-original-content-batch-02-e4-draft-qa-v1.1.md`.

The production-shaped E4 QA entrypoint was created in `prototype/bahasa-indonesia/km-chapter-1-batch-02-e4-production-qa.html` and documented in `Alur Kerja Proyek/PROJECT LOG/060-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA.md`.

**KM02-E4 production-shaped browser regression: PASS — user-verified hosted browser evidence.**

QA record: `Alur Kerja Proyek/PROJECT LOG/061-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA-PASS.md`.

Evidence: DATA 1 item PASS; ID KM02-E4 PASS; multi_select contract 5 options / 3 canonical answers PASS; Student Book + Teacher Guide provenance PASS; actual KM renderer load PASS; browser runtime completed with 1/1 correct, 100% accuracy, and 200 XP.

**Current next gate: KM02-E4 final QA → separate additive promotion decision.**

Rules for this gate:
- E4 remains non-canonical until the promotion decision is documented;
- do not modify Golden Dataset v1;
- do not delete or rewrite approved historical prototypes;
- preserve additive/versioned promotion for new KM content;
- keep final production UI work separate from controlled content/runtime QA.

## 11. Production presentation boundary
The approved KM UI reference is an archived presentation reference, not yet a final production UI implementation.

Current controlled prototype may retain QA/debug instrumentation. Before final student-facing release:
- raw Learning Evidence JSON must be hidden from normal presentation;
- concise human-readable learning state may be shown where pedagogically useful;
- the underlying evidence contract must remain intact;
- the 3D NPC presentation direction may be implemented through the appropriate visual/gameplay gate;
- final visual implementation still requires its own visual QA/promotion evidence.

## 12. KM02-E4 production-shaped QA entrypoint — 2026-08-21
Production-shaped QA entrypoint created:
`prototype/bahasa-indonesia/km-chapter-1-batch-02-e4-production-qa.html`

Implementation commit: `c3cfd9db29b1c6683080ddcfe5af529d50873698`.
Documentation: `Alur Kerja Proyek/PROJECT LOG/060-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA.md`.

The entrypoint uses the reviewed E4 v1.1 draft and the established actual KM renderer (`km-batch-01-runtime.html` + `km-batch-01-renderer-v1.js`) without modifying the renderer. Static checks cover dataset load, ID, multi-select contract, and provenance before the runtime iframe is loaded.

The runtime gate was subsequently closed by user-verified hosted browser evidence. See PROJECT LOG 061.

## 13. KM02-E4 production-shaped browser QA PASS — 2026-08-21
User-verified hosted browser evidence closed the runtime gate for E4 v1.1.

Observed QA checks:
- DATA: PASS — 1 item.
- IDS: PASS — KM02-E4.
- CONTRACT: PASS — `multi_select`, 5 options, 3 canonical answers.
- PROVENANCE: PASS — Student Book + Teacher Guide fields present.
- LOAD: PASS — actual KM renderer loaded with E4 v1.1 draft dataset.
- RUNTIME: PASS — canonical multi-select combination accepted; mission result 1/1 correct, 100% accuracy, 200 XP.

QA record: `Alur Kerja Proyek/PROJECT LOG/061-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA-PASS.md`.

Interpretation: E4 v1.1 has now passed its production-shaped browser regression. This is runtime QA evidence only; it does not itself promote the content to canonical status.

## 14. KM02-E4 final QA and additive promotion — 2026-08-21
Final QA and promotion record: `Alur Kerja Proyek/PROJECT LOG/062-World-1-KM-Chapter-1-KM02-E4-Final-QA-and-Promotion.md`.

**KM02-E4 v1.1: PROMOTED / APPROVED as additive/versioned World 1 content.**

Canonical additive artifact:
`phase-3/world-1-km-chapter-1-original-content-batch-02-e4-canonical-v1.1.json`

Approved content manifest:
`phase-3/world-1-km-chapter-1-approved-content-batch-02-e4-v1.1.json`

Promotion evidence includes academic alignment, Teacher Guide cross-validation, pedagogical review, originality, provenance, schema/static QA, renderer capability QA, and user-verified production-shaped browser regression.

Promotion commits:
- Canonical E4: `06bc9ea5077832dd5d72a7d599a2a1b5c1d3bf1c`
- Approved E4 manifest: `9b11eb6a7b04e33fe0dc560d85c64ed2213268f7`
- Promotion record: `d7f3885a4b0c6733568a802e151de16791c6d798`

Boundary retained:
- Golden Dataset v1 remains immutable.
- E1–E3 remain unchanged.
- Historical E4 v1.0 and reviewed v1.1 draft remain preserved.
- Renderer source remains unchanged during promotion.
- This is controlled content/runtime promotion, not final visual/UI or full-release approval.

**Current next gate: determine the next World 1 KM Chapter 1 scope from the active Challenge Ledger / Master Control; do not auto-generate E5 without re-sync and scope determination.**

## 15. F–G Renderer Regression continuation — 2026-08-23

This section supersedes the need for a separate Master Control v1.2 file. It records the F–G continuation after the KM02-E4 promotion while preserving the full history above.

### 15.1 F–G preconditions and approved history
- PROJECT LOG 063 established F–G as a renderer-capability/content-design gate, not a free-text renderer expansion.
- PROJECT LOG 064 established the synthetic F–G constrained-production renderer capability lane.
- PROJECT LOG 065 corrected the synthetic capability fixture reward configuration to include a 100 XP completion bonus; the corrected capability run was then documented as 2/2, 100%, 300 XP.
- PROJECT LOG 066 closed the F–G renderer capability gate as PASS. Its separate generic completion-reward-threshold issue remains OPEN and must not be conflated with answer recognition.
- PROJECT LOG 067–072 established detailed F–G content coverage, original teaching/dialogue, originality/provenance review, original question design, schema/answer QA, and the balanced controlled fixture.
- PROJECT LOG 073 closed controlled fixture validation as PASS.
- PROJECT LOG 074 defined renderer regression R1/R2/R3 and kept the gate RUNTIME QA PENDING.

### 15.2 F–G controlled regression boundary
- Controlled fixture: `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.json`.
- Fixture remains QA-only; Golden Dataset v1 remains immutable.
- Fixture canonical positions are A=1/B=2/C=2/D=1.
- Regression adapter is mechanical QA infrastructure only; it must not be promoted as production content.
- The adapter currently sets `xp_per_correct=100` and `mission_completion_xp=0` intentionally so this renderer answer-mapping regression does not exercise the separate completion-reward contract.
- Therefore **6/6 = 600 XP in this adapter is intentional QA configuration, not the project's production mission reward contract**. The established production-shaped mission contract remains 100 XP per correct item plus 100 XP completion when the applicable mission completion gate is met.
- A wrong-path 0/6 result with 0 XP in this adapter is likewise expected because completion reward is deliberately disabled in this isolated renderer regression.

### 15.3 Browser evidence now supplied by user
User has executed the hosted regression cases:
- **R1:** canonical path → 6/6, 100% accuracy, 600 XP.
- **R2:** non-canonical path → 0/6, 0% accuracy, 0 QA XP.
- **R3:** after using the regression page's `Reload runtime`, canonical path → 6/6, 100% accuracy, 600 QA XP.

These results confirm canonical answer recognition, non-canonical rejection, and replay isolation for the tested runtime path.

### 15.4 Remaining renderer-regression conflict — RESOLVED BY V1.2 POLICY
The v1.2 regression specification explicitly states that fixture order is deterministic for QA data integrity while the actual approved renderer may shuffle visible options. Regression evaluates canonical answer identity/value rather than transient button position. User browser evidence confirms R1/R2/R3 behavior under this policy.

Therefore the prior deterministic-visible-option-order conflict is **CLOSED for the F–G v1.2 regression scope**. No production renderer change was made.

### 15.5 F–G language/content finding — RESOLVED IN V1.2
The v1.2 fixture is explicitly `id-ID`, and all six revised QA items are authored in Bahasa Indonesia. The revised source mapping is tied to the KM Chapter 1 F/G activities and preserves original wording. The prior v1.1 language inconsistency is therefore **CLOSED for the v1.2 QA scope**.

### 15.6 V1.2 static gate and final browser regression — PASS
User supplied fresh hosted evidence:
- Static gate: **PASS** — 6 Indonesian items, QA-only flags, semantic canonical-answer mapping, adapter fidelity, and QA reward boundary verified.
- R1: **PASS** — 6/6, 100%, 600 QA XP.
- R2: **PASS** — 0/6, 0%, 0 QA XP, no false positive observed.
- R3: **PASS** — after `Reload runtime`, canonical replay returned 6/6, 100%, 600 QA XP.

The v1.2 fixture and adapter remain QA-only; Golden Dataset and production renderer remain untouched.

### 15.7 Final gate decision
**F–G Renderer Regression v1.2-ID: CLOSED / PASS.**

Closure record: `Alur Kerja Proyek/PROJECT LOG/085-World-1-KM-Chapter-1-F-G-v1.2-Renderer-Regression-CLOSED.md`.
Commit: `cd404a7e9b69c30308df49865c36591e61112a8e`.

Scope of closure:
- static gate PASS;
- R1/R2/R3 PASS;
- source-mapped Indonesian QA fixture verified;
- QA reward boundary preserved;
- Golden Dataset unchanged;
- production renderer unchanged.

This closure does **not** promote F–G into production content and does **not** close the separate generic >=70% reward-contract issue.

### 15.8 Next mandatory step
Determine the next F–G production/content step from the active Master Control and Challenge Ledger. Any promotion must remain additive/versioned, retain the KM Student Book + Teacher Guide provenance boundary, and require its own documented promotion evidence and user approval where required.

## 16. Visual Novel Architecture Pivot & Chapter 1 Final Integration — 2026-09-15

### 16.1 Architecture Promotion (PROMOTED / APPROVED)
The project has formally pivoted from the 2D Top-Down Isometric RPG (walking/collision engine) to a **Premium Visual Novel (VN) Engine**, strictly adhering to UI Reference 2.
- **Reasoning**: The VN format is highly scalable for massive curriculum content injection and provides a more polished, focused educational experience.
- **Engine**: `prototype/bahasa-indonesia/world-1-rpg-v2.html`
- **Documentation**: `Alur Kerja Proyek/PROJECT LOG/096-VN-Architecture-Pivot-and-Onboarding-Flow.md`.

### 16.2 Chapter 1 Canonical Wiring
All "candidate" and "draft" QA datasets have been removed from the live prototype engine. The VN Engine now formally consumes the **100% completed Canonical Batches** for Chapter 1:
- Misi 1: Batch 01 (A-C)
## 8. Promotion gate discipline
No component may be marked PROMOTED solely because source code looks correct. Promotion requires implementation evidence, relevant deterministic/source QA, runtime evidence when required, documented PASS, a PROJECT LOG promotion record, and traceable Master Control status.

## 9. Current milestone
**World 1 RPG Layer v1: PROMOTED / APPROVED.**

**World 1 Training Room v1: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Batch 01: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Teaching / NPC / Remedial Rebinding: RUNTIME QA PASS.**

**World 1 KM Chapter 1 integrated learning loop: RUNTIME QA PASS.**

**World 1 KM Chapter 1 Batch 02 E1–E3: PROMOTED / APPROVED as additive/versioned content.**

**Learning Evidence production boundary: raw JSON hidden in final student-facing UI; underlying evidence state retained.**

**Approved KM Chapter 1 UI reference archived; 3D NPC presentation direction recorded without replacing the canonical character-design baseline.**

**KM02-E4 multi_select renderer capability: RUNTIME QA PASS — user-verified hosted browser evidence.**

**KM02-E4 original content v1.0: reviewed and superseded by additive reviewed draft v1.1; not canonical or promoted.**

**KM02-E4 academic/pedagogical/provenance review: PASS after controlled wording refinement.**

**KM02-E4 v1.1 static/schema QA: PASS; not canonical or promoted.**

## 10. Current next gate — 2026-08-21 continuation
The previous KM integration browser gate is closed by user-verified evidence recorded in `Alur Kerja Proyek/PROJECT LOG/056-World-1-KM-Chapter-1-Integrated-Learning-Loop-QA-PASS.md`.

Batch 02 E1–E3 is promoted through `Alur Kerja Proyek/PROJECT LOG/057-World-1-KM-Chapter-1-Batch-02-E1-E3-Final-QA-and-Promotion.md`.

The independent `multi_select` renderer capability gate is closed by user browser evidence recorded in `Alur Kerja Proyek/PROJECT LOG/058-World-1-KM-Chapter-1-Multi-Select-Renderer-Capability-QA.md`: the synthetic fixture accepted the intended two-selection combination and completed 1/1.

KM02-E4 v1.1 has passed the academic, pedagogical, provenance, originality, and schema/static review gates. Review is recorded in `Alur Kerja Proyek/PROJECT LOG/059-World-1-KM-Chapter-1-KM02-E4-Academic-Pedagogical-Provenance-Review.md`; static QA is recorded in `phase-3/world-1-km-chapter-1-original-content-batch-02-e4-draft-qa-v1.1.md`.

The production-shaped E4 QA entrypoint was created in `prototype/bahasa-indonesia/km-chapter-1-batch-02-e4-production-qa.html` and documented in `Alur Kerja Proyek/PROJECT LOG/060-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA.md`.

**KM02-E4 production-shaped browser regression: PASS — user-verified hosted browser evidence.**

QA record: `Alur Kerja Proyek/PROJECT LOG/061-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA-PASS.md`.

Evidence: DATA 1 item PASS; ID KM02-E4 PASS; multi_select contract 5 options / 3 canonical answers PASS; Student Book + Teacher Guide provenance PASS; actual KM renderer load PASS; browser runtime completed with 1/1 correct, 100% accuracy, and 200 XP.

**Current next gate: KM02-E4 final QA → separate additive promotion decision.**

Rules for this gate:
- E4 remains non-canonical until the promotion decision is documented;
- do not modify Golden Dataset v1;
- do not delete or rewrite approved historical prototypes;
- preserve additive/versioned promotion for new KM content;
- keep final production UI work separate from controlled content/runtime QA.

## 11. Production presentation boundary
The approved KM UI reference is an archived presentation reference, not yet a final production UI implementation.

Current controlled prototype may retain QA/debug instrumentation. Before final student-facing release:
- raw Learning Evidence JSON must be hidden from normal presentation;
- concise human-readable learning state may be shown where pedagogically useful;
- the underlying evidence contract must remain intact;
- the 3D NPC presentation direction may be implemented through the appropriate visual/gameplay gate;
- final visual implementation still requires its own visual QA/promotion evidence.

## 12. KM02-E4 production-shaped QA entrypoint — 2026-08-21
Production-shaped QA entrypoint created:
`prototype/bahasa-indonesia/km-chapter-1-batch-02-e4-production-qa.html`

Implementation commit: `c3cfd9db29b1c6683080ddcfe5af529d50873698`.
Documentation: `Alur Kerja Proyek/PROJECT LOG/060-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA.md`.

The entrypoint uses the reviewed E4 v1.1 draft and the established actual KM renderer (`km-batch-01-runtime.html` + `km-batch-01-renderer-v1.js`) without modifying the renderer. Static checks cover dataset load, ID, multi-select contract, and provenance before the runtime iframe is loaded.

The runtime gate was subsequently closed by user-verified hosted browser evidence. See PROJECT LOG 061.

## 13. KM02-E4 production-shaped browser QA PASS — 2026-08-21
User-verified hosted browser evidence closed the runtime gate for E4 v1.1.

Observed QA checks:
- DATA: PASS — 1 item.
- IDS: PASS — KM02-E4.
- CONTRACT: PASS — `multi_select`, 5 options, 3 canonical answers.
- PROVENANCE: PASS — Student Book + Teacher Guide fields present.
- LOAD: PASS — actual KM renderer loaded with E4 v1.1 draft dataset.
- RUNTIME: PASS — canonical multi-select combination accepted; mission result 1/1 correct, 100% accuracy, 200 XP.

QA record: `Alur Kerja Proyek/PROJECT LOG/061-World-1-KM-Chapter-1-KM02-E4-Production-Shaped-Browser-QA-PASS.md`.

Interpretation: E4 v1.1 has now passed its production-shaped browser regression. This is runtime QA evidence only; it does not itself promote the content to canonical status.

## 14. KM02-E4 final QA and additive promotion — 2026-08-21
Final QA and promotion record: `Alur Kerja Proyek/PROJECT LOG/062-World-1-KM-Chapter-1-KM02-E4-Final-QA-and-Promotion.md`.

**KM02-E4 v1.1: PROMOTED / APPROVED as additive/versioned World 1 content.**

Canonical additive artifact:
`phase-3/world-1-km-chapter-1-original-content-batch-02-e4-canonical-v1.1.json`

Approved content manifest:
`phase-3/world-1-km-chapter-1-approved-content-batch-02-e4-v1.1.json`

Promotion evidence includes academic alignment, Teacher Guide cross-validation, pedagogical review, originality, provenance, schema/static QA, renderer capability QA, and user-verified production-shaped browser regression.

Promotion commits:
- Canonical E4: `06bc9ea5077832dd5d72a7d599a2a1b5c1d3bf1c`
- Approved E4 manifest: `9b11eb6a7b04e33fe0dc560d85c64ed2213268f7`
- Promotion record: `d7f3885a4b0c6733568a802e151de16791c6d798`

Boundary retained:
- Golden Dataset v1 remains immutable.
- E1–E3 remain unchanged.
- Historical E4 v1.0 and reviewed v1.1 draft remain preserved.
- Renderer source remains unchanged during promotion.
- This is controlled content/runtime promotion, not final visual/UI or full-release approval.

**Current next gate: determine the next World 1 KM Chapter 1 scope from the active Challenge Ledger / Master Control; do not auto-generate E5 without re-sync and scope determination.**

## 15. F–G Renderer Regression continuation — 2026-08-23

This section supersedes the need for a separate Master Control v1.2 file. It records the F–G continuation after the KM02-E4 promotion while preserving the full history above.

### 15.1 F–G preconditions and approved history
- PROJECT LOG 063 established F–G as a renderer-capability/content-design gate, not a free-text renderer expansion.
- PROJECT LOG 064 established the synthetic F–G constrained-production renderer capability lane.
- PROJECT LOG 065 corrected the synthetic capability fixture reward configuration to include a 100 XP completion bonus; the corrected capability run was then documented as 2/2, 100%, 300 XP.
- PROJECT LOG 066 closed the F–G renderer capability gate as PASS. Its separate generic completion-reward-threshold issue remains OPEN and must not be conflated with answer recognition.
- PROJECT LOG 067–072 established detailed F–G content coverage, original teaching/dialogue, originality/provenance review, original question design, schema/answer QA, and the balanced controlled fixture.
- PROJECT LOG 073 closed controlled fixture validation as PASS.
- PROJECT LOG 074 defined renderer regression R1/R2/R3 and kept the gate RUNTIME QA PENDING.

### 15.2 F–G controlled regression boundary
- Controlled fixture: `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.json`.
- Fixture remains QA-only; Golden Dataset v1 remains immutable.
- Fixture canonical positions are A=1/B=2/C=2/D=1.
- Regression adapter is mechanical QA infrastructure only; it must not be promoted as production content.
- The adapter currently sets `xp_per_correct=100` and `mission_completion_xp=0` intentionally so this renderer answer-mapping regression does not exercise the separate completion-reward contract.
- Therefore **6/6 = 600 XP in this adapter is intentional QA configuration, not the project's production mission reward contract**. The established production-shaped mission contract remains 100 XP per correct item plus 100 XP completion when the applicable mission completion gate is met.
- A wrong-path 0/6 result with 0 XP in this adapter is likewise expected because completion reward is deliberately disabled in this isolated renderer regression.

### 15.3 Browser evidence now supplied by user
User has executed the hosted regression cases:
- **R1:** canonical path → 6/6, 100% accuracy, 600 XP.
- **R2:** non-canonical path → 0/6, 0% accuracy, 0 QA XP.
- **R3:** after using the regression page's `Reload runtime`, canonical path → 6/6, 100% accuracy, 600 QA XP.

These results confirm canonical answer recognition, non-canonical rejection, and replay isolation for the tested runtime path.

### 15.4 Remaining renderer-regression conflict — RESOLVED BY V1.2 POLICY
The v1.2 regression specification explicitly states that fixture order is deterministic for QA data integrity while the actual approved renderer may shuffle visible options. Regression evaluates canonical answer identity/value rather than transient button position. User browser evidence confirms R1/R2/R3 behavior under this policy.

Therefore the prior deterministic-visible-option-order conflict is **CLOSED for the F–G v1.2 regression scope**. No production renderer change was made.

### 15.5 F–G language/content finding — RESOLVED IN V1.2
The v1.2 fixture is explicitly `id-ID`, and all six revised QA items are authored in Bahasa Indonesia. The revised source mapping is tied to the KM Chapter 1 F/G activities and preserves original wording. The prior v1.1 language inconsistency is therefore **CLOSED for the v1.2 QA scope**.

### 15.6 V1.2 static gate and final browser regression — PASS
User supplied fresh hosted evidence:
- Static gate: **PASS** — 6 Indonesian items, QA-only flags, semantic canonical-answer mapping, adapter fidelity, and QA reward boundary verified.
- R1: **PASS** — 6/6, 100%, 600 QA XP.
- R2: **PASS** — 0/6, 0%, 0 QA XP, no false positive observed.
- R3: **PASS** — after `Reload runtime`, canonical replay returned 6/6, 100%, 600 QA XP.

The v1.2 fixture and adapter remain QA-only; Golden Dataset and production renderer remain untouched.

### 15.7 Final gate decision
**F–G Renderer Regression v1.2-ID: CLOSED / PASS.**

Closure record: `Alur Kerja Proyek/PROJECT LOG/085-World-1-KM-Chapter-1-F-G-v1.2-Renderer-Regression-CLOSED.md`.
Commit: `cd404a7e9b69c30308df49865c36591e61112a8e`.

Scope of closure:
- static gate PASS;
- R1/R2/R3 PASS;
- source-mapped Indonesian QA fixture verified;
- QA reward boundary preserved;
- Golden Dataset unchanged;
- production renderer unchanged.

This closure does **not** promote F–G into production content and does **not** close the separate generic >=70% reward-contract issue.

### 15.8 Next mandatory step
Determine the next F–G production/content step from the active Master Control and Challenge Ledger. Any promotion must remain additive/versioned, retain the KM Student Book + Teacher Guide provenance boundary, and require its own documented promotion evidence and user approval where required.

## 16. Visual Novel Architecture Pivot & Chapter 1 Final Integration — 2026-09-15

### 16.1 Architecture Promotion (PROMOTED / APPROVED)
The project has formally pivoted from the 2D Top-Down Isometric RPG (walking/collision engine) to a **Premium Visual Novel (VN) Engine**, strictly adhering to UI Reference 2.
- **Reasoning**: The VN format is highly scalable for massive curriculum content injection and provides a more polished, focused educational experience.
- **Engine**: `prototype/bahasa-indonesia/world-1-rpg-v2.html`
- **Documentation**: `Alur Kerja Proyek/PROJECT LOG/096-VN-Architecture-Pivot-and-Onboarding-Flow.md`.

### 16.2 Chapter 1 Canonical Wiring
All "candidate" and "draft" QA datasets have been removed from the live prototype engine. The VN Engine now formally consumes the **100% completed Canonical Batches** for Chapter 1:
- Misi 1: Batch 01 (A-C)
- Misi 2: Batch 02 (E4)
- Misi 3: Batch 02 (F-G)
- Misi 4: Batch 03 (H)

**Current next gate**: With Chapter 1 fully integrated into a stable, promoted VN architecture, the next step is determining the expansion scope (e.g., Chapter 2 Content Production).

## 17. VN Architecture: Pre-Mission Briefing & Automatic Remedial
Berdasarkan request dari sesi ini, arsitektur UI pada *Visual Novel Engine* telah diubah:
- **Pre-Mission Briefing (Pembekalan):** Sebelum soal dimulai, GUI memunculkan tombol "Buka Pembekalan". NPC akan menjelaskan target kompetensi dari materi sebelum tombol "Mulai Latihan Soal" muncul. Hal ini menegaskan kembali visi proyek sebagai *Educational Platform*, bukan sekadar kuis.
- **Automatic Remedial:** Batas kelulusan minimum (Passing Grade) adalah akurasi **70%**. Jika hasil pemain berada di bawah 70%, misi tersebut tidak dianggap selesai dan XP tidak diberikan. NPC akan otomatis muncul untuk menawarkan "Pembekalan Lanjutan (Remedial)".
- **Anti-Farming:** Pemain yang mengambil remedial tidak akan mendapatkan penambahan XP baru di atas XP dasar yang gagal. Mengulang misi yang sudah lulus (*Replay*) tidak akan mendapatkan XP tambahan, namun *akurasi tertinggi* akan diperbarui dan disimpan.

## 18. Visual Polish Postponement & Dialogue Rewrite Phase (2026-09-17)
Berdasarkan kesepakatan terbaru dengan *User*, pengerjaan komponen non-esensial berikut **DITUNDA** pelaksanaannya hingga seluruh pembuatan dan integrasi **Bank Soal** selesai:
- **Dialogue Polish:** Penulisan ulang skrip dialog NPC (agar lebih santai, humanis, dan mulus transisinya, misal: *handoff* dari Pemandu Digital ke Pembimbing Spesifik).
- **UI/UX Visual Polish:** Transformasi elemen antarmuka menjadi beranimasi 3D dan penambahan *background* imersif pada *renderer frame* soal.

Alasan penundaan:
- Mengedepankan penyelesaian materi (Bank Soal) sesuai prinsip *Alur Kerja Proyek*.
- Menghindari pengulangan kerja (*rework*) desain visual apabila arsitektur soal mengalami perubahan di bab-bab selanjutnya.

**Langkah Kerja Selanjutnya (Next Mandatory Step):**
Misi 5, 6, 7, dan 8 (Bab 2 - Teks Prosedur Kompleks) telah dihubungkan secara fungsional ke *Visual Novel Engine*. Namun, berdasar pada aturan *Promotion gate discipline* (Seksi 8), misi tersebut belum dapat dinyatakan *PROMOTED* tanpa bukti pengujian *Live Browser*. 
Maka langkah kerja selanjutnya adalah: **Menjalankan dan Merekam Hasil Runtime QA Browser untuk Bab 2 (Misi 5-8)**.

## 19. Bab 2 (Misi 5-8) Runtime QA PASS & Promotion (2026-09-18)
Pengguna telah mengonfirmasi bahwa seluruh skenario pengujian pada Misi 5-8 berjalan tanpa *error* di *Browser*. Sistem *Pre-Mission Briefing*, *threshold* 70%, sistem Remedial, dan pemberian XP berfungsi dengan sempurna.
- **Status:** PROMOTED / APPROVED (Canonical Additive Content)
- **Documentation:** `Alur Kerja Proyek/PROJECT LOG/100-World-1-KM-Chapter-2-Misi-5-8-Runtime-QA-PASS-and-Promotion.md`

**Langkah Kerja Selanjutnya (Next Mandatory Step):**
Memasuki fase **Perumusan Ruang Lingkup (Scope Determination) untuk Bab 3**. Langkah yang harus diambil:
1. Mengekstrak materi Bab 3 dari Buku Siswa dan Buku Guru (Kurikulum Merdeka Kelas XII Bahasa Indonesia).
2. Merumuskan *Competency Coverage Matrix* untuk Bab 3.
3. Merancang draf Bank Soal dan *Teaching Dialogue* untuk misi-misi selanjutnya (Misi 9, 10, dst).

## 20. Bab 3 (Misi 9-11) Engine Upgrade & Promotion (2026-09-18)
Berdasarkan request dari sesi ini, sistem VN Engine telah ditingkatkan dengan fitur **Dev Mode / Mission Selector** untuk mempermudah QA *playtesting* secara non-linear, dan kemampuan **Dialogue Chain** di mana *pembekalanText* NPC dapat menerima tipe data Array untuk narasi cerita panjang yang bisa di-*paging*.

Bab 3 (Menciptakan Lingkungan Sekolah Aman dan Nyaman - Materi Novel) telah diformulasikan ke dalam 3 Misi Canonical:
- **Misi 9 (Subbab A & B):** Sudut Pandang dan Perwatakan.
- **Misi 10 (Subbab C & D):** Analisis Alur dan Pesan Moral.
- **Misi 11 (Subbab F):** Kaidah Bahasa & Penulisan Sastra.

Pengguna telah mengonfirmasi bahwa pengujian Misi 9 dengan fitur Dev Mode berjalan sukses.
- **Status:** PROMOTED / APPROVED (Canonical Additive Content)
- **Documentation:** `phase-3/world-1-km-chapter-3-competency-matrix-v1.md`

**Langkah Kerja Selanjutnya (Next Mandatory Step):**
Memasuki fase **Perumusan Ruang Lingkup (Scope Determination) untuk Bab 4 (Menerapkan Kecerdasan Artifisial dalam Kehidupan Modern - Teks Eksplanasi Kompleks)**. Langkah yang harus diambil:
1. Merumuskan *Competency Coverage Matrix* dan pemetaan Misi untuk Bab 4.
2. Menyusun JSON Dataset Canonical untuk Misi-Misi di Bab 4.
3. Mengintegrasikan Misi Bab 4 ke dalam `world-1-rpg-v2.html`.

## 21. Bab 4 (Misi 12-14) Promotion & End-Game UI Polish (2026-09-18)
Sistem VN Engine diperbarui dengan *End-Game UI Polish* berupa:
- Menampilkan persentase akurasi langsung pada tombol "Ulangi Misi" di *Replay Menu*.
- Modifikasi dialog Zaein dan Safira agar lebih humanis dan reaktif terhadap status *Perfect Score* (100%).
- Penambahan tombol transisi "Kembali ke Hub Utama / Menu Mata Pelajaran Lain" untuk mencegah *infinite loop* saat semua misi telah selesai 100%.

Bab 4 (Teks Eksplanasi Kompleks - AI) telah diformulasikan ke dalam 3 Misi Canonical dengan skema metadata *strict* yang lolos QA *Renderer Gate*:
- **Misi 12:** Evaluasi Gagasan AI.
- **Misi 13:** Struktur Teks & Model 5R.
- **Misi 14:** Kebahasaan & Gaya Bahasa.

Pengguna telah memverifikasi penyelesaian Bab 4 dan menyetujui perubahan alur navigasi.
- **Status:** PROMOTED / APPROVED (Canonical Additive Content)
- **Documentation:** `phase-3/world-1-km-chapter-4-competency-matrix-v1.md`

**Langkah Kerja Selanjutnya (Next Mandatory Step):**
Memasuki fase **Perumusan Ruang Lingkup (Scope Determination) untuk Bab 5 (Mengungkapkan Kekaguman dalam Narasi Kearifan Lokal - Teks Esai)**. Langkah yang harus diambil:
1. Mengekstrak materi Bab 5 dari Buku Siswa.
2. Merumuskan *Competency Coverage Matrix* dan pemetaan Misi untuk Bab 5.
3. Menyusun JSON Dataset Canonical untuk Misi-Misi di Bab 5.
4. Mengintegrasikan Misi Bab 5 ke dalam `world-1-rpg-v2.html`.

## 22. Bab 5 (Misi 15-17) Promotion & Ujian Akhir Implementation (2026-09-19 - 2026-09-20)
Bab 5 (Teks Esai - Mengungkapkan Kekaguman tentang Kearifan Lokal) telah diformulasikan ke dalam 3 Misi Canonical:
- **Misi 15 (Subbab A & B):** Eksplorasi Kearifan Lokal (Sasi Papua, Tau Taa Vana).
- **Misi 16 (Subbab C):** Fakta, Opini, Kebahasaan Esai (Rendang Minangkabau, frasa korelatif, padanan kata).
- **Misi 17 (Subbab D & E):** Analisis Kritis, Ejaan (PUEBI), dan Refleksi ALACT.

Selain itu, **Ujian Akhir Bahasa Indonesia (Misi 18)** telah diimplementasikan sebagai penutup seluruh materi Bab 1 hingga Bab 5:
- Dataset: 25 soal baru (fresh, berbeda dari Misi 1-17) yang merangkum kompetensi 5 Bab.
- Logika Khusus: Tidak ada KKM (Kriteria Ketuntasan Minimal 70%), tidak ada XP, skor dicatat hanya sebagai rekam jejak evaluasi diri.
- Alur End-Game: Setelah menyelesaikan Misi 17, Zaein otomatis mengajak pemain ke Ujian Akhir. Setelah ujian selesai, tampil dialog ucapan selamat beserta skor akhir, dan opsi Ulang Ujian / Perbaiki Nilai Misi / Pilih Mata Pelajaran Lain.

Pengguna menyetujui dan alur diimplementasikan.
- **Status:** PROMOTED / APPROVED (Canonical Additive Content)
- **Documentation:** `phase-3/world-1-km-chapter-5-competency-matrix-v1.md`, `phase-3/world-1-km-final-exam-canonical-v1.0.json`

**Langkah Kerja Selanjutnya (Next Mandatory Step):**
Mata pelajaran Bahasa Indonesia (World 1) telah SELESAI sepenuhnya. Opsi berikutnya yang telah disepakati:
1. **Pindah ke Mata Pelajaran Lain** (Matematika / Sosiologi) — membangun konten World 2 atau World 3.
2. **Implementasi Visual Polish** (yang sempat ditunda) — 3D animated buttons, custom NPC backgrounds, dan humanisasi dialog NPC.
