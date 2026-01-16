import { CodeBlock } from "@/components/docs/code-block"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DarkModePage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Dark Mode</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Dark Mode</h1>
        <p className="text-lg text-muted-foreground">
          Implement dark mode with automatic system preference detection using next-themes. Nova.UI components are fully
          dark mode compatible out of the box.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code={`npm install next-themes`} language="bash" />
      </section>

      {/* Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Setup ThemeProvider</h2>
        <p className="text-muted-foreground">Wrap your application with the ThemeProvider:</p>
        <CodeBlock
          code={`// app/layout.tsx
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Toggle Component */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Theme Toggle Component</h2>
        <CodeBlock
          code={`"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sun, Moon, Monitor } from 'lucide-react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
          language="tsx"
        />
      </section>

      {/* CSS Variables */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground">
          Dark mode works by toggling the <code className="text-xs bg-accent px-1.5 py-0.5 rounded">dark</code> class on
          the HTML element. CSS variables automatically switch:
        </p>
        <CodeBlock
          code={`/* globals.css */
:root {
  --background: 0 0% 100%;       /* white */
  --foreground: 222.2 84% 4.9%;  /* near black */
}

.dark {
  --background: 222.2 84% 4.9%;  /* near black */
  --foreground: 210 40% 98%;     /* near white */
}

/* Components use these variables */
.bg-background { background-color: hsl(var(--background)); }
.text-foreground { color: hsl(var(--foreground)); }`}
          language="css"
        />
      </section>

      {/* Avoid Flash */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Avoiding Flash</h2>
        <p className="text-muted-foreground">
          The <code className="text-xs bg-accent px-1.5 py-0.5 rounded">suppressHydrationWarning</code> on the html
          element and <code className="text-xs bg-accent px-1.5 py-0.5 rounded">disableTransitionOnChange</code>
          prevent flash of wrong theme and transition artifacts on load.
        </p>
      </section>
    </div>
  )
}
