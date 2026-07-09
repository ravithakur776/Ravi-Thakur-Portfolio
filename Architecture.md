# Architecture

This document defines the engineering foundation for Ravi Thakur's flagship personal website. It is written for senior engineers joining the project later, with enough context to understand how the system is organized, why decisions were made, what tradeoffs exist, and how the architecture should scale.

## Architectural Principles

1. **Foundation before spectacle**  
   The site will eventually support expressive motion, storytelling, AI, and rich media. This phase deliberately avoids building those surfaces so the architecture can carry them without churn.

2. **Server-first by default**  
   Next.js App Router components are Server Components unless interactivity requires a Client Component. This minimizes shipped JavaScript and keeps data, metadata, and content pipelines close to the server.

3. **Typed boundaries**  
   Configuration, environment variables, content models, metadata, analytics events, and AI integration points should all become typed contracts. Loose strings are acceptable only at the outermost boundary.

4. **Composable, not ornamental**  
   shadcn/ui is used as a source of accessible primitives. The product should not become a pile of disconnected bespoke widgets.

5. **Performance is architectural**  
   Asset strategy, route boundaries, component ownership, content loading, metadata generation, and bundle hygiene are design decisions, not late-stage optimizations.

## Technology Decisions

### Next.js 15 App Router

**Decision**  
Use Next.js 15 with the App Router, React Server Components, typed routes, and MDX support.

**Why**  
The App Router gives the project a durable foundation for content-rich pages, nested layouts, streaming, static generation, route-level metadata, and Vercel deployment. It also naturally supports a portfolio that may later include blog posts, case studies, project microsites, experiments, and API routes.

**Alternatives considered**

- Astro: excellent for content sites, but less ideal if the product evolves toward AI interfaces, React-heavy interactions, 3D, and application-like experiences.
- Remix/React Router: strong web fundamentals, but less aligned with Vercel-native metadata, image, cache, and deployment workflows.
- Static site generator only: fast, but too limiting for future AI, personalization, analytics events, and interactive storytelling.

**Tradeoffs**  
Next.js adds framework complexity and requires careful server/client boundary discipline. The team must avoid unnecessary `"use client"` usage.

**Scalability**  
Route groups can separate marketing, writing, case studies, experiments, and admin-only preview tooling without URL pollution.

### TypeScript Strict Mode

**Decision**  
Enable strict TypeScript with additional checks such as `noUncheckedIndexedAccess` and `noImplicitOverride`.

**Why**  
This project will likely grow through design iterations, content modeling, metadata automation, and integrations. Strict typing catches broken contracts early.

**Alternatives considered**

- Default TypeScript settings: easier at first but weaker as the project grows.
- JavaScript: faster scaffolding but not appropriate for long-lived production architecture.

**Tradeoffs**  
Strict mode requires more thoughtful modeling and can feel slower during early experimentation.

**Scalability**  
Strict contracts make it easier to add typed MDX frontmatter, AI response schemas, analytics event maps, and reusable design tokens.

### Tailwind CSS and Design Tokens

**Decision**  
Use Tailwind CSS with CSS-variable design tokens in `src/app/globals.css`.

**Why**  
Tailwind supports rapid high-quality UI iteration while tokens preserve system-level consistency. CSS variables allow future theme changes without rewriting component classes.

**Alternatives considered**

- CSS Modules: excellent encapsulation, but slower for iteration and less aligned with shadcn/ui.
- CSS-in-JS: powerful but adds runtime and complexity that is not needed.
- Sass: mature, but weaker for design-token-driven utility composition.

**Tradeoffs**  
Tailwind can become noisy if components are not well-factored. Token usage must be disciplined.

**Scalability**  
Tokens can later expand into semantic layers: surface, typography, spacing, motion, elevation, data visualization, and immersive sections.

### shadcn/ui

**Decision**  
Configure shadcn/ui now, but do not generate UI components yet.

**Why**  
The project needs a high-quality accessible primitive strategy without creating visual surfaces prematurely.

**Alternatives considered**

- Radix UI directly: maximum control, but more boilerplate.
- Headless UI: good primitives, but less aligned with Tailwind and the broader shadcn ecosystem.
- Custom primitives: unnecessary risk for accessibility and maintenance.

