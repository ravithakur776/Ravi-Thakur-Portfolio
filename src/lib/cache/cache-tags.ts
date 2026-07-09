export const cacheTags = {
  blog: "blog",
  caseStudies: "case-studies",
  projects: "projects",
  navigation: "navigation",
  sitemap: "sitemap",
} as const;

export type CacheTag = (typeof cacheTags)[keyof typeof cacheTags];
