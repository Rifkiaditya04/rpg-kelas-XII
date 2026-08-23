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
- **R2:** non-canonical path → 0/6, 0% accuracy, 0 XP.
- **R3:** after using the regression page's `Reload runtime`, canonical path → 6/6, 100% accuracy, 600 XP.

These results confirm canonical answer recognition, non-canonical rejection, and replay isolation for the tested runtime path.

### 15.4 Remaining renderer-regression conflict
The written regression specification requires the exact option order supplied by the controlled fixture to remain deterministic. The actual renderer currently calls `shuffle(q.options)` before rendering option buttons. Therefore:

- adapter preserves fixture order: CONFIRMED;
- renderer receives preserved fixture values/order: CONFIRMED;
- visible option order remains randomized: CONFIRMED;
- deterministic visible option-order requirement: **CONFLICTING with current implementation**.

This is not silently resolved by the R1/R2/R3 score results. The regression gate cannot be marked fully closed until this specification/implementation conflict is explicitly resolved or the specification is revised through the project's decision process.

### 15.5 F–G language/content finding
The F–G question-design artifact and controlled fixture are written in English, while the product's first subject and student-facing integration are Bahasa Indonesia. The F–G teaching/NPC artifact is written in Indonesian, so this is a content/localization inconsistency within the F–G workstream, not a renderer translation behavior.

Classification: **CONFLICTING / CONTENT QA ISSUE**.

No language rewrite is performed in this regression gate because changing the fixture/question text would mix content revision with renderer regression and would invalidate the controlled fixture as currently validated.

Before production integration, F–G content language must be resolved through the content QA/revision gate and a new versioned fixture should be produced if the wording changes.

### 15.6 Production boundaries
- F–G production integration: NOT STARTED.
- Golden Dataset v1: unchanged.
- Approved KM02-E4 and E1–E3: unchanged.
- Generic >=70% reward-threshold issue: OPEN and separate.
- Final visual/UI promotion: separate.

### 15.7 Current gate decision
**F–G Renderer Regression v1: CONDITIONAL PASS / NOT CLOSED.**

Evidence now closes the answer-mapping/runtime cases R1, R2, and R3 for the tested QA adapter. The gate remains open only for the documented deterministic-option-order conflict and the separate content-language correction required before production integration.

### 15.8 Next mandatory work
1. Resolve the option-order specification/implementation conflict through an explicit decision; do not silently modify production renderer behavior.
2. Resolve F–G language inconsistency through content QA/revision, preserving the validated fixture history and producing a new versioned fixture if needed.
3. Only after those decisions are documented, determine whether a new renderer regression run is required.
4. Do not promote F–G into production until the revised content and regression gate are closed.
