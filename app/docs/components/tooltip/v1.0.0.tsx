"use client"

import { NovaTooltip } from "@/components/nova/nova-tooltip"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { Plus } from "lucide-react"

export default function TooltipDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Tooltip"
      description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
      whenToUse={[
        "To provide extra information about an icon or button.",
        "When space is limited.",
        "To explain an action before the user takes it."
      ]}
      hints={[
        { type: "info", content: "Simplified API wraps `TooltipProvider`, `Tooltip`, `TooltipTrigger`, and `TooltipContent`." },
        { type: "info", content: "Supports `light` and `dark` variants." },
        { type: "info", content: "Can be positioned on any side." }
      ]}
      preview={
        <NovaTooltip content="Add to library">
          <NovaButton variant="outline" size="icon">
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </NovaButton>
        </NovaTooltip>
      }
      installCommand="npx nova-ui@latest add tooltip"
      importCode={`import { NovaTooltip } from "@/components/nova/nova-tooltip"`}
      usageCode={`<NovaTooltip content="Add to library">
  <NovaButton variant="outline">Hover me</NovaButton>
</NovaTooltip>`}
      props={[
        {
          name: "content",
          type: "ReactNode",
          defaultValue: "undefined",
          description: "The content to display in the tooltip.",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          defaultValue: '"top"',
          description: "The side of the trigger the tooltip should appear.",
        },
        {
          name: "variant",
          type: '"default" | "light" | "dark"',
          defaultValue: '"default"',
          description: "Visual style of the tooltip.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the tooltip text and padding.",
        },
        {
          name: "delayDuration",
          type: "number",
          defaultValue: "200",
          description: "Delay in milliseconds before showing the tooltip.",
        },
      ]}
      examples={[
        {
          title: "Variants",
          description: "Light and Dark variants.",
          code: `<div className="flex gap-4">
  <NovaTooltip content="Light Mode" variant="light">
    <NovaButton variant="outline">Light</NovaButton>
  </NovaTooltip>
  <NovaTooltip content="Dark Mode" variant="dark">
    <NovaButton variant="outline">Dark</NovaButton>
  </NovaTooltip>
</div>`,
          preview: (
            <div className="flex gap-4">
              <NovaTooltip content="Light Mode" variant="light">
                <NovaButton variant="outline">Light</NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Dark Mode" variant="dark">
                <NovaButton variant="outline">Dark</NovaButton>
              </NovaTooltip>
            </div>
          )
        },
        {
          title: "Positions",
          description: "Tooltips can be positioned on any side.",
          code: `<div className="flex gap-4">
  <NovaTooltip content="Top" side="top">
    <NovaButton variant="outline">Top</NovaButton>
  </NovaTooltip>
  <NovaTooltip content="Right" side="right">
    <NovaButton variant="outline">Right</NovaButton>
  </NovaTooltip>
  <NovaTooltip content="Bottom" side="bottom">
    <NovaButton variant="outline">Bottom</NovaButton>
  </NovaTooltip>
  <NovaTooltip content="Left" side="left">
    <NovaButton variant="outline">Left</NovaButton>
  </NovaTooltip>
</div>`,
          preview: (
            <div className="flex gap-4">
              <NovaTooltip content="Top" side="top">
                <NovaButton variant="outline">Top</NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Right" side="right">
                <NovaButton variant="outline">Right</NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Bottom" side="bottom">
                <NovaButton variant="outline">Bottom</NovaButton>
              </NovaTooltip>
              <NovaTooltip content="Left" side="left">
                <NovaButton variant="outline">Left</NovaButton>
              </NovaTooltip>
            </div>
          )
        }
      ]}
    />
  )
}
