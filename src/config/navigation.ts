export type NavigationItem = Readonly<{
  label: string;
  href: `/${string}`;
  description: string;
  isEnabled: boolean;
}>;

export const primaryNavigation = [
  {
    label: "Work",
    href: "/work",
    description: "Portfolio, projects, and selected product work.",
    isEnabled: false,
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Long-form product, engineering, and design stories.",
    isEnabled: false,
  },
  {
    label: "Writing",
    href: "/blog",
    description: "Engineering notes, essays, and technical writing.",
    isEnabled: false,
  },
  {
    label: "Lab",
    href: "/lab",
    description: "Interactive experiments and future AI experiences.",
    isEnabled: false,
  },
] as const satisfies readonly NavigationItem[];

export const utilityNavigation = [
  {
    label: "Contact",
    href: "/contact",
    description: "Future contact and collaboration entry point.",
    isEnabled: false,
  },
] as const satisfies readonly NavigationItem[];
