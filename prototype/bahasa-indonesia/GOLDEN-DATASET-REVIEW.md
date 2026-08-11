# Golden Dataset v1 — Review Gate

## Status
**Validation candidate — not yet production-approved.**

## Review completed
- 10 seed items cover all four Bahasa Indonesia worlds.
- Multiple interaction types are represented.
- Each item has an ID, chapter, topic, skill, cognitive level, difficulty, answer, explanation, source metadata, and game mechanic in the source dataset.
- The browser renderer can present the current seed set, score answers, show explanations, and finish with an accuracy summary.

## Issues intentionally kept open
1. Exact page/section provenance still needs final verification against the source text and Buku Guru.
2. The multi-select item needs the same generic interaction model as future multi-select questions; the current prototype recognizes the current seed item explicitly.
3. Creative/open-ended tasks are not yet represented in the renderer and require rubric support.
4. Source-grounded wording and distractors require teacher-guide cross-check before mass generation.
5. The current prototype is a gameplay/technical proof, not the final visual design.

## Approval rule
Do not generate hundreds of questions until these issues are reviewed and the golden set is approved.

## Next technical step
Refactor the renderer so interaction type is data-driven rather than hard-coded, then run the browser prototype through the quality gate.
