# 074 — World 1 KM Chapter 1 F–G Renderer Regression v1

## Status
**RUNTIME QA PENDING — EXECUTION CASES DEFINED**

## Protocol
Re-sync performed before execution planning. Verified controlled fixture validation PASS and retained its boundaries: QA-only, no production-content change, no Golden Dataset change, and single-select renderer compatibility.

## Evidence
The validated fixture contains 6 items with 4 options each, one canonical answer each, canonical positions A=1/B=2/C=2/D=1, complete explanations, and per-item provenance. The fixture is structurally cleared for renderer regression. fileciteturn529file0

## Regression cases
- R1: answer all canonical values → expect 6/6 and 100%.
- R2: answer all non-canonical values → expect 0/6 and 0%, with no false positives.
- R3: reload/replay → answer mapping and deterministic fixture ordering remain intact.

## Important boundary
The known generic >=70% completion-reward threshold issue remains OPEN and separate. If observed during regression, record it as that known defect; do not confuse it with canonical answer mapping unless it corrupts the tested result state.

## Next action
Runtime execution of R1/R2/R3 against the actual hosted renderer is required before this gate can PASS. No PASS claim is made from repository inspection alone.
