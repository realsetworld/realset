import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Realset Pvt Ltd — Premium Relocation Solutions",
  description:
    "Arrival to Settlement, We Manage It All. Realset is a premium relocation solutions company for expatriates and corporate teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-cream antialiased">{children}</body>
    </html>
  );
}
