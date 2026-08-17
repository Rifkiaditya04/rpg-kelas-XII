# World 1 — Training Room Scope Determination

Date: 2026-08-17

## Protocol
re-sync → read full Alur Kerja Proyek → verify Master Control + latest artifacts → Evidence / Implementation / Interpretation → cross-validation → execution.

## Status reconciliation
The RPG Layer promotion records (QA PASS + Promotion v1) superseded the stale `QA_PENDING` wording that remained in the earlier Master Control v1.1 section. Master Control v1.1 has now been reconciled without deleting history.

## Evidence
- World 1 RPG Layer v1 is promoted/approved.
- Training Hook is runtime-verified.
- Actual Training Room experience/content was explicitly excluded from RPG Layer promotion.
- Retry remains distinct from Training Room.
- Training Room must not award duplicate mission completion XP.

## Decision
**NEXT OFFICIAL SCOPE: World 1 Training Room Specification v1.**

This is a specification phase, not implementation.

## Rationale
The Training Hook already exists as the evidence-driven entry point. The actual Training Room is the direct missing component in the learning loop. Broader RPG/gameplay expansion should not begin before this dependency is specified.

## Required specification topics
1. Entry condition from learning evidence/weakness.
2. Competency/skill context.
3. Explanation/guided learning.
4. Practice interaction.
5. Readiness/return behavior.
6. XP and Mission Complete boundaries.
7. Evidence update behavior.
8. Retry vs Training Room distinction.
9. Persistence/determinism.
10. Content provenance and academic constraints.
11. QA and live-browser acceptance criteria.

## Explicit non-scope
No universal mastery curve, final mastery threshold, combat, inventory, economy, online backend, or unrelated RPG mechanics are authorized by this decision.

## Next gate
Create and review `World 1 Training Room Specification v1`; only after user approval may controlled implementation begin.
