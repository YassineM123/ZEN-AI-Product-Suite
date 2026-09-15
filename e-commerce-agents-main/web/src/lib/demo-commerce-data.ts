export interface CommerceInsight {
  id: string;
  agent: string;
  category: "inventory" | "pricing" | "conversion" | "sentiment";
  severity: "high" | "medium" | "low" | "opportunity";
  title: string;
  description: string;
  impact: string;
  recommendedAction: string;
  actionPayload?: string;
  timestamp: string;
}

export interface InventoryAlert {
  id: string;
  sku: string;
  productName: string;
  currentStock: number;
  dailyBurnRate: number;
  daysRemaining: number;
  reorderThreshold: number;
  supplierLeadDays: number;
  status: "critical" | "warning" | "optimal";
}

export interface PricingOpportunity {
  id: string;
  productId: string;
  productName: string;
  currentPrice: number;
  suggestedPrice: number;
  projectedMarginLiftPercent: number;
  projectedRevenueImpact: string;
  rationale: string;
  confidenceScore: number;
}

export interface CommerceAgentStep {
  id: string;
  agentName: string;
  role: string;
  timestamp: string;
  status: "completed" | "working" | "needs_attention" | "idle";
  actionSummary: string;
  details: string[];
  metrics?: { tokens?: number; latencyMs?: number };
}

