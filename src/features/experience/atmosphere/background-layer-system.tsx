export function BackgroundLayerSystem() {
  return (
    <>
      <div className="experience-noise absolute inset-0 z-0" aria-hidden="true" />
      <div className="experience-gradient absolute inset-0 z-0" aria-hidden="true" />
      <div className="experience-atmosphere absolute inset-0 z-0" aria-hidden="true" />
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-[12%] left-[8%] h-48 w-48 rounded-full border border-white/10 opacity-40 blur-[0.2px]" />
        <div className="border-accent/20 absolute right-[10%] bottom-[18%] h-72 w-72 rounded-full border opacity-50 blur-[0.2px]" />
        <div className="absolute top-[30%] right-[28%] h-32 w-32 rotate-12 rounded-[2rem] border border-white/10 opacity-30" />
      </div>
    </>
  );
}
