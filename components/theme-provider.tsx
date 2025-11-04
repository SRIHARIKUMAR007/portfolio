"use client"

import type React from "react"

// Removed unused theme provider - using direct dark class on html element instead
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
