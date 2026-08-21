# PROJECT LOG 063 — World 1 KM Chapter 1 — F–G Production Gate

**Status:** GATE / PRE-DRAFT ANALYSIS
**Date:** 2026-08-21
**Phase:** Phase 3 — Content / Gameplay Rebaseline

## Protocol re-sync

Before this work session, the active Master Control, Detailed Competency → Challenge Design v1, Batch 02 E Challenge Ledger, E4 final promotion record, and recent runtime QA/promotion records were re-read. This session therefore does not reopen E1–E4 and does not alter any promoted artifact.

## Evidence

The approved Detailed Competency → Challenge Design defines Cluster 4 (F–G) as:

- **F:** produce an official letter — standard wording, effective sentences, formal purpose/audience, coherent organization.
- **G:** respond through electronic mail — understand purpose, adapt response to recipient/context, use formal wording, preserve relevant information, and respect the electronic-mail channel.

The design explicitly requires a renderer gate before production wording. It does not authorize a free-text composition renderer and says the first lane should test whether guided selection/reconstruction can validly measure the competency. If not, a separate renderer proposal is required.

## Current decision

**Do not draft F/G production questions yet.**

Reason: the next safe step is to prove that the current data-driven renderer can represent a meaningful constrained production task without reducing F/G into a superficial recall MCQ.

## Proposed first controlled lane

### F — Guided reconstruction

Synthetic QA task only:
- assemble/select components of a fictional official letter;
- preserve recipient, purpose, and formal register;
- use existing supported interaction types only;
- no production academic content;
- no Golden Dataset changes.

### G — Audience-purpose adaptation

Synthetic QA task only:
- receive a fictional official email context;
- select the response structure/content that preserves the request and formal purpose;
- verify that the interaction measures adaptation rather than simple vocabulary recall.

## Renderer compatibility gate

Candidate existing interaction types:
- `mcq`
- `multi_select`
- `ordering`
- `evidence_matching`
- `document_inspection` where runtime support is proven.

A synthetic browser fixture must be used before production drafting. The fixture must test the actual renderer and must reject materially incorrect component order/content combinations.

## No renderer modification yet

If guided reconstruction/adaptation can validly represent the competency, proceed with original F/G content drafting using the existing renderer.

If it cannot, stop this lane and create a separate renderer-gap proposal covering:
- competency justification;
- interaction contract;
- scoring/rubric;
- accessibility;
- QA strategy;
- migration/compatibility impact.

No renderer change is authorized by this log.

## Preservation boundary

- Golden Dataset: unchanged.
- KM02-E1–E4: unchanged and promoted.
- Historical K3/legacy artifacts: retained.
- Existing RPG/mission/progression architecture: retained.
- Learning Evidence contract: retained.
- Training Room: retained.
- NPC presentation work: unchanged.

## Result

F–G is **not yet a content-drafting lane**. It is now a renderer-capability gate, exactly as required by the approved design baseline.

## Next action

Create and run a synthetic **F–G constrained-production renderer capability QA** through the actual renderer. Only after runtime PASS should original F/G content drafting begin.
