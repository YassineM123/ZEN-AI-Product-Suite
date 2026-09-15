import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZEN Market Intelligence — Multi-Agent Financial Research | ZEN Groupe",
  description:
    "Institutional multi-agent financial research, quantitative telemetry, and risk factor intelligence developed by ZEN Groupe.",
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
