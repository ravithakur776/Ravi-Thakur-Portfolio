import { ArrowUpRight } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import { contactChannels } from "./contact.data";

export function ContactExperience() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Start with a clear reason to talk."
      description="The contact section avoids a generic form. Channels are wired as data and will activate when Ravi provides final public links."
    >
      <div className="border-border bg-card/60 rounded-lg border p-6 lg:p-8">
        <p className="max-w-3xl text-[clamp(1.6rem,4vw,3.5rem)] leading-tight font-semibold text-balance">
          For product engineering, creative development, AI interfaces, or a role where
          execution quality matters.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contactChannels.map((channel) => (
            <button
              key={channel.label}
              type="button"
              disabled={!channel.href}
              className="border-border bg-background/70 flex min-h-16 items-center justify-between rounded-lg border px-4 text-left disabled:cursor-not-allowed disabled:opacity-65"
              title={`${channel.label} will be enabled when the public link is approved.`}
            >
              <span className="font-medium">{channel.label}</span>
              {channel.href ? (
                <ArrowUpRight aria-hidden="true" className="size-4" />
              ) : (
                <StatusBadge tone="pending">Pending</StatusBadge>
              )}
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
