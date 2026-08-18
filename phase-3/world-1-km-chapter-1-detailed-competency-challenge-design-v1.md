# World 1 — KM Standard Chapter 1 Detailed Competency → Challenge Design v1

**Status:** DESIGN BASELINE — READY FOR ORIGINAL CONTENT DRAFTING
**Phase:** Phase 3 — Content / Gameplay Rebaseline
**Date:** 2026-08-18
**Basis:**
- `phase-3/world-1-km-chapter-1-competency-coverage-matrix-v1.md`
- `phase-3/world-1-km-chapter-1-original-teaching-gameplay-content-spec-v1.md`
- `Alur Kerja Proyek/PROJECT LOG/029-World-1-KM-Chapter-1-Deep-Source-Provenance-Pass.md`
- `Alur Kerja Proyek/PROJECT LOG/031-World-1-KM-Chapter-1-Competency-Coverage-Approval.md`
- verified Student Book + Teacher Guide Chapter 1 source pair

## 1. Purpose

Translate the approved Chapter 1 competency clusters into concrete challenge-design units before any production question wording is drafted.

This document defines:
- competency anchors;
- observable learning evidence;
- intended cognitive demand;
- challenge archetypes;
- interaction-type candidates;
- original scenario/document requirements;
- feedback requirements;
- learning-evidence requirements;
- renderer-gap decisions;
- coverage and redundancy controls.

This is **not** a final question bank. No production question wording, final answer choices, or copied source examples are approved by this document.

## 2. Binding design constraints

1. The five approved clusters remain the organizing structure.
2. A–H remain coverage anchors, not an automatic 1:1 mission mapping.
3. Existing RPG, mission, progression, learning-evidence, and Training Room architecture remains the implementation base.
4. No renderer modification is authorized by this design.
5. If an intended competency cannot be represented faithfully by the current renderer, record the gap and stop that lane before production rather than weakening the competency into an invalid interaction.
6. Every eventual production item must have Student Book provenance and Teacher Guide validation where pedagogically relevant.
7. Production content must be independently authored; source material is used for competency, concept, learning-goal, and provenance reference only.
8. Question count remains variable until coverage, cognitive demand, redundancy, and QA capacity are evaluated.

## 3. Challenge-design model

Each eventual challenge must pass this chain:

```text
Competency anchor
      ↓
Observable evidence
      ↓
Cognitive demand
      ↓
Original scenario / document
      ↓
Player task
      ↓
Interaction type
      ↓
Answer evidence
      ↓
Feedback / explanation
      ↓
Learning evidence
      ↓
Training target if weakness appears
```

A challenge is accepted only when the interaction measures the intended competency rather than an accidental reading trick, memory cue, or renderer limitation.

## 4. Cluster 1 — Receive & Evaluate Information (A–B)

### 4.1 Competency anchors

**A — Listening / information evaluation**
- identify relevant information from an official communication;
- determine the action or implication supported by what was communicated;
- distinguish supported interpretation from unsupported assumption;
- evaluate information using evidence from the communication.

**B — Explicit / implicit comparison**
- distinguish directly stated meaning from inferred meaning;
- compare the messages of two different official communications;
- identify meaningful similarities/differences;
- justify an interpretation with textual evidence.

### 4.2 Observable evidence

A successful player can:
- select information that actually matters to the communication task;
- reject details that are present but irrelevant to the decision;
- identify an explicit message without over-interpreting it;
- infer a message only when contextual evidence supports the inference;
- compare two communications on a defined dimension;
- point to the evidence supporting the conclusion.

### 4.3 Cognitive demand

Primary range: **understand → analyze → evaluate**.

The design should avoid reducing A–B to simple retrieval. At least some challenges must require evidence-based interpretation or comparison.

### 4.4 Challenge archetypes

1. **Evidence selection** — choose the evidence that supports an action or interpretation.
2. **Explicit vs implicit classification** — determine whether a meaning is directly stated or inferred.
3. **Comparison** — compare two original communications against a specific criterion.
4. **Evaluation** — select the best-supported judgment from available evidence.
5. **Evidence matching** — pair claims/interpretations with supporting evidence where renderer support is appropriate.

### 4.5 Interaction candidates

Preferred current schema types:
- `mcq`
- `multi_select`
- `evidence_matching`
- `document_inspection` only where already supported by the runtime contract.

Do not create a new listening/audio interaction solely for novelty. If actual audio is required to measure the listening competency faithfully, document that technical requirement separately before production.

### 4.6 Original-content requirements

Use fictional institutions, names, dates, purposes, recipients, and circumstances. Do not reproduce the textbook's communications or distinctive examples.

The original communication must contain enough evidence to make the correct interpretation defensible without requiring outside knowledge.

### 4.7 Feedback requirements

Feedback should explicitly identify:
- the relevant evidence;
- why the selected interpretation is supported or unsupported;
- the difference between explicit information and inference when relevant;
- the comparison criterion when two communications are involved.

## 5. Cluster 2 — Reflect & Interpret (C)

