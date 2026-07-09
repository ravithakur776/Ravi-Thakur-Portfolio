# Ravi Thakur Portfolio

Engineering foundation for Ravi Thakur's flagship personal website.

This repository is intentionally a foundation, not a finished portfolio. It sets up the production-grade architecture, tooling, documentation, and conventions needed to later build an Awwwards-quality personal website with strong engineering discipline.

## Product Intent

Owner: Ravi Thakur

Professional title: Software Engineer • Creative Product Builder

Mission: create a flagship personal website that combines engineering, design, storytelling, and AI while feeling like a premium software product instead of a template portfolio.

## Stack

| Area            | Decision               | Why                                                                                                                                              |
| --------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework       | Next.js 15 App Router  | Mature React Server Components architecture, file-system routing, metadata APIs, Vercel-native deployment, strong content and performance story. |
| Language        | TypeScript strict mode | Prevents drift as the project grows and forces better contracts around content, metadata, and future integrations.                               |
| Styling         | Tailwind CSS v4 tokens | Keeps styling close to the UI while centralizing design decisions through CSS variables.                                                         |
| UI system       | shadcn/ui              | Provides accessible, composable primitives without locking the project into a heavy component framework.                                         |
| Content         | MDX-ready structure    | Supports blog posts, case studies, project pages, and future editorial storytelling.                                                             |
| Package manager | pnpm                   | Fast, deterministic installs and efficient dependency storage.                                                                                   |
| Deployment      | Vercel                 | Best-aligned hosting target for Next.js performance, previews, analytics, and CI flow.                                                           |

## Current Scope

Included:

- Next.js 15 App Router skeleton
- Production application shell
- First-fold landing experience
- Complete homepage product experience after the landing fold
- About, journey, skills, featured projects, case study engine, services, blog engine, lab, AI assistant architecture, contact, and footer
- Global provider composition
- Theme, motion, analytics, command palette, future AI, and future search providers
- SEO routes: metadata, robots, sitemap, manifest, RSS preparation
- Route loading, error, global-error, and not-found boundaries
- Landing media architecture for future AI intro video and hero media
- Accessibility shell: skip navigation, focus management, visible focus, reduced motion
- Feature-first content engines for blog, projects, case studies, lab, and AI assistant quick actions
- Strict TypeScript configuration
- ESLint flat config
- Prettier with Tailwind class sorting
- Husky, Commitlint, and lint-staged
- Absolute imports
- Environment variable validation strategy
- Error and logging primitives
- SEO and metadata foundation
- shadcn/ui configuration without generated UI components
- Tailwind design token baseline
- Vitest and Playwright configuration
- Documentation for architecture, workflow, conventions, roadmap, and scaling

Not included yet:

- Dedicated About route
- Dedicated project routes
- Dedicated case study routes
- Real intro video asset
- Real hero image
- Real resume asset
- Heavy Three.js scene
- 3D scenes
- Live AI API integration
- Real blog articles or approved case study content
- Public contact links

## Getting Started

Install dependencies:

```bash
pnpm install
```

Copy environment variables:

```bash
cp .env.example .env.local
```

Run development:

```bash
pnpm dev
```

Run verification:

```bash
pnpm verify
```

## Scripts

| Script           | Purpose                                     |
| ---------------- | ------------------------------------------- |
| `pnpm dev`       | Run Next.js locally with Turbopack.         |
| `pnpm build`     | Create a production build.                  |
| `pnpm start`     | Serve the production build locally.         |
| `pnpm lint`      | Run framework-aware linting.                |
| `pnpm typecheck` | Run TypeScript without emitting files.      |
| `pnpm format`    | Check Prettier formatting.                  |
| `pnpm test`      | Run unit and integration tests with Vitest. |
| `pnpm test:e2e`  | Run browser tests with Playwright.          |
| `pnpm verify`    | Run the full local quality gate.            |

## Folder Structure

```txt
.
├── docs/
│   └── adr/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── global-error.tsx
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── manifest.ts
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   └── rss.xml/
│   ├── components/
│   │   ├── layout/
│   │   ├── providers/
│   │   └── ui/
│   ├── config/
│   │   ├── navigation.ts
│   │   ├── performance.ts
│   │   └── site.ts
│   ├── content/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   └── projects/
│   ├── features/
│   │   ├── ai/
│   │   ├── analytics/
│   │   ├── blog/
│   │   ├── case-studies/
│   │   ├── command/
│   │   ├── experience/
│   │   ├── motion/
│   │   ├── navigation/
│   │   ├── performance/
│   │   ├── projects/
│   │   ├── search/
│   │   └── theme/
│   ├── hooks/
│   ├── lib/
│   │   ├── assets/
│   │   ├── cache/
│   │   ├── ai/
│   │   ├── analytics/
│   │   ├── animation/
│   │   ├── content/
│   │   ├── observability/
│   │   ├── errors.ts
│   │   ├── env.ts
│   │   ├── logger.ts
│   │   ├── seo/
│   │   └── utils.ts
│   ├── styles/
│   ├── test/
│   └── types/
└── tests/
    └── e2e/
```

## Naming Conventions

- Route folders use lowercase kebab-case.
- React component files use PascalCase once components are introduced.
- Utility modules use lowercase kebab-case or domain nouns, for example `metadata.ts`.
- Tests colocate with implementation for unit coverage or live under `tests/e2e` for browser flows.
- Environment variables are uppercase snake case and must be represented in `.env.example`.

## Development Workflow

1. Create a feature branch from `main`.
2. Keep changes scoped to one concern.
3. Run `pnpm verify` before opening a pull request.
4. Use Conventional Commits.
5. Require review for changes to architecture, dependencies, routing, content modeling, analytics, or deployment.

## Git Workflow

Commit format:

```txt
type(scope): summary
```

Examples:

```txt
chore(tooling): add commitlint and lint-staged
docs(architecture): define content model strategy
feat(content): add project page schema
```

Recommended branch prefixes:

- `feat/`
- `fix/`
- `docs/`
- `chore/`
- `refactor/`
- `test/`

## Quality Gates

Before merge:

- TypeScript must pass.
- ESLint must pass.
- Prettier must pass.
- Unit tests must pass.
- Production build must pass.
- E2E tests are required when routing, metadata, navigation, or major interactive surfaces change.

## Documentation

Start with [Architecture.md](/Users/ravithakur/Desktop/Ravithakurportfolio%20/Architecture.md).

Application shell details live in [docs/application-shell.md](/Users/ravithakur/Desktop/Ravithakurportfolio%20/docs/application-shell.md).

Landing experience details live in [docs/landing-experience.md](/Users/ravithakur/Desktop/Ravithakurportfolio%20/docs/landing-experience.md).

Future decision records should live in `docs/adr/` and use this naming pattern:

```txt
0001-short-decision-title.md
```

Each ADR should explain the context, decision, alternatives, tradeoffs, and rollback strategy.
