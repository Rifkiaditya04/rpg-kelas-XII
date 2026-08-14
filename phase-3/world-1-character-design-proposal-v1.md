# World 1 — Character Design Proposal v1

**Status:** PROPOSAL — pending explicit user approval
**Phase:** Phase 3 — Game Design / Character Design
**World:** World 1 — Career Mission
**Prerequisites:** Visual Direction v1 APPROVED; World 1 Map / World Structure v1 APPROVED
**Visual concept sheet:** `phase-3/visuals/world-1-character-design-v1.svg`

## 1. Evidence

The approved Visual Direction establishes a 2D top-down / slightly angled adventure presentation with clean stylized illustration, readable silhouettes, low-weight reusable assets, purposeful animation, and a contemporary Indonesian school environment.

The approved World 1 map establishes a student moving through Home / Hub → Road / School → School → Bahasa Indonesia Area → Career Mission Hub → Challenge Space → Mission Debrief.

The GDD establishes an educational adventure/light RPG rather than a combat-centric game. The player character therefore needs to communicate student identity, exploration, interaction, and learning progression rather than combat power.

The workflow policy also requires visual decisions to be proposed and approved before major asset production, and allows visual AI/tools to be selected by task after the visual brief is approved.

## 2. Character role

The protagonist is a **Grade 12 student** who is preparing for the transition from school into real-world academic/career situations.

The character is the player's embodied navigation and interaction layer. The character is not a combat hero and does not exist merely as decoration around the question renderer.

Primary functions:

- walk through the World 1 environment;
- enter and leave locations;
- inspect contextual objects;
- interact with mission/NPC/document affordances;
- receive mission feedback and progression cues;
- visually communicate the player's location and state.

## 3. Silhouette and camera requirements

The character must remain identifiable at the intended small-screen gameplay scale.

Required properties:

- clear head/body separation;
- readable hair/head silhouette;
- readable school outfit silhouette;
- compact backpack or school-bag cue;
- simple hands/arms suitable for interaction animation;
- no tiny decorative details required for recognition;
- consistent proportions across walking directions;
- strong readability on both light and moderately detailed environments.

The character is designed for the approved 2D top-down / 3-quarter presentation. Exact pixel dimensions, tile scale, and camera zoom remain map/implementation decisions.

## 4. Clothing direction

Initial concept:

- clean contemporary school uniform;
- simple light shirt/top;
- dark lower garment;
- school bag/backpack;
- practical shoes;
- restrained accessories.

This is a design direction, not a final school-uniform claim. The production art should avoid implying a specific real school identity unless the project later deliberately chooses one.

## 5. Customization / inclusivity

The first implementation should use one canonical protagonist for scope control.

The architecture should not hard-code the character so tightly that later customization becomes impossible.

Potential later customization slots:

- skin tone;
- hairstyle;
- hair color within realistic school-appropriate range;
- optional accessories;
- uniform variation.

Gender presentation and appearance options should be considered as an accessibility/inclusivity decision before a larger customization system is implemented.

## 6. Animation set

Minimum production animation target:

1. idle/breathing;
2. walk up;
3. walk down;
4. walk left/right;
5. interaction/inspection;
6. enter/exit transition;
7. mission completion / positive progress feedback.

A simple 4-frame walk cycle is the initial target for the prototype. More frames should only be added if playtesting shows a meaningful benefit.

Animation must remain purposeful and must not obscure academic content.

## 7. Interaction language

The character should communicate interaction through:

- proximity to an interactable;
- a clear icon/marker;
- a short contextual prompt;
- a simple interaction animation;
- immediate transition into the appropriate learning interaction.

Do not use hover-only interactions. Touch and keyboard must remain viable.

## 8. Visual concept reference

The repository contains a first concept sheet showing the proposed 3/4 protagonist, readable small-scale silhouettes, basic views, and animation target:

`phase-3/visuals/world-1-character-design-v1.svg`

This sheet is a **design visualization**, not final production art.

## 9. What is intentionally NOT locked yet

- final art style between vector/illustrated and pixel-art production;
- exact palette;
- final facial features;
- exact school uniform identity;
- sprite dimensions;
- final walk-cycle frame count;
- final animation timing;
- customization UI;
- portrait/dialogue art;
- final VFX.

These should be resolved through later visual/technical comparison rather than guessed now.

## 10. AI/tool routing proposal

When production artwork begins, use a visual-generation/editing tool for concept exploration and asset drafting, but do not treat generated output as approved project truth.

Suggested workflow:

`Approved brief → visual AI concept generation → human/partner review → consistency check → selected asset → repository → implementation QA`

For code integration, use a coding-capable AI/tool with the explicit stack requirement:

`HTML + CSS + JavaScript + JSON`

Python remains tooling-only if needed for sprite metadata, asset validation, packing, or QA; it is not a game runtime dependency.

## 11. Evidence / Implementation / Interpretation

**Evidence:** Visual Direction v1, approved World 1 map structure, GDD, and project operating rules establish the camera family, educational adventure role, mobile-first requirements, and staged visual approval process.

**Implementation:** v1 adds a character design proposal and a repository-hosted visual concept sheet. No final sprite sheet or runtime character controller is introduced.

**Interpretation:** A student protagonist with a strong small-scale silhouette, school context, backpack, simple interaction animation, and restrained customization is the most coherent first character direction for World 1. This remains a proposal until explicitly approved.

## 12. Approval gate

**Current gate: PENDING USER APPROVAL.**

Approval of this proposal authorizes the next design work for the Character → Mission System transition, but does not automatically authorize mass production of final character assets. Final asset production remains subject to implementation and visual QA.
