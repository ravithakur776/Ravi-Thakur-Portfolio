# Theme System

## Theme Philosophy

Themes are not skins. They are carefully tuned expressions of the same brand semantics across environment, accessibility, and content needs.

The platform must support dark, light, high contrast, and reduced motion without feeling fragmented.

Why: premium platforms remain intentional under constraint.

Tradeoff: theme support increases design, engineering, and QA complexity.

## Theme Modes

### Dark Theme

Dark is the flagship cinematic mode.

Use for:

- Home experience
- Immersive storytelling
- Video and 3D
- AI features
- Product launch moments

Why: dark mode supports atmosphere, media contrast, and cinematic focus.

Tradeoff: long reading needs carefully tuned surfaces, contrast, and line height.

### Light Theme

Light is the editorial clarity mode.

Use for:

- Blog posts
- Long case studies
- Documentation-style content
- Printable or shared content
- Dense evaluation surfaces where clarity beats atmosphere

Why: light surfaces support sustained reading and professional review.

Tradeoff: light mode can feel generic unless typography, spacing, and accent control are strong.

### High Contrast Theme

High contrast is an accessibility-first expression.

Use for:

- Stronger text contrast
- Stronger borders
- Clearer focus rings
- Reduced atmospheric effects
- Flattened glass

Why: readability and control visibility take priority over subtlety.

Tradeoff: some cinematic softness is intentionally removed.

### Reduced Motion Theme

Reduced motion is a behavior theme, not only an animation setting.

Use for:

- Static content reveals
- No parallax
- No nonessential looping motion
- Simplified transitions
- Static 3D/video fallbacks

Why: users who request reduced motion need equivalent meaning and control.

Tradeoff: cinematic expression becomes quieter.

## Token Architecture

Themes should be built from semantic tokens:

- Color
- Typography
- Spacing
- Radius
- Shadow
- Border
- Motion
- Z-index
- Media overlays
- State

Why: semantic tokens allow the brand to evolve without rewriting component logic.

Tradeoff: token governance is required.

## Theme Token Rules

Rules:

- Tokens describe purpose, not appearance.
- Raw values should not appear in component implementation once tokens exist.
- Interaction states must be defined per theme.
- High contrast may override subtle tokens.
- Reduced motion may override motion and media behavior.

Why: purpose-based tokens scale better than visual tokens.

Tradeoff: token naming takes more care.

## Theme Switching

Theme switching should be:

- Optional
- Persistent
- Respectful of system preference
- Free from layout shift
- Free from bright flashes during load

Why: theme control should feel stable and respectful.

Tradeoff: persistence requires careful hydration and rendering strategy during implementation.

## Content-Aware Themes

Some content may prefer a theme:

- Cinematic project intro: dark preferred
- Long case study: light or adaptive
- AI chat: dark or neutral product mode
- Technical docs: light preferred
- Media gallery: dark preferred

Why: theme should support content intent.

Tradeoff: too much per-section switching can feel fragmented. Theme shifts must be rare and deliberate.

## Glass and Transparency

Glass must be theme-aware.

Dark:

- Subtle depth
- Low opacity
- Strong border

Light:

- Very restrained
- Avoid muddy whites
- Prefer solid surfaces for reading

High contrast:

- Remove or flatten glass

Why: transparency often fails when copied mechanically across themes.

Tradeoff: glass cannot be the primary surface system.

## Media Overlays

Media overlays must adapt by theme:

- Dark: preserve mood while ensuring text contrast.
- Light: avoid gray wash; use precise gradients or framed media.
- High contrast: prioritize legibility over atmosphere.
- Reduced motion: prefer static poster or still frame.

Why: media is unpredictable and needs protective rules.

Tradeoff: some images and videos require manual art direction.

## State Themes

Each theme must define:

- Hover
- Pressed
- Focus
- Disabled
- Selected
- Loading
- Error
- Success
- Warning
- Info

Why: states are where design systems often break.

Tradeoff: this increases token count but improves reliability.

## Theme QA

Every major surface must be reviewed in:

- Dark
- Light
- High contrast
- Reduced motion
- Mobile dark
- Mobile light
- Keyboard navigation
- 200 percent zoom

Why: theme bugs are contextual.

Tradeoff: more review passes, fewer production surprises.

## Never Do

- Do not invert colors mechanically and call it a theme.
- Do not use glass as the primary surface.
- Do not make high contrast visually broken.
- Do not make reduced motion feel degraded.
- Do not allow theme changes to create layout shift.
- Do not use theme-specific content that changes meaning.
