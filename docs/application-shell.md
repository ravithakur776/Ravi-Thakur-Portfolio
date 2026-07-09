# Application Shell

## Purpose

This document explains the production application shell for Ravi Thakur's personal platform. The shell is not a portfolio page. It is the operating layer that future routes and features plug into.

## What Was Built

- Persistent root layout in `src/app/layout.tsx`
- Global provider stack in `src/components/providers/app-providers.tsx`
- Shell chrome in `src/components/layout/app-shell.tsx`
- Skip navigation and main landmark focus management
- Theme provider and theme toggle
- Motion preference provider
- Analytics provider with Vercel Analytics and optional Google Analytics
- Web-vitals reporting hook
- Command palette foundation
- Data-driven navigation framework
- SEO foundation with metadata helpers, JSON-LD, robots, sitemap, manifest, and RSS preparation
- Route loading, error, global-error, and not-found boundaries
- MDX and content schema foundations for blog, projects, and case studies
- Future AI, search, and CMS integration boundaries
- Typed performance, cache, image, video, and lazy-loading policies

## Architecture Decisions

### Server-First Layout

The root layout remains a Server Component and delegates browser-only behavior to small client islands.

Why: this preserves React Server Component benefits while allowing theme, motion, analytics, command palette, and route focus behavior.

Tradeoff: browser features need explicit provider boundaries.

### Feature-First Organization

Feature-specific code lives in `src/features/*`. Shared primitives live in `src/components/ui`.

Why: blog, projects, case studies, AI, search, navigation, and theme will evolve independently.

Tradeoff: some imports are slightly longer, but ownership is clearer.

### Inert Future Providers

AI and search providers exist but are disabled.

Why: future features can integrate without reshaping the provider tree, but no fake product behavior is shipped.

Tradeoff: the providers add minimal structure before real implementation.

### Data-Driven Navigation

Navigation items live in `src/config/navigation.ts` and are currently disabled.

Why: the shell can express future route architecture without publishing empty pages.

Tradeoff: disabled navigation is intentionally quiet until content exists.

### Schema-First Content

Blog, project, and case study engines start with Zod frontmatter schemas.

Why: content routes should be typed from day one.

Tradeoff: retrieval functions return empty arrays until real MDX indexing is implemented.

## Performance Strategy

- Keep route content server-first.
- Load heavy future features by viewport or interaction.
- Keep 3D, video, AI, and search out of initial route bundles until needed.
- Use web vitals reporting as the future monitoring hook.
- Preserve stable dimensions for shell UI to avoid layout shift.

Targets:

- Lighthouse 95+
- CLS below 0.05
- LCP below 2.5s
- Excellent INP
- 60 FPS interactions

## Accessibility Strategy

- Skip navigation is available before the shell header.
- Main content receives programmatic focus on route changes.
- Theme toggle has an accessible name and pressed state.
- Command palette uses dialog semantics and focus containment.
- Reduced motion is detected and exposed globally.
- Global CSS preserves visible focus.

## SEO Strategy

- Default metadata lives in `src/lib/seo/metadata.ts`.
- Route metadata should use `createPageMetadata`.
- Structured data helpers live in `src/lib/seo/json-ld.ts`.
- `robots.ts`, `sitemap.ts`, `manifest.ts`, and `rss.xml/route.ts` establish crawler and PWA preparation.

## Intentionally Postponed

- Hero and homepage content
- Real navigation destinations
- Blog UI
- Project UI
- Case study UI
- Contact flow
- AI assistant behavior
- Search indexing
- CMS connection
- 3D scenes
- Animation libraries
- Real OpenGraph image generation
- RSS item generation

## Future Considerations

- Replace placeholder content engines with filesystem MDX indexing or CMS-backed retrieval.
- Add route-level metadata generated from validated frontmatter.
- Add an accessible command search index when content exists.
- Add analytics event dispatch once tracking requirements are defined.
- Add real observability transport for web vitals and errors.
- Add Playwright coverage for shell keyboard navigation and theme behavior.
