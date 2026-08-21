# PROJECT LOG 065 — World 1 KM Chapter 1 — F–G Renderer QA XP Correction

**Status:** QA FIX APPLIED / RUNTIME RE-RUN REQUIRED
**Date:** 2026-08-21
**Phase:** Phase 3 — Content / Gameplay Rebaseline

## Protocol re-sync
Before making this correction, the active Master Control pair and PROJECT LOG 064 were re-read. The mandatory protocol remains: re-sync → verify active artifacts → Evidence / Implementation / Interpretation → execute → verify → document. No production content, Golden Dataset, renderer source, E1–E4, RPG layer, Training Room, Learning Evidence contract, or NPC presentation baseline is changed by this correction.

## Evidence
User-verified hosted browser evidence for the synthetic F–G capability fixture showed:
- DATA PASS — 2 synthetic items.
- IDS PASS — QA-FG-F1, QA-FG-G1.
- CONTRACT PASS — multi_select, 5 options, 3 canonical answers each.
- GOLDEN DATASET PASS — separate QA fixture.
- Canonical F + G combinations were accepted, resulting in 2/2, 100% accuracy.
- Runtime result displayed **200 XP**.

The project QA reward convention requires a completion bonus in addition to per-correct XP for a fully completed mission-shaped QA run. With 2 correct items at 100 XP each, the expected total is **300 XP** (200 per-correct + 100 mission-completion bonus). The previous fixture explicitly had `mission_completion_xp: 0`, which caused the 200 XP result.

## Implementation
Updated:
`phase-3/world-1-km-chapter-1-f-g-renderer-capability-qa-v1.json`

Reward configuration changed additively:
- `xp_per_correct`: 100 (unchanged)
- `mission_completion_xp`: **100** (corrected from 0)

Commit:
`c2aa1b818480663e64d0d00fbba4ba08419c8fff`

No question text, options, canonical answers, interaction type, provenance, or renderer source was changed.

## Interpretation
The 2/2 canonical selection result remains useful evidence that the actual renderer accepted both F and G canonical combinations. However, the QA run is not closed as final PASS because the reward output did not match the project's expected mission-shaped reward convention. The fixture reward configuration is now corrected, and a hosted browser re-run is required.

## Current status
- Synthetic F–G fixture: corrected.
- Actual renderer source: unchanged.
- Golden Dataset: unchanged.
- Runtime capability gate: **PENDING RE-RUN**.
- F/G original production content drafting: **BLOCKED until capability gate is formally closed**.

## Next action
Re-run the hosted F–G capability QA with the corrected fixture. Confirm 2/2 canonical combinations still pass and the mission result displays **300 XP**. Where practical, exercise at least one wrong/single combination and confirm rejection. Only then close the capability gate and proceed to F/G original content design.
