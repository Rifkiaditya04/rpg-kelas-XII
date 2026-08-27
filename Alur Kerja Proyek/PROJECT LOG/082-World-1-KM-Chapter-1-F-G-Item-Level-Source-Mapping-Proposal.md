# PROJECT LOG 082 — World 1 KM Chapter 1 F–G Item-Level Source Mapping Proposal

**Date:** 2026-08-27
**Status:** PROPOSAL — USER APPROVAL REQUIRED BEFORE CONTENT IMPLEMENTATION

## 1. Objective
Continue from the last verified F–G Renderer Regression state and resolve the remaining upstream item-level provenance/alignment block without silently changing approved content or QA infrastructure.

## 2. Protocol followed
Re-sync → read Master Control Part 1 → read Master Control v1.1 → inspect the active F–G logs and artifacts → verify the authoritative KM source pair → separate Evidence / Implementation / Interpretation → cross-validate → proposal only.

## 3. Evidence
Runtime F–G v1.1-ID is closed for its tested cases: R1 6/6, R2 0/6, R3 6/6 after Reload runtime. The renderer gate itself is healthy.

The authoritative production KM source pair is the Standard Kurikulum Merdeka Student Book and Teacher Guide in `Buku Kurikulum/Kurikulum Merdeka/`.

Student Book Chapter 1 F and G are respectively official-letter writing with standard words/effective sentences (pp.29–33) and replying to an official-letter message through electronic mail (pp.34–36).

Teacher Guide anchors are F Table 1.18 p.55, Activities 1.10–1.12 pp.56–58, and G Table 1.22 p.59, Activity 1.13 pp.60–61.

The existing item-level matrix classifies F-Q01, F-Q02, and G-Q02 as only partially confirmed; F-Q03 is confirmed at concept level; G-Q01/G-Q03 are confirmed at activity/competency level but derivative in formulation.

## 4. Implementation inspected
No production renderer change is required by the runtime evidence. Existing QA fixture and adapter remain QA-only. Golden Dataset remains untouched.

## 5. Interpretation
The remaining blocker is content provenance/alignment, not renderer behavior. The project cannot promote the six current questions to production merely because the renderer regression passes.

## 6. Proposal
Created `phase-3/world-1-km-chapter-1-f-g-item-level-source-mapping-proposal-v1.md`.

The proposal recommends source-tightening rather than inventing new curriculum content:
- F-Q01 → direct standard-word/official-letter anchor via Activity 1.10.
- F-Q02 → direct effective-sentence anchor via Activity 1.11.
- F-Q03 → retain only with explicit F source mapping, otherwise tighten to the same direct anchors.
- G-Q01 → frame as digital reply to an official request via Activity 1.13.
- G-Q02 → remove generic unsupported tone claim and ground in the digital-reply competency actually supported by G.
- G-Q03 → retain only when explicitly framed as information needed in the digital reply to the official request.

No wording or fixture was changed in this session.

## 7. Copyright / provenance
Any later revision must be independently authored and must not reproduce textbook exercises, examples, answer choices, distinctive wording, or source passages. Page/activity references are provenance anchors only.

## 8. Decision
**PROPOSAL ONLY.** User approval is required before changing question wording or creating a revised canonical/QA fixture.

## 9. Next gate
User decision on the item-level source-tightening proposal → if approved, implement revised original questions → originality/provenance QA → versioned fixture → renderer regression only if material fixture changes → promotion decision.

## 10. Commit
Proposal commit: `5d26933f0661f3c64a115ee738711c96293c7e5a`.
