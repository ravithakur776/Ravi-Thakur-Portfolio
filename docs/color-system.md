# Color System

## Color Philosophy

Color should behave like cinematic product lighting: neutral foundations, precise contrast, restrained accent energy, and clear state communication.

Why: the primary audience is evaluating maturity. A controlled color system communicates taste and engineering discipline.

Tradeoff: the palette avoids loud novelty. Differentiation must come from composition, typography, evidence, motion, and media direction.

## Palette Character

The system should feel:

- Premium neutral
- Minimal cinematic
- Slightly warm for humanity
- Slightly cool for technical credibility
- High contrast where it matters
- Quiet by default, decisive in states

It should not feel:

- Cyberpunk
- Gaming-inspired
- Neon-heavy
- Purple-blue gradient dominant
- Beige-only
- Blue SaaS generic
- Overly glassy

## Token Model

All future implementation should use semantic tokens rather than raw color values.

Why: semantic tokens allow dark theme, light theme, high contrast, hover, pressed, disabled, and future brand adjustments without rewriting component logic.

Tradeoff: token naming requires more thinking up front.

## Core Color Tokens

| Token                      | Purpose                                 | Light Theme Intent               | Dark Theme Intent                    | Why                                    | Tradeoff                                                 |
| -------------------------- | --------------------------------------- | -------------------------------- | ------------------------------------ | -------------------------------------- | -------------------------------------------------------- |
| `color.primary`            | Primary text and decisive emphasis      | Near-black cool neutral          | Warm off-white                       | Maximizes readability and authority    | Not a bright brand color, so accents must be disciplined |
| `color.secondary`          | Secondary text and softer emphasis      | Muted neutral                    | Muted warm gray                      | Creates hierarchy without visual noise | Must be contrast-tested                                  |
| `color.tertiary`           | Metadata, timestamps, quiet labels      | Soft gray                        | Soft gray-blue                       | Supports scanning without competing    | Easy to make too faint                                   |
| `color.canvas`             | Base page background                    | Warm off-white                   | Deep neutral charcoal                | Establishes theme mood                 | Dark canvas requires careful text contrast               |
| `color.surface`            | Standard panels and content surfaces    | Clean warm white                 | Elevated charcoal                    | Supports product UI density            | Overuse can create card-heavy layouts                    |
| `color.surface-elevated`   | Dialogs, popovers, key modules          | Slightly brighter than surface   | Slightly lighter than dark surface   | Creates depth                          | Needs border support in dark mode                        |
| `color.surface-inset`      | Code blocks, data wells, recessed areas | Soft neutral wash                | Deeper charcoal                      | Distinguishes contained evidence       | Can feel heavy if overused                               |
| `color.surface-inverse`    | Inverted callouts or contrast bands     | Deep neutral                     | Warm off-white                       | Enables deliberate contrast moments    | Should be rare                                           |
| `color.glass`              | Translucent overlays                    | Frosted neutral with low opacity | Smoky translucent neutral            | Creates depth in nav/media overlays    | Must not carry long text                                 |
| `color.border-subtle`      | Quiet separators                        | Low-contrast neutral             | Low-opacity light line               | Adds structure without boxes           | May disappear on poor displays                           |
| `color.border`             | Standard borders                        | Clear neutral line               | Visible translucent line             | Defines modules and inputs             | Too many borders feel mechanical                         |
| `color.border-strong`      | Important separation                    | Stronger neutral                 | Stronger light line                  | Supports focus zones                   | Can become visually busy                                 |
| `color.border-interactive` | Interactive affordance                  | Accent-tinted neutral            | Accent-tinted light line             | Signals interactivity                  | Must not rely on color alone                             |
| `color.accent`             | Brand highlight, selected states        | Controlled teal-cyan             | Luminous but restrained teal         | Technical clarity without generic blue | Overuse feels cold                                       |
| `color.accent-soft`        | Accent backgrounds                      | Pale teal wash                   | Deep teal wash                       | Adds energy without glare              | Can reduce contrast if too light                         |
| `color.accent-strong`      | Rare high emphasis                      | Saturated teal                   | Brighter teal                        | Creates memorable focus                | Reserve for moments that matter                          |
| `color.success`            | Positive status                         | Deep refined green               | Clear soft green                     | Communicates completion                | Avoid cartoon green                                      |
| `color.warning`            | Caution and incomplete states           | Deep amber                       | Warm amber                           | Invites attention without panic        | Yellow needs contrast care                               |
| `color.danger`             | Errors and destructive states           | Deep red                         | Clear red                            | Must be immediately recognizable       | Overuse weakens meaning                                  |
| `color.info`               | Neutral notices and guidance            | Blue-teal                        | Soft blue-teal                       | Separates information from warning     | Must not compete with accent                             |
| `color.overlay`            | Scrims and media readability            | Neutral dark overlay             | Deep black overlay                   | Creates focus and contrast             | Too much opacity flattens media                          |
| `color.noise`              | Atmospheric texture                     | Very low-opacity neutral grain   | Very low-opacity light/dark grain    | Prevents banding and sterility         | Can hurt compression and readability                     |
| `color.shadow`             | Elevation                               | Soft neutral shadow              | Dense transparent shadow plus border | Communicates layering                  | Shadows alone fail in dark mode                          |

