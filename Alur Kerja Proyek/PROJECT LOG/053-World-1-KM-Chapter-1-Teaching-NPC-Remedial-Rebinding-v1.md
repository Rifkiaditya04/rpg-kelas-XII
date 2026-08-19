# PROJECT LOG 053 — World 1 KM Chapter 1 Teaching / NPC / Remedial Rebinding v1

**Date:** 2026-08-19
**Status:** IMPLEMENTED — RUNTIME QA PENDING

## Protocol re-sync

Before implementation, re-synced and checked the active Master Control pair, REQUIRED WORK SESSION PROTOCOL, the World 1 Training Room specification, the KM Original Teaching / Gameplay Content Specification v1, the Detailed Competency → Challenge Design v1, the canonical KM Batch 01, the Batch 02 E1-E3 draft/QA records, and the retained Mission/Progression/Training Room prototypes.

## Evidence

1. Master Control v1.1 states World 1 RPG Layer v1 and Training Room v1 are PROMOTED / APPROVED and explicitly retains the architecture.
2. KM Teaching / Gameplay Specification v1 states: existing RPG, mission, progression, evidence, and Training Room architecture is retained; no rewrite is authorized.
3. KM Detailed Competency → Challenge Design v1 requires the chain `Competency → Observable Evidence → Scenario → Challenge → Feedback → Learning Evidence → Training target` and states Training Room practice must use new examples rather than replaying exact mission challenges.
4. Canonical KM Batch 01 contains six approved IDs KM01-A1, KM01-B1, KM01-B2, KM01-C1, KM01-D1, KM01-D2 with KM Standard Chapter 1 provenance and reward contract.
5. Existing legacy mission/RPG prototypes still contained legacy career-application teaching and training content. Their architecture was not deleted.

## Implementation

### 1. KM teaching/training binding manifest
Created:
`phase-3/world-1-km-chapter-1-teaching-training-content-v1.json`

Commit:
`8c541f89dba156fb9fb6d3888904ec7935193128`

The manifest binds:
- A-B → evidence/inference training;
- C → contextual interpretation training;
- D → official communication inspection training;
- canonical Batch 01 IDs to their competency clusters;
- original NPC teaching copy;
- original guided examples;
- original training practice items.

No textbook wording is copied. No Golden Dataset content is modified.

### 2. KM integrated World 1 prototype
Created:
`prototype/bahasa-indonesia/world-1-km-chapter-1-integration-v1.html`

Initial commit:
`ee0a9c00e77c92d9bbba8ac8634685050dd177ea`

Then corrected reward normalization / retry handling:
`44141ffddd6a74a1018ee33dab7dd0e4a62fb04a`

The prototype retains the existing architecture pattern:
`Explore → NPC / Context → Learn → Challenge → Learning Evidence → Training Hook → Training Practice`

It uses the existing data-driven renderer and canonical Batch 01 dataset rather than duplicating question items into presentation code.

## Important boundary / known renderer behavior

The current generic renderer applies `mission_completion_xp` when it finishes a dataset regardless of the parent mission threshold. Therefore the integration shell normalizes the parent progression state on a below-70% result by removing the renderer's 100 XP completion component from the parent state; this does not alter the generic renderer itself.

This is an integration compatibility measure, not a claim that the renderer reward gate is solved globally. The iframe's raw renderer result must be treated as renderer evidence; parent progression state is the controlled mission-threshold state.

## What was NOT changed

- Existing approved Mission System prototype was not deleted or rewritten.
- Existing approved Progression prototype was not deleted or rewritten.
- Existing Training Room prototype was not deleted or rewritten.
- Golden Dataset v1 was not modified.
- Batch 02 E1-E3 remains DRAFT_NOT_CANONICAL and is not bound as canonical mission content in this integration step.
- No renderer feature was added.

## QA status

Static/source implementation: READY.
Browser integration: **QA_PENDING**.

Required live evidence:
1. NPC appears before challenge.
2. Learn / Pembekalan appears and does not award XP.
3. KM Batch 01 loads in the challenge.
4. A passing run completes the mission with the established reward contract (6/6 → 700 XP in the parent progression state).
5. An intentional below-70% run activates Training Hook.
6. Training Room provides original KM explanation, guided example, and practice.
7. Training practice does not increase XP or Mission Complete.
8. Learning evidence persists through the training step.
9. Returning to mission does not erase learning evidence.

No PROMOTION is claimed until the required browser evidence exists.

## Next gate

User live/browser regression of the KM integration prototype. If runtime passes, document the gate and then determine the rebinding scope for the next canonical KM batch. E1-E3 promotion remains a separate content gate.
