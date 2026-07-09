"use client";

import type { ReactNode } from "react";

import { ExternalLink, Github, Search } from "lucide-react";
import { useMemo, useState } from "react";

import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import {
  featuredProjects,
  getProjectCategories,
  getProjectTechnologies,
} from "./project-engine";
import { allFilterValue, filterProjects } from "./project-filters";

const years = [allFilterValue, "TBD"] as const;

export function FeaturedProjects() {
  const categories = useMemo(() => [allFilterValue, ...getProjectCategories()], []);
  const technologies = useMemo(() => [allFilterValue, ...getProjectTechnologies()], []);
  const [category, setCategory] = useState(allFilterValue);
  const [technology, setTechnology] = useState(allFilterValue);
  const [year, setYear] = useState(allFilterValue);
  const [query, setQuery] = useState("");

  const filteredProjects = filterProjects(featuredProjects, {
    category,
    technology,
    year,
    query,
  });

  return (
    <SectionShell
      id="projects"
      eyebrow="Featured Work"
      title="A showcase built for real evidence."
      description="Project cards are production-ready but content-safe. They support video, images, stack, results, links, and case studies without inventing unavailable details."
      className="bg-secondary/20"
    >
      <div className="border-border bg-card/50 grid gap-3 rounded-lg border p-4 lg:grid-cols-[1fr_auto_auto_auto]">
        <label className="border-border bg-background/80 flex min-h-11 items-center gap-3 rounded-md border px-3">
          <Search aria-hidden="true" className="text-muted-foreground size-4" />
          <span className="sr-only">Search projects</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
            className="placeholder:text-muted-foreground h-10 w-full bg-transparent text-sm outline-none"
          />
        </label>
        <ProjectSelect
          label="Category"
          value={category}
          values={categories}
          onChange={setCategory}
        />
        <ProjectSelect
          label="Technology"
          value={technology}
          values={technologies}
          onChange={setTechnology}
        />
        <ProjectSelect label="Year" value={year} values={years} onChange={setYear} />
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="border-border bg-card/55 overflow-hidden rounded-lg border"
          >
            <PlaceholderMedia label={`${project.title} media placeholder`} />
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                <StatusBadge tone="accent">{project.category}</StatusBadge>
                <StatusBadge tone="pending">Content Pending</StatusBadge>
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
              <p className="text-muted-foreground mt-3 leading-7">{project.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ProjectSupportSlot
                  label="Tech Stack"
                  ready={project.technologies.length > 0}
                />
                <ProjectSupportSlot label="Results" ready={project.results.length > 0} />
                <ProjectSupportSlot
                  label="Case Study"
                  ready={Boolean(project.links.caseStudy)}
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ProjectLink label="GitHub" icon={<Github className="size-4" />} />
                <ProjectLink
                  label="Live Demo"
                  icon={<ExternalLink className="size-4" />}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

type ProjectSelectProps = Readonly<{
  label: string;
  value: string;
  values: readonly string[];
  onChange: (value: string) => void;
}>;

function ProjectSelect({ label, value, values, onChange }: ProjectSelectProps) {
  return (
    <label className="grid gap-1">
      <span className="text-muted-foreground text-xs">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="border-border bg-background min-h-11 rounded-md border px-3 text-sm"
      >
        {values.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

type ProjectSupportSlotProps = Readonly<{
  label: string;
  ready: boolean;
}>;

function ProjectSupportSlot({ label, ready }: ProjectSupportSlotProps) {
  return (
    <div className="border-border bg-background/60 rounded-md border p-3">
      <p className="font-mono text-[0.68rem] tracking-[0.12em] uppercase">{label}</p>
      <p className="text-muted-foreground mt-2 text-sm">
        {ready ? "Ready" : "Pending source"}
      </p>
    </div>
  );
}

type ProjectLinkProps = Readonly<{
  label: string;
  icon: ReactNode;
}>;

function ProjectLink({ label, icon }: ProjectLinkProps) {
  return (
    <button
      type="button"
      disabled
      title={`${label} link will be enabled when approved content is available.`}
      className="border-border text-muted-foreground inline-flex min-h-10 cursor-not-allowed items-center gap-2 rounded-full border px-4 text-sm opacity-70"
    >
      {icon}
      {label}
    </button>
  );
}
