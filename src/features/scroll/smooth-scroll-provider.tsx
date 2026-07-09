"use client";

import { useEffect, type ReactNode } from "react";

import { useMotionPreference } from "@/features/motion/motion-provider";

type SmoothScrollProviderProps = Readonly<{
  children: ReactNode;
}>;

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const { prefersReducedMotion } = useMotionPreference();

  useEffect(() => {
    document.documentElement.dataset.scrollBehavior = prefersReducedMotion
      ? "native"
      : "smooth";
  }, [prefersReducedMotion]);

  useEffect(() => {
    function updateScrollProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(Math.min(Math.max(progress, 0), 1)),
      );
    }

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return children;
}
