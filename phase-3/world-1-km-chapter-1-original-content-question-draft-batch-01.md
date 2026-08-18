# World 1 — KM Standard Chapter 1 Original Content / Question Draft Batch 01

**Status:** DRAFT — PEDAGOGICAL / PROVENANCE / RENDERER QA REQUIRED
**Phase:** Phase 3 — Content / Gameplay Rebaseline
**Date:** 2026-08-18
**Design basis:** `phase-3/world-1-km-chapter-1-detailed-competency-challenge-design-v1.md`
**Source basis:** Revised 2025 Bahasa Indonesia Kelas XII Student Book + Teacher Guide Chapter 1

## 1. Scope

This is the first intentionally small controlled batch for validating the new KM Chapter 1 content pipeline.

It contains **6 original challenge drafts**, distributed across the first three competency clusters so that the pipeline can test:

- evidence-based interpretation;
- explicit vs implicit meaning;
- contextual reflection;
- structural inspection;
- language/register diagnosis;
- repair selection.

No item copies textbook wording, examples, dialogue, figures, or answer choices. All names, institutions, dates, documents, and situations below are newly authored.

This file is **not yet a canonical JSON batch** and must not be promoted to the Golden Dataset.

## 2. Provenance gate note

The repository contains the authoritative Student Book and Teacher Guide source pair and the approved provenance analysis. However, the current connector representation of the long Student Book file does not expose reliable printed-page boundaries for each activity. Therefore this draft records **source section/activity locators** and deliberately leaves exact printed page ranges for the final provenance QA pass.

This is intentional: no page number is guessed.

## 3. Draft items

### KM01-AC1 — Relevant action from an official notice

**Cluster:** A–B — Receive & Evaluate Information
**Activity anchor:** A
**Competency:** identify the action supported by information in an official communication.
**Observable evidence:** selects the action directly supported by the supplied notice and ignores an attractive but unsupported assumption.
**Skill:** analyze
**Cognitive level:** analyze
**Difficulty:** medium
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `evidence_scan`
**Training tag:** `explicit_information`

**Original scenario**

A school administration sends a fictional notice to the student committee: the multipurpose hall will be unavailable on Wednesday afternoon because its electrical system will be inspected. The committee is preparing an event for Thursday morning.

**Teaching cue**

When evaluating an official communication, first separate what the message actually establishes from what you merely expect or assume. The supported action must follow from the information given.

**Challenge**

Which action is best supported by the notice?

A. Move Wednesday afternoon's rehearsal to another location.
B. Cancel the Thursday morning event because the hall will certainly be unusable.
C. Ask the inspection team to postpone the electrical inspection without further information.
D. Announce that all school activities are cancelled for the entire week.

**Answer:** A

**Explanation**

The notice establishes that the hall is unavailable on Wednesday afternoon. Moving the rehearsal is directly supported. The other choices extend the information beyond what the notice establishes.

**Source provenance**

Student Book: Chapter 1, Activity A — evaluating information from an official-letter recording; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 guidance for Activity 1.1 / evaluating explicit information; exact printed page to be verified against the authoritative guide during final QA.

**Provenance statement:** Derived from the competency of evaluating relevant information in an official communication. Scenario, wording, options, and explanation are independently authored.

---

### KM01-AC2 — Explicit or inferred?

**Cluster:** A–B — Receive & Evaluate Information
**Activity anchor:** B
**Competency:** distinguish directly stated meaning from supported inference.
**Observable evidence:** classifies a claim according to whether the supplied communication states it directly or requires inference.
**Skill:** analyze
**Cognitive level:** analyze
**Difficulty:** medium
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `meaning_check`
**Training tag:** `explicit_vs_implicit`

**Original scenario**

A fictional training center sends this original message to applicants:

> “Participants who have completed the registration form should bring the confirmation code to the orientation desk on Monday morning.”

**Teaching cue**

An explicit message is stated directly. An implicit message is not stated word-for-word but can be reasonably inferred from the context.

**Challenge**

Which statement is an **implicit** conclusion rather than information stated directly?

