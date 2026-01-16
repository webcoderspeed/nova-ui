"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function InputDocsV1() {
  return (
    <ComponentDocTemplate
      title="Input"
      description="Displays a form input field. Basic version with essential functionality."
      preview={
        <div className="grid w-full max-w-sm gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Input } from "@/nova-ui/input"`}
      usageCode={`import { Input } from "@/nova-ui/input"
import { Label } from "@/nova-ui/label"

export function MyForm() {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter email" />
    </div>
  )
}`}
      props={[
        { name: "type", type: "string", default: '"text"', description: "The type of input" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "With Label",
          description: "Input with associated label.",
          code: `<div className="grid gap-1.5">
  <Label htmlFor="name">Name</Label>
  <Input id="name" placeholder="Enter name" />
</div>`,
          preview: (
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter name" />
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "Disabled input state.",
          code: `<Input disabled placeholder="Disabled" />`,
          preview: <Input disabled placeholder="Disabled" className="max-w-sm" />,
        },
      ]}
      relatedComponents={[
        { name: "Label", href: "/docs/components/label" },
        { name: "Textarea", href: "/docs/components/textarea" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
