# Bug 001 — Integrated Regression stale iframe state

**Status:** CLOSED / VERIFIED
**Affected area:** QA harness only
**Not a content defect. Not a renderer-content defect.**

## Evidence
First integrated run:

- A–C: PASS, 9/9, 900 XP
- Integrated transition to D–F: FAIL — `Question 1 tidak cocok dengan dataset`

The failure occurred immediately after switching the iframe from the A–C dataset to the D–F dataset.

## Root cause
The harness relied on the existing `#questionArea` element as evidence that the newly requested dataset had loaded. That element could still represent the previous A–C renderer state during asynchronous navigation.

## Implementation fix
The harness was changed to wait for iframe load, use a unique run token for dataset navigation, reject renderer load errors, and verify that the rendered question text belongs to the active dataset before continuing.

## Verification
A subsequent user live browser run produced:

- LOAD/AC: PASS — 9/9 · 900 XP
- LOAD/DF: PASS — 9/9 · 900 XP
- ANSWER: PASS — 18/18
- SCORE: PASS — 1,800 XP total across A–F batches
- COVERAGE: PASS — 18/18
- FEEDBACK: PASS
- INTEGRATION: PASS

## Final status
Closed. No A–F question content was changed to resolve this incident.