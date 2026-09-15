"use client";

import React, { useState } from "react";
import { SuiteNavbar } from "../components/SuiteNavbar";
import { AgentActivity } from "../components/AgentActivity";
import { ResearchReportView } from "../components/ResearchReportView";
import { MOCK_REPORTS, MOCK_AGENT_ACTIVITY_STREAM } from "../lib/mock-data";
import { AgentActivityStep } from "../lib/types";
import {
  Search,
  TrendingUp,
  Activity,
  Layers,
  Shield,
  Bot,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Info,
  Building2,
  Zap,
} from "lucide-react";

export default function MarketIntelligenceDashboard() {
  const [selectedTicker, setSelectedTicker] = useState<string>("NVDA");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activitySteps, setActivitySteps] = useState<AgentActivityStep[]>(MOCK_AGENT_ACTIVITY_STREAM);
  const [activeView, setActiveView] = useState<"report" | "activity" | "watchlist">("report");

  const currentReport = MOCK_REPORTS[selectedTicker] || MOCK_REPORTS["NVDA"];

  const handleSelectTicker = (ticker: string) => {
    setSelectedTicker(ticker);
    simulateAgentPipeline(ticker);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const tickerUpper = searchQuery.trim().toUpperCase();
    if (MOCK_REPORTS[tickerUpper]) {
      handleSelectTicker(tickerUpper);
    } else {
      setSelectedTicker(tickerUpper);
      simulateAgentPipeline(tickerUpper);
    }
  };

  const simulateAgentPipeline = (ticker: string) => {
    setIsRunning(true);
    // Animate activity steps with timestamps
    const now = new Date();
    const updated = MOCK_AGENT_ACTIVITY_STREAM.map((step, idx) => {
      const stepTime = new Date(now.getTime() + idx * 3000);
      return {
        ...step,
        timestamp: stepTime.toTimeString().slice(0, 8),
        status: "working" as const,
      };
    });
    setActivitySteps(updated);

    setTimeout(() => {
      setActivitySteps(MOCK_AGENT_ACTIVITY_STREAM);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 flex flex-col font-sans">
      <SuiteNavbar currentProduct="market" />

      {/* Ticker tape bar */}
      <div className="border-b border-white/[0.06] bg-[#0E131F]/90 px-4 py-2 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-6 shrink-0">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Institutional Focus Tickers:
            </span>
            {["NVDA", "AAPL", "MSFT", "ASML", "MC.PA", "TSLA"].map((t) => {
              const rep = MOCK_REPORTS[t];
              const isSelected = selectedTicker === t;
              return (
                <button
                  key={t}
                  onClick={() => handleSelectTicker(t)}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                    isSelected
                      ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                      : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                  }`}
                >
                  <span className="font-bold">{t}</span>
                  {rep && (
                    <span className={rep.priceChangePercent >= 0 ? "text-emerald-400 text-[11px]" : "text-rose-400 text-[11px]"}>
                      {rep.priceChangePercent >= 0 ? "+" : ""}{rep.priceChangePercent}%
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-[11px] text-slate-400 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Multi-Agent Consensus Engine Live</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top Controls & Ticker Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2.5">
              ZEN Market Intelligence
              <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-400 border border-sky-500/20">
                Multi-Agent Financial Research
              </span>
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Institutional multi-agent intelligence system for structured financial research and risk modeling.
            </p>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ticker (e.g. NVDA, AAPL)..."
                className="w-full rounded-lg border border-white/10 bg-slate-900/90 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="rounded-lg border border-sky-500/30 bg-sky-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-sky-500 transition-colors"
            >
              Analyze
            </button>
          </form>
        </div>

        {/* Multi-Agent Orchestration Status Pipeline Strip */}
        <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-200">
                  Target Asset: <span className="font-mono text-sky-400 font-bold">{selectedTicker}</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  {currentReport.companyName} • {currentReport.sector}
                </div>
              </div>
            </div>

            {/* Pipeline Step Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px]">Market Data Feed</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px]">24+ Sources Checked</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px]">Fundamentals Scaled</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px]">Technical Signals</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                <span className="text-[11px]">Risk Stress-Tested</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveView(activeView === "report" ? "activity" : "report")}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
              >
                {activeView === "report" ? (
                  <>
                    <Activity className="h-3.5 w-3.5 text-sky-400" /> View Agent Stream
                  </>
                ) : (
                  <>
                    <Layers className="h-3.5 w-3.5 text-emerald-400" /> View Research Dossier
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* View Switcher: Report or Agent Stream */}
        {activeView === "report" ? (
          <ResearchReportView report={currentReport} />
        ) : (
          <AgentActivity
            steps={activitySteps}
            isRunning={isRunning}
            ticker={selectedTicker}
            onRerun={() => simulateAgentPipeline(selectedTicker)}
          />
        )}

        {/* Institutional Regulatory & Credibility Note */}
        <div className="mt-8 rounded-xl border border-white/[0.05] bg-slate-900/30 p-4 text-xs text-slate-400">
          <div className="flex items-start gap-2.5">
            <Info className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-semibold text-slate-300">
                Institutional Research & Compliance Notice — ZEN Groupe
              </span>
              <p className="text-[11px] leading-relaxed text-slate-500">
                ZEN Market Intelligence provides multi-agent financial research, automated factor synthesis, and quantitative scenario analysis. This system is designed as an analytical intelligence workbench for portfolio managers and research analysts, not an automated investment recommendation or guaranteed trading system.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/[0.06] bg-[#090D14] py-6 text-xs text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <div>
            © 2026 <span className="font-semibold text-slate-300">ZEN Groupe</span>. All rights reserved. • Paris • Clermont-Ferrand • Dubai
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.zen-groupe.fr" className="hover:text-slate-300 transition-colors">www.zen-groupe.fr</a>
            <span>•</span>
            <span>ZEN AI Suite v1.0</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
