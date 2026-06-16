"use client"

import { useTheme } from "@/components/theme-provider"
import { DarkPage } from "@/components/home/dark-page"
import { LightPage } from "@/components/home/light-page"

export default function Page() {
  const { theme } = useTheme()
  
  if (theme === "light") {
    return <LightPage />
  }

  return <DarkPage />
}
