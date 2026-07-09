import type { ContentRecord } from "@/lib/content/content-source";

import type { ProjectCategory, ProjectFrontmatter } from "./project.schema";

export type Project = ContentRecord<ProjectFrontmatter>;

export type FeaturedProject = Readonly<{
  title: string;
  slug: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  status: "content-pending" | "case-study-ready";
  technologies: readonly string[];
  results: readonly string[];
  media: {
    poster?: string;
    images: readonly string[];
    videos: readonly string[];
  };
  links: {
    github?: string;
    liveDemo?: string;
    caseStudy?: string;
  };
}>;

export const featuredProjects = [
  {
    title: "Famex Marketing",
    slug: "famex-marketing",
    summary:
      "A marketing platform slot reserved for approved product narrative, visuals, and measurable outcomes.",
    category: "Marketing",
    year: "TBD",
    status: "content-pending",
    technologies: [],
    results: [],
    media: { images: [], videos: [] },
    links: {},
  },
  {
    title: "EcoFuture",
    slug: "ecofuture",
    summary:
      "A sustainability product slot prepared for a full case-study treatment once source material is available.",
    category: "Sustainability",
    year: "TBD",
    status: "content-pending",
    technologies: [],
    results: [],
    media: { images: [], videos: [] },
    links: {},
  },
  {
    title: "ParkPing",
    slug: "parkping",
    summary:
      "A mobility product slot designed to support video, architecture notes, and product results without schema changes.",
    category: "Mobility",
    year: "TBD",
    status: "content-pending",
    technologies: [],
    results: [],
    media: { images: [], videos: [] },
    links: {},
  },
  {
    title: "Lions Fitness",
    slug: "lions-fitness",
    summary:
      "A fitness product slot ready for interface media, implementation details, and a future case study.",
    category: "Fitness",
    year: "TBD",
    status: "content-pending",
    technologies: [],
    results: [],
    media: { images: [], videos: [] },
    links: {},
  },
  {
    title: "BNP Library",
    slug: "bnp-library",
    summary:
      "A library product slot prepared for structured research, system design, and technical documentation.",
    category: "Library",
    year: "TBD",
    status: "content-pending",
    technologies: [],
    results: [],
    media: { images: [], videos: [] },
    links: {},
  },
] satisfies readonly FeaturedProject[];

export function getProjectCategories(projects = featuredProjects) {
  return Array.from(new Set(projects.map((project) => project.category)));
}

export function getProjectTechnologies(projects = featuredProjects) {
  return Array.from(new Set(projects.flatMap((project) => project.technologies))).sort();
}

export async function getPublishedProjects(): Promise<readonly Project[]> {
  return [];
}
