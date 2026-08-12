# PHASE 3 — Chapter I Deep Content / Provenance Pass v1

Status: `controlled-pass-complete-for-lanes-A-C`

## 1. Source set re-synced

Primary student source:
- `texts/Indonesia_BS_TL_KLS_XII_Rev.md`
- Bahasa Indonesia Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), 2025
- ISBN jilid PDF: 978-634-00-2429-6

Pedagogical validator:
- `texts/Indonesia_BG_TL_KLS_XII_Rev.md`
- Panduan Guru Bahasa Indonesia Tingkat Lanjut untuk SMA/MA Kelas XII (Edisi Revisi), 2025
- ISBN jilid PDF: 978-634-00-2486-9

Cross-check:
- `knowledge-base/bahasa-indonesia/v1/exam-blueprint.json`
- `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`
- `phase-3/world-1-expansion-plan.md`
- `phase-3/gdd-v1.md`
- `Alur Kerja Proyek/00-MASTER-CONTROL.md`

## 2. Chapter I source boundary

Student book Chapter I: pages 1–48.

Subsections:
- A. Menyimak Kritis Teks Surat Lamaran Kerja — p. 4 onward
- B. Mengevaluasi Sistematika dan Ciri Kebahasaan Teks Surat Lamaran Kerja — p. 8 onward
- C. Menulis Surat Lamaran Kerja dan Daftar Riwayat Hidup — p. 21 onward
- D. Mempresentasikan Surat Lamaran Kerja dan Daftar Riwayat Hidup — p. 30 onward
- E. Memublikasikan Surat Lamaran Kerja dan Daftar Riwayat Hidup melalui Berbagai Media — p. 35 onward
- Uji Kompetensi — p. 38 onward

Student-book evidence: the table of contents and Chapter I opening explicitly establish this boundary and the three stated learning goals.

## 3. Evidence / Implementation / Interpretation separation

### Evidence

1. Chapter I learning goals state that students should evaluate job-application letters, write effective/relevant letters and supporting CVs, present them clearly, and publish them in print/digital media. Student book p. 2.
2. Student book p. 8 states that a job-application letter is a formal letter and should follow correct systematics.
3. Student book pp. 9–12 enumerates nine structural components: place/date, subject/attachment, recipient address, opening greeting, opening paragraph, body, closing, closing greeting, and sender name/signature.
4. Student book pp. 15–20 identifies language features including standard vocabulary, punctuation, formal/polite language, concise/clear sentences, and a closing request/hope.
5. Student book p. 23 says the application should highlight skills/experience relevant to the position being applied for.
6. Student book p. 24–25 provides a writing rubric with explicit dimensions: format, content/relevance, language/grammar, skills/experience, and closing/hope.
7. Teacher Guide pp. 32–33 states eight indicators for Chapter I, including distinguishing application-letter types, identifying strengths/weaknesses, explaining structure/functions, identifying standard vocabulary/effective sentences/formal expressions, writing, editing, sending with digital communication ethics, and presenting clearly.
8. Teacher Guide pp. 34–35 allocates 8 JP each to critical listening and to evaluating systematics/language features; 8 JP each to writing/completing documents, presentation, and publication.
9. Teacher Guide pp. 36–39 explicitly frames Chapter I as functional literacy, combining project/problem-based learning, authentic work contexts, decision making, revision, presentation, publication, and digital communication.
10. Teacher Guide pp. 75–77 gives a summative blueprint spanning C2–C6 and multiple forms, including MCQ, complex MCQ, table completion, true/false, and essay. It explicitly includes indicators for opening paragraph function, evaluating strengths/weaknesses, improving closing/opening/body, comparing language styles, selecting relevant attachments, correcting standard vocabulary/punctuation, evaluating CV content, and creating application/CV text.

### Implementation

The above evidence is converted into controlled content lanes for World 1. No claim is promoted into production content unless its source locator is recorded.

### Interpretation

Game design may transform these competencies into contextual challenges, but the game layer must not be treated as evidence for curriculum claims. The following mappings are project interpretations, not statements from the books:
- relevance/vacancy fit → `Relevance Scan`
- systematics → `Document Inspection` / `Error Hunt`
- language features → `Language Scanner` / `Error Hunt`
- document completeness → `Application Review`

