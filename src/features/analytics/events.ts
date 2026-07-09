export type AnalyticsEventName =
  | "command_palette_opened"
  | "theme_changed"
  | "navigation_intent"
  | "future_ai_prompt_submitted";

export type AnalyticsEvent = Readonly<{
  name: AnalyticsEventName;
  properties?: Record<string, string | number | boolean>;
}>;

export function trackEvent(_event: AnalyticsEvent) {
  // Intentionally empty until analytics destinations are finalized.
}
