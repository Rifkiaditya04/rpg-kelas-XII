# World 1 — KM Chapter 1 F–G Renderer Regression v1

## Status
SPECIFICATION / QA GATE — RUNTIME EXECUTION REQUIRED

## Purpose
Regression-test the existing actual mission renderer with the validated controlled F–G fixture. The fixture is QA-only and must not alter the Golden Dataset or production content.

## Preconditions
- Controlled fixture validation: PASS.
- Fixture contains 6 single-select items, 4 options each, exactly one canonical answer each.
- Correct option positions are distributed A=1, B=2, C=2, D=1.
- Provenance is present for every item.
- Generic >=70% completion-reward threshold issue remains separate and OPEN.

## Regression contract
The actual renderer must:
1. load all 6 fixture items;
2. preserve the exact option order supplied by the fixture for deterministic QA;
3. render all four options for every item;
4. accept the canonical answer when it appears at A, B, C, or D;
5. reject every non-canonical option;
6. score all-correct as 6/6 and 100%;
7. score all-wrong as 0/6 and 0%;
8. avoid granting completion/reward on the wrong path;
9. remain compatible with existing single-select behavior;
10. avoid changing the Golden Dataset or production academic content.

## Required live cases
### Case R1 — Canonical-path pass
Answer each item with its fixture canonical answer.
Expected:
- 6/6 correct;
- 100% accuracy;
- each canonical position A/B/C/D accepted correctly;
- no rendering or answer-mapping error.

### Case R2 — Non-canonical-path rejection
Answer every item with a known non-canonical option.
Expected:
- 0/6 correct;
- 0% accuracy;
- no false positives;
- no completion/reward state caused by a wrong answer path.

### Case R3 — Reload / replay isolation
Reload and replay the fixture after R1 or R2.
Expected:
- questions remain structurally renderable;
- prior result does not corrupt answer mapping;
- option ordering remains deterministic for this controlled fixture.

## Reward-contract boundary
This regression must distinguish renderer answer/scoring correctness from the previously identified generic reward-threshold defect. If R1/R2 reveal that the generic renderer grants a completion reward below 70%, record that separately as the known OPEN reward-threshold issue rather than falsely marking answer mapping as failed.

## Decision rule
PASS only when R1, R2, and R3 meet their renderer contracts. A known unrelated reward-threshold observation must be recorded but does not invalidate the answer-mapping regression unless it corrupts the required result state for the tested path.

## Next step after PASS
Promote fixture-backed renderer compatibility evidence, then prepare the approved F–G content for production-integration planning. Production integration still requires a separate decision because the fixture itself is QA-only.
