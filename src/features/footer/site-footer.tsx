import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-border bg-background border-t px-5 py-10 sm:px-8 lg:px-12">
      <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          {siteConfig.owner} - {siteConfig.professionalTitle}
        </p>
        <p>Built as a product platform, not a template portfolio.</p>
      </div>
    </footer>
  );
}
