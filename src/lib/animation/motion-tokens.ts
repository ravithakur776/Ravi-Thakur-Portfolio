export const motionDurations = {
  instant: 100,
  hover: 160,
  ui: 220,
  route: 360,
  reveal: 700,
  cinematic: 1000,
} as const;

export const motionEasings = {
  standardOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  standardInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  emphasizedOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  sharpOut: "cubic-bezier(0.33, 1, 0.68, 1)",
} as const;

export type MotionDuration = keyof typeof motionDurations;
export type MotionEasing = keyof typeof motionEasings;
