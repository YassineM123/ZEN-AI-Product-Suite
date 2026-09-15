"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Settings,
  Package,
  AlertTriangle,
  Calendar,
  Ticket,
  HelpCircle,
  Activity,
  Forward,
  HeartPulse,
} from "lucide-react";
import type { AuthUser } from "@/types/auth";

interface AppSidebarProps {
  user: AuthUser | null;
  businessName?: string | null;
}

const navItems = [
  {
    title: "Inbox",
    href: "/inbox",
    icon: MessageSquare,
  },
  {
    title: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Conversations",
    href: "/conversations",
    icon: MessageSquare,
  },
  {
    title: "Leads & Scoring",
    href: "/leads",
    icon: Users,
  },
  {
    title: "Products & Services",
    href: "/products",
    icon: Package,
  },
  {
    title: "Knowledge & FAQs",
    href: "/faqs",
    icon: HelpCircle,
  },
  {
    title: "Escalations (Handoff)",
    href: "/escalations",
    icon: AlertTriangle,
  },
  {
    title: "Appointments",
    href: "/appointments",
    icon: Calendar,
  },
  {
    title: "Promo Codes",
    href: "/promos",
    icon: Ticket,
  },
];

const opsItems = [
  {
    title: "Live Activity",
    href: "/activity",
    icon: Activity,
  },
  {
    title: "Follow-ups",
    href: "/follow-ups",
    icon: Forward,
  },
  {
    title: "System Health",
    href: "/system",
    icon: HeartPulse,
  },
  {
    title: "Channels & Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSidebar({ user, businessName }: AppSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
        <Link href="/inbox" className="flex items-center gap-2.5 group">
          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <SidebarMenuItem className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="transition-all duration-200"
                      >
                        <Link href={item.href} className="relative">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <item.icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {opsItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (navItems.length + index) * 0.05,
                      duration: 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <SidebarMenuItem className="relative">
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className="transition-all duration-200"
                      >
                        <Link href={item.href} className="relative">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <item.icon className="h-4 w-4" />
                          </motion.div>
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </motion.div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <SidebarMenu>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <SidebarMenuItem className="relative">
              {pathname === "/settings" && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-primary rounded-r-full"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
              <SidebarMenuButton
                asChild
                isActive={pathname === "/settings"}
                className="transition-all duration-200"
              >
                <Link href="/settings">
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Settings className="h-4 w-4" />
                  </motion.div>
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </motion.div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
