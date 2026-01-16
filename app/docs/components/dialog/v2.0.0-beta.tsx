"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Sparkles } from "lucide-react"

export default function DialogDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Dialog"
      description="A modal dialog with V2 features: custom animations, blur backdrop, multiple sizes, and nested dialog support."
      preview={
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Default</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Default Dialog</DialogTitle>
                <DialogDescription>Standard dialog appearance.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Sparkles className="mr-2 h-4 w-4" />
                Animated
              </Button>
            </DialogTrigger>
            <DialogContent className="animate-in zoom-in-95 duration-200">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Animated Dialog
                </DialogTitle>
                <DialogDescription>With custom entry animation.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaDialog } from "@/nova-ui"

// V2 exports additional dialog variants
import { 
  NovaDialog,
  AnimatedDialog,
  FullscreenDialog,
  DrawerDialog 
} from "@/nova-ui"`}
      usageCode={`import { NovaDialog, AnimatedDialog } from "@/nova-ui"

// With custom animation (NEW in v2.0.0)
export function AnimatedExample() {
  return (
    <NovaDialog 
      trigger={<Button>Open</Button>}
      title="Animated Dialog"
      animation="zoom" // slide, fade, zoom, flip
      duration={200}
    >
      <p>Content with custom animation</p>
    </NovaDialog>
  )
}

// Fullscreen dialog (NEW in v2.0.0)
export function FullscreenExample() {
  return (
    <NovaDialog 
      trigger={<Button>Fullscreen</Button>}
      title="Fullscreen"
      size="fullscreen"
    >
      <p>Takes up entire viewport</p>
    </NovaDialog>
  )
}

// With blur backdrop (NEW in v2.0.0)
export function BlurBackdropExample() {
  return (
    <NovaDialog 
      trigger={<Button>Blur</Button>}
      backdropBlur="md"
    >
      <p>Blurred backdrop effect</p>
    </NovaDialog>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
        { name: "modal", type: "boolean", default: "true", description: "Whether dialog is modal" },
        { name: "trigger", type: "ReactNode", description: "Trigger element" },
        { name: "title", type: "string", description: "Dialog title" },
        { name: "description", type: "string", description: "Dialog description" },
        {
          name: "size",
          type: '"sm" | "default" | "lg" | "xl" | "fullscreen"',
          default: '"default"',
          description: "Dialog size (NEW in v2.0.0)",
        },
        {
          name: "animation",
          type: '"none" | "fade" | "slide" | "zoom" | "flip"',
          default: '"fade"',
          description: "Entry animation (NEW in v2.0.0)",
        },
        { name: "duration", type: "number", default: "150", description: "Animation duration in ms (NEW in v2.0.0)" },
        {
          name: "backdropBlur",
          type: '"none" | "sm" | "md" | "lg"',
          default: '"none"',
          description: "Backdrop blur amount (NEW in v2.0.0)",
        },
        {
          name: "preventClose",
          type: "boolean",
          default: "false",
          description: "Prevent closing on overlay click (NEW in v2.0.0)",
        },
      ]}
      examples={[
        {
          title: "Zoom Animation",
          description: "Dialog with zoom entry effect.",
          code: `<NovaDialog 
  trigger={<Button>Zoom</Button>}
  title="Zoom Dialog"
  animation="zoom"
>
  <p>Zooms in when opening.</p>
</NovaDialog>`,
          preview: (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Zoom</Button>
              </DialogTrigger>
              <DialogContent className="animate-in zoom-in-95 duration-200">
                <DialogHeader>
                  <DialogTitle>Zoom Dialog</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">Zooms in when opening.</p>
              </DialogContent>
            </Dialog>
          ),
        },
        {
          title: "Large Size",
          description: "Extra large dialog for more content.",
          code: `<NovaDialog 
  trigger={<Button>Large</Button>}
  title="Large Dialog"
  size="lg"
>
  <p>More space for complex content.</p>
</NovaDialog>`,
          preview: (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Large</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Large Dialog</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">More space for complex content.</p>
              </DialogContent>
            </Dialog>
          ),
        },
        {
          title: "Form with Validation",
          description: "Dialog with form and prevent close.",
          code: `<NovaDialog 
  trigger={<Button>Form</Button>}
  title="Create Account"
  preventClose
>
  <form className="grid gap-4">
    <div className="grid gap-2">
      <Label>Email</Label>
      <Input type="email" required />
    </div>
    <NovaDialog.Footer>
      <Button type="submit">Create</Button>
    </NovaDialog.Footer>
  </form>
</NovaDialog>`,
          preview: (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Form</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label>Email</Label>
                    <Input type="email" />
                  </div>
                </div>
                <DialogFooter>
                  <Button>Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Sheet", href: "/docs/components/sheet" },
        { name: "Drawer", href: "/docs/components/drawer" },
        { name: "Motion Dialog", href: "/docs/nova-extras/motion-dialog" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
