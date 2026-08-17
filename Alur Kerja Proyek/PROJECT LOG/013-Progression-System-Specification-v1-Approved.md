# 013 — Progression System Specification v1 Approved

**Phase:** Phase 3 — Gameplay / Progression  
**Status:** APPROVED  
**Decision:** User approved the Progression System Specification v1 in full.

## Evidence

The approved specification defines separate Game Progression and Learning Progression layers. Game progression includes XP, mission completion, world unlock eligibility, achievements, and optional cosmetic/non-essential rewards. Learning progression records skill/topic evidence, accuracy, cognitive level, difficulty performance, and repeated-error patterns.

The specification explicitly preserves the boundary that XP/game progression is not academic mastery. It also preserves anti-farming safeguards, deterministic unlocks, data-driven progression, and the existing Mission System v1 contract.

## Approved scope

The following are approved as the design baseline for controlled World 1 progression implementation:

- data-driven progression;
- separate game and learning progression;
- explicit mission/challenge reward configuration;
- completion reward once per mission completion event;
- retry/remedial must not multiply completion XP;
- inspectable progression state;
- deterministic and versioned unlock eligibility;
- learning evidence by skill/topic;
- mastery distinct from mission completion;
- future Training Room hook based on weakness evidence, but not implemented in this gate;
- browser/mobile-first progression UI constraints;
- no question-ID-specific progression branches.

## Explicitly not locked

These remain separate design decisions and must not be invented during implementation:

- universal XP curve;
- exact player-level thresholds;
- final mastery thresholds;
- Training Room implementation details;
- RPG economy/stat system.

## Cross-validation

The approval is consistent with the current Master Control, the approved Mission System v1 promotion, and the Phase 3 GDD separation of Game Progression and Learning Progression.

## Implementation gate

The next step is **Controlled World 1 Progression Prototype**. It must preserve the approved content and Mission System contracts, avoid changing Golden Dataset v1, and expose enough state for QA to verify XP integrity, completion, unlock behavior, retry handling, and learning-state separation.

Promotion remains blocked until the controlled prototype passes its own QA/regression gate and user-verified browser evidence is recorded.