**Tradeoffs**  
Generated components become local code, so the team owns maintenance after adding them.

**Scalability**  
Future UI components should live in `src/components/ui` for primitives and `src/features/*` for domain-specific compositions.

### pnpm

**Decision**  
Use pnpm with an explicit package manager version.

**Why**  
pnpm provides deterministic installs, fast dependency resolution, and efficient disk usage.

**Alternatives considered**

- npm: universal, but slower and less strict.
- yarn: capable, but less consistent across modern Next.js teams than pnpm.

**Tradeoffs**  
Contributors need pnpm available locally.

**Scalability**  
If this project becomes a monorepo, pnpm workspaces are a natural path.

## Source Architecture

### `src/app`

Owns routes, layouts, loading states, not-found states, global styles, and route-level metadata.

The root layout is the application shell. It composes global providers, structured data, theme initialization, persistent shell chrome, skip navigation, and the main landmark.

Current implementation intentionally does not include portfolio content. `page.tsx` remains empty until the first real route experience is designed.

### `src/components`

Shared components that are not tied to one feature. `src/components/ui` is reserved for shadcn/ui primitives.

Rule: do not add portfolio-specific sections here. A future hero, timeline, case study shell, or AI demo belongs in a feature or route-specific boundary first.

### `src/features`

Feature-level modules. Future examples:

- `src/features/case-studies`
- `src/features/projects`
- `src/features/blog`
- `src/features/ai`
- `src/features/search`
- `src/features/command`
- `src/features/theme`

Each feature may own its components, queries, schemas, tests, and local documentation.

### `src/content`

Content source directory for MDX and structured content.

Planned model:

- `blog`: essays, notes, engineering posts
- `case-studies`: long-form product/design/engineering narratives
- `projects`: portfolio project records and project pages

### `src/lib`

Infrastructure and reusable non-React logic.

Current modules:

- `env.ts`: typed environment variable parsing
- `env/public.ts`: browser-safe public environment parsing
- `errors.ts`: application error primitive
- `logger.ts`: structured logging primitive
- `observability`: client logging and web-vitals reporting boundaries
- `seo/metadata.ts`: shared metadata defaults
- `seo/json-ld.ts`: structured data helpers
- `content`: shared content source and MDX primitives
- `cache`: cache tag definitions
- `assets`: image and video policy helpers
- `utils.ts`: shadcn-compatible utility helpers

Reserved modules:

- `ai`: lazy AI clients, model routing, prompt contracts, evaluation helpers
- `analytics`: Google Analytics event contracts and dispatch helpers
- `animation`: future GSAP, Framer Motion, and Lenis orchestration
- `content`: MDX parsing, frontmatter schemas, content indexes
- `observability`: tracing, error reporting, and diagnostics

## Application Shell Architecture

**Decision**  
Use a persistent root application shell composed in `src/app/layout.tsx`, with server-first rendering and small client islands for browser-only concerns.

**Why**  
The platform will eventually host portfolio pages, projects, case studies, writing, lab experiments, AI, contact, and interactive experiences. A persistent shell gives those routes shared accessibility, metadata, theme, analytics, command, and navigation infrastructure without each feature reimplementing it.

**Alternatives considered**

- Per-page layout ownership: flexible but causes duplicated provider and accessibility logic.
- Fully client-rendered app shell: simpler for stateful UI, but worse for performance and Server Component discipline.
- No shell until pages exist: faster now, but pushes architectural decisions into the first visual build.

**Tradeoffs**  
The shell adds a small amount of global client JavaScript for theme, motion, analytics, command palette, route focus, and web vitals. This is acceptable because each island owns a platform-level behavior.

**Scalability**  
Future features plug into `src/features/*`, shared primitives stay in `src/components/ui`, and route content remains server-first unless interactivity requires a client boundary.

## Landing Experience Architecture

**Decision**  
Implement the first-fold homepage as `src/features/landing`, with the route file limited to metadata and feature composition.

**Why**  
The landing sequence is a product experience with timing, motion, media architecture, and interaction rules. Keeping it feature-scoped prevents cinematic concerns from leaking into the platform shell.

**Alternatives considered**

