export type ContentSource = "mdx" | "cms";

export type ContentRecord<TFrontmatter> = Readonly<{
  slug: string;
  source: ContentSource;
  frontmatter: TFrontmatter;
  body: string;
}>;

export type ContentCollection<TFrontmatter> = Readonly<{
  name: string;
  records: readonly ContentRecord<TFrontmatter>[];
}>;