### 5.1 Competency anchor

Connect information from an official communication to a realistic school/work situation and form a reasoned response grounded in the communication rather than unsupported personal guessing.

### 5.2 Observable evidence

A successful player can:
- identify the practical consequence of a communication in a given scenario;
- choose a response that respects the information and purpose of the communication;
- distinguish evidence-based reflection from an unsupported assumption;
- explain the basis for a decision where the interaction supports it.

### 5.3 Cognitive demand

Primary range: **apply → analyze → evaluate**.

### 5.4 Challenge archetypes

1. **Scenario decision** — select the most appropriate action for a concrete situation.
2. **Reason selection** — select the reason that best connects the communication to the decision.
3. **Evidence-backed reflection** — choose the interpretation that is supported by the scenario evidence.

### 5.5 Interaction decision

Preferred initial implementation: `scenario_task` or `case_analysis` if the existing renderer contract demonstrably supports it; otherwise use a carefully constrained `mcq`/`multi_select` that preserves the intended evidence demand.

Do **not** simulate open reflection by asking a fact-recall MCQ and labeling it reflection.

### 5.6 Renderer gate

If the current renderer cannot represent the evidence needed for a meaningful reflective response, this cluster must produce a documented renderer-gap note before question drafting rather than silently lowering the competency.

## 6. Cluster 3 — Inspect Official Communication (D–E)

### 6.1 Competency anchors

**D — Structure and language**
- identify structural elements of an official communication;
- recognize appropriate formal register;
- distinguish standard and nonstandard wording;
- identify effective versus ineffective sentences;
- connect language choices to communicative purpose.

**E — Diagnose writing-convention problems**
- locate writing-convention problems in an original document;
- classify the type of problem;
- select an appropriate correction;
- explain why the correction improves the communication.

### 6.2 Observable evidence

A successful player can:
- inspect a document systematically rather than guessing from isolated words;
- identify the relevant structural component;
- distinguish a real language/register problem from an acceptable variation;
- choose a repair that preserves the intended meaning and formal purpose;
- identify multiple independent problems when the task explicitly requires it.

### 6.3 Cognitive demand

Primary range: **understand → apply → analyze → evaluate**.

### 6.4 Challenge archetypes

1. **Document inspection** — inspect an original official communication and identify a structural/language issue.
2. **Repair selection** — select the best correction for a deliberately designed problem.
3. **Multi-select diagnosis** — identify all relevant issues in a bounded excerpt/document.
4. **Structure-function matching** — connect a document component to its communication function.
5. **Error classification** — classify the kind of problem before choosing a repair.

### 6.5 Interaction candidates

Preferred:
- `mcq`
- `multi_select`
- `matching`
- `evidence_matching`
- `document_inspection` where the current renderer supports it.

### 6.6 Original-content requirements

Documents must be newly authored. Errors must be deliberately planted for a pedagogical reason and must not be accidental typos.

Each issue needs a single intended diagnosis unless the challenge explicitly tests multiple issues.

### 6.7 Feedback requirements

Feedback must teach the rule or reasoning behind the correction, not merely display the corrected form.

## 7. Cluster 4 — Produce & Respond to Official Communication (F–G)

### 7.1 Competency anchors

**F — Produce an official letter**
- choose appropriate standard wording;
- construct effective sentences;
- maintain formal purpose and audience awareness;
- organize content coherently for an official communication.

**G — Respond through electronic mail**
- understand the communication purpose;
- adapt the response to recipient and context;
- use appropriate formal wording;
- preserve the relevant information from the received communication;
- understand the electronic-mail context as a channel for the response.

### 7.2 Observable evidence

A successful player can:
- choose wording that is standard and appropriate for the intended audience;
- assemble sentence components into an effective sentence;
- select content that belongs in the response;
- distinguish an appropriate formal response from an overly casual or irrelevant one;
- maintain consistency between the original request/message and the response.

### 7.3 Cognitive demand

Primary range: **apply → analyze → create**, with the current renderer initially emphasizing application and constrained construction.

### 7.4 Challenge archetypes

1. **Guided reconstruction** — assemble or select components of an official communication.
2. **Sentence repair / completion** — choose the construction that best satisfies formal purpose and effective-sentence criteria.
3. **Audience-purpose adaptation** — select the response appropriate to recipient and communication goal.
4. **Response planning** — select the information and sequence needed before composing.
5. **Email-context decision** — choose an appropriate response structure for an official message received electronically.

### 7.5 Renderer gate

The current design does **not** authorize a free-text composition renderer.

First production lane should test whether guided selection/reconstruction can validly measure the intended competency. If it cannot, create a separate renderer proposal with:
- competency justification;
- interaction contract;
- scoring/rubric design;
- accessibility implications;
- QA plan.

No renderer modification is included in this artifact.

## 8. Cluster 5 — Transform Information → Public Communication (H)

### 8.1 Competency anchor

Transform essential information from a circular communication into a suitable announcement/publication context while preserving accuracy, audience relevance, and information priority.

