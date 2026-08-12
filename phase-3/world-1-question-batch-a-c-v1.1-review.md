# World 1 Controlled Question Batch A–C v1.1 Review

## Status
`revision_ready_for_recheck`

This document records the targeted re-review plan and decisions for the two blocked items from `BI12-W01-BATCH-AC-V1`.

## Evidence
- AC-003 in v1 was labeled `evidence_matching`, but the current renderer exposes that type only through generic option selection rather than a true matching interaction.
- AC-004 in v1 was labeled `ordering`, but the current renderer does not implement an ordering interaction; the runtime currently renders selectable options.
- The project quality gate requires the declared interaction type to be compatible with the renderer and prohibits treating a label as an implementation that does not exist.

## Revision decisions

### BI12-W1-AC-003
- Previous type: `evidence_matching`
- Revised type: `mcq`
- Revised mechanic: `relevance_scan`
- Reason: preserve the underlying analytical skill—matching a job requirement with relevant applicant evidence—while using a supported single-answer interaction.
- Expected answer: experience organizing and checking activity archives systematically.
- Recheck required: answer uniqueness, distractor validity, provenance, explanation, renderer compatibility.

### BI12-W1-AC-004
- Previous type: `ordering`
- Revised type: `mcq`
- Revised mechanic: `structure_check`
- Reason: preserve the structural-sequencing learning target without claiming that the current renderer provides drag/drop or true ordering behavior.
- Expected answer: place/date → subject/attachments → destination address → opening salutation.
- Recheck required: answer uniqueness, structural provenance, explanation, renderer compatibility.

## Review gate
The two revisions are **not yet promoted** to the production Golden Dataset. They must pass a targeted answer/pedagogical/provenance/renderer recheck first.

## Final-release rule reminder
Development-status text in the student-facing prototype remains intentionally retained until final release cleanup. It must not be removed during this batch revision.
