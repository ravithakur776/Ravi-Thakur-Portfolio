import { ImageIcon, Play } from "lucide-react";

import { cn } from "@/lib/utils";

type PlaceholderMediaProps = Readonly<{
  label: string;
  variant?: "image" | "video" | "portrait" | "lab";
  className?: string;
}>;

export function PlaceholderMedia({
  label,
  variant = "image",
  className,
}: PlaceholderMediaProps) {
  const Icon = variant === "video" ? Play : ImageIcon;

  return (
    <div
      className={cn(
        "product-media border-border bg-secondary/35 relative flex min-h-56 overflow-hidden rounded-lg border",
        className,
      )}
      aria-label={label}
      role="img"
    >
      <div className="product-media-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_38%_28%,oklch(0.68_0.09_185_/_0.22),transparent_22rem)]" />
      <div className="relative z-10 m-auto flex flex-col items-center gap-3 text-center">
        <span className="border-border bg-background/70 inline-flex size-12 items-center justify-center rounded-full border backdrop-blur-md">
          <Icon aria-hidden="true" className="size-5" />
        </span>
        <span className="text-muted-foreground max-w-48 text-sm leading-6">{label}</span>
      </div>
    </div>
  );
}
