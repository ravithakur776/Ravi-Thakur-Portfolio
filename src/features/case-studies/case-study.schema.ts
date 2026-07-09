import { z } from "zod";

import { contentStatuses } from "@/lib/content/content-status";

export const caseStudyFrontmatterSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  slug: z.string().min(1),
  status: z.enum(contentStatuses).default("draft"),
  client: z.string().optional(),
  role: z.string().min(1),
  challenge: z.string().min(1),
  outcome: z.string().min(1),
  disciplines: z.array(z.string()).default([]),
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  ogImage: z.string().optional(),
});

export type CaseStudyFrontmatter = z.infer<typeof caseStudyFrontmatterSchema>;
