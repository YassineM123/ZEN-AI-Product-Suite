# ZEN AI Suite

> **A collection of enterprise AI-powered business applications developed, adapted, and productized by ZEN Groupe.**
> 
> **ZEN Groupe** • Paris • Clermont-Ferrand • Dubai • [www.zen-groupe.fr](https://www.zen-groupe.fr)

---

## 🏛️ Executive Product Suite

The **ZEN AI Suite** transforms autonomous multi-agent systems into practical, high-value enterprise applications engineered for commercial presentations, live client demonstrations, and scalable SaaS deployment.

```
ZEN AI Suite
├── 📈 ZEN Market Intelligence  ── Multi-Agent Financial Research & Quantitative Telemetry
├── 🛍️ ZEN Commerce Intelligence ── Autonomous AI Commerce Operations Team
└── 💬 ZEN Sales Agent          ── Omnichannel Conversational Sales (WhatsApp & Instagram)
```

---

## 🚀 Product Family Overview

### Product 01 — ZEN Market Intelligence
*Multi-Agent Financial Research and Market Intelligence.*

- **Core Mission**: Replaces single-analyst bias with a collaborative institutional research committee. Evaluates equity and market conditions through parallel fundamental, technical, news, and sentiment pipelines with adversarial Bull vs. Bear debate synthesis.
- **Specialized Agents**:
  - `Market Analyst`: Ingests market data, historical volatility, and order book liquidity.
  - `Technical Analyst`: Momentum indicators (RSI, MACD, 50/200 DMA, Bollinger Bands).
  - `Fundamental Analyst`: Valuation multiples, FCF yield, debt/equity, balance sheet health.
  - `News Analyst`: Ingestion and synthesis across 24+ verified institutional sources.
  - `Sentiment Analyst`: Market breadth, options telemetry, social sentiment mining.
  - `Bull & Bear Researchers`: Adversarial debate on upside drivers vs. valuation risks.
  - `Risk Analyst`: Value at Risk (VaR 95%), drawdown stress-testing, and risk matrix modeling.
  - `Research Manager`: Final consensus arbitration and structured institutional report generation.
- **Institutional Terminology**: Clear probabilistic framing using *Research Signal*, *Risk Level*, *Research Confidence*, and *Market Outlook*.

### Product 02 — ZEN Commerce Intelligence
*Your AI Commerce Operations Team.*

- **Core Mission**: Autonomous operations command center coordinating 7 specialized microservice agents over the **A2A (Agent-to-Agent)** protocol to optimize revenue, stock velocity, dynamic pricing elasticity, and customer satisfaction.
- **Specialized Agents**:
  - `Commerce Analyst`: Cross-functional GMV tracking and anomaly detection.
  - `Inventory Agent`: Stock telemetry, warehouse burn rate prediction, and automated purchase orders.
  - `Pricing Agent`: Demand elasticity modeling and dynamic margin expansion recommendations.
  - `Product Agent`: Semantic vector search and catalog attribute enrichment.
  - `Orders Agent`: Multi-warehouse fulfillment routing and automated fraud prevention.
  - `Review Intelligence Agent`: Early defect detection and continuous customer sentiment mining.
  - `Customer Concierge`: 24/7 client assistant for sizing, availability, and support.
- **Generative UI Dashboard**: Inspects agent decisions and renders interactive data cards, trends, and action triggers.

### Product 03 — ZEN Sales Agent
*AI-Powered Sales Conversations Across WhatsApp and Instagram.*

- **Core Mission**: Converts inbound conversational traffic into qualified leads and closed revenue across WhatsApp and Instagram.
- **End-to-End Workflow**:
  $$\text{Customer Message} \longrightarrow \text{Intent Detection} \longrightarrow \text{Lead Qualification} \longrightarrow \text{Vector Search} \longrightarrow \text{AI Response} \longrightarrow \text{Lead Score (0--100)} \longrightarrow \text{CRM Update} \longrightarrow \text{Human Handoff}$$
- **Linear/Attio-Grade Omnichannel Inbox**:
  - Split 3-pane layout with channel filtering (WhatsApp & Instagram).
  - Real-time message streaming with intent and sentiment tagging.
  - Live Lead Intelligence panel displaying lead scores (0–100), qualification stage, and 1-click CRM actions.

---

## 🌐 Localhost Port Registry

| Product / Component | Local Port | Stack | Key Features |
| :--- | :--- | :--- | :--- |
| **ZEN Suite Central Portal** | [http://localhost:3003](http://localhost:3003) | Next.js 16 + Turbopack | Central Multi-Agent Portal, Live Health Telemetry, Executive Demo Switchers |
| **ZEN Market Intelligence** | [http://localhost:3002](http://localhost:3002) | Next.js 16 + React 19 + Python LangGraph | Research Dossiers (.MD/JSON), Multi-Agent Activity Stream, Risk Matrix |
| **ZEN Commerce Intelligence** | [http://localhost:3000](http://localhost:3000) | Next.js 16 + Tailwind v4 + Python/.NET MAF | Operations Command Center, Inventory Telemetry, Dynamic Pricing |
| **ZEN Sales Agent** | [http://localhost:3001](http://localhost:3001) | Next.js 16 + Cloudflare Edge / Workers | Omnichannel Inbox, WhatsApp & Instagram, Lead Scoring (0-100) |

---

## ⚡ Quick Start & Development Commands

### 1. Prerequisites
- **Node.js**: `v20+` (tested on Node v24)
- **pnpm**: `v9+` or **npm**: `v10+`
- **Python**: `3.10+` (for Market Intelligence CLI & LangGraph backend)

### 2. Environment Setup
Copy the template and configure your API keys:
```bash
cp .env.example .env
```
*(All products feature a built-in **Portfolio Demo Mode** that runs out of the box with realistic enterprise datasets even before connecting live API credentials).*

### 3. Running the Applications

#### Launch Full Suite Concurrently (Single Command)
```bash
npm run dev:all
```
*(Spins up the Central Portal on `3003`, Market Intelligence on `3002`, Commerce on `3000`, and Sales Agent on `3001` with formatted colored terminal logs).*

#### Or Run Individual Applications

```bash
# Central Portal (Port 3003)
npm run dev:portal

# Product 01: ZEN Market Intelligence (Port 3002)
npm run dev:market

# Product 02: ZEN Commerce Intelligence (Port 3000)
npm run dev:commerce

# Product 03: ZEN Sales Agent (Port 3001)
npm run dev:sales

# Build all applications for production verification
npm run build:all
```

---

## 🎨 ZEN Unified Design System & Tokens

All products in the suite share the **ZEN Slate Design System** inspired by Linear, Attio, Vercel, and Stripe:

- **Surface Tokens**: Deep Obsidian Slate (`#0B0F17`), Elevated Slate (`#111827`), Subtle Borders (`rgba(255, 255, 255, 0.08)`).
- **Accent Signals**: Electric Cobalt / Indigo (`#3B82F6`), Telemetry Cyan (`#06B6D4`), Emerald Status (`#10B981`).
- **Agent Status Badges**:
  - `Idle`: Muted gray (`bg-slate-800 text-slate-400 border-slate-700`)
  - `Working`: Electric cyan/indigo with spinner (`bg-sky-950/40 text-sky-400 border-sky-500/30`)
  - `Completed`: Emerald checkmark (`bg-emerald-950/40 text-emerald-400 border-emerald-500/30`)
  - `Needs Attention`: Warm amber alert (`bg-amber-950/40 text-amber-400 border-amber-500/30`)
  - `Failed`: Restrained crimson marker (`bg-rose-950/40 text-rose-400 border-rose-500/30`)

---

## 🔒 Security & Credibility Guidelines

1. **Zero Committed Secrets**: All endpoints, tokens, and credentials use `.env` files and environment variables.
2. **Realistic Professional Datasets**: Demo mode utilizes enterprise data fixtures (blue-chip tickers, European retail logistics, multi-language B2B conversations in French & English) without placeholder lorem ipsum or fabricated ROI claims.
3. **Open-Source Attribution & Licenses**: In accordance with open-source software ethics and legal compliance, original licensing terms and notices (including MIT and Apache-2.0 licenses from upstream foundational repositories) are strictly maintained within their respective project directories. Client-facing user interfaces are completely unified under ZEN Groupe presentation.

---

## 🏢 About ZEN Groupe

ZEN Groupe is a premier digital engineering and artificial intelligence consultancy delivering high-impact software, automation, and digitalization systems for enterprise clients.

- **Locations**: Paris • Clermont-Ferrand • Dubai
- **Website**: [www.zen-groupe.fr](https://www.zen-groupe.fr)
- **Contact**: contact@zen-groupe.fr
