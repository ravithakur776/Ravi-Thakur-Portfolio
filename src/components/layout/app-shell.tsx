import type { ReactNode } from "react";

import { primaryNavigation, utilityNavigation } from "@/config/navigation";
import { CommandPalette } from "@/features/command/command-palette";
import { ScrollAndFocusManager } from "@/features/navigation/scroll-and-focus-manager";

import { ShellFrame } from "./shell-frame";
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
        <ShellFrame>
          <ShellNavigation items={primaryNavigation} utilityItems={utilityNavigation} />
        </ShellFrame>
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto min-h-dvh w-full outline-none"
        >
          {children}
        </main>
      </div>
      <CommandPalette navigationItems={[...primaryNavigation, ...utilityNavigation]} />
    </>
  );
}
