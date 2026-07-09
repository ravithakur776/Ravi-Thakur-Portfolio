import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

import type { ExperiencePhase } from "../orchestrator/use-experience-sequence";

type ScrollIndicatorProps = Readonly<{
  phase: ExperiencePhase;
}>;

export function ScrollIndicator({ phase }: ScrollIndicatorProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all delay-700 duration-700",
        phase === "hero" ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
      )}
      aria-hidden="true"
    >
      <div className="text-muted-foreground flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.16em] uppercase">Scroll</span>
        <ArrowDown className="experience-scroll-arrow size-4" />
      </div>
    </div>
  );
}
