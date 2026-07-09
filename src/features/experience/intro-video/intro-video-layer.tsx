import { cn } from "@/lib/utils";

import type { ExperiencePhase } from "../orchestrator/use-experience-sequence";

type IntroVideoLayerProps = Readonly<{
  phase: ExperiencePhase;
  skipIntro: () => void;
}>;

export function IntroVideoLayer({ phase, skipIntro }: IntroVideoLayerProps) {
  const isVisible = phase === "intro";

  return (
    <section
      className={cn(
        "absolute inset-0 z-20 overflow-hidden bg-black transition-[opacity,filter,transform] duration-1000 ease-out",
        isVisible
          ? "blur-0 scale-100 opacity-100"
          : "pointer-events-none scale-[1.015] opacity-0 blur-sm",
      )}
      aria-label="Cinematic introduction"
      aria-hidden={!isVisible}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(116,232,220,0.20),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.82))]" />
      <div className="experience-intro-scan absolute inset-x-[12%] top-1/2 h-px bg-white/40" />
      <div className="absolute inset-0 [background-image:linear-gradient(115deg,transparent,rgba(255,255,255,0.10),transparent)] opacity-50" />
      <div className="absolute right-5 bottom-5 z-10">
        <button
          type="button"
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-md transition-colors hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          onClick={skipIntro}
        >
          Skip intro
        </button>
      </div>
    </section>
  );
}
