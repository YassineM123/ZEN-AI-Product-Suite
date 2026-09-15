export interface SalesLead {
  id: string;
  name: string;
  company?: string;
  channel: "whatsapp" | "instagram";
  handleOrPhone: string;
  email?: string;
  score: number; // 0-100
  status: "new" | "engaged" | "warm" | "hot" | "converted" | "lost";
  intent: string;
  potentialService: string;
  recommendedAction: string;
  lastActive: string;
  unreadCount: number;
  sentiment: "Positive" | "Neutral" | "Interested" | "Urgent";
  summary: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  sender: "customer" | "ai" | "human_agent";
  channel: "whatsapp" | "instagram";
  text: string;
  timestamp: string;
  intent?: string;
  sentiment?: string;
  suggestedAction?: string;
  productsOrServicesReferenced?: string[];
  isFlaggedForHuman?: boolean;
}

export interface ConversationThread {
  id: string;
  lead: SalesLead;
  messages: ChatMessage[];
  lastMessage: string;
  lastTimestamp: string;
  unread: boolean;
}

export interface SalesServiceItem {
  id: string;
  title: string;
  category: string;
  priceRange: string;
  description: string;
  typicalDeliveryWeeks: number;
  inStockOrActive: boolean;
}

export const DEMO_SALES_SERVICES: SalesServiceItem[] = [
  {
    id: "srv-1",
    title: "AI Quote & Invoicing Workflow Automation",
    category: "Process Automation",
    priceRange: "€4,500 – €12,000",
    description: "End-to-end automation connecting WhatsApp, email RFPs, and ERP/CRM systems with human-in-the-loop validation.",
    typicalDeliveryWeeks: 3,
    inStockOrActive: true,
  },
  {
    id: "srv-2",
    title: "Custom Multi-Agent Enterprise System",
    category: "AI Engineering",
    priceRange: "€15,000 – €45,000",
    description: "Dedicated agent fleet for market intelligence, procurement, inventory optimization, or client operations.",
    typicalDeliveryWeeks: 6,
    inStockOrActive: true,
  },
  {
    id: "srv-3",
    title: "Omnichannel WhatsApp & Instagram AI Sales Agent",
    category: "Customer Experience",
    priceRange: "€3,000 setup + €450/mo",
    description: "24/7 lead qualification, vector catalog search, appointment booking, and automated CRM sync.",
    typicalDeliveryWeeks: 2,
    inStockOrActive: true,
  },
  {
    id: "srv-4",
    title: "Executive AI Strategy & Architecture Audit",
    category: "Consulting",
    priceRange: "€3,500 flat fee",
    description: "Comprehensive technical audit of business workflows with tailored roadmap for AI digitalization.",
    typicalDeliveryWeeks: 1,
    inStockOrActive: true,
  },
];

