# World 1 A–F Approved Content Integration — v1.1

## Decision
**CONTROLLED INTEGRATION IMPLEMENTED — QA_PENDING**

This step integrates the approved A–C and D–F pools into a single explicit content pipeline index and exposes a six-item gameplay expansion slice, one approved item per lane A–F.

## Evidence
- A–C approved pool: `phase-3/world-1-approved-content-v1.1.json`, 9 IDs.
- D–F approved pool: `phase-3/world-1-approved-content-d-f-v1.1.json`, 9 IDs.
- Both pools are additive/versioned and do not replace Golden Dataset v1.
- Existing renderer dispatches by `question_type`, not question ID, and randomizes question/option order.

## Implementation
- Pipeline index: `phase-3/world-1-approved-content-v1.1-index.json` — 18 approved IDs across lanes A–F.
- Controlled mission map: `phase-3/world-1-expansion-mission-map-v1.1.json` — explicit six-item slice: AC-001, AC-004, AC-007, DF-001, DF-005, DF-007.
- Controlled runtime dataset: `phase-3/world-1-controlled-expansion-v1.1.json` — six fully provenance-backed items copied from already-approved effective content; no new content generation.
- Gameplay launcher: `prototype/bahasa-indonesia/world-1-expansion.html`.
- Root launcher now exposes the Chapter I Expansion entry.

## Static QA
- Dataset item count: 6.
- Lane coverage: A, B, C, D, E, F — one each.
- IDs unique: PASS.
- Question types: mcq and multi_select, both supported by renderer.
- Provenance student_book + teacher_guide present on all six items.
- Golden Dataset v1 is not modified.
- Existing A–C and D–F approved pools are not modified.
- GitHub Pages deployment for the launcher commit completed successfully.

## Browser QA status
**PENDING USER LIVE PLAYTEST.**

Static verification and Pages deployment are not a substitute for browser interaction evidence. The next gate is to open the Chapter I Expansion launcher and play all six challenges, including at least one wrong answer and the multi-select item.

## Expected live checks
DATA → SCHEMA → TYPES → LOAD → ANSWER → SCORE → COVERAGE → FEEDBACK.

Expected all-correct XP: 700 (6 × 100 XP + 100 completion XP).

## Scope rule
This is a controlled expansion slice, not final World 1 consolidation. The full approved A–F pool remains 18 items and remains available through the approved content index. No mass generation is authorized by this artifact.
