"use client"

import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Mail, ChevronRight } from "lucide-react"

export default function ButtonDocsV1() {
  return (
    <ComponentDocTemplate
      title="Button"
      description="Displays a button or a component that looks like a button. Basic version with essential variants."
      preview={
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Button } from "@/nova-ui/button"

// Basic import for v1.0.0
import { Button } from "@/components/ui/button"`}
      usageCode={`import { Button } from "@/nova-ui/button"

export function MyComponent() {
  return (
    <Button variant="default" size="default">
      Click me
    </Button>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
          default: '"default"',
          description: "The visual style variant of the button",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          default: '"default"',
          description: "The size of the button",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Change the default rendered element for the one passed as a child",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "When true, prevents the user from interacting with the button",
        },
        { name: "className", type: "string", description: "Additional CSS classes to apply" },
      ]}
      examples={[
        {
          title: "With Icon",
          description: "Add an icon to your button for additional context.",
          code: `<Button>
  <Mail className="mr-2 h-4 w-4" />
  Login with Email
</Button>`,
          preview: (
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Login with Email
            </Button>
          ),
        },
        {
          title: "Icon Button",
          description: "Use the icon size for buttons that only contain an icon.",
          code: `<Button variant="outline" size="icon">
  <ChevronRight className="h-4 w-4" />
</Button>`,
          preview: (
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          ),
        },
      ]}
      relatedComponents={[{ name: "Toggle", href: "/docs/components/toggle" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
