# World 1 — RPG Layer QA / Regression Verification v1

Date: 2026-08-17
Status: CONDITIONAL PASS / QA REMAINS OPEN

## Protocol
Re-sync → read Master Control part 1 + v1.1 → inspect approved RPG specification → inspect prototype implementation → separate Evidence / Implementation / Interpretation → cross-validation → record result.

## Evidence
User live playtest reported:
1. Fresh state: 0 XP, 0 Mission Complete, M01 eligible.
2. NPC interaction → challenge → all correct produced 300 XP, 1 Mission Complete, 100% accuracy, M02 eligible.
3. Reload/browser → challenge → all incorrect produced 300 XP, 1 Mission Complete, 50% accuracy.
4. Weakness/Training Hook appeared after the low result.
5. Training Room entry button was disabled, matching the current prototype scope.

## Implementation verification
Prototype source confirms:
- NPC button reveals Learn/Context section.
- Learn text states the explanation is preparation and does not alter score.
- Challenge is loaded in the existing Mission System iframe rather than duplicated.
- Progression state uses the existing localStorage key `bi12-w01-progression-v1`.
- Completion reward is awarded only when mission accuracy >=70% and `completionAwarded` is false.
- Later attempts update learning evidence without awarding completion XP again.
- Training hook appears when aggregate learning accuracy is below 70%.
- Training Room button is intentionally disabled.
- Eligibility changes from M01 to M02 after completion.

## Cross-validation against approved specification
Specification requires deterministic mission availability, NPC/context interaction, Learn/context behavior without score alteration, Training hook without unauthorized XP, Retry distinct from Training Room, Mission regression, Progression regression, and runtime user evidence.

## Interpretation
CONFIRMED:
- NPC → Learn/context → Mission relationship exists in implementation.
- Progression consumption and M01 → M02 eligibility are user-verified.
- Completion XP boundary is user-verified in the reported playtest.
- Weakness hook is user-verified.
- Training Room remains a future gate and is not incorrectly implemented as Retry.

PARTIALLY CONFIRMED / STILL OPEN:
- The user report establishes the main runtime flow but does not independently document a dedicated check that Learn/context changes no XP before challenge completion.
- Existing Mission System v1 and Progression v1 regression were previously promoted, but this RPG gate requires a regression re-check to prove the new integration did not regress them.
- A dedicated QA runner/result screen for this RPG layer was not supplied in the current evidence; therefore no final PROMOTION claim is made.

## Gate decision
NOT PROMOTED.
QA gate remains OPEN pending:
1. dedicated Learn/no-score-change browser check;
2. Mission System regression check from RPG host;
3. Progression regression check from RPG host;
4. final browser evidence covering the above checks.

This record must not be treated as a failure of the already-passing behavior. It records the remaining evidence required by the approved gate.
