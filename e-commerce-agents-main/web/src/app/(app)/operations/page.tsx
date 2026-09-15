"use client";

import React, { useState } from "react";
import { DEMO_COMMERCE_DATA, CommerceInsight, InventoryAlert, PricingOpportunity } from "@/lib/demo-commerce-data";
import {
  TrendingUp,
  TrendingDown,
  ShoppingBag,
  Package,
  AlertTriangle,
  Bot,
  Zap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  DollarSign,
  Boxes,
  Star,
  Activity,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Layers,
} from "lucide-react";

export default function CommerceOperationsPage() {
  const [activeTab, setActiveTab] = useState<"insights" | "inventory" | "pricing" | "agents" | "activity">("insights");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dismissedInsights, setDismissedInsights] = useState<string[]>([]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 800);
  };

  const handleActionClick = (id: string) => {
    setDismissedInsights((prev) => [...prev, id]);
  };

  const visibleInsights = DEMO_COMMERCE_DATA.insights.filter(
    (ins) => !dismissedInsights.includes(ins.id)
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-400 border border-purple-500/20">
              ZEN Commerce Intelligence
            </span>
            <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
              7 Agents Active
            </span>
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            AI Commerce Operations Command Center
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Real-time multi-agent autonomous monitoring across inventory, dynamic pricing, orders, and customer sentiment.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`size-3.5 ${isRefreshing ? "animate-spin text-primary" : "text-muted-foreground"}`} />
            <span>{isRefreshing ? "Syncing Telemetry..." : "Refresh Agents"}</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Revenue */}
        <div className="rounded-xl border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Gross Revenue (MoM)</span>
            <DollarSign className="size-4 text-primary" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              €{DEMO_COMMERCE_DATA.kpis.grossRevenue.toLocaleString()}
            </span>
            <span className="flex items-center text-xs font-semibold text-emerald-500 font-mono">
              <TrendingUp className="mr-0.5 size-3" />
              +{DEMO_COMMERCE_DATA.kpis.grossRevenueGrowth}%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">Automated multi-store sync</p>
        </div>

        {/* Orders */}
        <div className="rounded-xl border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Monthly Orders</span>
            <Package className="size-4 text-purple-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              {DEMO_COMMERCE_DATA.kpis.totalOrders.toLocaleString()}
            </span>
            <span className="flex items-center text-xs font-semibold text-emerald-500 font-mono">
              <TrendingUp className="mr-0.5 size-3" />
              +{DEMO_COMMERCE_DATA.kpis.totalOrdersGrowth}%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">99.4% automated dispatch</p>
        </div>

        {/* AOV */}
        <div className="rounded-xl border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Average Order Value (AOV)</span>
            <ShoppingBag className="size-4 text-sky-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              €{DEMO_COMMERCE_DATA.kpis.averageOrderValue.toFixed(2)}
            </span>
            <span className="flex items-center text-xs font-semibold text-emerald-500 font-mono">
              <TrendingUp className="mr-0.5 size-3" />
              +{DEMO_COMMERCE_DATA.kpis.averageOrderValueGrowth}%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">Dynamic cross-sell attach rate 28%</p>
        </div>

        {/* Stock Alerts */}
        <div className="rounded-xl border bg-card p-5 shadow-xs">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Inventory & Pricing Alerts</span>
            <AlertTriangle className="size-4 text-amber-400" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold tracking-tight text-foreground font-mono">
              {DEMO_COMMERCE_DATA.inventoryAlerts.length + DEMO_COMMERCE_DATA.pricingOpportunities.length}
            </span>
            <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-amber-500 border border-amber-500/20">
              Requires Review
            </span>
          </div>
          <p className="mt-1 text-[11px] text-muted-foreground">2 automated PO drafts ready</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab("insights")}
          className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
            activeTab === "insights"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <Sparkles className="size-3.5" />
          Actionable AI Insights ({visibleInsights.length})
        </button>

        <button
          onClick={() => setActiveTab("inventory")}
          className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
            activeTab === "inventory"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <Boxes className="size-3.5" />
          Inventory Telemetry ({DEMO_COMMERCE_DATA.inventoryAlerts.length})
        </button>

        <button
          onClick={() => setActiveTab("pricing")}
          className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
            activeTab === "pricing"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <DollarSign className="size-3.5" />
          Pricing Opportunities ({DEMO_COMMERCE_DATA.pricingOpportunities.length})
        </button>

        <button
          onClick={() => setActiveTab("agents")}
          className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
            activeTab === "agents"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <Bot className="size-3.5" />
          AI Operations Team ({DEMO_COMMERCE_DATA.agents.length})
        </button>

        <button
          onClick={() => setActiveTab("activity")}
          className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors ${
            activeTab === "activity"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
          }`}
        >
          <Activity className="size-3.5" />
          Agent Activity Stream
        </button>
      </div>

      {/* Tab 1: AI Insights */}
      {activeTab === "insights" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="size-4 text-purple-400" />
              Prioritized Operational Recommendations
            </h2>
            <span className="text-xs text-muted-foreground font-mono">
              Auto-synthesized by Commerce Analyst
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {visibleInsights.map((insight) => (
              <div
                key={insight.id}
                className="rounded-xl border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                        {insight.agent}
                      </span>
                      <span
                        className={`rounded px-2 py-0.5 text-[11px] font-semibold ${
                          insight.severity === "high"
                            ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            : insight.severity === "opportunity"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        }`}
                      >
                        {insight.category.toUpperCase()} • {insight.severity.toUpperCase()}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {insight.timestamp}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-foreground">
                      {insight.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>

                    <div className="rounded-lg border bg-muted/40 p-3 text-xs flex items-center justify-between gap-2">
                      <span className="text-muted-foreground">
                        Projected Financial Impact: <strong className="text-foreground">{insight.impact}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                    <button
                      onClick={() => handleActionClick(insight.id)}
                      className="flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-medium text-primary-foreground shadow-xs hover:bg-primary/90 transition-colors"
                    >
                      <Zap className="size-3.5" />
                      Execute Action
                    </button>
                    <span className="text-[10px] text-muted-foreground">
                      1-click approval
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {visibleInsights.length === 0 && (
              <div className="rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground">
                <CheckCircle2 className="mx-auto size-8 text-emerald-500 mb-2" />
                All operational recommendations have been reviewed and executed.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Inventory Alerts */}
      {activeTab === "inventory" && (
        <div className="rounded-xl border bg-card overflow-hidden shadow-xs">
          <div className="border-b p-5">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <Boxes className="size-4 text-amber-400" />
              Autonomous Inventory Velocity & Stockout Risk
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Monitored by Inventory Agent with automated lead-time calculations from European suppliers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="p-4 font-medium">SKU / Product</th>
                  <th className="p-4 font-medium">Current Units</th>
                  <th className="p-4 font-medium">Daily Velocity</th>
                  <th className="p-4 font-medium">Days of Stock</th>
                  <th className="p-4 font-medium">Supplier Lead</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {DEMO_COMMERCE_DATA.inventoryAlerts.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div className="font-semibold text-foreground">{item.productName}</div>
                      <div className="text-[11px] font-mono text-muted-foreground">{item.sku}</div>
                    </td>
                    <td className="p-4 font-mono font-bold text-foreground">{item.currentStock}</td>
                    <td className="p-4 font-mono text-muted-foreground">{item.dailyBurnRate} / day</td>
                    <td className="p-4">
                      <span
                        className={`font-mono font-bold ${
                          item.daysRemaining <= 7 ? "text-rose-400" : "text-amber-400"
                        }`}
                      >
                        {item.daysRemaining} days
                      </span>
                    </td>
                    <td className="p-4 font-mono text-muted-foreground">{item.supplierLeadDays} days</td>
                    <td className="p-4">
                      <span
                        className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                          item.status === "critical"
                            ? "bg-rose-500/10 text-rose-400 border border-rose-500/20"
                            : item.status === "warning"
                            ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button className="rounded border bg-accent/50 px-2.5 py-1 text-xs font-medium text-foreground hover:bg-accent transition-colors">
                        Generate PO Reorder
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Dynamic Pricing Opportunities */}
      {activeTab === "pricing" && (
        <div className="rounded-xl border bg-card overflow-hidden shadow-xs">
          <div className="border-b p-5">
            <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
              <DollarSign className="size-4 text-emerald-400" />
              Dynamic Pricing & Margin Expansion Opportunities
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Elasticity models run every 6 hours evaluating demand curve, competitor stockouts, and margin expansion.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Current Price</th>
                  <th className="p-4 font-medium">Suggested Price</th>
                  <th className="p-4 font-medium">Margin Lift</th>
                  <th className="p-4 font-medium">Est. Monthly Gain</th>
                  <th className="p-4 font-medium">AI Rationale</th>
                  <th className="p-4 font-medium">Confidence</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {DEMO_COMMERCE_DATA.pricingOpportunities.map((prc) => (
                  <tr key={prc.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-foreground">{prc.productName}</td>
                    <td className="p-4 font-mono text-muted-foreground">€{prc.currentPrice.toFixed(2)}</td>
                    <td className="p-4 font-mono font-bold text-emerald-400">€{prc.suggestedPrice.toFixed(2)}</td>
                    <td className="p-4 font-mono text-emerald-400 font-bold">+{prc.projectedMarginLiftPercent}%</td>
                    <td className="p-4 font-mono text-foreground font-semibold">{prc.projectedRevenueImpact}</td>
                    <td className="p-4 text-muted-foreground max-w-xs leading-relaxed">{prc.rationale}</td>
                    <td className="p-4 font-mono text-primary font-bold">{prc.confidenceScore}%</td>
                    <td className="p-4">
                      <button className="rounded bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors">
                        Apply Price
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: AI Operations Team */}
      {activeTab === "agents" && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEMO_COMMERCE_DATA.agents.map((ag) => (
            <div key={ag.id} className="rounded-xl border bg-card p-5 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                    <Bot className="size-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{ag.name}</h3>
                    <p className="text-[11px] text-muted-foreground font-mono">{ag.role}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">{ag.description}</p>

              <div className="flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                <span className="text-muted-foreground font-mono">Tasks Today: {ag.tasksCompletedToday}</span>
                <span className="text-primary font-mono font-semibold">Confidence: {ag.confidence}%</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Real-time Agent Activity Stream */}
      {activeTab === "activity" && (
        <div className="rounded-xl border bg-card p-5 space-y-4">
          <div className="flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Activity className="size-4 text-primary" />
                Live Agent Collaboration Stream (A2A Protocol)
              </h2>
              <p className="text-xs text-muted-foreground">
                Autonomous reasoning logs streamed directly from the multi-agent operations engine.
              </p>
            </div>
            <span className="rounded bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">
              Protocol: A2A / MAF
            </span>
          </div>

          <div className="space-y-3">
            {DEMO_COMMERCE_DATA.agentActivityTimeline.map((step, idx) => (
              <div key={step.id} className="rounded-lg border bg-muted/20 p-3.5 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold font-mono">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-foreground">{step.agentName}</span>
                    <span className="text-[11px] text-muted-foreground font-mono">({step.role})</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">{step.timestamp}</span>
                </div>

                <p className="text-xs text-foreground/90 leading-relaxed pl-7">{step.actionSummary}</p>

                {step.details && (
                  <div className="ml-7 rounded bg-black/20 p-2 text-xs font-mono text-muted-foreground space-y-1">
                    {step.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-primary">›</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
