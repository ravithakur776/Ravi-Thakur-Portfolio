import { cn } from "@/lib/utils";

import type { ExperiencePhase } from "../orchestrator/use-experience-sequence";

type PremiumLoaderProps = Readonly<{
  phase: ExperiencePhase;
}>;

export function PremiumLoader({ phase }: PremiumLoaderProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-50 grid place-items-center bg-black transition-[opacity,filter] duration-700 ease-out",
        phase === "loading" ? "blur-0 opacity-100" : "opacity-0 blur-md",
      )}
      aria-hidden={phase !== "loading"}
    >
      <div className="w-64">
        <div className="h-px w-full overflow-hidden bg-white/15">
          <div className="experience-load-line h-full w-1/2 bg-white" />
        </div>
        <div className="mt-5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-white/60 uppercase">
          <span>Ravi Thakur</span>
          <span>Loading</span>
        </div>
      </div>
    </div>
  );
}
