# Motion Bible

## Motion Philosophy

Motion should make the platform feel alive, intelligent, and coherent. Every animation must communicate hierarchy, continuity, state, causality, or narrative progression.

Core rule: if motion does not explain something, emphasize something meaningful, or create useful atmosphere, it should not ship.

Why: restrained motion feels premium and technically mature.

Tradeoff: fewer animations means every animation needs stronger craft and testing.

## Motion Personality

Motion should feel:

- Confident
- Smooth
- Weight-aware
- Quietly responsive
- Cinematic when earned
- Fast when task-oriented

Motion should not feel:

- Bouncy by default
- Game-like
- Glitchy
- Hyperactive
- Decorative
- Scroll-hijacked

## Duration System

| Motion Intent            | Duration   | Use                                  | Why                    | Tradeoff                       |
| ------------------------ | ---------- | ------------------------------------ | ---------------------- | ------------------------------ |
| Instant feedback         | 80-120ms   | Press, toggle, tiny state changes    | Feels responsive       | Too fast may be invisible      |
| Hover                    | 120-180ms  | Surface, border, text feedback       | Confirms affordance    | Hover cannot be only cue       |
| Small UI transition      | 180-240ms  | Accordion, popover, local reveal     | Supports comprehension | Can feel sluggish if repeated  |
| Route or page transition | 280-420ms  | Related page movement                | Preserves orientation  | Must not delay task completion |
| Narrative reveal         | 420-700ms  | Case study proof, section entrance   | Creates cinematic pace | Overuse slows scanning         |
| Cinematic sequence       | 700-1200ms | Optional intro or major media moment | Creates memory         | Must be rare and skippable     |

## Ease Curves

| Curve Intent    | Feeling                  | Use                                    | Why                     | Tradeoff                   |
| --------------- | ------------------------ | -------------------------------------- | ----------------------- | -------------------------- |
| Standard out    | Quick start, calm settle | Hover, cards, controls                 | Feels responsive        | Less cinematic             |
| Standard in-out | Balanced continuity      | Shared transitions                     | Preserves spatial logic | Can feel generic           |
| Emphasized out  | Slow, confident settle   | Narrative reveals                      | Feels premium           | Too slow for controls      |
| Sharp out       | Tactile                  | Press states                           | Feels immediate         | Can feel abrupt            |
| Linear          | Mechanical               | Progress, looping technical indicators | Honest timing           | Feels lifeless if overused |

Why: easing defines physical personality.

Tradeoff: too many curves create inconsistency. Future implementation should tokenize them.

## Page Transitions

Use page transitions for:

- Project list to project detail
- Case study chapter progression
- Immersive media opening
- AI experience entry

Avoid page transitions for:

- Basic navigation that should feel instant
- Forms
- Error recovery
- Reduced-motion mode

Why: page transitions should preserve orientation, not delay access.

Tradeoff: sophisticated transitions require route structure, loading states, and careful accessibility.

## Hover Philosophy

Hover is confirmation, not performance.

Preferred hover behavior:

- Slight surface lift
- Clearer border
- Subtle media movement
- Underline or contrast shift
- Optional metadata reveal only when nonessential

Avoid:

- Large scale jumps
- Flashing colors
- Hover-only critical information
- Complex effects without touch equivalents

Why: hover should make the interface feel responsive and confident.

Tradeoff: touch devices need visible alternatives.

## Scroll Philosophy

Scroll should feel like narrative progression controlled by the user.

Use scroll motion for:

- Sequential proof reveal
- Case study chapter anchoring
- Before/after comparisons
- Slow atmospheric layer movement
- Progress awareness

Never use:

- Scroll hijacking
- Required parallax for comprehension
- Sticky sections that trap users
- Scroll effects that overlap text
- Content that only exists after animation

Why: scroll is user agency. The site should guide, not seize control.

Tradeoff: scroll storytelling requires extensive device QA.

## Loading Philosophy

Loading should communicate readiness and respect.

Use:

- Skeletons for product-like content
- Soft image and video fades
- Real progress only when progress is measurable
- Static fallbacks for reduced motion
- Deferred loading for noncritical media

Avoid:

- Fake progress
- Long intro loaders
- Blocking brand animations
- Spinners without context

Why: premium products respect time.

Tradeoff: well-designed loading states require more product thinking.

## 3D Philosophy

Three.js and React Three Fiber should be used only where spatial depth improves meaning.

Use 3D for:

- Interactive architecture explanations
- A restrained signature brand object tied to Ravi's identity
- Technical systems that benefit from depth
- AI concept visualization when it clarifies behavior
- Optional immersive case study moments

Never use 3D for:

- Decorative floating shapes
- Background motion behind body text
- Constant GPU activity on every page
- Mobile-only spectacle
- Anything that blocks core content

Why: 3D can create memorability or instantly cheapen the brand.

Tradeoff: 3D adds performance, QA, fallback, and accessibility cost.

## GPU Budget

Rules:

- Pause rendering when offscreen.
- Cap pixel ratio on high-density displays.
- Avoid heavy post-processing by default.
- Keep scene geometry and texture count low.
- Do not render complex scenes during idle reading.
- Provide static or video fallbacks.
- Disable nonessential 3D on low-power devices.

Why: low CPU/GPU usage is part of perceived quality.

Tradeoff: some visual fidelity must adapt by device.

## Parallax Philosophy

Parallax should be slow, subtle, and layered.

Why: slight depth can create cinematic atmosphere.

Tradeoff: parallax can cause discomfort and performance issues.

Rules:

- Disable for reduced motion.
- Keep movement below the threshold where users notice the effect before the content.
- Never use parallax for essential comprehension.

## Cursor Philosophy

Custom cursor behavior should be rare.

Use only when:

- It clarifies drag, explore, or inspect behavior.
- It improves an interactive demo.
- It is disabled on touch devices.
- It does not affect normal reading.

Avoid:

- Cursor trails
- Magnetic gimmicks everywhere
- Oversized cursors over text
- Cursor-dependent controls

Why: custom cursors often harm usability.

Tradeoff: the brand will feel less flashy but more professional.

## Micro Interactions

Micro interactions should support:

- Press feedback
- Copy-to-clipboard confirmation
- Form validation
- AI streaming states
- Media controls
- Timeline expansion
- Filter changes
- Theme switching

Why: small interactions reveal product care.

Tradeoff: every micro interaction expands testing surface.

## Video Motion Rules

AI intro movie:

- Optional or nonblocking.
- Short enough to communicate positioning within seconds.
- Must have poster fallback.
- Must respect reduced motion.
- Must not contain essential text without transcript or alternative.

Background videos:

- Muted autoplay only.
- No essential information.
- Pause or simplify on mobile when needed.
- Avoid behind long text.

Why: video can create memory, but also wastes attention and bandwidth.

Tradeoff: production quality must be high enough to justify cost.

## Reduced Motion

Reduced motion mode must:

- Remove parallax.
- Stop nonessential looping animation.
- Replace section entrances with static visibility or simple opacity.
- Preserve all content and hierarchy.
- Avoid animated text reveals that hide reading.
- Provide static 3D and video fallbacks.

Why: accessibility is not a variant; it is a core experience.

Tradeoff: cinematic expression becomes quieter for users who need it.
