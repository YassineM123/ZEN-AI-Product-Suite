"use client";

import React from "react";
import Link from "next/link";
import {
  Activity,
  ShoppingBag,
  MessageSquare,
  ArrowUpRight,
  Shield,
  Bot,
  Sparkles,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  Building2,
  Compass,
  ArrowRight,
} from "lucide-react";

export default function ZenSuitePortalPage() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0F17]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
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
                <span className="rounded bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-400 border border-sky-500/20">
                  AI SUITE
                </span>
              </div>
              <p className="text-[10px] text-slate-500">Paris • Clermont-Ferrand • Dubai</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>3 Products Operational</span>
            </div>
            <a
              href="https://www.zen-groupe.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              zen-groupe.fr
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-400" />
            Enterprise Multi-Agent Systems by ZEN Groupe
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            The coherent <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400">
              ZEN AI Product Suite.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Proprietary multi-agent architectures engineered for institutional market intelligence, autonomous commerce operations, and high-conversion omnichannel sales.
          </p>
        </div>

        {/* 3 Core Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 01: Market Intelligence */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6 flex flex-col justify-between space-y-6 hover:border-sky-500/40 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Activity className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-sky-400 border border-sky-500/20">
                  PORT 3002
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  PRODUCT 01
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  ZEN Market Intelligence
                </h2>
                <p className="text-xs text-sky-400 font-medium mt-1">
                  Multi-Agent Financial Research & Risk Telemetry
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Replaces single-analyst bias with a collaborative 9-agent institutional research committee. Parallel technical, fundamental, news, and adversarial Bull vs. Bear debate synthesis.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Adversarial Bull vs. Bear debate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Value at Risk (VaR 95%) & Stress Tests</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-sky-400" />
                  <span>Structured institutional research dossiers</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="http://localhost:3002"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 transition-colors"
              >
                Launch Market Intelligence
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product 02: Commerce Intelligence */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6 flex flex-col justify-between space-y-6 hover:border-purple-500/40 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-purple-400 border border-purple-500/20">
                  PORT 3000
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  PRODUCT 02
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  ZEN Commerce Intelligence
                </h2>
                <p className="text-xs text-purple-400 font-medium mt-1">
                  Your AI Commerce Operations Team
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Seven specialized AI microservices collaborating over the A2A protocol to autonomously track GMV, prevent warehouse stockouts, optimize pricing elasticity, and resolve customer support.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Autonomous stockout burn rate prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Dynamic elasticity pricing & margin lift</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-purple-400" />
                  <span>Generative UI & multi-agent command center</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="http://localhost:3000"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-purple-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors"
              >
                Launch Commerce Intelligence
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product 03: Sales Agent */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6 flex flex-col justify-between space-y-6 hover:border-emerald-500/40 transition-all shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-emerald-400 border border-emerald-500/20">
                  PORT 3001
                </span>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  PRODUCT 03
                </span>
                <h2 className="text-lg font-bold text-white mt-0.5">
                  ZEN Sales Agent
                </h2>
                <p className="text-xs text-emerald-400 font-medium mt-1">
                  Omnichannel WhatsApp & Instagram AI Agent
                </p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Handles real sales conversations 24/7. Extracts customer intent, searches vector catalogs, scores leads (0–100), and hands off to human sales teams with complete contextual dossiers.
              </p>

              <div className="space-y-1.5 pt-2 border-t border-white/[0.06] text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>WhatsApp & Instagram unified inbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Real-time Lead Scoring (0–100) & qualification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Linear / Attio-grade CRM handoff</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="http://localhost:3001"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors"
              >
                Launch Sales Agent
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Enterprise Architecture Map Strip */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="h-5 w-5 text-sky-400" />
                ZEN Multi-Agent Enterprise Architecture
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Unified telemetry, shared token design system, and multi-model AI routing.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">
                A2A Protocol
              </span>
              <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">
                LangGraph Engine
              </span>
              <span className="rounded bg-slate-800 px-2.5 py-1 border border-slate-700">
                Cloudflare Edge
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <span className="font-semibold text-white">01. Autonomous Collaboration</span>
              <p className="text-slate-400 leading-relaxed">
                Agents operate with specialized domain prompts, structured output validation, and stateful checkpointing rather than generic chatbots.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-white">02. Human-in-the-Loop Safeguards</span>
              <p className="text-slate-400 leading-relaxed">
                High-consequence actions (pricing shifts, supplier purchase orders, CRM escalations) present automated 1-click approvals for human operators.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-semibold text-white">03. Production Credibility</span>
              <p className="text-slate-400 leading-relaxed">
                Built-in portfolio demo modes with enterprise datasets, strict probabilistic research framing, and zero committed credentials.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#090D14] py-8 text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div>
            © 2026 <span className="font-semibold text-slate-300">ZEN Groupe</span>. All rights reserved. • Paris • Clermont-Ferrand • Dubai
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.zen-groupe.fr" className="hover:text-slate-300 transition-colors">www.zen-groupe.fr</a>
            <span>•</span>
            <span>Digital Products • Artificial Intelligence • Automation • Business Digitalization</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
