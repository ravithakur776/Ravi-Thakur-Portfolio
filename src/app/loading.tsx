function Loading() {
  return (
    <section
      className="flex min-h-[calc(100dvh-3.5rem)] items-center justify-center py-24"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="bg-secondary h-2 w-40 overflow-hidden rounded-full">
        <div className="bg-accent h-full w-1/3 rounded-full motion-safe:animate-pulse" />
      </div>
    </section>
  );
}

export default Loading;
