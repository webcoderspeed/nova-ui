"use client"

import {
  NovaAlertDialog,
  NovaAlertDialogAction,
  NovaAlertDialogCancel,
  NovaAlertDialogContent,
  NovaAlertDialogDescription,
  NovaAlertDialogFooter,
  NovaAlertDialogHeader,
  NovaAlertDialogTitle,
  NovaAlertDialogTrigger,
} from "@/components/nova/nova-alert-dialog"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"

export default function AlertDialogDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
      whenToUse={[
        "To confirm actions that are destructive or irreversible.",
        "To display urgent information that requires user acknowledgement.",
        "When you need to stop the user workflow until a decision is made."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `gradient` variants on `NovaAlertDialogContent`." },
        { type: "info", content: "Use `NovaAlertDialogAction` and `NovaAlertDialogCancel` for footer buttons." }
      ]}
      preview={
        <NovaAlertDialog>
          <NovaAlertDialogTrigger asChild>
            <NovaButton variant="outline">Show Alert Dialog</NovaButton>
          </NovaAlertDialogTrigger>
          <NovaAlertDialogContent>
            <NovaAlertDialogHeader>
              <NovaAlertDialogTitle>Are you absolutely sure?</NovaAlertDialogTitle>
              <NovaAlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </NovaAlertDialogDescription>
            </NovaAlertDialogHeader>
            <NovaAlertDialogFooter>
              <NovaAlertDialogCancel>Cancel</NovaAlertDialogCancel>
              <NovaAlertDialogAction>Continue</NovaAlertDialogAction>
            </NovaAlertDialogFooter>
          </NovaAlertDialogContent>
        </NovaAlertDialog>
      }
      installCommand="npx nova-ui@latest add alert-dialog"
      importCode={`import {
  NovaAlertDialog,
  NovaAlertDialogAction,
  NovaAlertDialogCancel,
  NovaAlertDialogContent,
  NovaAlertDialogDescription,
  NovaAlertDialogFooter,
  NovaAlertDialogHeader,
  NovaAlertDialogTitle,
  NovaAlertDialogTrigger,
} from "@/components/nova/nova-alert-dialog"`}
      usageCode={`<NovaAlertDialog>
  <NovaAlertDialogTrigger>Open</NovaAlertDialogTrigger>
  <NovaAlertDialogContent>
    <NovaAlertDialogHeader>
      <NovaAlertDialogTitle>Are you sure?</NovaAlertDialogTitle>
      <NovaAlertDialogDescription>
        This action cannot be undone.
      </NovaAlertDialogDescription>
    </NovaAlertDialogHeader>
    <NovaAlertDialogFooter>
      <NovaAlertDialogCancel>Cancel</NovaAlertDialogCancel>
      <NovaAlertDialogAction>Continue</NovaAlertDialogAction>
    </NovaAlertDialogFooter>
  </NovaAlertDialogContent>
</NovaAlertDialog>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "gradient"',
          defaultValue: '"default"',
          description: "Visual style of the alert dialog content.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "An alert dialog with a glassmorphism effect.",
          code: `<NovaAlertDialog>
  <NovaAlertDialogTrigger>Show Glass Alert</NovaAlertDialogTrigger>
  <NovaAlertDialogContent variant="glass">
    {/* ... content ... */}
  </NovaAlertDialogContent>
</NovaAlertDialog>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <NovaAlertDialog>
                <NovaAlertDialogTrigger asChild>
                    <NovaButton variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white">
                    Show Glass Alert
                    </NovaButton>
                </NovaAlertDialogTrigger>
                <NovaAlertDialogContent variant="glass">
                    <NovaAlertDialogHeader>
                    <NovaAlertDialogTitle>Glass Effect</NovaAlertDialogTitle>
                    <NovaAlertDialogDescription>
                        This alert dialog uses a backdrop blur and transparency.
                    </NovaAlertDialogDescription>
                    </NovaAlertDialogHeader>
                    <NovaAlertDialogFooter>
                    <NovaAlertDialogCancel className="bg-white/10 hover:bg-white/20 border-white/20">Cancel</NovaAlertDialogCancel>
                    <NovaAlertDialogAction className="bg-white/20 hover:bg-white/30 text-white">Continue</NovaAlertDialogAction>
                    </NovaAlertDialogFooter>
                </NovaAlertDialogContent>
                </NovaAlertDialog>
            </div>
          )
        }
      ]}
    />
  )
}
