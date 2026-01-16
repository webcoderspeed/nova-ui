"use client"

import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Sun, Moon } from "lucide-react"

export default function SwitchDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Switch"
      description="V2 switch with icons, sizes, color variants, and loading state."
      preview={
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch id="default" />
            <Label htmlFor="default">Default switch</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="icon" className="data-[state=checked]:bg-primary" />
            <Label htmlFor="icon">
              <span className="flex items-center gap-1">
                <Sun className="h-4 w-4" /> / <Moon className="h-4 w-4" />
              </span>
            </Label>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="sm" className="h-4 w-7" />
              <Label htmlFor="sm" className="text-sm">
                Small
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="lg" className="h-7 w-12" />
              <Label htmlFor="lg">Large</Label>
            </div>
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaSwitch } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaSwitch,
  IconSwitch,
  LoadingSwitch 
} from "@/nova-ui"`}
      usageCode={`import { NovaSwitch, IconSwitch } from "@/nova-ui"

// With icons (NEW in v2.0.0)
export function IconExample() {
  return (
    <IconSwitch
      checkedIcon={<Moon className="h-3 w-3" />}
      uncheckedIcon={<Sun className="h-3 w-3" />}
    />
  )
}

// Different sizes (NEW in v2.0.0)
export function SizesExample() {
  return (
    <>
      <NovaSwitch size="sm" label="Small" />
      <NovaSwitch size="default" label="Default" />
      <NovaSwitch size="lg" label="Large" />
    </>
  )
}

// With loading state (NEW in v2.0.0)
export function LoadingExample() {
  const [loading, setLoading] = useState(false)
  
  return (
    <NovaSwitch 
      loading={loading}
      onCheckedChange={async () => {
        setLoading(true)
        await saveSettings()
        setLoading(false)
      }}
    />
  )
}

// Color variants (NEW in v2.0.0)
export function ColorExample() {
  return (
    <NovaSwitch color="success" label="Success color" />
  )
}`}
      props={[
        { name: "checked", type: "boolean", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
        { name: "label", type: "string", description: "Label text" },
        { name: "description", type: "string", description: "Description text" },
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "Switch size (NEW in v2.0.0)",
        },
        {
          name: "color",
          type: '"default" | "success" | "warning" | "destructive"',
          default: '"default"',
          description: "Switch color when checked (NEW in v2.0.0)",
        },
        { name: "loading", type: "boolean", default: "false", description: "Show loading state (NEW in v2.0.0)" },
        { name: "checkedIcon", type: "ReactNode", description: "Icon when checked (NEW in v2.0.0)" },
        { name: "uncheckedIcon", type: "ReactNode", description: "Icon when unchecked (NEW in v2.0.0)" },
      ]}
      examples={[
        {
          title: "Theme Toggle",
          description: "Switch with theme icons.",
          code: `<IconSwitch
  checkedIcon={<Moon className="h-3 w-3" />}
  uncheckedIcon={<Sun className="h-3 w-3" />}
  label="Dark mode"
/>`,
          preview: (
            <div className="flex items-center space-x-3">
              <Sun className="h-4 w-4" />
              <Switch />
              <Moon className="h-4 w-4" />
            </div>
          ),
        },
        {
          title: "Different Sizes",
          description: "Available switch sizes.",
          code: `<NovaSwitch size="sm" label="Small" />
<NovaSwitch size="default" label="Default" />
<NovaSwitch size="lg" label="Large" />`,
          preview: (
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Switch id="sm-ex" className="h-4 w-7 [&>span]:h-3 [&>span]:w-3" />
                <Label htmlFor="sm-ex" className="text-sm">
                  Small
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="default-ex" />
                <Label htmlFor="default-ex">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="lg-ex" className="h-7 w-12 [&>span]:h-5 [&>span]:w-5" />
                <Label htmlFor="lg-ex">Large</Label>
              </div>
            </div>
          ),
        },
        {
          title: "Settings Row",
          description: "Switch in a settings layout.",
          code: `<div className="flex items-center justify-between rounded-lg border p-4">
  <div className="space-y-0.5">
    <Label>Push notifications</Label>
    <p className="text-sm text-muted-foreground">
      Receive push notifications on your device
    </p>
  </div>
  <NovaSwitch />
</div>`,
          preview: (
            <div className="flex items-center justify-between rounded-lg border p-4 w-full max-w-md">
              <div className="space-y-0.5">
                <Label>Push notifications</Label>
                <p className="text-sm text-muted-foreground">Receive push notifications on your device</p>
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
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
