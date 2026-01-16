"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SheetPage() {
  return (
    <ComponentDocTemplate
      title="Sheet"
      description="Extends the Dialog component to display content that complements the main content of the screen. Slides in from screen edge."
      preview={
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when done.</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Nova User" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@novaui" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      }
      installCommand="npx nova-ui@latest add sheet"
      importCode={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"`}
      usageCode={`import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
        </SheetHeader>
        <p>Content here</p>
      </SheetContent>
    </Sheet>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open changes" },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"right"',
          description: "Side to slide from",
        },
      ]}
      examples={[
        {
          title: "Left Side",
          description: "Sheet sliding from the left.",
          code: `<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent side="left">
    Left sheet content
  </SheetContent>
</Sheet>`,
          preview: (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Left Sheet</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>Site navigation menu</SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <nav className="space-y-2">
                    <a href="#" className="block p-2 hover:bg-accent rounded">
                      Home
                    </a>
                    <a href="#" className="block p-2 hover:bg-accent rounded">
                      About
                    </a>
                    <a href="#" className="block p-2 hover:bg-accent rounded">
                      Contact
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Dialog", href: "/docs/components/dialog" },
        { name: "Drawer", href: "/docs/components/drawer" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/sheet.tsx"
    />
  )
}
