# World 1 Controlled Expansion — XP Fix QA

## Status
**PASS — user live-verified**

## Evidence
User reran the hosted Chapter I Expansion after the XP fix and completed all six challenges correctly. The result screen showed **6/6, 700 XP, 100% accuracy**.

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
   - Renderer cache version bumped so the hosted browser receives the fix.

## Verified regression
- 6/6 correct = **700 XP** — PASS.
- User browser result: **6/6, 700 XP, 100% accuracy**.

The 100 XP completion reward is independent of the number of correct answers and is awarded once at mission completion.

## Scope protection
- No approved question content was changed.
- Golden Dataset v1 remains untouched.
- Approved A–C and D–F pools remain untouched.
- This was a renderer/data-contract correction, not a content revision.

## Gate consequence
The XP defect is resolved and no longer blocks World 1 Integrated QA / Regression Gate.
