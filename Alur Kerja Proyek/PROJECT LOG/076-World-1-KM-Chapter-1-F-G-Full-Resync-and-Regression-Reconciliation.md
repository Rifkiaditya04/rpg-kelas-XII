# 076 — World 1 KM Chapter 1 F–G Full Re-sync and Regression Reconciliation

**Date:** 2026-08-23
**Status:** CONDITIONAL PASS — F–G REGRESSION NOT CLOSED

## 1. Protocol execution

This work session was restarted from repository state rather than conversation memory.

The following were re-synced and read in full:
- `Alur Kerja Proyek/00-MASTER-CONTROL.md` — Part 1.
- `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md` — official continuation / Part 2.
- `Alur Kerja Proyek/MASTER-CONTROL-CONTINUATION-NOTICE.md`.
- `Alur Kerja Proyek/REQUIRED-WORK-SESSION-PROTOCOL.md`.
- `Alur Kerja Proyek/PROJECT-OPERATING-RULES-AI-TECH-VISUAL.md`.
- `Alur Kerja Proyek/World 1 Training Room Specification v1.md`.
- `PROJECT LOG` README, numbered logs 001–075, and the `bugs/`, `decisions/`, `milestones/`, and `qa/` records present in the repository.
- Active KM Chapter 1 source/rebaseline artifacts, GDD, schema, Golden Dataset, F–G competency/design/teaching/question/fixture artifacts, actual KM runtime/renderer, regression specification, adapter, and hosted regression page.

## 2. Master Control continuity correction

`00-MASTER-CONTROL-v1.1.md` is confirmed to be the official continuation of Part 1. It remains the active continuation and can accept the later F–G state.

A separate `00-MASTER-CONTROL-v1.2.md` had been created during the prior erroneous workflow. It was not required by the project's continuation architecture and was removed after its valid F–G information was incorporated into v1.1 Section 15. The deletion is not loss of project history because the substantive F–G state is now recorded in v1.1 and PROJECT LOG 076, while the deleted file remains in Git history.

Master Control v1.1 update commit:
`253e45e4cb6139bb70883f3e885ca93818898243`

Redundant v1.2 deletion commit:
`4453d071cfea57e61e3be003720e428ba8f5b555`

## 3. Evidence — historical XP contract

The repository documents two different reward contexts and they must not be conflated:

### Production/mission-shaped contract
Earlier approved World 1 mission/progression integration established 100 XP per correct answer plus 100 XP completion reward when the applicable mission completion gate is met. PROJECT LOG 045 records a user-verified 6/6 result of **700 XP** for a six-item production-shaped Batch 01 run. PROJECT LOG 056 again records 6/6 and 700 XP for the KM integrated learning loop.

### F–G renderer capability/regression isolation
PROJECT LOG 065 corrected the synthetic F–G capability fixture to use a 100 XP completion bonus and documented 2/2 → 300 XP. PROJECT LOG 066 then closed the renderer capability gate while keeping the generic >=70% reward-threshold issue as a separate OPEN follow-up.

The later F–G renderer regression adapter deliberately sets `mission_completion_xp: 0`. This isolates answer mapping/scoring from the generic mission-completion reward contract. Therefore:

- R1 6/6 → **600 XP is intentional for this QA adapter**.
- R2 0/6 → **0 XP is intentional for this QA adapter**.
- These values do not redefine the production mission reward contract.

This resolves the earlier ambiguity: 700 XP is correct for the applicable production-shaped six-item mission contract, while 600 XP is correct for the current isolated F–G answer-mapping regression adapter.

## 4. Evidence — F–G runtime results supplied by user

The user completed all three defined regression cases against the hosted page:

### R1 — Canonical path
- 6/6 correct.
- 100% accuracy.
- 600 XP.

Result: **PASS for canonical answer recognition/scoring.**

### R2 — Non-canonical path
- 0/6 correct.
- 0% accuracy.
- 0 XP.

Result: **PASS for rejection/no false-positive scoring in the isolated adapter.**

### R3 — Reload / replay isolation
The user used the regression page's `Reload runtime` control rather than a full-page F5, then answered all six canonically:
- 6/6 correct.
- 100% accuracy.
- 600 XP.

Result: **PASS for replay isolation of the tested renderer runtime path.**

The F–G regression cases therefore have user browser evidence. Repository inspection is not being substituted for the live evidence.

## 5. Evidence — language/content finding

The actual F–G question-design artifact and controlled fixture are written in English. The actual KM runtime wrapper is Indonesian, and the F–G teaching/NPC dialogue artifact is authored in Indonesian.

The project product identity is a Bahasa Indonesia Class XII educational game. The F–G workstream therefore contains an unresolved content-language inconsistency.

Classification: **CONFLICTING / CONTENT QA ISSUE**.

Important boundary: this is not evidence that the renderer incorrectly translated or selected English. The renderer renders the supplied dataset values verbatim. The English wording originates upstream in the F–G question-design/fixture content artifacts.

No wording was changed during this regression reconciliation because changing question text would change the controlled fixture and mix content revision with renderer regression.

## 6. Evidence — option-order conflict

The F–G regression specification requires the exact fixture option order to remain deterministic for QA. The actual renderer implementation calls `shuffle(q.options)` before rendering options.

Classification: **CONFLICTING — regression specification vs current renderer implementation**.

The adapter correctly preserves fixture option values/order, but the visible button order is randomized by the renderer. R1/R2/R3 therefore prove answer-value mapping, not the deterministic visible-order requirement.

No renderer change is made by this record.

## 7. Evidence — production boundary

- Golden Dataset v1: unchanged.
- Approved KM Chapter 1 E1–E4 content: unchanged.
- F–G content: not promoted by the regression adapter.
- Generic >=70% completion-reward threshold issue: remains OPEN and separate.
- Final production UI: separate gate.
- F–G production integration: not started.

## 8. Interpretation

The prior 600-vs-700 XP ambiguity is resolved by the reward-context distinction above. It is not a renderer arithmetic defect.

The F–G regression has sufficient browser evidence for answer recognition, rejection, and replay isolation, but it is **not fully closed** because the written deterministic-option-order contract conflicts with the current renderer, and the F–G question content has an unresolved English-vs-Bahasa-Indonesia content-language inconsistency.

The correct next work is therefore not to patch the renderer or silently rewrite the fixture. The next work must first resolve the two conflicts through the appropriate documented decision/content-revision gates.

## 9. Next mandatory work

1. Resolve the deterministic option-order requirement vs existing `shuffle(q.options)` behavior through an explicit project decision.
2. Resolve the F–G language/content inconsistency through a content QA/revision gate. If wording changes, create a new versioned F–G fixture and re-run the affected content/schema/regression gates as required.
3. Keep the existing validated fixture and browser evidence as historical QA evidence.
4. Only after the two conflicts are resolved, decide whether the F–G renderer regression needs a new runtime run.
5. Do not promote F–G production content before the revised gates are closed.
