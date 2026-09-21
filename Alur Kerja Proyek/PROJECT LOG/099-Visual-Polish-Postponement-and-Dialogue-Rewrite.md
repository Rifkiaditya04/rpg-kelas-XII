# PROJECT LOG 099: Visual Polish Postponement & Dialogue Rewrite

**Date:** 2026-09-17
**Status:** RECORDED

## 1. Kesepakatan Pengerjaan Visual dan Dialog
Berdasarkan sesi evaluasi terakhir dengan user, disepakati bahwa usulan peningkatan Visual UI (tombol 3D beranimasi, background untuk renderer frame soal, dsb) dan Penulisan Ulang Dialog NPC (agar lebih santai, humanis, dan menyertakan transisi antar NPC) **DITUNDA** pelaksanaannya hingga pengerjaan **Bank Soal secara keseluruhan telah berstatus PROMOTED/SELESAI**.

## 2. Alasan Penundaan
- **Prioritas Alur Kerja Proyek:** Core gameplay dan kelengkapan materi kurikulum (Bank Soal) adalah nyawa dari proyek ini. Mengutamakan penyelesaian konten menjamin game berfungsi penuh lebih cepat.
- **Efisiensi Kerja:** Menambahkan polesan visual pada arsitektur yang masih berpotensi berubah (akibat penambahan tipe soal atau mekanisme baru di bab selanjutnya) akan memicu pengulangan kerja (rework). Polishing paling efektif dilakukan di akhir fase.

## 3. Spesifikasi Rencana Mendatang (Post-Content Polishing Phase)
Setelah seluruh bab Bank Soal selesai diintegrasikan dan lolos QA, fase berikutnya akan berfokus pada:
- **Dialogue Polish:** Merombak seluruh skrip dialog NPC (Safira, Rifki, Leli, dkk) menjadi lebih humanis, kasual, harmonis, dan tidak kaku (termasuk transisi serah terima panduan dari Safira ke pembimbing mapel spesifik).
- **UI/UX Polish:** Mengubah elemen tombol menjadi beranimasi 3D dan menyematkan background khusus (ruang kelas/perpustakaan) pada iframe renderer soal yang saat ini masih putih polos.

## 4. Langkah Selanjutnya (Berdasarkan Master Control)
Kembali ke fokus utama penyelesaian Bank Soal. Mengingat Bank Soal Bab 2 (Misi 5-8) telah diintegrasikan secara fungsional ke VN Engine (lihat PROJECT LOG 098), langkah kerja terpenting yang diwajibkan oleh Master Control (Aturan 8: Promotion gate discipline) adalah melakukan **QA / Pengujian Runtime Browser untuk Bab 2**. 
Tanpa adanya bukti *Live Browser QA*, konten Bab 2 belum dapat dinyatakan berstatus Canonical/Promoted.
