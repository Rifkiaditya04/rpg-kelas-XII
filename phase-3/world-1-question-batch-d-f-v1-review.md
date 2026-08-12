# Independent Answer Verification + Pedagogical Review — BI12-W1-DF-V1

Status: `REVIEW_COMPLETE_WITH_REVISIONS_REQUIRED`

Date: 2026-08-12

## Scope

Independent verification of all 9 items in `phase-3/world-1-question-batch-d-f-v1.json` against the Chapter I Student Book and Teacher Guide, followed by pedagogical review.

The batch remains `QA_PENDING` and is not approved for production promotion.

## Verification protocol

- Student Book is the primary academic source.
- Teacher Guide is the independent pedagogical validator.
- Evidence, implementation, and interpretation are separated.
- Each item was checked for answer defensibility, distractor quality, provenance, cognitive demand, and renderer-supported interaction type.

## Evidence

The batch artifact contains all nine items in one JSON content record at file line 2. The D–F provenance artifact records the approved source anchors and quality constraints at file line 2. The Student Book source is a converted Markdown source whose complete content is held at file line 2; stable original-file line numbers are not available, so page/subsection is used as the human-auditable locator as required by Master Control.

Relevant independent source evidence found in the Student Book:

- The CV peer-assessment rubric states that relevant information should match the target position; education should be complete and structured; relevant work/organization experience should be clearly explained; and skills should be relevant and support the position. These criteria are in the source content at the Chapter I CV rubric (p. 29).
- The Student Book states that video resume content includes introduction, strengths, work experience, contribution, relevant skills, and career purpose; this is on p. 32.
- The Student Book instructs students to identify the target position, adapt video content to job needs, prepare key points, rehearse several times, and speak clearly/confidently before recording; this is on pp. 32–33.
- The Student Book describes presentation through interview simulation, including preparation, interaction, questions/answers, and feedback; this is on pp. 30–31.

## Item-by-item result

| ID | Answer verification | Pedagogical review | Result |
|---|---|---|---|
| DF-001 | Source criterion is correct, but the scenario does not establish that the applicant actually has archive/document experience. | Single-answer item introduces an unsupported fact in its keyed option. | **REVISE** |
| DF-002 | Three accepted changes map to CV rubric dimensions: relevance, relevant experience/clarity, skills, and structured education. | Content is sound. `cognitive_level: evaluate` overstates the demand; the task primarily requires analysis/classification of rubric-aligned revisions. | **REVISE METADATA** |
| DF-003 | Keyed diagnosis is supported by the letter-body/relevance criteria and is the best-supported defect. | Defect is concrete and distractors are clearly inferior. Generic document-inspection rendering is permitted by current gate. | **PASS** |
| DF-004 | Correctly maps to presentation/interview-simulation expectations: preparation, relevant questions, clear communication, response, and interaction. | Appropriate application-level scenario; one defensible answer. | **PASS** |
| DF-005 | All three accepted actions are supported by the video-resume preparation instructions and content requirements. | Good multi-select structure; three of four options are clearly source-grounded. | **PASS** |
| DF-006 | Diagnosis is supported by the explicit instruction to rehearse, speak clearly, and show confidence before recording. | Appropriate evaluation of content versus delivery; no unsupported platform rule. | **PASS** |
| DF-007 | The vacancy requirements are explicitly supplied in the scenario and each accepted experience is relevant to at least one stated requirement. | Integrated application is defensible; difficulty comes from matching evidence to vacancy, not wording ambiguity. | **PASS** |
| DF-008 | All three accepted actions map to explicit Chapter I CV/relevance/video-resume criteria. | Appropriate C4 integration; distractor is clearly non-relevant. | **PASS** |
| DF-009 | Both diagnosed defects map directly to Chapter I relevance and video-resume content criteria. | Strong integrated diagnostic item; answer is uniquely defensible. | **PASS** |

## Confirmed findings

### DF-001 — content revision required

**Actual batch text, batch file line 2:**

> `...tidak menjelaskan pengalaman mengelola dokumen. Revisi yang paling tepat adalah...`

Keyed option:

> `Mengganti informasi tersebut dengan pengalaman mengelola arsip atau dokumen yang relevan dengan posisi`

The source supports relevance of skills/experience, but the scenario does not state that the applicant possesses the proposed archive/document experience. The answer therefore depends on an unstated assumption.

**Required revision:** add a scenario fact that the applicant actually has a relevant archive/document experience, or rewrite the answer so it explicitly requires using relevant evidence that the applicant genuinely possesses.

### DF-002 — cognitive metadata revision required

The content is valid, but the question asks the learner to identify rubric-aligned changes. That is better classified as `analyze` than `evaluate` under the project's internal cognitive taxonomy. This is a metadata correction, not a content failure.

## Implementation decision

- Do not overwrite the original QA batch.
- Create a deterministic revision overlay for DF-001 and DF-002.
- Keep DF-003 through DF-009 unchanged.
- Re-run schema/provenance/batch quality checks after the revision overlay is resolved.
- Only then proceed toward canonical merge and live regression.

## Interpretation

The batch is **not yet promotion-ready**, but the issues are localized and do not invalidate the D–F provenance pass. Eight items are content-verified as written; one item needs a scenario correction and one needs a cognitive-level metadata correction.

## Next gate

`D–F v1.1 revision overlay → provenance/schema/batch quality gate → canonical merge → live regression → promotion gate`
