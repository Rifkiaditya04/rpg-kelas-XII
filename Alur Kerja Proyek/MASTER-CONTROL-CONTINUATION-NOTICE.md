# Master Control Continuation Notice

## Canonical control documents

The project's Master Control is now maintained as two linked documents because the original `00-MASTER-CONTROL.md` has grown beyond a practical single-file working size:

1. `Alur Kerja Proyek/00-MASTER-CONTROL.md` — **Master Control Part 1 / original authoritative record**
2. `Alur Kerja Proyek/00-MASTER-CONTROL-v1.1.md` — **Master Control Part 2 / official continuation**

They are **not alternatives** and neither supersedes the other. Together they form the active Master Control.

## Mandatory reading rule

For every future work session, synchronization, implementation, QA, decision, review, or promotion:

`re-sync → read ALL Alur Kerja Proyek → read COMPLETE Master Control Part 1 → read COMPLETE Master Control v1.1 → verify latest artifacts → Evidence / Implementation / Interpretation → cross-validation → execute → verify → log.`

The original Master Control must continue to be read in full even when the current work appears only in v1.1. Likewise, v1.1 must be read in full.

## Integrity rule

Do not replace `00-MASTER-CONTROL.md` with a shortened or reconstructed copy merely to add a continuation pointer. The original file is preserved intact as the historical/authoritative Part 1 record. The explicit relationship is recorded here and in the v1.1 continuation itself.

If a future repository tooling capability allows a safe append-only edit to Part 1 without reconstructing or truncating its content, a short pointer to v1.1 may be added. Until then, this notice and v1.1 are the canonical continuation mechanism.

## Conflict rule

If Part 1, v1.1, a decision record, implementation artifact, or QA evidence appears inconsistent:

- do not silently choose one;
- mark the claim `confirmed`, `partially confirmed`, `conflicting`, or `unverified`;
- cross-validate against the actual latest artifact and relevant evidence;
- record the resolution in `PROJECT LOG` before changing project status.
