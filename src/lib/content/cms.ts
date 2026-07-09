export type CMSProvider = "none" | "contentful" | "sanity" | "builder" | "custom";

export type CMSIntegrationConfig = Readonly<{
  provider: CMSProvider;
  isEnabled: boolean;
}>;

export const cmsIntegrationConfig = {
  provider: "none",
  isEnabled: false,
} as const satisfies CMSIntegrationConfig;
