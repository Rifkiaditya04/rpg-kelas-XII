# World 1 — Controlled Regression Harness v1

## Evidence

Canonical target: `phase-3/world-1-question-batch-a-c-v1.1-canonical.json`.

The harness is `prototype/bahasa-indonesia/regression-harness.html` and drives the actual `prototype/bahasa-indonesia/index.html` + `renderer.js` through an iframe. The renderer now accepts an optional `?dataset=` URL parameter; without it, the existing Golden Dataset v1 remains the default runtime dataset.

Renderer change: `prototype/bahasa-indonesia/renderer.js` now resolves `DATA_URL` from `URLSearchParams`, preserving the original default. This is a QA injection point only; no student-facing content is changed.

## Checks implemented

1. Canonical dataset loads successfully.
2. Exactly 9 items are present.
3. Question IDs are unique.
4. Every canonical `question_type` is in the renderer's supported set.
5. Actual renderer loads the canonical dataset.
6. Every canonical question can be identified in the rendered UI.
7. Every canonical answer key can be selected through the actual rendered option buttons.
8. Submit becomes enabled after valid selection.
9. Renderer accepts the canonical answer as correct.
10. Multi-select instructions state that all correct answers must be selected and report the expected count.
11. Feedback is displayed after submission.
12. All 9 IDs are exercised.
13. Final score/result reports 9/9 and 900 XP for an all-correct regression run.

## Execution status

**HARNESS READY — LIVE EXECUTION PENDING.**

The repository tools can create and inspect the harness, but they do not provide a real browser interaction session. Therefore no claim of live regression PASS is made until the harness is opened through the deployed browser host and the `Run 9-item regression` action completes successfully.

## Interpretation

This harness closes the previous architecture gap between content QA and the actual renderer. It deliberately does not promote the batch or modify `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`.

A PASS from this harness is required before the canonical batch can enter the final promotion gate.