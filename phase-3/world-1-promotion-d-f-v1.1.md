# World 1 D–F v1.1 — Promotion Record

## Decision
**PROMOTED to Approved World 1 D–F Content v1.1**

Promotion target:
- `phase-3/world-1-approved-content-d-f-v1.1.json`

This promotion is additive and versioned. It does not mutate Golden Dataset v1 or the existing A–C approved pool.

## Evidence

### 1. Final Promotion Checks
- Artifact: `phase-3/world-1-d-f-v1.1-final-promotion-checks.md`
- Result: **GREEN — PASS**.

### 2. Canonical identity
- Canonical manifest: `phase-3/world-1-question-batch-d-f-v1.1-canonical.json`
- Effective IDs: `BI12-W1-DF-001` through `BI12-W1-DF-009`
- Item count: 9
- Lanes: D, E, F; three items per lane
- Revision IDs: DF-001, DF-002
- Unchanged IDs: DF-003 through DF-009

### 3. Content and provenance gates
- Independent answer verification + pedagogical review: PASS after targeted revisions.
- Revision Quality Gate: PASS.
- Full Batch Quality Gate: PASS.
- Provenance: Student Book + Teacher Guide source pair with page/subsection locators.
- No unresolved answer, ambiguity, provenance, or pedagogical blocker remains in the canonical effective batch.

### 4. Renderer/runtime gate
Controlled Live Regression D–F v1.1: **PASS**.
- DATA: PASS
- SCHEMA: PASS
- TYPES: PASS
- LOAD: PASS
- ANSWER: PASS
- SCORE: PASS — 9/9, 900 XP
- COVERAGE: PASS — all 9 IDs played in randomized order
- FEEDBACK: PASS — explanation/feedback verified for every submission

### 5. Golden Dataset isolation
- `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json` remains unchanged.
- Existing A–C approved pool `phase-3/world-1-approved-content-v1.1.json` remains unchanged.
- D–F uses the separate `BI12-W1-DF-*` namespace.
- Promotion is additive and versioned.

### 6. Non-blocking notes carried forward
- Difficulty labels remain provisional until empirical production analytics are available.
- `document_inspection` remains renderer-compatible but currently uses generic option-selection UI; specialized document-inspection UX remains a later technical enhancement.

## Implementation
Approved D–F content is represented by `phase-3/world-1-approved-content-d-f-v1.1.json`. The resolved regression dataset remains a QA artifact and is not the canonical approved-content replacement.

## Promotion result
**GREEN — Approved World 1 D–F Content v1.1**

## Next project direction
- Integrate approved D–F content into the World 1 content pipeline without overwriting Golden Dataset v1.
- Keep A–C and D–F as additive/versioned approved pools until a later explicit consolidation step is designed and gated.
- Do not begin uncontrolled mass generation.
- Continue with the next Master Control gate only after re-verifying the repository state.
