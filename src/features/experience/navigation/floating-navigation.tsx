"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { useCommandPalette } from "@/features/command/command-palette-provider";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { cn } from "@/lib/utils";

import { experienceNavigation, experienceTiming } from "../experience/experience.config";
import type { ExperiencePhase } from "../orchestrator/use-experience-sequence";
import { MobileNavigationDrawer } from "./mobile-navigation-drawer";

type FloatingNavigationProps = Readonly<{
  phase: ExperiencePhase;
}>;

export function FloatingNavigation({ phase }: FloatingNavigationProps) {
  const { open } = useCommandPalette();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (phase !== "hero") {
      setIsRevealed(false);
      return;
    }

    let previousScrollY = window.scrollY;
    let hideTimer = window.setTimeout(
      () => setIsRevealed(false),
      experienceTiming.navigationAutoHideMs,
    );

    const reveal = () => {
      window.clearTimeout(hideTimer);
      setIsRevealed(true);
      hideTimer = window.setTimeout(
        () => setIsRevealed(false),
        experienceTiming.navigationAutoHideMs,
      );
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - previousScrollY;

      if (Math.abs(delta) < experienceTiming.navigationScrollThreshold) {
        return;
      }

      setIsRevealed(delta < 0 || currentScrollY < 24);
      previousScrollY = currentScrollY;
    };

    const showTimer = window.setTimeout(reveal, experienceTiming.navigationRevealDelayMs);
    window.addEventListener("pointermove", reveal, { passive: true });
    window.addEventListener("keydown", reveal);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
      window.removeEventListener("pointermove", reveal);
      window.removeEventListener("keydown", reveal);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [phase]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 transition-all duration-500",
          phase === "hero" && isRevealed
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <nav
          className="border-border/40 bg-background/55 shadow-shell flex h-14 items-center justify-between rounded-full border px-3 backdrop-blur-2xl"
          aria-label="Landing navigation"
          onFocus={() => setIsRevealed(true)}
        >
          <Link
            href="/"
            className="focus-visible:ring-ring rounded-full px-3 py-2 font-mono text-xs font-medium tracking-[0.12em] uppercase outline-none focus-visible:ring-2"
            aria-label="Ravi Thakur home"
          >
            RT
          </Link>
          <div className="text-muted-foreground hidden items-center gap-1 text-sm sm:flex">
            {experienceNavigation.map((item) => (
              <a
                key={item.label}
                href={item.target}
                aria-disabled={!item.isEnabled}
                className="rounded-full px-3 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              aria-label="Open command palette"
              icon={<Search aria-hidden="true" className="size-4" />}
              onClick={open}
            />
            <IconButton
              aria-label="Open navigation menu"
              className="sm:hidden"
              icon={<Menu aria-hidden="true" className="size-4" />}
              onClick={() => setIsDrawerOpen(true)}
            />
            <ThemeToggle />
          </div>
        </nav>
      </header>
      <MobileNavigationDrawer
        isOpen={isDrawerOpen}
        close={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
