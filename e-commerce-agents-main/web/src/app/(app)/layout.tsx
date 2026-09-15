"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { CartProvider } from "@/lib/cart-context";
import { DesktopSidebar, MobileSidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import { CommandPalette } from "@/components/command-palette";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If user is ever null, ensure demo access
    if (!isLoading && !user) {
      // Auto-fallback
    }
  }, [user, isLoading, router]);

  return (
    <CartProvider>
      <CommandPalette />
      <div className="flex h-screen overflow-hidden">
        <DesktopSidebar />
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Mobile header */}
          <header className="flex h-14 items-center gap-2 border-b bg-background px-4 lg:hidden">
            <MobileSidebar />
            <span className="text-sm font-semibold">ZEN Commerce Intelligence</span>
          </header>
          {/* Desktop top bar */}
          <TopBar />
          {/* Main content */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </CartProvider>
  );
}
