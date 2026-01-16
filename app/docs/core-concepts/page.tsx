import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Palette, Sparkles, FileCode, ArrowRight } from "lucide-react"

const concepts = [
  {
    title: "Architecture",
    description:
      "Learn about Nova.UI's modular architecture, component composition patterns, and how everything fits together.",
    href: "/docs/core-concepts/architecture",
    icon: Layers,
  },
  {
    title: "Theming",
    description: "Understand the theming system, CSS variables, and how to customize colors, typography, and spacing.",
    href: "/docs/core-concepts/theming",
    icon: Palette,
  },
  {
    title: "Animations",
    description: "Explore built-in animation utilities powered by Framer Motion and GSAP for stunning interactions.",
    href: "/docs/core-concepts/animations",
    icon: Sparkles,
  },
  {
    title: "TypeScript",
    description: "Deep dive into type safety, generics usage, and how to leverage TypeScript for better DX.",
    href: "/docs/core-concepts/typescript",
    icon: FileCode,
  },
]

export default function CoreConceptsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Core Concepts</p>
        <h1 className="text-4xl font-bold tracking-tight">Understanding Nova.UI</h1>
        <p className="text-lg text-muted-foreground">
          Master the foundational concepts that power Nova.UI. Understanding these principles will help you build
          better, more maintainable applications.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {concepts.map((concept) => {
          const Icon = concept.icon
          return (
            <Link key={concept.href} href={concept.href}>
              <Card className="h-full bg-card/50 border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-200 group">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {concept.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{concept.description}</CardDescription>
                  <div className="mt-4 flex items-center text-sm text-primary">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
