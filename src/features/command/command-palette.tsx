"use client";

import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";

import { IconButton } from "@/components/ui/icon-button";
import type { NavigationItem } from "@/config/navigation";
import { useCommandPalette } from "@/features/command/command-palette-provider";

type CommandPaletteProps = Readonly<{
  navigationItems: readonly NavigationItem[];
}>;

export function CommandPalette({ navigationItems }: CommandPaletteProps) {
  const { close, isOpen, toggle } = useCommandPalette();
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isCommandShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";

      if (isCommandShortcut) {
        event.preventDefault();
        toggle();
      }

      if (event.key === "Escape") {
        close();
      }

      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [close, toggle]);

  useEffect(() => {
    if (!isOpen) {
      previouslyFocusedElementRef.current?.focus();
      return;
    }

    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="bg-background/70 fixed inset-0 z-50 p-4 backdrop-blur-md"
      role="presentation"
      onMouseDown={close}
    >
      <div
        ref={panelRef}
        aria-labelledby="command-palette-title"
        aria-modal="true"
        className="border-border bg-popover text-popover-foreground mx-auto mt-20 w-full max-w-xl overflow-hidden rounded-lg border shadow-2xl"
        role="dialog"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="border-border flex items-center gap-3 border-b px-4 py-3">
          <Search aria-hidden="true" className="text-muted-foreground size-4" />
          <div className="min-w-0 flex-1">
            <h2 id="command-palette-title" className="sr-only">
              Command palette
            </h2>
            <input
              ref={inputRef}
              className="placeholder:text-muted-foreground w-full bg-transparent text-sm outline-none"
              placeholder="Search platform commands..."
              aria-label="Search platform commands"
              readOnly
            />
          </div>
          <IconButton
            aria-label="Close command palette"
            icon={<X aria-hidden="true" className="size-4" />}
            onClick={close}
          />
        </div>
        <div className="p-2" role="listbox" aria-label="Planned platform destinations">
          {navigationItems.map((item) => (
            <div
              key={item.href}
              className="text-muted-foreground rounded-md px-3 py-2 text-sm"
              role="option"
              aria-disabled="true"
              aria-selected="false"
            >
              <div className="text-foreground font-medium">{item.label}</div>
              <div className="mt-1 text-xs leading-5">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="border-border text-muted-foreground border-t px-4 py-3 font-mono text-[11px]">
          Press Esc to close. Search activation is reserved for the future content index.
        </div>
      </div>
    </div>
  );
}
