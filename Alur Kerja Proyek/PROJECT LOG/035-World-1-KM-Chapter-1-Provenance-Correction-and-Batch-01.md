# PROJECT LOG 035 — World 1 KM Chapter 1 Provenance Correction and Batch 01

**Date:** 2026-08-18
**Status:** CORRECTED DRAFT CREATED — CANONICALIZATION BLOCKED

## 1. Protocol re-sync

The active baseline was re-checked before continuing:
- Master Control / project workflow;
- KM Chapter 1 competency coverage matrix;
- approved Original Teaching / Gameplay Specification;
- Detailed Competency → Challenge Design v1;
- Question Schema v1.1;
- KM Chapter 1 Student Book source.

## 2. Critical correction discovered

The previous Batch 01 draft was based on the wrong source family (`Bahasa Indonesia Tingkat Lanjut` / job-application-letter Chapter I), despite the active project scope being `Bahasa Indonesia Kurikulum Merdeka Class XII`, Chapter 1 `Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan`.

This is a provenance failure, not a content-quality issue. The incorrect draft has therefore been explicitly marked **SUPERSEDED** rather than silently reused.

Superseded file:
`phase-3/world-1-km-chapter-1-original-content-question-draft-batch-01.md`

Correction commit:
`2b894d0f0d8c0db450a67004599b98d027f5291e`

## 3. Correct source resolved

Authoritative Student Book:
`Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`

The source identifies Chapter 1 as:
`Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan`

Printed activity boundaries from the source table of contents:
- A: pp. 5–7
- B: pp. 8–11
- C: pp. 12–13
- D: pp. 14–18
- E: pp. 19–28
- F: pp. 29–33
- G: pp. 34–36
- H: p. 37 onward

These locators are now usable for the corrected batch and are not guessed.

## 4. Corrected batch

Created:
`phase-3/world-1-km-chapter-1-original-content-question-draft-batch-01-corrected.md`

Commit:
`af2b19f39ad3c07bf764abfe2c21fdf97b399cb7`

Six original MCQ drafts now align with the actual KM Chapter 1 activities A–D:
- A: evidence-supported action;
- B: explicit vs implicit meaning;
- B: evidence-based comparison;
- C: reasoned reflection;
- D: structure function;
- D: language-use diagnosis.

No Golden Dataset changes were made.

## 5. Teacher Guide cross-validation status

A critical distinction is recorded here:

The repository contains references to `Indonesia_BG_TL_KLS_XII_Rev.md`, but that is a **Tingkat Lanjut** Teacher Guide and is not valid evidence for this KM Standard batch.

The exact KM Standard Teacher Guide artifact has not yet been resolved as a readable repository file. Therefore the earlier claim that the Teacher Guide source pair was already available for this KM batch must not be repeated.

Current state:
`Student Book = resolved`
`KM Teacher Guide = pending`

## 6. Canonicalization decision

The schema requires source page/range information and states that Teacher Guide provenance should be cross-validated when relevant. Because the exact KM Teacher Guide artifact remains unresolved, the corrected batch is **not yet materialized into the canonical schema-1.1 JSON**.

This is deliberate. Creating JSON with guessed Teacher Guide pages or substituting the wrong Tingkat Lanjut guide would violate the provenance gate.

## 7. QA snapshot

| Gate | Status |
|---|---|
| Correct curriculum/source family | PASS |
| Student Book activity/page boundary | PASS |
| Originality initial review | PASS |
| Answer uniqueness initial review | PASS |
| Cognitive/challenge alignment | PASS |
| MCQ renderer candidate | PASS / final payload QA pending |
| KM Teacher Guide cross-validation | PENDING |
| Schema-1.1 canonical materialization | BLOCKED |
| Golden Dataset promotion | NOT AUTHORIZED |

## 8. Next action

Search the repository for the exact KM Standard Teacher Guide artifact using filenames/index references rather than reusing the Tingkat Lanjut guide. If the artifact genuinely does not exist, document that as a formal provenance gate decision before canonicalization.

Only after that gate:
1. materialize the six items into schema 1.1 JSON;
2. run answer-shape and duplicate-ID checks;
3. run pedagogical/provenance/renderer QA;
4. create the quality-gate log;
5. consider canonicalization/promotion.
