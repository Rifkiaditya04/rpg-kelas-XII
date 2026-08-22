# World 1 — KM Chapter 1 F–G Controlled Fixture Validation v1

## Status
PASS — CONTROLLED FIXTURE CLEARED FOR RENDERER REGRESSION

## Protocol
Re-sync performed before validation. The controlled machine-readable fixture was inspected against the approved F–G question design, ordering policy, provenance requirements, and QA-only boundary.

## Validation results
- Item count: 6/6 PASS
- Options per item: 4/4 PASS
- Canonical answer: exactly 1 per item, 6/6 PASS
- Canonical positions: A=1, B=2, C=2, D=1; all four positions represented PASS
- Canonical answer identity preserved from approved design PASS
- Option ordering changed only; question intent/meaning unchanged PASS
- Explanation present: 6/6 PASS
- Provenance present: 6/6 PASS
- `source_expression_reused=false`: 6/6 PASS
- QA-only flag: PASS
- Production content flag: PASS
- Golden Dataset change: false PASS
- Interaction type: single_select PASS

## Correction during validation
The initial fixture metadata incorrectly stated the canonical distribution as A=2, B=2, C=2, D=1. Direct item inspection showed the actual distribution was A=1, B=2, C=2, D=1. The metadata was corrected before the gate was closed. No question content or canonical answer was changed.

## Provenance boundary
The fixture uses Kurikulum Merdeka Chapter 1 only as competency/concept grounding. It does not store copied source expression.

## Decision
**PASS.** Fixture is structurally and provenance-wise ready for the next renderer regression gate.

## Separate open issue
The generic renderer completion-reward threshold issue remains OPEN. It is outside this fixture validation and must be fixed/regression-tested before production mission use under the >=70% completion contract.
