"use client"

import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Loader2, Mail, ChevronRight } from "lucide-react"

export default function ButtonDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Button"
      description="Displays a button or a component that looks like a button. Enhanced with loading states and icon support."
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
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaButton } from "@/nova-ui"

// Or use the base shadcn button
import { Button } from "@/nova-ui/button"`}
      usageCode={`import { NovaButton } from "@/nova-ui"

export function MyComponent() {
  return (
    <NovaButton variant="default" size="default">
      Click me
    </NovaButton>
  )
}

// With loading state (NEW in v1.1.0)
export function LoadingButton() {
  const [loading, setLoading] = useState(false)
  
  return (
    <NovaButton 
      loading={loading}
      onClick={() => setLoading(true)}
    >
      Submit
    </NovaButton>
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
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Shows a loading spinner and disables the button (NEW in v1.1.0)",
        },
        {
          name: "loadingText",
          type: "string",
          description: "Text to display while loading (NEW in v1.1.0)",
        },
        {
          name: "leftIcon",
          type: "ReactNode",
          description: "Icon to display on the left side (NEW in v1.1.0)",
        },
        {
          name: "rightIcon",
          type: "ReactNode",
          description: "Icon to display on the right side (NEW in v1.1.0)",
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
          code: `<NovaButton leftIcon={<Mail className="h-4 w-4" />}>
  Login with Email
</NovaButton>`,
          preview: (
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Login with Email
            </Button>
          ),
        },
        {
          title: "Loading State",
          description: "Show a loading spinner when an action is in progress.",
          code: `<NovaButton loading loadingText="Please wait...">
  Submit
</NovaButton>`,
          preview: (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ),
        },
        {
          title: "Icon Button",
          description: "Use the icon size for buttons that only contain an icon.",
          code: `<NovaButton variant="outline" size="icon">
  <ChevronRight className="h-4 w-4" />
</NovaButton>`,
          preview: (
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          ),
        },
        {
          title: "All Sizes",
          description: "Available size variants.",
          code: `<div className="flex items-center gap-4">
  <NovaButton size="sm">Small</NovaButton>
  <NovaButton size="default">Default</NovaButton>
  <NovaButton size="lg">Large</NovaButton>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Toggle", href: "/docs/components/toggle" },
        { name: "Toggle Group", href: "/docs/components/toggle-group" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
