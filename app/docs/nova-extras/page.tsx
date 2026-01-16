import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Layers, MousePointer, Box, ArrowRight } from "lucide-react"

const novaComponents = [
  {
    title: "Animated Button",
    description: "Button with built-in loading states, ripple effects, and micro-animations.",
    href: "/docs/nova-extras/animated-button",
    icon: MousePointer,
    features: ["Loading spinner", "Ripple effect", "Scale animation"],
  },
  {
    title: "Floating Input",
    description: "Input with animated floating label that moves on focus.",
    href: "/docs/nova-extras/floating-input",
    icon: Layers,
    features: ["Floating label", "Focus animations", "Error states"],
  },
  {
    title: "Glass Card",
    description: "Glassmorphism card with blur backdrop and gradient borders.",
    href: "/docs/nova-extras/glass-card",
    icon: Box,
    features: ["Backdrop blur", "Gradient border", "Hover glow"],
  },
  {
    title: "Motion Dialog",
    description: "Dialog with smooth enter/exit animations and backdrop effects.",
    href: "/docs/nova-extras/motion-dialog",
    icon: Sparkles,
    features: ["Spring animations", "Scale transition", "Backdrop blur"],
  },
  {
    title: "Shimmer Badge",
    description: "Badge with animated shimmer/shine effect for highlighting.",
    href: "/docs/nova-extras/shimmer-badge",
    icon: Zap,
    features: ["Shimmer animation", "Pulse option", "Glow effect"],
  },
]

export default function NovaExtrasPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-primary">Nova.UI Extras</p>
          <Badge variant="secondary" className="text-xs">
            Enhanced
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Nova.UI Extras</h1>
        <p className="text-lg text-muted-foreground">
          Enhanced components with built-in animations, loading states, and extra functionality. These components wrap
          the base shadcn/ui components with Nova.UI&apos;s signature polish.
        </p>
      </div>

      <div className="grid gap-4">
        {novaComponents.map((component) => {
          const Icon = component.icon
          return (
            <Link key={component.href} href={component.href}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {component.title}
                      </CardTitle>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">{component.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {component.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
