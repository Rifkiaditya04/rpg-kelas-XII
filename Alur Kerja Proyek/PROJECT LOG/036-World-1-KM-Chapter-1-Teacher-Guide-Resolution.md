# PROJECT LOG 036 — World 1 KM Chapter 1 Teacher Guide Resolution

**Date:** 2026-08-18
**Status:** RESOLVED — REPOSITORY TEACHER GUIDE NOT PRESENT; EXTERNAL SEARCH NON-AUTHORITATIVE

## 1. Protocol re-sync

The current World 1 KM Chapter 1 workflow was re-checked before taking action. The active baseline remains:
- approved KM Chapter 1 rebaseline;
- approved Competency & Coverage Matrix;
- approved Original Teaching / Gameplay Specification;
- completed Detailed Competency → Challenge Design;
- corrected Original Content Batch 01.

No historical A–F content, Golden Dataset, renderer, or promoted RPG systems were modified.

## 2. Repository search performed

Searches were performed for likely Bahasa Indonesia Grade XII Kurikulum Merdeka Teacher Guide filenames and content, including:
- `Bahasa Indonesia BG KLS XII`
- `Indonesia_BG`
- `Indonesia_BG_KLS_XII`
- `Indonesia_BG_KLS_XII_Rev`

The repository search returned no authoritative KM Standard Bahasa Indonesia Teacher Guide artifact. The `Buku Kurikulum/Kurikulum Merdeka` directory contains Teacher Guide artifacts for other subjects, but the expected Bahasa Indonesia BG artifact was not found in the repository search results.

The existing `knowledge-base/bahasa-indonesia/v1/index.json` points to a different source family (`texts/Indonesia_BG_TL_KLS_XII_Rev.md`) and therefore must NOT be treated as the KM Standard Teacher Guide.

## 3. External cross-check

A web search found an older 2022 Bahasa Indonesia Grade XII Teacher Guide titled `Cerdas Cergas Berbahasa dan Bersastra Indonesia`, but its Chapter 1 is `Mengkritisi Informasi dari Berbagai Sumber`, which does not match the approved KM Standard Chapter 1 `Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan`.

Therefore the external result is explicitly rejected as provenance for this content lane.

No external copyrighted text was imported into the project.

## 4. Decision

Teacher Guide cross-validation is now classified as:

`UNRESOLVED IN REPOSITORY / EXTERNAL NON-AUTHORITATIVE`

This is different from claiming that a Teacher Guide does not exist. We only establish that the authoritative matching artifact is not currently available in the repository and that the externally discovered 2022 guide is a different book.

Accordingly:
- do not invent Teacher Guide page locators;
- do not substitute the older 2022 guide;
- do not mark Teacher Guide validation as PASS;
- continue using the Student Book as the primary provenance anchor where the approved matrix permits it;
- retain Teacher Guide validation as a pending field for any item where it is required by the project's provenance contract.

## 5. Impact on Batch 01

Corrected Batch 01 remains a DRAFT.

It may proceed to schema/materialization only if every item has sufficient Student Book provenance and the project's gate permits Teacher Guide absence for that item. Otherwise the affected item remains blocked.

No Golden Dataset promotion is authorized by this log.

## 6. Incident record

The earlier batch based on the wrong `Tingkat Lanjut` source family remains superseded. This log does not reopen or reuse it.

The repository index/source mismatch is recorded so future sessions do not repeat the same provenance error.

## 7. Next gate

Proceed to a provenance-aware batch QA:
1. validate each corrected item against the KM Student Book Chapter 1 activity anchor;
2. ensure no item depends on an unverified Teacher Guide claim;
3. materialize only the items that satisfy schema 1.1;
4. run answer-shape, duplicate-ID, pedagogical, provenance, and renderer QA;
5. keep blocked items outside canonical/Golden Dataset promotion.
