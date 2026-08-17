# QA 002 — Progression Live Retest — Partial Pass

**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** PARTIAL PASS — first-attempt capture remains unresolved/unverified

## User live evidence

The user performed a hosted live playtest after the first relay fix.

Observed sequence:

1. First attempt: all answers correct, but Progression State did not update.
2. Second attempt: all answers wrong; Progression State began updating.
3. Third attempt: all answers correct; XP, Mission Complete, and Learning Accuracy updated.
4. Closing the playtest tab and reopening the hosted link preserved the progression state.

Observed persisted state:

- XP: 400
- Mission Complete: 1
- Learning Accuracy: 67%

## Evidence classification

### PASS / confirmed

- Progression state can receive result events after the first missed attempt.
- Completion XP is reflected in outer Progression State.
- Mission Complete is reflected in outer Progression State.
- Learning Accuracy is reflected in outer Progression State.
- State persistence across tab close/reopen works.

### FAIL / unverified

- First-attempt result capture is not reliable enough to promote.
- The observed 67% aggregate accuracy cannot be treated as the expected result for the described sequence until the first attempt is captured deterministically.

## Implementation response

A handshake/replay mechanism was added:

- Mission System caches the latest validated renderer result.
- Progression Prototype sends `PROGRESSION_READY` after the Mission iframe loads.
- Mission System replays its cached result when it receives that handshake.

Commits:

- Mission System hardening: `5db5ea4dfac413eed97eb4ebe3a3c3b5d7ee63fa`
- Progression Prototype handshake: `75ba1d06c3a267b05852873cac46b3e804f5497d`

## Required next test

Use a fresh/cleared localStorage context and verify:

1. First attempt PASS is immediately reflected in Progression State.
2. Learning evidence records that first attempt.
3. Second attempt FAIL adds learning evidence but no completion reward.
4. Third attempt PASS does not duplicate completion reward.
5. State survives reload/tab close.

**Promotion remains blocked until the clean-state first-attempt test passes.**
