# Responsive System

## Responsive Philosophy

The platform should feel designed for every viewport, not merely compressed. Desktop can be cinematic; mobile must be direct, fast, readable, and conversion-aware.

Why: recruiters and founders may arrive from a phone, while deeper evaluation may happen on desktop. Both experiences must feel premium.

Tradeoff: expressive layouts need breakpoint-specific art direction.

## Viewport Strategy

| Context      | Primary Goal                         | Design Behavior                                        | Why                              | Tradeoff                           |
| ------------ | ------------------------------------ | ------------------------------------------------------ | -------------------------------- | ---------------------------------- |
| Small mobile | Fast trust signal                    | Single-column, clear hierarchy, low media weight       | Users skim quickly               | Less cinematic                     |
| Large mobile | Direct exploration                   | Larger media, touch-safe controls, concise sections    | Most mobile traffic lives here   | Still limited by CPU and bandwidth |
| Tablet       | Balanced reading and visual richness | Medium-density grids, touch plus keyboard support      | Tablet is not just small desktop | Requires unique layouts            |
| Laptop       | Main evaluation surface              | Strong grid, readable case studies, product-like proof | Common work context              | Must fit constrained height        |
| Desktop      | Flagship brand canvas                | Cinematic pacing, richer media, controlled motion      | Best space for premium identity  | Effects need fallbacks             |
| Ultra-wide   | Immersive atmosphere                 | Capped content plus extended media/atmosphere          | Prevents stretched layouts       | Requires background planning       |

## Breakpoint Intent

### Mobile

Priorities:

- Immediate identity
- Clear value proposition
- Fast route performance
- Touch-safe controls
- Minimal nonessential motion
- Strong content order

Why: mobile users often decide whether to continue within seconds.

Tradeoff: some cinematic sequences must collapse into static or shorter forms.

### Tablet

Priorities:

- Comfortable reading
- Medium-density evidence layouts
- Touch-friendly interaction
- Reduced hover dependency

Why: tablets mix reading and exploration.

Tradeoff: tablet cannot inherit desktop blindly.

### Desktop

Priorities:

- Full narrative pacing
- Richer media
- Strong grid composition
- More sophisticated transitions
- Dense proof where useful

Why: desktop is the flagship evaluation environment.

Tradeoff: desktop-only features must not define the entire product value.

### Ultra-Wide

Priorities:

- Preserve readable measures.
- Use extra space for atmosphere, diagrams, or media.
- Keep content anchored.
- Avoid stretching text or cards.

Why: ultra-wide screens expose weak layout systems.

Tradeoff: extra art direction is needed.

## Layout Rules

- Text measure must remain readable.
- Media may expand wider than text.
- Full-bleed moments must preserve safe content zones.
- Dense product surfaces may use wider grids.
- Critical actions must not rely on hover.
- Source order should match reading order.
- Sticky elements must not consume too much mobile viewport height.

Why: responsive design is content strategy plus interaction strategy.

Tradeoff: some visual reorderings should be rejected for accessibility.

## Touch Devices

Rules:

- Minimum practical touch target: 44px.
- Hover-only reveals must have tap or always-visible equivalents.
- Drag interactions must be optional or clearly indicated.
- Custom cursor behavior is disabled.
- Media controls must be reachable and readable.

Why: touch devices require explicit affordances.

Tradeoff: some subtle desktop interactions become more visible on mobile.

## Keyboard Navigation

Rules:

- Every interactive element must be reachable.
- Focus order follows visual and semantic order.
- Focus states are always visible.
- Dialogs trap focus.
- Escape closes dismissible overlays.
- Skip links should exist once navigation is implemented.

Why: keyboard support is a product quality signal and accessibility requirement.

Tradeoff: custom interaction models need more design and engineering effort.

## Reduced Motion Across Viewports

Reduced motion is independent of screen size.

Rules:

- Disable parallax everywhere.
- Replace scroll-triggered entrances with static content.
- Stop nonessential video and 3D loops.
- Keep navigation instant.
- Preserve all content.

Why: users should not receive a degraded site for expressing a preference.

Tradeoff: reduced-motion design needs dedicated review, not only animation removal.

## Performance by Device

Mobile:

- Lowest media weight.
- No nonessential 3D.
- Reduced video complexity.
- Lazy load aggressively.
- Avoid CPU-heavy scroll listeners.

Tablet:

- Use medium assets.
- Avoid desktop-grade 3D by default.
- Respect battery and touch behavior.

Desktop:

- Richer assets allowed.
- Maintain 60 FPS.
- Defer heavy scenes until visible.

Ultra-wide:

- Do not load larger assets unless they are visibly needed.

Why: performance is responsive design.

Tradeoff: asset pipelines become more complex.

## Accessibility Across Breakpoints

Responsive layouts must preserve:

- Semantic order
- Heading hierarchy
- Landmark structure
- Alt text relevance
- Form labels
- Error messaging
- Contrast
- Zoom support
- Reading order

Why: layout rearrangement often breaks accessibility.

Tradeoff: some desktop visual drama may need simpler mobile structure.

## Testing Matrix

Every major visual system change should be reviewed at:

- Small mobile
- Large mobile
- Tablet
- Laptop
- Desktop
- Ultra-wide
- Dark theme
- Light theme
- High contrast
- Reduced motion
- Keyboard-only navigation
- Touch-only interaction

Why: premium quality is consistency under constraint.

Tradeoff: review time increases, but regressions decrease.
