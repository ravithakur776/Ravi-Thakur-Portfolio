import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";
import { featuredProjects } from "@/features/projects/project-engine";

import { createCaseStudyBlueprint } from "./case-study-engine";

const caseStudyBlueprints = featuredProjects.map((project) =>
  createCaseStudyBlueprint(project.slug, project.title),
);

export function CaseStudyExperience() {
  return (
    <SectionShell
      id="case-studies"
      eyebrow="Case Study Engine"
      title="Reusable structure for serious project storytelling."
      description="Every project can graduate into a full case study with consistent sections for problem, research, design, engineering, architecture, outcomes, and lessons."
    >
      <div className="grid gap-4 lg:grid-cols-5">
        {caseStudyBlueprints.map((blueprint) => (
          <article
            key={blueprint.slug}
            className="border-border bg-card/55 rounded-lg border p-5"
          >
            <StatusBadge tone="pending">{blueprint.status}</StatusBadge>
            <h3 className="mt-5 text-lg font-semibold">{blueprint.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-6">
              {blueprint.sections.length} reusable sections prepared.
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
