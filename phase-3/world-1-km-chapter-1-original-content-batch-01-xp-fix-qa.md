# World 1 — KM Standard Chapter 1 Original Batch 01 — XP Fix QA

**Date:** 2026-08-18
**Status:** FIX IMPLEMENTED — BROWSER RE-RUN REQUIRED

## Protocol re-sync

The active Master Control and required work-session protocol were re-checked before this change. The successful browser regression result is accepted as runtime evidence for content/renderer behavior, but the displayed XP discrepancy is treated as a separate reward-contract defect.

## Evidence

User live browser result:
- DATA: PASS — 6 items
- IDS: PASS
- CONTRACT: PASS
- LOAD: PASS
- ANSWERS: PASS — all six canonical answers accepted
- Result: 6/6 correct, 600 XP, 100% accuracy

## Expected reward

Batch 01 follows the controlled World 1 mission reward contract already established in the project:
- 100 XP per correct answer
- 100 XP mission-completion bonus awarded once

Therefore 6/6 must produce **700 XP**.

## Root cause

`renderer.js` already supports data-driven `rewards.xp_per_correct` and `rewards.mission_completion_xp`, but the KM Chapter 1 Batch 01 draft dataset did not yet contain a `rewards` object. The renderer therefore used its safe defaults: 100 XP per correct and 0 XP completion bonus. Six correct answers consequently produced 600 XP.

## Implementation

Updated:
`phase-3/world-1-km-chapter-1-original-content-batch-01-schema-v1.1-draft.json`

Added:
```json
"rewards": {
  "xp_per_correct": 100,
  "mission_completion_xp": 100
}
```

Commit:
`c6c5c7528359afb7675bcc2d12bc4bcb27509862`

No question content, provenance, answer, or Golden Dataset content was changed.

## Promotion boundary

This remains a draft QA payload. Golden Dataset remains untouched. The XP fix is not considered browser-verified until the hosted Batch 01 regression is rerun.

## Next gate

Re-run the hosted Batch 01 regression. Expected result:
**6/6 correct, 700 XP, 100% accuracy.**
