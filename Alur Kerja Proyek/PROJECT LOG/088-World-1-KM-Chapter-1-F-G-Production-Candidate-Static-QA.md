# PROJECT LOG 088 — World 1 KM Chapter 1 F–G Production Candidate Static QA

## Objective
Materialize the approved F–G question design as a machine-readable additive production candidate and clear its static/schema/provenance gate before browser regression.

## Protocol followed
1. Re-synced repository.
2. Read active Master Control chain and F–G continuation/addendum.
3. Verified current F–G source-mapping, teaching/dialogue approval, renderer regression closure, question-design artifact, controlled fixture, and actual KM renderer implementation.
4. Separated Evidence / Implementation / Interpretation.
5. Cross-validated schema and runtime contract before writing the candidate.

## Evidence
- Approved question-design candidate contains six F/G items with four options and one intended canonical answer per item.
- Controlled v1.2-ID fixture confirms the approved source mapping and balanced canonical distribution A=1, B=2, C=2, D=1.
- Actual KM renderer supports `mcq` and requires the production candidate fields: id, chapter_id, topic_id, skill, cognitive_level, difficulty, question_type, question, answer, explanation, source, provenance, mode, game_mechanic.
- Actual renderer compares selected option values with `q.answer`, not transient visible button positions.

## Implementation
Created:
`phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id.json`

Commit: `30a7473fd524429799ad46d2d69a1ac2c77c7113`

Created QA record:
`phase-3/world-1-km-chapter-1-f-g-production-content-candidate-v1.2-id-qa.md`

Commit: `b424ac22a46f8469583b7538555ed1e4412e3705`

Created production-shaped hosted QA entrypoint:
`prototype/bahasa-indonesia/km-chapter-1-f-g-production-qa-v1.2-id.html`

Commit: `441d3c8a2db29a899180ec8fc17106e82ffc3ac8`

## Static QA result
PASS:
- 6 items.
- Stable F-Q01..F-Q03 and G-Q01..G-Q03 IDs.
- Four options per item.
- `mcq` supported by actual renderer.
- Exactly one answer per item and answer is an exact option value.
- Required renderer fields present.
- Student Book and Teacher Guide source fields present.
- KM provenance recorded per item.
- Canonical distribution A=1/B=2/C=2/D=1.
- Golden Dataset change=false.
- Production renderer change=false.
- Production reward expectation recorded as 100 XP/correct + 100 completion XP with >=70% mission threshold; this candidate does not implement or resolve the separate generic reward-contract issue.

## Interpretation
The machine-readable F–G candidate is structurally compatible with the established KM renderer and is cleared for production-shaped browser regression. It is not canonical and has not been promoted.

## Decision
**STATIC/SCHEMA/PROVENANCE QA: PASS.**

## Next gate
User-verified production-shaped browser regression using the actual KM renderer. Required evidence should cover dataset load, six-item runtime, canonical path, non-canonical path/no false positives, and reload/replay isolation as applicable. Promotion remains blocked until runtime evidence and a separate additive promotion decision are documented.
