"use client"

import { NovaToast, NovaToaster } from "@/components/nova/nova-toast"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { useToast } from "@/components/ui/use-toast"

export default function ToastDocsV1() {
  const { toast } = useToast()

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
        { type: "info", content: "Use `<NovaToaster />` instead of `<Toaster />` to enable custom variants." }
      ]}
      preview={
        <div className="flex flex-col gap-4">
          <NovaToaster />
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
      importCode={`import { NovaToaster } from "@/components/nova/nova-toast"
import { useToast } from "@/components/ui/use-toast"`}
      usageCode={`// In your layout.tsx
<NovaToaster />

// In your component
const { toast } = useToast()

toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
})`}
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
                  variant: "success" as any,
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
                    variant: "glass" as any,
                    title: "Glass Toast",
                    description: "This is a glass toast.",
                    })
                }}
                >
                Show Glass Toast
                </NovaButton>
            </div>
          )
        }
      ]}
    />
  )
}
