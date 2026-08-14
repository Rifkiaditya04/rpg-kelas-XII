# 004 — World 1 Character & Visual Reference Fix

**Date:** 2026-08-14
**Status:** Evidence captured; v2 proposal pending approval

## Evidence

User uploaded two SVG references directly in the conversation and they were successfully read and rendered:

1. `untuk character.svg` — 704 × 1527. The rendered image shows an illustrated/anime-style male and female pair walking together in a contemporary residential street.
2. `Grafik yang saya mau.svg` — 640 × 640. The rendered image shows a stylized school interior/corridor using an elevated top-down / 3-quarter/isometric-like presentation.

## Implementation

Canonical repository reference wrappers were added:

- `phase-3/visuals/karakter-fix.svg`
- `phase-3/visuals/desain-fix.svg`

They are intentionally wrappers pointing to the original repository SVGs. They are not claimed to be standalone copies of the large source files.

A revised character proposal was added:

- `phase-3/world-1-character-design-proposal-v2.md`

## Interpretation

The user's visual references supersede the earlier assistant-generated concept sheet as the primary character/environment visual direction. The character art language should be preserved while costumes are adapted to Grade 12 school uniforms. The environment reference becomes the camera/composition basis.

Male costume direction: school-appropriate shirt/top, long trousers, school shoes, optional school bag/backpack.

Female costume direction: school-appropriate top, short school skirt consistent with the user's requested Japanese-style girls' school uniform reference, school shoes, optional school bag/backpack.

## Repository safety

Do not delete the original large SVG references until a true standalone fixed copy has been committed and verified. The current fixed SVGs are stable named reference wrappers.

## Gate

Character Design v2 remains **PENDING USER APPROVAL**. No final sprite production is authorized by this log.
