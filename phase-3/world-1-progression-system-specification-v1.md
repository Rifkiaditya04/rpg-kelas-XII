# World 1 — Progression System Specification v1

**Phase:** Phase 3 — Gameplay / Progression
**Status:** DRAFT — awaiting user review/approval
**Scope:** World 1 controlled gameplay; no full RPG implementation yet

## 1. Purpose

Define the progression contract that connects approved Mission System v1 results to game progression and learning progression without conflating the two.

This specification is a design artifact. It does not yet implement the full progression system, Training Room, or final RPG layer.

## 2. Evidence baseline

The approved GDD defines two separate progression layers:

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

The GDD explicitly states that game progression must never substitute for academic mastery.

Mission System v1 is already promoted. Its below-70% behavior is Retry / Remedial; the dedicated Training Room is deferred to the later Progression / RPG Layer gate.

## 3. Design principles

1. Progression must be data-driven.
2. XP is a game-progression signal, not proof of academic mastery.
3. Learning evidence must be stored per skill/topic, not only as total XP.
4. Replaying a challenge must not create uncontrolled XP farming.
5. Unlocks must be deterministic and inspectable.
6. Wrong answers remain learning events and do not erase meaningful progress.
7. No arbitrary mastery claims may be encoded before thresholds are approved.
8. Existing approved Mission System and Golden Dataset contracts remain unchanged.
9. No question-ID-specific progression code branches.

## 4. Progression model

```text
Mission
  ↓
Challenge result
  ↓
┌───────────────────────┬─────────────────────────┐
│ Game evidence         │ Learning evidence       │
│                       │                         │
│ XP                    │ skill/topic             │
│ mission completion    │ accuracy                │
│ unlock eligibility    │ cognitive level         │
│ achievement           │ difficulty performance  │
│                       │ repeated-error pattern  │
└───────────────────────┴─────────────────────────┘
             ↓
       Progression State
             ↓
     Next eligible content
```

## 5. XP contract — proposal, not yet locked

The current project has verified XP behavior in existing mission/content gates, but this specification does not invent a new universal XP formula yet.

For v1 progression implementation, XP should be awarded through an explicit mission/challenge reward configuration rather than inferred from UI text or question count.

Required safeguards:

- completion reward is awarded once per mission completion event;
- retry/remedial cannot silently multiply the same completion reward;
- XP must be inspectable in the progression state;
- existing approved mission XP values remain unchanged unless a separate approved decision changes them.

A universal level curve and exact XP thresholds remain **UNVERIFIED / pending design approval**.

## 6. Mission progression

A mission can produce a progression event when its completion gate is satisfied.

```text
Mission started
    ↓
Challenges
    ↓
Mission evaluation
    ↓
Completion threshold met?
    ├── NO → Retry / Remedial
    └── YES
          ↓
     Mission Complete
          ↓
     Award configured XP
          ↓
     Mark mission complete
          ↓
     Evaluate next unlock
```

The current Mission System v1 completion threshold remains the approved 70% gate.

## 7. World progression

World unlocking must be explicit and versioned.

Initial proposal for the World 1 slice:

- World 1 is available according to the existing World 1 entry flow.
- Completion of required World 1 mission content can produce eligibility for subsequent content.
- The system must not assume that completing one arbitrary challenge unlocks an entire world.
- Exact cross-world unlock thresholds require a separate approval before implementation.

## 8. Learning progression

Every scored challenge should contribute evidence to a learner profile using its existing content metadata.

Minimum conceptual record:

```text
skill/topic
attempts
correct
accuracy
cognitive_level
 difficulty
recent_error_pattern
last_attempt
```

This is a conceptual contract; field names and persistence format require implementation design before coding.

## 9. Mastery

Mastery is distinct from mission completion.

```text
Mission completion
      ≠
Academic mastery
```

A learner may complete a mission while still having weak evidence in one skill/topic.

The future mastery system should evaluate accumulated evidence rather than a single answer or XP total.

Exact mastery thresholds are **NOT YET LOCKED**.

The previously accepted educational direction of a 70% mission gate must not automatically be treated as a universal mastery threshold.

## 10. Retry / Remedial

Mission System v1 uses:

`<70% → Retry / Remedial → Coba Lagi`

This remains part of Mission System v1.

It does not constitute the future Training Room.

## 11. Training Room hook

Future progression may expose a targeted remediation route when stored learning evidence identifies a weak competency.

Conceptual flow:

```text
Repeated / significant weakness
        ↓
Weak skill identified
        ↓
Training recommendation
        ↓
Training Room
        ↓
Targeted learning/practice
        ↓
Mastery check
```

Training Room implementation is deferred and requires its own specification and QA gate.

## 12. Achievement / cosmetic progression

The GDD permits achievements and cosmetic/non-essential rewards.

For the current World 1 progression specification, these remain optional hooks only. No cosmetic economy, inventory, or achievement catalogue is locked here.

## 13. Anti-farming / integrity rules

The progression system must prevent:

- unlimited XP from repeated retries of the same completion event;
- XP being awarded merely for opening a question;
- XP being awarded twice because the browser re-renders a result screen;
- progression being inferred from displayed score text;
- a learner's XP being treated as mastery evidence.

## 14. Data boundary

Content remains outside progression presentation code.

```text
Approved content JSON
        ↓
Generic renderer
        ↓
Challenge result
        ↓
Mission result
        ↓
Progression state
```

The progression layer consumes result contracts; it must not duplicate question content.

## 15. Mobile / browser considerations

The progression UI must remain compatible with the approved browser-first/mobile-first direction:

- readable progress state;
- touch-friendly controls;
- no hover-only progression information;
- responsive layout;
- no requirement for a backend at this prototype stage.

## 16. Out of scope for this specification

- full Training Room implementation;
- full RPG stat system;
- combat system;
- inventory/economy;
- multiplayer/accounts;
- final visual presentation;
- universal XP level curve;
- final mastery thresholds;
- official examination scoring claims.

## 17. Approval gates

Before implementation:

1. User reviews this specification.
2. Exact progression decisions are marked approved or left explicitly pending.
3. A controlled World 1 progression prototype is implemented.
4. QA/regression verifies XP integrity, mission completion, unlock behavior, retry behavior, and learning-state separation.
5. Browser/live evidence is required before promotion.

## 18. Current status

**SPECIFICATION DRAFT — USER REVIEW REQUIRED.**

No universal XP curve, level threshold, or mastery threshold is considered locked by this document.
