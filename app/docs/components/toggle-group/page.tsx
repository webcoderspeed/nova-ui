"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export default function ToggleGroupPage() {
  return (
    <ComponentDocTemplate
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off. Supports single and multiple selection."
      preview={
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      }
      installCommand="npx nova-ui@latest add toggle-group"
      importCode={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`}
      usageCode={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from 'lucide-react'

export function MyComponent() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
      props={[
        { name: "type", type: '"single" | "multiple"', description: "Selection mode" },
        { name: "value", type: "string | string[]", description: "Controlled value(s)" },
        { name: "defaultValue", type: "string | string[]", description: "Default value(s)" },
        { name: "onValueChange", type: "function", description: "Callback when value changes" },
        { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual variant" },
        { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Size of toggles" },
        { name: "disabled", type: "boolean", description: "Disable the group" },
      ]}
      examples={[
        {
          title: "Single Selection",
          description: "Only one item can be selected.",
          code: `<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
          preview: (
            <ToggleGroup type="single" defaultValue="center">
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          ),
        },
        {
          title: "Outline Variant",
          description: "Toggle group with outline style.",
          code: `<ToggleGroup type="multiple" variant="outline">
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
          preview: (
            <ToggleGroup type="multiple" variant="outline">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Toggle", href: "/docs/components/toggle" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/toggle-group.tsx"
    />
  )
}
