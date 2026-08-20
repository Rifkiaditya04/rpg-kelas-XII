# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — v1.1 CONTINUATION

> **MASTER CONTROL v1.1 adalah LANJUTAN RESMI dari `Alur Kerja Proyek/00-MASTER-CONTROL.md`.**
> Dokumen ini tidak menggantikan, menghapus, atau membatalkan Master Control pertama. Untuk setiap sesi kerja, keputusan, perubahan, implementasi, QA, atau promotion, **WAJIB membaca lengkap `00-MASTER-CONTROL.md` terlebih dahulu dan kemudian membaca lengkap `00-MASTER-CONTROL-v1.1.md` ini**.

## 0. Aturan kontinuitas
- `00-MASTER-CONTROL.md` = Master Control utama / bagian pertama.
- `00-MASTER-CONTROL-v1.1.md` = kelanjutan resmi / bagian kedua.
- Keduanya bersama-sama membentuk Master Control aktif proyek.
- Jangan membuat ringkasan pengganti yang menyebabkan pembacaan Master Control pertama dilewati.
- Jika ada konflik, tandai `conflicting`, cross-validate artefak sumber, dan dokumentasikan resolusinya di PROJECT LOG.

## 1. Progression v1 — PROMOTED / APPROVED
- Progression System Specification v1: APPROVED.
- Controlled World 1 Progression Prototype v1: IMPLEMENTED.
- Progression QA / Regression Gate: PASS — user-verified live browser evidence.
- Progression v1: PROMOTED / APPROVED.
- Evidence includes fresh private-browser state, completion XP, Mission Complete, learning evidence accumulation, accuracy, anti-farming, unlock eligibility, and persistence.
- Training Room was deferred from Mission System v1 and is now implemented as the next controlled RPG-layer component.
- No universal player-level curve or mastery threshold is approved without a separate design decision.

## 2. RPG Layer v1 — PROMOTED / APPROVED
- World 1 RPG Layer & Training Room Specification v1: APPROVED.
- Controlled World 1 RPG Layer Prototype v1: IMPLEMENTED.
- Controlled World 1 RPG Layer QA / Regression Gate: **PASS — user-verified browser evidence**.
- World 1 RPG Layer v1: **PROMOTED / APPROVED**.
- Promotion record: `Alur Kerja Proyek/PROJECT LOG/022-World-1-RPG-Layer-Promotion-v1.md`.
- QA record: `Alur Kerja Proyek/PROJECT LOG/021-World-1-RPG-Layer-QA-Gate-PASS-and-Promotion-v1.md`.
- Promoted integration scope: Explore → NPC/Context → Learn → Mission → Progression → Learning Weakness / Training Hook.
- Verified runtime boundaries: Learn/context does not mutate XP or Mission Complete; Training Hook does not award XP; Retry remains distinct from Training Room; mission/progression state persists and M01 → M02 unlock remains deterministic.

## 3. Training Room v1 — PROMOTED / APPROVED
- World 1 Training Room Specification v1: **APPROVED**.
- Approval record: `Alur Kerja Proyek/PROJECT LOG/024-Training-Room-Specification-v1-Approval.md`.
- Controlled Training Room Prototype v1: **IMPLEMENTED**.
- Implementation record: `Alur Kerja Proyek/PROJECT LOG/025-Training-Room-Prototype-v1-Implementation.md`.
- Prototype: `prototype/bahasa-indonesia/world-1-training-room-prototype-v1.html`.
- Progression Training Hook integration: `prototype/bahasa-indonesia/world-1-progression-prototype-v1.html`.
- Training Room QA / Regression Gate: **PASS — user-verified live browser evidence**.
- QA record: `Alur Kerja Proyek/PROJECT LOG/026-Training-Room-QA-Gate.md`.
- **Training Room v1: PROMOTED / APPROVED for the controlled World 1 prototype scope.**
- Promotion record: `Alur Kerja Proyek/PROJECT LOG/027-Training-Room-v1-Promotion.md`.
- Training Room must not become an XP-farming mechanism or duplicate Mission completion rewards.
- Training Room is competency/evidence-oriented rather than a random extra-quiz loop.
- Retry/Remedial remains distinct from Training Room.
- Final mastery thresholds/algorithms remain unapproved until separately specified and approved.

## 4. Training Room implementation boundary
Implemented and live-verified flow:
`Learning Weakness → Training Hook → Competency Context → Explanation → Guided Example → Practice → Return to Mission/Progression`.

Verified runtime boundaries:
- Training Room awards 0 additional XP.
- Training Room does not increment Mission Complete.
- Existing progression state is preserved.
- Existing learning evidence is not deleted.
- Competency, Explanation/Pembekalan, Guided Example/Contoh Terbimbing, Practice, and Return to Mission were verified by live browser playtest.
- Normal-browser persistence retains previous progression history; this is expected behavior. Fresh-state testing uses a private/incognito browser.
- No account/backend persistence is introduced.
- This is a controlled prototype, not final visual presentation.

