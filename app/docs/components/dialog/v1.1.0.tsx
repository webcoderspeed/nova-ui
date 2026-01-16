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

export default function DialogDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Dialog"
      description="A modal dialog that interrupts the user with important content. Enhanced with better accessibility and form support."
      preview={
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
              <DialogDescription>Make changes to your profile here.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" defaultValue="John Doe" className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaDialog } from "@/nova-ui"

// Or individual components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/nova-ui/dialog"`}
      usageCode={`import { NovaDialog } from "@/nova-ui"

// Using NovaDialog wrapper (NEW in v1.1.0)
export function EditProfile() {
  return (
    <NovaDialog 
      trigger={<Button>Edit Profile</Button>}
      title="Edit Profile"
      description="Make changes to your profile."
    >
      <form>
        <Input placeholder="Name" />
        <NovaDialog.Footer>
          <NovaDialog.Close asChild>
            <Button variant="outline">Cancel</Button>
          </NovaDialog.Close>
          <Button type="submit">Save</Button>
        </NovaDialog.Footer>
      </form>
    </NovaDialog>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "(open: boolean) => void", description: "Callback when open state changes" },
        { name: "modal", type: "boolean", default: "true", description: "Whether dialog is modal" },
        { name: "trigger", type: "ReactNode", description: "Trigger element (NEW in v1.1.0)" },
        { name: "title", type: "string", description: "Dialog title (NEW in v1.1.0)" },
        { name: "description", type: "string", description: "Dialog description (NEW in v1.1.0)" },
      ]}
      examples={[
        {
          title: "Form Dialog",
          description: "Dialog with a form inside.",
          code: `<NovaDialog 
  trigger={<Button>Edit</Button>}
  title="Edit Profile"
  description="Update your information."
>
  <div className="grid gap-4 py-4">
    <div className="grid gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" />
    </div>
  </div>
  <NovaDialog.Footer>
    <Button>Save</Button>
  </NovaDialog.Footer>
</NovaDialog>`,
          preview: (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>Update your information.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name-ex">Name</Label>
                    <Input id="name-ex" />
                  </div>
                </div>
                <DialogFooter>
                  <Button>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Sheet", href: "/docs/components/sheet" },
        { name: "Motion Dialog", href: "/docs/nova-extras/motion-dialog" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
