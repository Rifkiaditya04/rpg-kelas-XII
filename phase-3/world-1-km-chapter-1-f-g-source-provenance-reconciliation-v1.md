# World 1 — KM Chapter 1 F–G Source / Provenance Reconciliation v1

**Status:** BLOCKED — SOURCE MAPPING REQUIRES COMPLETION BEFORE PRODUCTION CONTENT PROMOTION
**Date:** 2026-08-24
**Scope:** F–G content provenance only; no renderer or Golden Dataset change

## 1. Protocol executed

Re-sync → `Alur Kerja Proyek/` → Master Control Part 1 + v1.1 → relevant F–G Project Logs → current F–G specification/fixture/adapter/renderer → source cross-validation.

## 2. Evidence

### Authoritative production source
The active Master Control identifies the standard Kurikulum Merdeka Class XII pair as:

- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

The separate Tingkat Lanjut pair is excluded from the current main-game KM source policy.

### Student Book evidence
The Student Book Chapter 1 is `Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan`.
Its table of contents identifies:

- F — `Menulis Surat Resmi dengan Memperhatikan Penggunaan Kata Baku dan Kalimat Efektif` — printed pages 29–33.
- G — `Membalas Pesan Surat Resmi yang Diterima Menggunakan Layanan Pos Elektronik` — printed pages 34–36.

This confirms that the F–G competency domain is present in the correct standard KM Student Book.

### Teacher Guide evidence
The correct Teacher Guide exists in the same `Buku Kurikulum/Kurikulum Merdeka/` folder. Its Chapter 1 implementation section is the authoritative pedagogical validator and spans the Chapter 1 guidance section beginning at printed page 34, with the Chapter 1 guide section running through the later assessment/follow-up material.

However, an exact independently verified Teacher Guide page/section locator for the specific F and G activities has **not yet been established in this pass**.

## 3. F–G artifact cross-validation

The current F–G design/fixture uses concepts such as:

- audience and purpose;
- clarity/completeness of formal communication;
- formal register;
- complete confirmation;
- appropriate email tone;
- information completeness.

These are plausibly compatible with the broad F–G domain, but the current artifact provenance records only `Kurikulum Merdeka Chapter 1` plus a concept label. It does not provide a verified Student Book page/section + Teacher Guide validation locator for each item.

Therefore item-level provenance is **INSUFFICIENT EVIDENCE for production promotion** even though the broad F/G source domain is confirmed.

## 4. Important distinction

The successful F–G renderer regression proves only the QA runtime contract:

- R1 canonical mapping PASS;
- R2 non-canonical rejection PASS;
- R3 reload/replay isolation PASS.

It does **not** prove academic provenance or production-content approval.

The Indonesian v1.1 fixture is therefore retained as QA evidence and must not be promoted merely because the renderer gate passed.

## 5. Copyright boundary

The source books are used for concept/competency/activity grounding and provenance only. No textbook passage, exercise, answer choice, distinctive example, or protected wording is to be copied or superficially rewritten into production content.

If a future F–G revision is required, it must be independently authored and carry verifiable source locators.

## 6. Root-cause classification

**CONFIRMED:**
- F–G belongs to the standard KM Chapter 1 domain.
- The correct Student Book is the file in `Buku Kurikulum/Kurikulum Merdeka/`.
- The correct Teacher Guide exists in the same folder.
- R1/R2/R3 renderer regression passed for the QA adapter.

**INSUFFICIENT EVIDENCE:**
- item-level F/G provenance against exact Student Book sections/pages;
- item-level Teacher Guide validation for the F/G questions.

**BLOCKED:**
- production F–G content promotion;
- claiming the six current F–G items are fully source-verified production content.

## 7. No-change boundary

This reconciliation does not modify:

- Golden Dataset v1;
- production renderer;
- approved historical F–G v1 fixture;
- Indonesian QA fixture;
- XP/reward contract.

## 8. Required next gate

Complete the exact F/G Student Book + Teacher Guide source extraction and item-level provenance matrix first.

Only after that evidence is sufficient may the project decide whether the current F–G wording is retained as QA-only evidence or requires a new versioned content revision.
