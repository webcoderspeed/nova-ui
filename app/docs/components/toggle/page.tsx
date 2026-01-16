"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic } from "lucide-react"

export default function TogglePage() {
  return (
    <ComponentDocTemplate
      title="Toggle"
      description="A two-state button that can be either on or off. Perfect for formatting toolbars and settings."
      preview={
        <Toggle aria-label="Toggle italic">
          <Bold className="h-4 w-4" />
        </Toggle>
      }
      installCommand="npx nova-ui@latest add toggle"
      importCode={`import { Toggle } from "@/components/ui/toggle"`}
      usageCode={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from 'lucide-react'

export function MyComponent() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  )
}`}
      props={[
        { name: "pressed", type: "boolean", description: "Controlled pressed state" },
        { name: "defaultPressed", type: "boolean", description: "Default pressed state" },
        { name: "onPressedChange", type: "function", description: "Callback when pressed changes" },
        { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual variant" },
        { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size of the toggle" },
        { name: "disabled", type: "boolean", description: "Disable the toggle" },
      ]}
      examples={[
        {
          title: "Outline Variant",
          description: "Toggle with outline style.",
          code: `<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`,
          preview: (
            <Toggle variant="outline" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
          ),
        },
        {
          title: "With Text",
          description: "Toggle with text label.",
          code: `<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4 mr-2" />
  Italic
</Toggle>`,
          preview: (
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4 mr-2" />
              Italic
            </Toggle>
          ),
        },
        {
          title: "Sizes",
          description: "Different toggle sizes.",
          code: `<Toggle size="sm"><Bold className="h-4 w-4" /></Toggle>
<Toggle size="default"><Bold className="h-4 w-4" /></Toggle>
<Toggle size="lg"><Bold className="h-4 w-4" /></Toggle>`,
          preview: (
            <div className="flex items-center gap-2">
              <Toggle size="sm" aria-label="Bold small">
                <Bold className="h-3 w-3" />
              </Toggle>
              <Toggle size="default" aria-label="Bold default">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Bold large">
                <Bold className="h-5 w-5" />
              </Toggle>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Toggle Group", href: "/docs/components/toggle-group" },
        { name: "Button", href: "/docs/components/button" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/toggle.tsx"
    />
  )
}
