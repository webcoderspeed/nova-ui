"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Blocks, Shield, Sparkles, Palette, Globe, Accessibility } from "lucide-react"

const features = [
  {
    icon: Blocks,
    title: "Modular Architecture",
    description: "Git submodule ready. Import only what you need and keep your bundle lean.",
  },
  {
    icon: Shield,
    title: "TypeScript-First",
    description: "Zod-powered validation with full type safety. Catch errors before runtime.",
  },
  {
    icon: Sparkles,
    title: "Animation-Rich",
    description: "Seamless Framer Motion and GSAP integration for delightful interactions.",
  },
  {
    icon: Palette,
    title: "Tailwind Powered",
    description: "Rapid styling with Tailwind CSS. Customize everything with ease.",
  },
  {
    icon: Globe,
    title: "i18n & RTL Support",
    description: "Built-in internationalization and right-to-left language support.",
  },
  {
    icon: Accessibility,
    title: "Accessibility-First",
    description: "WCAG compliant components. Keyboard navigation and screen reader friendly.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build modern UIs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive design system built on the best tools in the ecosystem.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group border-border bg-background transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
