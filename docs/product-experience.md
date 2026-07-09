# Product Experience

## Purpose

Sprint 03 extends Project Aurora from a landing experience into a complete homepage product experience. The goal is to communicate Ravi Thakur as a software engineer and creative product builder within roughly 90 seconds without inventing unapproved proof.

## Composition

- `src/app/page.tsx` defines metadata and renders `HomeExperience`.
- `src/features/home/home-experience.tsx` composes all homepage sections.
- Each section owns its own feature folder, data, and interaction boundaries.

## Sections

- Landing experience: existing cinematic first impression.
- About: concise product-builder narrative.
- Journey: interactive keyboard-accessible timeline.
- Skills: category-based interactive skill surface without progress bars.
- Featured projects: filterable showcase for Famex Marketing, EcoFuture, ParkPing, Lions Fitness, and BNP Library.
- Case study engine: reusable blueprint for overview, problem, research, design, development, architecture, challenges, results, lessons, tech stack, media, and links.
- Services: premium capability cards.
- Blog engine: MDX, metadata, reading-time, RSS, search, and syntax-highlight architecture.
- Lab: architecture for experiments, open source, AI, mini projects, and concepts.
- AI assistant: offline quick-action architecture for future LLM integration.
- Contact: premium CTA with data-driven channels.
- Footer: minimal platform close.

## Content Integrity

Unknown content is intentionally represented as pending. The implementation does not invent results, links, testimonials, awards, dates, or metrics.

Why: credibility is the core conversion mechanism for recruiters, engineering managers, founders, and clients.

## Performance Notes

- Server Components are used by default.
- Client Components are limited to journey, skills, and project filtering.
- No heavy animation, Three.js, or AI runtime ships in this milestone.
- Media placeholders reserve layout space to protect CLS.

## Accessibility Notes

- Sections use semantic landmarks and headings.
- Interactive timelines and tabs expose pressed or selected state.
- Disabled future actions communicate unavailable links through titles and pending badges.
- Focus styles remain global and visible.

## Future Upgrade Path

- Replace pending project fields with approved media, technology, outcomes, and links.
- Generate dedicated project and case-study routes from the existing schemas.
- Add MDX indexing and reading-time calculation.
- Connect assistant quick actions to a vetted retrieval layer.
- Add Playwright coverage for filtering, keyboard navigation, and reduced-motion behavior.
