# PROJECT LOG 020 — World 1 RPG Layer Live Playtest

**Status:** PASS for observed controlled prototype behaviors; RPG Layer remains QA_PENDING until the full regression gate is closed.

## Evidence

User performed hosted browser live playtest of `prototype/bahasa-indonesia/world-1-rpg-layer-training-room-prototype-v1.html`.

### Attempt 1 — M01
- Initial state: 0 XP, 0 Mission Complete, Learning Accuracy —, M01 eligible.
- User interacted with NPC → started challenge → answered all questions correctly.
- Result: 300 XP, 1 Mission Complete, 100% Learning Accuracy.
- Next eligible mission changed to M02.

### Attempt 2 — after reload
- User reloaded the tab/browser and interacted with NPC → started challenge → answered all questions incorrectly.
- Result: XP remained 300, Mission Complete remained 1, Learning Accuracy became 50%.
- Learning Weakness / Training Hook appeared.
- Training Room UI displayed the controlled entry concept and explicitly stated that it only tests navigation/entry concept, has no final mastery threshold, and grants no XP.
- The Training Room entry was not clickable. This is consistent with the approved prototype boundary: the first implementation gate defines an explicit entry-point concept, while the final Training Room is a later gated feature.

## Interpretation

The live evidence confirms the following prototype behaviors:
1. NPC → challenge flow functions.
2. Successful mission consumes existing progression and grants the configured completion reward.
3. Completion state persists across reload.
4. Deterministic next mission eligibility works: M01 completion makes M02 eligible.
5. Failed subsequent attempt does not add completion XP or duplicate Mission Complete.
6. Aggregate learning accuracy changes from 100% to 50% after the second attempt.
7. Weakness/Training Hook is surfaced after evidence indicates difficulty.
8. Training Hook does not grant XP.
9. Retry/failure remains distinct from Training Room; the hook is an entry concept, not a replacement Retry action.

## QA boundary

This is not yet a promotion record. Remaining gate items include full deterministic/source regression, explicit Learn/context verification, Mission System regression, Progression v1 regression, and any additional runtime checks required by the approved specification.

## Source basis

The approved RPG Layer & Training Room Specification requires deterministic mission availability, NPC/context interaction, Learn/context behavior without scoring changes, a non-rewarding Training Room hook, separation from Retry, and preservation of existing Mission/Progression contracts. See `phase-3/world-1-rpg-layer-training-room-specification-v1.md`.
