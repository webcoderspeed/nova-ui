"use client"

import { Button } from "@/components/ui/button"
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

export default function DialogDocsV1() {
  return (
    <ComponentDocTemplate
      title="Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
      preview={
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>This is a basic dialog description.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/nova-ui/dialog"`}
      usageCode={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/nova-ui/dialog"

export function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Action</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
        { name: "modal", type: "boolean", default: "true", description: "Whether dialog is modal" },
      ]}
      examples={[
        {
          title: "Basic Dialog",
          description: "Simple dialog with title and description.",
          code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Continue</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
          preview: (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>This action cannot be undone.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Sheet", href: "/docs/components/sheet" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
