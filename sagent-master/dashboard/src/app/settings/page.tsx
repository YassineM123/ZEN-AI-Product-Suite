import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getDB, getBusinessById } from "@/lib/db";
import { requireBusinessForPage, getSafeAuth } from "@/lib/auth-utils";
import { SettingsForm } from "./settings-form";
import { BlurFade } from "@/components/ui/blur-fade";
import { MessageSquare, Users, Clock, Settings, Power, Mail, RefreshCw, Smartphone } from "lucide-react";

// Force dynamic rendering for D1 database access
export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  const { user } = await getSafeAuth();
  const activeUserId = user?.id || "demo_executive";

  const db = await getDB();
  const businessId = await requireBusinessForPage(db, activeUserId);
  const business = (await getBusinessById(db, businessId)) || {
    id: "zen-groupe-enterprise",
    name: "ZEN Groupe Enterprise",
    whatsapp_phone_id: "33189000000",
    ai_enabled: 1,
    brand_tone: "professional",
    greeting_template: "Bonjour, je suis l'assistant commercial IA de ZEN Groupe. Comment puis-je vous accompagner aujourd'hui ?",
    handoff_email: "contact@zen-groupe.fr",
    handoff_phone: "+33 1 89 00 00 00",
    auto_handoff_threshold: 3,
    escalation_keywords: "urgent, directeur, devis sur mesure, contrat cadre",
    timezone: "Europe/Paris",
    working_hours: "08:30 - 19:00 CET",
    after_hours_message: "Nos bureaux sont actuellement fermés. Votre demande a été enregistrée avec succès.",
    digest_email: "direction@zen-groupe.fr",
    digest_daily_enabled: 1,
    digest_weekly_enabled: 1,
    follow_up_enabled: 1,
    follow_up_delay_hours: 4,
  };


  if (!business) {
    return (
      <div className="space-y-6">
        <BlurFade delay={0}>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">Business not found</p>
          </div>
        </BlurFade>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <BlurFade delay={0}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Settings className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
            <p className="text-muted-foreground">
              Configure your WhatsApp AI agent behavior
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid gap-6">
        {/* WhatsApp Connection */}
        <BlurFade delay={0.1}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-emerald-500" />
                </div>
                <div>
                  <CardTitle>WhatsApp Connection</CardTitle>
                  <CardDescription>
                    Connect your WhatsApp Business phone number to receive messages
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="whatsapp"
                initialData={{
                  whatsapp_phone_id: business.whatsapp_phone_id || "",
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* AI Status */}
        <BlurFade delay={0.15}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-1/10 flex items-center justify-center">
                  <Power className="h-4 w-4 text-chart-1" />
                </div>
                <div>
                  <CardTitle>AI Status</CardTitle>
                  <CardDescription>
                    Control whether the AI agent responds to messages
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="status"
                initialData={{
                  ai_enabled: business.ai_enabled ?? 1,
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* Brand Voice */}
        <BlurFade delay={0.2}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-5/10 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-chart-5" />
                </div>
                <div>
                  <CardTitle>Brand Voice</CardTitle>
                  <CardDescription>
                    Customize how the AI agent communicates with customers
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="brand"
                initialData={{
                  brand_tone: business.brand_tone || "friendly",
                  greeting_template: business.greeting_template || "",
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* Handoff Settings */}
        <BlurFade delay={0.25}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-4/10 flex items-center justify-center">
                  <Users className="h-4 w-4 text-chart-4" />
                </div>
                <div>
                  <CardTitle>Human Handoff</CardTitle>
                  <CardDescription>
                    Configure when and how conversations are escalated to your team
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="handoff"
                initialData={{
                  handoff_email: business.handoff_email || "",
                  handoff_phone: business.handoff_phone || "",
                  auto_handoff_threshold: business.auto_handoff_threshold || 3,
                  escalation_keywords: business.escalation_keywords || "",
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* Store Hours */}
        <BlurFade delay={0.3}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-chart-3" />
                </div>
                <div>
                  <CardTitle>Store Hours</CardTitle>
                  <CardDescription>
                    Set your business hours and after-hours message
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="hours"
                initialData={{
                  timezone: business.timezone || "America/New_York",
                  working_hours: business.working_hours || "",
                  after_hours_message: business.after_hours_message || "",
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* Email Digests */}
        <BlurFade delay={0.35}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-2/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-chart-2" />
                </div>
                <div>
                  <CardTitle>Email Digests</CardTitle>
                  <CardDescription>
                    Receive daily or weekly performance reports via email
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="digest"
                initialData={{
                  digest_email: business.digest_email || "",
                  digest_daily_enabled: business.digest_daily_enabled ?? 0,
                  digest_weekly_enabled: business.digest_weekly_enabled ?? 0,
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>

        {/* Smart Follow-ups */}
        <BlurFade delay={0.4}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-5/10 flex items-center justify-center">
                  <RefreshCw className="h-4 w-4 text-chart-5" />
                </div>
                <div>
                  <CardTitle>Smart Follow-ups</CardTitle>
                  <CardDescription>
                    Automatically re-engage quiet leads within the WhatsApp 24h window
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SettingsForm
                section="followup"
                initialData={{
                  follow_up_enabled: business.follow_up_enabled ?? 0,
                  follow_up_delay_hours: business.follow_up_delay_hours ?? 4,
                }}
              />
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  );
}
