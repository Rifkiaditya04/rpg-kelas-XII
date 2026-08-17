# World 1 — Training Room Specification v1

Status: **APPROVED**

Approval: User reviewed and approved the proposal on 2026-08-17.

## 1. Purpose
Training Room is the next controlled component after World 1 RPG Layer v1 promotion. It completes the learning loop by turning evidence of difficulty into guided remedial learning before reattempting a mission.

It is an educational remediation space inside the Light RPG Educational Platform, not an XP-farming room and not a second Mission System.

## 2. Relationship to existing systems

```text
Explore
  ↓
NPC / Context
  ↓
Learn
  ↓
Mission
  ↓
Feedback
  ↓
Learning Evidence
  ↓
Weakness / Training Hook
  ↓
TRAINING ROOM
  ↓
Practice / Readiness
  ↓
Mission Reattempt
```

The Training Room consumes existing learning evidence. It does not replace Mission System v1 or Progression v1.

## 3. Entry condition
The first prototype should enter Training Room only through the already-approved Training Hook when a mission's learning evidence indicates difficulty below the current mission threshold.

The exact final mastery threshold is **not defined here**. The prototype should use the existing weakness signal already validated by the RPG Layer rather than inventing a new universal mastery algorithm.

## 4. Training Room structure

### A. Context / competency
Display the competency or skill topic associated with the weakness.

### B. Explanation
A concise learning explanation addressing the identified competency.

This is not a verbatim copy of a textbook. Content must follow the project's approved provenance and copyright-safe transformation rules.

### C. Guided example
Provide one worked example where the learner can see the reasoning or method.

The example should teach the competency rather than simply reveal an answer to a future mission question.

### D. Practice
Provide controlled practice related to the same competency.

Practice is remediation, not Mission completion.

### E. Readiness / return
After practice, the learner can return to the mission flow. The first prototype does not need a final mastery certificate or universal readiness score.

## 5. XP and progression boundaries

Training Room:
- gives **0 XP**;
- does not increment Mission Complete;
- cannot duplicate completion rewards;
- does not unlock the next mission by itself;
- may update Learning Evidence;
- may affect the learner's latest error pattern/readiness evidence;
- must preserve existing Progression state.

Mission completion remains the only source of mission completion reward for this scope.

## 6. Retry vs Training Room

**Retry / Remedial:** directly repeats the mission.

**Training Room:** provides guided learning and practice before returning to the mission.

They must remain visibly and logically distinct.

```text
Below threshold
   ├── Coba Lagi → Retry Mission
   │
   └── Training Room → Learn / Guided Example / Practice → Return
```

## 7. Evidence model
Training Room may append learning evidence for the competency, but it must not erase prior attempts.

The evidence remains auditable:
- attempts;
- correct;
- accuracy;
- skill_topic;
- cognitive_level/difficulty when already available from content;
- recent_error_pattern;
- last_attempt.

The exact additional fields, if any, require implementation review before use.

## 8. Persistence
Training Room state must survive normal page reload when it is part of the approved progression state. Fresh private-browser testing must still begin from a clean state.

No account/backend persistence is introduced by this specification.

## 9. Content provenance / copyright boundary
Training explanations and practice content must use the project's approved content pipeline and provenance records. Do not copy textbook passages or textbook questions verbatim. Source concepts may be transformed into original instructional explanations and original practice items according to the project's established content rules.

## 10. Scope exclusions
Not part of this specification:
- universal mastery algorithm;
- universal level curve;
- final academic mastery certification;
- XP rewards;
- combat or inventory systems;
- economy;
- online accounts/backend;
- AI tutor/chatbot requirement;
- Worlds 2–4;
- final visual presentation.

## 11. Prototype acceptance criteria
The controlled implementation should demonstrate:
1. Training Hook opens the Training Room.
2. Correct competency context is shown.
3. Explanation is displayed.
4. Guided example is displayed.
5. Practice can be completed.
6. Training Room gives 0 XP.
7. Training Room does not increment Mission Complete.
8. Existing XP/progression is preserved.
9. Training Room and Retry remain distinct.
10. Learning evidence remains persistent/auditable.
11. Learner can return toward Mission reattempt.
12. Fresh-state and reload behavior are deterministic.

## 12. QA / promotion path

```text
Specification
   ↓ APPROVED
Controlled implementation
   ↓
Training Room QA / Regression Gate
   ↓ live browser evidence
Promotion of Training Room v1
```

## 13. Approval boundary
This specification is approved for controlled implementation. Approval does not itself promote the Training Room implementation. Implementation, QA, live evidence, and promotion remain separate gates.