- Build directly in `src/app/page.tsx`: simpler, but route files would accumulate animation and media logic.
- Build a generic hero component: premature, because this first impression is intentionally bespoke.
- Add real video/3D now: not appropriate before final media and performance budgets exist.

**Tradeoffs**  
The landing uses a client island for timing, pointer atmosphere, intro skip behavior, floating nav reveal, and reduced-motion handling. The route still statically renders and avoids heavy assets.

**Scalability**  
Future work can replace `LandingScenePlaceholder` with a lazy-loaded 3D scene, connect real video sources through `landing.config.ts`, and move CTA destinations to real routes once those experiences exist.

### Provider Stack

`AppProviders` composes:

- `ThemeProvider`
- `MotionProvider`
- `FutureAIProvider`
- `FutureSearchProvider`
- `AnalyticsProvider`
- `WebVitalsReporter`
- `CommandPaletteProvider`

Why: each provider maps to a platform concern. AI and search are deliberately inert until product requirements exist.

Tradeoff: provider order must remain intentional as real integrations arrive.

### Navigation Framework

Navigation is data-driven through `src/config/navigation.ts`.

Why: future routes can be enabled without hardcoding labels inside layout components.

Tradeoff: disabled routes currently render as non-interactive planned destinations, which is honest but minimal.

### Content Engines

Blog, project, and case study engines define Zod frontmatter schemas and empty retrieval functions.

Why: route implementation should start from typed content contracts, not ad hoc MDX parsing.

Tradeoff: content retrieval is intentionally postponed until real content exists.

## Environment Variables Strategy

**Decision**  
Use `.env.example` as the public contract and `src/lib/env.ts` as the typed parser.

**Why**  
Environment variables are one of the easiest places for production bugs to hide. A typed parser gives early failure and clearer ownership.

**Alternatives considered**

- Direct `process.env` access everywhere: fast, but brittle and hard to audit.
- Runtime-only validation in deployment: too late in the feedback loop.

**Tradeoffs**  
Importing validated env in build-time code requires defaults or optional schemas for variables that are not always present.

**Scalability**  
As integrations arrive, split env schemas into public and server-only groups if client bundling needs stricter guarantees.

## Error Handling Strategy

**Decision**  
Use a small `AppError` class with stable error codes and rely on App Router error boundaries for rendering.

**Why**  
Stable error codes make logging, analytics, API responses, and UI states consistent without prematurely building a large error framework.

**Alternatives considered**

- Throw plain `Error`: simple but hard to classify.
- Large custom hierarchy: excessive before product surfaces exist.

**Tradeoffs**  
The initial abstraction is intentionally small. It must grow only when real domains require it.

**Scalability**  
API routes, Server Actions, and AI integrations can map `AppErrorCode` to user-safe messages and observability severity.

## Logging Strategy

**Decision**  
Use a structured logger wrapper with level filtering.

**Why**  
It keeps logging calls consistent today while leaving a clean replacement point for Vercel logs, Sentry, OpenTelemetry, or another observability provider.

**Alternatives considered**

- Raw `console.*` everywhere: convenient but inconsistent.
- Heavy logging library now: premature for this phase.

**Tradeoffs**  
The current logger is intentionally simple and does not provide transports, redaction, or trace correlation yet.

**Scalability**  
Future work should add request IDs, redaction rules, and integration-specific transports in `src/lib/observability`.

## SEO and Metadata Architecture

**Decision**  
Centralize default metadata in `src/lib/seo/metadata.ts` and site identity in `src/config/site.ts`.

**Why**  
Metadata will become route-specific across blog posts, case studies, and project pages. A central default prevents duplicated site identity and makes Open Graph consistency easier.

**Alternatives considered**

- Metadata inside every route: flexible but repetitive.
- Static HTML tags only: not aligned with App Router metadata APIs.

**Tradeoffs**  
The central defaults must stay generic. Route-specific metadata should override them through typed helpers later.

**Scalability**  
Future content pipelines should generate metadata from validated MDX frontmatter, including canonical URLs, Open Graph images, and structured data.

## Performance Architecture

**Decision**  
Prefer Server Components, static generation for content, image optimization, and dependency discipline.

