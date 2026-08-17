# QA 003 — Progression Live Retest — Handshake / Persistence PASS

**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** PASS — user-verified hosted/browser evidence

## Evidence

The user clarified that the live regression was started from a fresh private-browser context specifically to avoid the persisted state from the normal browser. Therefore the first observed progression sequence is valid clean-state evidence.

### Attempt 1 — fresh state
- Initial progression state was reset to zero in the private-browser context.
- All mission questions were answered correctly.
- Progression immediately updated to **400 XP**, **1 Mission Complete**, and **100% Learning Accuracy**.
- Learning evidence reflected the successful attempt.

### Attempt 2 — retry/failure
- All mission questions were answered incorrectly.
- XP remained **400**.
- Mission Complete remained **1**.
- Learning evidence accumulated the failed attempt and aggregate accuracy became **50%** after the observed sequence.
- Recent error pattern became `below-mission-threshold`.

### Attempt 3 — retry/pass
- All mission questions were answered correctly.
- XP remained **400**; completion reward was not duplicated.
- Mission Complete remained **1**.
- Learning evidence accumulated again and aggregate accuracy became approximately **67%** (stored precision 66.66666666666666%).

### Persistence
- The user closed the playtest tab and reopened the hosted prototype.
- Progression state remained stored.

## Confirmed checks

- Fresh-state initialization: **PASS**.
- First-attempt capture: **PASS**.
- Result relay/handshake: **PASS**.
- Learning evidence accumulation: **PASS**.
- Aggregate accuracy calculation: **PASS**.
- Completion XP anti-farming: **PASS**.
- Mission completion count integrity: **PASS**.
- Unlock eligibility for `BI12-W01-M02` after `BI12-W01-M01` completion: **PASS**.
- Persistence across tab close/reopen: **PASS**.
- No universal level curve or mastery threshold was introduced: **PASS**.

## Interpretation

The progression contract is now user-verified in the hosted browser for the controlled prototype. The earlier first-attempt concern is closed: the user explicitly established a clean private-browser context for the successful first attempt. No additional replay test is required for this gate.

## Gate result

**Progression QA / Regression Gate: PASS.**

Promotion may proceed to the next documented decision gate after Master Control and the historical bug record are updated.
