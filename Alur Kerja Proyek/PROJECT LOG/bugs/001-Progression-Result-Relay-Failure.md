# BUG 001 — Progression Result Relay Failure

**Date:** 17 August 2026  
**Phase:** Phase 3 — Progression  
**Artifact:** Controlled World 1 Progression Prototype v1  
**Status:** CLOSED — hardened fix user-verified in clean private-browser live test

## Evidence — initial defect

Initial live playtest showed that Mission System displayed correct results but the outer Progression State remained at zero. The defect was traced to the nested iframe message path.

## Fix history

The Mission System was first changed to relay `MISSION_RENDERER_RESULT` to its parent Progression Prototype. The transport was then hardened with a readiness handshake:

- Mission System caches the latest validated renderer result.
- Progression Prototype sends `PROGRESSION_READY` after the Mission System iframe loads.
- Mission System replays its cached result when the parent is ready.

Commits:

- First relay fix: `08f3108919dd9c86bb7fa8062fb1ee6fc886c9f6`
- Mission handshake/replay hardening: `5db5ea4dfac413eed97eb4ebe3a3c3b5d7ee63fa`
- Progression ready-handshake implementation: `75ba1d06c3a267b05852873cac46b3e804f5497d`

## Final live evidence

The user explicitly used a **fresh private-browser context** so persisted state from the normal browser would not contaminate the first-attempt test.

### Attempt 1 — fresh state

- Initial state: zero progression.
- All questions correct.
- Progression immediately updated to **400 XP**, **1 Mission Complete**, **100% Learning Accuracy**.

### Attempt 2 — failure

- All questions incorrect.
- XP remained **400**.
- Mission Complete remained **1**.
- Learning evidence accumulated and aggregate accuracy became **50%**.

### Attempt 3 — pass

- All questions correct.
- XP remained **400**.
- Mission Complete remained **1**.
- Aggregate learning accuracy became approximately **67%**.

### Persistence

- Tab was closed and the hosted prototype reopened.
- Progression remained stored.

## Interpretation

The earlier first-attempt concern was a false positive caused by interpreting the displayed attempt counter without the user's private-browser reset context. The final clean-state evidence confirms first-attempt capture. The hardened result relay/handshake is considered operational for this controlled prototype.

## Resolution

**BUG CLOSED.**

The progression QA gate is now **PASS**. No further fix is required for this defect unless a future regression reproduces it.
