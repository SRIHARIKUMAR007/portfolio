"use client"

import * as React from "react"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  attribute?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
}

export function ThemeProvider({ children, defaultTheme = "dark", ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Apply dark theme by default
    document.documentElement.classList.add("dark")
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}
