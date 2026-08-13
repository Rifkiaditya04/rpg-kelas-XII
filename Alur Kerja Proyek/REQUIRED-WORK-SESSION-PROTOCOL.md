# REQUIRED WORK SESSION PROTOCOL

**Status:** Operational project rule
**Scope:** Semua pekerjaan setelah dokumen ini dibuat

## Tujuan
Mencegah pekerjaan mengulang langkah yang sudah selesai, menggunakan state lama, keluar dari Master Control, atau mencampurkan fakta repository dengan interpretasi.

## Wajib sebelum setiap pekerjaan
1. **Re-sync sumber asli.** Jangan mengandalkan state percakapan lama.
2. **Baca seluruh file dalam `Alur Kerja Proyek` satu per satu.**
3. **Baca artefak aktif yang relevan** (kode, dataset, QA report, GDD, dan sumber lain yang diperlukan).
4. **Verifikasi Master Control** dan status gate terakhir.
5. Pisahkan hasil menjadi:
   - **Evidence:** fakta yang terbukti dari source/repository.
   - **Implementation:** apa yang benar-benar ada/berubah di kode atau artefak.
   - **Interpretation:** hipotesis, analisis, atau proposal yang belum menjadi keputusan.
6. **Cross-validate klaim penting** dengan sumber independen yang sesuai.
7. Temuan material wajib menunjuk ke **file + nomor baris + potongan aktual** bila line-level evidence tersedia. Jangan mengarang nomor baris.
8. Jika ada konflik, tandai: `confirmed`, `partially confirmed`, `conflicting`, atau `unverified`.

## Wajib setelah pekerjaan
1. Jalankan/verifikasi quality gate yang relevan.
2. Jangan menyatakan PASS sebelum bukti gate benar-benar tersedia.
3. Update artefak QA yang relevan.
4. Update `00-MASTER-CONTROL.md` jika status proyek, gate, keputusan, atau defect berubah.
5. Simpan keputusan penting di repository, bukan hanya di chat.
6. Jangan menghapus catatan temuan historis jika catatan tersebut diperlukan untuk audit; jika masalah sudah selesai dan catatan operasional menimbulkan ambiguitas, pindahkan statusnya menjadi resolved dan pertahankan evidence singkat.

## Aturan anti-pengulangan
Sebelum membuat ulang sesuatu, cari dulu repository untuk:
- nama artefak;
- harness/test yang sudah ada;
- dataset/manifest;
- promotion record;
- QA report;
- keputusan Master Control.

Jika artefak sudah ada dan statusnya PASS/approved, jangan membuat versi kedua tanpa alasan yang terdokumentasi.

## Status live/browser
Static verification, source inspection, dan GitHub Pages deployment **bukan pengganti user live playtest**. Jika sebuah gate membutuhkan interaksi browser, status tetap `QA_PENDING` sampai browser evidence tersedia.

## Sumber otoritatif
Urutan prioritas:
1. Master Control + keputusan terbaru yang terdokumentasi;
2. GDD dan workflow policy yang sudah disetujui;
3. approved/canonical project artifacts;
4. source code dan test artifacts;
5. percakapan lama sebagai konteks saja, bukan source of truth.

## Catatan
Protokol ini tidak menggantikan Master Control. Ia menjelaskan **cara bekerja** agar Master Control dan artefak proyek tetap konsisten.
