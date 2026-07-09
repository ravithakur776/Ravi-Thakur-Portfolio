import type { Metadata } from "next";

import { HomeExperience } from "@/features/home/home-experience";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Ravi Thakur - Software Engineer and Creative Product Builder",
  description: "Building products where engineering meets design.",
  path: "/",
});

function HomePage() {
  return <HomeExperience />;
}

export default HomePage;
