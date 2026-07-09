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

The landing experience lives in `src/features/experience`.

Why: landing behavior is feature-specific and should not leak into the global shell.

Tradeoff: the homepage imports a feature module, but the route remains thin and server-first.

## Feature Structure

```txt
src/features/experience/
├── atmosphere/
├── experience/
├── hero/
├── intro-video/
├── loading/
├── navigation/
├── orchestrator/
├── pointer/
├── scroll-indicator/
└── transition/
```

Why: the first impression has multiple disciplines: loading, media, motion, navigation, pointer behavior, and visual atmosphere. Splitting them prevents one large hero file from becoming the product's dumping ground.

Tradeoff: there are more files, but each file has a narrow reason to exist.

## Sequence

1. Initial black loading layer.
2. Critical preload readiness or graceful timeout.
3. Intro video architecture layer.
4. Invisible transition via opacity, blur, mask, and scale.
5. Hero reveal.
6. Floating navigation reveal on interaction.
7. Pointer atmosphere activation.
8. Scroll indicator reveal.

Why: the sequence creates a premium first impression without building deeper content.

Tradeoff: the intro is time-based until a real video asset exists. A skip control is included for user control.

## Media Strategy

Video sources, poster, and fallback image are declared in `experience.config.ts`, but no real media is shipped yet.

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
- Scroll-aware floating navigation
- Mobile drawer architecture

Why: motion should communicate pacing and state, not decorate the page.

Tradeoff: the page will become more cinematic only after final media exists.

## Accessibility

- Semantic `h1` is present.
- Intro can be skipped.
- Reduced motion bypasses the long intro.
- Low-bandwidth users bypass the long intro.
- Mobile navigation has a drawer architecture.
- Floating nav supports keyboard focus.
- Theme toggle remains accessible.
- Scroll indicator is decorative.

## Performance

- No heavy Three.js is shipped.
- No video is requested until real sources exist.
- Pointer interaction updates CSS variables only.
- Route remains statically generated.
- LCP candidate is text, not heavy media.
- Loader waits for font/media/scene preparation but has a timeout.

## Future Upgrade Path

- Replace the atmosphere scene placeholder with a lazy-loaded React Three Fiber scene.
- Add real video sources and poster to `experience.config.ts`.
- Connect Download Resume when the final PDF exists.
- Connect primary CTA to the work route when that route is built.
- Add visual regression and keyboard Playwright coverage.
