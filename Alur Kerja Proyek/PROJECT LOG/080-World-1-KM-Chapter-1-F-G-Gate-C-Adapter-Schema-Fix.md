# PROJECT LOG 080 — World 1 KM Chapter 1 F–G Gate C Adapter Schema Fix

## Session type
**QA / regression debugging — no production renderer change**

## Protocol precondition
Before changing the adapter, the current work-session protocol and Master Control chain were re-synced. Gate C browser evidence exposed a runtime load failure, so the workflow stopped at diagnosis instead of being marked PASS.

## Evidence supplied by browser
The hosted F–G Renderer Regression v1.1 ID page reported:
- `STATIC GATE PASS` for the harness-level checks;
- actual renderer: `prototype/bahasa-indonesia/km-batch-01-runtime.html`;
- runtime load error: every F/G item failed required renderer fields such as `chapter_id`, `topic_id`, `skill`, `cognitive_level`, `difficulty`, `question_type`, `source`, `provenance`, `mode`, and `game_mechanic`;
- `question_type` was read as `undefined`;
- student-book and teacher-guide provenance were reported incomplete.

## Root cause
The v1.1-ID QA adapter was structurally valid for the custom regression harness, but it was **not valid against the actual KM renderer's dataset schema**.

The actual renderer validates each item for the following fields:
`id`, `chapter_id`, `topic_id`, `skill`, `cognitive_level`, `difficulty`, `question_type`, `question`, `answer`, `explanation`, `source`, `provenance`, `mode`, and `game_mechanic`.

It also requires `source.student_book.pages`, `source.student_book.section`, `source.teacher_guide.pages`, and `source.teacher_guide.section`. It supports `mcq` among the allowed question types.

The adapter previously contained only the QA regression-facing subset (`id`, `question`, `options`, `answer`, `explanation`) plus adapter-level metadata. Therefore the actual renderer correctly rejected it.

## Fix
Updated:
`phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.1-id-adapter.json`

Commit:
`f4c169e8bfee2252651946584d7e7caf3cd70430`

The adapter now supplies the complete renderer schema while remaining QA-only. It preserves the Indonesian fixture prompt, option values/order, canonical answer values, and explanations. It does not modify the production renderer or Golden Dataset.

For provenance, the adapter uses explicit QA-only/unverified metadata rather than inventing page numbers or claiming independently verified Teacher Guide provenance. This matches the earlier F–G provenance boundary.

The adapter retains:
- `xp_per_correct = 100`
- `mission_completion_xp = 0`
- production content = false
- Golden Dataset change = false

## Cross-validation
The actual renderer source confirms that it loads `data.items`/`data.questions`, validates the item schema, then reads `data.rewards.xp_per_correct` and `data.rewards.mission_completion_xp`. It also shuffles question order and visible option order; Gate A already approved semantic canonical-value evaluation rather than transient button position.

## Interpretation
The previous Gate C failure was **not** an Indonesian content failure and **not** a renderer defect. It was an adapter-to-renderer schema mismatch introduced during QA harness construction.

Gate C therefore remains **OPEN** pending a fresh browser execution after this adapter correction.

## Required next action
Reload the hosted regression page, run the static gate again, then execute R1, R2, and R3. Do not claim Gate C PASS until browser results are observed after the corrected adapter is deployed.

## Boundary
No Golden Dataset, production renderer, or production F–G content was changed in this fix.
