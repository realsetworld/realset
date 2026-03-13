"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #141210 0%, #1c1a10 50%, #141210 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 79px,#C9A96E 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,#C9A96E 80px)",
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,169,110,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div ref={ref} className="fade-up">
          <div className="gold-line justify-center mb-8">Get in Touch</div>
          <h2
            className="text-[clamp(2.6rem,6vw,4.5rem)] font-light leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Let&apos;s Work{" "}
            <em className="italic text-gold-light">Together</em>
          </h2>

          {/* Divider */}
          <div className="w-16 h-px bg-gold mx-auto my-8 opacity-60" />

          <p className="text-cream-muted text-[0.95rem] leading-[1.8] mb-12 max-w-lg mx-auto">
            Ready to simplify your next relocation? Reach out to our team and
            we&apos;ll take care of the rest — from arrival to full settlement.
          </p>

          {/* Contact card */}
          <div className="border border-gold/15 bg-dark/60 p-10 mb-10 text-left max-w-md mx-auto backdrop-blur-sm">
            <div
              className="text-[1.5rem] font-light text-cream mb-1"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Bhaskar Mishra
            </div>
            <div className="text-[0.72rem] tracking-[0.15em] uppercase text-gold mb-6">
              Manager, Marketing & Customer Experience
            </div>

            <div className="space-y-3">
              <a
                href="tel:+919896044947"
                className="flex items-center gap-3 text-[0.9rem] text-cream-muted hover:text-gold-light transition-colors group"
              >
                <span className="w-8 h-8 border border-gold/20 flex items-center justify-center text-xs group-hover:border-gold/50 transition-colors">
                  📞
                </span>
                +91 98960 44947
              </a>
              <a
                href="mailto:realset.world@gmail.com"
                className="flex items-center gap-3 text-[0.9rem] text-cream-muted hover:text-gold-light transition-colors group"
              >
                <span className="w-8 h-8 border border-gold/20 flex items-center justify-center text-xs group-hover:border-gold/50 transition-colors">
                  ✉️
                </span>
                realset.world@gmail.com
              </a>
            </div>
          </div>

          {/* Address */}
          <p className="text-[0.82rem] leading-[1.8] text-cream-muted/70 mb-10">
            Realset Pvt Ltd · 5th Floor, Elite Building
            <br />
            Samaspur, Sector-51, Gurgaon, Haryana
          </p>

          {/* CTA */}
          <a
            href="mailto:realset.world@gmail.com"
            className="inline-block px-10 py-4 bg-gold text-dark text-[0.75rem] tracking-[0.18em] uppercase font-medium hover:bg-gold-light transition-all duration-300 hover:-translate-y-0.5"
          >
            Send Us a Message
          </a>
        </div>
      </div>
    </section>
  );
}
