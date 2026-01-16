"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Copy, ChevronRight, ExternalLink } from "lucide-react"

interface PropItem {
  name: string
  type: string
  default?: string
  description: string
  required?: boolean
}

interface ComponentDocProps {
  title: string
  description: string
  preview: React.ReactNode
  installCommand: string
  importCode: string
  usageCode: string
  props: PropItem[]
  examples?: {
    title: string
    description?: string
    code: string
    preview: React.ReactNode
  }[]
  apiReference?: string
  relatedComponents?: { name: string; href: string }[]
  sourceLink?: string
  badgeText?: string
}

function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
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

export function ComponentDocTemplate({
  title,
  description,
  preview,
  installCommand,
  importCode,
  usageCode,
  props,
  examples,
  relatedComponents,
  sourceLink,
  badgeText,
}: ComponentDocProps) {
  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/docs/components" className="hover:text-foreground transition-colors">
          Components
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{title}</span>
        {badgeText && (
          <Badge variant="outline" className="ml-2">
            {badgeText}
          </Badge>
        )}
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Source
            </a>
          )}
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="rounded-xl border border-border bg-card p-8 flex items-center justify-center min-h-[200px]">
          {preview}
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="w-full justify-start rounded-lg bg-muted p-1">
            <TabsTrigger value="cli" className="rounded-md">
              CLI
            </TabsTrigger>
            <TabsTrigger value="manual" className="rounded-md">
              Manual
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cli" className="mt-4">
            <CodeBlock code={installCommand} language="bash" />
          </TabsContent>
          <TabsContent value="manual" className="mt-4 space-y-4">
            <p className="text-sm text-muted-foreground">Copy the component source code and add it to your project.</p>
            <CodeBlock code={importCode} />
          </TabsContent>
        </Tabs>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock code={usageCode} />
      </section>

      {/* Examples */}
      {examples && examples.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Examples</h2>
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">{example.title}</h3>
                {example.description && <p className="text-sm text-muted-foreground mt-1">{example.description}</p>}
              </div>
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="w-full justify-start rounded-lg bg-muted p-1">
                  <TabsTrigger value="preview" className="rounded-md">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="rounded-md">
                    Code
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="preview" className="mt-4">
                  <div className="rounded-xl border border-border bg-card p-6 flex items-center justify-center min-h-[120px]">
                    {example.preview}
                  </div>
                </TabsContent>
                <TabsContent value="code" className="mt-4">
                  <CodeBlock code={example.code} />
                </TabsContent>
              </Tabs>
            </div>
          ))}
        </section>
      )}

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left py-3 px-4 font-medium">Prop</th>
                <th className="text-left py-3 px-4 font-medium">Type</th>
                <th className="text-left py-3 px-4 font-medium">Default</th>
                <th className="text-left py-3 px-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {props.map((prop) => (
                <tr key={prop.name} className="hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4">
                    <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <Badge variant="outline" className="ml-2 text-[10px]">
                        Required
                      </Badge>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-muted-foreground font-mono text-xs">{prop.type}</code>
                  </td>
                  <td className="py-3 px-4">
                    <code className="text-muted-foreground font-mono text-xs">{prop.default || "-"}</code>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Related Components */}
      {relatedComponents && relatedComponents.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Related Components</h2>
          <div className="flex flex-wrap gap-2">
            {relatedComponents.map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-accent transition-colors"
              >
                {comp.name}
                <ChevronRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
