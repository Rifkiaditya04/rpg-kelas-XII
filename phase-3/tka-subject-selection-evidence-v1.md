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

The official FAQ states that students select 2 subjects from the available list, with guidance expected from the education unit so choices can align with student interests and further-study plans. Selection is made during TKA registration.

Official source: https://pusmendik.kemendikdasmen.go.id/tka/

### Official subject list

The official Pusat Asesmen Pendidikan subject pages list the SMA/MA choice subjects including Matematika Tingkat Lanjut, Bahasa Indonesia Tingkat Lanjut, Bahasa Inggris Tingkat Lanjut, Fisika, Kimia, Biologi, Pendidikan Pancasila/PPKn, Ekonomi, Geografi, Sosiologi, Sejarah, Antropologi, and listed foreign languages, with additional SMK-specific options.

Official source: https://pusmendik.kemendikdasmen.go.id/tka/tka/view/mata-pelajaran-wajib/sma/

### Official 2026 schedule context

A 29 July 2026 Kemendikdasmen release states that TKA 2026 registration for SMA/SMK/MA/sederajat opened 27 July–27 September 2026 and the main TKA implementation is scheduled for 26 October–8 November 2026.

Official source: https://bkpdm.kemendikdasmen.go.id/publikasi/kemendikdasmen-kembali-buka-pendaftaran-tes-kemampuan-akademik-untuk-jenjang-smasmkmasederajat-tahun-2026

## Important correction for project terminology

TKA should not be described as an additional school subject. It is a standardized academic assessment. The game may create a **TKA Preparation** layer/hub that organizes learning and practice around TKA subjects, but the game should not silently redefine TKA as a curriculum subject.

## Interpretation — proposed game architecture, not yet approved

The user's locked-room idea is compatible with the project architecture if implemented as two distinct gates:

1. **Selection gate** — a subject room is locked when it is outside the student's selected study/TKA preparation path.
2. **Progression gate** — a selected subject's next mission/area remains locked until the required preceding learning stage is completed.

Recommended anti-skip rule:
- Do not allow a student to bypass a required prerequisite mission merely by walking to a later room.
- Do not permanently punish a student for choosing the wrong path.
- Keep already-unlocked practice/review available.
- Allow the student's subject plan to be reviewed/changed through an explicit planning interaction rather than by accidental map traversal.

The project should avoid requiring mastery of unrelated subjects to unlock a student's selected subjects. Gates should follow the learning path and prerequisite relationships, not create arbitrary walls.

## Unverified / requires later project decision

- Exact subject-room layout for the full game.
- Whether the initial game profile uses official TKA registration choices verbatim or a broader study-plan model.
- Whether mandatory TKA preparation rooms are always accessible or are introduced progressively.
- Exact progression/mastery thresholds.
- Whether non-TKA curriculum subjects will also receive rooms/worlds.

These must be decided in Mission System / Progression System design and documented in Master Control before implementation.
