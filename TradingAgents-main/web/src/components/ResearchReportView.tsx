"use client";

import React, { useState } from "react";
import { ResearchReport } from "../lib/types";
import {
  TrendingUp,
  TrendingDown,
  ShieldCheck,
  BarChart2,
  FileText,
  AlertTriangle,
  Scale,
  Compass,
  Layers,
  CheckCircle,
  ExternalLink,
  Download,
  Share2,
} from "lucide-react";

interface ResearchReportViewProps {
  report: ResearchReport;
}

export const ResearchReportView: React.FC<ResearchReportViewProps> = ({ report }) => {
  const [activeTab, setActiveTab] = useState<"all" | "technicals" | "fundamentals" | "debate" | "risks">("all");

  const getSignalBadge = (signal: ResearchReport["researchSignal"]) => {
    switch (signal) {
      case "Bullish Accumulation":
      case "Constructive Lean":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            {signal}
          </span>
        );
      case "Neutral Observation":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-950/40 px-3 py-1 text-xs font-semibold text-amber-400">
            <Scale className="h-3.5 w-3.5" />
            {signal}
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-rose-500/30 bg-rose-950/40 px-3 py-1 text-xs font-semibold text-rose-400">
            <TrendingDown className="h-3.5 w-3.5" />
            {signal}
          </span>
        );
    }
  };

  const getRiskBadge = (level: ResearchReport["riskLevel"]) => {
    switch (level) {
      case "Controlled":
        return (
          <span className="inline-flex items-center gap-1 rounded-md border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Controlled Risk
          </span>
        );
      case "Moderate":
        return (
          <span className="inline-flex items-center gap-1 rounded-md border border-sky-500/30 bg-sky-950/40 px-2.5 py-0.5 text-xs font-medium text-sky-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Moderate Risk
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-950/40 px-2.5 py-0.5 text-xs font-medium text-amber-400">
            <AlertTriangle className="h-3.5 w-3.5" /> Elevated Risk
          </span>
        );
    }
  };

  const downloadReportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ZEN_Market_Intelligence_${report.ticker}_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-6">
      {/* Executive Header Card */}
      <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-6 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.06] pb-5">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {report.companyName}
              </h2>
              <span className="rounded-md border border-white/10 bg-slate-800 px-2.5 py-0.5 text-xs font-mono font-bold text-sky-400">
                {report.ticker}
              </span>
              <span className="text-xs text-slate-400">{report.exchange}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Sector: <span className="text-slate-300 font-medium">{report.sector}</span> • Generated: {report.generatedAt}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={downloadReportJson}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-slate-400" />
              Export Dossier (JSON)
            </button>
          </div>
        </div>

        {/* Top telemetry metric grid */}
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-lg border border-white/[0.05] bg-slate-900/50 p-3.5">
            <div className="text-[11px] font-medium text-slate-400">Research Signal</div>
            <div className="mt-1.5">{getSignalBadge(report.researchSignal)}</div>
          </div>

          <div className="rounded-lg border border-white/[0.05] bg-slate-900/50 p-3.5">
            <div className="text-[11px] font-medium text-slate-400">Risk Assessment</div>
            <div className="mt-1.5">{getRiskBadge(report.riskLevel)}</div>
          </div>

          <div className="rounded-lg border border-white/[0.05] bg-slate-900/50 p-3.5">
            <div className="text-[11px] font-medium text-slate-400">Research Confidence</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-sky-400">
                {report.researchConfidence}%
              </span>
              <span className="text-[10px] text-slate-500">Consensus Metric</span>
            </div>
          </div>

          <div className="rounded-lg border border-white/[0.05] bg-slate-900/50 p-3.5">
            <div className="text-[11px] font-medium text-slate-400">Market Price</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="text-xl font-bold font-mono text-white">
                {report.currency === "EUR" ? "€" : "$"}{report.currentPrice.toFixed(2)}
              </span>
              <span className={`text-xs font-mono font-medium ${report.priceChangePercent >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                {report.priceChangePercent >= 0 ? "+" : ""}{report.priceChangePercent}%
              </span>
            </div>
          </div>
        </div>

        {/* Executive Summary Quote */}
        <div className="mt-5 rounded-lg border border-sky-500/20 bg-sky-950/20 p-4">
          <div className="text-[11px] uppercase tracking-wider font-bold text-sky-400 flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5" /> Market Outlook & Executive Thesis
          </div>
          <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-medium">
            "{report.marketOutlook}"
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-relaxed">
            {report.executiveSummary}
          </p>
        </div>
      </div>

      {/* Navigation Filter Tabs */}
      <div className="flex items-center gap-1 border-b border-white/[0.08] pb-2">
        <button
          onClick={() => setActiveTab("all")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === "all"
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Comprehensive Dossier
        </button>
        <button
          onClick={() => setActiveTab("technicals")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === "technicals"
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Technicals & Momentum
        </button>
        <button
          onClick={() => setActiveTab("fundamentals")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === "fundamentals"
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Fundamentals & Cash Flow
        </button>
        <button
          onClick={() => setActiveTab("debate")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === "debate"
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Bull vs. Bear Debate
        </button>
        <button
          onClick={() => setActiveTab("risks")}
          className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            activeTab === "risks"
              ? "bg-slate-800 text-white"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Risk Matrix & Stress Tests
        </button>
      </div>

      {/* Section 1: Technical & Fundamental Dual View */}
      {(activeTab === "all" || activeTab === "technicals" || activeTab === "fundamentals") && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Technical Signals */}
          <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <BarChart2 className="h-4 w-4 text-sky-400" />
                Technical & Momentum Signals
              </h3>
              <span className="text-xs font-mono text-emerald-400">
                {report.technicals.macd.trend}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">RSI (14-period)</div>
                <div className="mt-1 text-base font-bold font-mono text-white">
                  {report.technicals.rsi14}
                  <span className="ml-1 text-[10px] font-normal text-slate-500">
                    {report.technicals.rsi14 > 70 ? "(Overbought)" : report.technicals.rsi14 < 30 ? "(Oversold)" : "(Healthy Range)"}
                  </span>
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">50 / 200 DMA Alignment</div>
                <div className="mt-1 text-base font-bold font-mono text-emerald-400">
                  {report.technicals.priceVsDma200Percent > 0 ? "+" : ""}{report.technicals.priceVsDma200Percent}% vs 200 DMA
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">Key Support Level</div>
                <div className="mt-1 text-base font-bold font-mono text-white">
                  ${report.technicals.supportLevel.toFixed(2)}
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">Key Resistance Level</div>
                <div className="mt-1 text-base font-bold font-mono text-white">
                  ${report.technicals.resistanceLevel.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-white/[0.04] bg-slate-900/30 p-3 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Bollinger Bandwidth:</span>
                <span className="font-mono text-slate-200">{report.technicals.bollingerBands.bandwidth}</span>
              </div>
              <div className="mt-1 flex justify-between">
                <span>Upper / Lower Bands:</span>
                <span className="font-mono text-slate-200">${report.technicals.bollingerBands.upper} / ${report.technicals.bollingerBands.lower}</span>
              </div>
            </div>
          </div>

          {/* Fundamental Health */}
          <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                <Layers className="h-4 w-4 text-emerald-400" />
                Fundamental Health & Valuation
              </h3>
              <span className="rounded bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 text-xs font-mono font-bold text-emerald-400">
                Score: {report.fundamentals.financialHealthScore}/100
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">Market Capitalization</div>
                <div className="mt-1 text-base font-bold font-mono text-white">
                  {report.fundamentals.marketCap}
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">Trailing P/E vs Forward</div>
                <div className="mt-1 text-base font-bold font-mono text-sky-400">
                  {report.fundamentals.peRatio}x / {report.fundamentals.forwardPe}x
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">YoY Revenue Growth</div>
                <div className="mt-1 text-base font-bold font-mono text-emerald-400">
                  +{report.fundamentals.revenueGrowthYoy}%
                </div>
              </div>

              <div className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3">
                <div className="text-slate-400">Gross Margin</div>
                <div className="mt-1 text-base font-bold font-mono text-white">
                  {report.fundamentals.grossMargin}%
                </div>
              </div>
            </div>

            <div className="mt-3 rounded-lg border border-white/[0.04] bg-slate-900/30 p-3 text-xs text-slate-400">
              <div className="flex justify-between">
                <span>Free Cash Flow Yield:</span>
                <span className="font-mono text-emerald-400">{report.fundamentals.fcfYield}%</span>
              </div>
              <div className="mt-1 flex justify-between">
                <span>Debt-to-Equity:</span>
                <span className="font-mono text-slate-200">{report.fundamentals.debtToEquity}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 2: Bull vs. Bear Multi-Agent Debate */}
      {(activeTab === "all" || activeTab === "debate") && (
        <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <Scale className="h-4 w-4 text-sky-400" />
              Multi-Agent Bull vs. Bear Debate Synthesis
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              Research Manager Arbitration
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Bull Case */}
            <div className="rounded-lg border border-emerald-500/20 bg-emerald-950/10 p-4">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <TrendingUp className="h-3.5 w-3.5" /> Bull Researcher Thesis
                </span>
                <span className="rounded bg-emerald-950/80 px-2 py-0.5 text-[11px] font-mono text-emerald-400">
                  Confidence: {report.bullThesis.confidenceScore}%
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-200 leading-relaxed font-medium">
                {report.bullThesis.thesis}
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-400">Key Upside Drivers:</div>
                {report.bullThesis.keyArguments.map((arg, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{arg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bear Case */}
            <div className="rounded-lg border border-rose-500/20 bg-rose-950/10 p-4">
              <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <TrendingDown className="h-3.5 w-3.5" /> Bear Researcher Thesis
                </span>
                <span className="rounded bg-rose-950/80 px-2 py-0.5 text-[11px] font-mono text-rose-400">
                  Confidence: {report.bearThesis.confidenceScore}%
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-200 leading-relaxed font-medium">
                {report.bearThesis.thesis}
              </p>
              <div className="mt-3 space-y-1.5">
                <div className="text-[11px] font-semibold text-slate-400">Key Vulnerabilities & Headwinds:</div>
                {report.bearThesis.keyArguments.map((arg, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-rose-400 font-bold">✕</span>
                    <span>{arg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 3: Risk Matrix & Actionable Conclusion */}
      {(activeTab === "all" || activeTab === "risks") && (
        <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              Risk Matrix & Stress-Test Scenarios
            </h3>
            <span className="text-xs font-mono text-slate-400">
              Value at Risk: {report.riskAssessment.valueAtRisk95}
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {report.riskAssessment.stressTestScenarios.map((st, i) => (
              <div key={i} className="rounded-lg border border-white/[0.04] bg-slate-900/50 p-3 text-xs">
                <div className="text-slate-400 font-medium">{st.scenario}</div>
                <div className="mt-1 font-mono font-bold text-amber-400">
                  {st.projectedImpact}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-lg border border-white/[0.05]">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-white/[0.06] bg-slate-900/80 text-slate-400">
                <tr>
                  <th className="px-3.5 py-2.5 font-medium">Category</th>
                  <th className="px-3.5 py-2.5 font-medium">Identified Risk Factor</th>
                  <th className="px-3.5 py-2.5 font-medium">Severity</th>
                  <th className="px-3.5 py-2.5 font-medium">Probability</th>
                  <th className="px-3.5 py-2.5 font-medium">Mitigating Factors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] bg-slate-900/30">
                {report.riskAssessment.risks.map((risk, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/60">
                    <td className="px-3.5 py-2.5 font-medium text-slate-300">{risk.category}</td>
                    <td className="px-3.5 py-2.5 text-slate-200">{risk.riskName}</td>
                    <td className="px-3.5 py-2.5">
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {risk.severity}
                      </span>
                    </td>
                    <td className="px-3.5 py-2.5 text-slate-400">{risk.probability}</td>
                    <td className="px-3.5 py-2.5 text-slate-400">{risk.mitigant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Actionable Conclusion Footer */}
          <div className="mt-6 rounded-lg border border-white/10 bg-slate-900/80 p-4">
            <div className="text-xs uppercase tracking-wider font-bold text-sky-400">
              Institutional Actionable Posture
            </div>
            <p className="mt-1.5 text-xs text-slate-200 font-medium leading-relaxed">
              {report.researchConclusion.synthesis}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-3 text-xs">
              <div className="text-slate-300">
                Recommendation: <span className="font-semibold text-sky-400">{report.researchConclusion.actionablePosture}</span>
              </div>
              <div className="text-slate-400">
                Research Horizon: <span className="font-mono text-slate-200">{report.researchConclusion.horizonWeeks} Weeks</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
