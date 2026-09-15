import { getSafeAuth } from "@/lib/auth-utils";
import { OnboardingWizard } from "./onboarding-wizard";

export const dynamic = "force-dynamic";

export default async function OnboardingPage() {
  const { user } = await getSafeAuth();
  const firstName = user?.firstName || user?.email?.split("@")[0] || "Executive";


  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <OnboardingWizard userName={firstName} />
    </div>
  );
}
