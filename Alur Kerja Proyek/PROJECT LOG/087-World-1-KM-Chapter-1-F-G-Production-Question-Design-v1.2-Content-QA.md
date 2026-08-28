# PROJECT LOG 087 — World 1 KM Chapter 1 F–G Production Question Design v1.2 Content QA

## Objective
Clear the approved F–G v1.2 Indonesian production question-design candidate through content/schema/provenance QA before machine-readable production-shaped preparation.

## Protocol followed
Re-sync → active Master Control chain → relevant F–G logs/artifacts → source/design verification → Evidence / Implementation / Interpretation → cross-validation → QA decision → documentation.

## Files / artifacts reviewed
- `Alur Kerja Proyek/00-MASTER-CONTROL.md`
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md`
- `phase-3/world-1-km-chapter-1-f-g-production-question-design-v1.2-id.md`
- `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-f-g-question-schema-answer-qa-v1.md`
- relevant F–G source/provenance and renderer-regression records
- KM Student Book / Teacher Guide source authority referenced by the candidate

## Evidence
F–G renderer regression v1.2-ID is CLOSED/PASS. Teaching/dialogue was user-approved. The candidate contains six Indonesian single-select items with four options each, one canonical answer each, explanations, and source anchors. Golden Dataset and production renderer remain untouched.

## Implementation QA
Schema: PASS. Canonical distribution is A=1, B=2, C=2, D=1. The historical all-A answer-key issue documented in the older v1 QA record is not present in v1.2. No reward configuration is embedded in the question-design artifact.

## Content / pedagogical QA
PASS. F-Q01/F-Q02/F-Q03 map to Activities 1.10/1.11/1.12 respectively. G-Q01/G-Q02/G-Q03 map to Activity 1.13. Each item has one defensible canonical answer and distractors that are non-canonical for the stated competency.

## Originality / provenance
PASS. The candidate uses KM concepts as grounding and independently authored scenarios, prompts, options, distractors, and explanations. No textbook exercise, answer-choice set, or distinctive source wording is intentionally reproduced. Provenance is recorded at concept/activity level.

## Cross-validation
Master Control, historical F–G schema QA, source mapping, v1.2 fixture, and renderer regression policy are consistent. The separate generic >=70% completion-reward issue remains open and is not altered by this QA.

## Decision
**PASS — production question-design candidate cleared for machine-readable production-shaped content preparation.**

## Files changed
- `phase-3/world-1-km-chapter-1-f-g-production-question-design-v1.2-id-qa.md`
- this PROJECT LOG entry

## Commits
- QA artifact: `3cb41b397b22ae2a3ccfdd89be764ca5fae177e8`

## Next gate
Prepare a separate additive machine-readable production-content candidate/manifest and run static/schema/provenance QA. Promotion remains a separate decision; Golden Dataset v1 and production renderer remain immutable/unchanged.
