import type { ContentRecord } from "@/lib/content/content-source";

import type { BlogPostFrontmatter } from "./blog.schema";

export type BlogPost = ContentRecord<BlogPostFrontmatter>;

export async function getPublishedBlogPosts(): Promise<readonly BlogPost[]> {
  return [];
}
