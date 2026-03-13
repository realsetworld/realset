"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We start with a detailed brief — understanding your employee's profile, timeline, budget, location preferences, and family needs.",
  },
  {
    num: "02",
    title: "Property Shortlisting",
    desc: "Our team curates a tailored list of verified homes from our network, filtered by your exact requirements — ready within 24–48 hours.",
  },
  {
    num: "03",
    title: "Tours & Selection",
    desc: "We coordinate in-person or virtual property tours, accompany the assignee, and provide honest guidance to help them choose confidently.",
  },
  {
    num: "04",
    title: "Lease & Documentation",
    desc: "We handle all negotiations, draft and review lease agreements, manage documentation, and ensure full legal compliance.",
  },
  {
    num: "05",
    title: "Move-In & Settlement",
    desc: "Utility connections, city orientation, PAN and banking support — we stay on-ground until your employee is fully settled and operational.",
  },
  {
    num: "06",
    title: "Ongoing Support",
    desc: "Our relationship doesn't end at handover. We remain available for maintenance escalations, lease renewals, and any support throughout the stay.",
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), index * 100);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="fade-up group relative flex gap-6 p-6 hover:bg-dark-3 transition-colors duration-300 rounded-sm"
    >
      {/* Step number */}
      <div className="flex-shrink-0 w-14 h-14 border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors duration-300">
        <span
          className="text-[1.1rem] font-light text-gold/60 group-hover:text-gold transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {step.num}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3
          className="text-[1.15rem] font-light text-cream mb-2 group-hover:text-gold-light transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {step.title}
        </h3>
        <p className="text-[0.85rem] leading-[1.78] text-cream-muted">{step.desc}</p>
      </div>

      {/* Connector line (not on last) */}
      {index < steps.length - 1 && (
        <div className="absolute left-[2.75rem] top-[5.5rem] w-px h-6 bg-gold/10" />
      )}
    </div>
  );
}

export default function Process() {
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" className="py-32 bg-dark-2">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Header + description */}
          <div ref={headRef} className="fade-up md:sticky md:top-32">
            <div className="gold-line no-before mb-6">How It Works</div>
            <h2
              className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1] mb-8"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A Seamless{" "}
              <em className="italic text-gold-light">6-Step</em>
              <br />
              Journey
            </h2>
            <p className="text-cream-muted text-[0.95rem] leading-[1.85] mb-8">
              Our structured relocation process ensures nothing falls through the
              cracks. From the first call to the last utility connection, every
              step is managed with precision and care.
            </p>
            <p className="text-cream-muted text-[0.95rem] leading-[1.85] mb-10">
              We act as your single point of contact — eliminating coordination
              overheads and guaranteeing a consistent, premium experience for
              every employee.
            </p>

            {/* Mini stat */}
            <div className="border-l-2 border-gold/40 pl-5">
              <div
                className="text-[3rem] font-light text-gold leading-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                48h
              </div>
              <div className="text-[0.72rem] tracking-[0.12em] uppercase text-cream-muted mt-1">
                Average time to first property shortlist
              </div>
            </div>
          </div>

          {/* Right: Steps */}
          <div className="flex flex-col divide-y divide-gold/[0.07]">
            {steps.map((s, i) => (
              <StepCard key={s.num} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
