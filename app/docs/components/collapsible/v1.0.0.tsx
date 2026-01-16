"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import { NovaCollapsible, NovaCollapsibleContent, NovaCollapsibleTrigger } from "@/components/nova/nova-collapsible"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CollapsibleDocsV1() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Collapsible"
      description="An interactive component which expands/collapses a panel."
      whenToUse={[
        "To hide complex details.",
        "To save space in the UI.",
        "For progressive disclosure."
      ]}
      hints={[
        { type: "info", content: "Supports `card` and `minimal` variants." },
        { type: "info", content: "Use `open` and `onOpenChange` for controlled state." }
      ]}
      preview={
        <div className="w-full max-w-xs">
          <NovaCollapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">
                @peduarte starred 3 repositories
              </h4>
              <NovaCollapsibleTrigger asChild>
                <NovaButton variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </NovaButton>
              </NovaCollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <NovaCollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @stitches/react
              </div>
            </NovaCollapsibleContent>
          </NovaCollapsible>
        </div>
      }
      installCommand="npx shadcn@latest add collapsible"
      importCode={`import { NovaCollapsible, NovaCollapsibleContent, NovaCollapsibleTrigger } from "@/components/nova/nova-collapsible"`}
      usageCode={`<NovaCollapsible>
  <NovaCollapsibleTrigger>Can I use this in my project?</NovaCollapsibleTrigger>
  <NovaCollapsibleContent>
    Yes. Free to use for personal and commercial projects.
  </NovaCollapsibleContent>
</NovaCollapsible>`}
      props={[
        {
          name: "variant",
          type: '"default" | "card" | "minimal"',
          defaultValue: '"default"',
          description: "Visual style of the collapsible container."
        }
      ]}
      examples={[
        {
          title: "Card Variant",
          description: "Collapsible styled as a card.",
          code: `<NovaCollapsible variant="card" className="p-4">
  <div className="flex items-center justify-between">
    <span>Details</span>
    <NovaCollapsibleTrigger asChild>
       <NovaButton variant="ghost" size="sm">Toggle</NovaButton>
    </NovaCollapsibleTrigger>
  </div>
  <NovaCollapsibleContent className="mt-2">
    Content inside card.
  </NovaCollapsibleContent>
</NovaCollapsible>`,
          preview: (
            <div className="w-full max-w-xs">
              <NovaCollapsible variant="card" className="p-4">
                <div className="flex items-center justify-between">
                  <span>Details</span>
                  <NovaCollapsibleTrigger asChild>
                    <NovaButton variant="ghost" size="sm">Toggle</NovaButton>
                  </NovaCollapsibleTrigger>
                </div>
                <NovaCollapsibleContent className="mt-2">
                  Content inside card.
                </NovaCollapsibleContent>
              </NovaCollapsible>
            </div>
          )
        }
      ]}
    />
  )
}
