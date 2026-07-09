"use client";

import { useState } from "react";

import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

import { skillCategories } from "./skills.data";

type SkillCategoryLabel = (typeof skillCategories)[number]["label"];

export function SkillsExperience() {
  const [activeLabel, setActiveLabel] = useState<SkillCategoryLabel>(
    skillCategories[0].label,
  );
  const activeCategory =
    skillCategories.find((category) => category.label === activeLabel) ??
    skillCategories[0];

  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Skills organized by product capability."
      description="No progress bars, no inflated percentages. Skills are grouped by the kinds of product problems they unlock."
    >
      <div className="grid gap-6 lg:grid-cols-[22rem_1fr]">
        <div className="grid gap-2" role="tablist" aria-label="Skill groups">
          {skillCategories.map((category) => (
            <button
              key={category.label}
              type="button"
              role="tab"
              aria-selected={activeLabel === category.label}
              onClick={() => setActiveLabel(category.label)}
              className={cn(
                "border-border bg-secondary/25 hover:bg-card rounded-lg border px-5 py-4 text-left text-sm font-medium transition-colors",
                activeLabel === category.label && "border-ring bg-card",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        <div
          role="tabpanel"
          className="border-border bg-card/60 min-h-72 rounded-lg border p-6 lg:p-8"
        >
          <h3 className="text-3xl font-semibold">{activeCategory.label}</h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {activeCategory.skills.map((skill) => (
              <span
                key={skill}
                className="border-border bg-background/70 rounded-full border px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
