# World 1 — KM Chapter 1 F–G Original Question Design Batch v1.1 — Bahasa Indonesia

## Status
**REVISED LANGUAGE / CONTENT QA CANDIDATE — preserves v1 competency and canonical-answer semantics**

## Revision purpose
This additive revision resolves the language mismatch found during renderer regression. The product subject is Bahasa Indonesia, while F–G Question Design v1 was authored in English. This v1.1 Indonesian revision preserves the approved F–G competency coverage, item IDs, interaction type, canonical answer identity, and intended reasoning while independently authoring the Indonesian wording.

The original English v1 remains preserved as historical QA evidence and is not overwritten.

## Governing constraints
- Preserve the F–G competency coverage: official communication planning and responding through email.
- Preserve single-select interaction and one canonical answer per item.
- Preserve the semantic canonical answer for each item.
- Do not copy textbook exercise wording, examples, answer choices, or distinctive explanations.
- Use curriculum concepts for grounding; all scenario/question/option/explanation wording is independently authored.
- Existing renderer remains the baseline.

## F — Menulis komunikasi resmi

### F-Q01 — Audiens dan tujuan
**Skill:** menentukan keputusan perencanaan pertama untuk pesan resmi terkait sekolah/kerja.
**Type:** single-select.
**Skenario:** Seorang siswa perlu meminta dokumen terkait kegiatan magang kepada bagian administrasi sekolah.
**Options:**
- A. Menambahkan cerita pribadi yang tidak berkaitan dengan permintaan.
- B. Menentukan penerima dan tujuan permintaan terlebih dahulu.
- C. Membuat pesan sepanjang mungkin agar terlihat serius.
- D. Membuka pesan dengan bahasa santai agar terdengar akrab.
**Canonical:** B.
**Explanation:** Penerima dan tujuan menentukan informasi yang perlu disampaikan serta cara penyampaiannya dalam komunikasi resmi.

### F-Q02 — Kejelasan informasi yang diperlukan
**Skill:** memilih rumusan yang membuat batas waktu permintaan resmi menjadi jelas.
**Type:** single-select.
**Skenario:** Seorang siswa membutuhkan dokumen sekolah sebelum batas waktu kegiatan magang yang telah ditentukan.
**Options:**
- A. Tidak menyebutkan waktunya karena pihak sekolah dapat menebaknya.
- B. Mengganti permintaan dengan pernyataan umum tentang kegiatan magang.
- C. Menyebutkan dokumen yang dibutuhkan dan waktu yang diperlukan secara jelas.
- D. Hanya memberi petunjuk samar tentang batas waktunya.
**Canonical:** C.
**Explanation:** Informasi penting harus dinyatakan cukup jelas agar penerima dapat bertindak tanpa harus menebak maksud pengirim.

### F-Q03 — Ragam bahasa resmi
**Skill:** memilih perbaikan bahasa yang sesuai untuk permintaan kepada administrasi sekolah.
**Type:** single-select.
**Skenario:** Draf permintaan kepada bagian administrasi sekolah menggunakan sapaan yang sangat santai dan bahasa slang.
**Options:**
- A. Merevisi pilihan kata agar sesuai dengan konteks administrasi resmi.
- B. Menghapus tujuan permintaan agar pesannya lebih singkat.
- C. Menambahkan lebih banyak slang agar pesan terasa hangat.
- D. Mempertahankan slang karena penerimanya adalah pegawai sekolah.
**Canonical:** A.
**Explanation:** Ragam bahasa harus disesuaikan dengan hubungan antara pengirim dan penerima, tujuan komunikasi, serta konteks kelembagaan.

## G — Membalas melalui email

### G-Q01 — Konfirmasi yang lengkap
**Skill:** menentukan isi penting dalam balasan konfirmasi kegiatan resmi.
**Type:** single-select.
**Skenario:** Bagian administrasi sekolah meminta siswa mengonfirmasi kehadiran pada kegiatan persiapan karier.
**Options:**
- A. Mengirim emoji tanpa teks.
- B. Hanya membalas bahwa pesan sudah dibaca.
- C. Membalas dengan pertanyaan yang tidak berkaitan.
- D. Mengonfirmasi kehadiran dan menyebutkan kegiatan yang dikonfirmasi.
**Canonical:** D.
**Explanation:** Balasan harus membuat tujuan konfirmasi dan informasi yang dikonfirmasi menjadi jelas bagi penerima.

### G-Q02 — Nada yang sesuai
**Skill:** memilih respons email yang sesuai untuk penerima dari administrasi sekolah.
**Type:** single-select.
**Skenario:** Seorang siswa menerima undangan dari bagian administrasi sekolah dan ingin menyatakan bahwa ia bersedia hadir.
**Options:**
- A. Menggunakan slang karena email merupakan media digital.
- B. Menggunakan bahasa yang ringkas, sopan, dan sesuai dengan penerima institusional.
- C. Menulis seolah-olah sedang membalas pesan teman dekat.
- D. Hanya menggunakan singkatan dan menghilangkan sapaan.
**Canonical:** B.
**Explanation:** Media digital tidak otomatis menentukan tingkat formalitas. Penerima dan tujuan komunikasi tetap menjadi pertimbangan utama.

### G-Q03 — Kelengkapan informasi
**Skill:** menentukan respons yang memuat informasi yang diperlukan penerima.
**Type:** single-select.
**Skenario:** Bagian administrasi sekolah membutuhkan konfirmasi bahwa siswa akan hadir pada kegiatan tertentu di tanggal yang telah ditetapkan.
**Options:**
- A. Membiarkan balasan kosong dan mengandalkan baris subjek.
- B. Hanya menulis “Terima kasih.”
- C. Mengonfirmasi kehadiran dan menyebutkan kegiatan serta tanggal yang dimaksud dengan jelas.
- D. Hanya menulis “Saya mengerti.”
**Canonical:** C.
**Explanation:** Konfirmasi yang baik memuat informasi yang diperlukan agar permintaan dapat diselesaikan tanpa harus meminta klarifikasi lagi.

## Semantic preservation check
The following canonical identities are intentionally unchanged from F–G v1:
- F-Q01 → B
- F-Q02 → C
- F-Q03 → A
- G-Q01 → D
- G-Q02 → B
- G-Q03 → C

## Provenance / originality
Curriculum-derived concepts: perencanaan komunikasi resmi, penerima dan tujuan, kejelasan informasi, ragam bahasa yang sesuai, kelengkapan respons, dan komunikasi email sesuai konteks. The Indonesian wording, scenarios, options, canonical explanations, and distractors are independently authored for this project and are not copied from a textbook exercise.

## Boundary
This is an additive content revision. It does not modify Golden Dataset v1, the historical English v1, or the renderer source.

## Next gate
Static/schema/content QA → controlled fixture v1.1 → renderer regression R1/R2/R3 → promotion decision.
