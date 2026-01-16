import { CodeBlock } from "./code-block"
import { Card, CardContent } from "@/components/ui/card"
import { Boxes, GitBranch, Palette, Globe, Zap, Shield } from "lucide-react"

const technologies = [
  {
    name: "shadcn/ui",
    description: "Beautifully designed, accessible components built with Radix UI and Tailwind CSS.",
    icon: Palette,
  },
  {
    name: "Framer Motion",
    description: "Production-ready motion library for React with declarative animations.",
    icon: Zap,
  },
  {
    name: "GSAP",
    description: "Professional-grade animation for complex sequences and scroll-triggered effects.",
    icon: Zap,
  },
  {
    name: "Zod",
    description: "TypeScript-first schema validation with static type inference.",
    icon: Shield,
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development.",
    icon: Palette,
  },
  {
    name: "i18n & RTL",
    description: "Built-in internationalization and right-to-left language support.",
    icon: Globe,
  },
]

export function CoreConcepts() {
  return (
    <section data-section="core-concepts" id="core-concepts" className="mt-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">Core Concepts</h2>
        <p className="text-muted-foreground">Understand the architecture and key technologies that power Nova.UI.</p>
      </div>

      {/* Architecture */}
      <div data-section="architecture" id="architecture" className="mb-10 scroll-mt-20">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Architecture</h3>
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <Card className="bg-card">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Boxes className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">Modular Design</h4>
                <p className="text-sm text-muted-foreground">
                  Each component is self-contained and can be used independently. Import only what you need.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex items-start gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GitBranch className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-foreground">Git Submodule Workflow</h4>
                <p className="text-sm text-muted-foreground">
                  Full source code access with controlled updates. Fork and customize as needed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <CodeBlock
          code={`nova-ui/
├── components/
│   ├── ui/           # Core UI primitives
│   ├── forms/        # Form components with Zod validation
│   ├── layout/       # Layout utilities
│   └── animations/   # Motion components
├── hooks/            # Custom React hooks
├── lib/              # Utilities and helpers
├── styles/           # Tailwind presets and themes
└── i18n/             # Internationalization config`}
          language="bash"
          filename="Project Structure"
        />
      </div>

      {/* Technologies */}
      <div data-section="technologies" id="technologies" className="scroll-mt-20">
        <h3 className="mb-4 text-xl font-semibold text-foreground">Key Technologies</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const Icon = tech.icon
            return (
              <Card key={tech.name} className="bg-card transition-colors hover:bg-secondary/50">
                <CardContent className="p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="mb-1 font-semibold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
