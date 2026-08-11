# World 1 — Career Mission QA Report

Status: **source-verified / deterministic QA passed / live browser playtest pending**

Date: 2026-08-11

## Scope

Artefak yang diverifikasi:

- `phase-3/world-1-mission-map.json`
- `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`
- `prototype/bahasa-indonesia/career-mission.html`
- `Alur Kerja Proyek/00-MASTER-CONTROL.md`
- `Alur Kerja Proyek/game edukasi kelas XII.txt`
- `Alur Kerja Proyek/Golden Dataset v1.txt`
- `Alur Kerja Proyek/PHASE 1.txt`
- `Alur Kerja Proyek/PHASE 2.txt`
- `Alur Kerja Proyek/PHASE 2.2 — Exam Blueprint.txt`

## Evidence

### Mission contract

`phase-3/world-1-mission-map.json` defines mission `BI12-W01-M01`, three challenge nodes, question IDs `BI12-GOLD-001`, `BI12-GOLD-002`, and `BI12-GOLD-009`, rewards of 100 XP per correct answer plus 100 completion XP, and the dataset path contract.

### Dataset contract

The Golden Dataset is `approved_seed`, schema `1.1`, and contains the three mission question IDs. The three questions are single-answer-compatible for the current slice: `mcq`, `document_inspection`, and `ordering`, each with string answer values.

### Runtime implementation

The current `career-mission.html` fetches both the mission map and Golden Dataset. It validates the mission ID, mission nodes, dataset contract path, required question fields, chapter `BI12-C01`, and option count before rendering.

The runtime builds the question list from `mission.nodes[].question_ids` rather than duplicating the three IDs in the HTML.

The runtime reads `mission.rewards.xp_per_correct` and `mission.rewards.mission_completion_xp` rather than hard-coding the reward values.

## Deterministic QA matrix

| Test | Expected | Result |
|---|---|---|
| Mission map loads | `BI12-W01-M01` accepted | PASS by source inspection |
| Dataset loads | JSON `items` available | PASS by source inspection |
| Mission IDs resolve | all 3 IDs resolve | PASS by cross-checking mission map and dataset |
| Chapter guard | only `BI12-C01` accepted | PASS by source inspection |
| Question 1 selection | one option can be selected | PASS by source inspection |
| Question 2 selection | one option can be selected | PASS by source inspection |
| Question 3 selection | one option can be selected | PASS by source inspection |
| Correct answer | + configured XP | PASS by source inspection |
| Wrong answer | no correct-answer XP | PASS by source inspection |
| Explanation | shown after checking | PASS by source inspection |
| Student-book provenance | shown in feedback | PASS by source inspection |
| Next navigation | advances one position | PASS by source inspection |
| Final result | score, XP, accuracy, skills shown | PASS by source inspection |
| Completion XP | configured completion XP added | PASS by source inspection |
| Progress | reaches 100% at finish | PASS by source inspection |
| Replay | reload button returns to start | PASS by source inspection |
| Missing data | visible mission-load error | PASS by source inspection |
| `file://` usage | explicit error guidance | PASS by source inspection |

## Defects found and fixed during QA

### Defect 1 — mission map was not actually consumed

The earlier implementation declared the three question IDs directly in the HTML. That conflicted with the mission-map data contract.

**Fix:** the current runtime fetches `world-1-mission-map.json` and derives the question list from `mission.nodes[].question_ids`.

### Defect 2 — completion XP was declared but not awarded

The mission map declared `mission_completion_xp: 100`, while the earlier runtime only awarded per-question XP.

**Fix:** the current `finish()` function reads `mission.rewards.mission_completion_xp` and adds it to the final XP.

## Cross-validation

1. Mission map ↔ Golden Dataset: all three referenced IDs exist and belong to `BI12-C01`.
2. Mission rewards ↔ runtime: runtime reads the configured reward fields.
3. Mission data contract ↔ runtime: runtime checks the declared dataset path.
4. Golden Dataset ↔ workflow: the mission questions are part of the approved seed and have source provenance.
5. Master Control ↔ implementation: World 1 is a single playable slice and remains within Phase 3 scope.

## Live browser limitation

A true browser playtest requires executing the HTML in a browser with access to its relative JSON resources. The current tool environment has no direct browser runtime and external network access is unavailable from the execution container. Therefore this report **does not claim a live browser playtest passed**.

Source-level and deterministic QA are complete. Live browser QA remains an explicit release gate and must be run in a real browser/hosted environment before this slice is marked fully playtested.

## Release decision

**World 1 slice: QA candidate passed at source/deterministic level; not yet live-playtest-approved.**

Do not expand the visual/game scope based on an assumption that browser execution has already been validated. The next human/browser execution should verify loading, touch interaction, navigation, feedback, XP, final result, and replay in both desktop and mobile viewport sizes.
