"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SwitchDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Switch"
      description="A control that allows the user to toggle between two states. Enhanced with label and description support."
      preview={
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="disabled" disabled />
            <Label htmlFor="disabled" className="text-muted-foreground">
              Disabled
            </Label>
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaSwitch } from "@/nova-ui"

// Or base switch
import { Switch } from "@/nova-ui/switch"`}
      usageCode={`import { NovaSwitch } from "@/nova-ui"

// Basic usage
export function BasicSwitch() {
  return <NovaSwitch label="Dark Mode" />
}

// With description (NEW in v1.1.0)
export function DescribedSwitch() {
  return (
    <NovaSwitch 
      label="Marketing emails"
      description="Receive emails about new products"
    />
  )
}`}
      props={[
        { name: "checked", type: "boolean", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
        { name: "label", type: "string", description: "Label text (NEW in v1.1.0)" },
        { name: "description", type: "string", description: "Description text (NEW in v1.1.0)" },
      ]}
      examples={[
        {
          title: "With Description",
          description: "Switch with additional context.",
          code: `<NovaSwitch 
  label="Email notifications"
  description="Receive email updates"
/>`,
          preview: (
            <div className="flex items-center justify-between w-full max-w-sm">
              <div className="space-y-0.5">
                <Label>Email notifications</Label>
                <p className="text-sm text-muted-foreground">Receive email updates</p>
              </div>
              <Switch />
            </div>
          ),
        },
        {
          title: "Form Layout",
          description: "Switch in a form-like layout.",
          code: `<div className="flex items-center justify-between">
  <div>
    <Label>Dark mode</Label>
    <p className="text-sm text-muted-foreground">Enable dark theme</p>
  </div>
  <NovaSwitch />
</div>`,
          preview: (
            <div className="flex items-center justify-between w-full max-w-sm">
              <div className="space-y-0.5">
                <Label>Dark mode</Label>
                <p className="text-sm text-muted-foreground">Enable dark theme</p>
              </div>
              <Switch />
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Checkbox", href: "/docs/components/checkbox" },
        { name: "Toggle", href: "/docs/components/toggle" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
