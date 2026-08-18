# World 1 — KM Standard Chapter 1 — Batch 02 E Challenge Ledger v1

**Status:** PRODUCTION-READY FOR E1–E3 / E4 RUNTIME-GATED
**Date:** 2026-08-18
**Scope:** Subbab E — diagnose writing-convention problems

## Protocol state

This artifact was created and updated only after re-syncing the active Master Control, required work-session protocol, Detailed Competency → Challenge Design v1, and Batch 01 promotion record.

## Evidence

Student Book Chapter 1 Subbab E is recorded as **pp. 19–28** in the existing source-reconciliation baseline.

Teacher Guide cross-validation is now resolved directly from `Indonesia_BG_KLS_XII_Rev_.md`:
- **Subbab E:** *Mempresentasikan Kesalahan Kaidah Penulisan Contoh Surat Resmi*
- **Teacher Guide pp. 50–53**
- **Aktivitas 1.8:** *Mengidentifikasi Ketepatan Penulisan Surat Resmi*
- **Aktivitas 1.9:** *Menganalisis Kesalahan Penulisan Surat Resmi*
- The formative evidence explicitly covers capitalization/non-capitalization, abbreviations, bold/italic writing, and punctuation; learners identify correct/incorrect usage, give reasons, and propose whether correction is needed.

The approved Detailed Competency → Challenge Design defines E as:
- locate writing-convention problems in an original document;
- classify the type of problem;
- select an appropriate correction;
- explain why the correction improves the communication.

Preferred challenge archetypes are document inspection, repair selection, bounded multi-select diagnosis, and error classification.

## Challenge ledger

| ID | Competency evidence | Cognitive target | Archetype | Candidate interaction | Original document requirement | Status |
|---|---|---|---|---|---|---|
| KM02-E1 | Locate one writing-convention problem in a short official notice | analyze | document inspection / repair selection | mcq | fictional school notice with one deliberately planted capitalization problem | READY FOR DRAFT |
| KM02-E2 | Classify the problem before repair | analyze | error classification | mcq | fictional official communication with a deliberately planted abbreviation problem | READY FOR DRAFT |
| KM02-E3 | Select the correction that preserves intended meaning and formal purpose | evaluate | repair selection | mcq | fictional official communication with a punctuation/formatting problem and competing repairs | READY FOR DRAFT |
| KM02-E4 | Identify all relevant problems in a bounded excerpt | analyze/evaluate | multi-select diagnosis | multi_select | short fictional official communication containing 2–3 independently designed issues | RUNTIME-GATED |

## Anti-redundancy rule

Batch 02 must not merely repeat the surface pattern of D1/D2. D focused on structure/function and formal-register diagnosis. E must move into deliberate convention-problem diagnosis and repair, with the learner required to distinguish the problem type and/or select a repair that preserves communicative intent.

## Originality boundary

All eventual documents, names, dates, institutions, wording, errors, options, and explanations must be newly authored. No source exercise, example document, distinctive sentence, or answer choice may be copied or superficially rewritten.

## Provenance gate

**Student Book:** confirmed at Chapter 1 Subbab E, pp. 19–28.

**Teacher Guide:** VERIFIED. Subbab E begins on **p. 50**. Table 1.15 identifies Activities 1.8 and 1.9; the formative section on **pp. 52–53** specifies the writing-convention evidence. The source explicitly names capitalization/non-capitalization, abbreviations, bold, italics, and punctuation, and requires reasons/correction analysis.

## Renderer gate

`mcq` is already proven by Batch 01 browser regression. `multi_select` is allowed by schema but requires actual runtime verification before KM02-E4 can enter a browser gate. If multi_select runtime is unsupported, E4 must be redesigned rather than weakening the competency.

## Production boundary

E1–E3 may now proceed to original drafting and schema materialization. E4 remains separate until multi-select runtime is verified.

## Next action

Draft the smallest controlled original E batch (E1–E3), materialize against schema 1.1, and run provenance/content/static QA before any browser gate.