## 4. Controlled lanes A–C

### Lane A — Relevance / Vacancy Fit

Source anchors:
- Student book p. 2: effective and relevant application letter.
- Student book p. 10–11: opening/body should state position, qualifications, experience, and relevance.
- Student book p. 23: emphasize skills and experience appropriate to the position.
- Teacher Guide p. 32 indicator (c/e): understand structure/function and write with correct structure/content/language.
- Teacher Guide p. 75–76: indicators include evaluating application quality, influence of experience, and selecting relevant attachments.

Skill definition:
- Match applicant evidence to explicit job requirements and distinguish relevant from irrelevant claims/documents.

Suitable item forms:
- single MCQ for one best fit;
- multi-select for all relevant evidence;
- document inspection for relevance defects;
- evidence matching for requirement → applicant evidence.

Quality constraints:
- Distractors must be plausible but demonstrably irrelevant to the stated vacancy.
- Do not reward generic prestige claims that are unsupported by the scenario.

### Lane B — Systematics / Structure

Source anchors:
- Student book pp. 8–12: formal-letter status and nine structural components.
- Student book p. 12: structure is necessary because each section has a specific function.
- Teacher Guide p. 32 indicator (c): explain systematics and function of each part.
- Teacher Guide p. 75–76: opening function, closing improvement, relevant components, and identifying important elements.

Skill definition:
- Identify, order, and evaluate the function of structural components in an application letter.

Suitable item forms:
- ordering;
- document inspection;
- MCQ;
- multi-select for missing/incorrect components.

Quality constraints:
- A structural question must test function/order, not arbitrary formatting preference.
- Do not invent a component not supported by the student book.

### Lane C — Language Features

Source anchors:
- Student book pp. 14–20: standard format, standard vocabulary, punctuation, formal/polite language, concise/clear sentences, and closing request/hope.
- Student book p. 15: examples of nonstandard → standard vocabulary.
- Student book p. 17–18: formal/polite and concise/clear sentence principles.
- Teacher Guide p. 32 indicator (d): standard vocabulary, effective sentences, formal expressions.
- Teacher Guide p. 76: standard-word identification and punctuation correction are explicit summative indicators.

Skill definition:
- Detect and improve language choices so the application is formal, standard, clear, concise, and professionally appropriate.

Suitable item forms:
- MCQ;
- multi-select;
- document inspection;
- before/after repair challenge.

Quality constraints:
- A language distractor must be demonstrably nonstandard, unclear, informal, or ineffective according to the source rule.
- Do not use merely stylistic alternatives as if one were objectively wrong unless the source establishes the distinction.

## 5. Provenance precision policy

For this pass, page + subsection is the primary human-auditable locator because the source is a converted Markdown text and the connector representation does not expose stable original-file line numbers for the long source body. **No artificial line number is invented.**

Production question records must store at minimum:
- `source_document`
- `source_page_or_section`
- `chapter_id`
- `topic_id`
- `skill`
- `cognitive_level`
- `difficulty`
- `answer_key`
- `explanation`
- `generation_method`

Where an exact source excerpt is needed for adjudication, use the source page/section and retrieve the original repository file again before approving the item.

## 6. Cross-validation results

- Student Book ↔ Teacher Guide: `confirmed` for Chapter I goals, structure, language features, writing/revision, digital submission, and assessment indicators.
- Blueprint ↔ Chapter I: `confirmed` at competency/indicator level; blueprint remains an internal game-preparation design, not an official exam composition.
- Golden Dataset ↔ Chapter I: `confirmed` for existing Chapter I seed items; this pass does not promote the seed into mass production.
- World 1 GDD/expansion plan ↔ source competencies: `confirmed` for the controlled A–C direction.

## 7. Gate decision

`PASS` for controlled expansion into lanes A–C.

`NOT YET APPROVED` for mass generation.

Next gate:
1. build a small question batch from lanes A–C;
2. complete provenance per item;
3. verify answer key independently against source;
4. perform pedagogical review against Teacher Guide indicators;
5. run renderer compatibility/quality gate;
6. only then add approved items to the production dataset.
