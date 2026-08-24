# PROJECT LOG 081 — World 1 KM Chapter 1 F–G Runtime PASS and Source-Provenance Block

**Date:** 2026-08-24
**Status:** RUNTIME CASES PASS — PRODUCTION CONTENT STILL BLOCKED BY ITEM-LEVEL SOURCE/PROVENANCE REVIEW

## 1. Objective

Close the user-executed F–G Renderer Regression v1.1-ID browser cases and re-sync the result against the project's authoritative Kurikulum Merdeka source policy.

## 2. Protocol followed

Re-sync → read `Alur Kerja Proyek/` → read Master Control Part 1 + v1.1 → inspect F–G logs 063–080 → inspect F–G specification, design, fixture, adapter and actual renderer → cross-validate against the standard KM Student Book and Teacher Guide in `Buku Kurikulum/Kurikulum Merdeka/` → separate runtime evidence from academic provenance.

## 3. Runtime evidence supplied by user

Hosted F–G Renderer Regression v1.1-ID:

- Static Gate: PASS.
- R1 canonical path: 6/6, 100%, 600 XP.
- R2 non-canonical path: 0/6, 0%, 0 XP.
- R3: after R2, user pressed `Reload runtime`, runtime returned to the initial question state, all six canonical answers were accepted, and result returned to 6/6, 100%, 600 XP.

Interpretation:

- R1 = canonical answer identity/value mapping PASS.
- R2 = non-canonical rejection PASS.
- R3 = replay isolation PASS for the tested runtime path.
- 600 XP is intentional QA-adapter configuration (`100 XP/correct`, `0 completion XP`) and is not the production mission reward contract.

## 4. Gate A reconciliation

PROJECT LOG 077 already resolved the visible-option-order conflict. The approved renderer is allowed to shuffle visible options; regression evaluates canonical answer identity/value rather than transient button position.

No production renderer modification is required.

## 5. Gate C runtime interpretation

The browser evidence closes the three runtime cases for the Indonesian QA adapter.

This does **not** by itself promote F–G content to production.

## 6. Source-authority re-sync

The current Master Control and source reconciliation identify the authoritative main-game KM pair as:

- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

The separate `Indonesia_BS_TL_KLS_XII_Rev.md` / `Indonesia_BG_TL_KLS_XII_Rev.md` family is excluded from the current main-game KM source policy.

The Student Book confirms Chapter 1 F and G as:

- F: writing an official letter using standard words and effective sentences — pp. 29–33.
- G: replying to an official-letter message using electronic mail — pp. 34–36.

The Teacher Guide cross-validation is now more precise:

- F: Table 1.18 p.55; Activity 1.10 p.56; Activity 1.11 p.57; Activity 1.12 p.58.
- G: Table 1.22 p.59; Activity 1.13 p.60–61.

The Teacher Guide evidence confirms F as standard-word/effective-sentence repair plus official-letter writing, and G as writing a digital reply to an official request through electronic mail.

## 7. Evidence vs interpretation

### Evidence
The current Indonesian F–G fixture uses broad concept labels such as audience/purpose, clarity, formal register, complete confirmation, email tone, and information completeness. The fixture records only a broad `Kurikulum Merdeka Chapter 1` source family and concept labels.

The source pair now confirms the F/G domain and specific activity anchors. An item-level provenance matrix was created:

`phase-3/world-1-km-chapter-1-f-g-item-level-provenance-matrix-v1.md`

### Implementation
The QA adapter and regression harness are QA-only. They do not alter Golden Dataset v1 or the production renderer.

### Interpretation
The broad F/G source domain is confirmed. However, the six current item formulations are not all equally direct representations of the specific F/G activities. F-Q03 has the strongest direct F concept grounding; G-Q01/G-Q03 are supported at the G activity/competency level; F-Q01/F-Q02/G-Q02 remain only partially confirmed at item-level specificity.

Classification: **INSUFFICIENT EVIDENCE for production-content promotion.**

## 8. Root-cause / process finding

The renderer gate is now healthy: R1/R2/R3 pass. The remaining issue is upstream content provenance/alignment. The six QA items were written as original derivative practice, but the project requires each eventual production item to have a traceable source concept/activity/section and Teacher Guide validation. Several current items need either stronger source mapping or a deliberate content revision decision.

This is a **content/provenance alignment issue**, not a renderer failure.

## 9. Copyright boundary

No source text is to be copied or superficially rewritten. The books provide concept/competency/activity grounding and provenance. Any future content revision must be independently authored and source-traceable.

## 10. Files changed this session

Created:
- `phase-3/world-1-km-chapter-1-f-g-source-provenance-reconciliation-v1.md`
- `phase-3/world-1-km-chapter-1-f-g-item-level-provenance-matrix-v1.md`
- this Project Log.

No renderer, Golden Dataset, production question pool, or existing QA fixture was modified.

## 11. Commits

Source/provenance reconciliation:
`86879968509fa25b1604b21b0442066d244e7d8a`

Initial Project Log commit:
`f588da688af2f3a12f8949e68a5250be56648d14`

Item-level provenance matrix:
`1163c846670a2549279be514e9bb745eaa074755`

Final documentation update to this Project Log:
`2f3cca2d7f634262a73bebd3988848ceec891a4f`

## 12. Decision

**F–G Renderer Runtime Cases: PASS.**

**F–G Production Content: BLOCKED.**

Do not promote the current six F–G items to production and do not generate additional F–G questions until the item-level source mapping decision is complete.

## 13. Next gate

`item-level F/G source mapping decision`
→ if required, `original content revision`
→ `originality/provenance recheck`
→ `versioned fixture if content changes`
→ `fresh renderer regression only if material fixture changes`
→ promotion decision.

No new renderer work is authorized by this log.
