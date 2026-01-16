"use client"

import * as React from "react"
import { NovaRadioGroup, NovaRadioGroupItem } from "@/components/nova/nova-radio-group"
import { NovaLabel } from "@/components/nova/nova-label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function RadioGroupDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Radio Group"
      description="A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time."
      whenToUse={[
        "When users need to select exactly one option from a list.",
        "When the options are mutually exclusive.",
        "When you want to display all available options."
      ]}
      hints={[
        { type: "info", content: "Supports `horizontal` and `vertical` orientation." },
        { type: "info", content: "Variants include `card`, `pill`, and `glow`." },
        { type: "info", content: "Use `NovaLabel` for better accessibility." }
      ]}
      preview={
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <NovaRadioGroup defaultValue="default">
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="default" id="r1" />
              <NovaLabel htmlFor="r1">Default</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="comfortable" id="r2" />
              <NovaLabel htmlFor="r2">Comfortable</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="compact" id="r3" />
              <NovaLabel htmlFor="r3">Compact</NovaLabel>
            </div>
          </NovaRadioGroup>

          <NovaRadioGroup defaultValue="card" variant="card">
             <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="card" id="c1" />
              <NovaLabel htmlFor="c1">Card Variant</NovaLabel>
            </div>
             <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="list" id="c2" />
              <NovaLabel htmlFor="c2">List Variant</NovaLabel>
            </div>
          </NovaRadioGroup>
        </div>
      }
      installCommand="npx shadcn@latest add radio-group"
      importCode={`import { NovaRadioGroup, NovaRadioGroupItem } from "@/components/nova/nova-radio-group"`}
      usageCode={`<NovaRadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <NovaRadioGroupItem value="option-one" id="option-one" />
    <NovaLabel htmlFor="option-one">Option One</NovaLabel>
  </div>
  <div className="flex items-center space-x-2">
    <NovaRadioGroupItem value="option-two" id="option-two" />
    <NovaLabel htmlFor="option-two">Option Two</NovaLabel>
  </div>
</NovaRadioGroup>`}
      props={[
        {
          name: "variant",
          type: '"default" | "card" | "pill" | "minimal" | "glow" | "pulse"',
          defaultValue: '"default"',
          description: "Visual style of the radio group items."
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          defaultValue: '"vertical"',
          description: "Layout orientation of the radio group."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the radio buttons."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the radio group.",
          code: `<div className="space-y-6">
  <NovaRadioGroup variant="glow" defaultValue="g1">
    <div className="flex items-center space-x-2">
      <NovaRadioGroupItem value="g1" id="g1" />
      <NovaLabel htmlFor="g1">Glow Effect</NovaLabel>
    </div>
     <div className="flex items-center space-x-2">
      <NovaRadioGroupItem value="g2" id="g2" />
      <NovaLabel htmlFor="g2">Another Option</NovaLabel>
    </div>
  </NovaRadioGroup>

  <NovaRadioGroup variant="pill" orientation="horizontal" defaultValue="p1">
    <div className="flex items-center space-x-2">
      <NovaRadioGroupItem value="p1" id="p1" />
      <NovaLabel htmlFor="p1">Pill 1</NovaLabel>
    </div>
    <div className="flex items-center space-x-2">
      <NovaRadioGroupItem value="p2" id="p2" />
      <NovaLabel htmlFor="p2">Pill 2</NovaLabel>
    </div>
  </NovaRadioGroup>
</div>`,
          preview: (
            <div className="space-y-6 w-full max-w-sm">
              <NovaRadioGroup variant="glow" defaultValue="g1">
                <div className="flex items-center space-x-2">
                  <NovaRadioGroupItem value="g1" id="g1" />
                  <NovaLabel htmlFor="g1">Glow Effect</NovaLabel>
                </div>
                 <div className="flex items-center space-x-2">
                  <NovaRadioGroupItem value="g2" id="g2" />
                  <NovaLabel htmlFor="g2">Another Option</NovaLabel>
                </div>
              </NovaRadioGroup>

              <NovaRadioGroup variant="pill" orientation="horizontal" defaultValue="p1">
                <div className="flex items-center space-x-2">
                  <NovaRadioGroupItem value="p1" id="p1" />
                  <NovaLabel htmlFor="p1">Pill 1</NovaLabel>
                </div>
                <div className="flex items-center space-x-2">
                  <NovaRadioGroupItem value="p2" id="p2" />
                  <NovaLabel htmlFor="p2">Pill 2</NovaLabel>
                </div>
              </NovaRadioGroup>
            </div>
          )
        }
      ]}
    />
  )
}
