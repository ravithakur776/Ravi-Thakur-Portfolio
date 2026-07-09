"use client";

import { useEffect, useMemo, useState } from "react";

import { useMotionPreference } from "@/features/motion/motion-provider";

import { landingTiming } from "./landing.config";

export type LandingPhase = "loading" | "intro" | "hero";

function prefersLowBandwidth() {
  if (typeof navigator === "undefined") {
    return false;
  }

  const connection = (
    navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        saveData?: boolean;
      };
    }
  ).connection;

  return Boolean(
    connection?.saveData ||
    connection?.effectiveType === "slow-2g" ||
    connection?.effectiveType === "2g",
  );
}

export function useLandingSequence() {
  const { prefersReducedMotion } = useMotionPreference();
  const [phase, setPhase] = useState<LandingPhase>("loading");
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);

  useEffect(() => {
    setIsLowBandwidth(prefersLowBandwidth());
  }, []);

  useEffect(() => {
    const loadingTimer = window.setTimeout(() => {
      setPhase(prefersReducedMotion || isLowBandwidth ? "hero" : "intro");
    }, landingTiming.loadingMs);

    return () => window.clearTimeout(loadingTimer);
  }, [isLowBandwidth, prefersReducedMotion]);

  useEffect(() => {
    if (phase !== "intro") {
      return;
    }

    const introTimer = window.setTimeout(
      () => {
        setPhase("hero");
      },
      prefersReducedMotion ? landingTiming.reducedMotionIntroMs : landingTiming.introMs,
    );

    return () => window.clearTimeout(introTimer);
  }, [phase, prefersReducedMotion]);

  return useMemo(
    () => ({
      isLowBandwidth,
      phase,
      prefersReducedMotion,
      skipIntro: () => setPhase("hero"),
    }),
    [isLowBandwidth, phase, prefersReducedMotion],
  );
}
