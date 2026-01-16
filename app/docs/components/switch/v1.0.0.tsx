"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SwitchDocsV1() {
  return (
    <ComponentDocTemplate
      title="Switch"
      description="A control that allows the user to toggle between two states."
      preview={
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Switch } from "@/nova-ui/switch"`}
      usageCode={`import { Switch } from "@/nova-ui/switch"
import { Label } from "@/nova-ui/label"

export function MySwitch() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="mode" />
      <Label htmlFor="mode">Dark Mode</Label>
    </div>
  )
}`}
      props={[
        { name: "checked", type: "boolean", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
      ]}
      examples={[
        {
          title: "With Label",
          description: "Switch with label.",
          code: `<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>`,
          preview: (
            <div className="flex items-center space-x-2">
              <Switch id="notifications" />
              <Label htmlFor="notifications">Enable notifications</Label>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Checkbox", href: "/docs/components/checkbox" },
        { name: "Toggle", href: "/docs/components/toggle" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
