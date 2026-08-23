# 075 — World 1 KM Chapter 1 F–G Renderer Regression Adapter and Hosted Page

## Status
**QA INFRASTRUCTURE CREATED — RUNTIME REGRESSION STILL PENDING**

## Re-sync / repository access
GitHub repository discovery and actual repository file reads are available again. `Alur Kerja Proyek/00-MASTER-CONTROL.md`, `00-MASTER-CONTROL-v1.1.md`, the F–G fixture validation artifact, the F–G renderer regression specification, the actual KM runtime/renderer, and the latest F–G project log were readable from the repository.

Latest known F–G continuation commit before this work:
`4862e5f87b72f07483d107b4006b564bd57c8c25`

## Evidence
- Controlled fixture: `phase-3/world-1-km-chapter-1-f-g-controlled-fixture-v1.json`.
- Fixture validation: PASS at `80aea56f33482d0bf8b761c0b875af79160f4280`; the fixture preserves six single-select items, four options each, one canonical answer each, balanced canonical positions A=1/B=2/C=2/D=1, and QA-only boundaries.
- Fixture correction commit: `822ef222596b9ab0756e36f7d0e58c73a84e689f`.
- Renderer regression specification: `phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1.md`.
- Existing execution log 074: runtime cases R1/R2/R3 are defined and explicitly remain pending until actual hosted execution.
- Actual renderer: `prototype/bahasa-indonesia/km-batch-01-runtime.html` + `km-batch-01-renderer-v1.js`.
- GitHub Pages workflow deploys the repository root on every push to `main`.

## Implementation
### QA-only adapter
Created:
`phase-3/world-1-km-chapter-1-f-g-renderer-regression-v1-adapter.json`

Commit:
`fed8ad5636e33d36be7decdd67a2616729203d86`

The adapter is mechanical only. It preserves fixture prompt, option values/order, canonical answer values, and explanations. It supplies the fields required by the existing renderer schema and explicitly marks page-level/Teacher Guide provenance fields as QA-only/unverified rather than inventing source metadata. `mission_completion_xp` is set to 0 so the adapter does not introduce a completion reward.

### Hosted regression page
Created:
`prototype/bahasa-indonesia/km-chapter-1-f-g-renderer-regression-v1.html`

Commit:
`0b5e9947e2ea4936700f5ec095074abf643917be`

The page:
- cross-checks the adapter against the source fixture;
- verifies QA-only flags and six-item structure;
- verifies option values/order and canonical answer values were not changed by the adapter;
- embeds the actual KM renderer without modifying renderer source;
- captures `MISSION_RENDERER_RESULT` messages;
- distinguishes R1 (6/6, 100%) and R2 (0/6, 0%) result interpretations;
- leaves R3 as a manual reload/replay isolation check.

## Implementation conflict found during cross-validation
The written regression specification says the actual renderer must preserve the fixture's exact option order for deterministic QA. The actual renderer source currently calls `shuffle(q.options)` during rendering. Therefore the adapter can preserve deterministic fixture order, but the visible option-button order is intentionally randomized by the existing renderer.

Classification: **conflicting** between regression specification and current implementation.

This was not changed in this QA-only step. The regression page reports this as an implementation note rather than silently claiming deterministic UI order.

## Interpretation
- QA-only adapter: **CREATED / structurally cross-checked**.
- Hosted regression page: **CREATED / structurally cross-checked**.
- F–G Renderer Regression v1: **NOT CLOSED**.
- R1/R2/R3: **RUNTIME PENDING**.
- Generic >=70% completion-reward contract: remains **OPEN and separate**.
- Golden Dataset v1: unchanged.
- Production F–G integration: not performed.

## Next gate
Run the hosted page in a real browser and execute R1/R2/R3. Do not promote F–G content until the regression decision is documented. If deterministic option order is required as a gate condition, resolve the specification/implementation conflict in a separate decision; do not alter the production renderer as part of this adapter-only step.
