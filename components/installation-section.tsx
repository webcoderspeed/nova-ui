"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

const steps = [
  {
    title: "Add as Git submodule",
    code: `git submodule add https://github.com/nova-ui/core components/nova-ui`,
  },
  {
    title: "Import components",
    code: `import { Button, Card, Modal } from '@/components/nova-ui'
import { useAnimation } from '@/components/nova-ui/hooks'`,
  },
  {
    title: "Customize with Tailwind",
    code: `// tailwind.config.ts
export default {
  content: [
    './components/nova-ui/**/*.{ts,tsx}',
    // ... your other paths
  ],
  theme: {
    extend: {
      // Nova.UI theme extensions
    }
  }
}`,
  },
]

export function InstallationSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="installation" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get started in minutes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Install Nova.UI as a Git submodule and start building beautiful interfaces.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-3 flex items-center gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              </div>
              <div className="group relative ml-4 rounded-lg border border-border bg-card">
                <div className="flex items-center justify-between border-b border-border px-4 py-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyCode(step.code, index)}
                    className="h-7 gap-1.5 text-xs text-muted-foreground"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="h-3 w-3" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
                <pre className="overflow-x-auto p-4">
                  <code className="text-sm text-muted-foreground font-mono">{step.code}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
