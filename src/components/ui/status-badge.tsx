import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatusBadgeProps = Readonly<{
  children: ReactNode;
  tone?: "neutral" | "accent" | "pending";
  className?: string;
}>;

export function StatusBadge({ children, tone = "neutral", className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border px-3 font-mono text-[0.68rem] tracking-[0.14em] uppercase",
        tone === "neutral" && "border-border bg-secondary/50 text-muted-foreground",
        tone === "accent" && "border-accent/45 bg-accent/20 text-foreground",
        tone === "pending" && "border-border bg-background/55 text-muted-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
