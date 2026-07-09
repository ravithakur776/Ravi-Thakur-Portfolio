"use client";

import { BackgroundLayerSystem } from "../atmosphere/background-layer-system";
import { SignatureHero } from "../hero/signature-hero";
import { IntroVideoLayer } from "../intro-video/intro-video-layer";
import { PremiumLoader } from "../loading/premium-loader";
import { FloatingNavigation } from "../navigation/floating-navigation";
import { ScrollIndicator } from "../scroll-indicator/scroll-indicator";
import { ExperienceTransitionLayer } from "../transition/experience-transition-layer";
import { useExperienceSequence } from "./use-experience-sequence";
import { useExperiencePointer } from "../pointer/use-experience-pointer";

export function SignatureExperience() {
  const { phase, skipIntro } = useExperienceSequence();
  const pointerRef = useExperiencePointer();

  return (
    <div
      ref={pointerRef}
      className="experience-stage bg-background text-foreground relative min-h-dvh overflow-hidden"
    >
      <BackgroundLayerSystem />
      <ExperienceTransitionLayer />
      <PremiumLoader phase={phase} />
      <IntroVideoLayer phase={phase} skipIntro={skipIntro} />
      <FloatingNavigation phase={phase} />
      <SignatureHero phase={phase} />
      <ScrollIndicator phase={phase} />
      <div id="landing-scroll-boundary" className="sr-only" aria-hidden="true" />
    </div>
  );
}
