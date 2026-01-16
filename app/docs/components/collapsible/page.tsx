"use client"

import { useState } from "react"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ComponentDocTemplate
      title="Collapsible"
      description="An interactive component which expands/collapses a panel. Ideal for FAQ sections and expandable content."
      preview={
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">@nova/ui has 3 repositories</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">@nova/ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@nova/ui/components</div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@nova/ui/animations</div>
          </CollapsibleContent>
        </Collapsible>
      }
      installCommand="npx nova-ui@latest add collapsible"
      importCode={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"`}
      usageCode={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger>Toggle</CollapsibleTrigger>
      <CollapsibleContent>
        Hidden content
      </CollapsibleContent>
    </Collapsible>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "The controlled open state" },
        { name: "defaultOpen", type: "boolean", description: "The default open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open state changes" },
        { name: "disabled", type: "boolean", description: "Disable the collapsible" },
        { name: "asChild", type: "boolean", description: "Merge props onto child (CollapsibleTrigger)" },
      ]}
      examples={[
        {
          title: "Default Open",
          description: "Start with content expanded.",
          code: `<Collapsible defaultOpen>
  <CollapsibleTrigger>Show less</CollapsibleTrigger>
  <CollapsibleContent>
    Initially visible content
  </CollapsibleContent>
</Collapsible>`,
          preview: (
            <Collapsible defaultOpen className="w-[300px] space-y-2">
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between bg-transparent">
                  View details
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">Detail item 1</div>
                <div className="rounded-md border px-4 py-2 text-sm">Detail item 2</div>
              </CollapsibleContent>
            </Collapsible>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Accordion", href: "/docs/components/accordion" },
        { name: "Sheet", href: "/docs/components/sheet" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/collapsible.tsx"
    />
  )
}
