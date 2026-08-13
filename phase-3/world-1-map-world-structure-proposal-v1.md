# World 1 — Map / World Structure Proposal v1

**Status:** PROPOSAL — next design gate
**Phase:** Phase 3 — World 1 Map / World Structure
**World:** World 1 — Career Mission
**Prerequisite:** Visual Direction v1 approved

## Evidence

The approved visual direction establishes a 2D top-down / slightly angled adventure presentation, a contemporary Indonesian school environment, readable interaction targets, and the visual sequence Home/Hub → Road/School Environment → School → Bahasa Indonesia Area → Career Mission Space → Document/Application Interaction → Challenge.

The Phase 3 GDD establishes the educational adventure/light RPG core loop:

`Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check`

The existing World 1 expansion plan establishes six learning lanes A–F and requires content to remain provenance-backed and controlled. Approved A–F content already exists and has passed integrated regression; gameplay integration is currently implemented as a controlled M02 slice.

## Implementation boundary

This document designs the **world structure**, not final art assets. It does not replace the approved A–F content pools, Golden Dataset v1, renderer, or existing mission data.

## Proposed World 1 structure

```text
                    [HOME / HUB]
                         │
                 Player preparation
                         │
                         ▼
                 [ROAD / SCHOOL]
                         │
                navigation / discovery
                         │
                         ▼
                    [SCHOOL]
                 ┌───────┴────────┐
                 │                │
                 ▼                ▼
        [COMMON AREA]       [BAHASA AREA]
                                   │
                            mission entrance
                                   │
                                   ▼
                        [CAREER MISSION HUB]
                         /       |        \
                        /        |         \
                       ▼         ▼          ▼
                 [NOTICE]   [DOCUMENT]   [NPC/BRIEF]
                    │           │            │
                    └───────────┼────────────┘
                                ▼
                         [CHALLENGE SPACE]
                                │
                                ▼
                         [MISSION DEBRIEF]
                                │
                    ┌───────────┴───────────┐
                    ▼                       ▼
              [REWARD / XP]          [WEAK-SKILL REVIEW]
                    │                       │
                    └───────────┬───────────┘
                                ▼
                         [NEXT UNLOCK]
```

## Location roles

### 1. Home / Hub
Purpose: player orientation, starting point, preparation, progress summary, and return point.

The home should not become a decorative screen only. It can eventually communicate mission status, recommended training, and unlocked progress without replacing the dedicated learning UI.

### 2. Road / School Environment
Purpose: provide the first actual exploration layer and make movement meaningful.

Interaction should remain lightweight: navigation, signs, simple environmental inspection, and access to the school.

### 3. School
Purpose: central navigation hub for World 1.

The school is the main spatial container. It should eventually expose locations through physical movement rather than a list of quiz buttons.

### 4. Bahasa Indonesia Area
Purpose: subject-specific entry point.

This is where the player transitions from general exploration into the current learning mission context.

### 5. Career Mission Hub
Purpose: contextualize the Career Mission before the challenge renderer appears.

Possible interactables: mission board, document desk, NPC/mentor, computer, or application folder. These are proposals; exact interaction set belongs to the Mission System design stage.

### 6. Challenge Space
Purpose: host the existing data-driven question renderer without making the renderer responsible for world navigation.

The renderer remains a reusable challenge subsystem. The world layer supplies context and receives completion/progress events.

### 7. Mission Debrief / Reward
Purpose: close the mission, show feedback and XP, update progress, and expose the next learning action.

## Navigation principles

1. The player should understand where they are and where they can go.
2. Important learning interactions should be reachable by direct movement and clear affordances.
3. No critical interaction should depend on hover.
4. Keyboard and touch must both be viable.
5. Exploration should support learning context, not become an unrelated minigame.
6. The world should remain small enough for a browser-first build.
7. Do not build a large open world before the World 1 mission loop is validated.

## Relationship to approved content

Approved A–C and D–F remain separate additive/versioned pools. The world map does not merge or mutate them.

The current controlled M02 gameplay slice can be placed in the Career Mission Hub → Challenge Space path. Future mission slices may reuse the same physical areas while changing the mission context and approved content dataset.

## Learning progression placeholder

The map supports, but does not yet finalize, progression:

`Explore → Mission → Inspect → Challenge → Feedback → Reward → Unlock`

Weak-skill review and mastery checks can later return the player to an appropriate learning location without requiring a new world map.

## Open decisions for later design stages

- exact tile/grid dimensions;
- camera zoom and viewport behavior;
- collision boundaries;
- number and placement of buildings/rooms;
- protagonist spawn points;
- NPC locations;
- exact mission-board/document/mentor interactions;
- map art assets and palette;
- transition effects;
- progression/unlock rules.

These should be decided during Character, Mission System, Progression, and RPG Layer design rather than invented here.

## Evidence / Implementation / Interpretation

**Evidence:** Approved Visual Direction v1, Phase 3 GDD, World 1 expansion plan, and approved A–F integration establish the experience direction and content boundaries.

**Implementation:** This proposal defines a small navigable World 1 structure around the existing controlled mission slice; no final art or large map implementation is introduced.

**Interpretation:** World 1 should feel like a place the student moves through, with the question renderer functioning as a challenge subsystem inside the world rather than the world itself being a quiz screen.

## Gate

This is a proposal. Final map structure should be explicitly approved before implementation of the full navigable map.
