import type { FeaturedProject } from "./project-engine";

export type ProjectFilterState = Readonly<{
  category: string;
  technology: string;
  year: string;
  query: string;
}>;

export const allFilterValue = "All";

export function filterProjects(
  projects: readonly FeaturedProject[],
  filters: ProjectFilterState,
) {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      filters.category === allFilterValue || project.category === filters.category;
    const matchesTechnology =
      filters.technology === allFilterValue ||
      project.technologies.includes(filters.technology);
    const matchesYear = filters.year === allFilterValue || project.year === filters.year;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      [project.title, project.summary, project.category]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesTechnology && matchesYear && matchesQuery;
  });
}
