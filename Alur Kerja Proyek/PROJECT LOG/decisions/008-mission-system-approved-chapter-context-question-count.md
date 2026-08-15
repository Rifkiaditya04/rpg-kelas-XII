# Decision 008 — Mission System Approved + Chapter/Context-Driven Question Count

**Date:** 15 August 2026  
**Phase:** Phase 3 — Mission System Design  
**Status:** APPROVED WITH REVISION

## Evidence

The current Mission System Proposal v1 defines Mission as a contextual learning journey rather than a list of questions, with mission lifecycle, states, data-driven challenge sequencing, 70% pass direction, non-punitive retry, Training Room integration, XP/progression separation, and future Academic Planning/TKA prerequisite hooks.

The user reviewed the proposal and explicitly approved it, with one revision concerning question quantity.

## Decision

There is **no fixed number of questions per chapter or mission**.

Question quantity is determined by the actual scope and pedagogical needs of the chapter/topic, including:

- theme;
- narrative;
- context;
- learning objectives;
- competency coverage;
- required challenge evidence.

A broad chapter may therefore contain more questions than a narrow chapter. The target is sufficient and meaningful coverage, not numerical symmetry.

Questions must not be added merely to satisfy a quota. Each additional question should cover a distinct learning need, competency, context, or challenge requirement.

## Interpretation

This changes content planning from a **quota model** to a **coverage model**:

```text
Chapter / Topic Scope
        ↓
Theme + Narrative + Context
        ↓
Learning Objectives / Competencies
        ↓
Coverage Mapping
        ↓
Determine minimum sufficient challenge set
        ↓
Add only distinct-value questions
        ↓
Pedagogical + provenance + renderer QA
```

This decision does not retroactively modify approved A–C/D–F canonical batches. Existing approved content remains versioned and immutable unless a separate revision gate is opened.

## Implementation

Updated:

- `phase-3/world-1-mission-system-proposal-v1.md` — status changed to **APPROVED WITH REVISION** and chapter/context-driven question-count rule added.

Master Control must carry the same decision as the authoritative project-status record.

## Next step

Proceed to **Mission System Specification v1**, where the coverage-based question-count rule becomes an explicit specification and QA acceptance criterion.
