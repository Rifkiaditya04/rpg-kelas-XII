# PROJECT LOG — KELAS 12 — THE FINAL MISSION

## Purpose
Arsip kronologis pekerjaan, keputusan, QA, bug, milestone, dan hasil verifikasi proyek.

Folder ini berada di bawah `Alur Kerja Proyek` dan wajib dibaca bersama `00-MASTER-CONTROL.md` serta seluruh arsip workflow sebelum pekerjaan baru dilakukan.

## Operating rule
Setiap kejadian material didokumentasikan dengan pemisahan:

- **Evidence** — apa yang benar-benar terbukti dari source/repository/browser test.
- **Implementation** — perubahan yang benar-benar diterapkan pada kode/data/artefak.
- **Interpretation** — kesimpulan atau hipotesis; tidak boleh diperlakukan sebagai evidence.

Setiap record sebaiknya memuat:

1. tanggal/sesi;
2. phase/step;
3. tujuan;
4. sumber yang diperiksa;
5. pekerjaan/perubahan;
6. temuan/bug;
7. root cause bila terbukti;
8. verifikasi;
9. status;
10. next step.

## Subfolders
- `decisions/` — keputusan yang telah disetujui atau proposal yang masih pending.
- `qa/` — hasil quality gate, regression, playtest, dan verifikasi.
- `bugs/` — defect/incident dan penyelesaiannya.
- `milestones/` — milestone penting proyek.

## Anti-duplication rule
Sebelum membuat artefak baru, cari folder/repository terlebih dahulu. Jika pekerjaan sudah pernah dilakukan, gunakan atau perbarui artefak yang ada daripada mengulangnya.

## Source of truth
Project Log adalah arsip perjalanan. `00-MASTER-CONTROL.md` tetap menjadi pagar proyek dan sumber status/keputusan utama.