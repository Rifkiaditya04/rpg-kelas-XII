# World 1 A–C v1.1 — Final Promotion Checks

## Decision
**PROMOTED to Approved World 1 Content v1.1**

Promotion target:
- `phase-3/world-1-approved-content-v1.1.json`

Golden Dataset v1 remains immutable and is **not** overwritten.

## Evidence

### 1. Canonical identity
- Canonical manifest: `phase-3/world-1-question-batch-a-c-v1.1-canonical.json`
- Effective IDs: `BI12-W1-AC-001` through `BI12-W1-AC-009`
- Item count: 9
- Lane scope: A, B, C; three items per lane

### 2. Resolved runtime data
- QA dataset: `phase-3/world-1-question-batch-a-c-v1.1-regression-dataset.json`
- Resolved from canonical base + v1.1 revision overlay.
- Browser regression loaded all 9 items through the actual renderer.

### 3. Content and provenance gates
- Full batch quality gate: PASS with documented implementation limitation.
- Independent answer verification: PASS for all 9 effective items.
- Pedagogical review: PASS for all 9 after targeted revisions.
- Provenance: Student Book + Teacher Guide locators present for all 9.
- Source locator policy: page + subsection; no artificial line numbers.
- Cross-validation: Student Book ↔ Teacher Guide confirmed for Chapter I controlled lanes A–C.

### 4. Renderer/runtime gate
Live Controlled Regression Harness v1: **PASS**.
- DATA: PASS
- SCHEMA: PASS
- TYPES: PASS
- LOAD: PASS
- ANSWER: PASS
- SCORE: PASS — 9/9, 900 XP
- COVERAGE: PASS — all 9 IDs played in randomized order
- FEEDBACK: PASS — explanation/feedback verified for every submission

Observed randomized order during live regression:
`BI12-W1-AC-006`, `BI12-W1-AC-007`, `BI12-W1-AC-001`, `BI12-W1-AC-008`, `BI12-W1-AC-004`, `BI12-W1-AC-005`, `BI12-W1-AC-009`, `BI12-W1-AC-003`, `BI12-W1-AC-002`.

### 5. Golden Dataset isolation
- Existing `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json` remains unchanged.
- Approved World 1 expansion is additive and versioned.
- No ID collision with the `BI12-GOLD-*` seed namespace was introduced.

### 6. Known limitation carried forward
`document_inspection` is renderer-compatible but currently uses generic option-selection UI rather than a specialized document-inspection interface. This does not block content promotion because the current renderer behavior was explicitly exercised and passed in live regression. Specialized UX remains a later implementation task.

### 7. Difficulty status
Difficulty labels remain **provisional** as empirical production difficulty statistics are not yet available. This is recorded as a known content-analytics limitation, not an unresolved answer/provenance/runtime defect.

## Implementation
The approved pool is represented by a versioned manifest rather than mutating the original Golden Dataset. The resolved runtime dataset remains the controlled browser-regression artifact.

## Interpretation
The nine-item A–C batch is now suitable for controlled World 1 content expansion. It is not authorization for uncontrolled mass generation. New batches must independently pass provenance, answer verification, pedagogical review, renderer compatibility, and batch quality gates.

## Promotion result
**GREEN — Approved World 1 Content v1.1**

Next project gate:
1. integrate the approved pool into the World 1 content pipeline without overwriting Golden Dataset v1;
2. expand World 1 in additional controlled batches;
3. keep specialized document-inspection UX and empirical difficulty calibration on the technical/content backlog;
4. only after controlled World 1 expansion is stable, proceed to broader world/content expansion.
