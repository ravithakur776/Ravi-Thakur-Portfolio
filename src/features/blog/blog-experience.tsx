import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import { blogEngineCapabilities } from "./blog-engine";

export function BlogExperience() {
  return (
    <SectionShell
      id="writing"
      eyebrow="Blog Engine"
      title="Writing infrastructure before articles."
      description="The blog surface is prepared for MDX, metadata, RSS, search, and code-focused writing without publishing empty posts."
      className="bg-secondary/20"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {blogEngineCapabilities.map((capability) => (
          <article
            key={capability.label}
            className="border-border bg-card/55 rounded-lg border p-5"
          >
            <StatusBadge tone={capability.status === "ready" ? "accent" : "pending"}>
              {capability.status}
            </StatusBadge>
            <h3 className="mt-6 text-lg font-semibold">{capability.label}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-6">
              {capability.reason}
            </p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
