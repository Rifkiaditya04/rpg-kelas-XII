# World 1 — Career Mission QA Report

Status: **source-verified / deterministic QA passed / live regression user-verified for current slice**

Date: 2026-08-12

## Evidence

The World 1 mission contract, Golden Dataset seed, runtime, and workflow documents were re-synced before this update. The mission uses `BI12-GOLD-001`, `BI12-GOLD-002`, and `BI12-GOLD-009`, with configured per-correct and completion XP.

The runtime consumes the mission map and Golden Dataset rather than duplicating question IDs in presentation code. Challenge order and option order are randomized, and scoring is based on answer values rather than fixed A/B/C/D positions.

The generic renderer now explicitly supports `document_inspection` and `multi_select`. For `multi_select`, the UI tells the learner to select all correct answers and reports the expected count from the dataset.

## Deterministic QA matrix

| Test | Result |
|---|---|
| Mission map loads | PASS |
| Dataset contract | PASS |
| All three mission IDs resolve | PASS |
| Chapter guard | PASS |
| Configured correct-answer XP | PASS |
| Configured completion XP | PASS |
| Wrong-answer explanation | PASS |
| Source provenance in feedback | PASS |
| Navigation and progress | PASS |
| Final result and replay | PASS |
| Missing-data handling | PASS |
| `file://` guidance | PASS |
| Challenge randomization | PASS by source inspection + user repeated testing |
| Option randomization | PASS by source inspection + user repeated testing |
| `document_inspection` renderer support | PASS |
| Multi-select instruction | PASS + user confirmed clear |

## Live regression evidence supplied by user

The user opened the hosted GitHub Pages build and completed the World 1 mission.

Observed:

- three challenges rendered;
- all-correct run produced 400 XP;
- wrong answers produced explanations and source verification;
- static challenge and option order were identified during repeated testing and subsequently fixed;
- the post-fix multi-select instruction was confirmed clear: `Pilih semua jawaban yang benar. Pilih 3 jawaban.`

This is user-observed browser evidence, not an automated browser-run claim.

## Defects resolved

1. Mission map bypass → runtime now derives questions from `mission.nodes[].question_ids`.
2. Completion XP mismatch → runtime reads configured `mission_completion_xp`.
3. Unsupported `document_inspection` → renderer and quality gate support it.
4. Static challenge order → shuffled at mission start.
5. Static option order → shuffled per question render; scoring uses answer value.
6. Multi-select ambiguity → explicit instruction and expected selection count.

All six implementation/UX defects are resolved for the current slice.

## Cross-validation

- Mission map ↔ Golden Dataset: referenced IDs exist and belong to `BI12-C01`.
- Mission rewards ↔ runtime: configured reward fields are consumed.
- Mission contract ↔ runtime: declared dataset path is checked.
- Renderer ↔ Golden Dataset: supported types cover the current seed, including `document_inspection` and `multi_select`.
- User browser observations ↔ runtime behavior: reported 400 XP and feedback behavior agree with the implementation contract.

## Release-cleanup requirement

The prototype may continue to show:

> Seed tervalidasi melalui quality gate konten dan renderer data-driven. Ini tetap micro-prototype, bukan desain visual final.

This text is intentionally retained during prototype/QA. It must be removed from the student-facing production build **only when the entire game is final and ready for distribution**.

## Release decision

**World 1 current slice: live regression user-verified for the reported flow and deterministic/source QA passed.**

The slice is suitable as the gameplay template for controlled World 1 content expansion. It is not a final-production build.

## Next gate

Expand World 1 content in small provenance-backed batches, beginning with Chapter I lanes for relevance/vacancy fit, systematics, and language features. Each batch requires source extraction, answer verification, pedagogical review, provenance completion, renderer compatibility, and batch QA before entering the approved dataset.
