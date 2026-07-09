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

  return children;
}
