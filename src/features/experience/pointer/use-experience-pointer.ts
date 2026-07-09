"use client";

import { useEffect, useRef } from "react";

import { useMotionPreference } from "@/features/motion/motion-provider";

export function useExperiencePointer() {
  const ref = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useMotionPreference();

  useEffect(() => {
    const element = ref.current;

    if (!element || prefersReducedMotion) {
      return;
    }

    const target = element;

    function handlePointerMove(event: PointerEvent) {
      const rect = target.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      target.style.setProperty("--pointer-x", `${x}%`);
      target.style.setProperty("--pointer-y", `${y}%`);
    }

    target.addEventListener("pointermove", handlePointerMove);
    return () => target.removeEventListener("pointermove", handlePointerMove);
  }, [prefersReducedMotion]);

  return ref;
}
