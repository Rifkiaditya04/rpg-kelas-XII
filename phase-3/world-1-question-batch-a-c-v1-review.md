# World 1 Controlled Question Batch A–C v1 — Independent Answer Verification + Pedagogical Review

## Review status
- Batch: `BI12-W01-BATCH-AC-V1`
- Items reviewed: 9/9
- Review stage: independent answer verification + pedagogical review
- Production promotion: **BLOCKED**
- Overall result: **QA NEEDS REVISION**

## Review protocol
Each item was checked against the current batch data, the Chapter I provenance pass, the project workflow rules, and the current renderer contract. The review separates Evidence, Implementation, and Interpretation.

## Item-by-item verdict

| ID | Answer | Source/provenance | Pedagogy | Renderer contract | Verdict |
|---|---|---|---|---|---|
| BI12-W1-AC-001 | PASS | PASS | PASS | PASS | **PASS** |
| BI12-W1-AC-002 | PASS | PASS | PASS | PASS | **PASS** |
| BI12-W1-AC-003 | PASS* | PASS | **REVISE** | **REVISE** | **BLOCKED** |
| BI12-W1-AC-004 | PASS* | PASS | **REVISE** | **REVISE** | **BLOCKED** |
| BI12-W1-AC-005 | PASS | PASS | PASS | PASS** | **PASS with renderer limitation** |
| BI12-W1-AC-006 | PASS | PASS | PASS | PASS | **PASS** |
| BI12-W1-AC-007 | PASS | PASS | PASS | PASS | **PASS** |
| BI12-W1-AC-008 | PASS | PASS | PASS | PASS | **PASS** |
| BI12-W1-AC-009 | PASS | PASS | PASS | PASS | **PASS** |

### BI12-W1-AC-003 — Evidence matching

**Evidence:** The keyed pair is logically valid: document-management need → archive-management experience. The source mapping is consistent with the relevance principle documented in the Chapter I provenance pass.

**Implementation:** The current renderer accepts `evidence_matching` as a supported type, but its actual interaction path is the same generic single/multi answer button flow. It does not implement a real matching interaction.

**Interpretation:** The wording says “Cocokkan”, but the data gives four complete statements as options and one complete statement as the answer. This is effectively a single-choice question disguised as matching. That creates a mismatch between cognitive task, question_type, and game mechanic.

**Required revision:** Either convert the item to a genuine MCQ/evidence-choice question, or redesign the schema and renderer for actual pair matching. Do not promote it in its current form.

### BI12-W1-AC-004 — Ordering

**Evidence:** The keyed sequence is consistent with the documented opening sequence of the letter structure.

**Implementation:** The current renderer does not implement an ordering interaction. `ordering` is accepted as a supported type, but the renderer treats the options as ordinary selectable answers and compares a single answer string.

**Interpretation:** The question_type claims `ordering`, while the player is not actually ordering anything. This is a contract mismatch and would train recognition rather than sequencing.

**Required revision:** Either convert the item to MCQ, explicitly asking which sequence is correct, or implement a true ordering interaction with an answer array and dedicated renderer branch before retaining `ordering`.

### BI12-W1-AC-005 — Document inspection

**Evidence:** The identified problem is supported by the structural/function focus of Chapter I: the body must communicate the target position and relevant qualifications/experience.

**Implementation:** `document_inspection` is supported by the current quality gate, but the current renderer uses the generic option-selection interaction rather than a visual document-inspection UI.

**Interpretation:** The content is valid for a document-inspection challenge, but the current implementation is a semantic label rather than a specialized interaction. This is acceptable for the controlled batch only if the mechanic is treated as a content label, not as a claim that a specialized document-inspection UI already exists.

**Disposition:** Content PASS; specialized mechanic remains a future implementation concern.

## Cross-batch findings

1. **Answer correctness:** 9/9 answers are internally coherent and no answer key was found to be contradictory to its stated scenario.
2. **Distractors:** generally plausible enough for the intended level; no distractor was found to create a second clearly correct answer.
3. **Provenance:** all 9 items contain Student Book and Teacher Guide locators. The locators use page + section, the approved human-auditable locator for the converted sources; no artificial source line numbers are invented.
4. **Cognitive alignment:** lane distribution is appropriate, but AC-003 and AC-004 need interaction redesign because declared interaction type does not match the actual task performed by the renderer.
5. **Difficulty:** easy/medium/hard labels are plausible but provisional until live batch playtest.
6. **Explanation quality:** explanations generally explain why the keyed answer fits and should remain learner-facing feedback without introducing unsupported claims.
7. **Production status:** none of the 9 items should enter `golden-dataset-v1.json` until the two blocked items are revised and the batch passes renderer QA.

## Gate decision

**FAIL / NEEDS REVISION** for batch promotion.

Promotion is blocked specifically by:
- `BI12-W1-AC-003` interaction mismatch;
- `BI12-W1-AC-004` interaction mismatch.

No broad mass generation is authorized until these issues are resolved and the revised 9-item batch passes the next quality gate.
