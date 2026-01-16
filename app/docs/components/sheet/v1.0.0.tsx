"use client"

import {
  NovaSheet,
  NovaSheetTrigger,
  NovaSheetContent,
  NovaSheetHeader,
  NovaSheetFooter,
  NovaSheetTitle,
  NovaSheetDescription,
  NovaSheetClose,
} from "@/components/nova/nova-sheet"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import { Label } from "@/components/ui/label"

export default function SheetDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main screen."
      whenToUse={[
        "For sidebars or navigation drawers.",
        "To edit profiles or settings without leaving the page.",
        "When you need more space than a dialog but want to maintain context."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `solid` variants." },
        { type: "info", content: "Available in multiple sizes: `sm`, `default`, `lg`, `xl`, `full`." },
        { type: "info", content: "Can be positioned on any side (default is right)." }
      ]}
      preview={
        <NovaSheet>
          <NovaSheetTrigger asChild>
            <NovaButton variant="outline">Open Sheet</NovaButton>
          </NovaSheetTrigger>
          <NovaSheetContent>
            <NovaSheetHeader>
              <NovaSheetTitle>Edit profile</NovaSheetTitle>
              <NovaSheetDescription>
                Make changes to your profile here. Click save when you're done.
              </NovaSheetDescription>
            </NovaSheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <NovaInput id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <NovaInput id="username" defaultValue="@peduarte" className="col-span-3" />
              </div>
            </div>
            <NovaSheetFooter>
              <NovaSheetClose asChild>
                <NovaButton type="submit">Save changes</NovaButton>
              </NovaSheetClose>
            </NovaSheetFooter>
          </NovaSheetContent>
        </NovaSheet>
      }
      installCommand="npx nova-ui@latest add sheet"
      importCode={`import {
  NovaSheet,
  NovaSheetTrigger,
  NovaSheetContent,
  NovaSheetHeader,
  NovaSheetFooter,
  NovaSheetTitle,
  NovaSheetDescription,
  NovaSheetClose,
} from "@/components/nova/nova-sheet"`}
      usageCode={`<NovaSheet>
  <NovaSheetTrigger>Open</NovaSheetTrigger>
  <NovaSheetContent>
    <NovaSheetHeader>
      <NovaSheetTitle>Are you absolutely sure?</NovaSheetTitle>
      <NovaSheetDescription>This action cannot be undone.</NovaSheetDescription>
    </NovaSheetHeader>
    <NovaSheetFooter>
      <NovaSheetClose>
        <NovaButton>Save changes</NovaButton>
      </NovaSheetClose>
    </NovaSheetFooter>
  </NovaSheetContent>
</NovaSheet>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "solid"',
          defaultValue: '"default"',
          description: "Visual style of the sheet content.",
        },
        {
          name: "sheetSize",
          type: '"default" | "sm" | "lg" | "xl" | "full"',
          defaultValue: '"default"',
          description: "Width of the sheet.",
        },
        {
          name: "side",
          type: '"top" | "bottom" | "left" | "right"',
          defaultValue: '"right"',
          description: "The side of the screen the sheet appears from.",
        },
        {
          name: "glass",
          type: "boolean",
          defaultValue: "false",
          description: "Shorthand to enable glassmorphism effect.",
        },
      ]}
      examples={[
        {
          title: "Glass Sheet",
          description: "A sheet with a glassmorphism effect.",
          code: `<NovaSheet>
  <NovaSheetTrigger>Open Glass Sheet</NovaSheetTrigger>
  <NovaSheetContent variant="glass">
    {/* ... content ... */}
  </NovaSheetContent>
</NovaSheet>`,
          preview: (
            <div className="p-8 bg-linear-to-r from-emerald-500 to-teal-500 rounded-lg flex justify-center">
                <NovaSheet>
                <NovaSheetTrigger asChild>
                    <NovaButton variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white">
                    Open Glass Sheet
                    </NovaButton>
                </NovaSheetTrigger>
                <NovaSheetContent variant="glass">
                    <NovaSheetHeader>
                    <NovaSheetTitle>Glass Effect</NovaSheetTitle>
                    <NovaSheetDescription>This sheet uses backdrop-filter to create a frosted glass effect.</NovaSheetDescription>
                    </NovaSheetHeader>
                    <div className="py-4">
                        Content goes here...
                    </div>
                    <NovaSheetFooter>
                    <NovaSheetClose asChild>
                        <NovaButton>Close</NovaButton>
                    </NovaSheetClose>
                    </NovaSheetFooter>
                </NovaSheetContent>
                </NovaSheet>
            </div>
          )
        }
      ]}
    />
  )
}
