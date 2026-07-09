export const siteConfig = {
  owner: "Ravi Thakur",
  title: "Ravi Thakur",
  professionalTitle: "Software Engineer • Creative Product Builder",
  description:
    "A premium personal platform combining software engineering, storytelling, design, and AI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  defaultTheme: "dark",
  links: {
    github: "",
    linkedin: "",
    x: "",
  },
} as const;
