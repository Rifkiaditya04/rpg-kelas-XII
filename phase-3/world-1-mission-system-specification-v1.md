# World 1 — Mission System Specification v1

**Phase:** Phase 3 — Game Design  
**Status:** SPECIFICATION v1 — derived from approved Mission System Proposal v1  
**World:** Bahasa Indonesia / World 1  
**Implementation status:** Not yet implemented; controlled prototype follows after specification review

## 1. Source and authority

This specification is derived from the approved project architecture and the approved Mission System Proposal v1.

Authoritative design sources:
- `Alur Kerja Proyek/00-MASTER-CONTROL.md`
- `phase-3/gdd-v1.md`
- `phase-3/world-1-mission-system-proposal-v1.md`
- approved Camera / Character Gameplay Specification
- existing World 1 mission map and approved content contracts

Where this specification introduces implementation detail that was not previously fixed, it is a **specification decision**, not historical evidence.

## 2. Mission System purpose

The Mission System converts approved academic content and the approved spatial game flow into contextual learning journeys.

A mission is **not a question list**.

```text
Context / Story
      ↓
Learn / Inspect
      ↓
Guided Interaction
      ↓
Challenge
      ↓
Feedback
      ↓
Training if needed
      ↓
Mission Evaluation
      ↓
Progress / Unlock
```

Questions are challenge mechanisms inside a mission. The mission layer owns context, sequencing, state, transitions, and progression; the question renderer owns question presentation and answer interaction.

## 3. Player experience contract

Every ordinary learning mission must establish:

1. **Why** — contextual reason for the mission.
2. **What to learn** — concept/competency being developed.
3. **What to do** — exploration, inspection, guided activity, or challenge.
4. **What to prove** — evidence of learning.
5. **What changes** — reward, progress, unlock, or next mission.

The mission should feel like an educational adventure rather than a quiz with RPG decoration.

## 4. Runtime mission states

```text
locked
  ↓
available
  ↓
active
  ├── learning
  ├── challenge
  ├── training
  └── evaluation
  ↓
completed
  ↓
mastered (optional future state)
```

State semantics:

- `locked`: prerequisite is not satisfied.
- `available`: mission may be started.
- `active`: mission has started and retains its progress state.
- `learning`: player is receiving authored explanation, examples, or guided inspection.
- `challenge`: player is completing an assessed learning task.
- `training`: targeted remediation/retry is active.
- `evaluation`: mission completion rule is being calculated.
- `completed`: mission pass requirement has been met.
- `mastered`: optional future mastery state after a separate mastery gate.

Mission state must not be inferred solely from question index or presentation order.

## 5. Mission manifest contract

The runtime should consume a data-driven mission manifest.

Minimum conceptual shape:

```json
{
  "mission_id": "BI12-W01-M03",
  "status": "available",
  "identity": {},
  "context": {},
  "objective": {},
  "prerequisites": [],
  "learning_outcomes": [],
  "nodes": [],
  "completion_rule": {},
  "rewards": {},
  "next_unlocks": []
}
```

This is a conceptual contract. Exact JSON schema and field validation are implementation tasks for the controlled prototype.

### Node types

Required design categories:

- `narrative` — story/context/dialogue;
- `exploration` — movement or world interaction;
- `interaction` — inspect/use/talk/select;
- `learn` — authored explanation, example, hint, or guided instruction;
- `challenge` — invokes the generic question/challenge renderer;
- `training` — invokes targeted remediation content;
- `debrief` — summarizes mission result and next action.

## 6. Learn / Teach Node

The Learn / Teach Node is now an explicit part of the Mission System.

Its purpose is to prevent the game from presenting a question before giving the learner a reasonable opportunity to understand the relevant concept.

### Teaching sequence

```text
NPC / Context
    ↓
Concept introduction
    ↓
Short explanation
    ↓
Example / evidence
    ↓
Guided observation or interaction
    ↓
Readiness transition
    ↓
Challenge
```

The first implementation should use **authored, deterministic content**.

NPC dialogue is not an uncontrolled source of academic truth. AI-generated dialogue may assist content authoring later, but runtime educational explanations must come from approved content artifacts.

### Teaching content requirements

