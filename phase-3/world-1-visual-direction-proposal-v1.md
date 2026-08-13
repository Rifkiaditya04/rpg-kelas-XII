# World 1 — Visual Direction Proposal v1

**Status:** APPROVED — user approved visual direction on 2026-08-13
**Phase:** Phase 3 — Game Design / Visual Direction
**World:** World 1 — Career Mission
**Scope:** Visual language and presentation direction; final asset production follows later design gates.

## Approved direction

**2D top-down / slightly angled adventure presentation with clean stylized illustration**, designed for low asset weight and readable educational interaction.

Target feel:
- warm and adventurous rather than childish;
- contemporary Indonesian school environment;
- clear silhouettes and readable interactable objects;
- moderate detail without visual clutter;
- expressive but restrained animation;
- consistent across browser and eventual Android packaging.

## Player view

Preferred view: **top-down / 3-quarter 2D**.

This supports character movement between locations, home → school → room/world structure, visible interaction targets, keyboard/touch input, browser-first delivery, and low production/performance cost compared with complex 3D.

## World 1 visual fantasy

The visual progression should communicate a student's transition into a practical career/application scenario:

```text
HOME / HUB
   ↓
ROAD / SCHOOL ENVIRONMENT
   ↓
SCHOOL
   ↓
BAHASA INDONESIA AREA
   ↓
CAREER MISSION SPACE
   ↓
DOCUMENT / APPLICATION INTERACTION
   ↓
CHALLENGE
```

The exact map is the next dedicated design step.

## Environment language

Initial vocabulary:
- Indonesian residential and school cues;
- classroom and office/document elements;
- readable signs and mission markers;
- doors/portals as navigation affordances;
- desks, noticeboards, documents, folders, computers, and stationery as contextual objects;
- restrained UI overlays rather than permanent full-screen HUD clutter.

## Character direction

Character design is a separate next-step artifact. The approved visual direction supports:
- one student protagonist;
- neutral/customizable appearance to be considered for inclusivity;
- readable silhouette at small screen sizes;
- simple walk cycle and contextual interaction animations;
- no combat-centric character design.

## Animation direction

Purposeful animation only:
- walking;
- idle/breathing;
- interaction/inspection;
- entering/exiting locations;
- mission completion;
- XP/progress feedback;
- simple environmental motion.

## UI direction

Final UI should be visually richer than the current QA renderer while preserving its clarity:
- large readable question text;
- obvious selected/disabled/correct/incorrect states;
- mobile-sized touch targets;
- understandable mission/progress state;
- no information conveyed by color alone;
- feedback remains source/explanation oriented;
- effects never obscure academic content.

## Color, typography, audio, and exact art-production method

These are **not yet locked**. The approved decision is the visual family and camera/presentation direction. A small comparison of pixel-art, vector/illustrated, or related production styles may still be performed before final asset production, provided it does not overturn the approved 2D adventure direction without a documented decision.

Audio is a later presentation-layer decision.

## Asset strategy

Target low-weight reusable 2D assets:
- modular tiles/backgrounds;
- reusable props;
- reusable character animation states;
- compressed web-friendly assets;
- deterministic asset naming and repository storage.

## Alternatives considered

### Pixel-art top-down
Pros: small assets, strong RPG identity, relatively simple animation.
Cons: may reduce text/context readability and impose a specific aesthetic.

### Clean vector/illustrated top-down
Pros: scalable, readable, modern, suitable for educational UI.
Cons: needs strong animation/environment design to feel like an RPG.

### 3D / complex isometric
Not recommended because it conflicts with simplicity, portability, low-asset-weight, and delivery priorities.

## Approval record

User explicitly approved this visual direction on 2026-08-13.

The approval means the project may proceed to the next design stage: **World 1 Map / World Structure**. It does not authorize unrestricted final-asset production or silently change the approved project scope.

## Evidence / Implementation / Interpretation

**Evidence:** Master Control and Phase 3 GDD establish educational adventure/light RPG, browser-first delivery, mobile-first UX, and the Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check loop.

**Implementation:** This document records the approved visual family; no final asset set is introduced here.

**Interpretation:** The 2D top-down / 3-quarter stylized adventure direction is the chosen presentation foundation for subsequent World 1 map, character, mission, progression, and RPG-layer design.
