"use client"

import { NovaAlert } from "@/components/nova/nova-alert"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Terminal, Waves } from "lucide-react"
import { NovaButton } from "@/components/nova/nova-button"

export default function AlertDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Alert"
      description="Displays a callout for user attention."
      whenToUse={[
        "To display important messages or notifications.",
        "To provide feedback after an action (success, error, warning).",
        "To highlight critical information without interrupting the user flow."
      ]}
      hints={[
        { type: "info", content: "Supports `success`, `warning`, `error`, and `info` status variants." },
        { type: "info", content: "Can be dismissible with `dismissible` prop and `onDismiss` callback." }
      ]}
      preview={
        <div className="flex flex-col gap-4 w-full">
          <NovaAlert>
            <Terminal className="h-4 w-4" />
            <div className="font-medium mb-1">Heads up!</div>
            <div>
              You can add components to your app using the cli.
            </div>
          </NovaAlert>
          <NovaAlert status="success" title="Payment Successful" description="Your payment has been processed successfully." />
          <NovaAlert status="error" title="Error" description="Your session has expired. Please log in again." />
          <NovaAlert status="warning" title="Warning" description="Your account is about to expire." dismissible />
        </div>
      }
      installCommand="npx nova-ui@latest add alert"
      importCode={`import { NovaAlert } from "@/components/nova/nova-alert"`}
      usageCode={`<NovaAlert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</NovaAlert>`}
      props={[
        {
          name: "status",
          type: '"default" | "success" | "warning" | "error" | "info"',
          defaultValue: '"default"',
          description: "Visual status style of the alert.",
        },
        {
          name: "title",
          type: "string",
          description: "The title of the alert.",
        },
        {
          name: "description",
          type: "string",
          description: "The description content of the alert.",
        },
        {
          name: "dismissible",
          type: "boolean",
          defaultValue: "false",
          description: "If true, shows a close button to dismiss the alert.",
        },
        {
          name: "onDismiss",
          type: "() => void",
          description: "Callback function called when the alert is dismissed.",
        },
        {
          name: "animation",
          type: '"none" | "fade" | "slide"',
          defaultValue: '"fade"',
          description: "Animation style when the alert appears.",
        },
      ]}
      examples={[
        {
          title: "Dismissible Alert",
          description: "An alert that can be dismissed by the user.",
          code: `<NovaAlert
  status="info"
  title="New Feature"
  description="Check out the new dashboard view!"
  dismissible
  onDismiss={() => console.log('Dismissed')}
/>`,
          preview: (
            <NovaAlert
              status="info"
              title="New Feature"
              description="Check out the new dashboard view!"
              dismissible
            />
          )
        },
        {
          title: "With Action",
          description: "An alert with an action button.",
          code: `<NovaAlert
  status="warning"
  title="Storage Full"
  description="You are running out of storage space."
  action={<NovaButton size="sm" variant="outline">Upgrade</NovaButton>}
/>`,
          preview: (
            <NovaAlert
              status="warning"
              title="Storage Full"
              description="You are running out of storage space."
              action={<NovaButton size="sm" variant="outline" className="bg-transparent border-yellow-600 text-yellow-800 hover:bg-yellow-100 dark:text-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-900/30">Upgrade</NovaButton>}
            />
          )
        }
      ]}
    />
  )
}
