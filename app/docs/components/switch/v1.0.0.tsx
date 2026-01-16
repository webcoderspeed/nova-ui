"use client"

import * as React from "react"
import { NovaSwitch } from "@/components/nova/nova-switch"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SwitchDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
      whenToUse={[
        "When you need to toggle a single setting on or off.",
        "As a replacement for a single checkbox.",
        "For activating or deactivating a feature."
      ]}
      hints={[
        { type: "info", content: "Supports `size` variants: sm, md, lg." },
        { type: "info", content: "Includes `color` variants for states like success or error." },
        { type: "info", content: "Can have a label and description." }
      ]}
      preview={
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <NovaSwitch label="Airplane Mode" />
          <NovaSwitch
            label="Notifications"
            description="Receive emails about new products."
            color="success"
            defaultChecked
          />
          <NovaSwitch
             label="Large Switch"
             size="lg"
             color="warning"
          />
        </div>
      }
      installCommand="npx shadcn@latest add switch"
      importCode={`import { NovaSwitch } from "@/components/nova/nova-switch"`}
      usageCode={`<NovaSwitch label="Airplane Mode" />`}
      props={[
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the switch."
        },
        {
          name: "color",
          type: '"default" | "success" | "warning" | "error"',
          defaultValue: '"default"',
          description: "Color of the switch when checked."
        },
        {
          name: "label",
          type: "string",
          defaultValue: "undefined",
          description: "Label text for the switch."
        },
        {
          name: "description",
          type: "string",
          defaultValue: "undefined",
          description: "Description text displayed below the label."
        },
        {
          name: "labelPosition",
          type: '"left" | "right"',
          defaultValue: '"right"',
          description: "Position of the label relative to the switch."
        }
      ]}
      examples={[
        {
          title: "Sizes",
          description: "Different sizes for the switch.",
          code: `<div className="flex flex-col gap-4">
  <NovaSwitch size="sm" label="Small" />
  <NovaSwitch size="md" label="Medium" />
  <NovaSwitch size="lg" label="Large" />
</div>`,
          preview: (
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <NovaSwitch size="sm" label="Small" />
              <NovaSwitch size="md" label="Medium" />
              <NovaSwitch size="lg" label="Large" />
            </div>
          )
        },
        {
          title: "Colors",
          description: "Different colors for the checked state.",
          code: `<div className="flex flex-col gap-4">
  <NovaSwitch color="success" defaultChecked label="Success" />
  <NovaSwitch color="warning" defaultChecked label="Warning" />
  <NovaSwitch color="error" defaultChecked label="Error" />
</div>`,
          preview: (
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <NovaSwitch color="success" defaultChecked label="Success" />
              <NovaSwitch color="warning" defaultChecked label="Warning" />
              <NovaSwitch color="error" defaultChecked label="Error" />
            </div>
          )
        },
        {
           title: "Label Position",
           description: "Positioning the label on the left.",
           code: `<NovaSwitch labelPosition="left" label="Left Label" />`,
           preview: (
             <div className="w-full max-w-sm">
               <NovaSwitch labelPosition="left" label="Left Label" />
             </div>
           )
        }
      ]}
    />
  )
}
