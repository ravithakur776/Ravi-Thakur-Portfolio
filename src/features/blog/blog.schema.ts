import { z } from "zod";

import { contentStatuses } from "@/lib/content/content-status";

export const blogPostFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  status: z.enum(contentStatuses).default("draft"),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  tags: z.array(z.string()).default([]),
  canonicalUrl: z.string().url().optional(),
  ogImage: z.string().optional(),
});

export type BlogPostFrontmatter = z.infer<typeof blogPostFrontmatterSchema>;
