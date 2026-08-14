# 006 — TKA Foundation + Camera/Character Visual Gameplay Prototype

**Date:** 2026-08-14
**Phase:** Phase 3
**Status:** TKA foundation documented; Camera + Character prototype IMPLEMENTED / Visual QA PENDING

## Evidence

Before this session:
- re-sync was performed against the current repository tree;
- every file under `Alur Kerja Proyek` was read one by one;
- Master Control and active Phase 3 artifacts were re-verified;
- official Pusat Asesmen Pendidikan TKA sources were cross-checked.

Current official evidence confirms:
- TKA is an assessment, not an additional school subject;
- SMA/MA/SMK TKA includes Bahasa Indonesia, Matematika, Bahasa Inggris, and selected choice subjects;
- the official FAQ states two choice subjects are selected during TKA registration;
- official TKA materials state that assessment content considers competencies/materials applicable to Kurikulum Merdeka and Kurikulum 2013;
- official materials also provide a subject-choice baseline and current subject information.

## Important correction

The project does **not** need to recreate a separate Kurikulum 2013 curriculum in order to support TKA preparation. The correct architecture is:

```text
Official TKA assessment framework
        +
Applicable curriculum intersection
        +
Current Student Book / Teacher Guide sources
        ↓
Subject Knowledge Base
        ↓
Exam Blueprint
        ↓
Controlled Question Pipeline
```

The official TKA framework is the assessment specification. Textbooks provide learning content and pedagogical context.

## Implementation — TKA foundation

Created:
- `phase-3/tka-subject-catalog-foundation-v1.json`
- `phase-3/tka-study-path-foundation-v1.md`

These create the stable future foundation for an **Academic Planning Office / TKA Preparation** area without pretending that all subject content already exists.

The foundation records:
- 3 mandatory TKA subjects;
- a verified baseline choice catalogue;
- a placeholder status for further SMK program-specific catalogue reconciliation;
- future selection/progression/mastery gate hooks;
- the rule that the game study plan is separate from official TKA registration.

No student-facing TKA rule engine is implemented yet.

## Implementation — Camera + Character prototype

Created:
- `prototype/bahasa-indonesia/camera-character-prototype.html`
- `phase-3/world-1-camera-character-visual-qa-v1.md`

The prototype uses the approved visual reference wrappers and implements a lightweight movement/camera test. The runtime character is explicitly a proxy for visual testing, not final art.

## Interpretation

The correct order remains:

```text
Character Design v2 APPROVED
        ↓
Camera / Character Gameplay Spec APPROVED
        ↓
Camera + Character visual prototype
        ↓
USER VISUAL QA
        ↓
Mission System
        ↓
Progression System
        ↓
RPG Layer
```

The TKA foundation can exist now as a stable menu/data foundation, but subject content, locked-room rules, and progression thresholds remain future design decisions.

## Gate

**Camera + Character Visual QA: QA_PENDING.**

Static/source verification is complete. User browser evidence is still required before declaring the visual prototype PASS.
