# PROJECT LOG 083 — World 1 KM Chapter 1 F–G v1.2 Source-Mapped Revision

## Objective
Implement the user-approved item-level F–G source-mapping revision after v1.1-ID runtime R1/R2/R3 passed but content provenance/alignment remained insufficiently granular for production promotion.

## Protocol followed
- Re-synced the repository before implementation.
- Read the applicable Master Control chain and F–G continuation.
- Verified the F–G regression boundary and prior runtime evidence.
- Inspected the current v1.1-ID fixture, adapter, hosted regression page, and actual renderer boundary.
- Cross-validated F/G against the authoritative Kurikulum Merdeka Student Book and Teacher Guide.
- Distinguished Evidence, Implementation, Interpretation, and unresolved runtime status.
- Applied approved change control only after explicit user approval of the item-level source-mapping proposal.

## Authoritative source
KM Bahasa Indonesia Class XII source pair:
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

Verified source anchors:
- F: Student Book pp. 29–33; Teacher Guide pp. 55–58.
- F Activity 1.10: kata tidak baku → baku.
- F Activity 1.11: kalimat tidak efektif → efektif.
- F Activity 1.12: menulis surat resmi jenis surat kuasa.
- G: Student Book pp. 34–36; Teacher Guide pp. 59–61.
- G Activity 1.13: membalas surat permohonan dalam bentuk surat digital melalui pos elektronik; formative indicators include pilihan kata yang tepat and kalimat efektif.

## Evidence
Previous v1.1-ID browser evidence:
- R1 canonical: 6/6, 100%, 600 QA XP.
- R2 non-canonical: 0/6, 0%, 0 QA XP.
- R3 reload runtime: canonical replay returned 6/6, 100%, 600 QA XP.

Those results establish renderer answer recognition/rejection/replay behavior for v1.1-ID, but did not close the content provenance issue.

## Implementation
Created versioned QA-only v1.2 artifacts:
1. `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
2. `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.2-id-adapter.json`
3. `prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.2-id.html`

The six revised items are explicitly mapped to the KM F/G source anchors and activities. The revised wording is original and does not copy book exercises or answer choices.

QA reward boundary remains isolated at 100 XP/correct and 0 completion XP.

## Interpretation
The v1.2 revision addresses the documented content-language and item-level source-mapping conflict without modifying the Golden Dataset or production renderer.

The v1.2 implementation is **not yet runtime PASS**. Fresh hosted static and browser evidence is required.

## Cross-validation
Specification ↔ Master Control ↔ Project Logs ↔ KM Student Book ↔ Teacher Guide ↔ fixture ↔ adapter ↔ regression page:
- Source authority: PASS.
- F/G topic/activity mapping: PASS at the documented competency level.
- QA-only boundary: PASS by artifact flags and versioned paths.
- Golden Dataset modification: NONE.
- Production renderer modification: NONE.
- Runtime regression v1.2: PENDING.

## Commits
- v1.2 controlled fixture: `3b2effdc5b586110f1fd5c74d10ec5ece67ee0dd`
- v1.2 renderer adapter: `59a27ef93cccd7dfed75055adc0524ed54996ac9`
- v1.2 hosted regression page: `99c4e5accb68140f31c4ccb234d047fe18928397`
- Master Control v1.1 addendum: `51e27a7e48c0216a7209518085ca640c560337a9`

## Next gate
Run the v1.2 hosted static gate. If PASS, run R1, R2, and R3 on the v1.2 page and return the fresh browser evidence. Do not promote F–G or modify production content until the new regression gate is closed.
