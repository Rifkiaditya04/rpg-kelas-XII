# MASTER CONTROL v1.1 — F–G ADDENDUM — 2026-08-27

This addendum belongs to the active Master Control continuation. It does not replace `00-MASTER-CONTROL.md` or `00-MASTER-CONTROL-v1.1.md`.

## Protocol status
The mandatory work-session protocol was followed before implementation and verification: re-sync repository; read the applicable Master Control chain; verify relevant F–G Project Logs and current artifacts; inspect source, fixture, adapter, hosted regression page, and renderer boundary; separate Evidence / Implementation / Interpretation; cross-validate before changing or closing the gate.

## Approved decision
User approved the item-level F–G source-mapping revision proposal. This approval authorized a versioned QA-only content revision. It does not authorize Golden Dataset modification, production renderer modification, or production promotion.

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

## Fresh v1.2 runtime evidence
User executed the hosted v1.2-ID runtime and reported:
- R1 canonical: 6/6, 100%, 600 QA XP.
- R2 non-canonical: 0/6, 0%, 0 QA XP.
- R3: after R2, user used **Reload runtime** and replayed all six canonical answers; result was 6/6, 100%, 600 QA XP.

Therefore R1/R2/R3 are **PASS based on fresh user browser evidence**.

## Static gate status
The user report still states `Static gate belum dijalankan`. The hosted static gate is therefore **UNVERIFIED**, not PASS. Repository inspection confirms that the hosted page contains static assertions for QA-only flags, six-item shape, adapter fidelity, semantic canonical-answer mapping, reward boundary, and renderer shuffle notes, but this is not a substitute for explicit hosted execution evidence required by the protocol.

## Decision
**F–G Renderer Regression v1.2-ID: PARTIALLY CLOSED**

Runtime R1/R2/R3: **PASS**.
Hosted static-gate execution: **PENDING / UNVERIFIED**.
Production promotion: **BLOCKED**.

## Documentation
Fresh runtime evidence and the gate decision are recorded in:
`Alur Kerja Proyek/PROJECT LOG/084-World-1-KM-Chapter-1-F-G-v1.2-Runtime-Evidence.md`
Commit: `b3cfbd230d6a9aa27e6f5d3ecc1965810789409e`.

## Next gate
1. Run the v1.2 hosted **Run static gate** button and capture `STATIC GATE PASS`.
2. If PASS, perform final originality/provenance cross-check against the KM Student Book + Teacher Guide.
3. Record the final gate result.
4. Only after that propose/approve any production promotion step.
