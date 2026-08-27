# MASTER CONTROL v1.1 — F–G ADDENDUM — 2026-08-27

This addendum belongs to the active Master Control continuation. It does not replace `00-MASTER-CONTROL.md` or `00-MASTER-CONTROL-v1.1.md`.

## Protocol status
The mandatory work-session protocol was followed before implementation: re-sync repository; read the complete applicable Master Control chain; verify relevant F–G Project Logs and current artifacts; inspect source, fixture, adapter, hosted regression page, and renderer boundary; separate Evidence / Implementation / Interpretation; cross-validate before changing content.

## Approved decision
User approved the item-level F–G source-mapping revision proposal. This approval authorizes a versioned QA-only content revision. It does not authorize Golden Dataset modification, production renderer modification, or production promotion.

## Source authority
F–G is World 1 → Kurikulum Merdeka → Bahasa Indonesia → Chapter 1. The authoritative KM source pair remains:
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

F source anchor: Student Book pp. 29–33; Teacher Guide pp. 55–58, including Activities 1.10–1.12.
G source anchor: Student Book pp. 34–36; Teacher Guide pp. 59–61, including Activity 1.13.

The Tingkat Lanjut source set is not used for this KM production-content lane.

## Revision implemented
Versioned QA-only artifacts:
- `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.2-id-adapter.json`
- `prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.2-id.html`

The revised six items are mapped directly to the KM F/G competencies:
- F-Q01 → kata baku in official letters / Activity 1.10
- F-Q02 → effective sentences in official letters / Activity 1.11
- F-Q03 → writing an official power-of-attorney letter / Activity 1.12
- G-Q01 → replying to an official request digitally / Activity 1.13
- G-Q02 → appropriate word choice in the digital official reply / Activity 1.13 rubric
- G-Q03 → effective sentence use in the digital official reply / Activity 1.13 rubric

All wording is newly authored. No book exercise, answer choice, or distinctive source wording is copied.

## Boundaries
- Golden Dataset: unchanged.
- Production renderer: unchanged.
- QA reward boundary: 100 XP/correct + 0 completion XP remains isolated.
- Generic >=70% reward-contract issue remains separate.
- F–G production integration remains blocked until the new QA version passes its own static/runtime regression gates.
- Previous v1.1-ID runtime evidence remains historical evidence and is not retroactively rewritten.

## Evidence / interpretation
Previous v1.1-ID R1/R2/R3 runtime evidence passed answer recognition, non-canonical rejection, and reload isolation. The remaining content-language/provenance issue required a new versioned fixture. The current v1.2 artifacts are implementation of the approved source-mapping revision, not yet runtime-approved.

## Next gate
1. Run the v1.2 hosted static gate.
2. If static gate passes, execute R1, R2, and R3 using the v1.2 page.
3. Record fresh browser evidence.
4. Perform final originality/provenance cross-check.
5. Only then decide whether F–G Renderer Regression v1.2 can be CLOSED and whether a separate production-promotion proposal is appropriate.
