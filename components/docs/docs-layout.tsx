"use client"

import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Menu,
  X,
  Github,
  BookOpen,
  Layers,
  Compass,
  Box,
  Code,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react"

const navItems = [
  {
    title: "Getting Started",
    icon: BookOpen,
    href: "#getting-started",
    children: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    icon: Layers,
    href: "#core-concepts",
    children: [
      { title: "Architecture", href: "#architecture" },
      { title: "Theming", href: "#theming" },
      { title: "Animations", href: "#animations" },
    ],
  },
  {
    title: "Components",
    icon: Box,
    href: "#components",
    children: [
      { title: "Accordion", href: "#accordion" },
      { title: "Alert", href: "#alert" },
      { title: "Alert Dialog", href: "#alert-dialog" },
      { title: "Aspect Ratio", href: "#aspect-ratio" },
      { title: "Avatar", href: "#avatar" },
      { title: "Badge", href: "#badge" },
      { title: "Breadcrumb", href: "#breadcrumb" },
      { title: "Button", href: "#button" },
      { title: "Calendar", href: "#calendar" },
      { title: "Card", href: "#card" },
      { title: "Carousel", href: "#carousel" },
      { title: "Checkbox", href: "#checkbox" },
      { title: "Collapsible", href: "#collapsible" },
      { title: "Command", href: "#command" },
      { title: "Context Menu", href: "#context-menu" },
      { title: "Dialog", href: "#dialog" },
      { title: "Drawer", href: "#drawer" },
      { title: "Dropdown Menu", href: "#dropdown-menu" },
      { title: "Form", href: "#form" },
      { title: "Hover Card", href: "#hover-card" },
      { title: "Input", href: "#input" },
      { title: "Input OTP", href: "#input-otp" },
      { title: "Label", href: "#label" },
      { title: "Menubar", href: "#menubar" },
      { title: "Navigation Menu", href: "#navigation-menu" },
      { title: "Pagination", href: "#pagination" },
      { title: "Popover", href: "#popover" },
      { title: "Progress", href: "#progress" },
      { title: "Radio Group", href: "#radio-group" },
      { title: "Resizable", href: "#resizable" },
      { title: "Scroll Area", href: "#scroll-area" },
      { title: "Select", href: "#select" },
      { title: "Separator", href: "#separator" },
      { title: "Sheet", href: "#sheet" },
      { title: "Skeleton", href: "#skeleton" },
      { title: "Slider", href: "#slider" },
      { title: "Sonner", href: "#sonner" },
      { title: "Switch", href: "#switch" },
      { title: "Table", href: "#table" },
      { title: "Tabs", href: "#tabs" },
      { title: "Textarea", href: "#textarea" },
      { title: "Toast", href: "#toast" },
      { title: "Toggle", href: "#toggle" },
      { title: "Toggle Group", href: "#toggle-group" },
      { title: "Tooltip", href: "#tooltip" },
    ],
  },
  {
    title: "Nova.UI Extras",
    icon: Sparkles,
    href: "#nova-extras",
    children: [
      { title: "Animated Button", href: "#nova-button" },
      { title: "Floating Input", href: "#nova-input" },
      { title: "Glass Card", href: "#nova-card" },
      { title: "Motion Dialog", href: "#nova-dialog" },
      { title: "Shimmer Badge", href: "#nova-badge" },
    ],
  },
  {
    title: "Guides",
    icon: Compass,
    href: "#guides",
    children: [
      { title: "i18n & RTL", href: "#i18n-rtl" },
      { title: "Dark Mode", href: "#dark-mode" },
      { title: "Custom Themes", href: "#custom-themes" },
    ],
  },
  {
    title: "API Reference",
    icon: Code,
    href: "#api-reference",
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    href: "#troubleshooting",
  },
]

function NavItem({
  item,
  activeSection,
  onNavigate,
}: {
  item: (typeof navItems)[0]
  activeSection: string
  onNavigate?: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const Icon = item.icon
  const isActive = activeSection === item.href.slice(1) || item.children?.some((c) => activeSection === c.href.slice(1))

  useEffect(() => {
    if (isActive && item.children) {
      setExpanded(true)
    }
  }, [isActive, item.children])

  return (
    <div>
      <button
        onClick={() => {
          if (item.children) {
            setExpanded(!expanded)
          } else {
            window.location.hash = item.href
            onNavigate?.()
          }
        }}
        className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
          isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
      >
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {item.title}
        </span>
        {item.children && (expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
      </button>
      {expanded && item.children && (
        <div className="ml-6 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
          {item.children.map((child) => (
            <a
              key={child.href}
              href={child.href}
              onClick={() => onNavigate?.()}
              className={`rounded-md px-2 py-1.5 text-sm transition-colors ${
                activeSection === child.href.slice(1)
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {child.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]")
      let current = "introduction"

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= 120) {
          current = section.getAttribute("data-section") || current
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-xs font-bold text-primary-foreground">N</span>
              </div>
              <span className="font-semibold text-foreground">Nova.UI</span>
            </Link>
            <span className="hidden rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground sm:block">
              Docs
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden w-64 md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation..."
                className="h-9 bg-secondary pl-9 text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] text-muted-foreground">
                ⌘K
              </kbd>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden h-9 text-muted-foreground sm:flex">
              v1.0.0
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - sticky positioned */}
        <aside
          className={`fixed inset-y-0 left-0 top-14 z-40 w-72 transform border-r border-border bg-background transition-transform lg:sticky lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ScrollArea className="h-full py-4">
            <nav className="flex flex-col gap-1 px-4" role="navigation" aria-label="Documentation">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  activeSection={activeSection}
                  onNavigate={() => setSidebarOpen(false)}
                />
              ))}
              <div className="mt-4 border-t border-border pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  GitHub Repository
                </a>
              </div>
            </nav>
          </ScrollArea>
        </aside>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content - scrollable */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8 lg:py-12">{children}</div>
        </main>
      </div>
    </div>
  )
}
