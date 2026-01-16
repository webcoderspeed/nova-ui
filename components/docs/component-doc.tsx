"use client"

import type { ReactNode } from "react"
import { CodeBlock } from "./code-block"
import {
  NovaBadge,
  NovaTable,
  NovaTableBody,
  NovaTableCell,
  NovaTableHead,
  NovaTableHeader,
  NovaTableRow,
  NovaTabs,
  NovaTabsContent,
  NovaTabsList,
  NovaTabsTrigger,
} from "@/components"

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
  badgeText?: string
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
  badgeText,
}: ComponentDocProps) {
  return (
    <section id={id} data-section={id} className="scroll-mt-20 py-8 border-b border-border last:border-0">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {isNova && (
          <NovaBadge variant="secondary" className="bg-primary/10 text-primary">
            Nova.UI
          </NovaBadge>
        )}
        {badgeText && (
          <NovaBadge variant="outline" className="text-muted-foreground">
            {badgeText}
          </NovaBadge>
        )}
      </div>
      <p className="text-muted-foreground mb-6">{description}</p>

      <NovaTabs defaultValue="preview" className="w-full">
        <NovaTabsList className="mb-4">
          <NovaTabsTrigger value="preview">Preview</NovaTabsTrigger>
          <NovaTabsTrigger value="code">Code</NovaTabsTrigger>
          {props && <NovaTabsTrigger value="props">Props</NovaTabsTrigger>}
        </NovaTabsList>

        <NovaTabsContent value="preview">
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
        </NovaTabsContent>

        <NovaTabsContent value="code">
          <CodeBlock code={code} language="tsx" filename={`${id}.tsx`} />
          {usage && (
            <div className="mt-4">
              <p className="text-sm font-medium text-muted-foreground mb-2">Usage</p>
              <CodeBlock code={usage} language="tsx" />
            </div>
          )}
        </NovaTabsContent>

        {props && (
          <NovaTabsContent value="props">
            <div className="rounded-lg border border-border overflow-hidden">
              <NovaTable>
                <NovaTableHeader>
                  <NovaTableRow>
                    <NovaTableHead className="w-[150px]">Prop</NovaTableHead>
                    <NovaTableHead className="w-[150px]">Type</NovaTableHead>
                    <NovaTableHead className="w-[150px] hidden sm:table-cell">Default</NovaTableHead>
                    <NovaTableHead className="hidden md:table-cell">Description</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  {props.map((prop, i) => (
                    <NovaTableRow key={i}>
                      <NovaTableCell className="font-mono text-xs">
                        {prop.name}
                        {prop.required && <span className="text-destructive ml-1">*</span>}
                      </NovaTableCell>
                      <NovaTableCell className="font-mono text-xs text-primary">{prop.type}</NovaTableCell>
                      <NovaTableCell className="font-mono text-xs text-muted-foreground hidden sm:table-cell">
                        {prop.default || "-"}
                      </NovaTableCell>
                      <NovaTableCell className="text-muted-foreground hidden md:table-cell">{prop.description}</NovaTableCell>
                    </NovaTableRow>
                  ))}
                </NovaTableBody>
              </NovaTable>
            </div>
          </NovaTabsContent>
        )}
      </NovaTabs>
    </section>
  )
}