**Why**  
A premium portfolio must feel immediate. Performance should survive future animation, 3D, media, and AI surfaces.

**Alternatives considered**

- Client-heavy SPA architecture: simpler mental model, worse initial load.
- Build everything static: fast, but limiting for future dynamic or AI-powered features.

**Tradeoffs**  
Server-first architecture requires careful separation between interactive islands and content shells.

**Scalability**  
Future rules:

- Use dynamic imports for 3D and animation-heavy sections.
- Keep GSAP, Framer Motion, Lenis, Three.js, Drei, and React Three Fiber out of the critical route bundle until needed.
- Measure route bundles before merging immersive work.
- Prefer AVIF/WebP images and explicit dimensions.

## Accessibility Architecture

**Decision**  
Adopt accessible primitives and testable interaction patterns from the beginning.

**Why**  
Accessibility cannot be retrofitted cleanly into a motion-heavy, visually rich site.

**Alternatives considered**

- Custom components first: higher design freedom, higher accessibility risk.
- Audit only before launch: expensive and unreliable.

**Tradeoffs**  
Accessible primitives can constrain some visual ideas, but that constraint usually leads to stronger interaction design.

**Scalability**  
Future pull requests involving UI should verify keyboard navigation, visible focus, reduced motion, semantic headings, color contrast, and screen reader names.

## Future Animation Architecture

**Decision**  
Reserve `src/lib/animation` for orchestration, but do not install or implement animation systems yet.

**Why**  
The future site may use GSAP, Framer Motion, and Lenis. Those tools should be introduced only when the first real interaction model exists.

**Alternatives considered**

- Install all animation libraries now: increases dependency surface before requirements exist.
- Pick one library permanently now: premature and may constrain future art direction.

**Tradeoffs**  
Future contributors must make an explicit decision when adding motion.

**Scalability**  
Motion should be layered:

- CSS transitions for simple UI state
- Framer Motion for React state-driven transitions
- GSAP for timeline-heavy storytelling
- Lenis for scroll behavior only if native scrolling cannot satisfy the design

Always support `prefers-reduced-motion`.

## Future AI Integration Architecture

**Decision**  
Reserve `src/lib/ai` and server-only env variables without choosing an AI SDK yet.

**Why**  
The mission includes AI, but the product use case is not defined. The architecture should leave room for chat, semantic search, content generation, personalization, or interactive project explainers.

**Alternatives considered**

- Install an AI SDK now: premature.
- Hard-code one provider: creates migration risk.

**Tradeoffs**  
No AI feature can be built until a use case, provider, budget, and privacy posture are defined.

**Scalability**  
Future AI modules should use lazy client initialization, typed input/output schemas, server-only execution, rate limiting, and cost tracking.

## Testing Strategy

**Decision**  
Use Vitest for unit/integration tests and Playwright for browser flows.

**Why**  
Vitest is fast for component and utility testing. Playwright is better for route behavior, metadata, accessibility checks, and visual interaction confidence.

**Alternatives considered**

- Jest: mature but heavier in modern Vite-adjacent tooling.
- Cypress: strong product, but Playwright is leaner for cross-browser route verification.

**Tradeoffs**  
Two test tools require clear ownership boundaries.

**Scalability**  
Use this split:

- Pure utilities: Vitest
- React components: Vitest plus Testing Library
- Routes and flows: Playwright
- Content schema validation: Vitest
- Accessibility snapshots: Playwright with axe integration later

## Build Strategy

**Decision**  
Use `pnpm verify` as the local build gate: typecheck, lint, format, tests, and production build.

**Why**  
A single command gives contributors one trusted pre-merge check.

**Alternatives considered**

- Separate ad hoc commands: flexible but easier to forget.
- Build only in CI: slower feedback.

**Tradeoffs**  
The full verify command will become slower as the project grows.

**Scalability**  
CI can split `verify` into parallel jobs later: typecheck, lint, unit tests, e2e tests, and build.

## Deployment Strategy

**Decision**  
Deploy on Vercel with preview deployments for every pull request and production deployments from `main`.

**Why**  
Vercel is the strongest operational fit for Next.js, especially for previews, App Router behavior, image optimization, and future analytics.

**Alternatives considered**