Each teaching segment should be traceable to:
- chapter/topic;
- learning outcome/skill;
- source artifact;
- source page/section when applicable;
- content authoring method;
- review status.

The explanation must be independently written rather than copied from the textbook.

## 7. NPC role

NPCs are a delivery mechanism for learning context, not merely decoration.

Possible authored roles:

- teacher — concept introduction and explanation;
- classmate — alternative example/perspective;
- librarian — information/reference context;
- career counselor — application/career relevance;
- specialist NPC — contextual problem or domain scenario.

NPC role selection is mission-specific. Not every mission needs multiple NPCs.

## 8. Challenge invocation

The mission layer must invoke the existing generic question renderer through data.

```text
Mission node
   ↓
challenge_id / content reference
   ↓
Resolved approved question data
   ↓
renderer.js
   ↓
Answer interaction
   ↓
Result
   ↓
Mission state update
```

No mission may require a question-ID-specific renderer branch.

Question ordering must not be permanently fixed for ordinary challenge sequences. Option order must be randomized where supported by the question type. Answer evaluation must use canonical answer values/keys rather than answer position.

## 9. Question-count and coverage specification

There is **no fixed question count per chapter, mission, or world**.

The number of challenge items is an output of content coverage analysis.

Required planning sequence:

```text
Chapter / Topic scope
        ↓
Theme + narrative + context
        ↓
Learning objectives / competencies
        ↓
Skill mapping
        ↓
Coverage matrix
        ↓
Minimum sufficient challenge set
        ↓
Remove redundant items
        ↓
Independent answer + pedagogical review
        ↓
Provenance / originality audit
```

A broad chapter may require more challenges than a narrow chapter. The system must not create redundant questions merely to satisfy a numeric quota.

The existing internal Final Exam target of 40 questions remains a separate project-level design target and does not impose per-chapter mission quotas.

## 10. Challenge types

The Mission System is challenge-type agnostic.

Supported current renderer types remain the authoritative implementation contract, including the question types already validated in World 1 QA.

Future creative/open-ended tasks require a separate rubric renderer and are not silently added to the generic contract.

## 11. Feedback contract

Training/Learn mission flow:

```text
Answer
 ↓
Correct / Incorrect
 ↓
Why
 ↓
Source-grounded explanation
 ↓
Optional targeted retry
```

Feedback must be pedagogical and should identify the relevant concept/skill when possible.

Exam Simulation remains separate: feedback is deferred until submission.

## 12. Mission completion rule

Current ordinary-learning direction:

**Pass threshold = 70%.**

Below threshold:

```text
<70%
 ↓
Mission not yet passed
 ↓
Weakness identification
 ↓
Training Room offer
 ↓
Targeted practice
 ↓
Retry / re-evaluation
 ↓
≥70%
 ↓
Mission completed
```

First-attempt failure is not a permanent academic punishment.

The exact scoring contract for multi-select and future rubric-based tasks must be finalized before broad implementation of those mechanics.

## 13. Training Room

When a meaningful weakness is detected, the mission may offer:

> 💡 Kamu mengalami kesulitan di Kompetensi X.  
> Mau masuk Training Room?

Training should target the weak skill/topic and should not simply replay the identical failed question as the only remediation strategy.

Training selection must use stored learning evidence when the recommendation system becomes available.

## 14. Progression and unlocks

Mission completion may update:

- mission state;
- game XP;
- world/mission unlocks;
- learning evidence;
- optional achievements/cosmetics.

Game progression and learning progression remain separate.

XP must not be interpreted as academic mastery.

## 15. Reward contract

Rewards are mission-data configuration, not hard-coded presentation logic.

Conceptual structure:

```json
{
  "xp": 100,
  "completion_reward_once": true,
  "achievements": [],
  "cosmetics": []
}
```

The controlled prototype must prevent duplicate completion rewards on repeated visits/retries.

## 16. Prerequisites and locked content

Prerequisites may include:

- previous mission completion;
- progression gate;
- subject availability;
- future Academic Planning selection;
- future mastery gate.

The future Academic Planning Office may expose mandatory subjects and two choice slots, with unselected subject areas remaining locked. This is a game planning mechanism, not official TKA registration.

