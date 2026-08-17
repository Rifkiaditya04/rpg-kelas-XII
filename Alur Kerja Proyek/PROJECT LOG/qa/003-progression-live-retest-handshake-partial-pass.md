# QA 003 — Progression Live Retest — Handshake / Persistence Partial Pass

**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** PARTIAL PASS — clean-state first-attempt capture is still not independently proven

## User live evidence

The user supplied three successive live snapshots from the hosted progression prototype:

### Snapshot A
- XP: 400
- Mission Complete: 1
- Learning Accuracy: 100%
- Learning evidence: attempts 3, correct 3, accuracy 100%
- `BI12-W01-M01` is marked complete and `BI12-W01-M02` is eligible.

### Snapshot B
- XP: 400
- Mission Complete: 1
- Learning Accuracy: 50%
- Learning evidence: attempts 6, correct 3, accuracy 50%
- Recent error pattern: `below-mission-threshold`.

### Snapshot C
- XP: 400
- Mission Complete: 1
- Learning Accuracy: 67%
- Learning evidence: attempts 9, correct 6, accuracy 66.66666666666666%
- Recent error pattern: `none`.

## Confirmed evidence

- Result events now reach the Progression State during repeated live attempts.
- Learning evidence accumulates across attempts instead of being overwritten.
- Correct/incorrect totals and aggregate accuracy update consistently: 3/3 → 3/6 → 6/9.
- Completion XP remains 400 across subsequent attempts; no duplicate completion reward was observed.
- Mission Complete remains 1 after subsequent retry/pass cycles.
- The progression state includes unlock eligibility for `BI12-W01-M02` after `BI12-W01-M01` completion.

## Important limitation

The snapshots begin at `attempts: 3`, not at a fresh `attempts: 0` state. Therefore this evidence strongly indicates that the handshake/replay fix is functioning in the repeated-attempt flow, but it does **not** independently prove the required clean-state criterion that the very first attempt after a cleared localStorage/session is captured immediately.

Do not promote the Progression QA gate solely from this evidence.

## Required final QA test

Perform one fresh/cleared localStorage test:

1. Initial state must be XP 0 / Mission Complete 0 / Accuracy —.
2. First attempt PASS must immediately produce the completion reward and Learning Evidence attempts = 1.
3. Second attempt FAIL must add one attempt without adding completion XP.
4. Third attempt PASS must not duplicate completion XP.
5. Reload/tab close must preserve the resulting state.

## Classification

- Handshake / result relay: **confirmed working in repeated live flow**.
- Persistence: **confirmed** from prior QA 002 evidence and continued state retention.
- Anti-duplicate completion reward: **confirmed for observed repeated attempts**.
- Clean-state first-attempt capture: **unverified**.
- Promotion: **blocked pending clean-state test**.
