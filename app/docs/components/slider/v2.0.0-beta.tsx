"use client"

import { useState } from "react"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Slider } from "@/components/ui/slider"

export default function SliderDocsV2() {
  const [value, setValue] = useState([50])

  return (
    <ComponentDocTemplate
      title="Slider"
      description="An input where the user selects a value from within a given range. Beta with value display and marks."
      badgeText="New in v2.0.0-beta"
      preview={
        <div className="space-y-4 w-full max-w-sm">
          <Slider defaultValue={[50]} max={100} step={1} />
          <div className="text-center text-sm text-muted-foreground">Drag to adjust</div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { Slider } from "@/nova-ui/slider"
// v2.0.0-beta includes NovaSlider
import { NovaSlider } from "@/nova-ui/nova-slider"`}
      usageCode={`import { NovaSlider } from "@/nova-ui/nova-slider"

export function MyComponent() {
  return (
    <NovaSlider 
      defaultValue={[50]} 
      max={100}
      showValue
      marks={[0, 25, 50, 75, 100]}
    />
  )
}`}
      props={[
        { name: "defaultValue", type: "number[]", description: "Default value(s)" },
        { name: "value", type: "number[]", description: "Controlled value(s)" },
        { name: "onValueChange", type: "(value: number[]) => void", description: "Value change handler" },
        { name: "max", type: "number", default: "100", description: "Maximum value" },
        { name: "min", type: "number", default: "0", description: "Minimum value" },
        { name: "step", type: "number", default: "1", description: "Step increment" },
        { name: "showValue", type: "boolean", default: "false", description: "Show current value (v2)" },
        { name: "marks", type: "number[]", description: "Show marks at values (v2)" },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Slider orientation (v2)",
        },
      ]}
      examples={[
        {
          title: "With Value Display",
          description: "Show the current value while sliding.",
          code: `const [value, setValue] = useState([50])

<div className="space-y-2">
  <Slider value={value} onValueChange={setValue} max={100} />
  <div className="text-center font-medium">{value[0]}%</div>
</div>`,
          preview: (
            <div className="space-y-2 w-full max-w-sm">
              <Slider value={value} onValueChange={setValue} max={100} />
              <div className="text-center font-medium">{value[0]}%</div>
            </div>
          ),
        },
        {
          title: "Range Selection",
          description: "Select a range of values.",
          code: `<Slider defaultValue={[20, 80]} max={100} />`,
          preview: <Slider defaultValue={[20, 80]} max={100} className="w-full max-w-sm" />,
        },
        {
          title: "Volume Control",
          description: "Styled as a volume control.",
          code: `<div className="flex items-center gap-4">
  <VolumeIcon />
  <Slider defaultValue={[60]} max={100} className="flex-1" />
  <span className="text-sm w-8">60%</span>
</div>`,
          preview: (
            <div className="flex items-center gap-4 w-full max-w-sm">
              <svg className="h-5 w-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
              <Slider defaultValue={[60]} max={100} className="flex-1" />
              <span className="text-sm w-8 text-muted-foreground">60%</span>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Progress", href: "/docs/components/progress" },
        { name: "Input", href: "/docs/components/input" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
