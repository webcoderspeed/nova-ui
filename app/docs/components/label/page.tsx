"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function LabelPage() {
  return (
    <ComponentDocTemplate
      title="Label"
      description="Renders an accessible label associated with controls. Automatically handles focus states."
      preview={
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      }
      installCommand="npx nova-ui@latest add label"
      importCode={`import { Label } from "@/components/ui/label"`}
      usageCode={`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function MyComponent() {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter name" />
    </div>
  )
}`}
      props={[
        { name: "htmlFor", type: "string", description: "ID of the associated form control" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "With Checkbox",
          description: "Label associated with a checkbox.",
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>`,
          preview: (
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          ),
        },
        {
          title: "Required Field",
          description: "Label for required form field.",
          code: `<Label htmlFor="required">
  Username <span className="text-destructive">*</span>
</Label>`,
          preview: (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="required">
                Username <span className="text-destructive">*</span>
              </Label>
              <Input id="required" placeholder="Required field" />
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Input", href: "/docs/components/input" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/label.tsx"
    />
  )
}
