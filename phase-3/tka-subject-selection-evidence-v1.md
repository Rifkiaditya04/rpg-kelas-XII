# TKA Subject Selection Evidence v1

**Status:** EVIDENCE PASS — design input only; not a game-rule approval
**Date:** 14 August 2026

## Purpose

Record independently verified current TKA information before subject-selection and locked-room mechanics are encoded into the game.

## Evidence

### Official Pusat Asesmen Pendidikan

The current official TKA information for SMA/MA/SMK states that TKA covers:
- Bahasa Indonesia;
- Matematika;
- Bahasa Inggris;
- 2 mata pelajaran pilihan.

The official FAQ states that students select 2 choice subjects from the available list and that selection is made during TKA registration. The game must therefore treat its subject choice as a **study-plan/preparation model**, not as official registration.

Official source: https://pusmendik.kemendikdasmen.go.id/tka/

### Curriculum intersection

The official TKA overview states that TKA questions are the same for Kurikulum Merdeka and Kurikulum 2013 because the assessment is developed by considering the materials/competencies applicable to both curricula.

This means the project does **not** need to recreate a separate Kurikulum 2013 curriculum. For each future subject, the correct source hierarchy is:

```text
Official TKA assessment framework
        +
Applicable curriculum intersection
        +
Current Student Book / Teacher Guide
        ↓
Knowledge Base
```

### Official subject baseline

Official TKA material lists a baseline choice catalogue including:
- Matematika Tingkat Lanjut;
- Bahasa Indonesia Tingkat Lanjut;
- Bahasa Inggris Tingkat Lanjut;
- Fisika;
- Kimia;
- Biologi;
- Pendidikan Pancasila/PPKn;
- Ekonomi;
- Geografi;
- Sosiologi;
- Sejarah;
- Antropologi;
- Bahasa Prancis;
- Bahasa Jerman;
- Bahasa Jepang;
- Bahasa Mandarin;
- Bahasa Korea;
- Bahasa Arab;
- Produk/Projek Kreatif dan Kewirausahaan for the SMK option baseline.

Official subject source: https://pusmendik.kemendikdasmen.go.id/tka/tka/view/mata-pelajaran-wajib/sma/

The current official site also exposes additional SMK program-specific options. These are intentionally **not yet hard-coded into the game's final subject-selection rule** until the current authoritative catalogue is reconciled and a project decision is recorded.

### Current official assessment forms

Official TKA material describes objective question forms including single-answer multiple choice and complex multiple-choice forms such as multiple-answer and category models. This is relevant to future renderer/content planning but does not replace the project's existing content quality gates.

## Important correction for project terminology

TKA should not be described as an additional school subject. It is a standardized academic assessment. The game may create a **TKA Preparation / Academic Planning** layer that organizes learning and practice around TKA subjects.

## Interpretation — proposed game architecture, not yet approved

The user's locked-room idea is compatible with the project architecture if implemented as distinct gates:

1. **Selection gate** — a subject room is locked when it is outside the student's selected preparation path.
2. **Progression gate** — a selected subject's next mission/area remains locked until the required preceding learning stage is completed.
3. **Mastery gate** — an optional future gate may require demonstrated readiness.

Recommended anti-skip rule:
- Do not allow a student to bypass a required prerequisite mission merely by walking to a later room.
- Do not permanently punish a student for choosing the wrong path.
- Keep already-unlocked practice/review available.
- Allow the study plan to be reviewed/changed through an explicit planning interaction.

The game should avoid requiring mastery of unrelated subjects to unlock a selected subject. Gates should follow learning prerequisites rather than arbitrary walls.

## Unverified / requires later project decision

- Exact subject-room layout for the full game.
- Whether the initial game profile uses official TKA registration choices verbatim or a broader study-plan model.
- Exact progression/mastery thresholds.
- Current complete SMK program-specific subject catalogue and its mapping to the game.
- Whether non-TKA curriculum subjects will also receive rooms/worlds.

These must be decided in Mission System / Progression System design and documented in Master Control before implementation.
