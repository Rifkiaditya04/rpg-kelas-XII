# PROJECT LOG 090 — World 1 KM Chapter 1 F–G Post-Fix R2 Evidence

## Objective
Record the user's fresh browser evidence after the explicit 100% completion-reward contract fix, and determine the remaining regression gate without conflating pre-fix evidence with post-fix evidence.

## Protocol followed
Re-synced repository and continued from the last verified F–G point. Read the active Master Control continuation/addendum, Project Logs 086–089, the current renderer implementation, and the production candidate context before interpreting the new evidence. Evidence, implementation, and interpretation are kept separate.

## Evidence
User reports that after the reward-contract implementation fix, R2 was rerun and now produces:
- all six answers incorrect;
- 0/6 correct;
- 0% accuracy;
- no additional completion XP.

This is fresh user-verified browser evidence supplied in the current work session.

## Implementation verification
Current `prototype/bahasa-indonesia/km-batch-01-renderer-v1.js` gates completion reward with `correct === questions.length`. Therefore a 0/6 result does not receive `mission_completion_xp`.

The per-correct reward remains 100 XP. The explicit project decision is that the 100 XP completion reward is awarded only at 100% correctness.

## Interpretation
R2 post-fix reward behavior is **PASS** against the explicit user-approved reward contract. This resolves the observed pre-fix 0/6 + 100 XP implementation gap.

This does not by itself close the complete post-fix browser regression because R1 and R3 must be evaluated against the updated implementation as well. Earlier R1/R3 results are retained as historical pre-fix evidence and are not silently rewritten.

## Cross-validation
- PROJECT LOG 089 defines the approved contract and required post-fix expectations.
- Current renderer implementation matches the contract.
- User browser evidence matches the R2 expected result: 0/6, 0% and 0 completion XP.

## Decision
**R2 post-fix: PASS.**

Overall F–G production-shaped browser regression remains **QA_PENDING** until post-fix R1 and R3 evidence are supplied/verified.

## Files changed
- this PROJECT LOG entry only.

No question data, Golden Dataset, fixture, or renderer code was changed in this work step.

## Next gate
Run post-fix R1 and R3 with the current renderer:
- R1: 6/6, 100%, 700 XP.
- R3: use Reload runtime, then 6/6, 100%, 700 XP.

Only after all post-fix browser evidence passes may the production-shaped regression be closed and the separate additive promotion decision be considered.
