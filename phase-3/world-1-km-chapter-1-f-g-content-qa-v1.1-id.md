# World 1 — KM Chapter 1 F–G Content QA v1.1 — Bahasa Indonesia

## Status
**STATIC QA PASS — READY FOR BROWSER REGRESSION**

## Scope
This QA report covers the additive Indonesian language revision of the six-item F–G controlled question slice. It does not modify the historical English v1 fixture, Golden Dataset v1, or renderer source.

## Evidence
Source/decision chain:
- F–G Detailed Original Content Coverage defines F as official communication production and G as responding through email and requires independently authored scenarios/options/explanations.
- F–G Originality + Provenance Audit is PASS and requires future questions, canonical answers, distractors, feedback, examples, and explanations to remain independently authored.
- F–G Original Question Design v1 defines six single-select items and canonical answer identities F-Q01=B, F-Q02=A, F-Q03=A, G-Q01=A, G-Q02=A, G-Q03=A at the design layer. The controlled v1 fixture reorders options for balanced QA positions while preserving canonical values.
- The new v1.1-ID revision preserves the controlled fixture's six item IDs and canonical semantic answers after the same balanced option-ordering strategy.

## Static checks
- Language: `id-ID` — PASS.
- Item count: 6 — PASS.
- Options per item: 4 — PASS.
- Interaction type: `single_select` — PASS.
- One canonical answer per item — PASS.
- Canonical position distribution in fixture: A=1, B=2, C=2, D=1 — PASS.
- QA-only boundary: `qa_only=true`, `production_content=false`, `golden_dataset_change=false` — PASS.
- Adapter fidelity: prompt, option values/order, canonical answer value, and explanation preserved from the v1.1-ID fixture — PASS.
- Reward boundary: `xp_per_correct=100`, `mission_completion_xp=0` — PASS for isolated renderer answer-mapping regression.
- Renderer source unchanged — PASS by repository inspection.
- Visible option-order requirement: resolved by Gate A; renderer may shuffle visible options, regression evaluates canonical answer identity/value — PASS.

## Semantic preservation
The v1.1-ID wording keeps the same competency intent:
- F-Q01: recipient + purpose before drafting.
- F-Q02: explicit document + required timing.
- F-Q03: formal register appropriate to institutional context.
- G-Q01: complete attendance confirmation.
- G-Q02: concise/polite institutional email tone.
- G-Q03: attendance + relevant event/date information.

## Language decision
The English v1 content remains preserved as historical QA evidence. The Indonesian v1.1-ID version is the candidate for the Bahasa Indonesia student-facing content path. No silent in-place rewrite was made.

## Teacher Guide boundary
Teacher Guide exact Chapter 1 artifact was not independently resolved in the F–G content pass; therefore no new Teacher Guide page claim is invented here. The revision relies on the already-cleared competency/concept provenance boundary and does not claim page-level Teacher Guide provenance.

## Interpretation
The language conflict is resolved at the content layer by an additive Indonesian revision. It is not a renderer translation feature and does not justify changing the renderer.

## Gate result
**GATE B — PASS (static content/schema/provenance boundary).**

## Gate C
Browser regression must now be run against the new Indonesian v1.1-ID adapter using the hosted regression page. Production integration remains blocked until R1/R2/R3 browser evidence closes the revised regression gate.
