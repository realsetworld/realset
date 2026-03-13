"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🏠",
    title: "Residential Leasing",
    desc: "End-to-end support in sourcing, shortlisting, and securing apartments tailored to client budgets, locations, and lifestyle needs. We manage property tours, lease negotiations, documentation, and move-in coordination for a seamless experience.",
  },
  {
    icon: "🛎",
    title: "Service Apartments",
    desc: "Fully furnished and professionally managed apartments for short- and long-term stays. Each unit features modern amenities, housekeeping, utilities, and flexible lease terms — hotel-like comfort with the privacy of a home.",
  },
  {
    icon: "🚗",
    title: "Car Rental",
    desc: "Reliable long-term car rental solutions for expatriates and corporate employees. Includes a curated fleet, transparent monthly pricing, insurance, routine maintenance, and optional chauffeur support.",
  },
  {
    icon: "🌏",
    title: "City Orientation",
    desc: "In-depth introduction to expat-friendly neighborhoods, commute patterns, hospitals, international schools, embassies, and retail zones. Cultural training and on-ground guidance to accelerate adaptation.",
  },
  {
    icon: "📋",
    title: "PAN Card & Banking",
    desc: "Full PAN Card application support — documentation review, form preparation, and appointment scheduling. Bank account opening guidance tailored to international remittance needs and digital banking convenience.",
  },
  {
    icon: "⚡",
    title: "Utility Setup",
    desc: "A fully operational home from day one. We manage electricity, water, gas connections, internet & DTH, meter readings, and billing alignment so your team can focus on their work, not logistics.",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), index * 80);
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
      className="fade-up group relative bg-dark-2 p-8 overflow-hidden cursor-default"
      style={{ borderTop: "1px solid rgba(201,169,110,0.08)" }}
    >
      {/* Hover top border reveal */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
      />
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(201,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 flex items-center justify-center border border-gold/25 text-xl mb-6 group-hover:border-gold/60 transition-colors duration-300">
          {service.icon}
        </div>
        <h3
          className="text-[1.35rem] font-light text-cream mb-3 group-hover:text-gold-light transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          {service.title}
        </h3>
        <p className="text-[0.875rem] leading-[1.78] text-cream-muted">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
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
    <section id="services" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={headRef} className="fade-up mb-16 max-w-xl">
          <div className="gold-line no-before mb-6">What We Do</div>
          <h2
            className="text-[clamp(2.4rem,5vw,4rem)] font-light leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Our{" "}
            <em className="italic text-gold-light">Services</em>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>

        {/* "And more" tag */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gold/10" />
          <span className="text-[0.68rem] tracking-[0.2em] uppercase text-cream-muted/60">
            And so much more
          </span>
          <div className="h-px flex-1 bg-gold/10" />
        </div>
      </div>
    </section>
  );
}
