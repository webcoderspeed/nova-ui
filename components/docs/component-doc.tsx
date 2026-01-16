"use client"

import type { ReactNode } from "react"
import { CodeBlock } from "./code-block"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ComponentDocProps {
  id: string
  title: string
  description: string
  preview: ReactNode
  code: string
  usage?: string
  props?: Array<{
    name: string
    type: string
    default?: string
    description: string
    required?: boolean
  }>
  variants?: Array<{
    name: string
    preview: ReactNode
  }>
  isNova?: boolean
}

export function ComponentDoc({
  id,
  title,
  description,
  preview,
  code,
  usage,
  props,
  variants,
  isNova,
}: ComponentDocProps) {
  return (
    <section id={id} data-section={id} className="scroll-mt-20 py-8 border-b border-border last:border-0">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {isNova && (
          <Badge variant="secondary" className="bg-primary/10 text-primary">
            Nova.UI
          </Badge>
        )}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          {props && <TabsTrigger value="props">Props</TabsTrigger>}
        </TabsList>

        <TabsContent value="preview">
          <div className="rounded-lg border border-border bg-card p-6 flex items-center justify-center min-h-[120px]">
            <div className="flex flex-wrap gap-4 items-center justify-center">{preview}</div>
          </div>
          {variants && variants.length > 0 && (
            <div className="mt-4 space-y-3">
              <p className="text-sm font-medium text-muted-foreground">Variants</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {variants.map((variant, i) => (
                  <div key={i} className="rounded-lg border border-border bg-card/50 p-4">
                    <p className="text-xs text-muted-foreground mb-3">{variant.name}</p>
                    <div className="flex items-center justify-center">{variant.preview}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="code">
          <CodeBlock code={code} language="tsx" filename={`${id}.tsx`} />
          {usage && (
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Usage</p>
              <CodeBlock code={usage} language="tsx" />
            </div>
          )}
        </TabsContent>

        {props && (
          <TabsContent value="props">
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-secondary/50">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium">Prop</th>
                    <th className="text-left px-4 py-2 font-medium">Type</th>
                    <th className="text-left px-4 py-2 font-medium hidden sm:table-cell">Default</th>
                    <th className="text-left px-4 py-2 font-medium hidden md:table-cell">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {props.map((prop, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="px-4 py-2 font-mono text-xs">
                        {prop.name}
                        {prop.required && <span className="text-destructive ml-1">*</span>}
                      </td>
                      <td className="px-4 py-2 font-mono text-xs text-primary">{prop.type}</td>
                      <td className="px-4 py-2 font-mono text-xs text-muted-foreground hidden sm:table-cell">
                        {prop.default || "-"}
                      </td>
                      <td className="px-4 py-2 text-muted-foreground hidden md:table-cell">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        )}
      </Tabs>
    </section>
  )
}
