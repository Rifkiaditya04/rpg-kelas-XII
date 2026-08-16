# 011 — Mission System QA: Below-70% Retry Correction

**Date:** 16 August 2026
**Phase:** Phase 3 — Mission System
**Gate:** Mission System QA / Regression Gate
**Status:** PARTIAL PASS / CORRECTION APPLIED

## Evidence

User live playtest verified that the Mission System prototype passes the other QA paths, including mission flow, Learn/Teach, challenge rendering, answer handling, feedback, 70% evaluation, completion flow, and the observed below-70% branch.

Specific finding:

- When the score is below 70%, the UI previously displayed `Training Room` and the button `Masuk Training Room / Coba Lagi`.
- The actual button behavior only restarted the challenge for another attempt; it did not open a distinct targeted Training Room experience.

The source implementation confirms that the button directly reloads the renderer with a retry query parameter. Therefore the behavior is a retry/remedial attempt, not a full Training Room.

## Interpretation

This is an implementation-label mismatch and also identifies a scope boundary:

- **Current prototype:** below-70% → remedial/retry attempt.
- **Full Training Room:** remains a later feature requiring targeted remediation content, not merely replaying the same challenge.

We must not claim that the Training Room is implemented when the current prototype only provides retry.

## Implementation

Updated:

`prototype/bahasa-indonesia/mission-system-prototype-v1.html`

Changes:

- eyebrow changed from `Training Room` to `Retry / Remedial`;
- explanatory copy now describes the branch as reviewing material and trying again;
- action changed from `Masuk Training Room / Coba Lagi` to `Coba Lagi`;
- retry behavior remains unchanged because the actual behavior is retry, not Training Room.

Commit: `f1eb2ca12713f98fb8fcefd2d49f2418714dfc48`

## QA status

The correction removes the misleading UI claim.

However, the dedicated **Training Room** requirement from Mission System Specification v1 is not yet a PASS because a targeted remediation room has not been implemented.

Therefore the overall Mission System QA / Regression Gate remains **OPEN / NOT PROMOTED**.

## Next step

Choose one of two controlled paths before promotion:

1. implement a minimal genuine Training Room prototype with targeted remediation content and regression-test it; or
2. explicitly revise the current Mission System v1 acceptance scope so retry/remedial is accepted as the prototype's first-stage implementation, while Training Room becomes a subsequent gate.

No progression-system expansion should be promoted until this scope decision is documented.
