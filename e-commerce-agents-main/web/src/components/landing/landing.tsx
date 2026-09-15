"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Store,
  ShoppingBag,
  Package,
  BadgePercent,
  Star,
  Boxes,
  LifeBuoy,
  ArrowRight,
  Workflow,
  Database,
  Cpu,
  Sparkles,
  BarChart3,
  Shield,
  Activity,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { pageEnter, listStagger, listItem, instant } from "@/lib/motion";

interface AgentCard {
  name: string;
  role: string;
  blurb: string;
  icon: LucideIcon;
}

const AGENTS: AgentCard[] = [
  { name: "Commerce Analyst", role: "Strategy & Orchestration", blurb: "Tracks GMV run-rate, conversion anomalies, and inventory risk across European channels.", icon: BarChart3 },
  { name: "Inventory Agent", role: "Stock Telemetry", blurb: "Predicts stockouts, SKU velocity, and automatically prepares supplier PO drafts.", icon: Boxes },
  { name: "Pricing Agent", role: "Dynamic Elasticity", blurb: "Calculates demand curves, competitor positioning, and margin expansion opportunities.", icon: BadgePercent },
  { name: "Product Agent", role: "Catalog Discovery", blurb: "Semantic vector search and localized attribute taxonomy over catalog embeddings.", icon: ShoppingBag },
  { name: "Orders Agent", role: "Fulfillment & Returns", blurb: "Automated routing, anti-fraud checks, and end-to-end order lifecycle management.", icon: Package },
  { name: "Review Intelligence", role: "Sentiment Mining", blurb: "Continuous customer sentiment extraction and early defect anomaly detection.", icon: Star },
  { name: "Customer Concierge", role: "Omnichannel Support", blurb: "Conversational client assistant handling sizing, availability, and order status.", icon: LifeBuoy },
];

const ARCH_LAYERS = [
  { label: "Executive Dashboard", sub: "Operations & Storefront", icon: Store },
  { label: "A2A Orchestrator", sub: "Inter-Agent Protocol", icon: Workflow },
  { label: "7 Specialist Agents", sub: "Autonomous Microservices", icon: Cpu },
  { label: "Vector & Telemetry", sub: "pgvector & OpenTelemetry", icon: Database },
];

export function Landing() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/40">
      {/* Nav */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg border border-purple-500/30 bg-purple-950/40 text-purple-400 shadow-inner">
            <svg className="size-5" viewBox="0 0 100 100" fill="none">
              <rect x="15" y="20" width="70" height="60" rx="10" stroke="#A78BFA" strokeWidth="8" />
              <path d="M35 20 V12 C35 6 42 2 50 2 C58 2 65 6 65 12 V20" stroke="#A78BFA" strokeWidth="8" strokeLinecap="round" />
              <circle cx="50" cy="50" r="6" fill="#8B5CF6" />
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-wider text-foreground">ZEN</span>
              <span className="text-xs font-light tracking-wider text-muted-foreground">GROUPE</span>
              <span className="rounded bg-purple-500/10 px-1.5 py-0.2 text-[10px] font-semibold text-purple-400 border border-purple-500/20">
                COMMERCE INTELLIGENCE
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Paris • Clermont-Ferrand • Dubai</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button render={<Link href="/operations" />} variant="outline" size="sm">
            <Activity className="size-3.5 mr-1 text-purple-400" />
            Operations Center
          </Button>
          <Button render={<Link href="/shop" />} size="sm">
            Store Concierge
          </Button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        variants={reduce ? instant : pageEnter}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl px-4 pb-12 pt-12 text-center sm:px-6 sm:pt-16"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/20 bg-card px-3.5 py-1 text-xs font-medium text-purple-400 shadow-xs">
          <Sparkles className="size-3.5 text-purple-400" />
          Autonomous Multi-Agent E-Commerce Operations Suite
        </span>
        <h1 className="mt-5 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Your AI commerce <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-400">
            operations team.
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          Seven specialized AI agents collaborating over the A2A protocol to monitor revenue, prevent stockouts, optimize dynamic pricing, and delight customers 24/7.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button render={<Link href="/operations" />} size="lg" className="shadow-sm">
            Launch Operations Center <ArrowRight className="size-4 ml-1" />
          </Button>
          <Button
            render={<Link href="/shop" />}
            variant="outline"
            size="lg"
          >
            Explore Store Demo
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["A2A Multi-Agent Protocol", "Vector Catalog Grounding", "Autonomous Stock Reordering", "Dynamic Elasticity Pricing", "Sentiment Mining"].map((s) => (
            <span
              key={s}
              className="rounded-full border bg-card/70 px-3 py-1 text-xs font-mono text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Architecture flow */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="grid items-stretch gap-3 sm:grid-cols-4">
          {ARCH_LAYERS.map((n, i) => (
            <div key={n.label} className="relative">
              <div className="flex h-full flex-col items-center rounded-xl bg-card p-4 text-center ring-1 ring-foreground/10 shadow-xs">
                <n.icon className="size-5 text-purple-400" />
                <p className="mt-2 text-sm font-semibold">{n.label}</p>
                <p className="text-xs text-muted-foreground">{n.sub}</p>
              </div>
              {i < 3 && (
                <ArrowRight className="absolute -right-2.5 top-1/2 hidden size-4 -translate-y-1/2 text-muted-foreground/50 sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Agents grid */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Meet the AI Operations Team
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Specialized autonomous agents operating continuously in parallel.
          </p>
        </div>

        <motion.div
          variants={reduce ? undefined : listStagger}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? undefined : "visible"}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AGENTS.map((a) => (
            <motion.div
              key={a.name}
              variants={reduce ? undefined : listItem}
              className="rounded-xl bg-card p-5 ring-1 ring-foreground/10 shadow-xs space-y-2 hover:ring-purple-500/30 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                  <a.icon className="size-4.5" />
                </div>
                <span className="text-[10px] font-mono font-semibold uppercase text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                  {a.role}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground pt-1">{a.name}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{a.blurb}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 px-4">
          <div>
            © 2026 <span className="font-semibold text-foreground">ZEN Groupe</span>. All rights reserved. • Paris • Clermont-Ferrand • Dubai
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.zen-groupe.fr" className="hover:text-foreground transition-colors">www.zen-groupe.fr</a>
            <span>•</span>
            <span>ZEN AI Suite</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
