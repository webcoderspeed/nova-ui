"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PopoverPage() {
  return (
    <ComponentDocTemplate
      title="Popover"
      description="Displays rich content in a portal, triggered by a button. For floating forms, menus, and more."
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      }
      installCommand="npx nova-ui@latest add popover"
      importCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"`}
      usageCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function MyComponent() {
  return (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open changes" },
        { name: "modal", type: "boolean", default: "false", description: "Render as modal" },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "Preferred side",
        },
        { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Preferred alignment" },
      ]}
      examples={[
        {
          title: "Form in Popover",
          description: "Embed a form inside a popover.",
          code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Edit</Button>
  </PopoverTrigger>
  <PopoverContent>
    <form>
      <Label>Name</Label>
      <Input />
      <Button type="submit">Save</Button>
    </form>
  </PopoverContent>
</Popover>`,
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </PopoverTrigger>
              <PopoverContent className="w-60">
                <div className="grid gap-3">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Nova User" />
                  <Button size="sm">Save</Button>
                </div>
              </PopoverContent>
            </Popover>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Tooltip", href: "/docs/components/tooltip" },
        { name: "Hover Card", href: "/docs/components/hover-card" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/popover.tsx"
    />
  )
}
