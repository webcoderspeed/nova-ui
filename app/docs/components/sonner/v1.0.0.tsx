"use client"

import { NovaSonner } from "@/components/nova/nova-sonner"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { toast } from "sonner"

export default function SonnerDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Sonner"
      description="An opinionated toast component for React."
      whenToUse={[
        "To display temporary notifications.",
        "When you need a stackable toast system.",
        "To show success, error, or warning messages."
      ]}
      hints={[
        { type: "info", content: "Uses `sonner` library under the hood." },
        { type: "info", content: "Add `<NovaSonner />` to your root layout." },
        { type: "info", content: "Supports rich colors for success, error, warning, and info states." }
      ]}
      preview={
        <div className="flex flex-col gap-4">
          <NovaSonner />
          <NovaButton
            variant="outline"
            onClick={() =>
              toast("Event has been created", {
                description: "Sunday, December 03, 2023 at 9:00 AM",
                action: {
                  label: "Undo",
                  onClick: () => console.log("Undo"),
                },
              })
            }
          >
            Show Toast
          </NovaButton>
        </div>
      }
      installCommand="npx nova-ui@latest add sonner"
      importCode={`import { NovaSonner } from "@/components/nova/nova-sonner"`}
      usageCode={`// In your layout.tsx
<NovaSonner />

// In your component
import { toast } from "sonner"

toast("Event has been created")`}
      props={[
        {
          name: "theme",
          type: '"light" | "dark" | "system"',
          defaultValue: '"system"',
          description: "Theme of the toast.",
        },
        {
          name: "position",
          type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"',
          defaultValue: '"bottom-right"',
          description: "Position of the toast on the screen.",
        },
        {
          name: "expand",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to expand the toast stack on hover.",
        },
        {
          name: "richColors",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to use rich colors for success, error, warning, and info states.",
        },
      ]}
      examples={[
        {
          title: "Success Toast",
          description: "A success toast notification.",
          code: `toast.success("Event has been created")`,
          preview: (
             <NovaButton
              variant="outline"
              onClick={() => toast.success("Event has been created")}
            >
              Show Success Toast
            </NovaButton>
          )
        },
        {
          title: "Error Toast",
          description: "An error toast notification.",
          code: `toast.error("Something went wrong")`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => toast.error("Something went wrong")}
            >
              Show Error Toast
            </NovaButton>
          )
        },
        {
          title: "Action Toast",
          description: "A toast with an action button.",
          code: `toast("Event has been created", {
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                })
              }
            >
              Show Action Toast
            </NovaButton>
          )
        }
      ]}
    />
  )
}
