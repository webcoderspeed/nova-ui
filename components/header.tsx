"use client"

import { useState } from "react"
import Link from "next/link"
import { NovaButton as Button } from "@/components/nova"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Github, Search } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-sm font-bold text-primary-foreground">N</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Nova.UI</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Features
            </Link>
            <Link
              href="#installation"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Installation
            </Link>
            <Link href="#components" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Components
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </Link>
            <Link href="#community" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Community
            </Link>
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#features" className="text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link
              href="#installation"
              className="text-sm text-muted-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Installation
            </Link>
            <Link href="#components" className="text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Components
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Docs
            </Link>
            <Link href="#community" className="text-sm text-muted-foreground" onClick={() => setMobileMenuOpen(false)}>
              Community
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>
            <Button size="sm" className="mt-2 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
