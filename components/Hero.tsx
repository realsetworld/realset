"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Staggered reveal
    const els = document.querySelectorAll(".hero-reveal");
    els.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 50% 65%, #221e0f 0%, #0C0B09 60%)",
      }}
    >
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 79px,#C9A96E 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,#C9A96E 80px)",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Corner ornaments */}
      <div className="absolute top-24 left-10 md:left-20 w-16 h-16 border-l border-t border-gold/20" />
      <div className="absolute top-24 right-10 md:right-20 w-16 h-16 border-r border-t border-gold/20" />
      <div className="absolute bottom-20 left-10 md:left-20 w-16 h-16 border-l border-b border-gold/20" />
      <div className="absolute bottom-20 right-10 md:right-20 w-16 h-16 border-r border-b border-gold/20" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div
          className="hero-reveal gold-line justify-center mb-8"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          Premium Relocation Solutions
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="hero-reveal font-display text-[clamp(3.2rem,9vw,7rem)] font-light leading-[1.02] tracking-[-0.01em] mb-4"
          style={{
            fontFamily: "var(--font-cormorant)",
            opacity: 0,
            transform: "translateY(28px)",
            transition: "all 0.8s ease",
          }}
        >
          Arrival to{" "}
          <em className="italic text-gold-light not-italic" style={{ fontStyle: "italic" }}>
            Settlement
          </em>
        </h1>

        {/* Sub-title */}
        <p
          className="hero-reveal font-display text-[clamp(1rem,2.8vw,1.6rem)] font-light italic text-cream-muted tracking-wide mb-12"
          style={{
            fontFamily: "var(--font-cormorant)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          We Manage It All — By Realset Pvt Ltd
        </p>

        {/* CTAs */}
        <div
          className="hero-reveal flex flex-wrap gap-4 justify-center"
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s ease",
          }}
        >
          <a
            href="#services"
            className="px-8 py-3.5 bg-gold text-dark text-[0.75rem] tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-gold/40 text-cream text-[0.75rem] tracking-[0.15em] uppercase hover:border-gold hover:text-gold-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        <span className="text-[0.62rem] tracking-[0.25em] uppercase text-cream-muted">
          Scroll
        </span>
      </div>

      {/* Tagline strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gold/10 py-3 flex items-center justify-center gap-8 overflow-hidden">
        {["Residential Leasing", "Service Apartments", "Car Rental", "City Orientation", "Utility Setup"].map(
          (item, i) => (
            <span
              key={i}
              className="text-[0.6rem] tracking-[0.2em] uppercase text-cream-muted/50 whitespace-nowrap"
            >
              {item}
            </span>
          )
        )}
      </div>
    </section>
  );
}
