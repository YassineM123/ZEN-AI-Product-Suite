"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Shield, Terminal, ArrowUpRight, Activity } from "lucide-react";

interface SuiteNavbarProps {
  currentProduct?: "market" | "commerce" | "sales";
  onDemoToggle?: (isDemo: boolean) => void;
  isDemo?: boolean;
}

export const SuiteNavbar: React.FC<SuiteNavbarProps> = ({
  currentProduct = "market",
  onDemoToggle,
  isDemo = true,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-slate-900 shadow-inner">
              <svg className="h-5 w-5" viewBox="0 0 100 100" fill="none">
                <path d="M26 30 H74 L34 70 H74" stroke="#38BDF8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="70" cy="30" r="5" fill="#06B6D4" />
                <circle cx="30" cy="70" r="5" fill="#3B82F6" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-wider text-slate-100">ZEN</span>
                <span className="text-sm font-light tracking-wider text-slate-400">GROUPE</span>
                <span className="rounded bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-sky-400 border border-sky-500/20">
                  MARKET INTELLIGENCE
                </span>
              </div>
              <p className="text-[10px] text-slate-500">Paris • Clermont-Ferrand • Dubai</p>
            </div>
          </Link>

          {/* Product Switcher */}
          <nav className="hidden md:flex items-center gap-1 rounded-lg border border-white/[0.06] bg-slate-900/60 p-1">
            <Link
              href="http://localhost:3002"
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                currentProduct === "market"
                  ? "bg-sky-500/20 text-sky-300 shadow-sm border border-sky-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Activity className="h-3.5 w-3.5 text-sky-400" />
              Market Intelligence
            </Link>
            <Link
              href="http://localhost:3000"
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                currentProduct === "commerce"
                  ? "bg-purple-500/20 text-purple-300 shadow-sm border border-purple-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-purple-400" />
              Commerce Intelligence
            </Link>
            <Link
              href="http://localhost:3001"
              className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                currentProduct === "sales"
                  ? "bg-emerald-500/20 text-emerald-300 shadow-sm border border-emerald-500/30"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Sales Agent
            </Link>
          </nav>
        </div>

        {/* Right tools */}
        <div className="flex items-center gap-3">
          {/* Demo Mode Badge */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-medium">Portfolio Demo Mode</span>
          </div>

          <a
            href="https://www.zen-groupe.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            zen-groupe.fr
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </header>
  );
};
