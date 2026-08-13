# World 1 Controlled Expansion — XP Fix QA

## Status
QA_PENDING — awaiting hosted browser regression after the XP fix.

## Evidence
User live playtest of the six-item Chapter I Expansion completed 6/6 with 100% accuracy, but the result screen showed 600 XP instead of the mission-map target of 700 XP.

## Root cause
The expansion mission map defines `rewards.xp_per_correct = 100` and `rewards.mission_completion_xp = 100`, but the generic renderer previously awarded only `+100` per correct answer and never read the dataset-level mission completion reward. Therefore six correct answers produced 600 XP.

## Implementation
1. `prototype/bahasa-indonesia/renderer.js`
   - Reads optional dataset-level `rewards.xp_per_correct` with a 100 XP default.
   - Reads optional dataset-level `rewards.mission_completion_xp` with a 0 XP default.
   - Awards the completion reward exactly once in `finish()`.
   - Existing datasets without completion rewards preserve their previous scoring behavior.
2. `phase-3/world-1-controlled-expansion-v1.1.json`
   - Added the data-driven reward contract: 100 XP per correct + 100 XP mission completion.
3. `prototype/bahasa-indonesia/index.html`
   - Renderer cache version bumped to `renderer.js?v=3` so the hosted browser receives the fix.

## Expected regression
For the six-item controlled expansion mission:
- 6/6 correct = 700 XP
- 5/6 correct = 600 XP
- 0/6 correct = 100 XP if the mission is completed

The 100 XP completion reward is independent of the number of correct answers and is awarded once at mission completion.

## Scope protection
- No approved question content was changed.
- Golden Dataset v1 remains untouched.
- Approved A–C and D–F pools remain untouched.
- This is a renderer/data-contract correction, not a content revision.

## Next gate
Run the hosted Chapter I Expansion live playtest again. Only after the browser result confirms the expected XP will this defect be marked resolved and the Master Control synchronized.