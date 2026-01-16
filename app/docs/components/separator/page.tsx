"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Separator } from "@/components/ui/separator"

export default function SeparatorPage() {
  return (
    <ComponentDocTemplate
      title="Separator"
      description="Visually or semantically separates content. Can be horizontal or vertical."
      preview={
        <div>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Nova.UI</h4>
            <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add separator"
      importCode={`import { Separator } from "@/components/ui/separator"`}
      usageCode={`import { Separator } from "@/components/ui/separator"

export function MyComponent() {
  return (
    <div>
      <p>Content above</p>
      <Separator className="my-4" />
      <p>Content below</p>
    </div>
  )
}`}
      props={[
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Separator direction",
        },
        { name: "decorative", type: "boolean", description: "Whether purely decorative" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Vertical",
          description: "Vertical separator between inline items.",
          code: `<div className="flex h-5 items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
  <Separator orientation="vertical" />
  <div>Item 3</div>
</div>`,
          preview: (
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Home</div>
              <Separator orientation="vertical" />
              <div>About</div>
              <Separator orientation="vertical" />
              <div>Contact</div>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Card", href: "/docs/components/card" },
        { name: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/separator.tsx"
    />
  )
}
