"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { usePathname, useRouter } from "next/navigation"

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  const handleToggle = () => {
    if (pathname === "/") {
      toggle()
      router.push("/light")
    } else if (pathname === "/light") {
      toggle()
      router.push("/")
    } else {
      toggle()
    }
  }

  const isDarkHome = pathname === "/"
  const isLightHome = pathname === "/light"
  const isDark = isDarkHome ? true : isLightHome ? false : theme === "dark"

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle flex h-full items-center px-4 text-sm font-medium transition-colors group bg-transparent border-none cursor-pointer"
      style={{ color: "var(--header-text)" }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark
        ? <Sun size={18} className="group-hover:fill-current transition-all" />
        : <Moon size={18} className="group-hover:fill-current transition-all" />
      }
    </button>
  )
}
