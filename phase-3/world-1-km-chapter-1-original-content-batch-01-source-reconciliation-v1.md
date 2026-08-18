# World 1 — KM Standard Chapter 1 Original Content Batch 01 — BS/BG Source Reconciliation v1

**Date:** 2026-08-18
**Status:** SOURCE RECONCILIATION COMPLETE — PEDAGOGICAL/SCHEMA QA STILL PENDING

## 1. Purpose

This document reconciles the six controlled original-content drafts against the **correct KM Standard source pair** in the repository:

- Student Book: `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BS_KLS_XII_Rev_.md`
- Teacher Guide: `Buku Kurikulum/Kurikulum Merdeka/Indonesia_BG_KLS_XII_Rev_.md`

The two Tingkat Lanjut files are explicitly excluded.

## 2. Source identity

The Teacher Guide is the revised 2025 *Panduan Guru Bahasa Indonesia untuk SMA/MA/SMK/MAK Kelas XII*. Its front matter states that it is a guide for implementing the Student Book and includes specific chapter guidance and assessment material. The repository file records ISBN 978-634-00-3114-0 for the volume.

The Student Book is the corresponding revised 2025 *Bahasa Indonesia untuk SMA/MA/SMK/MAK Kelas XII* source used for Chapter 1 activity/page anchors.

## 3. Chapter 1 alignment

Teacher Guide Chapter 1 is **Mengomunikasikan Informasi Penting tentang Pendidikan dan/atau Pekerjaan**. Its Chapter 1 guidance begins at printed page 25, with **F. Panduan Pembelajaran Buku Siswa** at printed page 34.

Student Book Chapter 1 activity ranges are:
- A: pp. 5–7
- B: pp. 8–11
- C: pp. 12–13
- D: pp. 14–18
- E: pp. 19–28
- F: pp. 29–33
- G: pp. 34–36
- H: p. 37 onward

## 4. Activity-level reconciliation

| Draft | Student Book anchor | Teacher Guide anchor | TG printed page evidence | Reconciliation |
|---|---|---|---:|---|
| KM01-A1 | A, pp. 5–7 | Aktivitas 1.1 | 34–35 | PASS |
| KM01-B1 | B, pp. 8–11 | Aktivitas 1.4 | 38–42 | PASS |
| KM01-B2 | B, pp. 8–11 | Aktivitas 1.4 | 38–42 | PASS |
| KM01-C1 | C, pp. 12–13 | Aktivitas 1.5 | 43–45 | PASS WITH SCOPE NOTE |
| KM01-D1 | D, pp. 14–18 | Aktivitas 1.6 | 46–48 | PASS |
| KM01-D2 | D, pp. 14–18 | Aktivitas 1.7 | 46–49 | PASS |

### A — KM01-A1

Teacher Guide identifies Subbab A as **Mengevaluasi Isi Rekaman Surat Resmi yang Disimak**. It identifies Aktivitas 1.1 as explicit-information identification and describes the learning experience as *memahami*. It also states that the activity uses examples of official letters and that explicit information is the assessment target. The rubric on printed page 35 assesses the ability to remember and write explicit information from the listening activity.

**Decision:** The original MCQ is acceptable as a game micro-challenge derived from the same competency, but it must not be described as a reproduction of Activity 1.1's exact assessment format.

### B — KM01-B1 and KM01-B2

Teacher Guide identifies Subbab B as **Mengevaluasi Pesan Tersurat dan Tersirat dari Dua Surat Resmi yang Berbeda**. Aktivitas 1.4 explicitly concerns comparing explicit and implicit meanings of two official letters and includes a follow-up evaluation discussion. The guide warns that merely comparing is insufficient for the evaluation level; students should reason about meaning, author purpose, and whether wording needs improvement. The formative rubric covers comparison of explicit/implicit meanings and reasons.

**Decision:** B1 and B2 are aligned. B2's comparison challenge is particularly consistent with the evaluation emphasis. B1 remains a focused explicit/implicit micro-challenge and should be treated as a prerequisite challenge rather than a complete replacement for the Activity 1.4 evaluation task.

### C — KM01-C1

Teacher Guide identifies Subbab C as **Merefleksikan Gagasan Berdasarkan Isi Surat Resmi** and Aktivitas 1.5 as reflecting on the writer's ideas. The guide explicitly describes reflection as including identifying important ideas, identifying strengths/weaknesses with reasons, connecting the writer's ideas to personal experience/knowledge, identifying changes in one's view, and identifying an idea to apply in real life. The formative task is an open-response reflection.

**Decision:** KM01-C1 is **aligned as a constrained preparatory decision challenge**, but it is not sufficient by itself to represent the full reflective competency. Before canonicalization, either (a) retain it explicitly as a micro-challenge with a reflection follow-up, or (b) revise it to include a second-stage reflective response if the renderer supports the required interaction. No renderer change is authorized yet.

### D — KM01-D1

Teacher Guide identifies Subbab D as **Menganalisis Struktur dan Penggunaan Bahasa pada Surat Resmi**. Aktivitas 1.6 asks learners to identify structural parts of an official circular letter. The formative rubric assesses identifying the structure/parts of excerpts from an official letter.

**Decision:** D1 is aligned as an original, constrained recognition challenge. Its wording asks for the function of a recipient/address component, which adds meaning/function reasoning without copying the source task.

### D — KM01-D2

Teacher Guide identifies Aktivitas 1.7 as analyzing language use in an official circular letter. Its formative criteria explicitly include identifying formal language, explaining whether language is formal, identifying clear/accurate language, and identifying standard language. The Teacher Guide therefore directly supports the approved design focus on formal register, standard words, and effective/clear sentences.

**Decision:** D2 is aligned and suitable as an original diagnostic repair challenge.

## 5. Originality boundary

The Teacher Guide is used only for competency/activity/assessment alignment and pedagogical evidence. No textbook question, answer option, example letter, dialogue, or distinctive expression is copied into the drafts.

## 6. Gate result

**Source identity:** PASS
**Student Book activity/page anchors:** PASS
**Teacher Guide activity/page anchors:** PASS for A–D
**Tingkat Lanjut contamination:** PASS — excluded
**Originality:** PASS initial
**Pedagogical alignment:** PASS with a scope note for C1
**Schema 1.1:** still requires materialization and structural validation
**Golden Dataset:** no promotion yet

## 7. Required next work

1. Update the six draft provenance blocks with exact Teacher Guide activity/page anchors.
2. Materialize schema-1.1 JSON.
3. Run schema/answer-shape/duplicate-ID/provenance/pedagogical/renderer QA.
4. Resolve the C1 scope note before final batch gate.
5. Only promote after every gate passes.
