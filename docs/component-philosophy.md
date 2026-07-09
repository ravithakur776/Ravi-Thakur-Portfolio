# Component Philosophy

## Purpose

This document defines how future components should think, behave, and scale. It does not define finished UI, pages, or implementation.

Components should express the brand: precise, calm, useful, cinematic when appropriate, and always accessible.

Why: a premium personal platform should feel like a product system, not a set of one-off portfolio sections.

Tradeoff: component discipline slows early experimentation but prevents long-term design drift.

## Component Principles

### Start With User Intent

Every component must answer what the visitor is trying to understand or do.

Why: beautiful components that do not clarify intent weaken conversion.

Tradeoff: decorative patterns will be rejected.

### Separate Primitive From Product

Low-level primitives belong in shared UI. Product-specific compositions belong in feature modules.

Why: this keeps the design system reusable without turning it into a generic kit.

Tradeoff: more folder and ownership discipline is required.

### State Is Design

Every component must define default, hover, pressed, focus, disabled, loading, error, empty, and success states where relevant.

Why: polished products reveal quality through edge states.

Tradeoff: components take longer to define, but behave better in production.

### Motion Is Part of State

Motion should clarify state changes and spatial relationships.

Why: component motion can make interfaces feel coherent.

Tradeoff: components need reduced-motion behavior from the start.

## Buttons

Purpose: decisive actions.

States:

- Default: clear affordance and label
- Hover: slight contrast or border clarity
- Pressed: tactile inward state
- Focus: visible ring
- Loading: stable width and clear pending state
- Disabled: reduced emphasis but readable

Spacing:

- Minimum comfortable hit area.
- Icon and text spacing follows the 8pt system.
- Avoid cramped labels.

Interaction:

- Icons are used only when they clarify intent.
- Destructive actions require clear visual distinction.
- Primary actions should be rare and obvious.

Accessibility:

- Label must be accessible without relying on icon alone.
- Loading states must not trap focus.

Future scalability:

- Variants should map to semantic intent, not visual novelty.

Why: buttons are conversion infrastructure.

Tradeoff: fewer variants mean less novelty but stronger recognition.

## Cards

Purpose: repeated content previews or compact evidence containers.

Rules:

- Do not nest cards inside cards.
- Do not turn whole page sections into cards.
- Use cards for repeated items, summaries, and scannable proof.
- Hover only when clickable.

Spacing:

- Internal spacing must follow density mode: editorial or product.
- Media, title, metadata, and action hierarchy must be clear.

Accessibility:

- Clickable cards need clear focus states.
- Do not hide essential content on hover.

Future scalability:

- Project cards, article cards, and evidence cards should share principles but not necessarily identical layouts.

Why: card overuse is a common template-portfolio failure.

Tradeoff: some sections need custom editorial layout instead of generic cards.

## Forms

Purpose: high-trust conversion and communication.

States:

- Empty
- Focused
- Filled
- Error
- Disabled
- Submitting
- Success

Spacing:

- Labels, help text, inputs, and errors must have consistent rhythm.
- Forms should feel focused, not cramped.

Interaction:

- Errors appear near the relevant field.
- Submit state prevents duplicate action.
- Success confirms what happens next.

Accessibility:

- Labels are visible.
- Help and error text are programmatically associated.
- Keyboard submission works predictably.

Why: contact flows directly affect opportunity.

Tradeoff: minimal forms still need complete state design.

## Timeline

Purpose: show progression, growth, process, or case study sequence.

Rules:

- Use chronology only when sequence matters.
- Support scanning.
- Avoid decorative lines without content value.
- Mobile order must remain simple.

States:

- Current item
- Completed item
- Expanded detail
- Collapsed summary

Accessibility:

- Timeline content must be readable as normal document flow.
- Dates and labels must not be visually tiny.

Why: timelines can quickly become decoration.

Tradeoff: narrative structure may be better than strict chronology.

## Navigation

Purpose: orientation and movement.

Rules:

- Keep primary navigation concise.
- Make active location clear.
- Preserve keyboard access.
- Avoid hiding important routes behind complex menus.
- Sticky navigation must not dominate mobile.

States:

- Default
- Hover
- Active
- Focus
- Open
- Scrolled

Why: navigation should create confidence without dominating the brand.

Tradeoff: cinematic pages still need practical wayfinding.

## Dialogs and Modals

Purpose: focused tasks or contextual detail.

Rules:

- Use sparingly.
- Avoid for long reading.
- Provide visible close control.
- Escape closes dismissible overlays.
- Trap and restore focus.

Spacing:

- Dialog content must have generous internal rhythm.
- Avoid edge-to-edge controls.

Why: modals interrupt flow and must justify that interruption.

Tradeoff: immersive media may need overlay patterns, but accessibility requirements remain.

## Project Cards

Purpose: help users evaluate work quickly.

Required information:

- Project name
- Role
- Problem
- Outcome
- Technology or craft signal
- Visual proof

Interaction:

- Hover may reveal secondary metadata only.
- Primary details must be visible without hover.

Accessibility:

- Entire card click targets must have clear names.
- Focus state must be as strong as hover.

Why: project previews must sell judgment, not just aesthetics.

Tradeoff: cards need editorial discipline and cannot carry every detail.

## Case Study System

Purpose: convert interest into trust.

Recommended structure:

- Context
- Challenge
- Constraints
- Role
- Process
- Decisions
- Outcome
- Reflection

Components may include:

- Metrics
- Screenshots
- Decision callouts
- Technical diagrams
- Before/after modules
- Timeline segments

Why: case studies must show thinking, not only screenshots.

Tradeoff: stronger writing and artifact selection are required.

## AI Chat

Purpose: future interactive intelligence layer.

Rules:

- AI must have a clear user purpose.
- Streaming states must be legible.
- Errors must be recoverable.
- Responses should cite or reveal source context when relevant.
- User privacy, limits, and cost boundaries must be clear.

States:

- Empty prompt
- Thinking
- Streaming
- Tool use
- Error
- Rate limited
- Complete
- Copied

Accessibility:

- New responses must be announced appropriately.
- Keyboard submission and navigation must work.

Why: AI should strengthen Ravi's brand as a creative product builder, not feel bolted on.

Tradeoff: AI requires product strategy before visual treatment.

## Footer

Purpose: final trust and wayfinding layer.

Rules:

- Include essential links.
- Keep contact path clear.
- Avoid becoming a dumping ground.
- Use subtle brand closure.

Why: footer quality affects the final impression.

Tradeoff: minimal footer content must still be useful.

## Hero

Purpose: establish identity, positioning, and momentum.

Rules:

- The hero must make Ravi's identity immediately clear.
- It should not be built until content and visual direction are ready.
- Motion or media must support the message.
- The next section should be hinted, not hidden.

Why: the hero is the strongest brand moment.

Tradeoff: delaying hero implementation prevents premature template design.

## Component Documentation Standard

Every future component should document:

- Purpose
- Anatomy
- States
- Spacing
- Interaction
- Motion
- Responsive behavior
- Accessibility
- Content rules
- Do and do not examples

Why: components become durable only when usage is documented.

Tradeoff: documentation effort increases, but system drift decreases.
