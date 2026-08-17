# BUG 001 — Progression Result Relay Failure

**Date:** 17 August 2026  
**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** FIX IMPLEMENTED — REQUIRES LIVE RE-TEST

## Evidence

User performed live playtest with two attempts:

- 1 successful attempt: 3/3 correct, 100%, Mission Complete, 400 XP shown inside the Mission System.
- 1 failed attempt: below 70%, Retry / Remedial shown.
- Outer Progression State remained:
  - XP: 0
  - Mission Complete: 0
  - Learning Accuracy: —

Therefore the Mission System displayed the correct local result, but the outer Progression Prototype did not receive or persist the result event.

## Root cause

The Progression Prototype listens for `MISSION_RENDERER_RESULT` on its own window. The actual event originates from the Question Renderer iframe nested inside the Mission System iframe.

`window.postMessage` does not bubble through iframe boundaries automatically.

The message path was therefore:

```text
Question Renderer
      ↓ postMessage
Mission System iframe
      ✕ no relay
Progression Prototype
```

The Progression Prototype listener itself was not the primary defect.

## Fix

`prototype/bahasa-indonesia/mission-system-prototype-v1.html` was updated to relay the validated renderer result to its parent when embedded:

```text
Question Renderer
      ↓
Mission System iframe
      ↓ relay
Progression Prototype
      ↓
localStorage + progression state
```

The Mission System UI was restored to its previous approved presentation while adding only the relay behavior.

Fix commit:
`08f3108919dd9c86bb7fa8062fb1ee6fc886c9f6`

## Important state note

The two previous live-playtest attempts cannot be reconstructed retroactively because the event never reached the progression state and therefore was never persisted there.

The next live test must use fresh attempts after the fix.

## Required re-test

1. Open the current hosted Progression Prototype.
2. Complete one passing mission.
3. Verify outer XP changes from 0 and Mission Complete changes to 1.
4. Verify Learning Evidence appears.
5. Retry and produce a failing attempt.
6. Verify failed attempt does not award completion XP.
7. Retry and pass again.
8. Verify completion reward is still awarded only once.
9. Reload the page and verify persisted progression state remains intact.

## Gate status

**Progression QA / Regression Gate: FAIL — fixed, awaiting user re-test.**

Promotion remains blocked until fresh browser evidence confirms the corrected message path and persistence behavior.
