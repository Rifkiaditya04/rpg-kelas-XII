# MASTER CONTROL v1.1 — F–G ADDENDUM — 2026-08-27

This addendum belongs to the active Master Control continuation. It does not replace `00-MASTER-CONTROL.md` or `00-MASTER-CONTROL-v1.1.md`.

## Protocol status
The mandatory work-session protocol was followed before implementation and verification: re-sync repository; read the applicable Master Control chain; verify relevant F–G Project Logs and current artifacts; inspect source, fixture, adapter, hosted regression page, and renderer boundary; separate Evidence / Implementation / Interpretation; cross-validate before changing or closing the gate.

## Approved decision
User approved the item-level F–G source-mapping revision proposal. This approval authorized a versioned QA-only content revision. It does not authorize Golden Dataset modification, production renderer modification, or production promotion.

User subsequently approved the F–G Original Teaching / NPC Dialogue + Guided Example package. This closes the teaching-material user-review gate only; it does not itself promote mission questions or modify the Golden Dataset.

## Source authority
F–G is World 1 → Kurikulum Merdeka → Bahasa Indonesia → Chapter 1. The authoritative KM source pair remains:
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

F source anchor: Student Book pp. 29–33; Teacher Guide pp. 55–58, including Activities 1.10–1.12.
G source anchor: Student Book pp. 34–36; Teacher Guide pp. 59–61, including Activity 1.13.

The Tingkat Lanjut source set is not used for this KM production-content lane.

## Revision implemented
Versioned QA-only artifacts:
- `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.2-id-adapter.json`
- `prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.2-id.html`

The revised six items are mapped directly to the KM F/G competencies:
- F-Q01 → kata baku in official letters / Activity 1.10
- F-Q02 → effective sentences in official letters / Activity 1.11
- F-Q03 → writing an official power-of-attorney letter / Activity 1.12
- G-Q01 → replying to an official request digitally / Activity 1.13
- G-Q02 → appropriate word choice in the digital official reply / Activity 1.13 rubric
- G-Q03 → effective sentence use in the digital official reply / Activity 1.13 rubric

All wording is newly authored. No book exercise, answer choice, or distinctive source wording is copied.

## Boundaries
- Golden Dataset: unchanged.
- Production renderer: unchanged.
- QA reward boundary: 100 XP/correct + 0 completion XP remains isolated.
- Generic >=70% reward-contract issue remains separate.
- F–G production integration remains blocked until production content passes its own gates.
- Previous v1.1-ID runtime evidence remains historical evidence and is not retroactively rewritten.

## v1.2 renderer regression closure
Fresh hosted evidence established:
- Static gate: PASS.
- R1 canonical: 6/6, 100%, 600 QA XP.
- R2 non-canonical: 0/6, 0%, 0 QA XP.
- R3: after R2, user used Reload runtime and replayed all six canonical answers; 6/6, 100%, 600 QA XP.

Decision: **F–G Renderer Regression v1.2-ID CLOSED / PASS.**

## Teaching package approval and audit
The user approved `phase-3/world-1-km-chapter-1-f-g-original-teaching-dialogue-guided-example-v1.md` on 2026-08-28. The artifact is now marked `APPROVED — USER REVIEW GATE CLOSED` while remaining versioned and separate from production question data.

Originality/provenance audit result: **PASS**.
- NPC dialogue, fictional scenarios, guided choices, and explanations are newly authored.
- Source books are used only for concept/competency/topic grounding.
- F maps to Chapter 1 F and Activities 1.10–1.12.
- G maps to Chapter 1 G and Activity 1.13.
- No unsupported citation detail was introduced.
- Tingkat Lanjut and unrelated curriculum folders are excluded from the KM content authority.

The audit authorizes the next design step: a separate original F–G question-design draft. It does not promote questions to canonical/production status.

## Current gate
**F–G Renderer Regression v1.2-ID: CLOSED / PASS.**
**F–G Teaching / NPC Dialogue: APPROVED.**
**F–G Originality / Provenance Audit: PASS.**
**F–G Production Question Design: NEXT.**
**F–G Production Promotion: BLOCKED pending question-design review, schema/answer QA, and production-shaped runtime evidence.**

## Next gate
Create the separate original F–G question-design draft using the approved teaching package and KM Chapter 1 source mappings. Use new fictional situations, wording, options, distractors, and explanations; do not copy guided-example answers into mission questions. Then run academic/pedagogical/provenance review before canonicalization or production promotion.
