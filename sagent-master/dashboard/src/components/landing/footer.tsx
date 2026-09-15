"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

const footerLinks = {
	product: [
		{ name: "Channels", href: "#channels" },
		{ name: "Features", href: "#features" },
		{ name: "How it works", href: "#how-it-works" },
		{ name: "Pricing", href: "#pricing" },
	],
	company: [
		{ name: "About", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Contact", href: "#" },
	],
	legal: [
		{ name: "Privacy", href: "#" },
		{ name: "Terms", href: "#" },
		{ name: "Cookie Policy", href: "#" },
	],
};

export function Footer() {
	return (
		<footer className="border-t bg-muted/20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
					{/* Brand */}
					<div className="col-span-2">
						<Link href="/inbox" className="flex items-center gap-2.5 mb-4">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-emerald-400">
								<svg className="size-5" viewBox="0 0 100 100" fill="none">
									<path d="M26 30 H66 C70 30 74 34 74 38 V56 C74 60 70 64 66 64 H40 L26 72 V30 Z" stroke="#34D399" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
									<circle cx="42" cy="47" r="4" fill="#10B981" />
									<circle cx="52" cy="47" r="4" fill="#06B6D4" />
									<circle cx="62" cy="47" r="4" fill="#3B82F6" />
								</svg>
							</div>
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
						<p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
							Enterprise AI sales conversations across WhatsApp and Instagram. Paris • Clermont-Ferrand • Dubai.
						</p>
					</div>

					{/* Product */}
					<div>
						<h4 className="font-medium mb-4">Product</h4>
						<ul className="space-y-2">
							{footerLinks.product.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company */}
					<div>
						<h4 className="font-medium mb-4">Company</h4>
						<ul className="space-y-2">
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div>
						<h4 className="font-medium mb-4">Legal</h4>
						<ul className="space-y-2">
							{footerLinks.legal.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground hover:text-foreground transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} ZEN Groupe. All rights reserved. • Paris • Clermont-Ferrand • Dubai
					</p>
					<div className="flex items-center gap-4">
						<Link
							href="https://www.zen-groupe.fr"
							className="text-xs text-muted-foreground hover:text-foreground transition-colors"
						>
							www.zen-groupe.fr
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
