"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { ThemeToggle } from "@/features/theme/theme-toggle";

type ShellFrameProps = Readonly<{
  children: ReactNode;
}>;

export function ShellFrame({ children }: ShellFrameProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
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
          {children}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
