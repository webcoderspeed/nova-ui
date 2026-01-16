"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export default function DrawerPage() {
  return (
    <ComponentDocTemplate
      title="Drawer"
      description="A drawer component for React. Slides in from the edge of the screen. Great for mobile navigation and forms."
      preview={
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>Make changes to your profile here.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  Drawer content goes here. You can add forms, navigation, or any content.
                </p>
              </div>
              <DrawerFooter>
                <Button>Save changes</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      }
      installCommand="npx nova-ui@latest add drawer"
      importCode={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"`}
      usageCode={`import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function MyComponent() {
  return (
    <Drawer>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
        </DrawerHeader>
        <p>Content here</p>
      </DrawerContent>
    </Drawer>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open changes" },
        { name: "shouldScaleBackground", type: "boolean", default: "true", description: "Scale background when open" },
        {
          name: "direction",
          type: '"top" | "bottom" | "left" | "right"',
          default: '"bottom"',
          description: "Drawer direction",
        },
      ]}
      examples={[
        {
          title: "Responsive Dialog",
          description: "Use Drawer on mobile, Dialog on desktop.",
          code: `// Use media query to switch
const isDesktop = useMediaQuery("(min-width: 768px)")

return isDesktop ? (
  <Dialog>...</Dialog>
) : (
  <Drawer>...</Drawer>
)`,
          preview: (
            <Drawer>
              <DrawerTrigger asChild>
                <Button>Open Responsive</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Responsive Modal</DrawerTitle>
                  <DrawerDescription>This adapts to screen size.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Sheet", href: "/docs/components/sheet" },
        { name: "Dialog", href: "/docs/components/dialog" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/drawer.tsx"
    />
  )
}
