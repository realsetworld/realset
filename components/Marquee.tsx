"use client";

const items = [
  "Residential Leasing",
  "Service Apartments",
  "Long-Term Car Rental",
  "City Orientation",
  "PAN Card Support",
  "Bank Account Opening",
  "Utility Connections",
  "Cultural Training",
  "Lease Negotiations",
  "Move-In Coordination",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-gold/10 bg-dark-3 py-4 select-none">
      <div
        className="flex gap-12 w-max"
        style={{
          animation: "marquee 30s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-4 text-[0.68rem] tracking-[0.2em] uppercase text-cream-muted/50 whitespace-nowrap"
          >
            <span className="w-1 h-1 rounded-full bg-gold/40 inline-block" />
            {item}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
