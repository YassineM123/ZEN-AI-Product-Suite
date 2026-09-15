"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();

  const [name, setName] = useState("Alexandre Mercier");
  const [email, setEmail] = useState("executive@zen-groupe.fr");
  const [password, setPassword] = useState("••••••••");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await signup(name || "Executive ZEN", email || "executive@zen-groupe.fr", password || "demo_pass");
      router.push("/operations");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Signup failed. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDemoAccess = async () => {
    setIsLoading(true);
    await signup("Alexandre Mercier", "executive@zen-groupe.fr", "demo");
    router.push("/operations");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-950/40 text-purple-400 shadow-lg shadow-purple-950/50 mb-1">
            <svg className="h-6 w-6" viewBox="0 0 100 100" fill="none">
              <path d="M26 30 H74 L34 70 H74" stroke="#A855F7" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="70" cy="30" r="5" fill="#C084FC" />
              <circle cx="30" cy="70" r="5" fill="#E879F9" />
            </svg>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-lg font-bold tracking-wider text-white">ZEN</span>
              <span className="text-lg font-light tracking-wider text-slate-400">GROUPE</span>
              <span className="rounded bg-purple-500/10 px-2 py-0.5 text-xs font-semibold text-purple-400 border border-purple-500/20">
                COMMERCE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              AI Commerce Operations Team • Paris • Clermont-Ferrand • Dubai
            </p>
          </div>
        </div>

        {/* 1-Click Demo Card */}
        <div className="rounded-xl border border-purple-500/30 bg-purple-950/20 p-4 text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-purple-300">
            <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
            <span>Portfolio & Client Demonstration Mode</span>
          </div>
          <p className="text-xs text-slate-400">
            Instantly create a trial session with pre-configured operations telemetry.
          </p>
          <Button
            onClick={handleDemoAccess}
            disabled={isLoading}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-lg shadow-purple-600/20 gap-2"
          >
            <span>Launch Operations Center (1-Click)</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Signup Form */}
        <Card className="border-slate-800 bg-slate-900/80 backdrop-blur">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold text-white">Create Enterprise Account</CardTitle>
            <CardDescription className="text-xs text-slate-400">
              Fill in your details to configure your AI commerce operations team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {error && (
                <div className="rounded-md border border-red-500/30 bg-red-950/20 px-3 py-2 text-xs text-red-400">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name" className="text-xs text-slate-300">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Alexandre Mercier"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                  className="bg-slate-950/80 border-slate-800 text-xs text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email" className="text-xs text-slate-300">Work Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="executive@zen-groupe.fr"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="bg-slate-950/80 border-slate-800 text-xs text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="password" className="text-xs text-slate-300">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Min. 6 characters"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  className="bg-slate-950/80 border-slate-800 text-xs text-white"
                />
              </div>

              <Button
                type="submit"
                size="default"
                disabled={isLoading}
                className="mt-1 w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs"
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>

              <p className="text-center text-xs text-slate-400 pt-1">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-purple-400 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

