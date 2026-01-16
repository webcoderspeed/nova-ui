"use client"

import { NovaAlert } from "@/components/nova/nova-alert"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Terminal } from "lucide-react"

export default function AlertDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Alert"
      description="Displays a callout for user attention. Enhanced with status variants, animations, and dismissal capabilities."
      whenToUse={[
        "To display success, warning, error, or info messages.",
        "When you need a persistent feedback message that doesn't block user interaction.",
        "For highlighting important information relevant to the page content."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaAlert extends the base UI Alert with built-in status variants (success, warning, error, info) and optional animations, reducing the need for manual class composition."
        }
      ]}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <NovaAlert 
            status="info" 
            title="Update Available" 
            description="A new version of Nova UI is available. Update now to get the latest features."
            action={<NovaButton variant="outline" size="sm" className="bg-background">Update</NovaButton>}
          />
        </div>
      }
      installCommand="npx nova-ui@latest add alert"
      importCode={`import { NovaAlert } from "@/components/nova/nova-alert"`}
      usageCode={`import { NovaAlert } from "@/components/nova/nova-alert"
import { NovaButton } from "@/components/nova/nova-button"

export function AlertDemo() {
  return (
    <NovaAlert 
      status="info" 
      title="Update Available" 
      description="A new version of Nova UI is available."
      action={<NovaButton variant="outline" size="sm">Update</NovaButton>}
    />
  )
}`}
      props={[
        {
          name: "status",
          type: '"default" | "success" | "warning" | "error" | "info"',
          defaultValue: '"default"',
          description: "Visual style variant indicating the nature of the message.",
        },
        {
          name: "title",
          type: "string",
          description: "The title of the alert.",
        },
        {
          name: "description",
          type: "string",
          description: "The content/description of the alert.",
        },
        {
          name: "icon",
          type: "ReactNode",
          description: "Optional custom icon to override the default status icon.",
        },
        {
          name: "showIcon",
          type: "boolean",
          defaultValue: "true",
          description: "Whether to show the status icon.",
        },
        {
          name: "dismissible",
          type: "boolean",
          defaultValue: "false",
          description: "If true, shows a close button that dismisses the alert.",
        },
        {
          name: "animation",
          type: '"none" | "fade" | "slide"',
          defaultValue: '"fade"',
          description: "Entry animation style.",
        },
        {
          name: "action",
          type: "ReactNode",
          description: "Optional action element (button, link) to display at the bottom.",
        },
      ]}
      examples={[
        {
          title: "Status Variants",
          description: "Standard status indicators for common feedback scenarios.",
          code: `<div className="space-y-4">
  <NovaAlert status="success" title="Success" description="Your changes have been saved successfully." />
  <NovaAlert status="warning" title="Warning" description="Your account is about to expire." />
  <NovaAlert status="error" title="Error" description="Failed to save changes. Please try again." />
  <NovaAlert status="info" title="Info" description="Scheduled maintenance is planned for tonight." />
</div>`,
          preview: (
            <div className="space-y-4 w-full">
              <NovaAlert status="success" title="Success" description="Your changes have been saved successfully." />
              <NovaAlert status="warning" title="Warning" description="Your account is about to expire." />
              <NovaAlert status="error" title="Error" description="Failed to save changes. Please try again." />
              <NovaAlert status="info" title="Info" description="Scheduled maintenance is planned for tonight." />
            </div>
          ),
        },
        {
          title: "Dismissible",
          description: "Alerts can be dismissed by the user.",
          code: `<NovaAlert 
  status="info" 
  title="Dismissible Alert" 
  description="Click the X icon to dismiss this alert." 
  dismissible 
/>`,
          preview: (
            <NovaAlert 
              status="info" 
              title="Dismissible Alert" 
              description="Click the X icon to dismiss this alert." 
              dismissible 
            />
          ),
        },
        {
          title: "Custom Icon",
          description: "Override the default icon with your own.",
          code: `<NovaAlert 
  icon={<Terminal className="h-4 w-4" />} 
  title="Custom Icon" 
  description="This alert uses a terminal icon." 
/>`,
          preview: (
            <NovaAlert 
              icon={<Terminal className="h-4 w-4" />} 
              title="Custom Icon" 
              description="This alert uses a terminal icon." 
            />
          ),
        },
      ]}
      relatedComponents={[
        { name: "Toast", href: "/docs/components/toast" },
        { name: "Sonner", href: "/docs/components/sonner" },
        { name: "Dialog", href: "/docs/components/dialog" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/main/components/nova/nova-alert.tsx"
    />
  )
}
