# PROJECT LOG 039 — World 1 KM Chapter 1 BS/BG Source Reconciliation

**Date:** 2026-08-18
**Status:** COMPLETED — SOURCE GATE PASSED; FINAL CONTENT/SCHEMA QA NEXT

## 1. Protocol re-sync

Before continuing the batch, the active corrected draft and provenance QA were re-read. The source boundary was corrected to the repository's KM Standard pair in `Buku Kurikulum/Kurikulum Merdeka`.

## 2. Source correction

The repository contains four Bahasa Indonesia Class XII files. Only these two belong to the Standard/Kurikulum Merdeka Chapter 1 project:

- `Indonesia_BS_KLS_XII_Rev_.md`
- `Indonesia_BG_KLS_XII_Rev_.md`

The following are the separate Tingkat Lanjut source family and remain excluded:

- `Indonesia_BS_TL_KLS_XII_Rev.md`
- `Indonesia_BG_TL_KLS_XII_Rev.md`

This corrects the earlier mistaken dependency conclusion that the KM Standard Teacher Guide was unavailable.

## 3. Detailed Teacher Guide evidence verified

The correct Teacher Guide contains Chapter 1:
`Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan`.

Its Chapter 1-specific Student Book guidance begins at printed page 34.

Verified activity mappings:

- **Aktivitas 1.1**, pp. 34–35: explicit information from a listened-to official letter.
- **Aktivitas 1.4**, pp. 38–42: compare/evaluate explicit and implicit meanings from two official letters.
- **Aktivitas 1.5**, pp. 43–45: reflection on the writer's ideas in an official letter.
- **Aktivitas 1.6**, pp. 46–48: identify structural parts of an official circular letter.
- **Aktivitas 1.7**, pp. 46–49: analyze language use in an official circular letter, including formal, clear/accurate, and standard language.

The Student Book Chapter 1 ranges remain:
A 5–7, B 8–11, C 12–13, D 14–18.

## 4. Six-item reconciliation

- KM01-A1 → SB A 5–7 + TG Aktivitas 1.1 34–35 → PASS.
- KM01-B1 → SB B 8–11 + TG Aktivitas 1.4 38–42 → PASS as focused prerequisite micro-challenge.
- KM01-B2 → SB B 8–11 + TG Aktivitas 1.4 38–42 → PASS.
- KM01-C1 → SB C 12–13 + TG Aktivitas 1.5 43–45 → PASS WITH SCOPE NOTE because the full source reflection competency is broader than a single MCQ.
- KM01-D1 → SB D 14–18 + TG Aktivitas 1.6 46–48 → PASS.
- KM01-D2 → SB D 14–18 + TG Aktivitas 1.7 46–49 → PASS.

## 5. Pedagogical findings

The Teacher Guide confirms that the first batch's competency choices are grounded in the actual chapter sequence, not merely inferred from the Student Book table of contents.

Important nuance:
- Activity 1.1 and 1.2 are listening/understanding tasks; the game batch may use original MCQ micro-challenges as derivative practice, but must not claim to reproduce the source task.
- Activity 1.4 explicitly distinguishes analysis from evaluation; B2 is therefore stronger than B1 for the evaluation lane.
- Activity 1.5 is genuinely reflective and its source criteria are broader than a single constrained decision. C1 must remain a preparatory micro-challenge unless paired with a reflection step.
- Activity 1.7 supports the D2 focus on formal, clear/accurate, and standard language.

## 6. Artifacts changed

Updated:
- `phase-3/world-1-km-chapter-1-original-content-question-draft-batch-01-corrected.md`
- `phase-3/world-1-km-chapter-1-original-content-batch-01-provenance-qa-v1.md` (now v2)

Created:
- `phase-3/world-1-km-chapter-1-original-content-batch-01-source-reconciliation-v1.md`

## 7. Gate status

Source identity                    🟢 PASS
Student Book provenance            🟢 PASS
Teacher Guide provenance           🟢 PASS
Tingkat Lanjut contamination       🟢 EXCLUDED
Originality                        🟢 PASS initial
Answer uniqueness                  🟢 PASS initial
Cognitive alignment                🟢 PASS with C1 scope note
Schema 1.1 materialization         ⏳ NEXT
Renderer QA                        ⏳ NEXT
Final pedagogical QA               ⏳ NEXT
Golden Dataset                     🔒 UNCHANGED

## 8. Next action

Proceed to schema-1.1 materialization of the six-item draft, followed by structural, provenance, answer-shape, duplicate-ID, pedagogical, renderer, and batch-quality QA. Do not promote C1 as a complete reflection competency without the required follow-up design decision.
