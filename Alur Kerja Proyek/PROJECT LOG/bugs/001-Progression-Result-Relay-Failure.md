# BUG 001 — Progression Result Relay Failure

**Date:** 17 August 2026  
**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** HARDENED FIX IMPLEMENTED — REQUIRES FRESH LIVE RE-TEST

## Evidence — first defect

Initial live playtest showed that Mission System displayed correct results but the outer Progression State remained at zero. The defect was traced to the nested iframe message path.

## First fix

The Mission System was changed to relay `MISSION_RENDERER_RESULT` to its parent Progression Prototype.

## Evidence — second live playtest after relay fix

User reported:

1. First attempt: all answers correct, but Progression State did not change.
2. Second attempt: all answers wrong; Progression State began updating.
3. Third attempt: all answers correct; XP / mission state / learning accuracy updated.
4. Closing the tab and reopening the hosted prototype preserved the progression state.

Observed state after the sequence:

- XP: 400
- Mission Complete: 1
- Learning Accuracy: 67%

### Interpretation

Persistence is confirmed by user evidence because state survived tab closure/reopen.

The first-attempt capture is **not yet confirmed reliable**. Because the first passing attempt was not reflected while later attempts were, the system still has a startup/handshake race or equivalent first-result delivery risk.

The displayed 67% accuracy also cannot be used as proof that all three reported attempts were accumulated correctly without first-attempt capture; it is an observed state, not yet a validated expected result for the described sequence.

## Root-cause hardening

The nested iframe chain is:

```text
Question Renderer
      ↓ postMessage
Mission System iframe
      ↓ relay
Progression Prototype
```

The relay alone is insufficient if the parent/child relationship is not ready when the first result is emitted. To remove that timing dependency, the Mission System now caches the latest validated renderer result and can replay it when the Progression Prototype sends a `PROGRESSION_READY` handshake.

The Progression Prototype now sends `PROGRESSION_READY` after the Mission System iframe loads. The Mission System responds with its cached result when one exists.

## Hardened implementation

Commits:

- First relay fix: `08f3108919dd9c86bb7fa8062fb1ee6fc886c9f6`
- Mission handshake/replay hardening: `5db5ea4dfac413eed97eb4ebe3a3c3b5d7ee63fa`
- Progression ready-handshake implementation: `75ba1d06c3a267b05852873cac46b3e804f5497d`

The Mission System presentation remains unchanged in scope; the changes are transport/reliability behavior only.

## Required fresh re-test

Use a clean progression state for the test. The existing browser state should not be used as evidence for the first-attempt test.

1. Clear site data/localStorage for the hosted prototype, or use a fresh browser/incognito context.
2. Open the current hosted Progression Prototype.
3. First attempt: PASS (all questions correct).
4. Immediately verify outer Progression State updates after submission.
5. Verify Learning Evidence appears and reflects that first attempt.
6. Second attempt: FAIL (<70%).
7. Verify learning evidence increases while completion XP does not increase.
8. Third attempt: PASS.
9. Verify completion XP is awarded only once.
10. Close the tab, reopen the hosted prototype, and verify persisted state.

## Gate status

**Progression QA / Regression Gate: FAIL — first-attempt capture reliability not yet proven; hardened fix awaiting fresh live re-test.**

Promotion remains blocked until a clean-state first-attempt PASS is observed and persistence/anti-farming checks pass.