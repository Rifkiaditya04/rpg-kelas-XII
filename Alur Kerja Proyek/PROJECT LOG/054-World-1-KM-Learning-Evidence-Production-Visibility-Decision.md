# PROJECT LOG 054 — World 1 KM Learning Evidence Production Visibility Decision

**Date:** 2026-08-20
**Status:** DECISION RECORDED — NO PRODUCTION UI CHANGE YET

## Protocol re-sync

Before this decision, re-synced Master Control and reviewed the relevant World 1 Mission, Progression, Training Room, KM learning-loop, and current KM integration artifacts. The project protocol requires evidence/implementation/interpretation separation and documentation of material decisions.

## User review

The user live-playtested the controlled World 1 KM Chapter 1 integration prototype and approved the overall teaching/remediation presentation direction. The user specifically approved the visual direction showing a 3D male NPC named Rifki and requested that future NPCs use the same 3D character family, with the following reserve names:

- Female: Leli, Haryumi, Savira
- Male: Raka, Zaein, Bachtiar

This record does not replace the existing approved character-design baseline; it records the requested KM integration presentation direction for the controlled prototype and future NPC roster planning.

## Learning Evidence decision

The user asked whether the raw Learning Evidence object should remain visible through the final distributable game. Decision: **NO**.

The raw JSON-like Learning Evidence shown in the current controlled integration prototype is QA/debug instrumentation. It is useful for validating attempts, accuracy, competency IDs, error pattern, training tag, and timestamps, but it is not appropriate as a permanent student-facing production UI element.

### Production boundary

- Learning Evidence remains an internal game state/data contract because Training/Remediation and future progression need it.
- Raw JSON/debug representation must not be permanently exposed to students in the final game.
- Production UI should surface only a concise, human-readable learning state when useful (for example: weakness detected, recommended training, or mastery/progress status).
- The detailed evidence object may remain available to QA/developer/debug mode and future analytics/teacher-facing functionality if separately approved.
- The evidence should be contextual rather than a permanent code-like panel on every mission screen.
- Training Room continues to consume learning evidence while preserving XP/progression boundaries already approved.

## Evidence

Current controlled integration prototype explicitly renders `Learning Evidence` as a visible `.state` JSON block on the page. This confirms that the current display is prototype instrumentation, not a locked final visual requirement.

The approved Training Room promotion record confirms that Learning Evidence must be preserved as data and that Training Room consumes it; it does not require raw JSON to remain visible to the player.

## Interpretation

The current raw evidence panel should be treated as a **QA/debug view**, not final UI. No production deletion of learning evidence is authorized or intended. We are separating data persistence from presentation visibility.

## Decision

**Approved direction:** keep Learning Evidence internally; hide raw JSON in final student-facing production UI; expose concise contextual feedback only when pedagogically useful; retain a QA/debug view for validation.

## Implementation boundary

No code was changed in this log-only decision. A later UI implementation step must:
1. preserve the evidence state contract;
2. remove/hide raw JSON from normal production presentation;
3. provide a concise student-facing summary where appropriate;
4. keep QA/debug visibility available behind an explicit test/debug mode;
5. verify Training Room still consumes the underlying evidence after the presentation change.

## Non-destructive rule

Nothing in the underlying Learning Evidence state, Training Room architecture, Mission System, or existing legacy prototypes is deleted by this decision.
