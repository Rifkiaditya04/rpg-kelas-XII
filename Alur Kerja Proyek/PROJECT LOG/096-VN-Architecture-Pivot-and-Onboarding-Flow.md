# PROJECT LOG 096 - VN Architecture Promotion & Final Dataset Integration

**Date:** 2026-09-15
**Status:** PROMOTED / APPROVED
**Component:** Visual Architecture & Onboarding State Machine

## 1. Visual Architecture Pivot (PROMOTED)
The project has formally pivoted from a 2D Top-Down Isometric RPG (walking characters, collision detection) to a **Premium Visual Novel (VN) format**, adhering strictly to **UI Reference 2**.
- **Reasoning:** Managing X,Y coordinates and collisions for hundreds of subjects is unscalable and detracts from the educational objective. A VN format allows rapid content injection while maintaining a highly polished presentation.
- **Implementation:** `world-1-rpg-v2.html` was completely rewritten. The `viewport` and `spritesheet` engines were discarded.
- **Design Layout:** Full-screen contextual background, large transparent `.png` NPC avatars standing on screen, and a modern glassmorphism dialog box at the bottom.

## 2. Dynamic Onboarding Flow (PROMOTED)
The user requested a richer, multi-stage onboarding sequence for New Players. The implemented and approved flow includes:
1. **Tutorial 0 (Vision & Mission):** Safira introduces the game.
2. **Tutorial 1 (Subject Selection):** Players choose between Bahasa Indonesia, Matematika, or Sosiologi. (None are locked initially).
3. **Tutorial 2 (Curriculum Intro):** NPC explains the Kurikulum Merdeka structure.
4. **Tutorial 3 (Practice Mode):** A dry run where XP and Accuracy are explicitly ignored.
5. **Tutorial 4 (Commitment):** Player commits to the subject, locking other options, transitioning the `state` to Main Game.

## 3. Final Canonical Dataset Integration (PROMOTED)
All Chapter 1 test/candidate datasets have been scrubbed from the `MISSIONS` array in `world-1-rpg-v2.html`. The engine now correctly points to the **Final Approved Canonical Datasets**:
- **Misi 1:** `phase-3/world-1-km-chapter-1-approved-content-batch-01-v1.1.json`
- **Misi 2:** `phase-3/world-1-km-chapter-1-approved-content-batch-02-e4-v1.1.json`
- **Misi 3:** `phase-3/world-1-km-chapter-1-f-g-canonical-v1.2-id.json`
- **Misi 4:** `phase-3/world-1-km-chapter-1-h-canonical-v1.0-id.json`

## 4. Next Actions
- Since Chapter 1 is 100% complete and fully integrated into a stable VN Engine, the project is clear to move to the next major scope: **Chapter 2 Content Production** or expansion to other subjects.
- Update `00-MASTER-CONTROL-v1.1.md` to reflect this promotion.
