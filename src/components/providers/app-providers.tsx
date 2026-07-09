"use client";

import type { ReactNode } from "react";

import { AnalyticsProvider } from "@/features/analytics/analytics-provider";
import { FutureAIProvider } from "@/features/ai/ai-provider";
import { CommandPaletteProvider } from "@/features/command/command-palette-provider";
import { MotionProvider } from "@/features/motion/motion-provider";
import { WebVitalsReporter } from "@/features/performance/web-vitals-reporter";
import { FutureSearchProvider } from "@/features/search/search-provider";
import { ThemeProvider } from "@/features/theme/theme-provider";

type AppProvidersProps = Readonly<{
  children: ReactNode;
}>;

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <MotionProvider>
        <FutureAIProvider>
          <FutureSearchProvider>
            <AnalyticsProvider>
              <WebVitalsReporter />
              <CommandPaletteProvider>{children}</CommandPaletteProvider>
            </AnalyticsProvider>
          </FutureSearchProvider>
        </FutureAIProvider>
      </MotionProvider>
    </ThemeProvider>
  );
}
