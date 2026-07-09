import { SectionShell } from "@/components/ui/section-shell";

import { services } from "./services.data";

export function ServicesExperience() {
  return (
    <SectionShell
      id="services"
      eyebrow="Services"
      title="Product-minded technical execution."
      description="Services are framed as capabilities, not commodity tasks. Each card can later connect to proof, process, and pricing logic."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="border-border bg-card/55 rounded-lg border p-6"
          >
            <h3 className="text-2xl font-semibold">{service.title}</h3>
            <p className="text-muted-foreground mt-4 leading-7">{service.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
