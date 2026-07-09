# Performance, SEO, Media, and 3D

## Purpose

This document defines visual performance rules for the future media-heavy and immersive layers of Ravi Thakur's platform. It covers performance targets, Three.js, video, image strategy, SEO, metadata, and structured data.

Why: a premium site must feel fast, stable, and intentional even when it becomes visually ambitious.

Tradeoff: performance limits constrain some creative ideas. That constraint protects conversion.

## Performance Targets

Targets:

- Lighthouse 95+ for performance, accessibility, best practices, and SEO
- 60 FPS for interactions and scrolling
- Low CPU usage during idle
- Minimal layout shift
- Fast first contentful paint
- Lazy loading for noncritical media
- No heavy libraries on routes that do not use them

Why: hiring audiences will not wait for art direction to finish loading.

Tradeoff: immersive sections must be progressively enhanced.

## Asset Strategy

Rules:

- Load critical assets first.
- Lazy load below-the-fold media.
- Use responsive images.
- Prefer AVIF and WebP where supported.
- Define dimensions to prevent layout shift.
- Avoid shipping animation and 3D libraries to routes that do not need them.
- Use static fallbacks for heavy interactive media.

Why: asset discipline protects speed as the site grows.

Tradeoff: build and content pipelines need more structure.

## Image Strategy

Use images for:

- Real project evidence
- Interface screenshots
- Process artifacts
- Portraits or brand imagery
- OpenGraph visuals
- Diagrams and visual explanations

Avoid:

- Generic stock imagery
- Blurry atmospheric filler
- Decorative images that hide content weakness
- Text baked into images when semantic text would work

Why: images should prove craft.

Tradeoff: better images require more production effort.

## Video Strategy

### AI Intro Movie

Use only if it communicates Ravi's positioning and product-building taste within seconds.

Rules:

- Optional or nonblocking.
- Static poster required.
- Aggressively compressed.
- No essential text without accessible alternative.
- Muted by default if autoplaying.
- Respects reduced motion.
- Skippable if longer than a brief brand moment.

Why: an intro movie can create memory, but it can also feel self-indulgent.

Tradeoff: high production quality is required for it to be worth the cost.

### Background Videos

Rules:

- Muted autoplay only.
- No essential information.
- Pause or simplify on mobile where needed.
- Provide poster fallback.
- Avoid behind long text.
- Do not loop high-motion footage endlessly near reading areas.

Why: background video is atmosphere, not content.

Tradeoff: video adds bandwidth, CPU, and accessibility cost.

### Compression

Rules:

- Use modern codecs where possible.
- Serve multiple sizes.
- Keep loops short.
- Remove audio when unused.
- Test mobile bandwidth.
- Preserve enough quality to avoid looking cheap.

Why: compression determines whether video feels premium or heavy.

Tradeoff: compression can reduce fidelity. Art direction must account for it.

## Three.js Rules

Use Three.js when:

- Spatial interaction explains a project or system.
- 3D creates a signature brand moment tied to the narrative.
- The object or scene is meaningful.
- Static fallbacks exist.
- The route can lazy load the scene.

Never use Three.js for:

- Decorative floating shapes with no meaning.
- Background noise behind reading.
- Constant GPU load on every page.
- Mobile experiences without fallback.
- Anything that blocks content.

Why: 3D should increase memorability and understanding.

Tradeoff: 3D is expensive to build, test, and optimize.

## GPU Budget

Rules:

- Keep scenes lightweight.
- Avoid excessive post-processing.
- Cap pixel ratio where needed.
- Pause rendering when offscreen.
- Reduce quality on low-power devices.
- Do not render complex scenes during idle reading.
- Monitor FPS and memory during QA.

Why: GPU overuse makes premium sites feel broken.

Tradeoff: visual fidelity must adapt by device.

## 3D Fallbacks

Fallback layers:

- Static image
- Short video render
- Simplified CSS visual
- Text explanation

Why: every user should receive the message, even without WebGL.

Tradeoff: fallbacks require additional production work.

## Streaming and Lazy Loading

Use streaming for:

- Long-form content
- AI responses
- Data-backed modules

Use lazy loading for:

- 3D scenes
- Background video
- Below-the-fold project media
- Heavy diagrams
- Animation libraries

Why: users should reach meaning before the full spectacle loads.

Tradeoff: loading states must be designed.

## SEO

Visual SEO rules:

- One clear visual and semantic H1 per page.
- Meaningful section headings.
- Case study outcomes must be easy to parse.
- Important text remains text.
- Images have descriptive alt text.
- OpenGraph images are custom and high quality.
- Core content is not hidden behind client-only effects.

Why: search engines and humans both need structure.

Tradeoff: some art-directed text treatments must remain simpler.

## Metadata Rules

Each future page should define:

- Title
- Description
- Canonical URL
- OpenGraph title
- OpenGraph description
- OpenGraph image
- Twitter card data
- Published or updated date where relevant
- Author where relevant

Why: metadata shapes discovery, sharing, and professional perception.

Tradeoff: publishing requires complete metadata before release.

## Structured Data

Future structured data candidates:

- Person
- WebSite
- BlogPosting
- CreativeWork
- SoftwareSourceCode where relevant
- BreadcrumbList
- Organization only if a future business identity requires it

Why: structured data helps search engines understand the platform.

Tradeoff: schema must match visible content and remain maintained.

## Performance Review Questions

Before shipping a visual feature:

1. Does it improve hiring trust?
2. Does it affect initial load?
3. Can it be lazy loaded?
4. Does it run at 60 FPS?
5. What happens on mobile?
6. What happens with reduced motion?
7. What is the static fallback?
8. Does it preserve SEO and accessibility?
9. Does it introduce a new dependency?
10. Does the visual payoff justify the cost?
