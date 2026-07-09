import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.title} - ${siteConfig.professionalTitle}`,
    short_name: siteConfig.title,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#17181c",
    theme_color: "#17181c",
    orientation: "portrait-primary",
    categories: ["portfolio", "productivity", "technology"],
    lang: "en",
  };
}
