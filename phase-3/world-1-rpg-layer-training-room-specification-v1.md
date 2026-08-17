# World 1 — RPG Layer & Training Room Specification v1

**Status:** PROPOSAL / PRE-IMPLEMENTATION  
**Phase:** Phase 3 — Gameplay Expansion  
**Scope:** World 1 only

## 0. Basis

This specification is derived from the approved Master Control continuation, Phase 3 GDD v1, approved Mission System v1, and promoted Progression v1.

The project remains a Light RPG Educational Platform, not a quiz with RPG decoration.

## 1. Purpose

Define the next controlled gameplay layer after Promotion of World 1 Progression v1 without prematurely implementing a full RPG economy, universal level curve, or final visual presentation.

## 2. Core experience

The World 1 gameplay loop expands as:

Explore → encounter NPC/context → Learn / inspect → Mission → Challenge → Feedback → Progression → Review weakness → Training / Retry → Mastery Check when separately approved.

The educational purpose remains primary; RPG systems support context, motivation, navigation, and progression.

## 3. Training Room boundary

Training Room is a future progression/RPG feature, not part of Mission System v1.

It may be recommended when learning evidence indicates difficulty with a skill/topic. Initial UX concept:

> “Kamu mengalami kesulitan di Kompetensi X. Mau masuk Training Room?”

The first implementation gate must not invent a final mastery threshold. Recommendation logic may use existing evidence fields such as accuracy and repeated-error patterns, but exact thresholds require a separate approved decision if needed.

## 4. Retry vs Training Room

- Retry/Remedial remains the immediate response for a failed mission and is already promoted in Mission System v1.
- Training Room is a separate contextual learning space to be designed and gated later.
- Retry must not be relabeled as Training Room.
- Training Room must not multiply mission completion XP.

## 5. World 1 RPG layer scope for the next prototype

### In scope
- world/navigation context using the already approved map and character direction;
- NPC interaction hook;
- Learn/context dialogue hook before selected challenges;
- progression state display;
- mission availability based on deterministic progression state;
- learning weakness display/hook;
- explicit Training Room entry point as a controlled prototype concept, without final mastery rules;
- preservation of approved Mission and Progression contracts.

### Out of scope
- final art production;
- music/sound production;
- complex combat;
- inventory/economy;
- universal player levels;
- skill trees;
- monetization;
- online accounts/backend;
- real-time AI NPC conversations;
- final Training Room mastery algorithm;
- full World 2–4 expansion.

## 6. Character/camera integration boundary

Use the approved Character Design v2 and Camera/Character Gameplay Specification. Mobile movement remains contextual virtual analog input. No new camera or character visual contract is introduced by this specification.

## 7. Data contract

The RPG layer consumes existing mission/progression data. It must not duplicate question content inside presentation code and must not create question-ID-specific branches.

## 8. QA requirement

Before implementation is promoted, the controlled prototype must have:

1. deterministic mission availability;
2. correct progression-state consumption;
3. NPC/context interaction functioning;
4. Learn/context hook functioning without altering scoring;
5. Training Room hook not granting unauthorized XP;
6. retry remaining distinct from Training Room;
7. existing Mission System regression remaining PASS;
8. existing Progression v1 regression remaining PASS;
9. user-verified browser evidence where interaction is runtime-dependent.

## 9. Promotion boundary

Approval of this specification does not promote the RPG layer. It authorizes controlled prototype implementation only after user review.

## 10. Next action

User review/approval of this specification → Controlled World 1 RPG Layer Prototype → RPG Layer QA / Regression Gate → live browser evidence → promotion if passed.
