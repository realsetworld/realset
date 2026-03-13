# Realset Pvt Ltd — Next.js Website

Premium dark-themed company profile website for Realset, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## ✦ Features

- **Dark luxury aesthetic** — deep charcoal backgrounds, warm gold (`#C9A96E`) accents, grain overlay
- **Cormorant Garamond** display font + **DM Sans** body font
- Scroll-triggered **fade-up animations** on every section
- **Animated counters** on the Highlights strip
- **Marquee ticker** of services
- Sticky **responsive Navbar** with mobile hamburger
- **Floating scroll-to-top** button
- Fully **responsive** — mobile, tablet, desktop

## ✦ Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen with ambient glow, grid lines, corner ornaments |
| **Marquee** | Animated service ticker strip |
| **About** | Company story + animated stat cards |
| **Highlights** | Counting stats banner (500+ properties, 48h delivery…) |
| **Services** | 6 service cards with gold hover reveals |
| **Process** | Sticky 6-step relocation journey |
| **Why Partner** | Value props for Companies & Employees |
| **Contact** | Contact card with CTA |
| **Footer** | Clean footer with nav links |

## ✦ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✦ Build for Production

```bash
npm run build
npm start
```

## ✦ Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/) — Cormorant Garamond, DM Sans

## ✦ Project Structure

```
realset/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with font imports
│   └── page.tsx           # Home page — composes all sections
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Hero.tsx           # Full-screen hero
│   ├── Marquee.tsx        # Scrolling service ticker
│   ├── About.tsx          # Who we are + stats
│   ├── Highlights.tsx     # Animated counters banner
│   ├── Services.tsx       # 6 service cards
│   ├── Process.tsx        # 6-step process (sticky layout)
│   ├── WhyPartner.tsx     # Partner value props
│   ├── Contact.tsx        # Contact section
│   ├── Footer.tsx         # Footer
│   └── ScrollToTop.tsx    # Floating back-to-top button
└── public/                # Static assets
```

---

*Built for Realset Pvt Ltd · Gurgaon, Haryana*
