"use client"

import { Badge } from "@/components/ui/badge"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function BadgeDocsV1() {
  return (
    <ComponentDocTemplate
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      preview={
        <div className="flex gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Badge } from "@/nova-ui/badge"`}
      usageCode={`import { Badge } from "@/nova-ui/badge"

export function MyBadge() {
  return <Badge>New</Badge>
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "outline" | "destructive"',
          default: '"default"',
          description: "Badge variant",
        },
      ]}
      examples={[
        {
          title: "Variants",
          description: "All badge variants.",
          code: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>`,
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
      relatedComponents={[{ name: "Button", href: "/docs/components/button" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