- Netlify: capable, but less native for this stack.
- Self-hosting: maximum control, unnecessary operational burden.

**Tradeoffs**  
Vercel-specific optimizations can reduce portability.

**Scalability**  
Add environment-scoped variables, preview protection, analytics, speed insights, and branch-based release gates as the project matures.

## Git Workflow

**Decision**  
Use Conventional Commits enforced by Commitlint and staged-file checks enforced by lint-staged.

**Why**  
Consistent commits make changelogs, reviews, and automation easier.

**Alternatives considered**

- Free-form commits: easier locally but noisy long term.
- Squash-only discipline without hooks: relies too much on memory.

**Tradeoffs**  
Hooks can occasionally slow commits, but failures are cheaper locally than in CI.

**Scalability**  
The same convention can power release notes, changelog generation, and semantic versioning if needed.

## Coding Standards

- Prefer Server Components by default.
- Add `"use client"` only at the smallest interactive boundary.
- Keep route files thin. Move domain logic into `src/features` or `src/lib`.
- Validate external data at the boundary.
- Do not access environment variables directly outside env modules unless there is a clear framework reason.
- Avoid barrel files until imports become genuinely painful.
- Prefer named exports for shared modules.
- Keep dependencies boring and justified.
- Do not add animation, 3D, AI, or analytics libraries without an implementation plan and bundle impact review.

## Content Strategy

**Decision**  
Prepare for MDX-based content without creating content yet.

**Why**  
Ravi's site needs storytelling depth. MDX allows written content to include custom interactive components later.

**Alternatives considered**

- CMS from day one: powerful but premature before editorial workflow is known.
- Plain Markdown: simple but less expressive for creative product storytelling.

**Tradeoffs**  
MDX requires careful component whitelisting, frontmatter validation, and content build tooling.

**Scalability**  
Future content work should add schemas for title, description, date, status, tags, summary, canonical URL, Open Graph image, and featured media.

## Documentation Structure

```txt
README.md
Architecture.md
docs/
└── adr/
```

**Decision**  
Keep high-level onboarding in `README.md`, architectural rationale in `Architecture.md`, and future long-lived decisions in ADRs.

**Why**  
Separating usage from rationale keeps onboarding fast while preserving decision history.

**Alternatives considered**

- One large README: easy to find, harder to maintain.
- Full docs site now: excessive before the product exists.

**Tradeoffs**  
Documentation must be updated when architecture changes.

**Scalability**  
If the docs grow, convert `docs/` into a structured internal handbook or public engineering notes section.

## Future Roadmap

### Phase 1: Foundation

- Configure project architecture and tooling.
- Establish quality gates.
- Document decisions and conventions.

### Phase 2: Content Modeling

- Add MDX schema validation.
- Add typed content indexes.
- Define blog, case study, and project metadata.
- Add RSS and sitemap generation.

### Phase 3: Design System

- Add shadcn primitives as needed.
- Define typography, spacing, layout, elevation, and motion tokens.
- Create accessibility and interaction guidelines.

### Phase 4: Core Product Surface

- Build the first real homepage experience.
- Add project and case study routes.
- Add analytics events.
- Establish visual regression checks.

### Phase 5: Motion and Immersive Systems

- Introduce animation libraries based on real interaction requirements.
- Add reduced-motion fallbacks.
- Introduce 3D only where it improves the narrative.

### Phase 6: AI

- Define the AI product use case.
- Select provider and SDK.
- Add server-only AI modules, rate limits, observability, and cost controls.

## Scalability Plan

When the project grows:

- Move repeated route patterns into feature modules.
- Add typed content schemas before publishing content.
- Add ADRs for every major dependency.
- Track route bundle size before and after immersive sections.
- Add e2e coverage for core visitor journeys.
- Keep generated shadcn/ui primitives separate from product compositions.
- Introduce observability before adding AI or user-submitted inputs.
- Treat animation and 3D as progressive enhancement.

## Definition of Done

A change is complete when:

- It has a clear owner and folder boundary.
- It passes `pnpm verify`.
- It updates documentation when conventions change.
- It preserves accessibility and performance budgets.
- It does not add a new dependency without documenting why.
- It can be understood by a senior engineer joining the project later.
