# World 1 — KM Chapter 1 F–G Production Question Design v1.2 — Content QA

## Status
PASS — production question-design candidate cleared content/schema/provenance review; not yet promoted to canonical production dataset.

## Protocol
Re-sync performed before review against the active Master Control chain, F–G regression closure, production question-design candidate, prior F–G schema/answer QA, and KM source authority.

## Evidence
- F–G Renderer Regression v1.2-ID: CLOSED / PASS.
- Teaching/dialogue package: user approved.
- Production question-design candidate: six Indonesian items, single-select, four options/item, one canonical answer/item.
- Source authority: Kurikulum Merdeka Class XII Student Book + Teacher Guide only; no Tingkat Lanjut source used in this KM lane.
- Golden Dataset remains unchanged.
- Production renderer remains unchanged.

## Schema QA
PASS:
- 6 stable item IDs: F-Q01..F-Q03 and G-Q01..G-Q03.
- single_select for every item.
- exactly 4 options per item.
- exactly 1 canonical answer per item.
- canonical distribution A=1, B=2, C=2, D=1.
- explanation present for every item.
- source anchor present for every item.
- no XP/reward field in the content-design candidate.

## Content / pedagogical QA
PASS:
- F-Q01 assesses kata baku in official-letter context and is mapped to Activity 1.10.
- F-Q02 assesses effective sentence formulation and is mapped to Activity 1.11.
- F-Q03 assesses official letter/power-of-attorney writing and is mapped to Activity 1.12.
- G-Q01 assesses replying to an official request by electronic mail and is mapped to Activity 1.13.
- G-Q02 assesses appropriate word choice in an official electronic reply and is mapped to Activity 1.13.
- G-Q03 assesses effective sentence use in an official electronic reply and is mapped to Activity 1.13.
- Each item has one defensible canonical answer and distractors are semantically non-canonical.
- The items test the mapped competency rather than relying on transient option position.

## Originality / provenance QA
PASS.
The candidate uses curriculum concepts as grounding. Scenarios, prompts, options, distractors, and explanations are independently authored for the project. No textbook exercise, answer-choice set, or distinctive source wording is intentionally reproduced. Provenance is recorded at concept/activity level.

## Cross-validation
Specification ↔ Master Control ↔ Project Log ↔ question-design candidate ↔ controlled fixture ↔ renderer regression evidence are consistent for the F–G QA boundary.
The prior all-A answer-key issue documented in the historical v1 schema QA is not present in this v1.2 candidate; its canonical distribution is balanced A=1/B=2/C=2/D=1. Renderer option shuffling remains permitted and answer evaluation is by canonical identity/value.

## Boundary
This QA result does not modify or promote the Golden Dataset. It does not modify the production renderer. It does not resolve or change the separate generic >=70% production mission completion reward issue.

## Decision
**PASS — F–G production question-design candidate is cleared for machine-readable production-shaped content preparation.**

## Next gate
Prepare a separate additive machine-readable production-content candidate/manifest, run static/schema/provenance QA, then obtain the required promotion decision. Do not modify Golden Dataset v1 or production renderer without a separate approved promotion step.
