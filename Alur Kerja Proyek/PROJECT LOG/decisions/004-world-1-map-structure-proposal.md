# Decision 004 — World 1 Map / World Structure Proposal

**Date:** 2026-08-13
**Status:** PROPOSAL
**Phase:** Phase 3 — Map / World Structure

## Trigger

Visual Direction v1 was explicitly approved by the user. Per the approved visual-direction artifact, the next design stage is World 1 Map / World Structure.

## Evidence

- Approved visual family: 2D top-down / slightly angled stylized adventure.
- Phase 3 GDD core loop: Explore → Mission → Learn/Inspect → Challenge → Feedback → XP/Progress → Unlock → Review Weak Skill → Mastery Check.
- World 1 is Career Mission.
- Approved A–F content and integrated regression are already complete; the map must consume these existing systems rather than recreate them.

## Implementation

Created `phase-3/world-1-map-world-structure-proposal-v1.md`.

The proposal defines a small navigable structure:

Home/Hub → Road/School → School → Bahasa Indonesia Area → Career Mission Hub → Challenge Space → Mission Debrief → Reward/Review → Next Unlock.

It deliberately leaves exact dimensions, collision, NPC placement, art assets, palette, and progression rules for their dedicated later design stages.

## Interpretation

The world should be a place the student moves through. The question renderer is a reusable challenge subsystem inside that world, not the world itself.

## Next gate

User review/approval of the map/world structure proposal. If approved, proceed to Character Design, then Mission System, Progression System, and RPG Layer in sequence.
