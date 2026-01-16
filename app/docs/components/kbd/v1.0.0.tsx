"use client"

import * as React from "react"
import { NovaKbd, NovaKbdGroup } from "@/components/nova/nova-kbd"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function KbdDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Kbd"
      description="A keyboard shortcut component."
      whenToUse={[
        "To display keyboard shortcuts.",
        "To indicate key combinations.",
        "In command palettes or help menus."
      ]}
      hints={[
        { type: "info", content: "Supports `outline`, `ghost`, and `solid` variants." },
        { type: "info", content: "Can be grouped with `NovaKbdGroup`." },
        { type: "info", content: "Supports `sm` and `lg` sizes." }
      ]}
      preview={
        <div className="flex flex-col gap-4 items-center">
          <NovaKbd>⌘ K</NovaKbd>
          <div className="flex gap-2">
            <NovaKbd variant="outline">Ctrl</NovaKbd>
            <NovaKbd variant="outline">Alt</NovaKbd>
            <NovaKbd variant="outline">Del</NovaKbd>
          </div>
        </div>
      }
      installCommand="npx shadcn@latest add kbd" // Note: This is not a standard shadcn component, but part of Nova
      importCode={`import { NovaKbd } from "@/components/nova/nova-kbd"`}
      usageCode={`<NovaKbd>⌘ K</NovaKbd>`}
      props={[
        {
          name: "variant",
          type: '"default" | "outline" | "ghost" | "solid"',
          defaultValue: '"default"',
          description: "Visual style of the kbd."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the kbd."
        }
      ]}
      examples={[
        {
          title: "Sizes",
          description: "Different sizes for the keyboard shortcut.",
          code: `<div className="flex items-center gap-4">
  <NovaKbd size="sm">Cmd</NovaKbd>
  <NovaKbd>Cmd</NovaKbd>
  <NovaKbd size="lg">Cmd</NovaKbd>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaKbd size="sm">Cmd</NovaKbd>
              <NovaKbd>Cmd</NovaKbd>
              <NovaKbd size="lg">Cmd</NovaKbd>
            </div>
          )
        },
        {
          title: "Variants",
          description: "Different visual styles.",
          code: `<div className="flex items-center gap-4">
  <NovaKbd variant="default">Default</NovaKbd>
  <NovaKbd variant="outline">Outline</NovaKbd>
  <NovaKbd variant="ghost">Ghost</NovaKbd>
  <NovaKbd variant="solid">Solid</NovaKbd>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaKbd variant="default">Default</NovaKbd>
              <NovaKbd variant="outline">Outline</NovaKbd>
              <NovaKbd variant="ghost">Ghost</NovaKbd>
              <NovaKbd variant="solid">Solid</NovaKbd>
            </div>
          )
        }
      ]}
    />
  )
}
