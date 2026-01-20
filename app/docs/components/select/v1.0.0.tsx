"use client"

import * as React from "react"
import { NovaSelect } from "@/components/nova/nova-select"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SelectDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
      whenToUse={[
        "When users need to select one option from a long list.",
        "When space is limited and you can't show all options at once.",
        "To filter content based on a category."
      ]}
      hints={[
        { type: "info", content: "Supports grouped options." },
        { type: "info", content: "Can be styled with variants like `filled`, `underline`, `neumorphic`." },
        { type: "info", content: "Includes accessibility features out of the box." }
      ]}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <NovaSelect
            label="Framework"
            placeholder="Select a framework"
            options={[
              { value: "next", label: "Next.js" },
              { value: "react", label: "React" },
              { value: "astro", label: "Astro" },
              { value: "nuxt", label: "Nuxt" },
            ]}
          />
          <NovaSelect
            variant="filled"
            placeholder="Select a theme"
            options={[
              { value: "light", label: "Light" },
              { value: "dark", label: "Dark" },
              { value: "system", label: "System" },
            ]}
          />
        </div>
      }
      installCommand="npx shadcn@latest add select"
      importCode={`import { NovaSelect } from "@/components/nova/nova-select"`}
      usageCode={`<NovaSelect
  label="Framework"
  placeholder="Select a framework"
  options={[
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
  ]}
/>`}
      props={[
        {
          name: "variant",
          type: '"default" | "filled" | "underline" | "ghost" | "neumorphic"',
          defaultValue: '"default"',
          description: "Visual style of the select trigger."
        },
        {
          name: "options",
          type: "string[] | NovaSelectOption[] | NovaSelectGroup[]",
          defaultValue: "[]",
          description: "Array of options to display."
        },
        {
          name: "label",
          type: "string",
          defaultValue: "undefined",
          description: "Label for the select component."
        }
      ]}
      examples={[
        {
          title: "Grouped Options",
          description: "Grouping options with labels.",
          code: `<NovaSelect
  placeholder="Select a food"
  groups={[
    {
      label: "Fruits",
      options: [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
      ]
    },
    {
      label: "Vegetables",
      options: [
        { value: "carrot", label: "Carrot" },
        { value: "potato", label: "Potato" },
      ]
    }
  ]}
/>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaSelect
                placeholder="Select a food"
                groups={[
                  {
                    label: "Fruits",
                    options: [
                      { value: "apple", label: "Apple" },
                      { value: "banana", label: "Banana" },
                    ]
                  },
                  {
                    label: "Vegetables",
                    options: [
                      { value: "carrot", label: "Carrot" },
                      { value: "potato", label: "Potato" },
                    ]
                  }
                ]}
              />
            </div>
          )
        },
        {
          title: "Variants",
          description: "Different visual styles for the select component.",
          code: `<div className="space-y-4">
  <NovaSelect variant="underline" placeholder="Underline" options={["Option 1", "Option 2"]} />
  <NovaSelect variant="neumorphic" placeholder="Neumorphic" options={["Option 1", "Option 2"]} />
  <NovaSelect variant="ghost" placeholder="Ghost" options={["Option 1", "Option 2"]} />
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-sm">
              <NovaSelect variant="underline" placeholder="Underline" options={["Option 1", "Option 2"]} />
              <NovaSelect variant="neumorphic" placeholder="Neumorphic" options={["Option 1", "Option 2"]} />
              <NovaSelect variant="ghost" placeholder="Ghost" options={["Option 1", "Option 2"]} />
            </div>
          )
        }
      ]}
    />
  )
}
