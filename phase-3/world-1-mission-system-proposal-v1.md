# World 1 — Mission System Proposal v1

**Phase:** Phase 3 — Game Design  
**Status:** **APPROVED WITH REVISION — user approved on 15 August 2026**  
**World:** Bahasa Indonesia / World 1 — Career Mission

## 1. Evidence baseline

The current approved GDD defines the core loop:

`Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check`.

The existing World 1 mission slice already uses a mission map with narrative, challenge, and result nodes. `BI12-W01-M01` currently flows through briefing → relevance scan → error hunt → application review → debrief.

The approved Camera / Character Gameplay Specification defines the spatial flow:

`Explore → Interact → Mission Brief → Challenge → Feedback → Debrief → XP/Progress → Unlock`.

The user has also approved the future Academic Planning foundation and the following learning/progression hooks:
- subject-selection gate;
- progression gate;
- optional mastery gate;
- failure on a first attempt should not permanently punish the learner;
- a progression threshold of 70% is accepted as the current design direction;
- Training Room / targeted training may be offered when the learner struggles.

## 2. Product interpretation

A Mission is a **learning journey with a contextual objective**, not a container that merely displays a list of questions.

A mission must answer four questions:

1. **Why am I doing this?** — contextual objective/story relevance.
2. **What do I need to learn or inspect?** — learning context.
3. **What must I prove?** — challenge/skill evidence.
4. **What changes after I succeed?** — progress/unlock/reward.

Questions are challenge mechanisms inside the mission. They are not the mission itself.

## 3. Mission lifecycle

```text
Mission Available
      ↓
Mission Brief
      ↓
Explore / Interact / Inspect
      ↓
Learn Context
      ↓
Challenge Sequence
      ↓
Immediate Feedback (Training/Learn)
      ↓
Mission Evaluation
      ↓
 ┌────┴─────────────┐
 │                  │
Pass               Not Yet
 │                  │
 ↓                  ↓
Debrief        Feedback + Training
 │                  │
 ↓                  ↓
XP / Progress     Retry / Practice
 │                  │
 ↓                  ↓
Unlock           Re-evaluate
```

Exam Simulation remains a separate mode with deferred feedback until submission, as already defined by the GDD.

## 4. Mission states

Recommended runtime states:

- `locked` — prerequisite not met;
- `available` — mission can be started;
- `active` — player is currently progressing through the mission;
- `training` — player is receiving targeted remediation/retry;
- `completed` — mission requirements have been met;
- `mastered` — optional later state when the mastery gate is satisfied.

The mission state must be stored independently from raw question order.

## 5. Mission structure

Every mission should use a data-driven manifest rather than hard-coded question-specific branches.

```text
Mission
├── identity
├── context
├── objective
├── prerequisites
├── learning_outcomes
├── nodes
│   ├── narrative
│   ├── exploration / interaction
│   ├── learn / inspect
│   ├── challenge
│   ├── training / remediation
│   └── debrief
├── completion_rule
├── rewards
└── next_unlocks
```

The renderer remains responsible for question presentation. The mission layer is responsible for context, sequence, state, progression, and transition.

## 6. Challenge sequencing

A mission should not require one fixed correct answer position or a fixed question order.

For question nodes:
- question selection is data-driven;
- option order is randomized where the question type permits it;
- answer evaluation is value/key based;
- feedback is source-grounded;
- question IDs are not embedded in presentation branches.

The current World 1 QA history already validates randomization and answer-value evaluation as mandatory anti-memorization behavior.

## 7. Completion rule — current design direction

For ordinary learning missions, the current accepted direction is:

**Mission pass threshold: 70%**

A learner who scores below the threshold is **not permanently blocked**.

Instead:

```text
Below 70%
   ↓
Explain weaknesses
   ↓
Offer Training Room / targeted practice
   ↓
Retry
   ↓
Reach ≥70%
   ↓
Mission passes
```

The exact calculation method for multi-select and future rubric-based tasks must be defined in the scoring contract before those mechanics are implemented broadly.

## 8. Failure philosophy

