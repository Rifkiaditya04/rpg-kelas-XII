# 071 — World 1 KM Chapter 1 F–G Question Schema + Answer QA

## Status
**PASS — DESIGN BATCH CLEARED; PRODUCTION INTEGRATION HELD**

## Evidence
User approved F–G Original Question Design Batch v1. Six original single-select items were reviewed structurally.

## QA result
- 6 stable IDs.
- 4 options per item.
- One canonical answer per item.
- Explanations present.
- Existing renderer interaction baseline is sufficient.
- No Golden Dataset modification.

## Finding
All six current canonical answers are option A. This is structurally valid but should not be exposed as a predictable production answer pattern. Before production integration, option ordering must be balanced/randomized while preserving the canonical answer value and meaning.

## Provenance/copyright
Content remains independently authored. Curriculum sources are used for competency/concept grounding and provenance only; no source exercise or distinctive source wording is reproduced.

## Open issues
1. Answer-option distribution/order review — required before production integration.
2. Machine-readable provenance fixture — required before production integration.
3. Generic renderer >=70% completion reward contract — separate implementation issue; must be fixed before production mission use.

## Next step
Create controlled machine-readable F–G fixture with balanced option ordering and complete provenance, then run fixture/content/renderer regression QA.
