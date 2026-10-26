import {useReveals} from '../hooks/useReveals';

export function Creator() {
  const ref = useReveals<HTMLElement>();

  const items = [
    'Created by Vivek Pandit',
    'Created by Vivek Pandit',
    'Created by Vivek Pandit',
    'Created by Vivek Pandit',
    'Created by Vivek Pandit',
    'Created by Vivek Pandit',
  ];

  return (
    <section
      ref={ref}
      id="creator"
      aria-label="Creator Credits"
      className="relative overflow-hidden border-t border-white/10 bg-void py-24 md:py-36"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(111,182,255,0.14),transparent_65%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 md:px-[6vw]" data-reveal>
        <div className="inline-flex items-center gap-3 rounded-full border border-earth/40 bg-earth/10 px-4 py-1.5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-earth animate-ping" />
          <span className="font-mono text-label text-earth uppercase tracking-[0.22em]">
            Expedition Architecture
          </span>
        </div>
      </div>

      {/* Primary Big Sliding Track */}
      <div className="relative mt-12 w-full overflow-hidden select-none py-6 border-y border-white/10 bg-void-2/60 backdrop-blur-sm" data-reveal>
        <div className="animate-slide-left">
          {items.map((text, i) => (
            <div key={`primary-${i}`} className="flex shrink-0 items-center gap-10 px-8">
              <span className="font-display text-[clamp(2.5rem,8vw,7rem)] font-bold tracking-[0.06em] text-white uppercase drop-shadow-[0_4px_30px_rgba(111,182,255,0.35)]">
                {text}
              </span>
              <span className="font-mono text-[clamp(1.5rem,4vw,3.5rem)] text-earth" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Reverse Sliding Track for Kinetic Depth */}
      <div className="relative mt-4 w-full overflow-hidden select-none py-4" data-reveal>
        <div className="animate-slide-right">
          {items.map((text, i) => (
            <div key={`secondary-${i}`} className="flex shrink-0 items-center gap-10 px-8">
              <span className="font-display text-[clamp(1.5rem,5vw,4rem)] tracking-[0.16em] text-regolith/25 uppercase transition-colors hover:text-earth/60">
                {text}
              </span>
              <span className="text-[clamp(1rem,2.5vw,2rem)] text-white/20" aria-hidden="true">
                ●
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-md px-4 text-center" data-reveal>
        <p className="font-mono text-[0.75rem] tracking-[0.2em] text-regolith/60 uppercase">
          Station Vivek · Cislunar Exploration Initiative
        </p>
      </div>
    </section>
  );
}
