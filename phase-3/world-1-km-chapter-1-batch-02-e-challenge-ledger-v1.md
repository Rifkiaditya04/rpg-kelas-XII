# World 1 — KM Standard Chapter 1 — Batch 02 E Challenge Ledger v1

**Status:** DESIGN-READY / PRODUCTION BLOCKED ON EXACT TEACHER-GUIDE ANCHOR
**Date:** 2026-08-18
**Scope:** Subbab E — diagnose writing-convention problems

## Protocol state

This artifact was created only after re-syncing the active Master Control, required work-session protocol, Detailed Competency → Challenge Design v1, and Batch 01 promotion record.

## Evidence

Student Book Chapter 1 activity range for Subbab E is recorded as **pp. 19–28** in the existing source-reconciliation artifact.

The approved Detailed Competency → Challenge Design defines E as:
- locate writing-convention problems in an original document;
- classify the type of problem;
- select an appropriate correction;
- explain why the correction improves the communication.

Preferred challenge archetypes are document inspection, repair selection, bounded multi-select diagnosis, and error classification.

## Challenge ledger

| ID | Competency evidence | Cognitive target | Archetype | Candidate interaction | Original document requirement | Status |
|---|---|---|---|---|---|---|
| KM02-E1 | Locate one writing-convention problem in a short official notice | analyze | document inspection / repair selection | mcq | fictional school notice with one deliberately planted convention problem | READY AFTER SOURCE GATE |
| KM02-E2 | Classify the problem before repair | analyze | error classification | mcq | same competency family, different fictional document | READY AFTER SOURCE GATE |
| KM02-E3 | Select the correction that preserves intended meaning and formal purpose | evaluate | repair selection | mcq | fictional official communication with competing repairs | READY AFTER SOURCE GATE |
| KM02-E4 | Identify all relevant problems in a bounded excerpt | analyze/evaluate | multi-select diagnosis | multi_select | short fictional official communication containing 2–3 independently designed issues | READY AFTER RUNTIME TYPE CHECK |

## Anti-redundancy rule

Batch 02 must not merely repeat the surface pattern of D1/D2. D focused on structure/function and formal-register diagnosis. E must move into deliberate convention-problem diagnosis and repair, with the learner required to distinguish the problem type and/or select a repair that preserves communicative intent.

## Originality boundary

All eventual documents, names, dates, institutions, wording, errors, options, and explanations must be newly authored. No source exercise, example document, distinctive sentence, or answer choice may be copied or superficially rewritten.

## Provenance gate

**Student Book:** confirmed at Chapter 1 Subbab E, pp. 19–28.

**Teacher Guide:** exact activity/page anchor for Subbab E is **not yet line-level verified from the repository artifact in this session**. It must be resolved before production wording is promoted. No guessed Teacher Guide page is recorded here.

## Renderer gate

`mcq` is already proven by Batch 01 browser regression. `multi_select` is allowed by schema but requires actual runtime verification before KM02-E4 can enter a browser gate. If multi_select runtime is unsupported, E4 must be redesigned rather than weakening the competency.

## Production boundary

This ledger does not contain final question wording, final answer options, or canonical content. It is a controlled design artifact pending exact Teacher Guide cross-validation.

## Next action

Resolve the exact Teacher Guide Subbab E activity/page anchor from `Indonesia_BG_KLS_XII_Rev_.md`. Then draft the smallest controlled original E batch and materialize it against schema 1.1.
