import type { ContentRecord } from "@/lib/content/content-source";

import type { BlogPostFrontmatter } from "./blog.schema";

export type BlogPost = ContentRecord<BlogPostFrontmatter>;

export type BlogEngineCapability = Readonly<{
  label: string;
  status: "ready" | "requires-content" | "future";
  reason: string;
}>;

export const blogEngineCapabilities = [
  {
    label: "MDX publishing",
    status: "ready",
    reason: "Frontmatter schema and MDX source boundary already exist.",
  },
  {
    label: "Tags and categories",
    status: "ready",
    reason: "Validated metadata enables filtering, RSS, and related posts.",
  },
  {
    label: "Reading time",
    status: "requires-content",
    reason: "Computed once real article body content is indexed.",
  },
  {
    label: "Syntax highlighting",
    status: "future",
    reason: "Kept behind the MDX renderer so code themes do not affect shell CSS.",
  },
] satisfies readonly BlogEngineCapability[];

export async function getPublishedBlogPosts(): Promise<readonly BlogPost[]> {
  return [];
}
