# 072 — World 1 KM Chapter 1 F–G Controlled Fixture — Balanced Options

## Status
CREATED — QA FIXTURE ONLY

## Protocol
Re-sync performed before fixture creation. Prior answer-ordering decision was preserved: option positions should not remain predictably tied to the canonical answer. The earlier F–G question-design draft repeated A as the canonical position because the draft captured answer identity before the option-ordering pass; this was not a new pedagogical rule and does not supersede the established randomization/balancing requirement.

## Action
Created:
`phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.json`

The fixture keeps the approved question meaning and canonical answer identity unchanged. Only option ordering is rearranged for QA so correct positions are distributed across A/B/C/D.

## Provenance
Each item records:
- source family: Kurikulum Merdeka Chapter 1;
- source role: competency/concept grounding only;
- concept grounding;
- `source_expression_reused: false`.

No textbook prose, exercise, example, answer choice, or distinctive expression is stored as production content.

## Important distinction
The controlled fixture uses **fixed balanced ordering** so QA can be deterministic. This is not the final production randomization algorithm. Production presentation may randomize option order while preserving canonical option identity/value.

## QA target
- 6 items
- 4 options each
- 1 canonical answer each
- canonical positions distributed rather than all A
- provenance present for every item
- Golden Dataset unchanged
- production content unchanged

## Separate open issue
Generic renderer completion-reward threshold remains open. It must be fixed before production mission runtime uses the >=70% completion contract. This fixture does not modify that behavior.

## Next step
Run controlled fixture schema/answer/provenance validation, then renderer regression if the validation passes.
