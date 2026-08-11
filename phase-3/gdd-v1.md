# KELAS 12 — THE FINAL MISSION
## Phase 3 — Game Design Document v1

**Status:** Draft architecture approved for prototype expansion
**Phase:** 3 — Game Design Document
**Initial World:** Bahasa Indonesia
**Platform:** Browser / HTML5
**Target:** HP + laptop
**Purpose:** Persiapan ujian

## 1. Evidence baseline

The project Master Control locks the product as an educational adventure / light RPG, browser-first, beginning with Bahasa Indonesia, with the academic source hierarchy of Student Book as primary and Teacher Guide as pedagogical validator.

The project workflow establishes four Bahasa Indonesia worlds: Career Mission, Film Detective, Drama Stage, and Nusantara Explorer. Golden Dataset v1 is an approved seed, not a production-scale bank. Content provenance is mandatory.

## 2. Design interpretation

The game should feel like an adventure whose challenges happen to train exam-relevant skills. It must not become a quiz wrapped in decorative RPG elements.

Core design rule:

> Competency → learning experience → challenge → feedback → progression → mastery.

RPG elements are supporting systems, not the learning objective.

## 3. Core player fantasy

The player is a Grade 12 student completing the final academic mission. Each world represents a domain of Bahasa Indonesia competence. The player gathers evidence, solves contextual problems, repairs or creates texts, and gradually proves mastery before entering the Final Exam.

## 4. Core game loop

```text
Explore
  ↓
Receive Mission
  ↓
Learn / Inspect Context
  ↓
Solve Challenge
  ↓
Immediate Feedback
  ↓
Earn XP / Progress
  ↓
Unlock Next Challenge
  ↓
Review Weak Skill
  ↓
Mastery Check
```

Exam Simulation is a separate mode and should not provide answer feedback until the submitted attempt is complete.

## 5. Three learning modes

### Learn
Low pressure. Explanations and hints are available. The goal is concept acquisition.

### Training
Contextual challenges with scoring and immediate feedback. Repetition is allowed.

### Exam Simulation
Timed, feedback deferred until submission, weighted toward blueprint targets. Results feed the weakness-analysis system.

## 6. World structure

### World 1 — Career Mission

Academic domain: surat lamaran kerja and daftar riwayat hidup.

Primary mechanics: document inspection, error hunt, career decisions, document builder.

Player fantasy: become a candidate capable of producing a coherent application package.

### World 2 — Film Detective

Academic domain: film pendek, cerpen, ekranisasi, symbols, social messages, and script work.

Primary mechanics: evidence hunt, scene reconstruction, adaptation compare, symbol decode, script repair.

Player fantasy: investigate a story and reconstruct meaning from evidence.

### World 3 — Drama Stage

Academic domain: drama, characters, conflict, dialogue, stage directions, and performance.

Primary mechanics: dialogue choice, character analysis, scene ordering, conflict solver, stage direction.

Player fantasy: prepare and stage a dramatic work by understanding its internal structure.

### World 4 — Nusantara Explorer

Academic domain: digital feature writing and exploration of Nusantara culture.

Primary mechanics: field research, source sorting, fact checking, feature builder, culture exploration.

Player fantasy: investigate cultural information and turn verified material into a coherent feature.

## 7. Progression model

The player has two separate progression layers.

### Game progression
- XP
- mission completion
- world unlocks
- achievements
- cosmetic / non-essential rewards

### Learning progression
- skill mastery
- accuracy by topic
- accuracy by cognitive level
- difficulty performance
- repeated-error patterns

Game progression must never be used as a substitute for academic mastery.

## 8. Skill model

Every scored challenge maps to a learning skill. Initial cognitive categories are remember, understand, apply, analyze, evaluate, and create.

The player profile should store mastery evidence per skill/topic rather than only a total score.

Example:

```text
Career Mission
├── Structure          82%
├── Language           71%
├── Relevance          91%
└── CV completeness    64%
```

## 9. Feedback model

Wrong answers are learning events.

Required feedback sequence in Training:

```text
Answer
 ↓
Correct / Incorrect
 ↓
Why
 ↓
Source-linked explanation
 ↓
Optional retry
```

The player should not lose meaningful academic progress merely because an answer is wrong.

## 10. Final Exam

The Final Exam is the capstone of the Bahasa Indonesia world.

Initial internal blueprint target:
- 40 questions
- 60 minutes
- 10 questions per world
- 8 easy / 22 medium / 10 hard

These are project design targets only, not claims about any official examination composition.

Final Exam results must produce:

```text
Overall accuracy
↓
World performance
↓
Topic performance
↓
Skill performance
↓
Weakness ranking
↓
Recommended Training
```

## 11. Recommended Training

After an exam, the system recommends targeted missions based on the student's lowest-confidence or lowest-accuracy skills.

Example:

```text
Weakest skill: analyzing adaptation changes
        ↓
Recommended:
Film Detective → Adaptation Compare → Medium
        ↓
3–5 targeted challenges
        ↓
Mastery check
```

The recommendation engine must use stored learning data, not arbitrary random recommendations.

## 12. Challenge architecture

Challenges are content-driven.

```text
Question JSON
  ↓
question_type
  ↓
Generic Renderer
  ↓
Challenge Presentation
  ↓
Answer
  ↓
Scoring
  ↓
Learning Feedback
```

No challenge may require a question-ID-specific code branch.

Creative/open-ended tasks require a separate rubric renderer and are not part of the current generic renderer contract.

## 13. Data architecture

Academic content remains outside presentation code.

```text
knowledge-base/
  bahasa-indonesia/
    v1/
      index.json
      chapter-map.json
      exam-blueprint.json
      question-schema.json
      golden-dataset-v1.json

prototype/
  bahasa-indonesia/
    index.html
    renderer.js
    quality-gate.html
```

Future game systems should consume the same content contracts rather than duplicating question content inside HTML or JavaScript.

## 14. Browser-first technical direction

Initial implementation remains plain web technology unless a later evidence-based decision demonstrates a clear advantage for a framework.

Priority:
1. free
2. simple deployment
3. portable static build
4. maintainable data-driven content
5. professional UX

The final product must be playable without exposing authoring or development interfaces.

## 15. Mobile-first UX requirements

- touch-friendly controls
- readable text
- no hover-only interaction
- responsive layout
- low asset weight
- clear progress state
- keyboard support where useful
- no dependency on a high-end device

Desktop should remain fully supported.

## 16. Scope guard

Phase 3 does NOT yet include multiplayer, online accounts, complex 3D graphics, real-time AI NPC conversations, monetization, social networking, or unnecessary backend infrastructure.

These are excluded unless a later documented decision proves they materially improve the educational objective and do not threaten delivery.

## 17. Phase 3 deliverables

1. This GDD v1
2. World and mission architecture
3. Progression and learning model
4. Final Exam architecture
5. Data-to-game contract
6. Prototype expansion plan

Next implementation step: convert this GDD into a small playable World 1 slice before expanding all four worlds.
