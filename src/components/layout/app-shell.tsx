import Link from "next/link";
import type { ReactNode } from "react";

import { primaryNavigation, utilityNavigation } from "@/config/navigation";
import { CommandPalette } from "@/features/command/command-palette";
import { ScrollAndFocusManager } from "@/features/navigation/scroll-and-focus-manager";
import { ThemeToggle } from "@/features/theme/theme-toggle";

import { ShellNavigation } from "./shell-navigation";
import { SkipNavigation } from "./skip-navigation";

type AppShellProps = Readonly<{
  children: ReactNode;
}>;

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <SkipNavigation />
      <ScrollAndFocusManager />
      <div className="bg-background text-foreground min-h-dvh">
        <header className="border-border/80 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-xl">
          <div className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="text-foreground hover:text-accent-foreground focus-visible:ring-ring focus-visible:ring-offset-background font-mono text-xs font-medium tracking-[0.08em] uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label="Ravi Thakur home"
            >
              RT
            </Link>
            <div className="flex items-center gap-3">
              <ShellNavigation
                items={primaryNavigation}
                utilityItems={utilityNavigation}
              />
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto min-h-[calc(100dvh-3.5rem)] w-full max-w-7xl px-4 outline-none sm:px-6 lg:px-8"
        >
          {children}
        </main>
      </div>
      <CommandPalette navigationItems={[...primaryNavigation, ...utilityNavigation]} />
    </>
  );
}
