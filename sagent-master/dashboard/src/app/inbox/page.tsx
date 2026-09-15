"use client";

import React, { useState } from "react";
import {
  DEMO_SALES_THREADS,
  ConversationThread,
  ChatMessage,
  SalesLead,
} from "@/lib/demo-sales-data";
import {
  MessageSquare,
  Sparkles,
  User,
  Bot,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  Send,
  UserCheck,
  TrendingUp,
  Tag,
  Search,
  Filter,
  Phone,
  Mail,
  Building2,
  Clock,
  ArrowRight,
  Shield,
  Zap,
} from "lucide-react";

export default function OmnichannelSalesInbox() {
  const [threads, setThreads] = useState<ConversationThread[]>(DEMO_SALES_THREADS);
  const [selectedThreadId, setSelectedThreadId] = useState<string>("conv-1");
  const [channelFilter, setChannelFilter] = useState<"all" | "whatsapp" | "instagram">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [replyText, setReplyText] = useState("");
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  const selectedThread = threads.find((t) => t.id === selectedThreadId) || threads[0];

  const filteredThreads = threads.filter((t) => {
    if (channelFilter !== "all" && t.lead.channel !== channelFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        t.lead.name.toLowerCase().includes(q) ||
        (t.lead.company && t.lead.company.toLowerCase().includes(q)) ||
        t.lead.handleOrPhone.toLowerCase().includes(q) ||
        t.lastMessage.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSendMessage = () => {
    if (!replyText.trim()) return;
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      sender: "human_agent",
      channel: selectedThread.lead.channel,
      text: replyText.trim(),
      timestamp: new Date().toTimeString().slice(0, 5),
    };

    setThreads((prev) =>
      prev.map((t) =>
        t.id === selectedThread.id
          ? {
              ...t,
              messages: [...t.messages, newMessage],
              lastMessage: newMessage.text,
              lastTimestamp: newMessage.timestamp,
            }
          : t
      )
    );
    setReplyText("");
  };

  const handleGenerateAiResponse = () => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      let suggested = "";
      if (selectedThread.lead.id === "lead-1") {
        suggested =
          "Parfait Alexandre. Pour 40 demandes hebdomadaires avec PDFs techniques, notre connecteur IA extrait les données clés en 3 secondes et pré-remplit vos devis. Souhaitez-vous planifier un créneau de 15 minutes ce jeudi à 14h avec notre équipe technique de Paris ?";
      } else if (selectedThread.lead.id === "lead-2") {
        suggested =
          "We would be delighted to host a private demonstration for Aura Luxury Retail. Our Dubai enterprise director can meet you at DIFC or organize an online session this Wednesday at 11:00 AM GST. Would that suit your schedule?";
      } else {
        suggested =
          "Bonjour Julien, nous serions ravis d'échanger avec vos associés sur vos flux comptables. Je vous transmets notre livre blanc technique.";
      }
      setReplyText(suggested);
      setIsGeneratingAi(false);
    }, 600);
  };

  const triggerAction = (actionLabel: string) => {
    setActionSuccessMessage(`Action executed: ${actionLabel}`);
    setTimeout(() => setActionSuccessMessage(null), 3000);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col bg-background text-foreground overflow-hidden">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b px-6 py-3 bg-muted/20 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
            <MessageSquare className="size-4" />
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight">
              Omnichannel Sales Inbox
            </h1>
            <p className="text-[11px] text-muted-foreground">
              WhatsApp & Instagram AI-Assisted Conversation Hub • Linear / Attio Grade
            </p>
          </div>
        </div>

        {actionSuccessMessage && (
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-semibold text-emerald-400 animate-in fade-in">
            <CheckCircle2 className="size-3.5" />
            {actionSuccessMessage}
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
            Autonomous Lead Qualification Active
          </span>
        </div>
      </div>

      {/* Main 3-Pane Layout */}
      <div className="grid flex-1 grid-cols-12 overflow-hidden divide-x">
        {/* PANE 1: Thread List (3 cols) */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3 flex flex-col bg-card/40 overflow-hidden">
          {/* Filters & Search */}
          <div className="p-3 space-y-2 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search leads, phone, text..."
                className="w-full rounded-md border bg-muted/40 pl-8 pr-3 py-1.5 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            {/* Channel Tabs */}
            <div className="flex items-center gap-1 rounded-md border bg-muted/30 p-0.5 text-xs">
              <button
                onClick={() => setChannelFilter("all")}
                className={`flex-1 rounded py-1 font-medium transition-colors ${
                  channelFilter === "all" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setChannelFilter("whatsapp")}
                className={`flex-1 rounded py-1 font-medium transition-colors ${
                  channelFilter === "whatsapp" ? "bg-emerald-500/10 text-emerald-400 shadow-xs" : "text-muted-foreground"
                }`}
              >
                WhatsApp
              </button>
              <button
                onClick={() => setChannelFilter("instagram")}
                className={`flex-1 rounded py-1 font-medium transition-colors ${
                  channelFilter === "instagram" ? "bg-purple-500/10 text-purple-400 shadow-xs" : "text-muted-foreground"
                }`}
              >
                Instagram
              </button>
            </div>
          </div>

          {/* Thread List */}
          <div className="flex-1 overflow-y-auto divide-y divide-border/40">
            {filteredThreads.map((thread) => {
              const isSelected = thread.id === selectedThread.id;
              return (
                <button
                  key={thread.id}
                  onClick={() => setSelectedThreadId(thread.id)}
                  className={`w-full p-3.5 text-left transition-colors flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-accent/80 border-l-2 border-l-primary"
                      : "hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-2 rounded-full ${
                          thread.lead.channel === "whatsapp" ? "bg-emerald-400" : "bg-purple-400"
                        }`}
                      />
                      <span className="text-xs font-semibold text-foreground truncate max-w-[130px]">
                        {thread.lead.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-primary">
                        {thread.lead.score}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-mono">
                        {thread.lastTimestamp}
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-muted-foreground line-clamp-1">
                    {thread.lastMessage}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[10px]">
                    <span className="text-muted-foreground truncate max-w-[140px]">
                      {thread.lead.company || thread.lead.handleOrPhone}
                    </span>
                    <span className="rounded bg-muted px-1.5 py-0.2 text-[9px] font-medium text-foreground uppercase">
                      {thread.lead.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PANE 2: Conversation Stream & Composer (6 cols) */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6 flex flex-col bg-card/20 overflow-hidden">
          {/* Thread Header */}
          <div className="flex items-center justify-between border-b px-5 py-3.5 bg-card/60">
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-full bg-muted font-bold text-xs text-foreground">
                {selectedThread.lead.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-sm font-semibold text-foreground">
                    {selectedThread.lead.name}
                  </h2>
                  <span
                    className={`rounded px-1.5 py-0.2 text-[10px] font-semibold uppercase ${
                      selectedThread.lead.channel === "whatsapp"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    }`}
                  >
                    {selectedThread.lead.channel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedThread.lead.company} • {selectedThread.lead.handleOrPhone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => triggerAction("Assigned to Human Agent")}
                className="flex items-center gap-1 rounded-md border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <UserCheck className="size-3.5" />
                Assign to Human
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedThread.messages.map((msg) => {
              const isCustomer = msg.sender === "customer";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isCustomer ? "items-start" : "items-end"}`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground mb-1">
                    {isCustomer ? (
                      <span className="font-semibold text-foreground flex items-center gap-1">
                        <User className="size-3" /> {selectedThread.lead.name}
                      </span>
                    ) : msg.sender === "ai" ? (
                      <span className="font-semibold text-emerald-400 flex items-center gap-1">
                        <Bot className="size-3" /> ZEN Sales Agent (AI)
                      </span>
                    ) : (
                      <span className="font-semibold text-sky-400 flex items-center gap-1">
                        <UserCheck className="size-3" /> Human Specialist
                      </span>
                    )}
                    <span>• {msg.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-[85%] rounded-xl px-4 py-2.5 text-xs leading-relaxed shadow-xs ${
                      isCustomer
                        ? "bg-muted text-foreground border rounded-tl-none"
                        : msg.sender === "ai"
                        ? "bg-emerald-950/40 text-emerald-100 border border-emerald-500/30 rounded-tr-none"
                        : "bg-primary text-primary-foreground rounded-tr-none"
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.intent && (
                    <span className="mt-1 text-[10px] font-mono text-muted-foreground flex items-center gap-1">
                      <Tag className="size-2.5" /> Intent: {msg.intent}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Composer */}
          <div className="p-3.5 border-t bg-card/60 space-y-2.5">
            <div className="flex items-center justify-between">
              <button
                onClick={handleGenerateAiResponse}
                disabled={isGeneratingAi}
                className="flex items-center gap-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors disabled:opacity-50"
              >
                <Sparkles className={`size-3.5 ${isGeneratingAi ? "animate-spin" : ""}`} />
                {isGeneratingAi ? "Generating..." : "Generate AI Suggested Response"}
              </button>

              <span className="text-[10px] text-muted-foreground font-mono">
                Channel: {selectedThread.lead.channel.toUpperCase()}
              </span>
            </div>

            <div className="relative">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                rows={3}
                placeholder="Type response or press 'Generate AI Suggested Response'..."
                className="w-full rounded-lg border bg-background p-3 text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
              <button
                onClick={handleSendMessage}
                disabled={!replyText.trim()}
                className="absolute right-2.5 bottom-3.5 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-colors flex items-center gap-1"
              >
                Send <Send className="size-3" />
              </button>
            </div>
          </div>
        </div>

        {/* PANE 3: Lead & System Intelligence Panel (3 cols) */}
        <div className="hidden lg:col-span-3 lg:flex flex-col bg-card/40 p-4 space-y-5 overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Shield className="size-3.5 text-primary" />
              Lead Intelligence & CRM State
            </h3>
          </div>

          {/* Lead Score Gauge Card */}
          <div className="rounded-xl border bg-card p-4 space-y-3 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Lead Score</span>
              <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 border border-emerald-500/20">
                HIGH CONVERSION PROBABILITY
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-emerald-400">
                {selectedThread.lead.score}
              </span>
              <span className="text-xs text-muted-foreground font-mono">/ 100</span>
            </div>

            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-400 transition-all duration-500"
                style={{ width: `${selectedThread.lead.score}%` }}
              />
            </div>
          </div>

          {/* Detected Intent & Potential Service */}
          <div className="rounded-xl border bg-card p-4 space-y-3 text-xs shadow-xs">
            <div>
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">Detected Intent:</span>
              <p className="mt-0.5 font-semibold text-foreground">{selectedThread.lead.intent}</p>
            </div>

            <div className="border-t pt-2.5">
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">Potential ZEN Solution:</span>
              <p className="mt-0.5 font-semibold text-primary">{selectedThread.lead.potentialService}</p>
            </div>

            <div className="border-t pt-2.5">
              <span className="text-[10px] font-semibold uppercase text-muted-foreground">Qualification Status:</span>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-400 uppercase">
                  {selectedThread.lead.status}
                </span>
                <span className="text-[11px] text-muted-foreground">Sentiment: {selectedThread.lead.sentiment}</span>
              </div>
            </div>
          </div>

          {/* Recommended Next Action */}
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary flex items-center gap-1">
              <Zap className="size-3" /> Recommended Next Action
            </span>
            <p className="text-xs font-semibold text-foreground leading-relaxed">
              {selectedThread.lead.recommendedAction}
            </p>
          </div>

          {/* Quick CRM Action Buttons */}
          <div className="space-y-2 pt-1">
            <span className="text-[10px] font-semibold uppercase text-muted-foreground">Quick Actions</span>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => triggerAction("Consultation Invitation Dispatched")}
                className="flex items-center justify-between rounded-lg border bg-card px-3 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="size-3.5 text-primary" /> Schedule Consultation
                </span>
                <ArrowRight className="size-3 text-muted-foreground" />
              </button>

              <button
                onClick={() => triggerAction("Lead Exported to HubSpot / CRM")}
                className="flex items-center justify-between rounded-lg border bg-card px-3 py-2 text-xs font-medium text-foreground hover:bg-accent transition-colors"
              >
                <span className="flex items-center gap-2">
                  <UserCheck className="size-3.5 text-emerald-400" /> Push to CRM
                </span>
                <ArrowRight className="size-3 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="rounded-xl border bg-card p-3.5 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="size-3.5 text-muted-foreground" />
              <span className="font-mono text-foreground">{selectedThread.lead.handleOrPhone}</span>
            </div>
            {selectedThread.lead.email && (
              <div className="flex items-center gap-2">
                <Mail className="size-3.5 text-muted-foreground" />
                <span className="text-foreground">{selectedThread.lead.email}</span>
              </div>
            )}
            {selectedThread.lead.company && (
              <div className="flex items-center gap-2">
                <Building2 className="size-3.5 text-muted-foreground" />
                <span className="text-foreground">{selectedThread.lead.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