export const DEMO_SALES_THREADS: ConversationThread[] = [
  {
    id: "conv-1",
    lead: {
      id: "lead-1",
      name: "Alexandre Mercier",
      company: "Mercier Logistique & Transport",
      channel: "whatsapp",
      handleOrPhone: "+33 6 42 19 88 34",
      email: "a.mercier@mercier-logistique.fr",
      score: 82,
      status: "hot",
      intent: "Workflow Automation Inquiry",
      potentialService: "AI Quote & Invoicing Workflow Automation",
      recommendedAction: "Schedule technical consultation with Paris office",
      lastActive: "4 min ago",
      unreadCount: 1,
      sentiment: "Interested",
      summary: "High volume of weekly quote requests (40+/week) creating processing delays. Looking for fast deployment.",
      tags: ["High Volume", "B2B Logistics", "Paris"],
    },
    lastMessage: "Environ 40 par semaine, souvent avec des pièces jointes PDF complexes.",
    lastTimestamp: "10:46",
    unread: true,
    messages: [
      {
        id: "m1",
        sender: "customer",
        channel: "whatsapp",
        text: "Bonjour, je cherche une solution pour automatiser nos demandes de devis transport.",
        timestamp: "10:42",
        intent: "Inquiry / Automation",
        sentiment: "Neutral",
      },
      {
        id: "m2",
        sender: "ai",
        channel: "whatsapp",
        text: "Bonjour Alexandre, bienvenue chez ZEN Groupe. Nous automatisons couramment ce type de flux documentaire. Combien de demandes recevez-vous environ chaque semaine ?",
        timestamp: "10:43",
        intent: "Lead Qualification",
        suggestedAction: "Collect Volume Data",
      },
      {
        id: "m3",
        sender: "customer",
        channel: "whatsapp",
        text: "Environ 40 par semaine, souvent avec des pièces jointes PDF complexes.",
        timestamp: "10:46",
        intent: "Detailed Qualification",
        sentiment: "Interested",
      },
    ],
  },
  {
    id: "conv-2",
    lead: {
      id: "lead-2",
      name: "Sarah Al-Maktoum",
      company: "Aura Luxury Retail Dubai",
      channel: "instagram",
      handleOrPhone: "@aura.luxury.dubai",
      email: "sarah@auraluxury.ae",
      score: 94,
      status: "hot",
      intent: "VIP Concierge AI Agent",
      potentialService: "Omnichannel WhatsApp & Instagram AI Sales Agent",
      recommendedAction: "Connect with Dubai enterprise team for live demo",
      lastActive: "18 min ago",
      unreadCount: 0,
      sentiment: "Urgent",
      summary: "Looking to deploy private AI sales concierge for high-net-worth client styling and bespoke booking in UAE.",
      tags: ["Enterprise", "Dubai", "VIP Retail", "High Budget"],
    },
    lastMessage: "That looks exactly like what we need for our Dubai Mall boutique client requests.",
    lastTimestamp: "10:32",
    unread: false,
    messages: [
      {
        id: "m2-1",
        sender: "customer",
        channel: "instagram",
        text: "Hello! We manage high-end luxury client inquiries across Instagram and WhatsApp in Dubai. Can your AI agent handle bespoke product recommendations and calendar booking in both English and Arabic?",
        timestamp: "10:28",
        intent: "Omnichannel Concierge Inquiry",
        sentiment: "Interested",
      },
      {
        id: "m2-2",
        sender: "ai",
        channel: "instagram",
        text: "Hello Sarah, thank you for reaching out to ZEN Groupe. Yes, our Sales Agent natively supports bilingual English/Arabic client journeys, vector catalog search for luxury collections, and instant booking synchronization.",
        timestamp: "10:30",
        intent: "Capabilities Confirmation",
        productsOrServicesReferenced: ["Omnichannel WhatsApp & Instagram AI Sales Agent"],
      },
      {
        id: "m2-3",
        sender: "customer",
        channel: "instagram",
        text: "That looks exactly like what we need for our Dubai Mall boutique client requests. When can we organize a demo with your team?",
        timestamp: "10:32",
        intent: "Demo Request / Hot Lead",
        sentiment: "Urgent",
      },
    ],
  },
  {
    id: "conv-3",
    lead: {
      id: "lead-3",
      name: "Julien Dupont",
      company: "Cabinet Dupont & Associés",
      channel: "whatsapp",
      handleOrPhone: "+33 4 73 88 12 90",
      email: "j.dupont@dupont-associes.fr",
      score: 68,
      status: "warm",
      intent: "AI Document Audit",
      potentialService: "Executive AI Strategy & Architecture Audit",
      recommendedAction: "Send technical case study on legal document processing",
      lastActive: "1 hour ago",
      unreadCount: 0,
      sentiment: "Neutral",
      summary: "Accounting firm in Clermont-Ferrand evaluating automated invoice reconciliation and OCR parsing.",
      tags: ["Clermont-Ferrand", "Finance / Legal", "Evaluation"],
    },
    lastMessage: "Merci pour les précisions, je partage votre dossier avec mes associés cet après-midi.",
    lastTimestamp: "09:40",
    unread: false,
    messages: [
      {
        id: "m3-1",
        sender: "customer",
        channel: "whatsapp",
        text: "Bonjour, êtes-vous également basés à Clermont-Ferrand ? Nous aimerions échanger sur l'automatisation de pièces comptables.",
        timestamp: "09:35",
        intent: "Local Office Inquiry",
      },
      {
        id: "m3-2",
        sender: "ai",
        channel: "whatsapp",
        text: "Bonjour Julien. Tout à fait, ZEN Groupe dispose d'une présence à Clermont-Ferrand ainsi qu'à Paris et Dubai. Nos agents traitent l'extraction structurée de factures avec 99.8% de précision.",
        timestamp: "09:37",
        intent: "Local Grounding & Proof",
      },
      {
        id: "m3-3",
        sender: "customer",
        channel: "whatsapp",
        text: "Merci pour les précisions, je partage votre dossier avec mes associés cet après-midi.",
        timestamp: "09:40",
        intent: "Follow-up Scheduled",
      },
    ],
  },
];

export const DEMO_SALES_ANALYTICS = {
  totalMessagesToday: 486,
  totalConversationsActive: 38,
  qualifiedLeadsCount: 24,
  averageLeadScore: 78.5,
  humanHandoffRate: "6.2%",
  channelBreakdown: {
    whatsapp: 68,
    instagram: 32,
  },
  topIntents: [
    { intent: "Workflow Automation Inquiry", count: 142, percentage: 38 },
    { intent: "Pricing & Quotation", count: 98, percentage: 26 },
    { intent: "Enterprise Integration", count: 74, percentage: 20 },
    { intent: "Support / General", count: 60, percentage: 16 },
  ],
};
