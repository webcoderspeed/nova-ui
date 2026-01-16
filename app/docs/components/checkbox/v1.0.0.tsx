"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CheckboxDocsV1() {
  return (
    <ComponentDocTemplate
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      preview={
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Checkbox } from "@/nova-ui/checkbox"`}
      usageCode={`import { Checkbox } from "@/nova-ui/checkbox"
import { Label } from "@/nova-ui/label"

export function MyCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms</Label>
    </div>
  )
}`}
      props={[
        { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
      ]}
      examples={[
        {
          title: "With Label",
          description: "Checkbox with label.",
          code: `<div className="flex items-center space-x-2">
  <Checkbox id="newsletter" />
  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>`,
          preview: (
            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">Subscribe to newsletter</Label>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Switch", href: "/docs/components/switch" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
