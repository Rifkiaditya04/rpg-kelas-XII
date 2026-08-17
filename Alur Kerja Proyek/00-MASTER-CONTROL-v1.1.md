# KELAS 12 — THE FINAL MISSION
## MASTER CONTROL — v1.1 CONTINUATION

> **MASTER CONTROL v1.1 adalah LANJUTAN RESMI dari `Alur Kerja Proyek/00-MASTER-CONTROL.md`.**
>
> Dokumen ini tidak menggantikan, menghapus, atau membatalkan Master Control pertama. Untuk setiap sesi kerja, keputusan, perubahan, implementasi, QA, atau promotion, **WAJIB membaca lengkap `00-MASTER-CONTROL.md` terlebih dahulu dan kemudian membaca lengkap dokumen `00-MASTER-CONTROL-v1.1.md` ini**.
>
> Jika terjadi konflik, jangan memilih salah satu secara diam-diam. Tandai sebagai `conflicting`, lakukan cross-validation terhadap artefak sumber, dan dokumentasikan resolusinya di PROJECT LOG sebelum melanjutkan.

## 0. Aturan kontinuitas

- `00-MASTER-CONTROL.md` = Master Control utama / bagian pertama.
- `00-MASTER-CONTROL-v1.1.md` = kelanjutan resmi / bagian kedua.
- Keduanya bersama-sama membentuk **Master Control aktif proyek**.
- Nomor versi v1.1 menunjukkan perluasan kapasitas dokumentasi, bukan reset keputusan proyek.
- Keputusan yang sudah dikunci di Master Control pertama tetap berlaku kecuali ada keputusan baru yang secara eksplisit mengubahnya dan perubahan tersebut didokumentasikan.
- Jangan membuat ringkasan pengganti yang menyebabkan pembacaan Master Control pertama dilewati.

## 1. Status aktif setelah Progression QA

- **Progression System Specification v1: APPROVED.**
- **Controlled World 1 Progression Prototype v1: IMPLEMENTED.**
- **Progression QA / Regression Gate: PASS — user-verified live browser evidence.**
- Evidence mencakup fresh private-browser state, first-attempt capture, completion XP, Mission Complete, learning evidence accumulation, accuracy calculation, anti-farming, unlock eligibility, dan persistence.
- **Progression v1: READY FOR PROMOTION.**
- Training Room tetap **DEFERRED** dari Mission System v1; Retry / Remedial tetap scope Mission System v1. Training Room menjadi gate berikutnya pada Progression / RPG Layer sesuai keputusan yang sudah dikunci.
- Tidak ada universal player-level curve atau mastery threshold yang boleh diciptakan tanpa keputusan desain baru.

## 2. Promotion checkpoint berikutnya

Langkah aktif setelah dokumen ini dibuat:

**Promotion of World 1 Progression v1**

Promotion wajib mempertahankan:
- pemisahan Game Progression dan Learning Progression;
- completion reward diberikan sekali;
- retry/remedial tidak menggandakan completion XP;
- learning evidence tetap dapat bertambah setelah retry;
- XP bukan bukti academic mastery;
- unlock tetap data-driven dan deterministic;
- Golden Dataset v1 tetap immutable;
- approved content pools tetap additive/versioned;
- Training Room belum diimplementasikan pada promotion ini.

Promotion bukan berarti seluruh RPG Layer selesai. Promotion hanya mengesahkan **Progression v1** sebagai komponen approved yang dapat menjadi fondasi untuk gate berikutnya.

## 3. Evidence ledger — Progression v1

### Confirmed
- Fresh private-browser test menghasilkan initial state baru.
- First successful mission attempt langsung tercatat.
- Completion reward tercatat sebagai 400 XP.
- Mission Complete tercatat sebagai 1.
- Repeated attempts mengakumulasi `attempts` dan `correct`.
- Accuracy berubah mengikuti aggregate evidence.
- Failed retry tidak menghapus learning progress dan tidak menambah completion reward.
- Successful retry tidak menggandakan completion reward.
- `BI12-W01-M02` menjadi eligible setelah completion event.
- State tetap tersedia setelah tab ditutup dan prototype dibuka kembali.

### Historical defect
- Result relay/iframe handshake pernah menyebabkan Progression State tetap 0 walaupun Mission System menampilkan result.
- Hardened relay/ready handshake diperbaiki dan kemudian user-verified pada fresh private-browser test.
- Bug log terkait harus dipertahankan sebagai historical audit record, bukan dihapus.

## 4. Required work-session protocol — reinforced

Setiap pekerjaan berikutnya wajib mengikuti urutan:

**re-sync → baca seluruh `Alur Kerja Proyek` → baca lengkap `00-MASTER-CONTROL.md` → baca lengkap `00-MASTER-CONTROL-v1.1.md` → verifikasi artefak terbaru → Evidence / Implementation / Interpretation → cross-validation → baru eksekusi.**

Setelah pekerjaan:

**verifikasi hasil → dokumentasikan kejadian/keputusan/bug/QA di `PROJECT LOG` → update Master Control yang relevan tanpa menghapus histori.**

Jika tool atau batas ukuran membuat Master Control sulit diperbarui, jangan mengganti isi dengan versi parsial. Gunakan dokumen continuation seperti v1.1 dan dokumentasikan hubungan keduanya.

## 5. Promotion gate discipline

Jangan menyatakan komponen `PROMOTED` hanya karena source code terlihat benar. Promotion memerlukan:
1. implementation evidence;
2. relevant deterministic/source QA;
3. user/browser evidence bila gate membutuhkan runtime interaction;
4. documented PASS;
5. promotion record di PROJECT LOG;
6. Master Control status yang dapat ditelusuri.

## 6. Scope boundary

Dokumen ini tidak mengubah keputusan tentang:
- Visual Direction;
- Map / World Structure;
- Character Design v2;
- Camera / Character Gameplay Specification;
- Mission System v1;
- approved A–F content;
- TKA Academic Planning foundation;
- Light RPG Educational Platform direction.

Semua keputusan tersebut tetap mengikuti Master Control pertama dan artefak keputusan masing-masing.

## 7. Next-stage rule

Setelah **Promotion of World 1 Progression v1** selesai dan lulus, langkah berikutnya harus ditentukan berdasarkan Master Control + GDD + artefak terbaru. Jangan melompat ke implementasi besar hanya karena prototype tersedia. Jika tahap berikutnya adalah RPG Layer / Training Room / gameplay expansion, spesifikasi dan QA gate harus dibuat terlebih dahulu bila belum ada.

## 8. Audit note

`00-MASTER-CONTROL-v1.1.md` dibuat untuk mengatasi pertumbuhan panjang Master Control tanpa kehilangan sejarah. File pertama tetap authoritative sebagai bagian pertama; file ini adalah continuation layer. Setiap sesi baru harus membaca **keduanya secara lengkap**.
