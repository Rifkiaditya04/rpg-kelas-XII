# PROJECT LOG 043 — World 1 KM Chapter 1 Batch 01 Second Regression Diagnosis

**Date:** 2026-08-18
**Status:** QA_PENDING — runtime re-test required

## Evidence received

User ran the Batch 01 regression harness after the first renderer compatibility fix.

Observed:
- DATA: PASS — 6 items
- IDS: PASS — six unique IDs
- CONTRACT: PASS — all six MCQ contracts
- RUNTIME: FAIL — `Dataset tidak dapat dimuat`; `Quality gate gagal: items kosong`; renderer requested web server/hosting.

## Diagnosis

The current repository renderer source supports both `data.items` and `data.questions`, so the static renderer source is compatible with the schema draft. The likely remaining issue is that the hosted `index.html` still references `renderer.js?v=3`, while the compatibility fix was committed after that URL was already cached/deployed. The browser can therefore execute an older renderer bundle that still rejects the `questions` root.

## Corrective action

Created a dedicated QA runtime entrypoint:
`prototype/bahasa-indonesia/km-batch-01-runtime.html`

It references:
`renderer.js?v=4`

Commit:
`5332597ca6f0430b7f3ce3aef486bc27e236a2d2`

Updated the Batch 01 regression harness to use this cache-busted QA entrypoint instead of `index.html`.

Commit:
`40202ac7cd2d30dccdaafcd74e6351590a706b15`

## Important boundary

No Golden Dataset modification was made. No canonicalization was performed. The new runtime entrypoint exists only to establish a clean browser regression surface after the renderer compatibility fix.

## Next gate

Re-run the same harness. If the hosted deployment has propagated the new QA entrypoint and renderer, the harness should proceed beyond dataset loading. If it still fails, the error should now be attributable to the current renderer/runtime rather than an old cached `renderer.js?v=3` reference.
