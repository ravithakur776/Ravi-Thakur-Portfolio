import type { ContentRecord } from "@/lib/content/content-source";

import type { CaseStudyFrontmatter, CaseStudySection } from "./case-study.schema";

export type CaseStudy = ContentRecord<CaseStudyFrontmatter>;

export type CaseStudyBlueprint = Readonly<{
  slug: string;
  title: string;
  status: "content-pending" | "draft" | "published";
  sections: readonly CaseStudySection[];
  techStack: readonly string[];
  links: {
    github?: string;
    liveDemo?: string;
  };
}>;

export const requiredCaseStudySections = [
  "overview",
  "problem",
  "research",
  "design",
  "development",
  "architecture",
  "challenges",
  "results",
  "lessons",
  "tech-stack",
  "media",
  "links",
] as const;

export function createCaseStudyBlueprint(
  slug: string,
  title: string,
): CaseStudyBlueprint {
  return {
    slug,
    title,
    status: "content-pending",
    sections: requiredCaseStudySections.map((id) => ({
      id,
      title: id
        .split("-")
        .map((part) => part[0]?.toUpperCase() + part.slice(1))
        .join(" "),
      body: [],
      media: [],
    })),
    techStack: [],
    links: {},
  };
}

export async function getPublishedCaseStudies(): Promise<readonly CaseStudy[]> {
  return [];
}
