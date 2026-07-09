"use client";

import { useEffect, useState } from "react";

import { experienceMedia, experienceTiming } from "../experience/experience.config";

type PreloadStatus = "pending" | "ready" | "timed-out";

function preloadImage(src: string | null) {
  if (!src) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve) => {
    const image = new Image();
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
}

function prepareScenePlaceholder() {
  return new Promise<void>((resolve) => {
    const schedule =
      window.requestIdleCallback ??
      ((callback: IdleRequestCallback) =>
        window.setTimeout(() => callback({} as IdleDeadline), 1));

    schedule(() => resolve());
  });
}

export function useExperiencePreload() {
  const [status, setStatus] = useState<PreloadStatus>("pending");

  useEffect(() => {
    let isMounted = true;
    const timeout = window.setTimeout(() => {
      if (isMounted) {
        setStatus("timed-out");
      }
    }, experienceTiming.loadingMs);

    const fontReadiness =
      "fonts" in document
        ? document.fonts.ready.then(() => undefined)
        : Promise.resolve();

    Promise.all([
      fontReadiness,
      preloadImage(experienceMedia.introVideo.poster),
      preloadImage(experienceMedia.introVideo.fallbackImage),
      preloadImage(experienceMedia.heroPortrait.src),
      prepareScenePlaceholder(),
    ]).then(() => {
      if (!isMounted) {
        return;
      }

      window.clearTimeout(timeout);
      setStatus("ready");
    });

    return () => {
      isMounted = false;
      window.clearTimeout(timeout);
    };
  }, []);

  return status;
}
