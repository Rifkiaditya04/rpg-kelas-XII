# PROJECT LOG 086 - VN Architecture Pivot & Rich Onboarding Flow

**Date:** 2026-09-11
**Status:** DRAFT / PROPOSED
**Component:** Visual Architecture & Onboarding State Machine

## 1. Visual Architecture Pivot (Approved by User)
The project has formally pivoted from a 2D Top-Down Isometric RPG (walking characters, collision detection) to a **Premium Visual Novel (VN) format**, adhering strictly to **UI Reference 2**.
- **Reasoning:** Managing X,Y coordinates and collisions for hundreds of subjects is unscalable and detracts from the educational objective. A VN format allows rapid content injection while maintaining a highly polished presentation.
- **Implementation:** `world-1-rpg-v2.html` was rewritten. The `viewport` and `spritesheet` engines were replaced with a static blurred background and a central HD dialog box system.

## 2. Dynamic Onboarding Flow (User Request)
The user requested a richer, multi-stage onboarding sequence for New Players rather than a simple 1-click start. The flow must now include:

1. **Vision & Mission Greeting:** NPC introduces the game as an educational bridge.
2. **Subject Selection:** Player is presented with a list of subjects (e.g., Bahasa Indonesia).
3. **Curriculum Intro:** Upon selecting a subject, the NPC explains the Kurikulum Merdeka structure (Pembekalan, Contoh Terbimbing, Practice).
4. **Practice Mode (Dry Run):** The player attempts a Practice Mission. **CRITICAL:** This mission awards 0 XP, does not increment "Mission Complete", and does not track Learning Accuracy.
5. **Post-Practice Branching:** NPC asks whether to continue with this subject or switch.
6. **Commitment (Real Mission 1):** If the player continues, other subjects are locked, and the real Chapter 1 / Mission 1 begins, where XP, Mission Complete, and Accuracy are officially tracked.

## 3. Visual Polish
- The NPC Avatar box must not have a plain gray background. It must have contextual backgrounds (e.g., classroom, library, teacher's desk) layered behind the NPC portrait.

## 4. Next Actions
- Draft the technical Implementation Plan for this complex State Machine.
- Await user approval on the Implementation Plan before modifying `world-1-rpg-v2.html`.
- Update Master Control v1.1 upon successful implementation of the onboarding flow.
