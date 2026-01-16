import { CodeBlock } from "./code-block"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Terminal, Sparkles, Zap, Globe } from "lucide-react"

export function GettingStarted() {
  return (
    <section data-section="getting-started" id="getting-started" className="scroll-mt-20">
      <div data-section="introduction" id="introduction" className="mb-12 scroll-mt-20">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">Nova.UI</h1>
        <p className="text-xl text-muted-foreground mb-6">
          A modern, modular design system built on top of shadcn/ui with enhanced components, animations, i18n support,
          and TypeScript-first development.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <Card className="bg-card border-primary/20">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Enhanced Components</p>
                <p className="text-sm text-muted-foreground">45+ styled components</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Animations Built-in</p>
                <p className="text-sm text-muted-foreground">Framer Motion & GSAP</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-primary/20">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">i18n & RTL Ready</p>
                <p className="text-sm text-muted-foreground">Global-first design</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Installation Section */}
      <div data-section="installation" id="installation" className="mb-10 scroll-mt-20">
        <h2 className="mb-4 text-2xl font-bold text-foreground">Installation</h2>
        <p className="mb-4 text-muted-foreground">
          Nova.UI is designed to be added as a Git submodule, giving you full control over updates and customization.
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              1
            </span>
            <div className="flex-1">
              <p className="mb-2 font-medium text-foreground">Add Nova.UI as a Git submodule</p>
              <CodeBlock
                code="git submodule add https://github.com/nova-ui/nova-ui.git components/nova-ui"
                language="bash"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              2
            </span>
            <div className="flex-1">
              <p className="mb-2 font-medium text-foreground">Install peer dependencies</p>
              <CodeBlock
                code={`npm install framer-motion gsap zod @radix-ui/react-slot class-variance-authority
# or with pnpm
pnpm add framer-motion gsap zod @radix-ui/react-slot class-variance-authority`}
                language="bash"
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              3
            </span>
            <div className="flex-1">
              <p className="mb-2 font-medium text-foreground">Configure Tailwind</p>
              <CodeBlock
                code={`// tailwind.config.ts
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/nova-ui/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Nova.UI theme extensions are auto-imported
    },
  },
  plugins: [],
}

export default config`}
                language="tsx"
                filename="tailwind.config.ts"
                showLineNumbers
              />
            </div>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <div data-section="prerequisites" id="prerequisites" className="mb-10 scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Prerequisites</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="bg-card">
            <CardContent className="flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Node.js 18+</p>
                <p className="text-sm text-muted-foreground">LTS version recommended</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">TypeScript 5+</p>
                <p className="text-sm text-muted-foreground">Strict mode enabled</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-foreground">Tailwind CSS 3+</p>
                <p className="text-sm text-muted-foreground">With PostCSS configured</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Start */}
      <div data-section="quick-start" id="quick-start" className="scroll-mt-20">
        <h2 className="mb-4 text-xl font-semibold text-foreground">Quick Start</h2>
        <p className="mb-4 text-muted-foreground">
          Here&apos;s a simple example of importing and using Nova.UI components:
        </p>
        <CodeBlock
          code={`import { NovaButton } from "@/components/nova/nova-button"
import { NovaCard, NovaCardHeader, NovaCardTitle, NovaCardContent } from "@/components/nova/nova-card"

export default function MyComponent() {
  return (
    <NovaCard variant="glass" glow="subtle">
      <NovaCardHeader>
        <NovaCardTitle>Welcome to Nova.UI</NovaCardTitle>
      </NovaCardHeader>
      <NovaCardContent>
        <p>Start building beautiful interfaces.</p>
        <NovaButton animation="shine" className="mt-4">
          Get Started
        </NovaButton>
      </NovaCardContent>
    </NovaCard>
  )
}`}
          language="tsx"
          filename="app/page.tsx"
          showLineNumbers
        />

        <div className="mt-6 flex items-center gap-4 rounded-lg border border-border bg-secondary/30 p-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Tip:</span>
          </div>
          <p className="text-sm text-foreground">
            Configure your import alias in{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">tsconfig.json</code> to use{" "}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs">@/components/nova</code>
          </p>
        </div>
      </div>
    </section>
  )
}
