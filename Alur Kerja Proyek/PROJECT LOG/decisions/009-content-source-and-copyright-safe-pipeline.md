# Decision 009 — Content Source Priority + Copyright-Safe Production Pipeline

**Date:** 16 August 2026  
**Phase:** Phase 3 — Mission System / Content Architecture  
**Status:** APPROVED DESIGN DIRECTION / legal verification remains required before commercial distribution

## Evidence

Repository now contains a curriculum source structure under `Buku Kurikulum` with separate:
- `K13`
- `Kurikulum Merdeka`
- `Asesmen TKA`

The repository also contains multiple Kurikulum Merdeka sources already converted to Markdown, while some PDFs remain. For example, `Biologi_BG_KLS_XII.pdf` is still PDF, while `Biologi_BS_KLS_XII_Rev.md` is already available. fileciteturn273file0

The TKA assessment reference currently stored in the repository describes TKA as an assessment framework and, for the stored Bahasa Indonesia summary, describes an intersection of applicable Kurikulum 2013 and Kurikulum Merdeka material. This repository document is treated as project evidence, not as a substitute for the official current TKA specification. fileciteturn275file0

DJKI states that books and other written works are protected works and that copyright arises automatically when a work is realized in tangible form. citeturn1search0turn1search5

## Decision

### 1. Main curriculum content

For the main educational game, new question/content production should prioritize **Kurikulum Merdeka Student Book + Teacher Guide** sources available in the repository, subject to provenance and pedagogical validation.

K13 material already present in the project is not automatically discarded, but it should not be used as the default source for new main-curriculum production. Existing approved content remains governed by its own provenance/version history until a deliberate revision gate is opened.

### 2. Future TKA layer

K13 sources remain available as a future TKA preparation research/content source alongside Kurikulum Merdeka sources, because the project's stored TKA evidence describes an intersection of applicable curriculum material. This does **not** mean the game may claim to reproduce or replace the official TKA.

The Academic Planning Office remains a game-side study-planning simulation, not official registration.

### 3. Copyright-safe content rule

The production pipeline must avoid treating textbook wording, textbook exercises, examples, illustrations, tables, diagrams, page layout, and distinctive narrative presentation as raw material to copy into the game.

The safe production direction is:

`Source → identify learning objective / concept / competency → independently author new explanation → independently author new scenario/context → independently author new question/options/distractors → provenance to source concept → pedagogical review → copyright/provenance audit`

The project should **not** copy textbook questions verbatim or reproduce distinctive textbook passages merely by changing superficial details.

Changing a few words is not treated as sufficient originality.

### 4. What may be used as source knowledge

The books may be used internally as references for understanding curriculum-aligned subject matter, learning objectives, concepts, competency coverage, sequencing, and teacher guidance, subject to the project's access/licensing terms.

The game should express the resulting learning content in original wording and original instructional/game context.

### 5. Third-party creative assets

Do not directly reuse textbook illustrations, photographs, diagrams, distinctive maps, character art, page layouts, or other protected expressive assets in the distributed game unless a clear license/permission permits that use.

When a concept needs a visual, prefer an independently created asset or an asset with a documented license compatible with game distribution.

### 6. Legal boundary

This project uses a conservative copyright-avoidance policy, but this document is **not legal advice** and does not by itself establish that any specific source use is legally permitted.

Before commercial/public distribution, perform a final rights review for:
- source books and their licenses;
- generated/adapted text;
- images/illustrations;
- fonts;
- music/SFX;
- third-party code/libraries;
- AI-generated assets and applicable service terms;
- trademarks and official-government branding.

## Implementation requirement

Every future question bank batch must record a `source_basis` that identifies the source concept/competency without implying that the question text was copied from the source.

Add a copyright/provenance audit to the controlled question pipeline before promotion.

## Interpretation

The goal is not to avoid using textbooks. The goal is to use them as **academic references** while producing a new educational work: new explanations, new scenarios, new challenges, new game context, and independently authored assessment items.

The distinction is especially important because a book itself is a protected work, and DJKI explicitly lists books and educational teaching aids among protected categories. citeturn1search0turn1search24

## Related product decision

The game must evolve beyond:

`walk → choose subject → answer quiz`

into:

`Explore → meet/interact with NPC → Learn/Inspect → receive contextual explanation → Challenge → Feedback → Practice/Training → Mission evaluation → XP/Progress → Unlock`.

This preserves the project's Light RPG Educational Platform identity rather than creating a quiz with an RPG skin.

## Next implementation gate

Mission System Specification v1 must include a **Learn/Teach node** before appropriate challenge nodes, with NPC/dialogue-based instructional presentation as the first controlled implementation pattern.
