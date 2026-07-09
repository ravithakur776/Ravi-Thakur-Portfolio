"use client";

import { useState } from "react";

import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils";

import { journeyStages } from "./journey.data";

export function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeStage = journeyStages[activeIndex] ?? journeyStages[0];

  return (
    <SectionShell
      id="journey"
      eyebrow="Journey"
      title="A path from taste to technology."
      description="The timeline is interactive, keyboard accessible, and ready for richer source material as Ravi's story is formalized."
      className="bg-secondary/20"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-border bg-card/60 rounded-lg border p-6 lg:p-8">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.16em] uppercase">
            Current Focus
          </p>
          <h3 className="mt-6 text-[clamp(2rem,5vw,4.75rem)] leading-none font-semibold">
            {activeStage.label}
          </h3>
          <p className="text-muted-foreground mt-6 text-lg leading-8">
            {activeStage.summary}
          </p>
        </div>
        <ol className="grid gap-3" aria-label="Ravi's professional journey stages">
          {journeyStages.map((stage, index) => (
            <li key={stage.label}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "border-border bg-background/70 hover:bg-card focus-visible:ring-ring focus-visible:ring-offset-background grid w-full grid-cols-[3rem_1fr] items-start gap-4 rounded-lg border p-4 text-left transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  activeIndex === index && "border-ring bg-card",
                )}
                aria-pressed={activeIndex === index}
              >
                <span className="text-muted-foreground font-mono text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold">{stage.label}</span>
                  <span className="text-muted-foreground mt-1 block text-sm leading-6">
                    {stage.summary}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
