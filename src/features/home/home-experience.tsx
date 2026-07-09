import { AIAssistantPreview } from "@/features/ai/ai-assistant-preview";
import { AboutExperience } from "@/features/about/about-experience";
import { BlogExperience } from "@/features/blog/blog-experience";
import { CaseStudyExperience } from "@/features/case-studies/case-study-experience";
import { ContactExperience } from "@/features/contact/contact-experience";
import { LandingExperience } from "@/features/experience/experience/landing-experience";
import { SiteFooter } from "@/features/footer/site-footer";
import { JourneyTimeline } from "@/features/journey/journey-timeline";
import { LabExperience } from "@/features/lab/lab-experience";
import { FeaturedProjects } from "@/features/projects/featured-projects";
import { ServicesExperience } from "@/features/services/services-experience";
import { SkillsExperience } from "@/features/skills/skills-experience";
import { JsonLd, createPersonJsonLd, createWebsiteJsonLd } from "@/lib/seo/json-ld";

export function HomeExperience() {
  return (
    <>
      <JsonLd data={createPersonJsonLd()} />
      <JsonLd data={createWebsiteJsonLd()} />
      <LandingExperience />
      <AboutExperience />
      <JourneyTimeline />
      <SkillsExperience />
      <FeaturedProjects />
      <CaseStudyExperience />
      <ServicesExperience />
      <BlogExperience />
      <LabExperience />
      <AIAssistantPreview />
      <ContactExperience />
      <SiteFooter />
    </>
  );
}