export const DEMO_COMMERCE_DATA = {
  kpis: {
    grossRevenue: 148920,
    grossRevenueGrowth: +14.2,
    totalOrders: 1842,
    totalOrdersGrowth: +8.7,
    averageOrderValue: 80.85,
    averageOrderValueGrowth: +5.1,
    activeAgentsCount: 7,
    pendingHumanApprovals: 2,
    customerSentimentIndex: 88.4,
  },

  agents: [
    {
      id: "agent-commerce-analyst",
      name: "Commerce Analyst",
      role: "Cross-functional Operations Orchestration",
      description: "Continuously tracks top-line GMV, margin degradation, and channel velocity.",
      status: "working",
      tasksCompletedToday: 142,
      confidence: 96,
    },
    {
      id: "agent-inventory",
      name: "Inventory Agent",
      role: "Stock Telemetry & Supply Reordering",
      description: "Monitors warehouse SKU burn rates, predicts stockouts, and issues automated replenishment POs.",
      status: "completed",
      tasksCompletedToday: 88,
      confidence: 94,
    },
    {
      id: "agent-pricing",
      name: "Pricing Agent",
      role: "Dynamic Elasticity & Margin Optimization",
      description: "Evaluates competitor positioning and demand elasticity to recommend revenue-maximizing price points.",
      status: "completed",
      tasksCompletedToday: 64,
      confidence: 91,
    },
    {
      id: "agent-product",
      name: "Product Agent",
      role: "Catalog Enrichment & Vector Discovery",
      description: "Maintains semantic embeddings, attribute taxonomy, and localized product metadata.",
      status: "completed",
      tasksCompletedToday: 310,
      confidence: 98,
    },
    {
      id: "agent-orders",
      name: "Orders Agent",
      role: "Fulfillment & Routing Automation",
      description: "Validates order fraud signals, coordinates multi-warehouse logistics, and manages returns.",
      status: "completed",
      tasksCompletedToday: 1842,
      confidence: 99,
    },
    {
      id: "agent-reviews",
      name: "Review Intelligence Agent",
      role: "Sentiment & Defect Signal Mining",
      description: "Analyzes customer feedback across channels to isolate quality anomalies before returns escalate.",
      status: "completed",
      tasksCompletedToday: 412,
      confidence: 92,
    },
    {
      id: "agent-customer",
      name: "Customer Agent",
      role: "Conversational Support & VIP Concierge",
      description: "Resolves omnichannel customer inquiries, sizing queries, and delivery tracking in real-time.",
      status: "working",
      tasksCompletedToday: 620,
      confidence: 95,
    },
  ],

  insights: [
    {
      id: "ins-1",
      agent: "Product Agent",
      category: "conversion",
      severity: "medium",
      title: "Apex Pro Wireless Headset conversion anomaly",
      description: "Product views increased +18% over the past 7 days, but checkout conversion decreased 7.2%. Review analysis indicates sizing/weight questions in the reviews tab.",
      impact: "Estimated €4,200 lost monthly revenue",
      recommendedAction: "Enrich specification card with ergonomic weight comparison and 3D fit guide.",
      timestamp: "10 minutes ago",
    },
    {
      id: "ins-2",
      agent: "Inventory Agent",
      category: "inventory",
      severity: "high",
      title: "Stockout hazard on Merino Wool Knit (Navy / M)",
      description: "Inventory for SKU-MW-NAVY-M is currently at 14 units with a daily burn rate of 2.4 units. Stock will deplete within 5.8 days.",
      impact: "Potential 12-day out-of-stock window costing €6,800",
      recommendedAction: "Approve expedited Purchase Order #PO-8821 to supplier in Lyon.",
      timestamp: "25 minutes ago",
    },
    {
      id: "ins-3",
      agent: "Pricing Agent",
      category: "pricing",
      severity: "opportunity",
      title: "3 premium leather goods eligible for margin expansion",
      description: "Demand elasticity models show that increasing price on top luxury tote bags by 6.5% will have negligible volume impact (-0.4%), expanding gross margins +€5,400/month.",
      impact: "+€5,400 monthly gross profit lift",
      recommendedAction: "Apply automated price adjustment across European storefronts.",
      timestamp: "1 hour ago",
    },
    {
      id: "ins-4",
      agent: "Review Intelligence Agent",
      category: "sentiment",
      severity: "low",
      title: "Packaging feedback positively impacting unboxing sentiment",
      description: "Eco-friendly compostable packaging roll-out mentioned positively in 34 recent 5-star customer reviews.",
      impact: "+4.2 point increase in NPS sentiment",
      recommendedAction: "Highlight sustainability badges on product discovery carousel.",
      timestamp: "2 hours ago",
    },
  ] as CommerceInsight[],

  inventoryAlerts: [
    {
      id: "inv-1",
      sku: "SKU-MW-NAVY-M",
      productName: "Merino Wool Knit Sweater (Navy / M)",
      currentStock: 14,
      dailyBurnRate: 2.4,
      daysRemaining: 6,
      reorderThreshold: 25,
      supplierLeadDays: 5,
      status: "critical",
    },
    {
      id: "inv-2",
      sku: "SKU-HD-APEX-BLK",
      productName: "Apex Pro Noise-Cancelling Headset (Obsidian)",
      currentStock: 28,
      dailyBurnRate: 3.8,
      daysRemaining: 7,
      reorderThreshold: 40,
      supplierLeadDays: 6,
      status: "critical",
    },
    {
      id: "inv-3",
      sku: "SKU-LTH-WLT-BRN",
      productName: "Full-Grain Leather Bifold Wallet (Cognac)",
      currentStock: 45,
      dailyBurnRate: 3.2,
      daysRemaining: 14,
      reorderThreshold: 50,
      supplierLeadDays: 10,
      status: "warning",
    },
    {
      id: "inv-4",
      sku: "SKU-SLK-SCARF-EMR",
      productName: "Mulberry Silk Heritage Scarf (Emerald)",
      currentStock: 120,
      dailyBurnRate: 2.1,
      daysRemaining: 57,
      reorderThreshold: 30,
      supplierLeadDays: 14,
      status: "optimal",
    },
  ] as InventoryAlert[],

  pricingOpportunities: [
    {
      id: "prc-1",
      productId: "p101",
      productName: "Artisan Leather Travel Duffel 45L",
      currentPrice: 289.0,
      suggestedPrice: 319.0,
      projectedMarginLiftPercent: 10.4,
      projectedRevenueImpact: "+€3,600 / month",
      rationale: "Competitor stockouts in European tier-1 market; high customer perceived value rating (4.9/5).",
      confidenceScore: 94,
    },
    {
      id: "prc-2",
      productId: "p102",
      productName: "Minimalist Chronograph Watch (Titanium)",
      currentPrice: 195.0,
      suggestedPrice: 215.0,
      projectedMarginLiftPercent: 8.8,
      projectedRevenueImpact: "+€2,200 / month",
      rationale: "Low price sensitivity among repeat executive buyers; cross-sell attach rate 32%.",
      confidenceScore: 89,
    },
    {
      id: "prc-3",
      productId: "p103",
      productName: "Cashmere Ribbed Beanie (Charcoal)",
      currentPrice: 65.0,
      suggestedPrice: 72.0,
      projectedMarginLiftPercent: 9.5,
      projectedRevenueImpact: "+€1,450 / month",
      rationale: "Seasonal winter demand surge with limited domestic alternatives.",
      confidenceScore: 92,
    },
  ] as PricingOpportunity[],

  agentActivityTimeline: [
    {
      id: "act-c1",
      agentName: "Commerce Analyst",
      role: "Operations Monitor",
      timestamp: "10:44:12",
      status: "completed",
      actionSummary: "Aggregated 1,842 daily order events and computed real-time GMV velocity across Paris and EU gateways.",
      details: ["GMV run-rate: €148,920 (+14.2% MoM)", "Average basket item count: 2.4"],
      metrics: { tokens: 3420, latencyMs: 310 },
    },
    {
      id: "act-c2",
      agentName: "Inventory Agent",
      role: "Stock Telemetry",
      timestamp: "10:44:05",
      status: "completed",
      actionSummary: "Identified critical depletion velocity on Merino Wool Knit SKU-MW-NAVY-M. Generated Draft Purchase Order PO-8821.",
      details: ["Remaining stock: 14 units", "Days of coverage: 5.8 days", "Supplier: Atelier Lyon"],
      metrics: { tokens: 4890, latencyMs: 460 },
    },
    {
      id: "act-c3",
      agentName: "Pricing Agent",
      role: "Dynamic Elasticity",
      timestamp: "10:43:50",
      status: "completed",
      actionSummary: "Calculated price elasticity matrix across 120 SKUs. Identified +€5,400 monthly margin expansion opportunity.",
      details: ["Elasticity coefficient: -0.12 (Inelastic)", "Recommended +6.5% adjustment on luxury line"],
      metrics: { tokens: 5120, latencyMs: 620 },
    },
    {
      id: "act-c4",
      agentName: "Review Intelligence Agent",
      role: "Sentiment Mining",
      timestamp: "10:43:22",
      status: "completed",
      actionSummary: "Parsed 48 verified customer reviews from Shopify and Amazon EU feeds. Verified 88.4% positive sentiment index.",
      details: ["Zero severe quality anomalies detected", "Packaging sentiment index: 94/100"],
      metrics: { tokens: 6140, latencyMs: 580 },
    },
  ] as CommerceAgentStep[],
};
