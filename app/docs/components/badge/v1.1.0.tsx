"use client"

import { Badge } from "@/components/ui/badge"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { X } from "lucide-react"

export default function BadgeDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Badge"
      description="Displays a badge with enhanced features including dismissible and icon support."
      preview={
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge className="gap-1">
            Dismissible
            <button className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5">
              <X className="h-3 w-3" />
            </button>
          </Badge>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaBadge } from "@/nova-ui"

// Or base badge
import { Badge } from "@/nova-ui/badge"`}
      usageCode={`import { NovaBadge } from "@/nova-ui"

// Basic usage
export function BasicBadge() {
  return <NovaBadge>New</NovaBadge>
}

// Dismissible badge (NEW in v1.1.0)
export function DismissibleBadge() {
  return (
    <NovaBadge 
      dismissible 
      onDismiss={() => console.log("dismissed")}
    >
      Tag
    </NovaBadge>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "outline" | "destructive"',
          default: '"default"',
          description: "Badge variant",
        },
        {
          name: "dismissible",
          type: "boolean",
          default: "false",
          description: "Show dismiss button (NEW in v1.1.0)",
        },
        { name: "onDismiss", type: "() => void", description: "Callback on dismiss (NEW in v1.1.0)" },
        { name: "icon", type: "ReactNode", description: "Left icon (NEW in v1.1.0)" },
      ]}
      examples={[
        {
          title: "Dismissible",
          description: "Badge with close button.",
          code: `<NovaBadge dismissible onDismiss={() => {}}>
  Dismissible Tag
</NovaBadge>`,
          preview: (
            <Badge className="gap-1">
              Dismissible Tag
              <button className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ),
        },
        {
          title: "All Variants",
          description: "Available badge variants.",
          code: `<div className="flex gap-2">
  <NovaBadge>Default</NovaBadge>
  <NovaBadge variant="secondary">Secondary</NovaBadge>
  <NovaBadge variant="outline">Outline</NovaBadge>
  <NovaBadge variant="destructive">Destructive</NovaBadge>
</div>`,
          preview: (
            <div className="flex gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Button", href: "/docs/components/button" },
        { name: "Shimmer Badge", href: "/docs/nova-extras/shimmer-badge" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
