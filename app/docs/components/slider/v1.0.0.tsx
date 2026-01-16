"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Slider } from "@/components/ui/slider"

export default function SliderDocsV1() {
  return (
    <ComponentDocTemplate
      title="Slider"
      description="An input where the user selects a value from within a given range. Basic version."
      preview={<Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-sm" />}
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
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
      ]}
      examples={[
        {
          title: "Basic Slider",
          description: "Simple range slider.",
          code: `<Slider defaultValue={[33]} max={100} />`,
          preview: <Slider defaultValue={[33]} max={100} className="w-full max-w-sm" />,
        },
      ]}
      relatedComponents={[{ name: "Progress", href: "/docs/components/progress" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
