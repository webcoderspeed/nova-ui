"use client"

import { useState } from "react"
import {
  NovaButton as Button,
  NovaCard as Card,
  NovaCardContent as CardContent,
  NovaCardHeader as CardHeader,
  NovaCardTitle as CardTitle,
  NovaInput as Input,
  NovaBadge as Badge
} from "@/components/nova"
import { ArrowRight, Mail, Lock, Loader2 } from "lucide-react"

const componentCategories = ["All", "Buttons", "Cards", "Forms", "Modals"]

export function ComponentShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadingDemo = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <section id="components" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Component Showcase</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Interactive, accessible components ready for your next project.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {componentCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Button Variants */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                Button Variants
                <Badge variant="secondary" className="text-xs">
                  Interactive
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Primary</Button>
                <Button size="sm" variant="secondary">
                  Secondary
                </Button>
                <Button size="sm" variant="outline">
                  Outline
                </Button>
                <Button size="sm" variant="ghost">
                  Ghost
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" className="gap-1.5">
                  Continue <ArrowRight className="h-3 w-3" />
                </Button>
                <Button size="sm" onClick={handleLoadingDemo} disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-1.5 h-3 w-3 animate-spin" />}
                  {isLoading ? "Loading..." : "Click me"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Form Example */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                Form Elements
                <Badge variant="secondary" className="text-xs">
                  Validated
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Email address" type="email" />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Password" type="password" />
                </div>
              </div>
              <Button className="w-full" size="sm">
                Sign In
              </Button>
            </CardContent>
          </Card>

          {/* Card Example */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                Animated Card
                <Badge variant="secondary" className="text-xs">
                  Hover me
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="group cursor-pointer rounded-lg border border-border bg-secondary/50 p-4 transition-all duration-300 hover:border-primary/50 hover:bg-secondary">
                <div className="mb-2 h-2 w-24 rounded bg-primary/20 transition-all group-hover:w-32 group-hover:bg-primary/40" />
                <div className="mb-2 h-2 w-full rounded bg-muted" />
                <div className="mb-2 h-2 w-3/4 rounded bg-muted" />
                <div className="h-2 w-1/2 rounded bg-muted" />
              </div>
              <p className="mt-3 text-xs text-muted-foreground">Smooth animations powered by Framer Motion</p>
            </CardContent>
          </Card>

          {/* Badge Variants */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="text-base">Status Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge className="bg-primary/20 text-primary">Success</Badge>
                <Badge className="bg-accent/20 text-accent-foreground">Warning</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Loading States */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="text-base">Loading States</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                <div className="h-4 w-4 animate-pulse rounded-full bg-primary" />
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
                </div>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
              </div>
            </CardContent>
          </Card>

          {/* Notification Card */}
          <Card className="border-border bg-background">
            <CardHeader>
              <CardTitle className="text-base">Notification Toast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Changes saved!</p>
                    <p className="text-xs text-muted-foreground">Your profile has been updated.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2 bg-transparent">
            View All Components
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
