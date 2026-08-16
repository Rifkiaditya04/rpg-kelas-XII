# 010 — Curriculum Sources, Copyright-Safe Content, and Teaching Loop

**Date:** 16 August 2026  
**Phase:** Phase 3 — Mission System  
**Status:** Decision captured; implementation follows Mission System Specification gate

## Re-sync / Evidence

The repository currently has `Buku Kurikulum` split into `K13`, `Kurikulum Merdeka`, and `Asesmen TKA`. fileciteturn272file0

The Kurikulum Merdeka directory contains a mixture of Markdown and PDF sources. `Biologi_BG_KLS_XII.pdf` remains PDF, while `Biologi_BS_KLS_XII_Rev.md` is already available as Markdown, alongside other converted sources. fileciteturn273file0

The stored TKA assessment document describes the TKA structure and, for the stored summary, identifies an intersection of applicable Kurikulum 2013 and Kurikulum Merdeka material. fileciteturn275file0

DJKI identifies books, educational teaching aids, and other written works among copyright-protected works, and describes copyright as arising automatically when a work is realized in tangible form. citeturn1search0turn1search5

## Decisions captured from user discussion

1. Main curriculum content should move toward Kurikulum Merdeka sources as the default production source.
2. K13 sources remain useful for the future TKA layer and are not deleted.
3. Existing approved question batches are not silently rewritten; any migration is a controlled revision gate.
4. We will avoid verbatim textbook questions/passages and other distinctive expressive content in the distributed game.
5. Textbook sources are used as academic references for concepts, competencies, objectives, and sequencing; game explanations and questions are independently authored.
6. Before challenge questions, the player should have an opportunity to learn/inspect the relevant material through the game world/NPC/dialogue system.
7. The final product should therefore feel like a Light RPG Educational Platform, not a quiz with an RPG background.

## Product loop update

The preferred learning mission pattern is now:

`Explore → Interact → NPC/Material Introduction → Learn/Inspect → Guided Explanation → Challenge → Immediate Feedback → Training/Retry if needed → Mission Evaluation → XP/Progress → Unlock`

The exact number of challenge items remains chapter/context-driven. There is no fixed question quota per chapter.

## Example player experience

```text
🏠 Home
  ↓
🚶 Walk to School
  ↓
🏫 Enter School
  ↓
📚 Choose / continue current learning path
  ↓
👤 Meet Teacher / Subject NPC
  ↓
💬 "Hari ini kita akan mempelajari ..."
  ↓
📖 Learn / Inspect
  ↓
💬 NPC explains key concept(s)
  ↓
🧩 Guided example / small interaction
  ↓
❓ Challenge 1
  ↓
✓ / ✗ Feedback + explanation
  ↓
❓ Additional challenges as required by chapter coverage
  ↓
🏆 Mission evaluation
  ↓
⭐ XP + progression
  ↓
🔓 Next lesson / room / mission
```

## Important scope distinction

The NPC does not need to become a full conversational AI teacher in the first implementation. The first version should use authored, source-grounded dialogue cards/nodes so learning content remains deterministic, auditable, and pedagogically reviewed.

AI can later assist content authoring, voice, localization, or optional interaction, but it should not become an uncontrolled source of curriculum claims.

## Next gate

**Mission System Specification v1** must formalize:
- Learn/Teach nodes;
- NPC instructional dialogue;
- content-to-challenge mapping;
- chapter/context-driven challenge count;
- feedback/training flow;
- provenance/copyright audit hooks;
- mission completion and progression transitions.
