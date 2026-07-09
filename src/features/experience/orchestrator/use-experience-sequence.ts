"use client";

import { useEffect, useMemo, useState } from "react";

import { useMotionPreference } from "@/features/motion/motion-provider";

import { experienceTiming } from "../experience/experience.config";
import { useExperiencePreload } from "../loading/use-experience-preload";

export type ExperiencePhase = "loading" | "intro" | "hero";

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

export function useExperienceSequence() {
  const { prefersReducedMotion } = useMotionPreference();
  const preloadStatus = useExperiencePreload();
  const [phase, setPhase] = useState<ExperiencePhase>("loading");
  const [isLowBandwidth, setIsLowBandwidth] = useState(false);

  useEffect(() => {
    setIsLowBandwidth(prefersLowBandwidth());
  }, []);

  useEffect(() => {
    if (preloadStatus === "pending") {
      return;
    }

    const loadingTimer = window.setTimeout(() => {
      setPhase(prefersReducedMotion || isLowBandwidth ? "hero" : "intro");
    }, 180);

    return () => window.clearTimeout(loadingTimer);
  }, [isLowBandwidth, prefersReducedMotion, preloadStatus]);

  useEffect(() => {
    if (phase !== "intro") {
      return;
    }

    const introTimer = window.setTimeout(
      () => {
        setPhase("hero");
      },
      prefersReducedMotion
        ? experienceTiming.reducedMotionIntroMs
        : experienceTiming.introMs,
    );

    return () => window.clearTimeout(introTimer);
  }, [phase, prefersReducedMotion]);

  return useMemo(
    () => ({
      isLowBandwidth,
      phase,
      preloadStatus,
      prefersReducedMotion,
      skipIntro: () => setPhase("hero"),
    }),
    [isLowBandwidth, phase, preloadStatus, prefersReducedMotion],
  );
}
