"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal } from "lucide-react"

export default function AlertDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Alert"
      description="Displays a callout for user attention. Basic version with default and destructive variants."
      preview={
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
        </Alert>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
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
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
