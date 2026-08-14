# World 1 — Camera + Character Visual QA v1

**Status:** QA PENDING — requires user browser playtest
**Phase:** Phase 3 — Camera + Character Gameplay Prototype
**Date:** 14 August 2026

## Evidence

Approved inputs:
- `phase-3/world-1-character-design-proposal-v2.md`
- `phase-3/world-1-camera-character-gameplay-spec-v1.md`
- `phase-3/visuals/karakter-fix.svg`
- `phase-3/visuals/desain-fix.svg`
- `phase-3/gdd-v1.md`

The approved camera family is elevated top-down / 3-quarter. The approved gameplay direction is four-direction movement, idle/walk/interaction states, stable world orientation, and exploration → interaction → mission → challenge → feedback → debrief → XP/progress → unlock.

## Implementation under test

`prototype/bahasa-indonesia/camera-character-prototype.html`

The prototype:
- uses the approved environment reference through `desain-fix.svg`;
- displays the approved character reference through `karakter-fix.svg` as the identity reference;
- uses a lightweight runtime character proxy only for movement/camera testing;
- follows the player with a responsive camera;
- supports WASD/arrow keys;
- supports touch D-pad;
- keeps world orientation stable;
- shows an interaction cue near the test interaction point;
- is responsive for desktop and mobile viewport sizes.

## Explicit boundary

The runtime proxy is **not** final character art. No final sprite sheet is claimed. No final map asset pack, collision map, mission system, progression system, audio, or visual polish is claimed complete.

## User browser QA checklist

### Camera
- [ ] Character remains readable while moving.
- [ ] Camera follow feels smooth rather than disorienting.
- [ ] Elevated perspective matches the approved environment reference.
- [ ] Room/floor depth remains understandable.
- [ ] Camera does not expose unintended empty space.
- [ ] Mobile view retains useful surrounding context.

### Character
- [ ] Proxy scale feels consistent with the environment.
- [ ] Movement direction is immediately understandable.
- [ ] Character position does not feel visually buried by the environment.
- [ ] Approved character reference still reads as the intended art family.

### Interaction
- [ ] Interaction cue is noticeable but not intrusive.
- [ ] Touch controls are comfortable on a phone-sized viewport.
- [ ] Keyboard controls are responsive on desktop.

### Visual quality
- [ ] No obvious clipping or overlap that makes movement confusing.
- [ ] No excessive UI that turns the scene back into a quiz page.
- [ ] The prototype communicates spatial exploration rather than a flat question screen.

## Gate rule

This gate remains `QA_PENDING` until the user performs the hosted browser playtest. Static/source verification does not equal visual QA PASS.

## Next step after PASS

Proceed to **Mission System Design**, including the previously recorded subject-selection, selection-gate, progression-gate, and future mastery-gate hooks. Do not implement full TKA subject rules until the Mission/Progression design decision is approved.
