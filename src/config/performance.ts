export const performanceTargets = {
  lighthouse: 95,
  cumulativeLayoutShift: 0.05,
  largestContentfulPaintMs: 2500,
  targetFrameRate: 60,
} as const;

export const cacheProfiles = {
  staticShell: {
    maxAge: 3600,
    sharedMaxAge: 86400,
  },
  contentIndex: {
    maxAge: 300,
    sharedMaxAge: 3600,
  },
  mediaAsset: {
    maxAge: 31536000,
    immutable: true,
  },
} as const;

export const imagePolicy = {
  formats: ["avif", "webp"],
  requireExplicitDimensions: true,
  lazyLoadBelowFold: true,
} as const;

export const videoPolicy = {
  requirePoster: true,
  mutedAutoplayOnly: true,
  noEssentialBackgroundVideoContent: true,
  respectReducedMotion: true,
} as const;
