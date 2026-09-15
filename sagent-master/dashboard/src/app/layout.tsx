import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserMenu } from "@/components/user-menu";
import { getDB, getBusinessById } from "@/lib/db";
import { getUserBusinessId, getSafeAuth } from "@/lib/auth-utils";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ZEN Sales Agent — Omnichannel AI Sales (WhatsApp & Instagram) | ZEN Groupe",
	description:
		"AI-powered omnichannel sales agent across WhatsApp and Instagram by ZEN Groupe. Automated lead qualification, scoring, and CRM handoff.",
	icons: {
		icon: "/zen-icon.svg",
	},
};

// Force dynamic rendering to ensure consistent session handling
export const dynamic = "force-dynamic";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { user } = await getSafeAuth();

	// Default demo user when unauthenticated so demo dashboards render with full UX
	const activeUser = user || {
		id: "demo_executive",
		email: "executive@zen-groupe.fr",
		firstName: "Alexandre",
		lastName: "Directeur Commercial",
	};

	let businessName = "ZEN Groupe Enterprise";

	try {
		const db = await getDB();
		const businessId = await getUserBusinessId(db, activeUser.id);
		if (businessId) {
			const business = await getBusinessById(db, businessId);
			if (business?.name) businessName = business.name;
		}
	} catch {
		// Gracefully degrade to default business name
	}

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/zen-icon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<AppSidebar user={activeUser as any} businessName={businessName} />
						<SidebarInset className="flex flex-col h-screen overflow-hidden">
							<header className="sticky top-0 z-10 flex shrink-0 items-center justify-between gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 py-2.5">
								<div className="flex items-center gap-2 h-9">
									<SidebarTrigger className="-ml-1" />
									<Separator orientation="vertical" className="mr-2 h-4" />
									<div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
										<span className="font-semibold text-foreground">ZEN Sales Agent</span>
										<span>•</span>
										<span>Paris • Clermont-Ferrand • Dubai</span>
									</div>
								</div>

								<div className="flex items-center gap-3 h-9">
									<div className="hidden md:flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
										<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
										WhatsApp + Instagram Omnichannel
									</div>
									<ThemeToggle />
									<UserMenu user={activeUser as any} />
								</div>
							</header>

							<main className="flex-1 overflow-auto">
								{children}
							</main>
						</SidebarInset>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}

