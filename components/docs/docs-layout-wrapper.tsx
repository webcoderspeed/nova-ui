"use client"

import type { ReactNode } from "react"
import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { ThemeToggle } from "@/components/theme-toggle"
import { VersionToggle } from "@/components/version-toggle"
import { useVersion, type Version } from "@/components/version-provider"
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
  ExternalLink,
  Sparkles,
  Zap,
} from "lucide-react"

const componentVersions: Record<string, Version[]> = {
  accordion: ["1.0.0", "1.1.0", "2.0.0-beta"],
  alert: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "alert-dialog": ["1.0.0", "1.1.0", "2.0.0-beta"],
  "aspect-ratio": ["1.0.0", "1.1.0", "2.0.0-beta"],
  avatar: ["1.0.0", "1.1.0", "2.0.0-beta"],
  badge: ["1.0.0", "1.1.0", "2.0.0-beta"],
  breadcrumb: ["1.1.0", "2.0.0-beta"],
  button: ["1.0.0", "1.1.0", "2.0.0-beta"],
  calendar: ["1.0.0", "1.1.0", "2.0.0-beta"],
  card: ["1.0.0", "1.1.0", "2.0.0-beta"],
  carousel: ["1.1.0", "2.0.0-beta"],
  checkbox: ["1.0.0", "1.1.0", "2.0.0-beta"],
  collapsible: ["1.0.0", "1.1.0", "2.0.0-beta"],
  command: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "context-menu": ["1.0.0", "1.1.0", "2.0.0-beta"],
  dialog: ["1.0.0", "1.1.0", "2.0.0-beta"],
  drawer: ["1.1.0", "2.0.0-beta"],
  "dropdown-menu": ["1.0.0", "1.1.0", "2.0.0-beta"],
  form: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "hover-card": ["1.0.0", "1.1.0", "2.0.0-beta"],
  input: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "input-otp": ["1.1.0", "2.0.0-beta"],
  label: ["1.0.0", "1.1.0", "2.0.0-beta"],
  menubar: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "navigation-menu": ["1.0.0", "1.1.0", "2.0.0-beta"],
  pagination: ["1.1.0", "2.0.0-beta"],
  popover: ["1.0.0", "1.1.0", "2.0.0-beta"],
  progress: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "radio-group": ["1.0.0", "1.1.0", "2.0.0-beta"],
  resizable: ["1.1.0", "2.0.0-beta"],
  "scroll-area": ["1.0.0", "1.1.0", "2.0.0-beta"],
  select: ["1.0.0", "1.1.0", "2.0.0-beta"],
  separator: ["1.0.0", "1.1.0", "2.0.0-beta"],
  sheet: ["1.0.0", "1.1.0", "2.0.0-beta"],
  skeleton: ["1.0.0", "1.1.0", "2.0.0-beta"],
  slider: ["1.0.0", "1.1.0", "2.0.0-beta"],
  switch: ["1.0.0", "1.1.0", "2.0.0-beta"],
  table: ["1.0.0", "1.1.0", "2.0.0-beta"],
  tabs: ["1.0.0", "1.1.0", "2.0.0-beta"],
  textarea: ["1.0.0", "1.1.0", "2.0.0-beta"],
  toggle: ["1.0.0", "1.1.0", "2.0.0-beta"],
  "toggle-group": ["1.1.0", "2.0.0-beta"],
  tooltip: ["1.0.0", "1.1.0", "2.0.0-beta"],
}

// Nova.UI Extras availability
const novaExtrasVersions: Record<string, Version[]> = {
  "animated-button": ["1.1.0", "2.0.0-beta"],
  "floating-input": ["1.1.0", "2.0.0-beta"],
  "glass-card": ["1.1.0", "2.0.0-beta"],
  "motion-dialog": ["2.0.0-beta"],
  "shimmer-badge": ["1.1.0", "2.0.0-beta"],
}

