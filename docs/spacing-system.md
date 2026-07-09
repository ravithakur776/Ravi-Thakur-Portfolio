# Spacing System

## Spacing Philosophy

Spacing is the hidden signature of the brand. Ravi's platform should feel deliberate, calm, and engineered. The system uses an 8pt foundation with optical 4px adjustments only when alignment, typography, or icon balance requires it.

Why: consistent spacing creates subconscious trust. It makes expressive layouts feel authored instead of improvised.

Tradeoff: strict spacing can feel rigid. The system allows expressive composition, but every exception must still be explainable.

## Base Unit

Primary unit: 8px.

Optical unit: 4px.

Why: 8pt spacing scales well across product UI, editorial content, responsive grids, and motion offsets.

Tradeoff: some typography and icon alignments require half-step adjustment.

## Spacing Scale

| Token       | Value | Use                           | Why                                 | Tradeoff                           |
| ----------- | ----- | ----------------------------- | ----------------------------------- | ---------------------------------- |
| `space.0`   | 0px   | Flush alignment               | Removes unintended gaps             | Can feel cramped if overused       |
| `space.0.5` | 4px   | Optical nudge                 | Fine visual correction              | Should not become layout default   |
| `space.1`   | 8px   | Tight internal gaps           | Compact grouping                    | Too tight for readable content     |
| `space.2`   | 16px  | Control groups                | Common UI rhythm                    | Needs larger spacing for narrative |
| `space.3`   | 24px  | Standard content grouping     | Comfortable module rhythm           | Can feel generic if always used    |
| `space.4`   | 32px  | Module separation             | Clear hierarchy                     | May be too large inside dense UI   |
| `space.5`   | 40px  | Intermediate editorial rhythm | Smooth transition between 32 and 48 | Use sparingly                      |
| `space.6`   | 48px  | Large module spacing          | Premium breathing room              | Can create long mobile pages       |
| `space.8`   | 64px  | Compact section spacing       | Efficient narrative separation      | May be too tight for hero moments  |
| `space.12`  | 96px  | Standard section spacing      | Strong editorial pacing             | Needs mobile reduction             |
| `space.16`  | 128px | Cinematic section spacing     | High-value narrative pause          | Must be earned by content          |
| `space.24`  | 192px | Major transition              | Creates launch-like drama           | Dangerous on mobile                |

## Container System

| Container  | Purpose                              | Desktop Intent                            | Why                              | Tradeoff                          |
| ---------- | ------------------------------------ | ----------------------------------------- | -------------------------------- | --------------------------------- |
| Reading    | Blog, case study prose               | Narrow measure                            | Sustained reading comfort        | Less cinematic                    |
| Product    | Cards, data, AI, evaluation modules  | Medium-wide                               | Supports scanning and comparison | Can feel dense                    |
| Cinematic  | Hero, immersive media, brand moments | Wide with safe margins                    | Creates scale and atmosphere     | Requires stronger art direction   |
| Full Bleed | Video, 3D, large imagery             | Edge-to-edge media with protected content | Creates premium impact           | Text must not sit on unsafe media |
| Ultra-Wide | Large screens                        | Capped content plus extended atmosphere   | Prevents content drifting        | Requires background planning      |

## Margins

Desktop:

- Use generous margins for narrative sections.
- Keep dense product modules aligned to the grid.
- Avoid edge-to-edge text.

Tablet:

- Reduce section spacing before reducing content clarity.
- Preserve touch-safe interaction spacing.

Mobile:

- Use comfortable side margins.
- Avoid "compressed luxury"; mobile should feel edited, not squeezed.

Ultra-wide:

- Cap readable and product content.
- Use extra width for atmosphere, media, diagrams, or negative space.

Why: margins define quality and readability across devices.

Tradeoff: each viewport requires intentional layout behavior.

## Section Spacing

Section spacing communicates pace:

