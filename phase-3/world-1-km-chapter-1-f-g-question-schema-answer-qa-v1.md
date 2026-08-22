# World 1 — KM Chapter 1 F–G Question Schema + Answer QA v1

## Status
PASS — DESIGN BATCH CLEARED FOR PROVENANCE RECHECK / RUNTIME FIXTURE PREPARATION

## Protocol
Re-sync completed against Master Control, Master Control v1.1, approved F–G coverage, approved original teaching content, originality/provenance audit, and user-approved F–G question-design batch.

## Schema QA
Six items were checked for the approved interaction baseline:
- single-select interaction;
- four options per item;
- one canonical answer per item;
- stable item IDs;
- F/G grouping;
- skill/coverage alignment;
- explanation present;
- no requirement for renderer modification.

## Answer-key QA
- F-Q01 → A
- F-Q02 → A
- F-Q03 → A
- G-Q01 → A
- G-Q02 → A
- G-Q03 → A

Each item has exactly one intended canonical answer in the current design.

## Content QA findings
The current batch is structurally coherent and suitable for the existing single-select renderer. However, because all six current canonical answers are A, a production-ready batch should receive an additional option-order / answer-distribution review before integration. This is not an academic error, but it is a QA risk because a uniform visible key can create an avoidable response-pattern cue.

## Copyright/provenance boundary
No source exercise or source wording is reproduced. The batch uses curriculum-derived concepts and original scenarios/options/explanations. Provenance should be attached at concept/activity level in the eventual machine-readable content record.

## Decision
**PASS for schema and canonical-answer structure.**
**HOLD for production integration** until answer-option ordering/distribution is randomized or intentionally balanced and the machine-readable provenance fields are prepared.

## Separate open issue
Generic renderer completion reward must still enforce the >=70% production mission contract before production use. This remains a separate implementation issue.

## Next step
Prepare the machine-readable F–G controlled content fixture with balanced option ordering and complete provenance, without modifying the Golden Dataset v1.
