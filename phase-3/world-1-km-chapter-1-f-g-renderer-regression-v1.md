# World 1 — KM Chapter 1 F–G Renderer Regression v1

## Status
SPECIFICATION / QA GATE — RUNTIME EXECUTION COMPLETED; GATE A RESOLVED; GATE B CONTENT REVISION REQUIRED

## Purpose
Regression-test the existing actual mission renderer with a validated controlled F–G fixture. The fixture is QA-only and must not alter the Golden Dataset or production content.

## Preconditions
- Controlled fixture validation: PASS.
- Fixture contains 6 single-select items, 4 options each, exactly one canonical answer each.
- Correct option positions are distributed A=1, B=2, C=2, D=1 in the controlled fixture.
- Provenance is present for every item.
- Generic >=70% completion-reward threshold issue remains a separate concern.

## Gate A decision — option ordering
The approved renderer intentionally shuffles visible option order at runtime. Therefore this regression does **not** require deterministic visible button order.

The stable regression contract is:
- fixture option values and canonical-answer identity are deterministic;
- renderer may shuffle visible options;
- answer evaluation must follow canonical answer identity/value, not a fixed visible position;
- R1/R2/R3 validate semantic mapping and replay isolation.

Decision record: `Alur Kerja Proyek/PROJECT LOG/077-World-1-KM-Chapter-1-F-G-Gate-A-Option-Order-Decision.md`.

## Regression contract
The actual renderer must:
1. load all 6 fixture items;
2. preserve the fixture's option values and canonical-answer mapping;
3. render all four options for every item;
4. accept the canonical answer regardless of its transient visible A/B/C/D position;
5. reject every non-canonical option;
6. score all-correct as 6/6 and 100%;
7. score all-wrong as 0/6 and 0%;
8. keep wrong-path completion/reward behavior isolated from this answer-mapping gate;
9. remain compatible with existing single-select behavior;
10. avoid changing the Golden Dataset or production academic content.

## Required live cases
### Case R1 — Canonical-path pass
Answer each item with its fixture canonical answer.
Expected:
- 6/6 correct;
- 100% accuracy;
- canonical answer identity accepted regardless of transient visible option position;
- no rendering or answer-mapping error.

### Case R2 — Non-canonical-path rejection
Answer every item with a known non-canonical option.
Expected:
- 0/6 correct;
- 0% accuracy;
- no false positives;
- no wrong-path completion/reward state within the isolated QA adapter.

### Case R3 — Reload / replay isolation
Reload and replay the fixture after R1 or R2 using the regression harness's **Reload runtime** control.
Expected:
- questions remain structurally renderable;
- prior result does not corrupt answer mapping;
- replay uses the same fixture semantics even if visible option order is reshuffled.

## Reward-contract boundary
The QA adapter intentionally isolates answer mapping by setting completion reward to zero. Therefore 6/6 = 600 XP is expected in this isolated adapter. The production mission contract remains separately governed and must not be inferred from this QA-only reward configuration.

## Gate A result
**PASS / RESOLVED.** Visible option-order determinism is no longer a regression requirement. Semantic canonical-answer mapping is the required contract.

## Gate B boundary
The current v1 fixture/design is English-language content inside a Bahasa Indonesia student-facing workstream. This is a content/localization issue, not a renderer translation issue. The existing v1 fixture is retained as historical QA evidence and will not be edited in place.

## Gate B next step
Create an additive Indonesian F–G question-design revision and a new versioned controlled fixture after content QA/provenance review. Do not silently rewrite the validated v1 fixture.

## Gate C
After the new versioned fixture passes content/schema QA, rerun the renderer regression with R1/R2/R3. Production integration remains blocked until that regression is closed.