## Interaction Tokens

| State Token      | Purpose              | Behavior                                                | Why                               | Tradeoff                                   |
| ---------------- | -------------------- | ------------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| `state.hover`    | Confirm affordance   | Slight contrast shift, clearer border, subtle elevation | Hover should confirm, not perform | Touch devices need visible equivalents     |
| `state.pressed`  | Tactile response     | Slight inward brightness/elevation change               | Pressing should feel grounded     | Too much movement feels playful            |
| `state.focus`    | Keyboard visibility  | High-contrast ring plus optional offset                 | Accessibility and confidence      | Visible rings challenge minimal aesthetics |
| `state.disabled` | Inactive controls    | Reduced contrast, no elevation, preserved readability   | Clarifies unavailable actions     | Can become too faint                       |
| `state.selected` | Current item         | Accent, border, or surface shift                        | Supports orientation              | Must also include non-color cues           |
| `state.loading`  | Pending system state | Muted surface, skeleton, or progress affordance         | Communicates work in progress     | Fake progress is prohibited                |

## Theme Requirements

### Dark Theme

Dark theme is the flagship cinematic mode.

Why: it supports immersive media, product launch energy, and high-impact contrast.

Tradeoff: long-form reading needs careful surface relief and generous line height.

### Light Theme

Light theme is the editorial clarity mode.

Why: it supports case studies, blog posts, documentation-like content, and reading in bright environments.

Tradeoff: light mode can feel generic unless spacing, type, and accent restraint are strong.

### High Contrast

High contrast mode must increase text, border, focus, and control clarity while reducing atmospheric effects.

Why: legibility takes priority over cinematic softness.

Tradeoff: some subtle brand effects will be flattened.

### Reduced Motion Support

Reduced motion is not a color theme, but color must support replacement states when motion is removed.

Rules:

- Use color and layout to show section changes that animation would otherwise reveal.
- Do not rely on animated gradients to communicate state.
- Pause or remove flashing and shifting color effects.

Why: users with reduced-motion preferences still need hierarchy and feedback.

Tradeoff: static states require stronger visual hierarchy.

## Glass Rules

Glass is allowed only for rare overlays, navigation layers, media controls, or spatial transitions.

Rules:

- Never put long-form text on glass.
- Always pair glass with a border or backdrop control.
- Disable or flatten glass in high contrast mode.
- Avoid stacked glass layers.

Why: restrained glass can create premium depth; excessive glass feels trendy and harms accessibility.

Tradeoff: fewer translucent surfaces means depth must come from spacing, borders, and shadow.

## Noise Rules

Noise should be nearly invisible and used only on large atmospheric surfaces.

Why: subtle noise reduces banding and adds cinematic texture.

Tradeoff: noise increases asset or rendering complexity and can hurt compression.

Never use noise behind dense body text, code, or forms.

## Shadow Rules

Shadows should feel like depth, not decoration.

Rules:

- Light mode can use soft, wide shadows.
- Dark mode must combine shadow with borders and surface contrast.
- Dialogs need clearer elevation than cards.
- Hover shadows must be subtle.

Why: depth supports hierarchy and focus.

Tradeoff: excessive shadows create visual clutter and reduce premium restraint.
