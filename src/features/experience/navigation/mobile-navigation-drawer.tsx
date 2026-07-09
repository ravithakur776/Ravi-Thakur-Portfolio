import { X } from "lucide-react";

import { IconButton } from "@/components/ui/icon-button";

import { experienceNavigation } from "../experience/experience.config";

type MobileNavigationDrawerProps = Readonly<{
  isOpen: boolean;
  close: () => void;
}>;

export function MobileNavigationDrawer({ close, isOpen }: MobileNavigationDrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-background/80 fixed inset-0 z-50 p-4 backdrop-blur-xl sm:hidden">
      <div className="border-border bg-card/90 rounded-2xl border p-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <p className="font-mono text-xs tracking-[0.16em] uppercase">Navigate</p>
          <IconButton
            aria-label="Close navigation menu"
            icon={<X aria-hidden="true" className="size-4" />}
            onClick={close}
          />
        </div>
        <div className="mt-4 grid gap-2">
          {experienceNavigation.map((item) => (
            <a
              key={item.label}
              href={item.target}
              aria-disabled={!item.isEnabled}
              className="text-muted-foreground rounded-xl px-3 py-3 text-sm"
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
