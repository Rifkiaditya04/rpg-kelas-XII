# World 1 — KM Chapter 1 F–G Detailed Original Content Coverage v1

## Status
DRAFT — content-design / pre-question gate

## Protocol state
- Master Control first and Master Control v1.1 were re-synced and reviewed before this work.
- Existing F–G renderer capability evidence is preserved; no renderer source is changed here.
- F–G capability gate is PASS, with the generic completion-reward threshold issue recorded separately as an OPEN follow-up.
- This artifact does not promote production questions.

## Source boundary
F and G are derived from the approved Chapter 1 competency matrix. The Kurikulum Merdeka Student Book is the learning-content/provenance source. The exact Teacher Guide artifact remains unresolved in the repository search and is therefore not treated as independently verified in this document.

## Copyright-safe authoring boundary
The source is used to establish competencies, concepts, activity scope, and provenance. Production text must be independently authored. Do not reproduce textbook passages, examples, exercises, question wording, answer choices, figures, or distinctive explanations. Do not perform superficial rewrites of source exercises.

## F — Write official communication
### Learning intent
Learner practices planning and selecting language/structure appropriate for an official communication in a realistic education/work scenario, with emphasis on standard wording and effective sentences.

### Original gameplay package
1. Context: student receives a realistic school/work communication task from an NPC.
2. Learn: NPC explains why audience, purpose, structure, standard wording, and effective sentences matter.
3. Guided example: an original fictional communication is inspected for decisions, not copied from a textbook.
4. Challenge: learner reconstructs/selects the most appropriate components and wording from original options.
5. Feedback: explain why the selected form fits purpose/audience and why alternatives do not.
6. Evidence: record the competency demonstrated and recent error pattern.

### Candidate evidence
- chooses an appropriate purpose/audience relationship;
- identifies appropriate structural components;
- selects standard-word choices;
- selects effective sentence constructions;
- avoids inappropriate register or ambiguous construction.

### Renderer decision
Current supported MCQ/multi_select/document_inspection forms are sufficient for the first controlled production slice. Full authored free-text composition is NOT approved at this stage. Reassess only if the designed competency cannot be faithfully represented by structured interactions.

## G — Reply to official communication through email
### Learning intent
Learner practices planning an appropriate electronic response to an official communication, considering purpose, audience, tone, completeness, and appropriateness.

### Original gameplay package
1. Context: NPC gives the learner an original fictional incoming official message.
2. Learn: explain response purpose, recipient, tone, required information, and completeness.
3. Guided example: inspect an original fictional response and identify its communication decisions.
4. Challenge: select/reconstruct the best response elements from original options.
5. Feedback: explain the communication choice in context.
6. Evidence: record competency and recent error pattern.

### Candidate evidence
- identifies the response purpose;
- identifies information that must be included;
- selects appropriate formal digital tone;
- distinguishes complete from incomplete responses;
- avoids inappropriate or overly casual wording.

### Renderer decision
Existing multi_select/MCQ/document-inspection interactions remain the default. No new interaction type is approved by this document.

## Coverage policy
Question count is deliberately not fixed. F and G may require multiple challenges where necessary to cover the learning intent, but volume must remain minimum-sufficient rather than maximal.

## Required originality audit before drafting
For every planned item, verify:
- scenario is newly authored;
- text is newly authored;
- options are newly authored;
- distractors are newly authored;
- explanation is newly authored;
- no distinctive source phrase is reused;
- provenance points to source concept/activity/section, not copied source text.

## Reward boundary
Do not use this content-design artifact to resolve the generic renderer completion-reward issue. That fix belongs to a separate implementation/QA gate before production reward-contract finalization.

## Next gate
Detailed F–G coverage → original teaching/dialogue draft → originality/provenance audit → question drafting → static/schema QA → hosted runtime QA.
