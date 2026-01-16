"use client"

import { NovaDialog, NovaConfirmDialog } from "@/components/nova/nova-dialog"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import { Label } from "@/components/ui/label"

export default function DialogDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Dialog"
      description="A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."
      whenToUse={[
        "To display content that requires user interaction without leaving the current page.",
        "To create forms, settings panels, or confirmation screens.",
        "When you need to focus the user's attention on a specific task."
      ]}
      hints={[
        { type: "info", content: "Supports `slide`, `scale`, and `fade` animations." },
        { type: "info", content: "Configurable `size` (sm, md, lg, xl, full) and `position` (center, top, bottom)." },
        { type: "info", content: "Includes a `NovaConfirmDialog` shorthand for quick confirmations." }
      ]}
      preview={
        <NovaDialog
          trigger={<NovaButton variant="outline">Edit Profile</NovaButton>}
          title="Edit profile"
          description="Make changes to your profile here. Click save when you're done."
          footer={<NovaButton type="submit">Save changes</NovaButton>}
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <NovaInput
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <NovaInput
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
        </NovaDialog>
      }
      installCommand="npx nova-ui@latest add dialog"
      importCode={`import { NovaDialog, NovaConfirmDialog } from "@/components/nova/nova-dialog"`}
      usageCode={`<NovaDialog
  trigger={<Button>Open Dialog</Button>}
  title="Dialog Title"
  description="Dialog Description"
  footer={<Button>Action</Button>}
>
  <p>Dialog Content</p>
</NovaDialog>`}
      props={[
        {
          name: "trigger",
          type: "React.ReactNode",
          description: "Element that opens the dialog when clicked.",
        },
        {
          name: "title",
          type: "string",
          description: "Title of the dialog.",
        },
        {
          name: "description",
          type: "string",
          description: "Description of the dialog.",
        },
        {
          name: "footer",
          type: "React.ReactNode",
          description: "Content to display in the footer.",
        },
        {
          name: "showClose",
          type: "boolean",
          defaultValue: "true",
          description: "Whether to show the close button.",
        },
        {
          name: "animation",
          type: '"default" | "slide" | "scale" | "fade"',
          defaultValue: '"default"',
          description: "Animation style when opening/closing.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | "full"',
          defaultValue: '"md"',
          description: "Width of the dialog.",
        },
        {
          name: "position",
          type: '"center" | "top" | "bottom"',
          defaultValue: '"center"',
          description: "Position of the dialog on the screen.",
        },
      ]}
      examples={[
        {
          title: "Confirm Dialog",
          description: "A pre-configured dialog for confirmations.",
          code: `<NovaConfirmDialog
  trigger={<NovaButton variant="destructive">Delete Account</NovaButton>}
  title="Are you sure?"
  description="This action cannot be undone."
  confirmText="Delete"
  destructive
  onConfirm={() => console.log('Deleted')}
/>`,
          preview: (
            <NovaConfirmDialog
              trigger={<NovaButton variant="destructive">Delete Account</NovaButton>}
              title="Are you sure?"
              description="This action cannot be undone."
              confirmText="Delete"
              destructive
              onConfirm={() => console.log('Deleted')}
            />
          )
        },
        {
          title: "Full Size Dialog",
          description: "A dialog that takes up the full screen.",
          code: `<NovaDialog
  size="full"
  trigger={<NovaButton variant="outline">Open Full Screen</NovaButton>}
  title="Full Screen Dialog"
>
  <div className="h-full flex items-center justify-center">
    Content goes here
  </div>
</NovaDialog>`,
          preview: (
            <NovaDialog
              size="full"
              trigger={<NovaButton variant="outline">Open Full Screen</NovaButton>}
              title="Full Screen Dialog"
              description="This dialog takes up the entire screen."
              footer={<NovaButton>Close</NovaButton>}
            >
              <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed">
                Content goes here
              </div>
            </NovaDialog>
          )
        }
      ]}
    />
  )
}
