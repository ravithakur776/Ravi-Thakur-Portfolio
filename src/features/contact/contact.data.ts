import { siteConfig } from "@/config/site";

export const contactChannels = [
  { label: "Email", href: siteConfig.links.email, status: "pending" },
  { label: "GitHub", href: siteConfig.links.github, status: "pending" },
  { label: "LinkedIn", href: siteConfig.links.linkedin, status: "pending" },
  { label: "Instagram", href: siteConfig.links.instagram, status: "pending" },
  { label: "WhatsApp", href: siteConfig.links.whatsapp, status: "pending" },
  { label: "Resume", href: siteConfig.links.resume, status: "pending" },
] as const;
