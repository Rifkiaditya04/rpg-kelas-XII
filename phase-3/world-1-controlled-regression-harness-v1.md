# World 1 — Controlled Regression Harness v1

## Evidence

Canonical target: `phase-3/world-1-question-batch-a-c-v1.1-canonical.json`.

The canonical artifact is a deterministic manifest (`item_ids` + base batch + revision overlay), not itself a renderer-ready `{items: [...]}` dataset. The previous harness incorrectly treated the manifest as if it contained `items`, which caused the live error:

`Cannot read properties of undefined (reading 'length')`

The failure was therefore a **harness implementation defect**, not evidence that the nine questions or renderer were invalid.

The corrected harness is `prototype/bahasa-indonesia/regression-harness.html`. It now fetches:

1. canonical manifest;
2. base batch;
3. revision overlay;

then performs the documented deterministic merge using canonical `item_ids`, replacing `BI12-W1-AC-003` and `BI12-W1-AC-004` with the v1.1 revisions. The resolved `{items: [...]}` object is passed to the actual renderer through a QA-only Blob URL.

The renderer still accepts an optional `?dataset=` URL parameter; without it, the existing Golden Dataset v1 remains the default runtime dataset.

## Checks implemented

1. Canonical manifest loads successfully.
2. Base batch loads successfully.
3. Revision overlay loads successfully.
4. Canonical merge resolves exactly 9 items.
5. Question IDs are unique after merge.
6. Every resolved `question_type` is in the renderer's supported set.
7. Actual renderer loads the resolved canonical dataset.
8. Every resolved question can be identified in the rendered UI.
9. Every resolved answer key can be selected through the actual rendered option buttons.
10. Submit becomes enabled after valid selection.
11. Renderer accepts the canonical answer as correct.
12. Multi-select instructions state that all correct answers must be selected and report the expected count.
13. Feedback is displayed after submission.
14. All 9 IDs are exercised exactly once in the regression run.
15. Final score/result reports 9/9 and 900 XP for an all-correct regression run.

## Root-cause classification of the reported failure

- **Evidence:** The browser displayed `Cannot read properties of undefined (reading 'length')` when the harness was run.
- **Implementation:** The harness executed `dataset.items.length`, but the fetched canonical file is a manifest without an `items` property.
- **Interpretation:** This was a confirmed harness bug caused by confusing a canonical manifest with the resolved renderer dataset.

## Fix status

**FIXED IN SOURCE.**

The harness now resolves the canonical manifest into a renderer-ready dataset before checking `.items` and before injecting the dataset into the renderer.

The fix was re-fetched from the repository after commit and is therefore source-confirmed. No live PASS claim is made until the deployed browser executes the corrected harness successfully.

## Execution status

**HARNESS FIXED — LIVE EXECUTION PENDING.**

The repository tools can create and inspect the harness, but they do not provide a real browser interaction session. Therefore no claim of live regression PASS is made until the corrected harness is opened through the deployed browser host and the `Run 9-item regression` action completes successfully.

## Interpretation

This harness closes the previous architecture gap between content QA and the actual renderer while respecting the canonical manifest/base/overlay design. It deliberately does not promote the batch or modify `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`.

A PASS from this harness is required before the canonical batch can enter the final promotion gate.