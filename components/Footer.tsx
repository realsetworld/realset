export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <span
          className="text-xl font-light tracking-widest text-gold"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          REALSET
        </span>

        <div className="flex items-center gap-6">
          {["About", "Services", "Process", "Why Us", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(" ", "")}`}
              className="text-[0.65rem] tracking-[0.15em] uppercase text-cream-muted/50 hover:text-cream-muted transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <p className="text-[0.72rem] text-cream-muted/40 tracking-wide">
          © {new Date().getFullYear()} Realset Pvt Ltd · Gurgaon, India
        </p>
      </div>
    </footer>
  );
}
