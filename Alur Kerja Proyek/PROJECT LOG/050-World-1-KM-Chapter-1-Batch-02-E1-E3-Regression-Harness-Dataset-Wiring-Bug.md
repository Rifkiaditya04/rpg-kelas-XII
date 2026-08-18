# PROJECT LOG 050 — World 1 KM Chapter 1 Batch 02 E1-E3 Regression Harness Dataset Wiring Bug

**Date:** 2026-08-18
**Status:** HARNESS BUG FIXED — RUNTIME EVIDENCE INVALIDATED / RETEST REQUIRED

## Protocol re-sync

Before corrective work, re-synced the active Master Control and the required work-session protocol. The current controlled expansion gate requires actual runtime evidence before promotion.

## Evidence received

User ran the Batch 02 E1-E3 harness. Harness-level checks passed for:
- 3 draft items;
- expected IDs KM02-E1, KM02-E2, KM02-E3;
- MCQ contract;
- renderer load.

The embedded renderer then displayed a 10-question mission result (`6/10`, `600 XP`, `60%`). This is inconsistent with the expected three-item Batch 02 E1-E3 payload.

## Root cause

Inspection of the harness showed that the iframe was loaded as:
`km-batch-01-runtime.html?qa=...`
without passing the Batch 02 dataset URL. The renderer therefore fell back to its default Golden Dataset / prior runtime dataset. The browser result was consequently NOT a Batch 02 runtime result and must not be used as evidence for E1-E3.

## Corrective action

Updated the existing harness to pass:
`dataset=../../phase-3/world-1-km-chapter-1-original-content-batch-02-e1-e3-draft-v1.1.json`
plus `qa=1` and a cache-busting version parameter.

Commit:
`847d7d647dbcd9308089d76f9f2847f66921a388`

No content item, provenance, Golden Dataset, or canonical dataset was changed.

## QA decision

The user-reported 6/10 result is classified as **INVALID TEST TARGET**, not content failure.

Runtime gate remains PENDING.

## Next step

Run the corrected harness and verify that the embedded renderer shows exactly 3 questions and IDs KM02-E1/E2/E3 before exercising answers. Only then can E1-E3 runtime PASS/FAIL be determined.
