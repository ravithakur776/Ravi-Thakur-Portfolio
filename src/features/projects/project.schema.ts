import { z } from "zod";

import { contentStatuses } from "@/lib/content/content-status";

export const projectFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  status: z.enum(contentStatuses).default("draft"),
  role: z.string().min(1),
  category: z.string().min(1).default("Product"),
  year: z.string().min(4).optional(),
  outcome: z.string().optional(),
  technologies: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  media: z
    .object({
      poster: z.string().optional(),
      images: z.array(z.string()).default([]),
      videos: z.array(z.string()).default([]),
    })
    .default({ images: [], videos: [] }),
  links: z
    .object({
      github: z.string().url().optional(),
      liveDemo: z.string().url().optional(),
      caseStudy: z.string().optional(),
    })
    .default({}),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  ogImage: z.string().optional(),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type ProjectCategory =
  "Marketing" | "Sustainability" | "Mobility" | "Fitness" | "Library" | "Product";
