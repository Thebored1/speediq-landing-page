"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const pathname = usePathname();
  const isLight = pathname === "/light";

  if (isLight) {
    return (
      <Link
        href="/"
        className="flex h-full items-center px-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
        title="Switch to Dark Mode"
      >
        <Moon size={18} className="group-hover:fill-current" />
      </Link>
    );
  }

  return (
    <Link
      href="/light"
      className="flex h-full items-center px-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors group"
      title="Switch to Light Mode"
    >
      <Sun size={18} className="group-hover:fill-current" />
    </Link>
  );
}
