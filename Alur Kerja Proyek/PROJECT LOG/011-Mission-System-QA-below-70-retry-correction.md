# 011 — Mission System QA: Below-70% Retry Scope Decision

**Date:** 16 August 2026  
**Phase:** Phase 3 — Mission System  
**Gate:** Mission System QA / Regression Gate  
**Status:** PARTIAL PASS / SCOPE DECISION APPROVED

## Evidence

Live playtest verified that the Mission System prototype passes the other QA paths, including mission flow, Learn/Teach, challenge rendering, answer handling, feedback, 70% evaluation, completion flow, and the observed below-70% branch.

The below-70% branch was initially labelled as `Training Room`, but its actual behavior only restarted the challenge for another attempt. This was corrected so the UI now accurately represents the behavior as `Retry / Remedial` with the action `Coba Lagi`.

## Decision

The project owner explicitly approved option **B**:

> **Retry/Remedial is the scope of Mission System Prototype v1. Training Room becomes a later gate when the project reaches the Progression / RPG Layer stage.**

## Interpretation

This decision separates two mechanisms:

- **Mission System v1:** below 70% provides a non-punitive remedial retry. It allows the learner to review and attempt the challenge again without claiming that a dedicated Training Room exists.
- **Future Training Room:** a distinct targeted remediation feature that identifies a weak competency/topic and provides dedicated instructional/practice content. It is not merely a replay of the same challenge.

The Training Room requirement remains part of the broader approved educational architecture, but it is intentionally deferred rather than silently implemented or falsely marked as complete.

## QA consequence

The Mission System QA / Regression Gate may evaluate the current v1 prototype against its revised prototype scope:

- mission flow;
- Learn/Teach;
- actual renderer;
- answer/feedback;
- 70% evaluation;
- below-70% Retry/Remedial;
- retry flow;
- completion and reward behavior.

A **full Training Room PASS is not required for Mission System Prototype v1 promotion** under this approved scope decision.

The future Training Room must receive its own specification, implementation, and QA gate when its phase is reached.

## Implementation status

Existing correction remains valid:

`prototype/bahasa-indonesia/mission-system-prototype-v1.html`

The UI uses `Retry / Remedial` and `Coba Lagi`, accurately reflecting the current behavior.

## Next step

Complete the remaining Mission System v1 regression checks under this approved scope. If all checks pass, promote Mission System Prototype v1 and proceed according to Master Control. The dedicated Training Room is deferred to the later Progression / RPG Layer gate.
