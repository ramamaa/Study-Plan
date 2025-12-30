"use client";

import {
  Home,
  Calendar,
  Brain,
  ClipboardCheck,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Landing", icon: Home, href: "/" },
  { label: "Study Planner", icon: Calendar, href: "/planner" },
  { label: "Homework Helper", icon: Brain, href: "/homework" },
  { label: "Exam & Analysis", icon: ClipboardCheck, href: "/exam" },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white flex flex-col justify-between">
      {/* Top */}
      <div>
        <div className="flex items-center gap-2 px-6 py-4 font-semibold">
          <GraduationCap className="h-5 w-5 text-blue-600" />
          <span>Demo Selector</span>
        </div>

        <nav className="px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-muted"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="px-2 pb-4 space-y-1">
        <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
          <Settings className="h-4 w-4" />
          Settings
        </button>
        <button className="flex w-full items-center gap-3 rounded-md px-4 py-2 text-sm text-muted-foreground hover:bg-muted">
          <LogOut className="h-4 w-4" />
          Log Out
        </button>
      </div>
    </aside>
  );
}
