# 011 — Mission System QA / Regression Gate

**Date:** 16 August 2026  
**Phase:** Phase 3 — Mission System  
**Status:** QA_PENDING — browser evidence required; Training Room deferred by approved scope decision

## Re-sync / Evidence

Re-sync was performed before execution. The workflow rules, required work-session protocol, Project Log structure, Mission System Proposal v1, Mission System Specification v1, controlled prototype log, prototype dataset, mission wrapper, actual renderer, and the approved below-70% scope decision were checked.

The approved decision states that **Retry/Remedial is the scope of Mission System Prototype v1**, while the dedicated **Training Room is deferred to a later gate when the project reaches the Progression / RPG Layer stage**.

The controlled prototype uses approved Golden Dataset v1 seed IDs and the actual generic renderer. The current below-70% branch is a remedial retry, not a distinct Training Room.

## Implementation

QA-only runner:

`prototype/bahasa-indonesia/mission-system-qa.html`

The runner performs automatic preflight checks for:

- dataset load;
- schema/item count and unique IDs;
- supported renderer types;
- Student Book + Teacher Guide provenance;
- approved seed IDs;
- reward contract.

It then embeds the actual `mission-system-prototype-v1.html`, which in turn embeds the actual `renderer.js`.

## Revised QA Scope

The Mission System v1 browser regression must verify:

1. Mission Brief;
2. Learn/Teach NPC before challenge;
3. correct-answer path;
4. wrong-answer + explanation;
5. randomized question/option order;
6. below-70% **Retry / Remedial** branch;
7. `Coba Lagi` retry behavior;
8. ≥70% mission completion;
9. completion reward exactly once;
10. no generic renderer regression.

A dedicated Training Room is **not** part of this v1 promotion gate. It remains a future feature requiring its own specification, implementation, and QA gate.

## Interpretation

The scope decision prevents the prototype from falsely claiming a Training Room exists when the current behavior is only retry/remedial. It also prevents unnecessary scope expansion before the Progression / RPG Layer phase.

The QA gate can therefore be completed against the approved Mission System v1 scope without treating the deferred Training Room as a failure.

## Master Control

Master Control was previously updated to record Mission System Specification v1 as created/verified, the Controlled Mission System Prototype v1 as implemented and QA_PENDING, and this Mission System QA / Regression Gate as the current gate. The approved retry-vs-Training-Room scope decision is now part of the QA record.

## Gate status

**Automated preflight:** PASS when the runner reports all static checks PASS.  
**Browser regression:** PENDING final live-playtest evidence under the revised scope.  
**Promotion:** BLOCKED until browser regression PASS.

## User test link

Hosted QA runner:

`https://rifkiaditya04.github.io/rpg-kelas-XII/prototype/bahasa-indonesia/mission-system-qa.html`

Direct mission prototype:

`https://rifkiaditya04.github.io/rpg-kelas-XII/prototype/bahasa-indonesia/mission-system-prototype-v1.html`

## Next step

Run the hosted QA runner and report the final observed result. If all revised-scope checks PASS, the Mission System v1 can be promoted and the next project gate can be selected from Master Control. If any revised-scope check fails, fix the defect and re-run the gate before promotion.
