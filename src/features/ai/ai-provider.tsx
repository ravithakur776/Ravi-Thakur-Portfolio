"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

type FutureAIContextValue = Readonly<{
  isAIEnabled: false;
}>;

const FutureAIContext = createContext<FutureAIContextValue | null>(null);

type FutureAIProviderProps = Readonly<{
  children: ReactNode;
}>;

export function FutureAIProvider({ children }: FutureAIProviderProps) {
  const value = useMemo(() => ({ isAIEnabled: false as const }), []);

  return <FutureAIContext.Provider value={value}>{children}</FutureAIContext.Provider>;
}

export function useFutureAI() {
  const value = useContext(FutureAIContext);

  if (!value) {
    throw new Error("useFutureAI must be used within FutureAIProvider.");
  }

  return value;
}
