"use client"

import { NovaSeparator } from "@/components/nova/nova-separator"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SeparatorDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Separator"
      description="Visually or semantically separates content."
      whenToUse={[
        "To divide sections of content.",
        "To separate items in a list or menu.",
        "When you need a visual break in a layout."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaSeparator extends the base component with `variant` (dashed, dotted, glass, gradient) and `size` (thick, heavy) props for more styling flexibility."
        }
      ]}
      preview={
        <div className="w-full max-w-md">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Nova UI</h4>
            <p className="text-sm text-muted-foreground">
              A modern, accessible component library.
            </p>
          </div>
          <NovaSeparator className="my-4" variant="gradient" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Docs</div>
            <NovaSeparator orientation="vertical" variant="glass" />
            <div>Source</div>
            <NovaSeparator orientation="vertical" variant="glass" />
            <div>Changelog</div>
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add separator"
      importCode={`import { NovaSeparator } from "@/components/nova/nova-separator"`}
      usageCode={`import { NovaSeparator } from "@/components/nova/nova-separator"

export function SeparatorDemo() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <NovaSeparator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <NovaSeparator orientation="vertical" />
        <div>Docs</div>
        <NovaSeparator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "gradient" | "glow" | "dashed" | "dotted"',
          defaultValue: '"default"',
          description: "Visual style of the separator.",
        },
        {
          name: "size",
          type: '"default" | "thick" | "heavy"',
          defaultValue: '"default"',
          description: "Thickness of the separator.",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          defaultValue: '"horizontal"',
          description: "Orientation of the separator.",
        },
      ]}
      examples={[
        {
          title: "Dashed Variant",
          description: "A dashed line separator.",
          code: `<NovaSeparator className="my-4" variant="dashed" />`,
          preview: (
            <div className="w-full max-w-xs">
              <div>Above</div>
              <NovaSeparator className="my-4" variant="dashed" />
              <div>Below</div>
            </div>
          )
        },
        {
          title: "Thick Gradient",
          description: "A thick separator with a gradient background.",
          code: `<NovaSeparator className="my-4" variant="gradient" size="heavy" />`,
          preview: (
            <div className="w-full max-w-xs">
              <div>Section A</div>
              <NovaSeparator className="my-4" variant="gradient" size="heavy" />
              <div>Section B</div>
            </div>
          )
        }
      ]}
    />
  )
}
