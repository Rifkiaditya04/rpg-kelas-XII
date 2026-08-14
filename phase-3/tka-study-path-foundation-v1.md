# TKA Preparation / Academic Planning Foundation v1

**Status:** FOUNDATION ONLY — not yet a student-facing curriculum/TKA rule engine
**Date:** 14 August 2026

## Evidence

Current official Pusat Asesmen Pendidikan information states that TKA for SMA/MA/SMK includes Bahasa Indonesia, Matematika, Bahasa Inggris, and two selected choice subjects. The official FAQ states that students select two choice subjects from the available list during TKA registration. The official assessment framework states that TKA instruments are prepared by the Ministry and that the assessment framework is based on the applicable curricula.

Official sources reviewed:
- https://pusmendik.kemendikdasmen.go.id/tka/
- https://pusmendik.kemendikdasmen.go.id/tka/tka/view/mata-pelajaran-wajib/sma/
- current official TKA assessment framework / decision material referenced by Pusat Asesmen Pendidikan.

The official TKA overview also states that questions are designed with consideration of competencies/materials applicable to both Kurikulum Merdeka and Kurikulum 2013. This does **not** mean the project must recreate a separate Kurikulum 2013 curriculum. It means the TKA preparation content must be mapped to the official TKA assessment framework and the applicable curriculum intersection for each subject.

## Important terminology

TKA is an **assessment**, not an additional school subject.

The game therefore uses the product term:

> **TKA Preparation / Academic Planning**

rather than presenting TKA as a new curriculum subject.

## Product foundation

Create an eventual school location:

```text
Academic Planning Office
        ↓
TKA Preparation
        ├── Mandatory
        │   ├── Bahasa Indonesia
        │   ├── Matematika
        │   └── Bahasa Inggris
        │
        └── Choice Plan
            ├── Choice Slot 1
            └── Choice Slot 2
```

This foundation may exist before all subject content is available. Empty/locked rooms are acceptable as future placeholders, but they must be clearly presented as unavailable content rather than falsely claiming that the game already contains the full subject curriculum.

## Subject-selection model

The game should eventually store a **study plan** separately from official TKA registration.

```text
Official TKA information
        ↓
Player's study plan
        ↓
Game subject rooms
        ↓
Learning / Training / Exam Simulation
```

The game does not submit or replace official TKA registration.

## Locked-room model

### Selection gate
A choice-subject room is locked when it is outside the player's selected two-subject preparation path.

### Progression gate
A selected subject's later chapter/mission is locked until the required previous learning stage is completed.

### Mastery gate
A later optional challenge may require demonstrated readiness. It should not be used as a punitive permanent lock.

### Anti-skip principle
The student cannot bypass required learning merely by walking to a later room. However, wrong answers do not permanently punish the student. Remedial/training/retry paths remain available.

## Content-ingestion rule for future subjects

When a new subject is opened for production, do not generate questions from the subject name alone.

Use:

```text
Official TKA assessment framework
        +
Relevant current Student Book(s)
        +
Teacher Guide / pedagogical validator where available
        ↓
Knowledge Base
        ↓
Exam Blueprint
        ↓
Controlled Question Batch
        ↓
Independent Verification
        ↓
Pedagogical Review
        ↓
Regression / Promotion
```

For the TKA layer, the official assessment framework is the authoritative assessment specification. Textbooks are learning-content sources and must not be treated as a substitute for the official framework.

## What is deliberately NOT decided yet

- exact room layout;
- final subject icons/names in the map;
- whether mandatory rooms are available from the beginning;
- exact progression thresholds;
- exact mastery thresholds;
- whether the game will model official TKA registration choices verbatim or use a broader study-plan abstraction;
- final SMK program-specific subject catalogue reconciliation;
- which subjects will receive complete game worlds first.

These belong to Mission System / Progression System design and require another explicit decision gate.
