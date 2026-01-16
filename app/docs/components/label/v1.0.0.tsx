"use client"

import * as React from "react"
import { NovaLabel } from "@/components/nova/nova-label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaInput } from "@/components/nova/nova-input"
import { NovaCheckbox } from "@/components/nova/nova-checkbox"

export default function LabelDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Label"
      description="Renders an accessible label associated with controls."
      whenToUse={[
        "To label form controls like inputs, checkboxes, and radio buttons.",
        "To provide additional context or validation state (required, error).",
        "To ensure accessibility for screen readers."
      ]}
      hints={[
        { type: "info", content: "Supports variants like `required`, `optional`, `error`, `success`." },
        { type: "info", content: "Use `htmlFor` prop to associate with an input ID." },
        { type: "info", content: "Can be styled with different sizes." }
      ]}
      preview={
        <div className="grid gap-4 w-full max-w-sm">
          <div className="grid gap-1.5">
            <NovaLabel htmlFor="email-1">Email</NovaLabel>
            <NovaInput id="email-1" placeholder="Email" />
          </div>
          <div className="flex items-center space-x-2">
            <NovaCheckbox id="terms-1" />
            <NovaLabel htmlFor="terms-1">Accept terms and conditions</NovaLabel>
          </div>
        </div>
      }
      installCommand="npx shadcn@latest add label"
      importCode={`import { NovaLabel } from "@/components/nova/nova-label"`}
      usageCode={`<NovaLabel htmlFor="email">Email</NovaLabel>`}
      props={[
        {
          name: "variant",
          type: '"default" | "required" | "optional" | "error" | "success" | "warning" | "accent"',
          defaultValue: '"default"',
          description: "Visual style of the label."
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          defaultValue: '"default"',
          description: "Size of the label text."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Labels with different states and meanings.",
          code: `<div className="grid gap-4">
  <div className="grid gap-1.5">
    <NovaLabel variant="required" htmlFor="req">Required Field</NovaLabel>
    <NovaInput id="req" />
  </div>
  <div className="grid gap-1.5">
    <NovaLabel variant="optional" htmlFor="opt">Optional Field</NovaLabel>
    <NovaInput id="opt" />
  </div>
  <div className="grid gap-1.5">
    <NovaLabel variant="error" htmlFor="err">Error State</NovaLabel>
    <NovaInput id="err" error="Invalid input" />
  </div>
   <div className="grid gap-1.5">
    <NovaLabel variant="success" htmlFor="succ">Success State</NovaLabel>
    <NovaInput id="succ" />
  </div>
</div>`,
          preview: (
            <div className="grid gap-4 w-full max-w-sm">
              <div className="grid gap-1.5">
                <NovaLabel variant="required" htmlFor="req">Required Field</NovaLabel>
                <NovaInput id="req" />
              </div>
              <div className="grid gap-1.5">
                <NovaLabel variant="optional" htmlFor="opt">Optional Field</NovaLabel>
                <NovaInput id="opt" />
              </div>
              <div className="grid gap-1.5">
                <NovaLabel variant="error" htmlFor="err">Error State</NovaLabel>
                <NovaInput id="err" error="Invalid input" />
              </div>
               <div className="grid gap-1.5">
                <NovaLabel variant="success" htmlFor="succ">Success State</NovaLabel>
                <NovaInput id="succ" />
              </div>
            </div>
          )
        },
        {
          title: "Sizes",
          description: "Labels in different sizes.",
          code: `<div className="grid gap-4">
  <NovaLabel size="sm">Small Label</NovaLabel>
  <NovaLabel size="default">Default Label</NovaLabel>
  <NovaLabel size="lg">Large Label</NovaLabel>
</div>`,
          preview: (
            <div className="grid gap-4 w-full max-w-sm">
              <NovaLabel size="sm">Small Label</NovaLabel>
              <NovaLabel size="default">Default Label</NovaLabel>
              <NovaLabel size="lg">Large Label</NovaLabel>
            </div>
          )
        }
      ]}
    />
  )
}
