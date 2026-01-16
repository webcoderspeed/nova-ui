"use client"

import * as React from "react"

type Brand = "acefone" | "smartflo"
type Mode = "light" | "dark" | "system"

interface ThemeContextType {
  brand: Brand
  mode: Mode
  setBrand: (brand: Brand) => void
  setMode: (mode: Mode) => void
  resolvedMode: "light" | "dark"
  mounted: boolean
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultBrand?: Brand
  defaultMode?: Mode
}

export function ThemeProvider({ children, defaultBrand = "acefone", defaultMode = "dark" }: ThemeProviderProps) {
  const [brand, setBrandState] = React.useState<Brand>(defaultBrand)
  const [mode, setModeState] = React.useState<Mode>(defaultMode)
  const [resolvedMode, setResolvedMode] = React.useState<"light" | "dark">("dark")
  const [mounted, setMounted] = React.useState(false)

  // Load from localStorage on mount
  React.useEffect(() => {
    const storedBrand = localStorage.getItem("nova-brand") as Brand | null
    const storedMode = localStorage.getItem("nova-mode") as Mode | null
    if (storedBrand) setBrandState(storedBrand)
    if (storedMode) setModeState(storedMode)
    setMounted(true)
  }, [])

  // Resolve system preference
  React.useEffect(() => {
    if (!mounted) return

    if (mode === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      setResolvedMode(mediaQuery.matches ? "dark" : "light")

      const handler = (e: MediaQueryListEvent) => {
        setResolvedMode(e.matches ? "dark" : "light")
      }
      mediaQuery.addEventListener("change", handler)
      return () => mediaQuery.removeEventListener("change", handler)
    } else {
      setResolvedMode(mode)
    }
  }, [mode, mounted])

  // Apply theme class to document
  React.useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    // Remove all theme classes
    root.classList.remove("acefone-light", "acefone-dark", "smartflo-light", "smartflo-dark", "dark", "light")
    // Add the combined theme class
    const themeClass = `${brand}-${resolvedMode}`
    root.classList.add(themeClass)
    // Also add dark/light for components that check for it
    root.classList.add(resolvedMode)
  }, [brand, resolvedMode, mounted])

  const setBrand = React.useCallback((newBrand: Brand) => {
    setBrandState(newBrand)
    localStorage.setItem("nova-brand", newBrand)
  }, [])

  const setMode = React.useCallback((newMode: Mode) => {
    setModeState(newMode)
    localStorage.setItem("nova-mode", newMode)
  }, [])

  return (
    <ThemeContext.Provider value={{ brand, mode, setBrand, setMode, resolvedMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}
