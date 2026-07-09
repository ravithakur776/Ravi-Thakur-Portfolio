export type LabCategory =
  "Experiments" | "Open Source" | "AI" | "Mini Projects" | "Concepts";

export type LabCapability = Readonly<{
  category: LabCategory;
  description: string;
  status: "architecture-ready" | "future-content";
}>;

export const labCapabilities = [
  {
    category: "Experiments",
    description: "A place for interaction studies and product prototypes.",
    status: "architecture-ready",
  },
  {
    category: "Open Source",
    description: "A future index for public packages, utilities, and demos.",
    status: "future-content",
  },
  {
    category: "AI",
    description: "A workspace for AI product explorations and agent concepts.",
    status: "architecture-ready",
  },
  {
    category: "Mini Projects",
    description: "A lightweight archive for focused product builds.",
    status: "future-content",
  },
  {
    category: "Concepts",
    description: "A structured home for ideas before they become full projects.",
    status: "architecture-ready",
  },
] satisfies readonly LabCapability[];
