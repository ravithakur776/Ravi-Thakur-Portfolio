import type { Metadata } from "next";

import { LandingExperience } from "@/features/landing/landing-experience";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ravi Thakur - Software Engineer and Creative Product Builder",
  description: "Building products where engineering meets design.",
  path: "/",
});

function HomePage() {
  return <LandingExperience />;
}

export default HomePage;