### 8.2 Observable evidence

A successful player can:
- extract essential facts;
- discard nonessential information for the target audience;
- preserve required dates, places, actions, or conditions;
- organize information in a sensible publication structure;
- distinguish information that belongs in a public announcement from information that does not.

### 8.3 Cognitive demand

Primary range: **apply → analyze → create**.

### 8.4 Challenge archetypes

1. **Essential-information selection** — select the information required for the announcement.
2. **Information ordering** — organize selected information into a useful sequence.
3. **Audience filtering** — determine which information is necessary for the target audience.
4. **Publication inspection** — identify whether a draft announcement preserves the source communication's essential meaning.

### 8.5 Interaction candidates

Preferred:
- `multi_select`
- `ordering`
- `mcq`
- `evidence_matching`
- `document_inspection` where supported.

### 8.6 Feedback requirements

Feedback should explain information priority and audience relevance. It must make clear when an option is factually present but not necessary for the target publication.

## 9. Cross-cluster progression design

The clusters should form a coherent learning progression rather than five unrelated quiz sections:

```text
A–B  Receive / evaluate evidence
  ↓
C    Interpret evidence in a situation
  ↓
D–E  Inspect and repair communication
  ↓
F–G  Produce / respond using the inspected principles
  ↓
H    Transform information for a new audience
```

This creates an intentional progression from **understanding → interpreting → inspecting → producing/responding → transforming**.

## 10. Challenge sequencing rules

Within a mission or learning segment:

1. Begin with a low-friction diagnostic or recognition task.
2. Provide explanation or guided evidence before a higher-demand challenge.
3. Increase cognitive demand through evidence use, comparison, repair, or application.
4. Avoid repeating the same surface pattern with only names changed.
5. End a segment with evidence that demonstrates the competency rather than merely recall of the explanation.

## 11. Coverage and redundancy controls

Before any question batch is drafted, every planned item must be mapped to a row in a coverage ledger containing at minimum:

- activity A–H;
- cluster;
- competency anchor;
- observable evidence;
- cognitive level;
- difficulty target;
- challenge archetype;
- question type;
- source section/page;
- Teacher Guide validation section/page when used;
- original scenario/document ID;
- expected learning evidence;
- intended training tag;
- duplication/redundancy check.

No question should exist solely because a target count has not been reached.

## 12. Renderer compatibility decision

Current decision: **RETAIN CURRENT RENDERER.**

The schema already defines multiple interaction types including `mcq`, `multi_select`, `matching`, `ordering`, `evidence_matching`, `short_answer`, `case_analysis`, and `scenario_task`. Renderer dispatch is data-driven and must fail visibly for unsupported types rather than silently falling back.

For this content lane:
- use existing supported types first;
- verify actual runtime support before assigning a type to production content;
- do not create question-specific renderer branches;
- treat F/G authored composition as the primary possible gap.

## 13. Difficulty design

Difficulty is determined by cognitive demand and evidence complexity, not by sentence length.

Suggested design intent:
- **Easy:** identify explicit information, basic structure, single clear repair.
- **Medium:** infer supported meaning, compare communications, diagnose language problems, adapt a response.
- **Hard:** evaluate competing interpretations, combine multiple evidence points, repair multiple constraints, or transform information for a new audience.

These are design descriptors, not final item-count quotas.

## 14. Learning evidence contract

Every challenge should produce evidence that can be summarized as:

`competency_id + observed response pattern + success/failure + remediation tag`

Examples of response-pattern categories:
- explicit-information retrieval;
- unsupported inference;
- evidence selection;
- comparison accuracy;
- contextual interpretation;
- structure identification;
- language/register diagnosis;
- repair selection;
- audience adaptation;
- information prioritization.

Learning evidence remains separate from XP and Mission Complete.

## 15. Training Room linkage

Each competency anchor should have a future remediation tag that can point to original Training Room practice.

Training content must use new examples rather than replaying the exact mission challenge.

Training Room remains 0 XP and does not increment Mission Complete under the promoted RPG-layer rules.

## 16. Original-content gate

The next production step is **Original Content / Question Drafting**, but only through controlled batches.

For each batch:

```text
Detailed competency/challenge row
        ↓
Original scenario/document
        ↓
Original teaching explanation
        ↓
Original question + options/task
        ↓
Answer + explanation
        ↓
Provenance metadata
        ↓
Answer / pedagogical / provenance / renderer QA
```

The first batch should be intentionally small enough to validate the design and renderer assumptions before scaling.

## 17. Approval boundary

This document establishes the challenge-design baseline.

It does **not**:
- approve final question wording;
- approve a fixed question count;
- approve a new renderer;
- promote any new content;
- overwrite the Golden Dataset;
- replace approved historical A–F content.

## 18. Next gate

**ORIGINAL CONTENT / QUESTION DRAFTING — CONTROLLED FIRST BATCH**

The first batch must use this design baseline and the existing question schema, preserve provenance, and pass the project's documented QA gates before any promotion.
