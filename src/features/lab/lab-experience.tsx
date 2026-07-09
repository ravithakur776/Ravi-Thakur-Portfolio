import { PlaceholderMedia } from "@/components/ui/placeholder-media";
import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import { labCapabilities } from "./lab-engine";

export function LabExperience() {
  return (
    <SectionShell
      id="lab"
      eyebrow="Lab"
      title="A future home for experiments."
      description="The lab is an architecture layer for prototypes, concepts, AI explorations, mini products, and open-source artifacts."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <PlaceholderMedia
          variant="lab"
          label="Lab experiment media placeholder"
          className="min-h-96"
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {labCapabilities.map((item) => (
            <article
              key={item.category}
              className="border-border bg-card/55 rounded-lg border p-5"
            >
              <StatusBadge
                tone={item.status === "architecture-ready" ? "accent" : "pending"}
              >
                {item.status}
              </StatusBadge>
              <h3 className="mt-5 text-lg font-semibold">{item.category}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-6">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
