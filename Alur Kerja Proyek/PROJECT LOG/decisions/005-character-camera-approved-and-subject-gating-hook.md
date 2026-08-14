# Decision 005 — Character/Camera Approval + Subject-Gating Design Hook

**Date:** 14 August 2026
**Status:** APPROVED for character/camera direction; subject gating remains a design hook

## Evidence

- User explicitly confirmed the male/female costume direction.
- User explicitly confirmed the camera angle direction.
- User explicitly confirmed the animation and gameplay flow direction.
- User stated no further changes are required for character/design at this gate.
- Official TKA sources independently verify that SMA/MA/SMK TKA includes Bahasa Indonesia, Matematika, Bahasa Inggris, and two selected choice subjects. The official FAQ states students select two choices during TKA registration.

## Implementation

- `phase-3/world-1-camera-character-gameplay-spec-v1.md` promoted from PROPOSAL to APPROVED after user confirmation.
- `phase-3/tka-subject-selection-evidence-v1.md` created as the source-verified design input for future subject selection mechanics.
- Master Control must record the approved camera specification and the locked-room concept as a design hook, not yet as an encoded official TKA rule.

## Interpretation

The user's proposed school map can use locked subject rooms in two ways:

- selection gate: the room is not part of the player's selected study path;
- progression gate: the room/mission remains locked until required preceding learning is completed.

The recommended design is to prevent skipping required learning stages while avoiding arbitrary or permanent punishment. Selected subjects should remain accessible through their progression path, and already unlocked practice/review should remain available.

TKA terminology must remain accurate: TKA is an assessment, not an additional curriculum subject.

## Next

Proceed to the small Camera + Character visual gameplay prototype and visual QA. Then design the Mission System with subject selection and gating treated as explicit inputs. Full TKA subject-room architecture requires a separate design decision after the evidence pass.
