# World 1 Controlled Question Batch A–C v1.1 Review

## Status
`targeted_recheck_passed__batch_merge_gate_pending`

This document records the targeted re-review of the two blocked items from `BI12-W01-BATCH-AC-V1`.

## Evidence
- AC-003 in v1 was labeled `evidence_matching`, but the current renderer does not provide a true matching interaction for that data shape.
- AC-004 in v1 was labeled `ordering`, but the current renderer does not provide a true ordering interaction.
- The renderer explicitly supports `mcq`, so both revisions now use a supported interaction contract.
- Chapter I provenance already maps relevance/vacancy fit to the relevance lane and systematics/structure to the structure lane.

## Targeted recheck

### BI12-W1-AC-003
- Previous type: `evidence_matching`
- Revised type: `mcq`
- Revised mechanic: `relevance_scan`
- Answer uniqueness: **PASS** — only the archive-management experience directly demonstrates the stated requirement.
- Distractors: **PASS** — the alternatives do not provide equivalent evidence of document-management competence.
- Explanation: **PASS** — explains the relevance relationship rather than merely restating the answer.
- Provenance: **PASS** — retains Chapter I relevance provenance (`Student Book pp. 10–11, 23`; Teacher Guide pp. 32, 75–76) already mapped in the Deep Content Pass.
- Renderer compatibility: **PASS** — `mcq` is supported.

### BI12-W1-AC-004
- Previous type: `ordering`
- Revised type: `mcq`
- Revised mechanic: `structure_check`
- Answer uniqueness: **PASS** — only the first sequence matches the taught initial structure.
- Distractors: **PASS** — each alternative places major components in an incompatible order.
- Explanation: **PASS** — explains the structural sequence.
- Provenance: **PASS** — retains Chapter I structure provenance (`Student Book pp. 8–12`; Teacher Guide pp. 32, 75–76) already mapped in the Deep Content Pass.
- Renderer compatibility: **PASS** — `mcq` is supported.

## Effective batch status
The two blocked items now have renderer-compatible replacements. Combined with the seven previously passing items, the effective A–C batch has **9/9 items with no remaining interaction-contract blocker**.

This is a **targeted recheck pass**, not yet the final production-batch gate. The next required step is to materialize/merge the nine effective items into one canonical v1.1 batch, run the full schema/provenance/renderer/batch quality gate, and only then consider promotion to the approved dataset.

## Final-release rule reminder
Development-status text in the student-facing prototype remains intentionally retained until final release cleanup. It must not be removed during this batch revision.