// Helper to create nav items based on version
function getNavItems(version: Version) {
  const availableComponents = Object.entries(componentVersions)
    .filter(([_, versions]) => versions.includes(version))
    .map(([name]) => ({
      title: name
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      href: `/docs/components/${name}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title))

  const availableNovaExtras = Object.entries(novaExtrasVersions)
    .filter(([_, versions]) => versions.includes(version))
    .map(([name]) => ({
      title: name
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      href: `/docs/nova-extras/${name}`,
    }))
    .sort((a, b) => a.title.localeCompare(b.title))

  return [
    {
      title: "Getting Started",
      icon: BookOpen,
      href: "/docs",
      children: [
        { title: "Introduction", href: "/docs" },
        { title: "Installation", href: "/docs/installation" },
        { title: "Quick Start", href: "/docs/quick-start" },
        { title: "Project Structure", href: "/docs/project-structure" },
      ],
    },
    {
      title: "Core Concepts",
      icon: Layers,
      href: "/docs/core-concepts",
      children: [
        { title: "Architecture", href: "/docs/core-concepts/architecture" },
        { title: "Theming", href: "/docs/core-concepts/theming" },
        { title: "Animations", href: "/docs/core-concepts/animations" },
        { title: "TypeScript", href: "/docs/core-concepts/typescript" },
      ],
    },
    {
      title: "Components",
      icon: Box,
      href: "/docs/components",
      children: availableComponents,
    },
    ...(availableNovaExtras.length > 0
      ? [
          {
            title: "Nova.UI Extras",
            icon: Sparkles,
            href: "/docs/nova-extras",
            children: availableNovaExtras,
          },
        ]
      : []),
    {
      title: "Guides",
      icon: Compass,
      href: "/docs/guides",
      children: [
        { title: "i18n & RTL", href: "/docs/guides/i18n-rtl" },
        { title: "Dark Mode", href: "/docs/guides/dark-mode" },
        { title: "Custom Themes", href: "/docs/guides/custom-themes" },
        { title: "Form Validation", href: "/docs/guides/form-validation" },
        { title: "Accessibility", href: "/docs/guides/accessibility" },
      ],
    },
    {
      title: "API Reference",
      icon: Code,
      href: "/docs/api-reference",
    },
    {
      title: "Examples",
      icon: Zap,
      href: "/docs/examples",
    },
    {
      title: "Troubleshooting",
      icon: HelpCircle,
      href: "/docs/troubleshooting",
    },
  ]
}

function NavItem({
  item,
  pathname,
  onNavigate,
  defaultExpanded = false,
}: {
  item: ReturnType<typeof getNavItems>[0]
  pathname: string
  onNavigate?: () => void
  defaultExpanded?: boolean
}) {
  const isActive = pathname === item.href || item.children?.some((c) => pathname === c.href)
  const [expanded, setExpanded] = useState(isActive || defaultExpanded)
  const Icon = item.icon

  useEffect(() => {
    if (isActive && !expanded) {
      setExpanded(true)
    }
  }, [isActive, expanded])

  return (
    <div>
      <button
        onClick={() => {
          if (item.children) {
            setExpanded(!expanded)
          }
        }}
        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all ${
          isActive && !item.children
            ? "bg-primary text-primary-foreground"
            : isActive
              ? "text-primary"
              : "text-muted-foreground hover:bg-accent hover:text-foreground"
        }`}
      >
        <span className="flex items-center gap-3">
          <Icon className="h-4 w-4" />
          {item.title}
        </span>
        {item.children && (
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-0" : "-rotate-90"}`}
          />
        )}
      </button>
      {expanded && item.children && (
        <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l-2 border-border pl-4">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => onNavigate?.()}
              className={`rounded-md px-3 py-1.5 text-sm transition-all ${
                pathname === child.href
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function DocsLayoutWrapper({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const { version } = useVersion()

  const navItems = useMemo(() => getNavItems(version), [version])

  const searchItems = useMemo(() => {
    return navItems.flatMap((section) => {
      const items = section.children
        ? section.children.map((child) => ({
            title: child.title,
            href: child.href,
            group: section.title,
            icon: section.icon,
          }))
        : [{ title: section.title, href: section.href, group: "Resources", icon: section.icon }]
      return items
    })
  }, [navItems])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setSearchOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setSearchOpen(false)
    command()
  }

  // Group search items by section
  const groupedItems = searchItems.reduce(
    (acc, item) => {
      if (!acc[item.group]) {
        acc[item.group] = []
      }
      acc[item.group].push(item)
      return acc
    },
    {} as Record<string, typeof searchItems>,
  )

  return (
    <div className="min-h-screen bg-background">
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedItems).map(([group, items], idx) => (
            <div key={group}>
              <CommandGroup heading={group}>
                {items.map((item) => {
                  const Icon = item.icon
                  return (
                    <CommandItem
                      key={item.href}
                      value={item.title}
                      onSelect={() => runCommand(() => router.push(item.href))}
                      className="cursor-pointer"
                    >
                      <Icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{item.title}</span>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
              {idx < Object.keys(groupedItems).length - 1 && <CommandSeparator />}
            </div>
          ))}
        </CommandList>
      </CommandDialog>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <span className="text-sm font-bold text-primary-foreground">N</span>
              </div>
              <span className="font-bold text-foreground">Nova.UI</span>
            </Link>
            <VersionToggle />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="relative hidden w-72 md:flex items-center rounded-full bg-accent px-3 h-9 text-sm text-muted-foreground hover:bg-accent/80 transition-colors"
            >
              <Search className="h-4 w-4 mr-2" />
              <span>Search documentation...</span>
              <kbd className="absolute right-3 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                ⌘K
              </kbd>
            </button>
            <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" onClick={() => setSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" asChild className="h-9 w-9">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 top-14 z-40 w-72 transform border-r border-border bg-background/95 backdrop-blur transition-transform lg:sticky lg:h-[calc(100vh-3.5rem)] lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ScrollArea className="h-full">
            <nav className="flex flex-col gap-1 p-4" role="navigation" aria-label="Documentation">
              {navItems.map((item, index) => (
                <NavItem
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setSidebarOpen(false)}
                  defaultExpanded={index === 0}
                />
              ))}
              <div className="mt-6 border-t border-border pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10 lg:py-12">{children}</div>
        </main>
      </div>
    </div>
  )
}
