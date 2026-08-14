# World 1 — Character Design Proposal v2

**Status:** APPROVED — user approval received 14 August 2026
**Phase:** Phase 3 — Game Design / Character Design
**World:** World 1 — Career Mission
**Prerequisites:** Visual Direction v1 APPROVED; World 1 Map / World Structure v1 APPROVED

## 1. Evidence

Two SVG files were uploaded by the user directly in the conversation and inspected as actual SVG source/rendered visuals:

- `untuk character.svg` — 704 × 1527 SVG; rendered visual shows an illustrated/anime-style male and female pair walking together in a contemporary residential street.
- `Grafik yang saya mau.svg` — 640 × 640 SVG; rendered visual shows a stylized school interior/corridor from an elevated top-down / 3-quarter/isometric-like camera, with students, classroom furniture, doors, wall displays, and strong perspective/depth.

The uploaded character reference is therefore the primary art-style reference for character appearance, while the uploaded environment reference is the primary camera/composition reference for gameplay presentation.

## 2. Canonical visual references

The project now provides canonical repository wrappers:

- `phase-3/visuals/karakter-fix.svg`
- `phase-3/visuals/desain-fix.svg`

These wrappers point to the original repository reference SVGs. They are canonical reference pointers, not standalone copied production art. The original source files must not be deleted until a true standalone copy is committed and verified.

## 3. Character direction — approved reference basis

The character visual language follows the user-provided reference rather than the previous assistant concept sheet:

- clean illustrated/anime-inspired character rendering;
- youthful Grade 12 student proportions;
- expressive but readable face;
- natural hair shapes;
- full-body readability;
- restrained contemporary styling;
- character pair demonstrates the intended male/female visual family.

The previous `world-1-character-design-v1.svg` remains an earlier exploration and is not the primary visual reference.

## 4. Costume adaptation — approved

### Male protagonist
- Grade 12 school uniform;
- school-appropriate shirt/top and long trousers;
- school shoes;
- optional school bag/backpack cue;
- retain the reference character's overall youthful silhouette and illustrated rendering language.

### Female protagonist
- Grade 12 school uniform;
- school-appropriate top;
- short school skirt consistent with the user's requested Japanese-style girls' school uniform reference;
- school shoes;
- optional school bag/backpack cue;
- retain the reference character's overall youthful silhouette and illustrated rendering language.

The project does not copy a real school's exact uniform identity unless a later documented decision explicitly selects one.

## 5. Camera / gameplay presentation — approved direction

The environment reference establishes the desired gameplay camera family: elevated top-down / 3-quarter perspective with visible floor plane, walls, room depth, shadows, and character orientation readable from above.

The approved direction is to:

- preserve the visual depth of the reference environment;
- keep the player character readable at small/mobile scale;
- support four primary movement directions plus diagonals where implementation supports it;
- maintain consistent character/world orientation;
- keep interactable objects visually legible;
- avoid a flat white quiz-page presentation once the visual gameplay phase is implemented.

Exact camera angle, zoom, tile scale, and sprite projection are implementation parameters to be validated in the Camera/Character Gameplay Specification before numeric locking.

## 6. Character gameplay views — approved requirements

The production character set should be prepared for:

- facing up/back;
- facing down/front;
- facing left;
- facing right;
- interaction/inspection pose;
- idle;
- walk cycle.

The reference full-body illustration is a style/identity anchor; it is not itself the final gameplay sprite sheet.

## 7. Approval scope

User explicitly approved on 14 August 2026:

1. Male and female school costume adaptation.
2. Camera direction based on the environment reference.
3. Character animation and gameplay-flow direction.
4. No requested changes to the character/design direction at this gate.

Approval supersedes v1 as the character visual direction and authorizes the next design step: **Camera/Character Gameplay Specification**. It does not authorize mass production of final sprites or final environment assets; those remain subject to production and visual QA.

## 8. Evidence / Implementation / Interpretation

**Evidence:** The uploaded SVGs were directly rendered and inspected. The character SVG establishes the character art language; the environment SVG establishes the desired elevated gameplay presentation. User explicitly approved the resulting costume, camera, animation, and gameplay direction.

**Implementation:** Canonical reference wrappers `karakter-fix.svg` and `desain-fix.svg` exist in the repository. No final gameplay sprite sheet, map asset pack, or runtime camera implementation is claimed complete by this document.

**Interpretation:** The strongest coherent direction is to preserve the user's chosen illustrated character style and adapt the costumes to Grade 12 school uniforms, while using the user's school-environment reference as the camera/composition basis.

## 9. Important repository handling rule

The original user-provided reference SVGs must remain until a future standalone canonical asset copy is successfully committed and verified. The fixed wrappers exist so the project has stable named canonical references even while the original large SVG content remains the source of truth.
