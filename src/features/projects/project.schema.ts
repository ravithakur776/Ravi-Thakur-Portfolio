import { z } from "zod";

import { contentStatuses } from "@/lib/content/content-status";

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  status: z.enum(contentStatuses).default("draft"),
  role: z.string().min(1),
  outcome: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  ogImage: z.string().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
