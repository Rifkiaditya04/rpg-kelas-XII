# World 1 — Visual Direction Proposal v1

**Status:** PROPOSAL — awaiting explicit approval
**Phase:** Phase 3 — Game Design / Visual Direction
**World:** World 1 — Career Mission
**Scope:** Visual language and presentation direction only; no final asset implementation yet.

## Evidence

The current Master Control and Phase 3 GDD establish:

- educational adventure / light RPG;
- browser / HTML5;
- HP + laptop;
- professional UX;
- mobile-first, touch-friendly, readable, responsive;
- core loop: Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check;
- World 1 is Career Mission;
- visual final, map, progression, character, mission system, and RPG layer must be discussed in GDD before large implementation.

The current question renderer is a QA/data-driven challenge interface. Its plain white/text presentation is not the final visual design.

## Implementation status

No final visual assets or large visual implementation are introduced by this document. This is a design proposal so that a visual decision can be reviewed and explicitly approved before implementation.

## Interpretation / proposal

### 1. Recommended visual direction

**2D top-down / slightly angled adventure presentation with clean stylized illustration**, designed for low asset weight and readable educational interaction.

The target feel is:

- warm and adventurous rather than childish;
- contemporary Indonesian school environment;
- clear silhouettes and readable interactable objects;
- moderate detail, avoiding visual clutter;
- expressive but restrained animation;
- consistent across browser and eventual Android packaging.

This proposal deliberately does **not** lock a specific art production method such as pixel art, anime, vector, or painterly rendering. That should be selected only after comparing production cost, readability, asset scalability, and AI/tool export quality.

### 2. Player view

Preferred starting direction: **top-down / 3-quarter 2D view**.

Reasoning:

- supports the already-discussed idea of moving a character between locations;
- works naturally for a home → school → room/world structure;
- makes interaction targets visible;
- can work with keyboard and touch controls;
- avoids the production cost and performance risk of complex 3D;
- fits the browser-first/static-build constraint.

### 3. World 1 visual fantasy

World 1 should visually communicate a student's transition into a practical career/application scenario.

Suggested visual sequence:

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

This is consistent with the project's existing educational adventure direction, but the exact map is still a later design step.

### 4. Environment language

Initial visual vocabulary:

- Indonesian residential/school cues;
- classroom and office/document elements;
- readable signs and mission markers;
- doors/portals used as navigation affordances;
- desks, noticeboards, documents, folders, computers, and stationery as contextual objects;
- restrained UI overlays rather than permanent full-screen HUD clutter.

### 5. Character direction

Proposal only:

- one student protagonist;
- neutral/customizable appearance should be considered for inclusivity;
- readable silhouette at small screen sizes;
- simple walk cycle and a small set of contextual interaction animations;
- no combat-centric character design.

Character design is intentionally not finalized here; it is the next dedicated design step after this visual direction is approved.

### 6. Animation direction

Keep animation purposeful:

- walking;
- idle/breathing;
- interaction/inspection;
- entering/exiting locations;
- mission completion;
- XP/progress feedback;
- simple environmental motion.

Avoid decorative animation that materially increases asset weight without improving learning or orientation.

### 7. UI direction

The final UI should remain visually richer than the current QA renderer while preserving its clarity.

Required principles:

- large readable question text;
- obvious selected/disabled/correct/incorrect states;
- touch targets sized for mobile;
- progress and mission state always understandable;
- no information conveyed by color alone;
- feedback remains source/explanation oriented;
- visual effects must never obscure academic content.

### 8. Color and typography

**Not locked yet.**

A palette should be selected after a small visual comparison, with accessibility and contrast as constraints. Typography should prioritize Indonesian readability on phone screens.

### 9. Audio

Music and sound effects are part of the future visual/presentation layer but are **not selected in this proposal**. They should be designed after the visual language and interaction vocabulary are approved.

### 10. Asset strategy

Target: low-weight, reusable 2D assets.

Prefer:

- modular tiles/backgrounds;
- reusable props;
- reusable character animation states;
- compressed web-friendly assets;
- deterministic asset naming and repository storage.

Avoid large assets that make the browser build unnecessarily heavy.

## Alternatives considered

### A. Pixel-art top-down

Pros: small assets, strong RPG identity, relatively simple animation.

Cons: can reduce text/context readability and may impose a highly specific aesthetic.

### B. Clean vector/illustrated top-down

Pros: scalable, readable, modern, good for educational UI.

Cons: may feel less like a conventional RPG unless animation and environment design are strong.

### C. 3D / complex isometric

Pros: visually impressive and spatially rich.

Cons: conflicts with the project's simplicity, portability, low-asset-weight and delivery priorities. Not recommended.

### Recommendation

Proceed with **2D top-down / 3-quarter stylized adventure** as the leading direction, but keep the exact rendering style (pixel/vector/illustrated) as an explicit decision after a visual comparison.

## Approval gate

This document is **not a final visual decision**.

Before final implementation:

1. review the recommendation against Master Control and GDD;
2. compare a small number of visual style samples;
3. explicitly select the art style;
4. record the decision in Project Log;
5. update Master Control/GDD;
6. only then create final visual assets.

## Next step if approved

1. lock art-style family;
2. design World 1 map structure;
3. design protagonist and interaction vocabulary;
4. define mission/progression presentation;
5. build a small visual prototype around the existing approved A–F content.
