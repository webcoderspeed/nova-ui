"use client"

import { Moon, Sun, Palette, Check } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import {
  NovaButton as Button,
  NovaDropdownMenu as DropdownMenu,
  NovaDropdownMenuContent as DropdownMenuContent,
  NovaDropdownMenuItem as DropdownMenuItem,
  NovaDropdownMenuTrigger as DropdownMenuTrigger,
  NovaDropdownMenuSeparator as DropdownMenuSeparator,
  NovaDropdownMenuLabel as DropdownMenuLabel,
} from "@/components/nova"

export function ThemeToggle() {
  const { brand, mode, setBrand, setMode, resolvedMode, mounted } = useTheme()

  const handleBrandChange = (newBrand: "acefone" | "smartflo") => {
    setBrand(newBrand)
  }

  const handleModeChange = (newMode: "light" | "dark" | "system") => {
    setMode(newMode)
  }

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" disabled>
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          Brand
        </DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => handleBrandChange("acefone")} className="justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[hsl(232,66%,46%)]" />
            Acefone
          </span>
          {brand === "acefone" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleBrandChange("smartflo")} className="justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[hsl(21,91%,55%)]" />
            Smartflo
          </span>
          {brand === "smartflo" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuLabel className="flex items-center gap-2">
          {resolvedMode === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuItem onSelect={() => handleModeChange("light")} className="justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <Sun className="h-4 w-4" />
            Light
          </span>
          {mode === "light" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleModeChange("dark")} className="justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <Moon className="h-4 w-4" />
            Dark
          </span>
          {mode === "dark" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => handleModeChange("system")} className="justify-between cursor-pointer">
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            System
          </span>
          {mode === "system" && <Check className="h-4 w-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
