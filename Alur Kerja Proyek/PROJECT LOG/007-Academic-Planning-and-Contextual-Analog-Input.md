# 007 — Academic Planning Structure + Contextual Analog Input

**Date:** 14 August 2026  
**Phase:** Phase 3 — Game Design / Camera & Character Gameplay  
**Status:** Implemented for browser QA; not final visual polish

## Re-sync / Evidence

The current Master Control and active Phase 3 camera/character specification were re-read before implementation. The project already records:

- Academic Planning Office as a future subject-selection/planning hub.
- TKA as an assessment, not an additional school subject.
- Future TKA foundation as a design-only extension layer.
- Character Design v2 and Camera / Character Gameplay Specification v1 as user-approved.
- Mobile-first, touch-friendly, responsive interaction as a project constraint.

## Decision 1 — Academic Planning Office

The approved structural interpretation is:

```text
                         🏫 SEKOLAH
                              │
             ┌────────────────┴────────────────┐
             │                                 │
       📚 CLASSROOMS                    🗂️ ACADEMIC OFFICE
                                               │
                                               ▼
                                      📋 STUDY PLANNING
                                               │
                              ┌────────────────┴────────────────┐
                              │                                 │
                         🔵 MANDATORY                         🟡 CHOICE
                              │                                 │
                    ┌─────────┼─────────┐             ┌─────────┴─────────┐
                    │         │         │             │                   │
                B. Indo    Math      B. Inggris    Choice Slot 1      Choice Slot 2
```

Interpretation: Academic Planning Office is the world/location. Study Planning is the planning interface inside it. TKA Preparation is the future academic-preparation layer under Study Planning, not the name of the physical room itself.

This does not claim to reproduce official TKA registration.

## Decision 2 — Mobile movement control

The user approved a **contextual virtual analog stick** instead of a permanently visible D-pad or permanently visible joystick.

Behavior:

1. Analog control is hidden while the player is idle.
2. Touch-down in the playable world creates the analog control at the touch origin.
3. Drag direction controls continuous movement.
4. Diagonal movement is supported.
5. Direction can change while the character is already moving; the player does not need to stop before turning.
6. Releasing the touch stops movement and hides the analog control.
7. UI controls remain separate and take precedence over movement input.
8. Desktop retains WASD / arrow-key movement.

Purpose: preserve a clean scene while avoiding the rigid feel of a four-button directional pad.

## Implementation

Updated:

- `phase-3/world-1-camera-character-gameplay-spec-v1.md`
- `prototype/bahasa-indonesia/camera-character-prototype.html`

The prototype remains a QA-only presentation test. It does not introduce final sprite production, final map collision, mission logic, progression logic, audio, or final UI polish.

## Verification state

Source-level verification after the implementation update:

- contextual analog markup present;
- analog hidden by default;
- pointer/touch movement handlers present;
- analog direction dispatched into normalized movement;
- diagonal movement is supported;
- release/cancel clears analog direction and hides control;
- desktop keyboard input remains available;
- approved character/environment references remain the runtime visual references.

Browser/device visual QA remains **PENDING USER PLAYTEST**. The contextual analog is not considered final until the user confirms its feel, size, position behavior, visibility, and steering responsiveness on an actual touch device.

## Next gate

After the user browser/device playtest passes camera + character visual QA:

**Mission System Design → Progression System Design → RPG Layer Design.**
