"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CommandPaletteContextValue = Readonly<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}>;

const CommandPaletteContext = createContext<CommandPaletteContextValue | null>(null);

type CommandPaletteProviderProps = Readonly<{
  children: ReactNode;
}>;

export function CommandPaletteProvider({ children }: CommandPaletteProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((currentValue) => !currentValue), []);

  const value = useMemo(
    () => ({
      isOpen,
      open,
      close,
      toggle,
    }),
    [close, isOpen, open, toggle],
  );

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

export function useCommandPalette() {
  const value = useContext(CommandPaletteContext);

  if (!value) {
    throw new Error("useCommandPalette must be used within CommandPaletteProvider.");
  }

  return value;
}
