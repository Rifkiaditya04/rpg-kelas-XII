# World 1 — KM Chapter 1 H Production Content Candidate v1 QA

## Status
STATIC/SCHEMA/PROVENANCE QA PASS

## Target
`phase-3/world-1-km-chapter-1-h-production-content-candidate-v1.json`

## 1. Schema Validation
- **JSON Syntax**: Valid.
- **Root Fields**: `schema_version` (1.2), `batch_status`, `dataset`, `purpose`, `chapter_id`, `lanes`, `language`, `item_count`, `rewards`, `promotion`, `questions` are present and correctly typed.
- **Question Array**: Contains exactly 3 items.
- **Result**: PASS

## 2. Interaction Contract
- **H-Q01**: `multi_select`, 5 options, 3 elements in the `answer` array. Valid configuration for current renderer capabilities.
- **H-Q02**: `mcq`, 4 options, 1 string in the `answer` field. Valid.
- **H-Q03**: `mcq`, 4 options, 1 string in the `answer` field. Valid.
- **Result**: PASS

## 3. ID and Traceability
- **IDs**: H-Q01, H-Q02, H-Q03. Unique and sequential for the H lane.
- **Topic IDs**: `BI12-C01-H`.
- **Result**: PASS

## 4. Provenance and Originality
- **Student Book Match**: Maps to Chapter 1, Activity H (Memublikasikan Poster Pengumuman).
- **Teacher Guide Match**: Maps to assessment criteria for poster design (pilihan kata, kalimat menarik, gambar relevan).
- **Originality**: All texts, scenarios, options, and explanations are original creations. No copied textbook excerpts.
- **Result**: PASS

## 5. Completeness
- All questions have an `explanation` field.
- All questions have `source` and `provenance` metadata.
- All correct answers are exactly matching one (or multiple) of the provided `options` strings.
- **Result**: PASS

## Decision
**STATIC/SCHEMA/PROVENANCE QA PASS.**

## Next Gate
The JSON candidate is ready for **Production-Shaped Browser QA (Runtime Regression)** using the established actual KM renderer. This static QA pass does not alter the production renderer or the Golden Dataset.
