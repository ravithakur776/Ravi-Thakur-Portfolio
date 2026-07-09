import type { ContentRecord } from "@/lib/content/content-source";

import type { ProjectFrontmatter } from "./project.schema";

export type Project = ContentRecord<ProjectFrontmatter>;

export async function getPublishedProjects(): Promise<readonly Project[]> {
  return [];
}