A. Applicants who completed registration should bring a confirmation code.
B. The orientation desk will receive participants on Monday morning.
C. Participants may need the confirmation code to complete the orientation process.
D. The registration form is mentioned in the message.

**Answer:** C

**Explanation**

The message directly tells completed registrants to bring the confirmation code and identifies Monday morning and the orientation desk. The idea that the code may be needed to complete the process is a reasonable contextual inference, not a sentence directly stated in the notice.

**Source provenance**

Student Book: Chapter 1, Activity B — explicit and implicit messages in official communications; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 guidance for identifying explicit and implicit content; exact printed page to be verified during final QA.

**Provenance statement:** Derived from the explicit-versus-implicit competency. The communication and all answer choices are original.

---

### KM01-AC3 — Compare two official messages

**Cluster:** A–B — Receive & Evaluate Information
**Activity anchor:** B
**Competency:** compare the practical meaning of two official communications using evidence.
**Observable evidence:** identifies the meaningful difference without inventing a difference not supported by the two messages.
**Skill:** evaluate
**Cognitive level:** evaluate
**Difficulty:** hard
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `comparison_scan`
**Training tag:** `message_comparison`

**Original scenario**

**Message 1 — Library Administration:** The library will close at 15.00 on Friday for routine maintenance. Books may still be returned through the outdoor return box.

**Message 2 — Student Services:** The student-services counter will close at 15.00 on Friday. Online requests remain available until 20.00.

**Challenge**

Which comparison is best supported by the two messages?

A. Both services stop accepting every form of request at 15.00.
B. Both services close their physical facilities at 15.00, but each provides a different alternative after that time.
C. The library remains open later because its return box is available.
D. Student Services accepts physical requests until 20.00.

**Answer:** B

**Explanation**

Both messages state a 15.00 physical closing time. The library offers an outdoor return box, while Student Services keeps online requests available. The alternatives are different, so A is too broad and C/D misread the messages.

**Source provenance**

Student Book: Chapter 1, Activity B — comparing explicit and implicit messages from two official communications; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 comparison guidance; exact printed page to be verified during final QA.

**Provenance statement:** Original paired communications designed to measure comparison of official messages. No textbook communication is reproduced.

---

### KM01-C1 — Evidence-based response in context

**Cluster:** C — Reflect & Interpret
**Activity anchor:** C
**Competency:** connect an official communication to a realistic situation and select an evidence-based response.
**Observable evidence:** chooses a response that respects the communication without adding unsupported assumptions.
**Skill:** apply
**Cognitive level:** apply
**Difficulty:** medium
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `scenario_decision`
**Training tag:** `contextual_interpretation`

**Original scenario**

The fictional school career office informs students that consultation appointments for scholarship applications must be booked through the office's registration form before a counselor can review documents.

Raka has not submitted the form but wants feedback on his draft that afternoon.

**Challenge**

What is the most appropriate next step based on the information?

A. Submit the registration form first, then request the consultation according to the stated procedure.
B. Send the draft directly to any counselor and assume the appointment will be arranged automatically.
C. Ask a friend to register the appointment using the friend's name.
D. Ignore the registration requirement because the draft is already finished.

**Answer:** A

**Explanation**

The communication establishes a procedure: registration must occur before document review. A follows that procedure. The other options either assume an exception or bypass the stated process.

**Source provenance**

Student Book: Chapter 1, Activity C — reflecting on ideas based on official communication content; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 reflection guidance; exact printed page to be verified during final QA.

**Provenance statement:** Original school/work scenario designed to test evidence-based reflection and decision making.

---

### KM01-DE1 — Structure-function inspection

**Cluster:** D–E — Inspect Official Communication
**Activity anchor:** D
**Competency:** identify the function of a structural component in an official letter.
**Observable evidence:** distinguishes a component's communication function from its visual appearance.
**Skill:** understand
**Cognitive level:** understand
**Difficulty:** easy
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `document_inspection`
**Training tag:** `structure_function`

**Original document fragment**

A fictional community learning center prepares an official invitation. The document contains a section naming the recipient organization and its full address before the greeting and opening paragraph.

