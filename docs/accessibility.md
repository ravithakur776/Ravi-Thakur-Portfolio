# Accessibility

## Accessibility Philosophy

Accessibility is part of premium design. Ravi's platform should feel refined because it is usable, readable, respectful, and resilient across abilities, devices, and preferences.

Why: a site built to create professional trust cannot treat accessibility as cleanup.

Tradeoff: some visual ideas will be constrained or rejected. That constraint is a mark of design maturity.

## Standard

Target:

- WCAG 2.2 AA as baseline
- AAA where practical for long-form text
- Full keyboard access
- Visible focus
- Reduced motion support
- Semantic HTML
- Screen-reader-friendly content structure
- Accessible media alternatives

Why: these standards protect real users and reduce future remediation.

Tradeoff: compliance requires testing and design discipline, not just intention.

## Color and Contrast

Rules:

- Text must meet contrast requirements in dark and light themes.
- Focus states must be visible on every surface.
- Error, warning, success, and info states must not rely on color alone.
- Glass and media overlays must preserve text contrast.
- High contrast mode must flatten subtle atmosphere where necessary.

Why: premium subtlety often creates contrast failures.

Tradeoff: some delicate color treatments need stronger values than the art direction first suggests.

## Typography Accessibility

Rules:

- Body text must remain readable at 200 percent zoom.
- Line length must stay comfortable.
- Line height must support sustained reading.
- Avoid tiny muted text for important information.
- Avoid all caps for long labels.
- Animated text must have static equivalents.

Why: readability is the foundation of persuasion.

Tradeoff: dramatic typography must be reserved for short, meaningful moments.

## Motion Accessibility

Rules:

- Respect `prefers-reduced-motion`.
- Do not use scroll motion as the only path to content.
- Avoid fast flashes, jitter, abrupt zoom, and excessive parallax.
- Provide static fallbacks for 3D and video.
- Do not block navigation with animated intros.

Why: motion can cause discomfort and block comprehension.

Tradeoff: reduced-motion users receive a calmer version of the brand, not a lesser version.

## Keyboard Accessibility

Rules:

- Interactive elements must be reachable by keyboard.
- Focus order must match visual and reading order.
- Focus rings must never be removed.
- Custom interactions must define keyboard equivalents.
- Escape must close dismissible overlays.
- Dialogs and modals must trap and restore focus.

Why: keyboard support is both accessibility and power-user quality.

Tradeoff: custom UI requires more design and engineering work.

## Screen Reader Accessibility

Rules:

- Use semantic landmarks.
- Maintain heading order.
- Label controls clearly.
- Use descriptive alt text for meaningful images.
- Mark decorative media appropriately.
- Provide text summaries for complex diagrams.
- Announce async AI states and form errors.

Why: the site must communicate structure without relying on visuals.

Tradeoff: visual reorderings should be limited when they harm source order.

## Media Accessibility

Images:

- Meaningful images need descriptive alt text.
- Decorative images should be hidden from assistive technology.
- Complex diagrams need text summaries.
- Screenshots should explain what matters, not every pixel.

Video:

- Spoken content needs captions or transcript.
- Background videos must not contain essential information.
- Autoplaying video must be muted and nonessential.
- Motion-heavy video must respect reduced motion.
- Provide poster images.

Why: media is part of content, not decoration.

Tradeoff: accessible media requires editorial support and production planning.

## AI Accessibility

Future AI experiences must support:

- Keyboard submission
- Clear loading and streaming states
- Screen-reader announcements for new responses
- Copy controls with confirmation
- Recoverable errors
- Rate-limit messaging
- User control over generated content
- Clear source or context disclosure where relevant

Why: AI interfaces often fail accessibility through dynamic updates and ambiguous state.

Tradeoff: accessible AI requires more state design before implementation.

## Forms

Rules:

- Labels are visible.
- Errors are specific.
- Required fields are clear.
- Help text is associated with controls.
- Submit states prevent duplicate action.
- Success states confirm outcome.

Why: forms are conversion-critical and trust-sensitive.

Tradeoff: minimal visual forms still need complete semantic structure.

## High Contrast

High contrast mode should:

- Increase text clarity.
- Strengthen borders.
- Make focus unmistakable.
- Reduce or remove atmospheric noise.
- Flatten glass.
- Preserve brand structure.

Why: accessibility modes should feel intentionally designed.

Tradeoff: some cinematic softness is reduced.

## Testing Strategy

Required checks:

- Keyboard-only navigation
- Screen reader smoke testing
- Reduced motion
- Color contrast
- Zoom at 200 percent
- Mobile touch targets
- Dialog focus management
- Form error announcements
- Video captions or transcripts
- AI streaming announcements when AI ships

Why: automated checks are useful but incomplete.

Tradeoff: manual testing adds time, but prevents failures that damage trust.

## Non-Negotiables

- Never hide focus.
- Never rely on color alone.
- Never make essential content motion-only.
- Never put long text over busy video.
- Never block navigation with cinematic effects.
- Never ship custom controls without keyboard behavior.
- Never ship 3D or video without fallback.
