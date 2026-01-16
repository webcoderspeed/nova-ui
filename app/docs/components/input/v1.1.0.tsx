"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Search, Mail } from "lucide-react"

export default function InputDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Input"
      description="Displays a form input field. Enhanced with icon support and better error states."
      preview={
        <div className="grid w-full max-w-sm gap-4">
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search..." />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaInput } from "@/nova-ui"

// Or base input
import { Input } from "@/nova-ui/input"`}
      usageCode={`import { NovaInput } from "@/nova-ui"

// Basic usage
export function BasicInput() {
  return <NovaInput placeholder="Enter text" />
}

// With icon (NEW in v1.1.0)
export function SearchInput() {
  return (
    <NovaInput 
      leftIcon={<Search className="h-4 w-4" />}
      placeholder="Search..."
    />
  )
}

// With error state (NEW in v1.1.0)
export function ErrorInput() {
  return (
    <NovaInput 
      error="This field is required"
      placeholder="Required field"
    />
  )
}`}
      props={[
        { name: "type", type: "string", default: '"text"', description: "The type of input" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
        { name: "leftIcon", type: "ReactNode", description: "Icon on the left side (NEW in v1.1.0)" },
        { name: "rightIcon", type: "ReactNode", description: "Icon on the right side (NEW in v1.1.0)" },
        { name: "error", type: "string", description: "Error message to display (NEW in v1.1.0)" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "With Search Icon",
          description: "Input with left icon for search.",
          code: `<NovaInput 
  leftIcon={<Search className="h-4 w-4" />}
  placeholder="Search..."
/>`,
          preview: (
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Search..." />
            </div>
          ),
        },
        {
          title: "Email with Icon",
          description: "Email input with mail icon.",
          code: `<NovaInput 
  type="email"
  leftIcon={<Mail className="h-4 w-4" />}
  placeholder="Enter email"
/>`,
          preview: (
            <div className="relative max-w-sm">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" type="email" placeholder="Enter email" />
            </div>
          ),
        },
        {
          title: "Error State",
          description: "Input showing error message.",
          code: `<NovaInput 
  error="This field is required"
  placeholder="Required field"
/>`,
          preview: (
            <div className="grid max-w-sm gap-1.5">
              <Input className="border-destructive" placeholder="Required field" />
              <p className="text-sm text-destructive">This field is required</p>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Label", href: "/docs/components/label" },
        { name: "Textarea", href: "/docs/components/textarea" },
        { name: "Floating Input", href: "/docs/nova-extras/floating-input" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
