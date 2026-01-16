"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, ChevronRight, ArrowRight, Rocket } from "lucide-react"

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm">
        <code className="text-zinc-100 font-mono">{code}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

export default function QuickStartPage() {
  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Quick Start</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Rocket className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Quick Start</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Build your first Nova.UI component in under 5 minutes. Let's create a simple card with an animated button.
        </p>
      </div>

      {/* Step 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="h-8 w-8 rounded-full p-0 flex items-center justify-center text-sm">1</Badge>
          <h2 className="text-xl font-semibold">Import the components</h2>
        </div>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"`}
        />
      </section>

      {/* Step 2 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="h-8 w-8 rounded-full p-0 flex items-center justify-center text-sm">2</Badge>
          <h2 className="text-xl font-semibold">Create your component</h2>
        </div>
        <CodeBlock
          code={`export function LoginCard() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Welcome back</CardTitle>
        <CardDescription>
          Sign in to your account to continue
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
  )
}`}
        />
      </section>

      {/* Step 3 - Preview */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Badge className="h-8 w-8 rounded-full p-0 flex items-center justify-center text-sm">3</Badge>
          <h2 className="text-xl font-semibold">See it in action</h2>
        </div>
        <Card className="border-border/50">
          <CardContent className="flex items-center justify-center p-8">
            <Card className="w-[380px]">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Welcome back</p>
                  <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
                </div>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <input
                      type="password"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                  </div>
                  <Button className="w-full">Sign In</Button>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What's next?</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/docs/components"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Browse Components</h3>
              <p className="text-sm text-muted-foreground">Explore all available components</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="/docs/core-concepts/theming"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Customize Theme</h3>
              <p className="text-sm text-muted-foreground">Make it your own</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  )
}
