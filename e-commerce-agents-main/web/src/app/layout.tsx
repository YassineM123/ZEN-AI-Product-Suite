import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "ZEN Commerce Intelligence — AI Commerce Operations Team | ZEN Groupe",
  description:
    "Autonomous multi-agent commerce operations suite for inventory, dynamic pricing, and order intelligence by ZEN Groupe.",
  icons: {
    icon: "/zen-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-slate-950 text-slate-100" suppressHydrationWarning>
        <AuthProvider>{children}</AuthProvider>
        <Toaster
          position="bottom-right"
          richColors
          closeButton
          toastOptions={{ duration: 4000 }}
        />
      </body>
    </html>
  );
}