- Identity and hero moments: 128-192px desktop, reduced on mobile
- Narrative transitions: 96-128px
- Evidence sections: 64-96px
- Product UI groups: 24-48px
- Forms and conversion flows: focused 32-64px

Why: visitors should feel when to absorb, compare, and act.

Tradeoff: inconsistent section spacing creates accidental rhythm.

## Grid System

Desktop:

- 12 columns for major layout.
- 4 or 6 columns for product modules.
- Asymmetry allowed when column relationships are clear.

Tablet:

- 6 or 8 columns depending on density.
- Avoid simply shrinking desktop layouts.

Mobile:

- 4-column structure or single-column flow.
- Preserve source order and semantic reading.

Ultra-wide:

- Content remains capped.
- Atmosphere and media can extend.

Why: grids allow expressive composition without chaos.

Tradeoff: immersive media may need exceptions, but exceptions must be documented.

## Radius System

| Token      | Intent | Use                                | Why                            | Tradeoff                        |
| ---------- | ------ | ---------------------------------- | ------------------------------ | ------------------------------- |
| `radius.0` | Sharp  | Full-bleed media, structural lines | Keeps cinematic surfaces clean | Can feel severe                 |
| `radius.1` | 4px    | Tiny controls, tags                | Precise and product-like       | Less soft                       |
| `radius.2` | 8px    | Buttons, inputs, small cards       | Premium but not playful        | Must stay consistent            |
| `radius.3` | 12px   | Dialogs, elevated panels           | Softens focused surfaces       | Too much can feel template-like |
| `radius.4` | 16px   | Large media frames only            | Adds editorial polish          | Use rarely                      |

Rule: do not round everything.

Why: excessive roundness makes the brand feel casual and generic.

Tradeoff: sharper surfaces need warmth from type, spacing, and content.

## Elevation System

Elevation is created through surface contrast, border, shadow, and sometimes overlay.

| Level | Purpose                    | Behavior                             | Why                                         |
| ----- | -------------------------- | ------------------------------------ | ------------------------------------------- |
| 0     | Page canvas                | No shadow                            | Default reading plane                       |
| 1     | Basic module               | Subtle border or surface shift       | Separates content quietly                   |
| 2     | Interactive card           | Border plus faint shadow             | Signals clickability                        |
| 3     | Sticky or floating control | Stronger shadow and clear border     | Maintains hierarchy while scrolling         |
| 4     | Dialog or modal            | Overlay plus elevated surface        | Focuses user attention                      |
| 5     | Critical system layer      | Highest contrast and focus treatment | Prevents important states from being missed |

Tradeoff: dark themes need borders because shadows alone are not enough.

## Z-Index Scale

| Layer    | Purpose                            |
| -------- | ---------------------------------- |
| Base     | Normal content                     |
| Raised   | Cards and local overlays           |
| Sticky   | Navigation and persistent controls |
| Floating | Toolbars, media controls           |
| Overlay  | Page scrims and drawers            |
| Dialog   | Modals and command surfaces        |
| Toast    | Temporary system messages          |
| Critical | Blocking alerts                    |

Why: a documented layering model prevents z-index escalation.

Tradeoff: new interaction models must map to the scale instead of inventing values.

## Density Modes

### Editorial Density

Use for storytelling, introductions, reflections, and brand moments.

Why: editorial density gives ideas room to land.

Tradeoff: too much editorial density slows scanning.

### Product Density

Use for project comparisons, AI tools, timelines, metrics, and forms.

Why: product density helps visitors evaluate quickly.

Tradeoff: too much density reduces premium atmosphere.

## Accessibility

Spacing must support:

- 44px minimum touch targets where practical
- Visible focus rings
- Text zoom
- Keyboard navigation
- Dialog focus containment
- Reduced-motion layouts where animated transitions become static

Why: spacing is part of usability, not decoration.

Tradeoff: ultra-tight visual compositions may need to expand.
