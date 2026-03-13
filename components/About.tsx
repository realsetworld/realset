"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "2023", label: "Year Established" },
  { num: "360°", label: "Service Ecosystem" },
  { num: "6+", label: "Core Services" },
  { num: "100%", label: "Dedicated Support" },
];

function useFadeUp(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return ref;
}

export default function About() {
  const leftRef = useFadeUp(0);
  const rightRef = useFadeUp(150);

  return (
    <section id="about" className="py-32 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div ref={leftRef} className="fade-up">
            <div className="gold-line no-before mb-6">Who We Are</div>
            <h2
              className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Premium{" "}
              <em className="italic text-gold-light">Relocation</em>
              <br />
              Partner
            </h2>
            <p className="text-cream-muted leading-[1.85] text-[0.95rem] mb-5">
              Established in 2023, Realset is a premium relocation solutions
              company created to simplify global living and mobility for
              expatriates and corporate teams.
            </p>
            <p className="text-cream-muted leading-[1.85] text-[0.95rem] mb-5">
              We partner with HR and mobility functions to deliver seamless,
              end-to-end housing and settlement services — ensuring a smooth,
              stress-free transition into a new city.
            </p>
            <p className="text-cream-muted leading-[1.85] text-[0.95rem]">
              Through verified accommodations, personalized support, and
              on-ground expertise, we enable assignees and their families to
              settle quickly, comfortably, and confidently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px mt-10 border border-gold/10">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-6 bg-dark-3 hover:bg-dark-4 transition-colors duration-300 group"
                >
                  <div
                    className="text-[2.6rem] font-light text-gold leading-none mb-1 group-hover:text-gold-light transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-[0.72rem] tracking-[0.12em] uppercase text-cream-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div ref={rightRef} className="fade-up">
            <div className="relative">
              {/* Main card */}
              <div
                className="relative aspect-[4/5] bg-dark-3 border border-gold/10 flex items-center justify-center overflow-hidden"
              >
                {/* Large R */}
                <span
                  className="text-[18rem] font-light select-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    color: "rgba(201,169,110,0.05)",
                    lineHeight: 1,
                  }}
                >
                  R
                </span>

                {/* Inner border */}
                <div className="absolute inset-6 border border-gold/[0.08]" />

                {/* Glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 30% 30%, rgba(201,169,110,0.06) 0%, transparent 60%)",
                  }}
                />

                {/* Badge */}
                <div className="absolute bottom-6 right-6 bg-gold text-dark px-4 py-3 text-[0.7rem] tracking-[0.15em] uppercase font-medium">
                  Est. 2023 · Gurgaon
                </div>

                {/* Top label */}
                <div className="absolute top-6 left-6 text-[0.65rem] tracking-[0.2em] uppercase text-gold/60">
                  Realset Pvt Ltd
                </div>
              </div>

              {/* Floating tag */}
              <div className="absolute -bottom-5 -left-5 bg-dark border border-gold/20 px-5 py-4">
                <div
                  className="text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Integrated
                </div>
                <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mt-0.5">
                  360° Service Ecosystem
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