**Challenge**

What is the primary function of that section?

A. Identify clearly who should receive the communication and where it is addressed.
B. Explain why the sender personally wants to attend the event.
C. Summarize the entire event schedule.
D. Provide the sender's closing hope.

**Answer:** A

**Explanation**

The recipient-and-address section identifies the intended recipient and destination of the official communication. The other functions belong to different parts of the letter.

**Source provenance**

Student Book: Chapter 1, Activity D — structure and language use in official letters; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 structure/function guidance; exact printed page to be verified during final QA.

**Provenance statement:** Original document context; tests structural function rather than memorization of a textbook example.

---

### KM01-DE2 — Formal register repair

**Cluster:** D–E — Inspect Official Communication
**Activity anchor:** D–E
**Competency:** diagnose an inappropriate register choice and select a formal alternative that preserves meaning.
**Observable evidence:** identifies an overly casual expression and chooses a formal replacement without changing the intended request.
**Skill:** evaluate
**Cognitive level:** evaluate
**Difficulty:** medium
**Question type candidate:** `mcq`
**Mode:** learning
**Game mechanic:** `language_scan`
**Training tag:** `formal_register`

**Original draft sentence**

“Could you guys send the attendance confirmation ASAP so we can prepare the room?”

**Teaching cue**

Official communication should use wording appropriate to the recipient and purpose. A repair should preserve the original meaning while improving formality and clarity.

**Challenge**

Which revision is most appropriate for a formal school communication?

A. “Please send the attendance confirmation as soon as possible so that we can prepare the room.”
B. “You guys need to send the attendance confirmation ASAP so we can get the room ready.”
C. “Send the attendance confirmation now, okay?”
D. “Kindly, you guys, send the attendance confirmation because we wanna prepare the room.”

**Answer:** A

**Explanation**

A preserves the intended request while using formal, clear wording. B, C, and D retain casual or conversational expressions that do not fit the intended official context.

**Source provenance**

Student Book: Chapter 1, Activities D–E — language use and writing conventions in official communication; exact printed page range to be verified in final provenance QA.
Teacher Guide: Chapter 1 language/register guidance; exact printed page to be verified during final QA.

**Provenance statement:** Original sentence and revisions created to test formal-register diagnosis and repair. No source sentence is reproduced.

## 4. Batch coverage

| Item | Activity | Cluster | Cognitive level | Mechanic | Primary evidence |
|---|---|---|---|---|---|
| KM01-AC1 | A | A–B | analyze | evidence_scan | supported action |
| KM01-AC2 | B | A–B | analyze | meaning_check | explicit vs implicit |
| KM01-AC3 | B | A–B | evaluate | comparison_scan | evidence-based comparison |
| KM01-C1 | C | C | apply | scenario_decision | contextual response |
| KM01-DE1 | D | D–E | understand | document_inspection | structure function |
| KM01-DE2 | D–E | D–E | evaluate | language_scan | formal-register repair |

## 5. QA status

### Content originality
**PASS — initial authoring review.** All scenarios, names, documents, questions, options, and explanations are independently authored.

### Answer uniqueness
**PASS — initial review.** Each item has one intended canonical answer under the supplied context.

### Cognitive alignment
**PASS — initial design review.** Items are mapped to the approved challenge-design archetypes and are not simple source-text recall.

### Renderer compatibility
**PENDING runtime verification.** All six candidates use `mcq`, which is known to be supported by the existing renderer, but final batch QA must still validate the exact payload against the renderer contract.

### Provenance precision
**BLOCKED FOR FINAL GATE.** Exact printed page ranges have intentionally not been guessed and must be resolved before canonical JSON materialization.

### Promotion
**NOT AUTHORIZED.** This draft must not be merged into `golden-dataset-v1.json` until provenance, schema, answer-shape, duplicate-ID, pedagogical, and renderer gates pass.

## 6. Next action

Resolve exact Student Book / Teacher Guide printed-page locators for the six items, then materialize the batch as schema v1.1 JSON and run the full quality gate.
