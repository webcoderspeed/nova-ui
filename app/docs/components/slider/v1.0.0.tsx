"use client"

import * as React from "react"
import { NovaSlider } from "@/components/nova/nova-slider"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SliderDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Slider"
      description="An input where the user selects a value from within a given range."
      whenToUse={[
        "When users need to select a value from a continuous range.",
        "For settings like volume, brightness, or price range.",
        "When precise values are not critical."
      ]}
      hints={[
        { type: "info", content: "Supports `marks` to indicate specific values." },
        { type: "info", content: "Can show current value with `showValue` prop." },
        { type: "info", content: "Various visual variants including `gradient` and `neon`." }
      ]}
      preview={
        <div className="flex flex-col gap-8 w-full max-w-sm">
          <NovaSlider defaultValue={[50]} max={100} step={1} />
          <NovaSlider defaultValue={[33]} max={100} step={1} variant="gradient" />
          <NovaSlider defaultValue={[75]} max={100} step={1} variant="neon" />
        </div>
      }
      installCommand="npx shadcn@latest add slider"
      importCode={`import { NovaSlider } from "@/components/nova/nova-slider"`}
      usageCode={`<NovaSlider defaultValue={[50]} max={100} step={1} />`}
      props={[
        {
          name: "variant",
          type: '"default" | "gradient" | "neumorphic" | "glass" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the slider."
        },
        {
          name: "color",
          type: '"default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error"',
          defaultValue: '"default"',
          description: "Color theme of the slider."
        },
        {
          name: "showValue",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to display the current value."
        },
        {
          name: "marks",
          type: "Array<{ value: number; label?: string }>",
          defaultValue: "undefined",
          description: "Array of marks to display on the slider track."
        }
      ]}
      examples={[
        {
          title: "With Marks and Value",
          description: "Slider with labeled marks and value display.",
          code: `<NovaSlider
  defaultValue={[50]}
  max={100}
  step={10}
  showValue
  marks={[
    { value: 0, label: "0%" },
    { value: 50, label: "50%" },
    { value: 100, label: "100%" }
  ]}
/>`,
          preview: (
            <div className="w-full max-w-sm pt-4 pb-8">
              <NovaSlider
                defaultValue={[50]}
                max={100}
                step={10}
                showValue
                marks={[
                  { value: 0, label: "0%" },
                  { value: 50, label: "50%" },
                  { value: 100, label: "100%" }
                ]}
              />
            </div>
          )
        },
        {
          title: "Colors",
          description: "Slider with different color themes.",
          code: `<div className="space-y-8">
  <NovaSlider defaultValue={[20]} color="success" />
  <NovaSlider defaultValue={[40]} color="warning" />
  <NovaSlider defaultValue={[60]} color="error" />
  <NovaSlider defaultValue={[80]} color="accent" />
</div>`,
          preview: (
            <div className="space-y-8 w-full max-w-sm">
              <NovaSlider defaultValue={[20]} color="success" />
              <NovaSlider defaultValue={[40]} color="warning" />
              <NovaSlider defaultValue={[60]} color="error" />
              <NovaSlider defaultValue={[80]} color="accent" />
            </div>
          )
        }
      ]}
    />
  )
}
