"use client"

import {
  NovaPopover,
  NovaPopoverTrigger,
  NovaPopoverContent,
} from "@/components/nova/nova-popover"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import { Label } from "@/components/ui/label"
import { Settings2 } from "lucide-react"

export default function PopoverDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
      whenToUse={[
        "To display settings or filters.",
        "For complex content that doesn't fit in a tooltip.",
        "When you want to show additional details on click."
      ]}
      hints={[
        { type: "info", content: "Supports `glass`, `glow`, and `minimal` variants." },
        { type: "info", content: "Built on top of Radix UI Popover." }
      ]}
      preview={
        <NovaPopover>
          <NovaPopoverTrigger asChild>
            <NovaButton variant="outline" className="w-10 rounded-full p-0">
              <Settings2 className="h-4 w-4" />
              <span className="sr-only">Open popover</span>
            </NovaButton>
          </NovaPopoverTrigger>
          <NovaPopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <NovaInput
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <NovaInput
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <NovaInput
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <NovaInput
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8"
                  />
                </div>
              </div>
            </div>
          </NovaPopoverContent>
        </NovaPopover>
      }
      installCommand="npx nova-ui@latest add popover"
      importCode={`import {
  NovaPopover,
  NovaPopoverTrigger,
  NovaPopoverContent,
} from "@/components/nova/nova-popover"`}
      usageCode={`<NovaPopover>
  <NovaPopoverTrigger>Open</NovaPopoverTrigger>
  <NovaPopoverContent>
    Place content for the popover here.
  </NovaPopoverContent>
</NovaPopover>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "glow" | "minimal"',
          defaultValue: '"default"',
          description: "Visual style of the popover content.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A popover with a glassmorphism effect.",
          code: `<NovaPopover>
  <NovaPopoverTrigger>Open Glass Popover</NovaPopoverTrigger>
  <NovaPopoverContent variant="glass">
    {/* ... content ... */}
  </NovaPopoverContent>
</NovaPopover>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex justify-center">
                <NovaPopover>
                <NovaPopoverTrigger asChild>
                    <NovaButton variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white">
                    Open Glass Popover
                    </NovaButton>
                </NovaPopoverTrigger>
                <NovaPopoverContent variant="glass" className="w-80">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Glass Effect</h4>
                        <p className="text-sm text-muted-foreground">
                        This popover uses backdrop-filter to create a frosted glass effect.
                        </p>
                    </div>
                </NovaPopoverContent>
                </NovaPopover>
            </div>
          )
        }
      ]}
    />
  )
}
