type ShellStatusProps = Readonly<{
  title: string;
  description: string;
}>;

export function ShellStatus({ title, description }: ShellStatusProps) {
  return (
    <section
      className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center py-24"
      aria-labelledby="shell-status-title"
    >
      <div className="max-w-xl text-center">
        <p className="text-muted-foreground font-mono text-xs tracking-[0.08em] uppercase">
          Platform Shell
        </p>
        <h1
          id="shell-status-title"
          className="mt-4 text-3xl font-semibold tracking-normal"
        >
          {title}
        </h1>
        <p className="text-muted-foreground mt-4 text-base leading-7">{description}</p>
      </div>
    </section>
  );
}
