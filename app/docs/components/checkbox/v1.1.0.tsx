"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CheckboxDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked. Enhanced with indeterminate state."
      preview={
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="indeterminate" checked="indeterminate" />
            <Label htmlFor="indeterminate">Indeterminate</Label>
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaCheckbox } from "@/nova-ui"

// Or base checkbox
import { Checkbox } from "@/nova-ui/checkbox"`}
      usageCode={`import { NovaCheckbox } from "@/nova-ui"

// Basic usage
export function BasicCheckbox() {
  return <NovaCheckbox label="Accept terms" />
}

// Indeterminate state (NEW in v1.1.0)
export function IndeterminateCheckbox() {
  return (
    <NovaCheckbox 
      checked="indeterminate"
      label="Select all"
    />
  )
}

// With description (NEW in v1.1.0)
export function DescribedCheckbox() {
  return (
    <NovaCheckbox 
      label="Marketing emails"
      description="Receive emails about new products and features"
    />
  )
}`}
      props={[
        { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
        { name: "label", type: "string", description: "Label text (NEW in v1.1.0)" },
        { name: "description", type: "string", description: "Description text (NEW in v1.1.0)" },
      ]}
      examples={[
        {
          title: "Indeterminate State",
          description: "For parent checkboxes with partial selection.",
          code: `<NovaCheckbox 
  checked="indeterminate"
  label="Select all items"
/>`,
          preview: (
            <div className="flex items-center space-x-2">
              <Checkbox id="indeterminate-ex" checked="indeterminate" />
              <Label htmlFor="indeterminate-ex">Select all items</Label>
            </div>
          ),
        },
        {
          title: "With Description",
          description: "Checkbox with additional context.",
          code: `<NovaCheckbox 
  label="Marketing emails"
  description="Receive updates about products"
/>`,
          preview: (
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing">Marketing emails</Label>
              </div>
              <p className="text-sm text-muted-foreground ml-6">Receive updates about products</p>
            </div>
          ),
        },
        {
          title: "Disabled State",
          description: "Disabled checkbox.",
          code: `<NovaCheckbox disabled label="Disabled option" />`,
          preview: (
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-ex" disabled />
              <Label htmlFor="disabled-ex" className="text-muted-foreground">
                Disabled option
              </Label>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Switch", href: "/docs/components/switch" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
