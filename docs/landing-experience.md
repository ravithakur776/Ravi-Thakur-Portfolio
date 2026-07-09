# Landing Experience

## Scope

This milestone implements only the first-fold landing experience.

Included:

- Premium black-screen loading sequence
- AI intro video integration architecture
- Cinematic transition layer
- Responsive hero
- Floating landing navigation
- Mouse-driven ambient atmosphere
- Scroll indicator
- Reduced-motion and low-bandwidth behavior
- Future Three.js replacement slot

Not included:

- About
- Projects
- Case studies
- Blog
- Contact
- Real intro video asset
- Real hero image
- Real resume asset
- Heavy Three.js scene
- Below-fold sections

## Architecture

The landing experience lives in `src/features/landing`.

Why: landing behavior is feature-specific and should not leak into the global shell.

Tradeoff: the homepage imports a feature module, but the route remains thin and server-first.

## Sequence

1. Initial black loading layer.
2. Intro video architecture layer.
3. Invisible transition via opacity, blur, and scale.
4. Hero reveal.
5. Floating navigation reveal on interaction.
6. Scroll indicator reveal.

Why: the sequence creates a premium first impression without building deeper content.

Tradeoff: the intro is time-based until a real video asset exists. A skip control is included for user control.

## Media Strategy

Video sources, poster, and fallback image are declared in `landing.config.ts`, but no real media is shipped yet.

Why: this prepares the integration without inventing assets.

Tradeoff: the current intro is an atmospheric architecture layer, not a finished film.

## Motion Strategy

Motion is intentionally restrained:

- Loader line
- Intro scan
- Hero fade/blur/translate
- Nav fade
- Scroll indicator pulse
- Pointer atmosphere

Why: motion should communicate pacing and state, not decorate the page.

Tradeoff: the page will become more cinematic only after final media exists.

## Accessibility

- Semantic `h1` is present.
- Intro can be skipped.
- Reduced motion bypasses the long intro.
- Low-bandwidth users bypass the long intro.
- Floating nav supports keyboard focus.
- Theme toggle remains accessible.
- Scroll indicator is decorative.

## Performance

- No heavy Three.js is shipped.
- No video is requested until real sources exist.
- Pointer interaction updates CSS variables only.
- Route remains statically generated.
- LCP candidate is text, not heavy media.

## Future Upgrade Path

- Replace `LandingScenePlaceholder` with a lazy-loaded React Three Fiber scene.
- Add real video sources and poster to `landing.config.ts`.
- Connect Download Resume when the final PDF exists.
- Connect primary CTA to the work route when that route is built.
- Add visual regression and keyboard Playwright coverage.
