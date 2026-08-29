# PROJECT LOG 089 — World 1 KM Chapter 1 F–G Reward Contract — 100% Completion

## Objective
Resolve the reward-contract ambiguity discovered during production-shaped F–G browser regression.

## Protocol followed
1. Re-synced the repository before changing implementation.
2. Re-read the active Master Control chain relevant to F–G and the previous production-candidate QA record.
3. Verified the production candidate reward fields and actual KM renderer implementation.
4. Separated Evidence / Implementation / Interpretation.
5. Applied the user's explicit decision before changing reward behavior.
6. Documented the implementation change before advancing the gate.

## Evidence
The F–G production candidate declares `xp_per_correct=100` and `mission_completion_xp=100`. The actual renderer previously awarded `mission_completion_xp` whenever the final result was reached, regardless of accuracy. This produced 100 XP on the 0/6 non-canonical path.

Runtime evidence supplied by the user:
- R1 canonical: 6/6, 100%, 700 XP.
- R2 non-canonical: 0/6, 0%, 100 XP before the fix.
- R3 after Reload runtime: 6/6, 100%, 700 XP.

## User decision
The user explicitly defines the completion reward contract:

**The 100 XP mission-completion reward is awarded only when all questions are answered correctly (100% accuracy).**

Per-question XP remains 100 XP for each correct answer. The separate mission-completion threshold remains distinct from the completion-reward eligibility rule.

Expected results for the six-item candidate therefore become:
- 6/6: 600 per-correct XP + 100 completion XP = 700 XP.
- 0/6: 0 per-correct XP + 0 completion XP = 0 XP.
- Any result below 100%: per-correct XP only; no completion XP.

## Implementation
Updated:
`prototype/bahasa-indonesia/km-batch-01-renderer-v1.js`

The completion reward is now awarded only when `correct === questions.length`.

Commit:
`0debb50577c7673a05b07a7a42b7e615f3b2f0fb`

Golden Dataset: unchanged.
F–G QA fixture: unchanged.
F–G production candidate questions: unchanged.
Production renderer content/data: no content changes; reward eligibility logic only.

## Interpretation
The prior 100 XP on R2 was an implementation gap against the now-explicit reward contract, not a content-answer mapping failure. The 700 XP R1 result remains correct.

## Cross-validation
Candidate reward values remain 100 XP/correct and 100 completion XP. The renderer now gates completion XP on 100% correctness. The 70% mission-completion threshold is not silently removed; it is separate from completion-reward eligibility.

## Decision
**Reward completion contract clarified and implementation corrected.**

## Next gate
Re-run production-shaped browser regression for R1/R2/R3 using the updated renderer. Required evidence: R1 = 6/6 and 700 XP; R2 = 0/6 and 0 XP; R3 reload/replay = 6/6 and 700 XP.
