import Link from "next/link"
import { NovaCard, NovaCardContent, NovaCardDescription, NovaCardHeader, NovaCardTitle } from "@/components/nova/nova-card"
import { NovaBadge } from "@/components/nova/nova-badge"
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
          <NovaBadge variant="secondary" className="text-xs">
            Enhanced
          </NovaBadge>
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
              <NovaCard className="h-full bg-card/50 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-200 group">
                <NovaCardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-primary/5">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <NovaCardTitle className="text-lg group-hover:text-primary transition-colors">
                        {component.title}
                      </NovaCardTitle>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </NovaCardHeader>
                <NovaCardContent>
                  <NovaCardDescription className="mb-3">{component.description}</NovaCardDescription>
                  <div className="flex flex-wrap gap-2">
                    {component.features.map((feature) => (
                      <NovaBadge key={feature} variant="outline" className="text-xs">
                        {feature}
                      </NovaBadge>
                    ))}
                  </div>
                </NovaCardContent>
              </NovaCard>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
