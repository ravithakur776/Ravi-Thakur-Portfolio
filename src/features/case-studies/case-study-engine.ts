import type { ContentRecord } from "@/lib/content/content-source";

import type { CaseStudyFrontmatter } from "./case-study.schema";

export type CaseStudy = ContentRecord<CaseStudyFrontmatter>;

export async function getPublishedCaseStudies(): Promise<readonly CaseStudy[]> {
  return [];
}
