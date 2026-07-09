"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type MotionContextValue = Readonly<{
  prefersReducedMotion: boolean;
}>;

const MotionContext = createContext<MotionContextValue | null>(null);

type MotionProviderProps = Readonly<{
  children: ReactNode;
}>;

export function MotionProvider({ children }: MotionProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    function handleMotionPreferenceChange() {
      setPrefersReducedMotion(mediaQuery.matches);
      document.documentElement.dataset.motion = mediaQuery.matches ? "reduced" : "full";
    }

    handleMotionPreferenceChange();
    mediaQuery.addEventListener("change", handleMotionPreferenceChange);

    return () => mediaQuery.removeEventListener("change", handleMotionPreferenceChange);
  }, []);

  const value = useMemo(() => ({ prefersReducedMotion }), [prefersReducedMotion]);

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotionPreference() {
  const value = useContext(MotionContext);

  if (!value) {
    throw new Error("useMotionPreference must be used within MotionProvider.");
  }

  return value;
}
