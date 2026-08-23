# PROJECT LOG 077 — World 1 KM Chapter 1 F–G Gate A — Option-Order Decision

## Status
**RESOLVED — REGRESSION SPECIFICATION ALIGNED WITH APPROVED RENDERER BEHAVIOR**

## Protocol
Re-sync completed before this decision. Master Control Part 1 + v1.1, REQUIRED-WORK-SESSION-PROTOCOL, F–G logs 063–075, controlled fixture, regression specification, adapter, hosted regression page, and actual renderer were cross-validated.

## Evidence
- The established mission renderer intentionally randomizes question order and option order at runtime. This behavior is already part of the approved/verified renderer baseline; the F–G regression gate must not introduce a contradictory new production renderer requirement.
- The F–G regression specification v1 previously required the exact visible option order to remain deterministic.
- The controlled fixture itself remains deterministic and balanced: canonical positions A=1/B=2/C=2/D=1.
- User live R1/R2/R3 evidence confirms answer-value mapping and replay isolation, but cannot prove deterministic visible option order because the renderer intentionally shuffles options.

## Decision
The F–G renderer regression gate is changed from **visible option-order determinism** to **semantic answer-value mapping**.

The fixture must preserve its canonical option values and canonical-answer mapping. The renderer is allowed to shuffle the visible option order exactly as the established renderer does. R1 must prove that canonical answers remain correct regardless of whether the canonical value is rendered at A/B/C/D. R2 must prove non-canonical values are rejected. R3 must prove replay isolation.

This resolves the specification/implementation conflict **without changing the production renderer**.

## Non-goals
- Do not remove option shuffling from the renderer.
- Do not alter Golden Dataset v1.
- Do not reinterpret the controlled fixture as production content.
- Do not use visible button position as the answer key.

## Gate A result
**PASS / RESOLVED.** The regression specification now tests the stable contract that matters: canonical answer identity/value mapping, not transient UI order.

## Next gate
Gate B — F–G Bahasa Indonesia content/localization revision, followed by versioned fixture and QA.
