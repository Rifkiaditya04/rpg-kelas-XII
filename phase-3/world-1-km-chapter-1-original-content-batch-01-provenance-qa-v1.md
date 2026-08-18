# World 1 — KM Standard Chapter 1 Original Content Batch 01 — Provenance QA v2

**Date:** 2026-08-18
**Status:** PROVENANCE PASS — CANONICALIZATION / FINAL PEDAGOGICAL QA PENDING
**Batch:** `world-1-km-chapter-1-original-content-question-draft-batch-01-corrected.md`

## 1. Gate purpose

Validate the six corrected original drafts against the authoritative KM Standard Chapter 1 Student Book **and the correct Teacher Guide stored in the repository**, before schema-1.1 canonicalization or Golden Dataset promotion.

## 2. Source pair re-verified

Authoritative repository sources:
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

Explicitly excluded:
- `Indonesia_BS_TL_KLS_XII_Rev.md`
- `Indonesia_BG_TL_KLS_XII_Rev.md`

The earlier claim that the exact KM Teacher Guide was unavailable is corrected. The repository file `Indonesia_BG_KLS_XII_Rev_.md` is the correct revised-2025 Teacher Guide and contains Chapter 1-specific guidance, activity mappings, rubrics, differentiation notes, and formative assessment criteria.

## 3. Student Book provenance results

| ID | Activity | Student Book printed range | Result |
|---|---|---:|---|
| KM01-A1 | A | 5–7 | PASS |
| KM01-B1 | B | 8–11 | PASS |
| KM01-B2 | B | 8–11 | PASS |
| KM01-C1 | C | 12–13 | PASS |
| KM01-D1 | D | 14–18 | PASS |
| KM01-D2 | D | 14–18 | PASS |

These ranges come from the authoritative Student Book Chapter 1 table of contents. No page number is guessed.

## 4. Teacher Guide activity/page reconciliation

| ID | Teacher Guide activity | Teacher Guide printed pages | Result |
|---|---|---:|---|
| KM01-A1 | Aktivitas 1.1 — explicit information | 34–35 | PASS |
| KM01-B1 | Aktivitas 1.4 — compare explicit/implicit meanings | 38–42 | PASS |
| KM01-B2 | Aktivitas 1.4 — compare/evaluate explicit/implicit meanings | 38–42 | PASS |
| KM01-C1 | Aktivitas 1.5 — reflection on writer's ideas | 43–45 | PASS WITH SCOPE NOTE |
| KM01-D1 | Aktivitas 1.6 — identify official-letter structure | 46–48 | PASS |
| KM01-D2 | Aktivitas 1.7 — analyze official-letter language use | 46–49 | PASS |

### A — KM01-A1

Teacher Guide Subbab A is *Mengevaluasi Isi Rekaman Surat Resmi yang Disimak*. It defines Aktivitas 1.1 as explicit-information identification and provides a formative rubric for correctly identifying explicit information from a listened-to official letter.

**Result:** PASS. The original MCQ is a game micro-challenge derived from the competency; it does not reproduce the source task format.

### B — KM01-B1 / KM01-B2

Teacher Guide Subbab B is *Mengevaluasi Pesan Tersurat dan Tersirat dari Dua Surat Resmi yang Berbeda*. Aktivitas 1.4 compares explicit and implicit meaning in two official letters and continues to evaluation through discussion. The guide explicitly warns that comparison alone is only analysis; evaluation requires reasoning about meaning, author purpose, and possible wording improvement.

**B1 result:** PASS as a focused explicit/implicit prerequisite micro-challenge.

**B2 result:** PASS as the stronger evidence-based comparison/evaluation micro-challenge.

Neither item reproduces the source letters or their answers.

### C — KM01-C1

Teacher Guide Subbab C is *Merefleksikan Gagasan Berdasarkan Isi Surat Resmi*. Aktivitas 1.5 is explicitly reflective and the guide lists five dimensions: important ideas, strengths/weaknesses with reasons, connection to personal experience/knowledge, change in personal view, and an idea to apply in real life. The source formative instrument is open response.

**Result:** PASS WITH SCOPE NOTE. KM01-C1 is a constrained preparatory decision challenge and should not be treated as the complete reflection competency. Final batch design must either pair it with a reflection follow-up or explicitly classify it as a preparatory micro-challenge.

No renderer modification is authorized at this stage.

### D — KM01-D1

Teacher Guide Subbab D covers structure and language in official letters. Aktivitas 1.6 asks learners to identify structural parts of an official circular letter; its formative rubric assesses structural identification.

**Result:** PASS. D1 adds an original function-of-structure reasoning layer without reproducing a source letter.

### D — KM01-D2

Aktivitas 1.7 analyzes language use in official letters. Its criteria explicitly cover formal language, clarity/accuracy, and standard language.

**Result:** PASS. D2 directly targets those criteria through an original language-repair challenge.

## 5. Other quality checks

**Originality:** PASS initial review.

**Answer uniqueness:** PASS initial review.

**Cognitive alignment:** PASS initial design review, with the C1 scope note above.

**Question type:** PASS candidate. All six use `mcq`.

**Duplicate IDs:** PASS. IDs are unique: `KM01-A1`, `KM01-B1`, `KM01-B2`, `KM01-C1`, `KM01-D1`, `KM01-D2`.

## 6. Gate decision

**Provenance gate:** PASS for all six items at source identity + Student Book activity/range + Teacher Guide activity/page level.

**Canonical JSON:** NOT YET PROMOTED. Schema-1.1 materialization and full payload validation remain to be executed.

**Golden Dataset:** NO CHANGE.

## 7. Next gate

1. Update draft provenance blocks with the verified Teacher Guide activity/page anchors.
2. Materialize schema-1.1 JSON.
3. Run schema, answer-shape, duplicate-ID, provenance, pedagogical, renderer, and batch-quality QA.
4. Resolve/record the C1 scope decision.
5. Promote only if all final gates pass.
