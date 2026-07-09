export const experienceTiming = {
  loadingMs: 1600,
  introMs: 20000,
  reducedMotionIntroMs: 700,
  heroRevealDelayMs: 420,
  navigationRevealDelayMs: 520,
  navigationAutoHideMs: 3600,
  navigationScrollThreshold: 8,
} as const;

export const experienceMedia = {
  introVideo: {
    desktopSources: [] as const,
    mobileSources: [] as const,
    poster: null,
    fallbackImage: null,
    preload: "metadata",
    futureProvider: "Google Flow",
  },
  heroPortrait: {
    src: null,
    alt: "Portrait or product-building visual for Ravi Thakur.",
  },
} as const;

export const experienceCopy = {
  eyebrow: "Ravi Thakur",
  headline: ["Software Engineer", "Creative Product Builder"],
  subheadline: "Building products where engineering meets design.",
  primaryCta: "Explore My Work",
  secondaryCta: "Download Resume",
} as const;

export const experienceNavigation = [
  { label: "Work", target: "#landing-scroll-boundary", isEnabled: false },
  { label: "Case Studies", target: "#landing-scroll-boundary", isEnabled: false },
  { label: "Lab", target: "#landing-scroll-boundary", isEnabled: false },
] as const;
