export type AssistantDomain =
  "About Ravi" | "Projects" | "Resume" | "Skills" | "Blog" | "Contact";

export type AssistantQuickAction = Readonly<{
  label: string;
  domain: AssistantDomain;
  prompt: string;
  enabled: boolean;
}>;

export const assistantQuickActions = [
  {
    label: "Summarize Ravi",
    domain: "About Ravi",
    prompt: "Give me a concise professional summary of Ravi Thakur.",
    enabled: false,
  },
  {
    label: "Find relevant projects",
    domain: "Projects",
    prompt: "Show projects relevant to product engineering.",
    enabled: false,
  },
  {
    label: "Review skills",
    domain: "Skills",
    prompt: "Which skills match a frontend or AI product role?",
    enabled: false,
  },
  {
    label: "Contact Ravi",
    domain: "Contact",
    prompt: "What is the best way to contact Ravi?",
    enabled: false,
  },
] satisfies readonly AssistantQuickAction[];
