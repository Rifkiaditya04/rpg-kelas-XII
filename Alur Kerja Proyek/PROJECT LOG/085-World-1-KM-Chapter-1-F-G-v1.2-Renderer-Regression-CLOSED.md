# PROJECT LOG 085 — World 1 KM Chapter 1 F–G v1.2 Renderer Regression CLOSED

## Objective
Close the F–G Renderer Regression v1.2-ID gate after the user supplied fresh hosted static-gate evidence and fresh R1/R2/R3 browser evidence.

## Protocol followed
- Re-synced the repository before assessment.
- Read the active Master Control chain, including `00-MASTER-CONTROL.md`, `00-MASTER-CONTROL-v1.1.md`, and the F–G addendum.
- Verified the v1.2 fixture, QA adapter, hosted regression page, actual KM runtime, and renderer wrapper.
- Reviewed the preceding F–G source-mapped revision and runtime evidence logs.
- Kept Evidence / Implementation / Interpretation separate.
- Preserved Golden Dataset v1 and production renderer.

## Evidence
### Static gate
User supplied fresh hosted result:
`STATIC GATE PASS — 6 Indonesian items, QA-only flags, semantic canonical-answer mapping, adapter fidelity, and QA reward boundary verified.`

The page also reports Golden Dataset unchanged and confirms that visible option shuffling is permitted by the v1.2 regression policy.

### R1 — Canonical path
User supplied fresh hosted runtime evidence:
- 6/6 correct
- 100% accuracy
- 600 QA XP
- Mission Complete displayed

### R2 — Non-canonical path
- 0/6 correct
- 0% accuracy
- 0 QA XP
- Mission Complete displayed
- No false positive observed

### R3 — Reload / replay isolation
After R2, user used the regression page's Reload runtime control, then answered all six items canonically:
- 6/6 correct
- 100% accuracy
- 600 QA XP
- Mission Complete displayed

## Implementation inspected
- `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.2-id-adapter.json`
- `prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.2-id.html`
- `prototype/bahasa-indonesia/km-batch-01-runtime.html`
- `prototype/bahasa-indonesia/km-batch-01-renderer-v1.js`

The v1.2 fixture and adapter are explicitly QA-only. The adapter uses 100 XP/correct plus 0 completion XP by design. The actual renderer evaluates answer values and may shuffle visible options; the v1.2 fixture policy explicitly evaluates canonical identity/value rather than transient button position.

## Interpretation
The previously documented F–G v1.1 conflicts are resolved for the v1.2 QA lane:
- language inconsistency is resolved by the Indonesian v1.2 fixture;
- deterministic fixture order remains deterministic in the source fixture;
- visible renderer option shuffling is accepted by the revised v1.2 regression policy and is not treated as a failure;
- answer identity, non-canonical rejection, and reload/replay isolation are all demonstrated by fresh browser evidence.

The v1.2 gate therefore satisfies its defined QA purpose.

The 600 XP result is not a production reward decision. It remains the intentionally isolated QA adapter boundary. The separate generic >=70% reward-contract issue remains outside this gate.

## Cross-validation
Specification / Master Control / Project Logs / fixture / adapter / hosted page / renderer / user runtime evidence are mutually consistent for the v1.2 regression scope.

The authoritative KM source pair remains the Student Book and Teacher Guide under `Buku Kurikulum/Kurikulum Merdeka/`. The v1.2 item mapping is explicitly tied to Chapter 1 F/G activities and retains original wording; no Golden Dataset promotion occurs in this gate.

## Decision
**F–G Renderer Regression v1.2-ID: CLOSED / PASS.**

R1: PASS.
R2: PASS.
R3: PASS.
Static gate: PASS.
QA-only boundary: PASS.
Golden Dataset: unchanged.
Production renderer: unchanged.

This closure applies only to the v1.2 QA regression gate. It does not itself promote F–G into production content and does not close the separate generic >=70% reward-contract issue.

## Post-closure continuation — 2026-08-28
User approved the F–G Original Teaching / NPC Dialogue + Guided Example package after the renderer regression closure. The teaching artifact was updated from `DRAFT — USER REVIEW GATE` to `APPROVED — USER REVIEW GATE CLOSED` without changing its authored content.

A source/originality review was then completed against the designated KM Student Book and Teacher Guide. Result: **PASS**. The audit confirmed that dialogue, fictional scenarios, guided choices, and explanations are original game-authored material and that the KM books are used only for concept/competency/topic grounding. F is mapped to Chapter 1 F / Activities 1.10–1.12; G is mapped to Chapter 1 G / Activity 1.13. No Tingkat Lanjut source is used for this KM lane and no unsupported citation detail was introduced.

Master Control F–G addendum was updated to record the user approval, audit PASS, and the new next gate.

## Files changed in continuation
- `phase-3/world-1-km-chapter-1-f-g-original-teaching-dialogue-guided-example-v1.md`
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1-FG-ADDENDUM-2026-08-27.md`

## Decision after continuation
**F–G Teaching / NPC Dialogue: APPROVED.**
**F–G Originality / Provenance Audit: PASS.**

No production question was generated or promoted in this continuation. Golden Dataset and production renderer remain unchanged.

## Next gate
Create a separate original F–G question-design draft using the approved teaching package and verified KM Chapter 1 source mappings. The draft must use new fictional situations, wording, options, distractors, and explanations, and must not copy guided-example answers. Run academic/pedagogical/provenance review before canonicalization or production promotion.
