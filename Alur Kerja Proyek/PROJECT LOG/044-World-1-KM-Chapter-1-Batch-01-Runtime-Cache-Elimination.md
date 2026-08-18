# PROJECT LOG 044 — World 1 KM Chapter 1 Batch 01 Runtime Cache-Elimination Fix

**Date:** 2026-08-18
**Status:** QA_PENDING — browser re-run required

## 1. Protocol re-sync

Before this change, re-synced Master Control and REQUIRED-WORK-SESSION-PROTOCOL. The previous regression diagnosis in PROJECT LOG 043 was reviewed before any implementation change.

## 2. Evidence

User browser evidence remained:
- DATA: PASS — 6 items
- IDS: PASS — six unique IDs
- CONTRACT: PASS — all six MCQ contracts
- RUNTIME: FAIL — `Dataset tidak dapat dimuat`; `Quality gate gagal: items kosong`.

Repository inspection confirmed:
- The draft batch uses top-level `questions`.
- Current renderer source supports `items` and `questions`.
- The QA runtime previously referenced `renderer.js?v=4`.
- Therefore the browser result cannot be declared a content failure; it is still a runtime/deployment evidence problem.

## 3. Implementation

To remove cache ambiguity rather than adding another query-string version, created a unique QA renderer entry:
`prototype/bahasa-indonesia/km-batch-01-renderer-v1.js`

Commit:
`212c2463794ec68cda042aca96100aa96d222826`

The file contains the same validated renderer behavior needed for this QA surface, including support for both `items` and `questions`, provenance validation, supported interaction validation, MCQ answer evaluation, and feedback flow.

Updated:
`prototype/bahasa-indonesia/km-batch-01-runtime.html`

to load the unique QA renderer filename rather than `renderer.js?v=4`.

Commit:
`6e178ec19c7108196d947adb9c92fd893fb72d88`

## 4. Interpretation

This is a diagnostic isolation step, not a claim that GitHub Pages deployment is already live. A browser PASS cannot be recorded until the user reruns the hosted harness after deployment propagation.

## 5. Promotion boundary

Golden Dataset remains unchanged. Canonicalization remains blocked. No content item was altered.

## 6. Next gate

User reruns the existing Batch 01 regression harness. Expected outcomes:
1. PASS — all six items render and canonical answers are accepted; or
2. concrete runtime/item-level FAIL.

A generic cache-related `items kosong` result after this unique filename change would indicate a different deployment/path problem and must be diagnosed from fresh browser evidence rather than assumed.
