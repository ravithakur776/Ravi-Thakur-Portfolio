import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type IconButtonProps = Readonly<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: ReactNode;
  }
>;

export function IconButton({
  className,
  icon,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "border-border bg-background text-foreground hover:bg-secondary focus-visible:ring-ring focus-visible:ring-offset-background inline-flex size-9 items-center justify-center rounded-md border shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
