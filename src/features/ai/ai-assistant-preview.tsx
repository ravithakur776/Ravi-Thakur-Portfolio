import { Bot, Sparkles } from "lucide-react";

import { SectionShell } from "@/components/ui/section-shell";
import { StatusBadge } from "@/components/ui/status-badge";

import { assistantQuickActions } from "./ai-assistant.schema";

export function AIAssistantPreview() {
  return (
    <SectionShell
      id="assistant"
      eyebrow="AI Assistant"
      title="Assistant architecture, intentionally offline."
      description="The assistant is a future product layer for Ravi's background, work, writing, and contact paths. No API is connected in this milestone."
      className="bg-secondary/20"
    >
      <div className="border-border bg-card/60 rounded-lg border p-5 lg:p-8">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-primary-foreground inline-flex size-11 items-center justify-center rounded-full">
            <Bot aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h3 className="text-xl font-semibold">Ravi Assistant</h3>
            <p className="text-muted-foreground text-sm">
              Future LLM integration boundary
            </p>
          </div>
          <StatusBadge className="ml-auto" tone="pending">
            API not connected
          </StatusBadge>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {assistantQuickActions.map((action) => (
            <button
              key={action.label}
              type="button"
              disabled
              className="border-border bg-background/65 text-muted-foreground flex min-h-20 cursor-not-allowed items-center gap-3 rounded-lg border p-4 text-left opacity-75"
            >
              <Sparkles aria-hidden="true" className="size-4 shrink-0" />
              <span>
                <span className="text-foreground block font-medium">{action.label}</span>
                <span className="mt-1 block text-sm">{action.domain}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
