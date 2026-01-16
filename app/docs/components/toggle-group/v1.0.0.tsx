"use client"

import * as React from "react"
import { NovaToggleGroup, NovaToggleGroupItem } from "@/components/nova/nova-toggle-group"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Bold, Italic, Underline, AlignCenter, AlignLeft, AlignRight } from "lucide-react"

export default function ToggleGroupDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off."
      whenToUse={[
        "When users need to select multiple options from a set.",
        "For formatting toolbars (e.g., text alignment).",
        "When choices are not mutually exclusive (unless single select)."
      ]}
      hints={[
        { type: "info", content: "Supports single or multiple selection modes." },
        { type: "info", content: "Variants like `outline`, `glass`, `floating`." },
        { type: "info", content: "Consistent styling with Nova design system." }
      ]}
      preview={
        <div className="flex flex-col gap-4 items-center">
          <NovaToggleGroup type="multiple">
            <NovaToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </NovaToggleGroupItem>
            <NovaToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </NovaToggleGroupItem>
            <NovaToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </NovaToggleGroupItem>
          </NovaToggleGroup>
          
          <NovaToggleGroup type="single" variant="floating">
            <NovaToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </NovaToggleGroupItem>
            <NovaToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </NovaToggleGroupItem>
             <NovaToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </NovaToggleGroupItem>
          </NovaToggleGroup>
        </div>
      }
      installCommand="npx shadcn@latest add toggle-group"
      importCode={`import { NovaToggleGroup, NovaToggleGroupItem } from "@/components/nova/nova-toggle-group"`}
      usageCode={`<NovaToggleGroup type="multiple">
  <NovaToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </NovaToggleGroupItem>
  <NovaToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </NovaToggleGroupItem>
  <NovaToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </NovaToggleGroupItem>
</NovaToggleGroup>`}
      props={[
        {
          name: "type",
          type: '"single" | "multiple"',
          defaultValue: '"single"',
          description: "Whether multiple items can be selected."
        },
        {
          name: "variant",
          type: '"default" | "outline" | "glass" | "floating"',
          defaultValue: '"default"',
          description: "Visual style of the toggle group."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the toggle group items."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the toggle group.",
          code: `<div className="flex flex-col gap-4 items-center">
  <NovaToggleGroup type="single" variant="outline">
    <NovaToggleGroupItem value="a">A</NovaToggleGroupItem>
    <NovaToggleGroupItem value="b">B</NovaToggleGroupItem>
    <NovaToggleGroupItem value="c">C</NovaToggleGroupItem>
  </NovaToggleGroup>
  
  <NovaToggleGroup type="single" variant="glass">
    <NovaToggleGroupItem value="1">1</NovaToggleGroupItem>
    <NovaToggleGroupItem value="2">2</NovaToggleGroupItem>
    <NovaToggleGroupItem value="3">3</NovaToggleGroupItem>
  </NovaToggleGroup>
</div>`,
          preview: (
            <div className="flex flex-col gap-4 items-center">
              <NovaToggleGroup type="single" variant="outline">
                <NovaToggleGroupItem value="a">A</NovaToggleGroupItem>
                <NovaToggleGroupItem value="b">B</NovaToggleGroupItem>
                <NovaToggleGroupItem value="c">C</NovaToggleGroupItem>
              </NovaToggleGroup>
              
              <NovaToggleGroup type="single" variant="glass">
                <NovaToggleGroupItem value="1">1</NovaToggleGroupItem>
                <NovaToggleGroupItem value="2">2</NovaToggleGroupItem>
                <NovaToggleGroupItem value="3">3</NovaToggleGroupItem>
              </NovaToggleGroup>
            </div>
          )
        }
      ]}
    />
  )
}