## 5. Current scope determination
The post-RPG promotion scope was formally determined as Training Room Specification v1, then approved by the user. The specification was implemented, passed the core live QA checks, and was subsequently promoted through a separate documented promotion gate.

**Current status: Training Room v1 PROMOTED / APPROVED.**

The next scope has now been determined through the mandatory protocol as a **World 1 Kurikulum Merdeka Standard Chapter 1 Content Rebaseline** before any new question-bank expansion.

Reason: the repository's current standard Kurikulum Merdeka Bahasa Indonesia Class XII Student Book (`Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`) defines Chapter 1 around surat resmi and related communication activities, while the existing World 1 A–F expansion provenance artifacts were built from an older Tingkat Lanjut source set centered on surat lamaran kerja/CV. Existing approved prototype content is preserved for regression/history, but new main-game content must not silently continue the old source basis.

Determination record: `Alur Kerja Proyek/PROJECT LOG/028-World-1-Next-Scope-Determination.md`.
Rebaseline proposal: `phase-3/world-1-kurikulum-merdeka-chapter-1-content-rebaseline-v1.md`.

**Current next gate: USER REVIEW / APPROVAL of World 1 Kurikulum Merdeka Standard Chapter 1 Content Rebaseline v1.**

## 6. Existing project boundaries remain active
- Golden Dataset v1 remains immutable.
- Approved A–F content remains additive/versioned and is not deleted by the rebaseline.
- Mission System v1 remains approved/promoted.
- Progression v1 remains approved/promoted.
- Visual Direction, Map/World Structure, Character Design v2, Camera/Character Gameplay Specification, and Visual QA remain approved according to Master Control first.
- TKA Academic Planning remains a design foundation and is not replaced by the current Training Room or World 1 content rebaseline.
- Light RPG Educational Platform remains the project direction; the project is not reduced to a quiz with an RPG skin.
- K13 remains reserved for the future TKA Preparation / Academic Planning intersection where supported by the official TKA framework; it is not the automatic source for new main-game World 1 content.

## 7. Mandatory work-session protocol
Every future session:
**re-sync → read all `Alur Kerja Proyek` → read complete `00-MASTER-CONTROL.md` → read complete `00-MASTER-CONTROL-v1.1.md` → verify latest artifacts → Evidence / Implementation / Interpretation → cross-validation → execute.**

After work:
**verify result → document event/decision/bug/QA in PROJECT LOG → update relevant Master Control without deleting history.**

## 8. Promotion gate discipline
No component may be marked PROMOTED solely because source code looks correct. Promotion requires implementation evidence, relevant deterministic/source QA, runtime evidence when required, documented PASS, a PROJECT LOG promotion record, and traceable Master Control status.

## 9. Current milestone
**World 1 RPG Layer v1: PROMOTED / APPROVED.**

**World 1 Training Room v1: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Batch 01: PROMOTED / APPROVED.**

**World 1 KM Chapter 1 Teaching / NPC / Remedial Rebinding: RUNTIME QA PASS.**

**World 1 KM Chapter 1 integrated learning loop: RUNTIME QA PASS.**

**World 1 KM Chapter 1 Batch 02 E1–E3: PROMOTED / APPROVED as additive/versioned content.**

**Learning Evidence production boundary: raw JSON hidden in final student-facing UI; underlying evidence state retained.**

**Approved KM Chapter 1 UI reference archived; 3D NPC presentation direction recorded without replacing the canonical character-design baseline.**

## 10. Current next gate — 2026-08-20 continuation
The previous KM integration browser gate is closed by user-verified evidence recorded in `Alur Kerja Proyek/PROJECT LOG/056-World-1-KM-Chapter-1-Integrated-Learning-Loop-QA-PASS.md`.

Batch 02 E1–E3 is now promoted through `Alur Kerja Proyek/PROJECT LOG/057-World-1-KM-Chapter-1-Batch-02-E1-E3-Final-QA-and-Promotion.md`.

**Next controlled gate: independent renderer capability verification for the proposed `multi_select` interaction for KM02-E4.**

Rules for this gate:
- do not draft or promote E4 content before the interaction capability is proven;
- if `multi_select` is supported, create a small QA-only capability test and then resolve E4 provenance/content drafting;
- if unsupported, create an implementation-gap proposal before changing renderer behavior;
- do not modify Golden Dataset v1;
- do not delete or rewrite approved historical prototypes;
- keep final production UI work separate from controlled content/runtime QA.

## 11. Production presentation boundary
The approved KM UI reference is an archived presentation reference, not yet a final production UI implementation.

Current controlled prototype may retain QA/debug instrumentation. Before final student-facing release:
- raw Learning Evidence JSON must be hidden from normal presentation;
- concise human-readable learning state may be shown where pedagogically useful;
- the underlying evidence contract must remain intact;
- the 3D NPC presentation direction may be implemented through the appropriate visual/gameplay gate;
- final visual implementation still requires its own visual QA/promotion evidence.
