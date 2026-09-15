"use client";

import React, { useState } from "react";
import { AgentActivityStep, AgentStatus } from "../lib/types";
import { CheckCircle2, Clock, Cpu, AlertCircle, RefreshCw, ChevronDown, ChevronUp, Bot, Sparkles } from "lucide-react";

interface AgentActivityProps {
  steps: AgentActivityStep[];
  isRunning?: boolean;
  onRerun?: () => void;
  ticker: string;
}

export const AgentActivity: React.FC<AgentActivityProps> = ({
  steps,
  isRunning = false,
  onRerun,
  ticker,
}) => {
  const [expandedStepId, setExpandedStepId] = useState<string | null>(null);

  const getStatusBadge = (status: AgentStatus) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
            <CheckCircle2 className="h-3 w-3" /> Completed
          </span>
        );
      case "working":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-950/40 px-2 py-0.5 text-[11px] font-medium text-sky-400">
            <RefreshCw className="h-3 w-3 animate-spin" /> Working
          </span>
        );
      case "needs_attention":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-950/40 px-2 py-0.5 text-[11px] font-medium text-amber-400">
            <AlertCircle className="h-3 w-3" /> Needs Attention
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/30 bg-rose-950/40 px-2 py-0.5 text-[11px] font-medium text-rose-400">
            <AlertCircle className="h-3 w-3" /> Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-400">
            <Clock className="h-3 w-3" /> Idle
          </span>
        );
    }
  };

  const totalTokens = steps.reduce((acc, s) => acc + (s.tokensProcessed || 0), 0);

  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#111827] p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              Multi-Agent Orchestration Stream
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                {ticker}
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              8 specialized agents executing parallel financial research & synthesis
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Cpu className="h-3.5 w-3.5 text-sky-400" />
            <span>Tokens: {totalTokens.toLocaleString()}</span>
          </div>
          {onRerun && (
            <button
              onClick={onRerun}
              disabled={isRunning}
              className="flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-300 hover:bg-sky-500/20 disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`h-3 w-3 ${isRunning ? "animate-spin" : ""}`} />
              {isRunning ? "Synthesizing..." : "Re-run Multi-Agent Pipeline"}
            </button>
          )}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-4 space-y-3">
        {steps.map((step, idx) => {
          const isExpanded = expandedStepId === step.id;
          return (
            <div
              key={step.id}
              className="rounded-lg border border-white/[0.05] bg-slate-900/40 p-3 transition-colors hover:border-white/[0.1] hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-[11px] font-mono font-bold text-sky-400 border border-slate-700">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-slate-200">
                        {step.agentName}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        ({step.role})
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {step.timestamp}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      {step.message}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {getStatusBadge(step.status)}
                  {step.details && step.details.length > 0 && (
                    <button
                      onClick={() => setExpandedStepId(isExpanded ? null : step.id)}
                      className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Expandable details */}
              {isExpanded && step.details && (
                <div className="mt-3 rounded border border-white/[0.04] bg-black/30 p-2.5 text-xs text-slate-400 font-mono space-y-1">
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Execution Telemetry
                  </div>
                  {step.details.map((d, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-sky-400">›</span>
                      <span>{d}</span>
                    </div>
                  ))}
                  {step.durationMs && (
                    <div className="text-[10px] text-slate-500 pt-1">
                      Execution time: {step.durationMs}ms
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
