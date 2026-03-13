"use client";

import { useEffect, useRef, useState } from "react";

const highlights = [
  { value: 500, suffix: "+", label: "Properties in Network" },
  { value: 48, suffix: "h", label: "First Shortlist Delivered" },
  { value: 100, suffix: "%", label: "Verified Accommodations" },
  { value: 6, suffix: "+", label: "Cities Covered" },
];

function Counter({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frame: number;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Highlights() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-dark border-y border-gold/10 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold/5">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="bg-dark px-8 py-10 text-center group hover:bg-dark-3 transition-colors duration-300"
            >
              <div
                className="text-[clamp(2.5rem,5vw,3.8rem)] font-light text-gold leading-none mb-2 group-hover:text-gold-light transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <Counter target={h.value} suffix={h.suffix} started={started} />
              </div>
              <div className="text-[0.7rem] tracking-[0.15em] uppercase text-cream-muted">
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
