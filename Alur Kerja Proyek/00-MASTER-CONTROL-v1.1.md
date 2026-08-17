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
- Training Room was deferred from Mission System v1 and is now a later RPG-layer component.
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

## 3. Training Room boundary
- **Actual Training Room experience/content is NOT yet implemented or promoted.**
- The current Training Room feature is only the approved weakness/entry hook.
- The next official scope is **World 1 Training Room Specification v1**, followed by controlled implementation, QA/regression, live evidence, and promotion.
- Training Room must not become an XP-farming mechanism or duplicate Mission completion rewards.
- Training Room must be competency/evidence-oriented rather than a random extra-quiz loop.
- Retry/Remedial remains distinct from Training Room.
- Final mastery thresholds/algorithms remain unapproved until separately specified and approved.

## 4. Scope determination after RPG Layer promotion
The post-promotion scope was determined through re-sync against Master Control, latest promotion/QA records, and the approved RPG-layer boundary.

**Decision: NEXT OFFICIAL WORK = World 1 Training Room Specification v1.**

Rationale:
1. The RPG Layer already exposes a Training Hook based on learning weakness.
2. The actual Training Room was explicitly excluded from RPG Layer promotion.
3. Implementing broader RPG/gameplay expansion before defining this dependency would expand scope without completing the learning loop.
4. Training Room requires its own specification and QA/promotion gate under the project's promotion discipline.

Expected conceptual loop:
`Mission → Learning Evidence → Weakness → Training Hook → Training Room → Reattempt/Readiness → Mission/Progression`.

## 5. Training Room specification constraints
The specification must define, before implementation:
- entry condition based on existing learning evidence;
- competency/skill context;
- explanation or guided learning content;
- practice interaction;
- return/readiness behavior;
- XP and Mission Complete boundaries;
- evidence updates;
- Retry vs Training Room distinction;
- persistence and deterministic state behavior;
- content provenance requirements;
- QA and live-browser acceptance criteria.

It must NOT invent a universal mastery curve, final mastery threshold, combat system, economy, inventory, online backend, or unrelated RPG mechanics.

## 6. Existing project boundaries remain active
- Golden Dataset v1 remains immutable.
- Approved A–F content remains additive/versioned.
- Mission System v1 remains approved/promoted.
- Progression v1 remains approved/promoted.
- Visual Direction, Map/World Structure, Character Design v2, Camera/Character Gameplay Specification, and Visual QA remain approved according to Master Control first.
- TKA Academic Planning remains a design foundation and is not replaced by the current Training Room work.
- Light RPG Educational Platform remains the project direction; the project is not reduced to a quiz with an RPG skin.

## 7. Mandatory work-session protocol
Every future session:
**re-sync → read all `Alur Kerja Proyek` → read complete `00-MASTER-CONTROL.md` → read complete `00-MASTER-CONTROL-v1.1.md` → verify latest artifacts → Evidence / Implementation / Interpretation → cross-validation → execute.**

After work:
**verify result → document event/decision/bug/QA in PROJECT LOG → update relevant Master Control without deleting history.**

## 8. Promotion gate discipline
No component may be marked PROMOTED solely because source code looks correct. Promotion requires implementation evidence, relevant deterministic/source QA, runtime evidence when required, documented PASS, a PROJECT LOG promotion record, and traceable Master Control status.

## 9. Current milestone
**World 1 RPG Layer v1: PROMOTED / APPROVED.**

**Next: World 1 Training Room Specification v1.**

This does not authorize implementation yet. Specification approval must precede controlled implementation.
