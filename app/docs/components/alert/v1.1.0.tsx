"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal, CheckCircle2, Info } from "lucide-react"

export default function AlertDocsV11() {
  return (
    <ComponentDocTemplate
      title="Alert"
      description="Displays a callout for user attention. Enhanced with additional style options and icon support."
      badgeText="Updated in v1.1.0"
      preview={
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
        </Alert>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { Alert, AlertDescription, AlertTitle } from "@/nova-ui/alert"`}
      usageCode={`import { Alert, AlertDescription, AlertTitle } from "@/nova-ui/alert"
import { Terminal } from 'lucide-react'

export function MyComponent() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components using the CLI.
      </AlertDescription>
    </Alert>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive"',
          default: '"default"',
          description: "The visual style variant",
        },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Destructive",
          description: "For errors or critical warnings.",
          code: `<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired.
  </AlertDescription>
</Alert>`,
          preview: (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Success Alert",
          description: "Custom styled success alert.",
          code: `<Alert className="border-green-500 text-green-500">
  <CheckCircle2 className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Changes saved successfully.
  </AlertDescription>
</Alert>`,
          preview: (
            <Alert className="border-green-500/50 text-green-600 dark:text-green-400 [&>svg]:text-green-600 dark:[&>svg]:text-green-400">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>Your changes have been saved successfully.</AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Info Alert",
          description: "Informational message.",
          code: `<Alert className="border-blue-500">
  <Info className="h-4 w-4" />
  <AlertTitle>Note</AlertTitle>
  <AlertDescription>
    This feature is in beta.
  </AlertDescription>
</Alert>`,
          preview: (
            <Alert className="border-blue-500/50 text-blue-600 dark:text-blue-400 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400">
              <Info className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>This feature is currently in beta testing.</AlertDescription>
            </Alert>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
