"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Slider } from "@/components/ui/slider"

export default function SliderDocsV11() {
  return (
    <ComponentDocTemplate
      title="Slider"
      description="An input where the user selects a value from within a given range. Enhanced styling."
      badgeText="Updated in v1.1.0"
      preview={<Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />}
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { Slider } from "@/nova-ui/slider"`}
      usageCode={`import { Slider } from "@/nova-ui/slider"

export function MyComponent() {
  return <Slider defaultValue={[50]} max={100} step={1} />
}`}
      props={[
        { name: "defaultValue", type: "number[]", description: "Default value(s)" },
        { name: "value", type: "number[]", description: "Controlled value(s)" },
        { name: "onValueChange", type: "(value: number[]) => void", description: "Value change handler" },
        { name: "max", type: "number", default: "100", description: "Maximum value" },
        { name: "min", type: "number", default: "0", description: "Minimum value" },
        { name: "step", type: "number", default: "1", description: "Step increment" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable interaction" },
      ]}
      examples={[
        {
          title: "Range Slider",
          description: "Select a range between two values.",
          code: `<Slider defaultValue={[25, 75]} max={100} step={1} />`,
          preview: <Slider defaultValue={[25, 75]} max={100} step={1} className="w-full max-w-sm" />,
        },
        {
          title: "With Steps",
          description: "Slider with larger step increments.",
          code: `<Slider defaultValue={[50]} max={100} step={10} />`,
          preview: <Slider defaultValue={[50]} max={100} step={10} className="w-full max-w-sm" />,
        },
        {
          title: "Disabled",
          description: "Non-interactive slider.",
          code: `<Slider defaultValue={[50]} disabled />`,
          preview: <Slider defaultValue={[50]} disabled className="w-full max-w-sm" />,
        },
      ]}
      relatedComponents={[
        { name: "Progress", href: "/docs/components/progress" },
        { name: "Input", href: "/docs/components/input" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
