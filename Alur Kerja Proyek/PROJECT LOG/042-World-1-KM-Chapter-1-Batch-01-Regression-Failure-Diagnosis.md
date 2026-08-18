# PROJECT LOG 042 — World 1 KM Chapter 1 Batch 01 Regression Failure Diagnosis

**Date:** 2026-08-18
**Status:** FIX IMPLEMENTED — BROWSER RE-RUN REQUIRED

## 1. User evidence

User executed the Batch 01 QA harness and reported:
- DATA: PASS — 6 items
- IDS: PASS — all six unique IDs
- CONTRACT: PASS — MCQ answer shape + options
- LOAD: PASS — actual renderer via index.html
- RUNTIME: FAIL — timeout

## 2. Root-cause analysis

The draft payload uses the top-level array key `questions`, while the existing renderer historically expected `items`. The renderer's original validation therefore could reject the draft payload before producing a `.question` element.

The old harness had a race/diagnostic weakness: it waited for the static `#questionArea` element, then checked `#loadError` only once. If the renderer failed asynchronously after that check, the harness could report LOAD PASS and then wait indefinitely for `.question`, producing only a generic `timeout`.

This means the reported timeout was not accepted as a content failure. It was diagnosed as a renderer/harness compatibility and observability defect.

## 3. Fixes implemented

### Renderer
Updated `prototype/bahasa-indonesia/renderer.js` to accept both `data.items` and `data.questions` as compatible question-bank array shapes while preserving the existing canonical `items` path.

Commit:
`98a5d47c9d24e52ac76e1b07a7e529ea3a1d1457`

The validator now checks the resolved array and applies the same provenance, answer-shape, interaction-type, and duplicate-ID gates.

### Regression harness
Updated `prototype/bahasa-indonesia/km-chapter-1-batch-01-regression.html` to:
- resolve either `items` or `questions`;
- wait for an actual `.question` or a visible `#loadError`;
- surface renderer load errors instead of converting them into an opaque timeout;
- retain the six-item canonical-answer interaction test.

Commit:
`f5b37d0c19a7afb435b887459c5175dbe8a1198f`

## 4. Current decision

The previous runtime result remains **FAIL / INCONCLUSIVE AS A CONTENT GATE** because the failure was caused by a compatibility/diagnostic defect, not a demonstrated incorrect answer or content-rendering defect.

No canonicalization or Golden Dataset promotion is authorized.

## 5. Required next evidence

Re-run the same hosted harness after the fixes. The expected useful outcomes are:
- PASS: all six questions render and canonical answers are accepted; or
- FAIL with a concrete item-level error instead of a generic timeout.

Only the new browser evidence can close the runtime gate.
