# World 1 — Career Mission Expansion Plan v1

**Phase:** 3 — Game Design / Prototype Expansion
**Status:** approved next implementation step
**World:** Bahasa Indonesia / Career Mission
**Purpose:** expand World 1 from the validated 3-question slice into a structured learning journey without mass-generating content prematurely.

## 1. Evidence baseline

Master Control records that the World 1 slice has passed deterministic/source QA and that the user live playtest confirmed three challenges rendered, an all-correct run produced 400 XP, and wrong answers showed explanations/source verification. The same control also records that challenge and option order are randomized and that multi-select UX now explicitly communicates the required number of selections.

The World 1 slice design identifies the current academic domain as surat lamaran kerja and daftar riwayat hidup and explicitly names future expansion areas: systematics, language features, CV relevance/completeness, email vs conventional format, presentation/interview, and publication. These areas must not be added until corresponding content has provenance and QA.

PHASE 2 identifies Chapter I learning activities including critical listening of job applications, evaluation of systematics, evaluation of language features, writing a job application, writing a CV, presentation, publication, and competency assessment.

## 2. Implementation decision

World 1 will be expanded in content lanes, not by simply increasing the number of generic quiz questions.

```text
Career Mission
├── Lane A — Relevance & Vacancy Fit
├── Lane B — Application Structure / Systematics
├── Lane C — Language Features
├── Lane D — CV Relevance & Completeness
├── Lane E — Application Package Review
└── Lane F — Presentation / Publication / Integrated Mastery
```

The first expansion batch should prioritize A–C because they directly extend the validated slice's current skills while creating a stronger foundation for later document-production tasks.

## 3. Content-to-game mapping

| Content lane | Learning focus | Candidate mechanic | Required evidence before implementation |
|---|---|---|---|
| A | relevance to target position | Relevance Scan | Student Book + Teacher Guide provenance |
| B | systematic structure | Document Inspection / Ordering | exact source section + validator |
| C | formal/language features | Error Hunt / Evidence Check | exact source section + validator |
| D | CV relevance/completeness | Profile Audit | exact source section + validator |
| E | coherent application package | Application Review | cross-item provenance + rubric if needed |
| F | presentation/publication/integrated mastery | Mission Task / rubric renderer | rubric + source validation |

## 4. Batch strategy

Do not mass-generate the full World 1 bank yet.

Each batch follows:

```text
Source extraction
  ↓
Skill/indicator mapping
  ↓
Question drafting
  ↓
Answer verification
  ↓
Pedagogical review
  ↓
Provenance completion
  ↓
Renderer compatibility check
  ↓
Batch QA
  ↓
Add to approved dataset
```

Initial target for the next batch is a small representative set covering Lanes A–C and multiple interaction types. The exact count is determined after the source extraction pass rather than assumed in advance.

## 5. Data contract

New questions must use the existing Question Schema and retain:

- unique ID
- chapter/topic
- question_type
- options/answer shape appropriate to type
- explanation
- skill
- cognitive level
- difficulty
- student-book provenance
- teacher-guide provenance
- generation method

No new question is considered production-ready merely because it renders.

## 6. Anti-memorization requirements

The existing randomized challenge order and option order remain mandatory. New mission batches must not rely on fixed question positions or fixed correct-option letters.

Question evaluation must remain answer-value based, not position based.

## 7. Learning progression

World 1 expansion should increase cognitive demand gradually:

```text
Understand relevance
      ↓
Apply structure rules
      ↓
Analyze language/features
      ↓
Evaluate application quality
      ↓
Integrated application-package mastery
```

The game should record skill-level performance separately from XP.

## 8. Release-cleanup requirement

The current micro-prototype may display development/provenance status text such as:

> Seed tervalidasi melalui quality gate konten dan renderer data-driven. Ini tetap micro-prototype, bukan desain visual final.

This text is intentionally retained during development and QA. It must be removed from the student-facing final production build before public distribution. It must not be removed merely to make the prototype look final.

## 9. Gate to the next step

Before expanding to World 2, World 1 should have:

1. a provenance-backed expanded content batch;
2. renderer compatibility verified;
3. batch quality gate passed;
4. live regression performed by the user;
5. learning-skill feedback still correct;
6. no question-ID-specific rendering branches;
7. final-production cleanup list maintained separately from prototype content.

## 10. Next implementation step

Perform a **Chapter I deep content/provenance pass for Lanes A–C**, then draft the next small approved question batch from verified source evidence. Do not generate the large World 1 bank yet.