Wrong answers are learning events, not punishment.

A failed attempt should preserve:
- earned learning evidence;
- feedback history;
- skill diagnostics;
- access to remediation.

It should not automatically remove previously earned meaningful progression unless a later explicit game-design decision establishes a non-academic penalty.

## 9. Training Room integration

When the mission detects a meaningful weakness, it may present:

> 💡 Kamu mengalami kesulitan di Kompetensi X.  
> Mau masuk Training Room?

Training Room challenges should target the weak skill/topic rather than simply replaying the exact failed question.

The GDD's Recommended Training principle remains authoritative: recommendations should use stored learning data, not arbitrary random selection.

## 10. Mission rewards

XP is a game-progression signal, not a substitute for academic mastery.

Recommended structure:

- challenge XP — earned from valid challenge performance;
- mission completion XP — awarded once when the mission passes;
- optional achievement/cosmetic reward — non-essential.

Reward configuration must live in mission data rather than being duplicated in question presentation code.

The existing World 1 mission map already demonstrates this data-driven reward model.

## 11. Academic Planning / TKA hook

The future Academic Planning Office is a prerequisite/planning hub, not part of the immediate World 1 mission implementation.

Future mission prerequisites may reference:

```text
Subject Selection Gate
        ↓
Subject available
        ↓
Mission prerequisite
        ↓
Progression Gate
        ↓
Mission unlocked
```

This proposal does **not** encode final TKA subject rules. Those require the authoritative subject mapping and future curriculum/source evidence already required by Master Control.

## 12. Question-count rule — chapter/context driven

**There is intentionally no fixed number of questions per chapter or mission.**

Question quantity must be determined from the actual scope of the chapter/topic and from the mission's:

- theme;
- learning objective;
- narrative;
- context;
- learning outcomes;
- competency coverage;
- required challenge evidence.

A broad chapter may therefore receive more challenge items than a narrow chapter. A small chapter may require fewer items. The goal is **sufficient coverage**, not numerical symmetry.

The content team must be able to demonstrate that the selected question set adequately covers the chapter's relevant learning objectives and mission context without introducing redundant questions merely to reach a quota.

This rule applies to future mission/content planning and does not retroactively alter already approved canonical batches unless a separate content revision gate is opened.

### Question-count decision principle

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
Add questions only when they cover a distinct need
        ↓
Mission QA / Pedagogical Review
```

A chapter is considered sufficiently represented when its intended narrative/context and relevant learning outcomes can be demonstrated through the challenge set. The exact numeric count is an output of this analysis, not a preset input.

## 13. World 1 example

Current `BI12-W01-M01` can eventually evolve from:

```text
Briefing
 ↓
Relevance Scan
 ↓
Error Hunt
 ↓
Application Review
 ↓
Debrief
```

to a richer spatial mission:

```text
Explore school / career area
        ↓
Receive Career Mission
        ↓
Inspect vacancy / context
        ↓
Learn relevant criteria
        ↓
Relevance Challenge(s)
        ↓
Language / structure challenge(s)
        ↓
Application review challenge(s)
        ↓
Mission evaluation
        ↓
≥70% ───────────────→ Debrief → XP → Unlock
        │
        └─ <70% → Training Room → Retry
```

The number of `(s)` challenge items is determined by the chapter/mission coverage analysis above, not by a fixed quota.

## 14. Boundaries

This proposal does not yet finalize:
- the full World 1 mission count;
- final mission map geometry;
- final NPC/dialogue scripts;
- final UI presentation;
- final audio/animation;
- final mastery formula;
- final TKA subject catalogue rules;
- mass question generation.

Those decisions remain in their appropriate gates.

## 15. Acceptance status

The user approved Mission System Proposal v1 with one explicit revision:

> **Question count is chapter/context driven. There is no fixed number of questions per chapter.**

All other proposal decisions are approved as previously specified.

## 16. Next step

Create **Mission System Specification v1**, carrying forward the chapter/context-driven question-count rule. Then implement only a small controlled World 1 mission-system prototype before expanding the full mission architecture.
