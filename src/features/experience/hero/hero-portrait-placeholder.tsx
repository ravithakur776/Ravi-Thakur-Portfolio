import { experienceMedia } from "../experience/experience.config";

export function HeroPortraitPlaceholder() {
  return (
    <div
      className="experience-hero-media border-border/40 bg-card/30 relative aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl md:max-w-[26rem]"
      aria-label={experienceMedia.heroPortrait.alt}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(116,232,220,0.25),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.14),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-8 top-10 h-px bg-white/25" />
      <div className="bg-accent/20 absolute right-8 bottom-10 left-8 h-28 rounded-full blur-3xl" />
      <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
    </div>
  );
}
