# World 1 — Camera / Character Gameplay Specification v1

**Status:** APPROVED — user approved 14 August 2026
**Phase:** Phase 3 — Game Design / Camera & Character Gameplay
**Prerequisites:** Visual Direction v1 APPROVED; Map / World Structure v1 APPROVED; Character Design v2 APPROVED

## 1. Purpose

Translate the approved character and environment references into a precise gameplay presentation specification before runtime implementation. This document does not create final art or commit to a numeric camera value until a small playable visual test confirms readability.

## 2. Evidence

- User-approved character reference: `phase-3/visuals/karakter-fix.svg`.
- User-approved environment reference: `phase-3/visuals/desain-fix.svg`.
- Character Design v2 was explicitly approved by the user on 14 August 2026 for costume adaptation, camera direction, animation, and gameplay flow.
- The existing GDD establishes an educational adventure / light-RPG direction, browser-first delivery, mobile-first interaction, and the core loop Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check.

## 3. Camera direction

### 3.1 Camera family

Use an **elevated top-down / 3-quarter perspective**, visually close to the user's environment reference. The presentation should expose enough floor, walls, room depth, furniture, doors, and shadows to make locations feel spatial rather than like a flat quiz screen.

### 3.2 Initial test range

For the first implementation test, evaluate a camera elevation approximately in the **35°–45°** family. This is a test range, not a final locked number.

Test criteria:

- character head/body remain readable;
- walls do not hide the player excessively;
- doors and interactable objects remain identifiable;
- movement direction remains visually obvious;
- room depth matches the reference impression;
- mobile screen still provides useful surrounding context.

### 3.3 Camera behavior

- Camera follows the player smoothly within the current room/zone.
- No camera rotation during normal movement.
- World orientation remains stable so players build spatial memory.
- Camera should not zoom dynamically during ordinary walking.
- Transitions between rooms/zones may use a short pan/fade/door transition rather than abrupt coordinate jumps.
- Camera bounds must respect the playable map and avoid showing empty/unintended areas.

### 3.4 Zoom / responsiveness

Zoom is responsive rather than fixed to one desktop pixel size. The target is to keep the player approximately 1/8–1/12 of the useful viewport height in normal exploration, subject to visual testing and asset scale.

Desktop may show more context; mobile should preserve character and interaction readability rather than simply shrinking the whole scene.

## 4. Character movement

### 4.1 Direction model

Primary movement: up, down, left, right.

Diagonal movement may be enabled when the input system supports it, but diagonal speed must be normalized so diagonal movement is not faster than cardinal movement.

### 4.2 Input

Desktop:
- WASD;
- arrow keys.

Mobile:
- virtual directional control / touch movement;
- touch targets must be comfortable and not dependent on hover.

### 4.3 Collision

The player collides with walls, closed doors, furniture, map boundaries, and other blocking objects defined by the map data. Decorative objects should not accidentally create invisible blockers.

## 5. Character presentation

### 5.1 Gameplay orientations

The production character must have readable gameplay views for:

- front/down;
- back/up;
- left;
- right.

The exact sprite construction is a production task after this specification is approved.

### 5.2 Animation states

Minimum World 1 set:

- idle — four directions;
- walk — four directions;
- interaction/inspection — at least one readable contextual pose;
- mission notification/attention cue — lightweight overlay or animation rather than a permanent UI banner.

### 5.3 Identity

Male and female protagonists retain the approved illustrated character language and approved Grade 12 costume adaptation. The gameplay sprite is a derived production asset, not a redesign of the approved reference.

## 6. Interaction model

Player approaches an NPC/object → interaction cue appears → player activates interaction → contextual panel/dialogue opens.

Recommended interaction range: one logical interaction cell/short radius, tuned against the map scale.

The interaction cue must distinguish:

- NPC dialogue;
- inspectable object/document;
- mission trigger;
- locked destination.

## 7. Gameplay flow

The approved flow is:

**Explore → Interact → Mission Brief → Challenge → Feedback → Debrief → XP/Progress → Unlock**

Question rendering remains the existing data-driven renderer. The world layer is responsible for spatial context and mission transitions; it must not duplicate question content or answer keys.

## 8. Locked-room / subject-gating concept — design hook, not yet approved

The user proposed that future subjects/rooms may be locked when a subject is not selected or when a prerequisite stage has not been completed. This is a valid design direction to evaluate during Mission System and Progression System design.

Important distinction:

- **Selection gate:** room unavailable because the subject/course is not part of the player's chosen study path.
- **Progression gate:** room unavailable until required learning/missions are completed.
- **Mastery gate:** optional future gate based on demonstrated readiness, not merely time spent.

This specification does not yet define which subjects are mandatory/optional, nor does it make any claim about official TKA subject composition. Those decisions require a separate curriculum/TKA evidence pass before being encoded into the game.

## 9. Evidence / Implementation / Interpretation

**Evidence:** The character and environment references were directly inspected and approved by the user. Existing GDD/workflow artifacts define browser-first, mobile-first, educational-adventure, and data-driven constraints.

**Implementation:** No runtime camera or sprite system is changed by this document. It defines the testable contract for the next implementation step.

**Interpretation:** A stable elevated camera with four-direction character presentation is the best bridge between the user's chosen visual references and the existing light-RPG exploration model. Exact numeric camera settings should be validated visually rather than guessed from a single reference image.

## 10. Approval record

**APPROVED by user — 14 August 2026.**

Approval covers:
- approved male/female character costume direction;
- approved elevated top-down / 3-quarter camera direction;
- approved idle/walk/interaction animation direction;
- approved exploration → interaction → mission → challenge → feedback → debrief → XP/progress → unlock flow.

Approval authorizes a **small Camera + Character Gameplay visual prototype**, not full-map production. The numeric camera configuration remains a test parameter until the visual prototype passes readability QA.
