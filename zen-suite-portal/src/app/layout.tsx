import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZEN AI Suite — Enterprise Multi-Agent Systems | ZEN Groupe",
  description:
    "A coherent suite of AI-powered enterprise applications developed and presented by ZEN Groupe (Paris • Clermont-Ferrand • Dubai).",
  icons: {
    icon: "/zen-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0B0F17] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
        {children}
      </body>
    </html>
  );
}
