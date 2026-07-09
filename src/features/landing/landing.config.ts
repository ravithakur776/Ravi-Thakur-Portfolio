export const landingTiming = {
  loadingMs: 1600,
  introMs: 20000,
  reducedMotionIntroMs: 700,
  heroNavDelayMs: 420,
} as const;

export const landingMedia = {
  introVideo: {
    desktopSources: [] as const,
    mobileSources: [] as const,
    poster: null,
    fallbackImage: null,
    preload: "metadata",
  },
  heroImage: {
    src: null,
    alt: "Portrait or product-building visual for Ravi Thakur.",
  },
} as const;

export const landingCopy = {
  eyebrow: "Ravi Thakur",
  headline: ["Software Engineer", "Creative Product Builder"],
  subheadline: "Building products where engineering meets design.",
  primaryCta: "Explore My Work",
  secondaryCta: "Download Resume",
} as const;
