"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Box, Sparkles, BookOpen, Compass, Code, Layers } from "lucide-react"

const searchItems = [
  // Getting Started
  {
    group: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Introduction", href: "/docs", keywords: ["intro", "welcome", "start"] },
      { title: "Installation", href: "/docs/installation", keywords: ["install", "setup", "npm", "cli"] },
      { title: "Quick Start", href: "/docs/quick-start", keywords: ["quick", "start", "tutorial"] },
      { title: "Project Structure", href: "/docs/project-structure", keywords: ["structure", "folder", "files"] },
    ],
  },
  // Core Concepts
  {
    group: "Core Concepts",
    icon: Layers,
    items: [
      {
        title: "Architecture",
        href: "/docs/core-concepts/architecture",
        keywords: ["architecture", "design", "pattern"],
      },
      { title: "Theming", href: "/docs/core-concepts/theming", keywords: ["theme", "colors", "dark", "light"] },
      { title: "Animations", href: "/docs/core-concepts/animations", keywords: ["animation", "motion", "framer"] },
      { title: "TypeScript", href: "/docs/core-concepts/typescript", keywords: ["typescript", "types", "ts"] },
    ],
  },
  // Components
  {
    group: "Components",
    icon: Box,
    items: [
      { title: "Accordion", href: "/docs/components/accordion", keywords: ["accordion", "collapse", "expand"] },
      { title: "Alert", href: "/docs/components/alert", keywords: ["alert", "message", "notification"] },
      { title: "Alert Dialog", href: "/docs/components/alert-dialog", keywords: ["alert", "dialog", "confirm"] },
      { title: "Aspect Ratio", href: "/docs/components/aspect-ratio", keywords: ["aspect", "ratio", "image"] },
      { title: "Avatar", href: "/docs/components/avatar", keywords: ["avatar", "user", "profile", "image"] },
      { title: "Badge", href: "/docs/components/badge", keywords: ["badge", "tag", "label"] },
      { title: "Breadcrumb", href: "/docs/components/breadcrumb", keywords: ["breadcrumb", "navigation", "path"] },
      { title: "Button", href: "/docs/components/button", keywords: ["button", "click", "action"] },
      { title: "Calendar", href: "/docs/components/calendar", keywords: ["calendar", "date", "picker"] },
      { title: "Card", href: "/docs/components/card", keywords: ["card", "container", "box"] },
      { title: "Carousel", href: "/docs/components/carousel", keywords: ["carousel", "slider", "images"] },
      { title: "Checkbox", href: "/docs/components/checkbox", keywords: ["checkbox", "check", "toggle"] },
      { title: "Collapsible", href: "/docs/components/collapsible", keywords: ["collapsible", "expand", "collapse"] },
      { title: "Command", href: "/docs/components/command", keywords: ["command", "search", "palette"] },
      { title: "Context Menu", href: "/docs/components/context-menu", keywords: ["context", "menu", "right-click"] },
      { title: "Dialog", href: "/docs/components/dialog", keywords: ["dialog", "modal", "popup"] },
      { title: "Drawer", href: "/docs/components/drawer", keywords: ["drawer", "sheet", "slide"] },
      { title: "Dropdown Menu", href: "/docs/components/dropdown-menu", keywords: ["dropdown", "menu", "select"] },
      { title: "Form", href: "/docs/components/form", keywords: ["form", "input", "validation"] },
      { title: "Hover Card", href: "/docs/components/hover-card", keywords: ["hover", "card", "tooltip"] },
      { title: "Input", href: "/docs/components/input", keywords: ["input", "text", "field"] },
      { title: "Input OTP", href: "/docs/components/input-otp", keywords: ["otp", "code", "verification"] },
      { title: "Label", href: "/docs/components/label", keywords: ["label", "form", "text"] },
      { title: "Menubar", href: "/docs/components/menubar", keywords: ["menubar", "menu", "navigation"] },
      { title: "Navigation Menu", href: "/docs/components/navigation-menu", keywords: ["navigation", "menu", "nav"] },
      { title: "Pagination", href: "/docs/components/pagination", keywords: ["pagination", "pages", "next"] },
      { title: "Popover", href: "/docs/components/popover", keywords: ["popover", "popup", "overlay"] },
      { title: "Progress", href: "/docs/components/progress", keywords: ["progress", "loading", "bar"] },
      { title: "Radio Group", href: "/docs/components/radio-group", keywords: ["radio", "group", "select"] },
      { title: "Resizable", href: "/docs/components/resizable", keywords: ["resizable", "resize", "panel"] },
      { title: "Scroll Area", href: "/docs/components/scroll-area", keywords: ["scroll", "area", "overflow"] },
      { title: "Select", href: "/docs/components/select", keywords: ["select", "dropdown", "choose"] },
      { title: "Separator", href: "/docs/components/separator", keywords: ["separator", "divider", "line"] },
      { title: "Sheet", href: "/docs/components/sheet", keywords: ["sheet", "drawer", "panel"] },
      { title: "Skeleton", href: "/docs/components/skeleton", keywords: ["skeleton", "loading", "placeholder"] },
      { title: "Slider", href: "/docs/components/slider", keywords: ["slider", "range", "input"] },
      { title: "Switch", href: "/docs/components/switch", keywords: ["switch", "toggle", "boolean"] },
      { title: "Table", href: "/docs/components/table", keywords: ["table", "data", "grid"] },
      { title: "Tabs", href: "/docs/components/tabs", keywords: ["tabs", "navigation", "switch"] },
      { title: "Textarea", href: "/docs/components/textarea", keywords: ["textarea", "text", "multiline"] },
      { title: "Toggle", href: "/docs/components/toggle", keywords: ["toggle", "switch", "button"] },
      { title: "Toggle Group", href: "/docs/components/toggle-group", keywords: ["toggle", "group", "buttons"] },
      { title: "Tooltip", href: "/docs/components/tooltip", keywords: ["tooltip", "hint", "info"] },
    ],
  },
  // Nova.UI Extras
  {
    group: "Nova.UI Extras",
    icon: Sparkles,
    items: [
      {
        title: "Animated Button",
        href: "/docs/nova-extras/animated-button",
        keywords: ["animated", "button", "motion"],
      },
      { title: "Floating Input", href: "/docs/nova-extras/floating-input", keywords: ["floating", "input", "label"] },
      { title: "Glass Card", href: "/docs/nova-extras/glass-card", keywords: ["glass", "card", "blur"] },
      { title: "Motion Dialog", href: "/docs/nova-extras/motion-dialog", keywords: ["motion", "dialog", "animated"] },
      { title: "Shimmer Badge", href: "/docs/nova-extras/shimmer-badge", keywords: ["shimmer", "badge", "animated"] },
    ],
  },
  // Guides
  {
    group: "Guides",
    icon: Compass,
    items: [
      { title: "i18n & RTL", href: "/docs/guides/i18n-rtl", keywords: ["i18n", "rtl", "internationalization"] },
      { title: "Dark Mode", href: "/docs/guides/dark-mode", keywords: ["dark", "mode", "theme"] },
      { title: "Custom Themes", href: "/docs/guides/custom-themes", keywords: ["custom", "theme", "brand"] },
      { title: "Form Validation", href: "/docs/guides/form-validation", keywords: ["form", "validation", "zod"] },
      { title: "Accessibility", href: "/docs/guides/accessibility", keywords: ["accessibility", "a11y", "aria"] },
    ],
  },
  // Other
  {
    group: "Resources",
    icon: Code,
    items: [
      { title: "API Reference", href: "/docs/api-reference", keywords: ["api", "reference", "docs"] },
      { title: "Examples", href: "/docs/examples", keywords: ["examples", "demo", "showcase"] },
      { title: "Troubleshooting", href: "/docs/troubleshooting", keywords: ["troubleshooting", "help", "faq"] },
    ],
  },
]

export function SearchDialog() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search documentation..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchItems.map((group) => (
          <React.Fragment key={group.group}>
            <CommandGroup heading={group.group}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.title} ${item.keywords.join(" ")}`}
                  onSelect={() => runCommand(() => router.push(item.href))}
                  className="cursor-pointer"
                >
                  <group.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </React.Fragment>
        ))}
      </CommandList>
    </CommandDialog>
  )
}

export function SearchButton({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {searchItems.map((group) => (
            <React.Fragment key={group.group}>
              <CommandGroup heading={group.group}>
                {group.items.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={`${item.title} ${item.keywords.join(" ")}`}
                    onSelect={() => runCommand(() => router.push(item.href))}
                    className="cursor-pointer"
                  >
                    <group.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  )
}
