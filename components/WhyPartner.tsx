"use client";

import { useEffect, useRef } from "react";

const cards = [
  {
    tag: "For Companies",
    heading: "An Extension of Your HR Team",
    body: "We act as a seamless extension of your HR function, managing end-to-end relocation with real-time updates and full cost transparency. This enables you to focus on core business priorities while ensuring a best-in-class employee experience.",
    points: [
      "Real-time relocation tracking",
      "Complete cost transparency",
      "Dedicated account manager",
      "Compliant lease documentation",
    ],
  },
  {
    tag: "For Employees",
    heading: "Stress-Free From Day One",
    body: "A smooth, personalized relocation experience with dedicated support from arrival to full settlement. Employees adapt to their new city faster — focusing on work and personal well-being from the very first day.",
    points: [
      "Personalized housing search",
      "Faster city adaptation",
      "24/7 on-ground support",
      "Seamless utility setup",
    ],
  },
];

function PartnerCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), index * 150);
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
      className="fade-up relative p-10 border border-gold/10 bg-dark-3 hover:border-gold/25 transition-colors duration-500 overflow-hidden group"
    >
      {/* Corner glow */}
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10">
        <span className="inline-block text-[0.65rem] tracking-[0.25em] uppercase text-gold border border-gold/30 px-3 py-1.5 mb-6">
          {card.tag}
        </span>
        <h3
          className="text-[1.8rem] font-light leading-tight text-cream mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {card.heading}
        </h3>
        <p className="text-[0.9rem] leading-[1.8] text-cream-muted mb-8">
          {card.body}
        </p>

        <ul className="space-y-3">
          {card.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-[0.85rem] text-cream-muted">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function WhyPartner() {
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
    <section id="partner" className="py-32 bg-dark-3">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headRef} className="fade-up mb-16 text-center">
          <div className="gold-line justify-center mb-6">Why Partner With Us</div>
          <h2
            className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Integrated{" "}
            <em className="italic text-gold-light">360° Service</em>
            <br />
            Ecosystem
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <PartnerCard key={c.tag} card={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
