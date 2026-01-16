"use client"

import * as React from "react"
import { NovaToggle } from "@/components/nova/nova-toggle"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Bold, Italic, Underline } from "lucide-react"

export default function ToggleDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Toggle"
      description="A two-state button that can be either on or off."
      whenToUse={[
        "When you need to toggle a single option.",
        "For formatting text (bold, italic).",
        "As a state indicator."
      ]}
      hints={[
        { type: "info", content: "Supports variants like `outline`, `glass`, `glow`, `neon`." },
        { type: "info", content: "Can be used alone or in a group." },
        { type: "info", content: "Accessible with keyboard navigation." }
      ]}
      preview={
        <div className="flex items-center gap-4">
          <NovaToggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </NovaToggle>
          <NovaToggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </NovaToggle>
          <NovaToggle variant="glow" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </NovaToggle>
        </div>
      }
      installCommand="npx shadcn@latest add toggle"
      importCode={`import { NovaToggle } from "@/components/nova/nova-toggle"`}
      usageCode={`<NovaToggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</NovaToggle>`}
      props={[
        {
          name: "variant",
          type: '"default" | "outline" | "glass" | "glow" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the toggle."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the toggle button."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the toggle.",
          code: `<div className="flex items-center gap-4">
  <NovaToggle variant="default">Default</NovaToggle>
  <NovaToggle variant="outline">Outline</NovaToggle>
  <NovaToggle variant="glass">Glass</NovaToggle>
  <NovaToggle variant="neon">Neon</NovaToggle>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaToggle variant="default">Default</NovaToggle>
              <NovaToggle variant="outline">Outline</NovaToggle>
              <NovaToggle variant="glass">Glass</NovaToggle>
              <NovaToggle variant="neon">Neon</NovaToggle>
            </div>
          )
        },
        {
          title: "Sizes",
          description: "Available sizes for the toggle.",
          code: `<div className="flex items-center gap-4">
  <NovaToggle size="sm">Small</NovaToggle>
  <NovaToggle size="default">Default</NovaToggle>
  <NovaToggle size="lg">Large</NovaToggle>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaToggle size="sm">Small</NovaToggle>
              <NovaToggle size="default">Default</NovaToggle>
              <NovaToggle size="lg">Large</NovaToggle>
            </div>
          )
        }
      ]}
    />
  )
}
