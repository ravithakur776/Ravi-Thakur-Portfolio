export const siteConfig = {
  owner: "Ravi Thakur",
  title: "Ravi Thakur",
  professionalTitle: "Software Engineer • Creative Product Builder",
  description:
    "A flagship personal website exploring engineering, design, storytelling, and AI.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  links: {
    github: "",
    linkedin: "",
    x: "",
  },
} as const;
