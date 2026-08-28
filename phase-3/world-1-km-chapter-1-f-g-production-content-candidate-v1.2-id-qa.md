# World 1 — KM Chapter 1 F–G Production Content Candidate v1.2-ID — Static/Schema/Provenance QA

## Status
PASS — candidate cleared for production-shaped browser regression; not promoted.

## Protocol
Re-sync completed against the active Master Control chain, F–G closure records, approved source mapping, approved teaching/dialogue, approved question-design artifact, controlled fixture, and actual KM renderer implementation.

## Evidence
- Machine-readable candidate: `phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json`.
- Source design: `phase-3/world-1-km-chapter-1-f-g-production-question-design-v1.2-id.md`.
- QA renderer baseline: `prototype/bahasa-indonesia/km-batch-01-renderer-v1.js`.
- Candidate is explicitly `PRODUCTION_CANDIDATE`, not canonical.
- `golden_dataset_change=false`; `production_renderer_change=false`.

## Schema QA
PASS:
- 6 questions present.
- Stable IDs: F-Q01, F-Q02, F-Q03, G-Q01, G-Q02, G-Q03.
- Every item has chapter_id, topic_id, skill, cognitive_level, difficulty, question_type, question, answer, explanation, source, provenance, mode, and game_mechanic.
- Every item uses supported `mcq` question_type.
- Every item has exactly 4 options.
- Every item has exactly one answer represented by the full option value string.
- No duplicate IDs.
- No answer arrays for single-select items.
- Source contains Student Book pages/section and Teacher Guide pages/section.

## Answer/option QA
PASS:
- Canonical option distribution remains balanced: A=1, B=2, C=2, D=1.
- Canonical answer is an exact member of the corresponding option set for all six items.
- The production renderer evaluates the selected option value against `q.answer`; transient visible button positions are not used as answer identity.

## Provenance/originality QA
PASS:
- Source family is explicitly Kurikulum Merdeka Kelas XII.
- F maps to Chapter 1 Subbab F and Activities 1.10–1.12.
- G maps to Chapter 1 Subbab G and Activity 1.13.
- No Tingkat Lanjut source is used for this KM lane.
- Candidate records concept/competency grounding and `source_expression_reused=false` for every item.
- Scenarios, wording, options, distractors, and explanations are project-authored and are not intended as reproductions of source exercises.

## Production boundary QA
PASS:
- Candidate is additive/versioned.
- Golden Dataset v1 is untouched.
- Production renderer is untouched.
- No XP contract is changed by the candidate; the production-shaped candidate retains 100 XP/correct + 100 completion XP, with mission threshold 70% recorded as an expectation only.
- Generic >=70% reward-contract issue remains a separate implementation gate and is not closed by this content QA.

## Decision
**PASS — cleared for production-shaped browser regression.**

This document does not promote the candidate to canonical content. Browser evidence is required before any promotion decision.

## Next gate
Production-shaped browser regression using the actual KM renderer, followed by a separate additive promotion decision if runtime evidence passes.
