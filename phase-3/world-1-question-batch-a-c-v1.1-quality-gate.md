# World 1 Controlled Batch A-C v1.1 — Full Batch Quality Gate

## Status
- Batch: `BI12-W01-BATCH-AC-V1.1-CANONICAL`
- Scope: Chapter I / Lanes A-C
- Items: 9
- Production Golden Dataset promotion: **BLOCKED / NOT YET PROMOTED**
- Gate result: **PASS WITH DOCUMENTED IMPLEMENTATION LIMITATION**

## Evidence

The canonical batch is defined as a deterministic merge of:
- base: `phase-3/world-1-question-batch-a-c-v1.json`
- replacements: `phase-3/world-1-question-batch-a-c-v1.1-revisions.json`

The two previously blocked items were rechecked and passed after conversion to renderer-supported MCQ:
- `BI12-W1-AC-003`: `evidence_matching` -> `mcq`, mechanic `relevance_scan`
- `BI12-W1-AC-004`: `ordering` -> `mcq`, mechanic `structure_check`

The prior independent review records 7 original PASS items and the two interaction-contract blockers. The revision review records targeted recheck PASS for both revisions.

## Gate matrix

| Gate | Result | Evidence / basis |
|---|---|---|
| Item count = 9 | PASS | Canonical item ID manifest contains 9 unique IDs |
| Unique question IDs | PASS | AC-001 through AC-009 are unique |
| Chapter scope | PASS | All items map to `BI12-C01` |
| Lane scope | PASS | Three items each for A, B, C |
| Answer shape | PASS | MCQ answers are strings; multi-select answers are arrays matching options |
| Supported question types | PASS | Effective types are `mcq`, `multi_select`, `document_inspection` only; all are accepted by current renderer/quality gate |
| AC-003 interaction contract | PASS | Revised to supported MCQ; targeted recheck passed |
| AC-004 interaction contract | PASS | Revised to supported MCQ; targeted recheck passed |
| Provenance present | PASS | Student Book + Teacher Guide page/section locators exist for all reviewed items |
| Source locator integrity | PASS | Page + section is the approved human-auditable locator for converted sources; no invented line numbers |
| Answer verification | PASS | 9/9 independently reviewed as internally coherent; no second clearly-correct option identified |
| Pedagogical review | PASS | 9/9 pass after targeted revisions |
| Explanation quality | PASS | Explanations state why the keyed answer fits; no unsupported claims identified in review |
| Difficulty | PASS (provisional) | Labels judged plausible; empirical difficulty remains pending live batch playtest |
| Renderer compatibility | PASS WITH LIMITATION | Current renderer can render effective types; `document_inspection` still uses generic option-selection UI rather than specialized document UI |
| Production promotion | BLOCKED | Golden Dataset v1 must remain unchanged until this controlled batch is live-playtested and explicitly promoted |

## Implementation

The canonical artifact is intentionally base-plus-overlay rather than a duplicated nine-record JSON. This preserves traceability to the independently reviewed source records and makes the two superseding revisions explicit.

No change is made to `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json` in this gate.

## Interpretation

This batch has passed the **content/schema/provenance/renderer contract gate**, but not the final production promotion gate. The remaining uncertainty is empirical: live playtest must confirm that randomized option order, multi-select instruction, feedback, and the current generic handling of `document_inspection` do not create usability or learning problems.

## Next gate

1. Run live browser regression on the nine-item controlled batch.
2. Record any content/UX defects.
3. If clean, promote the canonical nine items into the approved World 1 content pool.
4. Keep Golden Dataset v1 immutable as the original approved seed unless a deliberate versioned promotion is documented.
5. Only after this gate is green may controlled batch generation scale.
