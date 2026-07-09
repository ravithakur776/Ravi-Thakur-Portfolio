import type { MDXComponents } from "mdx/types";

export type MDXComponentMap = MDXComponents;

export const mdxContentDirectories = {
  blog: "src/content/blog",
  caseStudies: "src/content/case-studies",
  projects: "src/content/projects",
} as const;

export function createMdxSlug(parts: readonly string[]) {
  return parts.filter(Boolean).join("/");
}
