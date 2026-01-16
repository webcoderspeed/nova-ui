"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CheckboxDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Checkbox"
      description="V2 checkbox with custom icons, color variants, sizes, and group support."
      preview={
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="default" />
            <Label htmlFor="default">Default checkbox</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="custom" className="rounded-full" />
            <Label htmlFor="custom">Circle checkbox</Label>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="sm" className="h-3 w-3" />
              <Label htmlFor="sm" className="text-sm">
                Small
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="lg" className="h-5 w-5" />
              <Label htmlFor="lg">Large</Label>
            </div>
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaCheckbox, CheckboxGroup } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaCheckbox,
  CheckboxGroup,
  CheckboxCard 
} from "@/nova-ui"`}
      usageCode={`import { NovaCheckbox, CheckboxGroup } from "@/nova-ui"

// Different sizes (NEW in v2.0.0)
export function SizesExample() {
  return (
    <>
      <NovaCheckbox size="sm" label="Small" />
      <NovaCheckbox size="default" label="Default" />
      <NovaCheckbox size="lg" label="Large" />
    </>
  )
}

// Color variants (NEW in v2.0.0)
export function ColorExample() {
  return (
    <NovaCheckbox 
      color="success"
      label="Success color"
    />
  )
}

// Checkbox group (NEW in v2.0.0)
export function GroupExample() {
  return (
    <CheckboxGroup
      label="Select options"
      options={[
        { value: "opt1", label: "Option 1" },
        { value: "opt2", label: "Option 2" },
        { value: "opt3", label: "Option 3" },
      ]}
      value={["opt1"]}
      onChange={(values) => console.log(values)}
    />
  )
}

// Card checkbox (NEW in v2.0.0)
export function CardExample() {
  return (
    <CheckboxCard
      title="Pro Plan"
      description="Best for growing teams"
      price="$29/mo"
    />
  )
}`}
      props={[
        { name: "checked", type: "boolean | 'indeterminate'", description: "Controlled checked state" },
        { name: "defaultChecked", type: "boolean", description: "Default checked state" },
        { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback on change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
        { name: "label", type: "string", description: "Label text" },
        { name: "description", type: "string", description: "Description text" },
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "Checkbox size (NEW in v2.0.0)",
        },
        {
          name: "color",
          type: '"default" | "success" | "warning" | "destructive"',
          default: '"default"',
          description: "Checkbox color (NEW in v2.0.0)",
        },
        {
          name: "variant",
          type: '"default" | "circle" | "card"',
          default: '"default"',
          description: "Checkbox variant (NEW in v2.0.0)",
        },
      ]}
      examples={[
        {
          title: "Checkbox Group",
          description: "Group of related checkboxes.",
          code: `<CheckboxGroup
  label="Select toppings"
  options={[
    { value: "cheese", label: "Extra cheese" },
    { value: "pepperoni", label: "Pepperoni" },
    { value: "mushrooms", label: "Mushrooms" },
  ]}
/>`,
          preview: (
            <div className="space-y-3">
              <Label className="text-base">Select toppings</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="cheese" />
                  <Label htmlFor="cheese">Extra cheese</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pepperoni" />
                  <Label htmlFor="pepperoni">Pepperoni</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="mushrooms" />
                  <Label htmlFor="mushrooms">Mushrooms</Label>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Different Sizes",
          description: "Available checkbox sizes.",
          code: `<NovaCheckbox size="sm" label="Small" />
<NovaCheckbox size="default" label="Default" />
<NovaCheckbox size="lg" label="Large" />`,
          preview: (
            <div className="flex items-center gap-6">
              <div className="flex items-center space-x-2">
                <Checkbox id="sm-ex" className="h-3 w-3" />
                <Label htmlFor="sm-ex" className="text-sm">
                  Small
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="default-ex" />
                <Label htmlFor="default-ex">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lg-ex" className="h-5 w-5" />
                <Label htmlFor="lg-ex" className="text-base">
                  Large
                </Label>
              </div>
            </div>
          ),
        },
        {
          title: "Circle Variant",
          description: "Circular checkbox style.",
          code: `<NovaCheckbox variant="circle" label="Circle checkbox" />`,
          preview: (
            <div className="flex items-center space-x-2">
              <Checkbox id="circle-ex" className="rounded-full" />
              <Label htmlFor="circle-ex">Circle checkbox</Label>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Switch", href: "/docs/components/switch" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
