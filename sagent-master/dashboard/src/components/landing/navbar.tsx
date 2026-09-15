"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

interface NavbarProps {
	className?: string;
}

export function Navbar({ className }: NavbarProps) {
	const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			const navbarHeight = 64; // h-16 = 64px
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - navbarHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};

	return (
		<motion.header
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			className={cn(
				"fixed top-0 left-0 right-0 z-50",
				"bg-background/80 backdrop-blur-md border-b border-border/50",
				className
			)}
		>
			<nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/inbox" className="flex items-center gap-2.5 group">
						<motion.div
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 shadow-sm"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<svg className="size-5" viewBox="0 0 100 100" fill="none">
								<path d="M26 30 H66 C70 30 74 34 74 38 V56 C74 60 70 64 66 64 H40 L26 72 V30 Z" stroke="#34D399" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
								<circle cx="42" cy="47" r="4" fill="#10B981" />
								<circle cx="52" cy="47" r="4" fill="#06B6D4" />
								<circle cx="62" cy="47" r="4" fill="#3B82F6" />
							</svg>
						</motion.div>
						<div className="flex flex-col">
							<div className="flex items-center gap-1.5">
								<span className="text-xs font-bold tracking-wider text-foreground">ZEN</span>
								<span className="text-xs font-light tracking-wider text-muted-foreground">GROUPE</span>
							</div>
							<span className="text-[11px] font-semibold text-emerald-400">
								Sales Agent
							</span>
						</div>
					</Link>

					{/* Navigation Links */}
					<div className="hidden md:flex items-center gap-6">
						<NavLink href="/inbox">Omnichannel Inbox</NavLink>
						<NavLink href="#channels" onClick={scrollToSection}>Channels</NavLink>
						<NavLink href="#features" onClick={scrollToSection}>Features</NavLink>
						<NavLink href="#how-it-works" onClick={scrollToSection}>How it works</NavLink>
						<NavLink href="#pricing" onClick={scrollToSection}>Pricing</NavLink>
						<NavLink href="#faq" onClick={scrollToSection}>FAQ</NavLink>
					</div>

					{/* CTA */}
					<div className="flex items-center gap-3">
						<ThemeToggle />
						<Button variant="ghost" asChild className="hidden sm:inline-flex">
							<Link href="/auth/login">Sign in</Link>
						</Button>
						<Button asChild>
							<Link href="/auth/login">Get Started</Link>
						</Button>
					</div>
				</div>
			</nav>
		</motion.header>
	);
}

interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
	return (
		<a
			href={href}
			onClick={onClick ? (e) => onClick(e, href) : undefined}
			className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
		>
			{children}
		</a>
	);
}

