import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
// Stand-in for PP Editorial New Ultralight (commercial font). Swap in your licensed file via next/font/local.
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif-display" });

export const metadata: Metadata = {
  title: `${site.name} — ${site.role} Portfolio`,
  description: "Product designer working across UX/UI, SaaS products, mobile apps, dashboards, and design systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${serif.variable}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
