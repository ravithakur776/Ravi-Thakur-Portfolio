import { ArrowUpRight } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import { aboutPrinciples, aboutTimeline } from "./about.data";

export function AboutExperience() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A builder shaped by product, systems, and visual judgment."
      description="The story is intentionally concise: Ravi's platform should communicate range through structured evidence, not long biography."
      className="bg-background"
    >
      <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="border-border bg-card/55 rounded-lg border p-6 shadow-sm lg:p-8">
          <StatusBadge tone="accent">Operating Mode</StatusBadge>
          <p className="mt-8 text-[clamp(1.5rem,3vw,2.6rem)] leading-tight font-medium text-balance">
            Software Engineer. Creative Product Builder. Focused on products where
            engineering meets design.
          </p>
          <p className="text-muted-foreground mt-6 leading-7">
            This section is designed to become evidence-led as real resume, project, and
            case-study material is approved.
          </p>
        </article>
        <div className="grid gap-4 md:grid-cols-3">
          {aboutPrinciples.map((principle) => (
            <article
              key={principle.title}
              className="border-border bg-secondary/30 rounded-lg border p-5"
            >
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <h3 className="mt-8 text-lg font-semibold">{principle.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {principle.body}
              </p>
            </article>
          ))}
        </div>
      </div>
      <ol className="border-border bg-background/70 mt-4 grid gap-px overflow-hidden rounded-lg border md:grid-cols-5">
        {aboutTimeline.map((item, index) => (
          <li key={item} className="bg-card/45 p-5">
            <span className="text-muted-foreground font-mono text-xs">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-4 text-sm font-medium">{item}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
