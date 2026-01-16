import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Palette, Globe, Code, Box } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="space-y-6">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
          <Sparkles className="h-3 w-3 mr-1" />
          Documentation
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Build beautiful apps with <span className="text-primary">Nova.UI</span>
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A comprehensive design system built on top of shadcn/ui with enhanced animations, TypeScript support, i18n
          capabilities, and RTL compatibility.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/docs/installation">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
            <Link href="/docs/components">Browse Components</Link>
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Framer Motion & GSAP</CardTitle>
            <CardDescription>
              Pre-built animations and transitions for smooth, professional interactions.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">TypeScript First</CardTitle>
            <CardDescription>
              Full type safety with comprehensive TypeScript interfaces for all components.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Globe className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">i18n & RTL Ready</CardTitle>
            <CardDescription>Built-in support for internationalization and right-to-left languages.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Palette className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Customizable Themes</CardTitle>
            <CardDescription>Tailwind CSS powered theming with CSS variables for easy customization.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Box className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">45+ Components</CardTitle>
            <CardDescription>Comprehensive component library with enhanced variants and features.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="border-border/50 bg-card/50 backdrop-blur">
          <CardHeader>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">Nova.UI Extras</CardTitle>
            <CardDescription>
              Enhanced components with loading states, animations, and advanced features.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Links</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/docs/installation"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Installation</h3>
              <p className="text-sm text-muted-foreground">Get started with Nova.UI in your project</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="/docs/components/button"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Button Component</h3>
              <p className="text-sm text-muted-foreground">The most commonly used component</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="/docs/core-concepts/theming"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Theming Guide</h3>
              <p className="text-sm text-muted-foreground">Customize colors, fonts, and more</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="/docs/nova-extras/animated-button"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Nova.UI Extras</h3>
              <p className="text-sm text-muted-foreground">Enhanced animated components</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  )
}
