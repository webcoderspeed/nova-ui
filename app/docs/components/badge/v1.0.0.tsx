"use client"

import * as React from "react"
import { NovaBadge } from "@/components/nova/nova-badge"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Star } from "lucide-react"

export default function BadgeDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      whenToUse={[
        "To highlight status, tags, or counts.",
        "To label items with categories.",
        "To draw attention to specific information."
      ]}
      hints={[
        { type: "info", content: "Supports animations like `pulse`, `bounce`, and `shimmer`." },
        { type: "info", content: "Can be `removable` with an X icon." },
        { type: "info", content: "Includes `dot` variants for status indication." }
      ]}
      preview={
        <div className="flex flex-wrap gap-4">
          <NovaBadge>Default</NovaBadge>
          <NovaBadge variant="secondary">Secondary</NovaBadge>
          <NovaBadge variant="outline">Outline</NovaBadge>
          <NovaBadge variant="destructive">Destructive</NovaBadge>
          <NovaBadge animation="pulse" variant="default">Pulse</NovaBadge>
          <NovaBadge effect="glow" variant="default">Glow</NovaBadge>
        </div>
      }
      installCommand="npx shadcn@latest add badge"
      importCode={`import { NovaBadge } from "@/components/nova/nova-badge"`}
      usageCode={`<NovaBadge>Badge</NovaBadge>`}
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "destructive" | "outline"',
          defaultValue: '"default"',
          description: "Visual style of the badge."
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the badge."
        },
        {
          name: "animation",
          type: '"none" | "pulse" | "bounce" | "shimmer"',
          defaultValue: '"none"',
          description: "Animation effect."
        },
        {
          name: "effect",
          type: '"none" | "glow"',
          defaultValue: '"none"',
          description: "Visual effect like glow."
        },
        {
          name: "rounded",
          type: '"default" | "full" | "none"',
          defaultValue: '"default"',
          description: "Border radius style."
        },
        {
          name: "removable",
          type: "boolean",
          defaultValue: "false",
          description: "Whether the badge shows a remove button."
        },
        {
          name: "dot",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to show a status dot."
        }
      ]}
      examples={[
        {
          title: "Animations",
          description: "Badges with different animations.",
          code: `<div className="flex flex-wrap gap-4">
  <NovaBadge animation="pulse">Pulse</NovaBadge>
  <NovaBadge animation="bounce">Bounce</NovaBadge>
  <NovaBadge animation="shimmer" variant="secondary">Shimmer</NovaBadge>
</div>`,
          preview: (
            <div className="flex flex-wrap gap-4">
              <NovaBadge animation="pulse">Pulse</NovaBadge>
              <NovaBadge animation="bounce">Bounce</NovaBadge>
              <NovaBadge animation="shimmer" variant="secondary">Shimmer</NovaBadge>
            </div>
          )
        },
        {
          title: "Features",
          description: "Badges with icons, dots, and remove buttons.",
          code: `<div className="flex flex-wrap gap-4">
  <NovaBadge dot dotColor="bg-green-500">Online</NovaBadge>
  <NovaBadge icon={<Star className="h-3 w-3" />}>Featured</NovaBadge>
  <NovaBadge removable onRemove={() => alert("Removed")}>Removable</NovaBadge>
  <NovaBadge rounded="full">Pill</NovaBadge>
</div>`,
          preview: (
            <div className="flex flex-wrap gap-4">
              <NovaBadge dot dotColor="bg-green-500">Online</NovaBadge>
              <NovaBadge icon={<Star className="h-3 w-3" />}>Featured</NovaBadge>
              <NovaBadge removable onRemove={() => alert("Removed")}>Removable</NovaBadge>
              <NovaBadge rounded="full">Pill</NovaBadge>
            </div>
          )
        }
      ]}
    />
  )
}
