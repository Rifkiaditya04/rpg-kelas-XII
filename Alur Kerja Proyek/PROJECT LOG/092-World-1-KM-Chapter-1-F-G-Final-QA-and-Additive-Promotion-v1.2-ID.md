# PROJECT LOG 092 — World 1 KM Chapter 1 F–G Final QA and Additive Promotion v1.2-ID

## Objective
Complete the separately controlled additive/versioned promotion decision for F–G v1.2-ID after final static QA and user-verified post-fix browser regression.

## Protocol followed
Re-synced the active repository state before promotion. Cross-validated the active Master Control chain, F–G continuation history, production candidate, static QA, reward-contract fix/evidence, and final browser regression. Golden Dataset immutability and additive/versioned promotion boundaries were preserved.

## Evidence
- Production candidate v1.2-ID exists and is machine-readable.
- Static/schema/provenance QA: PASS.
- R1 canonical: 6/6, 100%, 700 XP.
- R2 non-canonical: 0/6, 0%, 0 XP.
- R3 Reload/replay: 6/6, 100%, 700 XP.
- User verified the above results in the hosted browser after the reward-contract fix.
- Golden Dataset remains unchanged.
- Production renderer was changed only for the explicit 100%-correct completion-reward rule; unrelated renderer behavior was not changed.

## Implementation
Canonical additive artifact created:
`phase-3/world-1-km-chapter-1-f-g-canonical-v1.2-id.json`

Approved content manifest created:
`phase-3/world-1-km-chapter-1-approved-content-batch-01-f-g-v1.2-id.json`

Both are additive/versioned and do not overwrite `knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json`.

## Interpretation
All required F–G production-shaped QA gates are closed. The candidate is suitable for controlled World 1 content expansion as additive/versioned content. This promotion does not constitute final visual/UI release approval and does not authorize mass generation.

## Reward boundary
The approved production reward contract is:
- 100 XP per correct answer.
- 100 XP completion bonus only at 100% correctness.
- For six items: 6/6 = 700 XP; 0/6 = 0 XP.

The generic mission threshold remains governed by the existing Mission System and is not changed by this promotion.

## Cross-validation
Specification / Master Control ↔ Project Logs ↔ candidate ↔ static QA ↔ renderer implementation ↔ fresh browser evidence are consistent for the F–G gate.

## Decision
**F–G v1.2-ID: PROMOTED / APPROVED as additive/versioned World 1 KM Chapter 1 content.**

Golden Dataset v1 remains immutable. Historical fixtures, drafts, and QA artifacts remain preserved.

## Files changed
- `phase-3/world-1-km-chapter-1-f-g-canonical-v1.2-id.json`
- `phase-3/world-1-km-chapter-1-approved-content-batch-01-f-g-v1.2-id.json`
- this PROJECT LOG entry

## Next gate
Determine the next World 1 KM Chapter 1 scope from the active Challenge Ledger / Master Control. Do not auto-generate the next question batch. Any new content must repeat the mandatory re-sync, provenance, QA, regression, and promotion protocol.
