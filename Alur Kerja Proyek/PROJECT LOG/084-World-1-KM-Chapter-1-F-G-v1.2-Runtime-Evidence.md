# PROJECT LOG 084 — World 1 KM Chapter 1 F–G v1.2 Runtime Evidence

## Objective
Record fresh user browser evidence for the approved F–G Renderer Regression v1.2-ID revision.

## Protocol followed
- Re-synced the repository before assessing the evidence.
- Verified the active Master Control chain and F–G addendum.
- Inspected the v1.2 fixture, QA adapter, and hosted regression page.
- Kept Evidence, Implementation, and Interpretation separate.
- Did not alter Golden Dataset or production renderer.
- Did not treat missing static-gate execution evidence as PASS.

## Evidence
User executed the hosted v1.2-ID runtime and reported:

### R1 — Canonical path
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
After R2, user used the regression page's **Reload runtime** control, not F5, then answered all six items canonically again.
Observed result:
- 6/6 correct
- 100% accuracy
- 600 QA XP
- Mission Complete displayed

The R3 result matches the R1 result after an in-harness runtime reload/replay.

## Implementation inspected
- `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.2-id-adapter.json`
- `prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.2-id.html`
- Actual renderer boundary: `prototype/bahasa-indonesia/km-batch-01-runtime.html`

The v1.2 fixture and adapter remain QA-only and explicitly preserve the production boundary. QA reward remains 100 XP/correct plus 0 completion XP.

## Interpretation
R1, R2, and R3 are **PASS based on fresh user browser evidence**.

The evidence establishes:
- canonical answer recognition works;
- non-canonical answers are rejected without false positives;
- reload/replay isolation works when using the harness Reload runtime control;
- QA XP remains isolated at 600 for six correct answers.

The 600 XP value is intentional for the QA adapter and must not be interpreted as the production mission reward contract.

## Static gate status
The user report still says **Static gate belum dijalankan**. Therefore the hosted static gate is **UNVERIFIED**, not PASS, even though repository inspection confirms the fixture/adapter/page contain the intended static assertions.

## Cross-validation
- Master Control / F–G addendum → requires fresh static evidence before runtime closure.
- v1.2 fixture → 6 items, Indonesian, QA-only, canonical answer identity.
- v1.2 adapter → preserves canonical answer values and QA reward boundary.
- Hosted page → loads the v1.2 adapter and actual KM renderer and requires explicit static-gate execution.
- User runtime evidence → R1/R2/R3 PASS.

## Decision
**F–G Renderer Regression v1.2-ID: PARTIALLY CLOSED**

Runtime regression cases R1/R2/R3: **PASS**.
Hosted static-gate execution: **PENDING / UNVERIFIED**.
Production promotion: **BLOCKED** until the static gate is explicitly run and passes, followed by final originality/provenance cross-check.

## Files changed
- This Project Log only.
- No fixture, adapter, renderer, or Golden Dataset changes.

## Next gate
1. Run the v1.2 hosted **Run static gate** button and capture `STATIC GATE PASS`.
2. If PASS, perform final originality/provenance cross-check against the KM Student Book + Teacher Guide.
3. Record the final gate result.
4. Only after that propose/approve any production promotion step.
