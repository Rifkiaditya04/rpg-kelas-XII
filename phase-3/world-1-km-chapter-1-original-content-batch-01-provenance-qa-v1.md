# World 1 — KM Standard Chapter 1 Original Content Batch 01 — Provenance QA v1

**Date:** 2026-08-18
**Status:** PARTIAL PASS — CANONICALIZATION BLOCKED
**Batch:** `world-1-km-chapter-1-original-content-question-draft-batch-01-corrected.md`

## 1. Gate purpose

Validate the six corrected original drafts against the authoritative KM Standard Chapter 1 Student Book mapping and the project's provenance rules before any schema-1.1 canonicalization or Golden Dataset promotion.

## 2. Dependencies re-verified

- Approved competency coverage matrix: `phase-3/world-1-km-chapter-1-competency-coverage-matrix-v1.md`
- Detailed competency/challenge design v1
- Corrected original content batch 01
- `knowledge-base/bahasa-indonesia/v1/question-schema.json` schema 1.1
- KM Standard Student Book source: `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- **KM Standard Teacher Guide resolved externally through the official SIBI catalog; it is not yet stored as a readable repository artifact.**

The coverage matrix requires Student Book section verification and Teacher Guide cross-validation before question drafting. The present batch therefore remains a controlled draft rather than a promoted bank.

## 3. Student Book provenance results

The six items map to Chapter 1 activities A–D as follows:

| ID | Activity | Student Book printed range | Provenance result |
|---|---|---:|---|
| KM01-A1 | A | 5–7 | PASS at activity/range level |
| KM01-B1 | B | 8–11 | PASS at activity/range level |
| KM01-B2 | B | 8–11 | PASS at activity/range level |
| KM01-C1 | C | 12–13 | PASS at activity/range level |
| KM01-D1 | D | 14–18 | PASS at activity/range level |
| KM01-D2 | D | 14–18 | PASS at activity/range level |

No page number beyond the authoritative printed activity range has been invented.

## 4. Curriculum alignment

### KM01-A1
Matches Activity A's competency anchor: evaluating information from an official-letter recording. The challenge measures evidence-supported action selection rather than source-text recall.

**Result: PASS.**

### KM01-B1
Matches Activity B's explicit/implicit message distinction. The challenge requires identifying a reasonable inference from an original official communication.

**Result: PASS.**

### KM01-B2
Matches Activity B's comparison/evaluation demand. The challenge requires comparison using evidence from two original official communications.

**Result: PASS.**

### KM01-C1
Matches Activity C's reflection-on-official-letter-content demand. The scenario requires a practical response grounded in the communication.

**Result: PASS.**

### KM01-D1
Matches Activity D's structural analysis demand. The challenge asks for the function of a structural component rather than memorization of a copied example.

**Result: PASS.**

### KM01-D2
Matches Activity D's language-use analysis and supports the D–E cluster's standard-word/effective-sentence competency. The item is intentionally authored as a diagnostic repair task.

**Result: PASS.**

## 5. Teacher Guide resolution

The previous repository-only search incorrectly concluded that the exact KM Standard Teacher Guide was unavailable. That conclusion is now corrected.

The official SIBI catalog contains:

**Panduan Guru Bahasa Indonesia untuk SMA/MA/SMK/MAK Kelas XII (Edisi Revisi)**

- Publisher: Pusat Perbukuan
- Authors: Alvian Kurniawan, Ismail Kusmayadi, Velayeti Nurfitriana Ansas
- ISBN: 978-634-00-3115-7
- Official catalog: `https://buku.kemendikdasmen.go.id/katalog/panduan-guru-bahasa-indonesia-untuk-smamasmkmak-kelas-xii-edisi-revisi`

This metadata is independently confirmed by the official SIBI catalog. The Student Book in the repository is the corresponding revised 2025 edition by the same author group and is ISBN 978-634-00-3113-3.

**Teacher Guide identity: RESOLVED / CONFIRMED.**

However, the current accessible web representation does not expose the PDF's full page-level text in a form that can be safely mapped to each six-item activity. Therefore the following distinction is mandatory:

- existence / identity of the correct Teacher Guide: **CONFIRMED**;
- activity-specific Teacher Guide page/indicator cross-validation for KM01-A1 through KM01-D2: **UNVERIFIED**;
- Tingkat Lanjut guide substitution: **REJECTED**.

No Teacher Guide page number is guessed.

## 6. Schema gate decision

Schema 1.1 requires `source.student_book.pages`, `source.student_book.section`, and a `source.teacher_guide` object. The current project rule also requires source cross-validation when the Teacher Guide contains a relevant indicator.

The Teacher Guide identity is now known, but activity-specific page/indicator validation remains unresolved. Therefore canonicalization still cannot honestly claim a complete provenance gate.

**Schema canonicalization: BLOCKED pending activity-specific Teacher Guide validation.**

## 7. Other quality checks

**Originality:** PASS initial review. All six items use newly authored scenarios, names, communications, options, and explanations.

**Answer uniqueness:** PASS initial review. One intended answer per MCQ under the supplied context.

**Cognitive alignment:** PASS initial review against the detailed challenge-design baseline.

**Question type:** PASS candidate. All six use `mcq`, avoiding the renderer-risk types identified in historical QA.

**Duplicate IDs:** PASS within batch. IDs are unique: `KM01-A1`, `KM01-B1`, `KM01-B2`, `KM01-C1`, `KM01-D1`, `KM01-D2`.

**Golden Dataset:** NO CHANGE.

## 8. Decision

This remains a **partial provenance/content QA pass**, not a final quality-gate pass.

The six items are suitable to retain as draft material. They are not eligible for canonical JSON or Golden Dataset promotion until activity-specific Teacher Guide validation is resolved or a project-authorized exception is recorded.

## 9. Next gate

Resolve activity-specific Teacher Guide validation through an evidence-safe route:

1. obtain/read the official Teacher Guide PDF or a repository copy with reliable page text;
2. map each item to the relevant Teacher Guide chapter/activity/indicator and printed page;
3. update provenance metadata;
4. materialize schema-1.1 JSON;
5. run answer-shape, duplicate-ID, provenance, pedagogical, renderer, and batch-quality gates.

No source substitution is permitted.
