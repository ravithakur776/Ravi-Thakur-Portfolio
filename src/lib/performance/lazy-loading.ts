export type LazyLoadStrategy = "eager" | "viewport" | "interaction" | "idle";

export type LoadableCapability = Readonly<{
  strategy: LazyLoadStrategy;
  reason: string;
}>;

export const lazyLoadCapabilities = {
  threeScene: {
    strategy: "viewport",
    reason: "3D should not enter the route bundle until the scene is visible.",
  },
  aiAssistant: {
    strategy: "interaction",
    reason: "AI surfaces should load when the user opens or requests them.",
  },
  backgroundVideo: {
    strategy: "viewport",
    reason: "Video should load only when it can contribute to the visible experience.",
  },
  commandPalette: {
    strategy: "eager",
    reason: "Keyboard navigation infrastructure should be available immediately.",
  },
} as const satisfies Record<string, LoadableCapability>;
