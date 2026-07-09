import type { NavigationItem } from "@/config/navigation";

type ShellNavigationProps = Readonly<{
  items: readonly NavigationItem[];
  utilityItems: readonly NavigationItem[];
}>;

export function ShellNavigation({ items, utilityItems }: ShellNavigationProps) {
  const navigationItems = [...items, ...utilityItems];

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
      {navigationItems.map((item) => (
        <span
          key={item.href}
          className="text-muted-foreground rounded-md px-2.5 py-1.5 text-sm"
          aria-disabled={!item.isEnabled}
          title={item.isEnabled ? item.description : `${item.label} is planned`}
        >
          {item.label}
        </span>
      ))}
    </nav>
  );
}
