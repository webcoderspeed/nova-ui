"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { useNovaToast } from "@/hooks/nova"
import { ToastAction } from "@/components/ui/toast"

export default function ToastDocsV1() {
  const { toast } = useNovaToast()

  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Toast"
      description="A succinct message that is displayed temporarily."
      whenToUse={[
        "To provide feedback after a user action.",
        "To display system messages that don't require user interaction.",
        "When you need a notification that disappears automatically."
      ]}
      hints={[
        { type: "info", content: "Supports `success`, `warning`, `info`, `glass`, and `gradient` variants." },
        { type: "info", content: "Use `useNovaToast` hook to trigger toasts with custom variants." }
      ]}
      preview={
        <div className="flex flex-col gap-4">
          <NovaButton
            variant="outline"
            onClick={() => {
              toast({
                title: "Scheduled: Catch up",
                description: "Friday, February 10, 2023 at 5:57 PM",
              })
            }}
          >
            Show Toast
          </NovaButton>
        </div>
      }
      installCommand="npx nova-ui@latest add toast"
      importCode={`import { NovaToast } from "@/components/nova/nova-toast"
import { useNovaToast } from "@/hooks/nova"`}
      usageCode={`// In your layout.tsx
<NovaToaster />

// In your component
import { useNovaToast } from "@/hooks/nova"

export function MyComponent() {
  const { toast } = useNovaToast()

  return (
    <button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}
    >
      Show Toast
    </button>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "success" | "warning" | "info" | "glass" | "gradient"',
          defaultValue: '"default"',
          description: "Visual style of the toast.",
        },
        {
          name: "title",
          type: "string",
          description: "The title of the toast.",
        },
        {
          name: "description",
          type: "string",
          description: "The description content of the toast.",
        },
        {
          name: "action",
          type: "ToastAction",
          description: "An action button for the toast.",
        },
      ]}
      examples={[
        {
          title: "Success Variant",
          description: "A toast indicating a successful action.",
          code: `toast({
  variant: "success",
  title: "Success!",
  description: "Your changes have been saved.",
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  variant: "success",
                  title: "Success!",
                  description: "Your changes have been saved.",
                })
              }}
            >
              Show Success Toast
            </NovaButton>
          )
        },
        {
          title: "Warning Variant",
          description: "A toast indicating a warning state.",
          code: `toast({
  variant: "warning",
  title: "Warning!",
  description: "This action cannot be undone.",
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  variant: "warning",
                  title: "Warning!",
                  description: "This action cannot be undone.",
                })
              }}
            >
              Show Warning Toast
            </NovaButton>
          )
        },
        {
          title: "Info Variant",
          description: "A toast for informational messages.",
          code: `toast({
  variant: "info",
  title: "Info",
  description: "A new version is available.",
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  variant: "info",
                  title: "Info",
                  description: "A new version is available.",
                })
              }}
            >
              Show Info Toast
            </NovaButton>
          )
        },
        {
          title: "Destructive Variant",
          description: "A toast indicating a destructive action or error.",
          code: `toast({
  variant: "destructive",
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your request.",
                })
              }}
            >
              Show Destructive Toast
            </NovaButton>
          )
        },
        {
          title: "Glass Variant",
          description: "A toast with a glassmorphism effect.",
          code: `toast({
  variant: "glass",
  title: "Glass Toast",
  description: "This is a glass toast.",
})`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <NovaButton
                variant="outline"
                className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white"
                onClick={() => {
                    toast({
                    variant: "glass",
                    title: "Glass Toast",
                    description: "This is a glass toast.",
                    })
                }}
                >
                Show Glass Toast
                </NovaButton>
            </div>
          )
        },
        {
          title: "Gradient Variant",
          description: "A toast with a gradient background.",
          code: `toast({
  variant: "gradient",
  title: "Gradient Toast",
  description: "This is a gradient toast.",
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  variant: "gradient",
                  title: "Gradient Toast",
                  description: "This is a gradient toast.",
                })
              }}
            >
              Show Gradient Toast
            </NovaButton>
          )
        },
        {
          title: "With Action",
          description: "A toast with an action button.",
          code: `toast({
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
  action: <ToastAction altText="Try again">Try again</ToastAction>,
})`,
          preview: (
            <NovaButton
              variant="outline"
              onClick={() => {
                toast({
                  title: "Uh oh! Something went wrong.",
                  description: "There was a problem with your request.",
                  action: <ToastAction altText="Try again">Try again</ToastAction>,
                })
              }}
            >
              Show Toast with Action
            </NovaButton>
          )
        }
      ]}
    />
  )
}