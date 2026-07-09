import { BriefcaseBusiness, Download } from "lucide-react";

import { cn } from "@/lib/utils";

import { experienceCopy } from "../experience/experience.config";
import type { ExperiencePhase } from "../orchestrator/use-experience-sequence";
import { HeroPortraitPlaceholder } from "./hero-portrait-placeholder";

type SignatureHeroProps = Readonly<{
  phase: ExperiencePhase;
}>;

export function SignatureHero({ phase }: SignatureHeroProps) {
  const isVisible = phase === "hero";

  return (
    <section
      className={cn(
        "relative z-30 grid min-h-dvh items-center px-5 py-24 transition-all duration-1000 ease-out sm:px-8 lg:px-12",
        isVisible
          ? "blur-0 translate-y-0 opacity-100"
          : "translate-y-6 opacity-0 blur-sm",
      )}
      aria-labelledby="landing-title"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)]">
        <div className="max-w-4xl">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
            {experienceCopy.eyebrow}
          </p>
          <h1
            id="landing-title"
            className="mt-5 max-w-5xl text-[clamp(3.3rem,10vw,9.5rem)] leading-[0.88] font-semibold tracking-[-0.045em] text-balance"
          >
            <span className="block">{experienceCopy.headline[0]}</span>
            <span className="text-muted-foreground block">
              {experienceCopy.headline[1]}
            </span>
          </h1>
          <p className="text-muted-foreground mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.45rem)] leading-8 text-pretty">
            {experienceCopy.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#landing-scroll-boundary"
              className="bg-primary text-primary-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <BriefcaseBusiness aria-hidden="true" className="size-4" />
              {experienceCopy.primaryCta}
            </a>
            <button
              type="button"
              aria-disabled="true"
              title="Resume asset will be connected when final content is approved."
              className="border-border bg-background/50 text-muted-foreground inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border px-6 text-sm font-medium backdrop-blur-md"
            >
              <Download aria-hidden="true" className="size-4" />
              {experienceCopy.secondaryCta}
            </button>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <HeroPortraitPlaceholder />
        </div>
      </div>
    </section>
  );
}
