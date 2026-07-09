declare module "mdx/types" {
  import type { ComponentType, ReactNode } from "react";

  export type MDXComponents = Record<
    string,
    ComponentType<Record<string, unknown>> | keyof JSX.IntrinsicElements
  > & {
    wrapper?: ComponentType<{ children: ReactNode }>;
  };
}
