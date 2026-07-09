"use client";

import Link from "next/link";
import { ArrowDown, BriefcaseBusiness, Download, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { useCommandPalette } from "@/features/command/command-palette-provider";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { cn } from "@/lib/utils";

import { landingCopy, landingMedia } from "./landing.config";
import { LandingScenePlaceholder } from "./landing-scene-placeholder";
import type { LandingPhase } from "./use-landing-sequence";
import { useLandingSequence } from "./use-landing-sequence";
import { usePointerAtmosphere } from "./use-pointer-atmosphere";

function LandingLoader({ phase }: { phase: LandingPhase }) {
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
          <div className="landing-load-line h-full w-1/2 bg-white" />
        </div>
        <div className="mt-5 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] text-white/60 uppercase">
          <span>Ravi Thakur</span>
          <span>Loading</span>
        </div>
      </div>
    </div>
  );
}

function IntroVideoLayer({
  phase,
  skipIntro,
}: {
  phase: LandingPhase;
  skipIntro: () => void;
}) {
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
      <div className="landing-intro-scan absolute inset-x-[12%] top-1/2 h-px bg-white/40" />
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

function LandingFloatingNavigation({ phase }: { phase: LandingPhase }) {
  const { open } = useCommandPalette();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (phase !== "hero") {
      setIsRevealed(false);
      return;
    }

    let hideTimer = window.setTimeout(() => setIsRevealed(false), 3600);
    const reveal = () => {
      window.clearTimeout(hideTimer);
      setIsRevealed(true);
      hideTimer = window.setTimeout(() => setIsRevealed(false), 3600);
    };

    const showTimer = window.setTimeout(reveal, 420);
    window.addEventListener("pointermove", reveal, { passive: true });
    window.addEventListener("keydown", reveal);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("pointermove", reveal);
      window.removeEventListener("keydown", reveal);
    };
  }, [phase]);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 transition-all duration-500",
        phase === "hero" && isRevealed
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0",
      )}
    >
      <nav
        className="border-border/40 bg-background/55 shadow-shell flex h-14 items-center justify-between rounded-full border px-3 backdrop-blur-2xl"
        aria-label="Landing navigation"
        onFocus={() => setIsRevealed(true)}
      >
        <Link
          href="/"
          className="focus-visible:ring-ring rounded-full px-3 py-2 font-mono text-xs font-medium tracking-[0.12em] uppercase outline-none focus-visible:ring-2"
          aria-label="Ravi Thakur home"
        >
          RT
        </Link>
        <div className="text-muted-foreground hidden items-center gap-1 text-sm sm:flex">
          <span className="rounded-full px-3 py-2">Work</span>
          <span className="rounded-full px-3 py-2">Case Studies</span>
          <span className="rounded-full px-3 py-2">Lab</span>
        </div>
        <div className="flex items-center gap-2">
          <IconButton
            aria-label="Open command palette"
            icon={<Search aria-hidden="true" className="size-4" />}
            onClick={open}
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function HeroMediaArchitecture() {
  return (
    <div
      className="landing-hero-media border-border/40 bg-card/30 relative aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl md:max-w-[26rem]"
      aria-label={landingMedia.heroImage.alt}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(116,232,220,0.25),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.14),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-8 top-10 h-px bg-white/25" />
      <div className="bg-accent/20 absolute right-8 bottom-10 left-8 h-28 rounded-full blur-3xl" />
      <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
    </div>
  );
}

function LandingHero({ phase }: { phase: LandingPhase }) {
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
            {landingCopy.eyebrow}
          </p>
          <h1
            id="landing-title"
            className="mt-5 max-w-5xl text-[clamp(3.3rem,10vw,9.5rem)] leading-[0.88] font-semibold tracking-[-0.045em]"
          >
            <span className="block">{landingCopy.headline[0]}</span>
            <span className="text-muted-foreground block">{landingCopy.headline[1]}</span>
          </h1>
          <p className="text-muted-foreground mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.45rem)] leading-8">
            {landingCopy.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#landing-scroll-boundary"
              className="bg-primary text-primary-foreground focus-visible:ring-ring focus-visible:ring-offset-background inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <BriefcaseBusiness aria-hidden="true" className="size-4" />
              {landingCopy.primaryCta}
            </a>
            <button
              type="button"
              aria-disabled="true"
              title="Resume asset will be connected when final content is approved."
              className="border-border bg-background/50 text-muted-foreground inline-flex min-h-12 cursor-not-allowed items-center justify-center gap-2 rounded-full border px-6 text-sm font-medium backdrop-blur-md"
            >
              <Download aria-hidden="true" className="size-4" />
              {landingCopy.secondaryCta}
            </button>
          </div>
        </div>
        <div className="hidden justify-end lg:flex">
          <HeroMediaArchitecture />
        </div>
      </div>
    </section>
  );
}

function ScrollIndicator({ phase }: { phase: LandingPhase }) {
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
        <ArrowDown className="landing-scroll-arrow size-4" />
      </div>
    </div>
  );
}

export function LandingStage() {
  const { phase, skipIntro } = useLandingSequence();
  const atmosphereRef = usePointerAtmosphere();

  return (
    <div
      ref={atmosphereRef}
      className="landing-stage bg-background text-foreground relative min-h-dvh overflow-hidden"
    >
      <div className="landing-atmosphere absolute inset-0 z-0" aria-hidden="true" />
      <LandingScenePlaceholder />
      <div className="landing-mask absolute inset-0 z-10" aria-hidden="true" />
      <LandingLoader phase={phase} />
      <IntroVideoLayer phase={phase} skipIntro={skipIntro} />
      <LandingFloatingNavigation phase={phase} />
      <LandingHero phase={phase} />
      <ScrollIndicator phase={phase} />
      <div id="landing-scroll-boundary" className="sr-only" aria-hidden="true" />
    </div>
  );
}
