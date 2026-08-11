# World 1 — Career Mission
## Phase 3 World Slice Design v1

**Status:** approved for prototype implementation
**World:** Bahasa Indonesia / Career Mission
**Academic domain:** surat lamaran kerja dan daftar riwayat hidup
**Prototype scope:** one compact mission slice using the approved Golden Dataset seed

## Evidence

The Student Book states that Chapter I is about writing an effective and relevant job application and supporting CV, with evaluation of job-application texts, writing, presentation, and publication as learning outcomes. Chapter I begins on page 1; Subbab B, evaluating systematics and language features, begins on page 8. The chapter introduction states that a job application is an official letter and should use formal language, systematic structure, clear content, and relevant information. Source: `texts/Indonesia_BS_TL_KLS_XII_Rev.md`, fetched ranges covering the chapter introduction and Subbab A.

The approved seed contains three World 1 items: `BI12-GOLD-001`, `BI12-GOLD-002`, and `BI12-GOLD-009`. Their recorded student-book and teacher-guide provenance is in `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`.

The Teacher Guide identifies a dedicated Chapter I guide with objectives/indicators, learning framework, formative and summative assessment, answer keys, and remedial/enrichment. Its table of contents places the Chapter I guide at pp. 31–90. Source: `texts/Indonesia_BG_TL_KLS_XII_Rev.md`.

## Implementation decision

The first playable World 1 slice is intentionally small:

```text
Mission Brief
  ↓
Recruiter Desk
  ↓
Challenge 1 — Relevance Scan
  ↓
Challenge 2 — Error Hunt
  ↓
Challenge 3 — Application Review
  ↓
Mission Result
  ↓
Skill Feedback
```

The slice uses the existing data-driven question contract. It does not embed question content in HTML or branch on question IDs.

## Player fantasy

The player is a final-year student preparing an application package. A fictional recruiter has returned a draft application for review. The player must make the application more relevant and coherent before submitting it.

## Mission objective

Primary learning objective: practice evaluating relevance, completeness, and language/presentation of a job application.

The fictional setting is game context only and does not claim to reproduce a real employer's hiring process.

## Mission beats

### Beat 1 — Briefing
The player receives a short fictional vacancy context and learns that the immediate task is to inspect an application rather than answer isolated questions.

### Beat 2 — Relevance Scan
Uses `BI12-GOLD-001` with `document_inspection`.

Learning signal: understands that application information should be relevant to the target position.

### Beat 3 — Error Hunt
Uses `BI12-GOLD-002` with `error_hunt`.

Learning signal: evaluates an application that contains many but mostly irrelevant experiences.

### Beat 4 — Application Review
Uses `BI12-GOLD-009` with `document_inspection` and ordering.

Learning signal: applies a coherent review sequence: match qualifications to position → check completeness → check language/presentation.

### Beat 5 — Debrief
The player receives score and skill feedback. Wrong answers explain the concept; they do not remove academic mastery.

## Game progression

- Completing each challenge awards XP.
- Completing the mission unlocks the World 1 next-node placeholder.
- XP is separate from learning mastery.
- Accuracy by skill is kept in-memory only; persistence is deferred until the profile system is designed.

## Learning progression

Current slice tracks:
- relevance
- evaluation
- application/review process

Future World 1 expansion can add systematics, language features, CV relevance/completeness, email vs conventional format, presentation/interview, and publication. Those are not added until corresponding content has provenance and QA.

## Feedback rule

Wrong answers produce immediate explanation in Training mode. There is no game-over state. A player may retry the mission.

## Scope guard

This slice excludes character creation, combat, open-world navigation, multiplayer, AI NPC chat, accounts, backend persistence, real employer data, and mass question generation.

## Prototype acceptance criteria

1. Mission loads without authoring UI.
2. Questions load from the approved dataset.
3. Only Chapter I seed items are presented.
4. No question-ID-specific rendering branch exists.
5. Each challenge displays immediate feedback in Training mode.
6. XP and accuracy are visible.
7. End-of-mission screen identifies learning skills practiced.
8. Layout works on mobile and desktop.
9. Provenance remains in the dataset, not presentation code.
10. The prototype remains a static browser build.

## Next

After this slice passes playtest and technical QA, expand World 1 content before building Worlds 2–4.