Final TKA subject rules remain outside this specification until authoritative mapping is approved.

## 17. Mission example — World 1

A future Career Mission may use:

```text
Explore school/career area
        ↓
NPC gives mission context
        ↓
Learn: relevant concept
        ↓
Example / guided inspection
        ↓
Challenge 1
        ↓
Feedback
        ↓
Learn / inspect next concept
        ↓
Challenge 2..N
        ↓
Mission evaluation
        │
   ┌────┴────┐
   │         │
 ≥70%      <70%
   │         │
   ↓         ↓
Debrief   Training Room
   │         │
   ↓         ↓
XP/unlock  Retry
```

`N` is determined by chapter/context coverage, not a fixed number.

## 18. Content provenance and originality contract

The Mission System must consume approved content only.

Main-game production content priority:

```text
Kurikulum Merdeka learning sources
        ↓
Student Book / Teacher Guide
        ↓
Knowledge / competency extraction
        ↓
Original authored explanation
        ↓
Original challenge design
        ↓
QA + provenance + originality review
        ↓
Approved content pool
        ↓
Mission
```

Future TKA preparation remains a separate extension pipeline using the authoritative TKA assessment framework plus applicable learning-content sources, including the project's retained K13 material where appropriate.

The runtime must never treat raw textbook passages or copied textbook exercises as mission content by default.

## 19. Copyright-safe authoring rules

For production content, avoid:

- verbatim textbook questions;
- verbatim textbook passages used as game dialogue without rights clearance;
- trivial word substitution intended to disguise copying;
- copied answer choices/distractors;
- copied illustrations, tables, or figures without permission/license;
- unverified third-party assets.

Prefer:

- independently written explanations;
- new scenarios;
- new question wording;
- new answer options;
- new distractors;
- independently created diagrams/assets or properly licensed assets;
- traceable source attribution/provenance for the academic basis.

This is a conservative project production rule, not a legal opinion. Final release requires a separate rights/licensing review for all assets and content.

## 20. Content-to-mission assembly

The assembly pipeline is:

```text
Source / Knowledge Base
        ↓
Chapter coverage map
        ↓
Mission objective
        ↓
Teach nodes
        ↓
Challenge pool
        ↓
Coverage selection
        ↓
Mission manifest
        ↓
Renderer
        ↓
Feedback / progression
```

The Mission System should not generate academic content at runtime.

## 21. Analytics / learning evidence hooks

The design should retain enough evidence to support future weakness analysis:

- mission ID;
- challenge/question ID;
- skill/topic;
- attempt number;
- correctness;
- selected answer value(s);
- completion state;
- training recommendation/entry;
- mission completion result.

No personal account infrastructure is required for the current prototype.

## 22. Controlled prototype scope

The first Mission System prototype should prove only the architecture:

1. spatial entry into a mission;
2. authored NPC/context;
3. Learn / Teach node;
4. one or more data-driven challenges;
5. immediate feedback;
6. 70% completion evaluation;
7. below-threshold Training Room offer;
8. retry without permanent punishment;
9. mission completion reward exactly once;
10. progression/unlock transition;
11. deterministic state persistence for the prototype session.

It should **not** attempt to implement the entire RPG layer, all NPCs, all subjects, full TKA, or a full production content bank.

## 23. Acceptance gate for Mission System v1

Before broad gameplay expansion, verify:

### Content
- learning node has approved source/provenance;
- explanations are independently authored;
- challenge references approved content IDs;
- chapter coverage is documented;
- question count is justified by coverage, not quota.

### Runtime
- mission state transitions correctly;
- Learn → Challenge transition works;
- renderer receives canonical question data;
- randomization/answer-value evaluation remains intact;
- feedback appears correctly;
- 70% threshold works;
- retry does not corrupt progression;
- completion XP cannot duplicate;
- unlock transition works.

### QA
- browser regression passes;
- mobile interaction passes;
- wrong-answer path passes;
- retry/training path passes;
- completed-mission revisit passes;
- no question-ID-specific rendering branch introduced.

## 24. Next step

Build the **Controlled World 1 Mission System Prototype v1** using one small approved mission slice.

Do not expand the full World 1 mission catalogue until the prototype passes its dedicated QA gate.
