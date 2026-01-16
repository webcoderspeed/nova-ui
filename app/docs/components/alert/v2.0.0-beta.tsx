"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Terminal, CheckCircle2, Info, Sparkles } from "lucide-react"

export default function AlertDocsV2() {
  return (
    <ComponentDocTemplate
      title="Alert"
      description="Displays a callout for user attention. Beta version with animations and new variants."
      badgeText="New in v2.0.0-beta"
      preview={
        <div className="space-y-4">
          <Alert className="animate-in slide-in-from-top-2 duration-300">
            <Sparkles className="h-4 w-4" />
            <AlertTitle>What's New!</AlertTitle>
            <AlertDescription>Alerts now support entrance animations and more variants.</AlertDescription>
          </Alert>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { Alert, AlertDescription, AlertTitle } from "@/nova-ui/alert"
// v2.0.0-beta includes motion variants
import { NovaAlert } from "@/nova-ui/nova-alert"`}
      usageCode={`import { Alert, AlertDescription, AlertTitle } from "@/nova-ui/alert"
import { Sparkles } from 'lucide-react'

export function MyComponent() {
  return (
    <Alert className="animate-in slide-in-from-top-2">
      <Sparkles className="h-4 w-4" />
      <AlertTitle>Animated Alert</AlertTitle>
      <AlertDescription>
        Smooth entrance animation included.
      </AlertDescription>
    </Alert>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "success" | "warning" | "info"',
          default: '"default"',
          description: "The visual style variant (expanded in v2)",
        },
        { name: "animate", type: "boolean", default: "true", description: "Enable entrance animation" },
        { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss button" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Animated Entrance",
          description: "Alerts with smooth slide-in animation.",
          code: `<Alert className="animate-in slide-in-from-top-2 duration-300">
  <Terminal className="h-4 w-4" />
  <AlertTitle>Animated</AlertTitle>
  <AlertDescription>Slides in smoothly.</AlertDescription>
</Alert>`,
          preview: (
            <Alert className="animate-in slide-in-from-top-2 duration-300">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Animated</AlertTitle>
              <AlertDescription>Slides in smoothly from the top.</AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Success Variant",
          description: "Built-in success styling in v2.",
          code: `<Alert className="border-green-500/50 bg-green-500/10">
  <CheckCircle2 className="h-4 w-4 text-green-500" />
  <AlertTitle className="text-green-500">Success</AlertTitle>
  <AlertDescription className="text-green-600/80">
    Operation completed.
  </AlertDescription>
</Alert>`,
          preview: (
            <Alert className="border-green-500/50 bg-green-500/10">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <AlertTitle className="text-green-600 dark:text-green-400">Success</AlertTitle>
              <AlertDescription className="text-green-600/80 dark:text-green-400/80">
                Operation completed successfully.
              </AlertDescription>
            </Alert>
          ),
        },
        {
          title: "Stacked Alerts",
          description: "Multiple alerts with staggered animations.",
          code: `<div className="space-y-2">
  {['Info', 'Warning', 'Error'].map((type, i) => (
    <Alert 
      key={type}
      className="animate-in slide-in-from-left"
      style={{ animationDelay: \`\${i * 100}ms\` }}
    >
      <AlertTitle>{type}</AlertTitle>
    </Alert>
  ))}
</div>`,
          preview: (
            <div className="space-y-2">
              <Alert className="animate-in slide-in-from-left-2 duration-300 border-blue-500/50">
                <Info className="h-4 w-4 text-blue-500" />
                <AlertTitle className="text-blue-500">Info</AlertTitle>
              </Alert>
              <Alert
                className="animate-in slide-in-from-left-2 duration-300 border-yellow-500/50"
                style={{ animationDelay: "100ms" }}
              >
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <AlertTitle className="text-yellow-500">Warning</AlertTitle>
              </Alert>
              <Alert
                className="animate-in slide-in-from-left-2 duration-300"
                style={{ animationDelay: "200ms" }}
                variant="destructive"
              >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
              </Alert>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
