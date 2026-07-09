import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = Readonly<{
  eyebrow?: string;
  title: string;
  description?: string;
  id: string;
  children: ReactNode;
  className?: string;
}>;

export function SectionShell({
  eyebrow,
  title,
  description,
  id,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("relative px-5 py-24 sm:px-8 lg:px-12", className)}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-muted-foreground font-mono text-xs tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-title`}
            className="mt-4 text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] font-semibold text-balance"
          >
            {title}
          </h2>
          {description ? (
            <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8 text-pretty">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
