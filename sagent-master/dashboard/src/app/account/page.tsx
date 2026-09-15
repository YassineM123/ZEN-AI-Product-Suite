import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { getSafeAuth } from "@/lib/auth-utils";
import { User, Mail, Calendar, Shield, LogOut, CheckCircle2 } from "lucide-react";
import { signOutAction } from "@/lib/actions/auth";

// Force dynamic rendering for auth
export const dynamic = "force-dynamic";

function formatDate(dateString?: string) {
  if (!dateString) return "Active Portfolio Demo Session";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function AccountPage() {
  const { user } = await getSafeAuth();
  const activeUser = user || {
    id: "demo_executive",
    email: "executive@zen-groupe.fr",
    firstName: "Alexandre",
    lastName: "Directeur Commercial",
  };


  // Get initials from user name or email
  const getInitials = () => {
    if (activeUser.firstName && activeUser.lastName) {
      return `${activeUser.firstName[0]}${activeUser.lastName[0]}`.toUpperCase();
    }
    if (activeUser.firstName) {
      return activeUser.firstName.slice(0, 2).toUpperCase();
    }
    if (activeUser.email) {
      return activeUser.email.slice(0, 2).toUpperCase();
    }
    return "ZG";
  };

  const displayName = activeUser.firstName
    ? `${activeUser.firstName}${activeUser.lastName ? ` ${activeUser.lastName}` : ""}`
    : "Executive ZEN";

  return (
    <div className="space-y-6">
      {/* Page header */}
      <BlurFade delay={0}>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Account</h1>
            <p className="text-muted-foreground">
              View your profile information
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Information */}
        <BlurFade delay={0.1}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-5/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-chart-5" />
                </div>
                <div>
                  <CardTitle>Profile</CardTitle>
                  <CardDescription>
                    Your profile and account details
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar and Name */}
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {getInitials()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-medium">{displayName}</p>
                  <p className="text-sm text-muted-foreground">
                    {activeUser.email}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>First Name</span>
                  </div>
                  <span className="text-sm font-medium">
                    {activeUser.firstName || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>Last Name</span>
                  </div>
                  <span className="text-sm font-medium">
                    {activeUser.lastName || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{activeUser.email}</span>
                    <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </BlurFade>

        {/* Account Status */}
        <BlurFade delay={0.2}>
          <Card className="transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-chart-3/10 flex items-center justify-center">
                  <Shield className="h-4 w-4 text-chart-3" />
                </div>
                <div>
                  <CardTitle>Account Status</CardTitle>
                  <CardDescription>
                    Security and account details
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Role</span>
                  </div>
                  <Badge variant="default">
                    Enterprise Admin
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Account Created</span>
                  </div>
                  <span className="text-sm font-medium">
                    ZEN Groupe Enterprise
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Offices</span>
                  </div>
                  <span className="text-sm font-medium">
                    Paris • Clermont-Ferrand • Dubai
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>User ID</span>
                  </div>
                  <code className="text-xs bg-muted px-2 py-1 rounded font-mono">
                    {activeUser.id}
                  </code>
                </div>
              </div>


              <Separator />

              {/* Sign Out */}
              <div className="pt-2">
                <form action={signOutAction}>
                  <Button variant="destructive" className="w-full" type="submit">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </BlurFade>
      </div>
    </div>
  );
}
