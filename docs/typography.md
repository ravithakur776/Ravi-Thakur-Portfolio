# Typography

## Typography Philosophy

Typography is the primary interface of trust. Before visitors inspect projects, they read positioning, labels, case study structure, and evidence. The type system must communicate seniority, clarity, editorial taste, and technical fluency.

Why: the platform's core conversion depends on clear communication. Poor typography makes good work feel less credible.

Tradeoff: strong typography requires restraint. Not every section deserves display-scale treatment.

## Font Pairing

### Primary Sans

Use a modern grotesk or neo-grotesk sans-serif with strong legibility, variable font support, and excellent UI rhythm.

Current direction: Geist Sans.

Why: it supports a product-engineering identity and performs well across UI, editorial content, and dense information.

Tradeoff: Geist is familiar in modern developer spaces. Originality must come from layout, pacing, hierarchy, and brand system, not font novelty alone.

### Monospace

Use a precise monospace for real technical material: code, commands, metrics, timestamps, model names, commit hashes, and system labels.

Current direction: Geist Mono.

Why: mono type adds engineering credibility when it presents evidence.

Tradeoff: overusing mono becomes a developer cliche.

### Avoid

- Decorative display fonts
- Novelty monospace
- All-caps body copy
- Ultra-light type on dark backgrounds
- Condensed type for long reading

Why: novelty type ages quickly and can harm trust.

## Loading Strategy

Fonts should load through the framework with optimized delivery, local caching, and swap behavior.

Why: typography should not block first render or create major layout shift.

Tradeoff: swap can briefly show fallback fonts. Metrics-compatible fallbacks reduce the effect.

## Fallback Strategy

Sans fallback intent:

- System UI
- Helvetica or Arial-like sans
- Generic sans-serif

Mono fallback intent:

- System monospace
- SF Mono, Menlo, Monaco, Consolas-like mono
- Generic monospace

Why: fallback stacks must preserve readability and approximate rhythm when custom fonts are unavailable.

Tradeoff: exact line breaks may shift slightly before the primary font loads.

## Type Scale

The scale should support both cinematic storytelling and product UI density.

| Role       | Desktop Intent | Tablet Intent | Mobile Intent | Line Height | Letter Spacing  | Why                              | Tradeoff                       |
| ---------- | -------------- | ------------- | ------------- | ----------- | --------------- | -------------------------------- | ------------------------------ |
| Hero       | 88-128px       | 64-88px       | 44-60px       | 0.9-1.0     | -0.02em to 0    | Once-per-page identity statement | Easy to overuse                |
| Display    | 56-80px        | 44-60px       | 34-44px       | 0.95-1.05   | -0.015em to 0   | Major narrative moments          | Needs manual line breaks       |
| H1         | 48-64px        | 40-52px       | 32-40px       | 1.0-1.1     | -0.01em to 0    | Page-level clarity               | Must align with semantic H1    |
| H2         | 36-48px        | 32-40px       | 28-34px       | 1.05-1.15   | 0               | Major sections                   | Too many H2s reduce rhythm     |
| H3         | 28-34px        | 26-32px       | 22-28px       | 1.1-1.2     | 0               | Content groups                   | Needs spacing discipline       |
| H4         | 20-24px        | 20-24px       | 18-22px       | 1.2-1.3     | 0               | Dense modules                    | Should not look like body text |
| Body Large | 19-22px        | 18-20px       | 17-19px       | 1.55-1.7    | 0               | Editorial intros                 | Can feel inflated if overused  |
| Body       | 16-18px        | 16-18px       | 16-17px       | 1.55-1.75   | 0               | Long-form reading                | Needs readable measure         |
| Body Small | 14-15px        | 14-15px       | 14-15px       | 1.45-1.6    | 0               | Dense UI support text            | Contrast must be strong        |
| Caption    | 12-13px        | 12-13px       | 12-13px       | 1.35-1.5    | 0.01em optional | Metadata and captions            | Often under-contrasted         |
| Label      | 11-13px        | 11-13px       | 11-13px       | 1.2-1.4     | 0.04em max      | Small labels and categories      | Uppercase must be rare         |
| Button     | 14-16px        | 14-16px       | 14-16px       | 1.1-1.25    | 0               | Action clarity                   | Must not wrap awkwardly        |
| Navigation | 13-15px        | 13-15px       | 14-16px       | 1.2-1.4     | 0               | Wayfinding                       | Too subtle harms conversion    |
| Code       | 13-15px        | 13-15px       | 13-14px       | 1.5-1.7     | 0               | Technical evidence               | Long code must be curated      |

## Hero Typography

Hero type should be used once per major page.

Why: hero scale creates identity and memory.

Tradeoff: large type consumes space and can become a gimmick if every section imitates it.

Rules:

- Manual line breaks are required.
- Avoid viewport-width font scaling.
- Do not animate every word.
- Preserve text selection and semantic HTML.
- Mobile hero text must be powerful but not cramped.

## Display Typography

Display type marks chapter changes and high-value narrative moments.

Why: it creates pacing and prevents long content from feeling monotonous.

Tradeoff: display type should not be used inside compact cards, forms, or product UI.

## Body Typography

Body copy must be comfortable enough for case studies and blog posts.

Why: persuasion depends on sustained reading.

Tradeoff: overly large body copy can make technical writing feel shallow; overly small copy feels inaccessible.

Rules:

- Keep readable measure.
- Use generous paragraph rhythm.
- Avoid low-contrast muted body text.
- Use lists for scanning when content is evaluative.

## Code Typography

Code should appear only when it is real evidence.

Why: authentic technical detail builds trust.

Tradeoff: long code dumps interrupt storytelling.

Rules:

- Use mono for commands, identifiers, metrics, and snippets.
- Add explanatory context around code.
- Avoid fake terminal decoration.
- Ensure horizontal scrolling does not break mobile reading.

## Letter Spacing

Default letter spacing should be neutral.

Use positive tracking only for small labels or rare metadata treatments.

Why: unnecessary tracking makes interfaces feel over-designed.

Tradeoff: some cinematic treatments may require optical adjustment, but they must be tested.

## Responsive Type Rules

- Use breakpoint-based steps, not fluid viewport scaling by default.
- Tune hero line breaks manually.
- Prevent orphaned single words in major headlines.
- Maintain readable measure at every viewport.
- Preserve semantic heading order.

Why: responsive typography should feel designed, not stretched.

Tradeoff: manual tuning takes longer but creates premium quality.

## Accessibility

Typography must support:

- 200 percent zoom
- Strong contrast
- Readable line height
- Semantic heading order
- Screen reader structure
- Reduced-motion alternatives for animated text

Why: premium design is readable design.

Tradeoff: some delicate visual treatments must be rejected.
