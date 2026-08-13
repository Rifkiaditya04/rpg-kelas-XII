# World 1 — Integrated QA / Regression Gate

## Status
**QA_PENDING — regression harness defect fixed; hosted rerun required.**

## Scope
Complete approved Chapter I World 1 pool:
- A–C v1.1: 9 resolved QA items
- D–F v1.1: 9 resolved QA items
- 18 total approved items

Golden Dataset v1 remains unchanged. A–C and D–F remain separate additive/versioned approved pools.

## User-reported live result before fix
The hosted harness produced:
- DATA: PASS — 9 A–C + 9 D–F
- SCHEMA: PASS — 18 unique IDs
- TYPES: PASS
- PROVENANCE: PASS — 18/18
- LOAD/AC: PASS — 9/9, 900 XP
- INTEGRATED: FAIL — `Question 1 tidak cocok dengan dataset`

The failure occurred immediately after A–C had completed successfully, when the harness started the D–F run.

## Evidence
The original harness navigated the iframe by assigning `frame.src`, then immediately waited only for `#questionArea`. That element also exists in the previously loaded renderer document, so the wait could succeed against stale A–C DOM before the D–F navigation/data load had completed.

Actual harness code before the fix used the sequence equivalent to:

`frame.src = index.html?...dataset=...`

followed by:

`await waitFor(() => frame.contentDocument?.querySelector('#questionArea'))`

and then immediately read `.question` and matched it to the new dataset.

The actual renderer loads the dataset asynchronously with `fetch(DATA_URL, {cache:'no-store'})`, validates it, shuffles `data.items`, and renders the first question. This means the iframe navigation boundary must be synchronized separately from the dataset-render boundary.

## Root cause
**Confirmed implementation-level race in the QA harness, not a content mismatch.**

The harness reused one iframe for two separate dataset runs. Its previous readiness check was not sufficient to prove that the iframe had navigated to the new renderer document before the new dataset was inspected.

## Fix implemented
Commit `9193c68c2d1707b122d554b6d76248ce2fc8491d`.

The harness now:
1. navigates the iframe through an explicit `onload` promise;
2. adds a unique `run=` query token to force a distinct navigation URL;
3. waits for `#questionArea` after navigation;
4. checks for renderer load errors;
5. waits until the rendered `.question` text belongs to the expected dataset before beginning answer selection;
6. applies the same dataset-membership readiness check after each Next action.

## Implementation evidence
The corrected harness contains `navigateToRenderer(...)` with an explicit iframe `onload` wait and a unique `run=` token, followed by a dataset-specific `.question` membership wait before the regression loop.

The actual renderer remains unchanged. Its data-driven dispatch and dataset loading continue to be exercised as the system under test.

## Interpretation
The failure does **not** justify changing A–C/D–F content, answer keys, provenance, renderer question types, or Golden Dataset v1.

The correct interpretation is a **test-harness synchronization defect**. No content promotion status is changed by this failure.

## Required next step
Run the updated hosted harness again. The Integrated Gate may be promoted to PASS only after the browser run itself reports all required checks as PASS, including:
- DATA
- SCHEMA
- TYPES
- PROVENANCE
- LOAD/AC
- LOAD/DF
- ANSWER
- SCORE
- COVERAGE
- FEEDBACK
- INTEGRATION

No downstream World 1 promotion/finalization step should be treated as complete until this gate passes.
