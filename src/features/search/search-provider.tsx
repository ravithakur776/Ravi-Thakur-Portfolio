"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";

type FutureSearchContextValue = Readonly<{
  isSearchEnabled: false;
}>;

const FutureSearchContext = createContext<FutureSearchContextValue | null>(null);

type FutureSearchProviderProps = Readonly<{
  children: ReactNode;
}>;

export function FutureSearchProvider({ children }: FutureSearchProviderProps) {
  const value = useMemo(() => ({ isSearchEnabled: false as const }), []);

  return (
    <FutureSearchContext.Provider value={value}>{children}</FutureSearchContext.Provider>
  );
}

export function useFutureSearch() {
  const value = useContext(FutureSearchContext);

  if (!value) {
    throw new Error("useFutureSearch must be used within FutureSearchProvider.");
  }

  return value;
}
