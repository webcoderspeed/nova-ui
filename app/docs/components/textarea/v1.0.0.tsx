"use client"

import * as React from "react"
import { NovaTextarea } from "@/components/nova/nova-textarea"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function TextareaDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Form"
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea."
      whenToUse={[
        "When users need to enter a large amount of text.",
        "For comments, feedback, or descriptions.",
        "When single-line inputs are insufficient."
      ]}
      hints={[
        { type: "info", content: "Supports character counting with `showCount` and `maxLength`." },
        { type: "info", content: "Includes validation states with `error` prop." },
        { type: "info", content: "Can be resized horizontally, vertically, or disabled." }
      ]}
      preview={
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <NovaTextarea placeholder="Type your message here." />
          <NovaTextarea
            label="Bio"
            placeholder="Tell us about yourself"
            helperText="You can @mention other users."
          />
          <NovaTextarea
            label="Feedback"
            placeholder="Max 100 characters"
            maxLength={100}
            showCount
          />
        </div>
      }
      installCommand="npx shadcn@latest add textarea"
      importCode={`import { NovaTextarea } from "@/components/nova/nova-textarea"`}
      usageCode={`<NovaTextarea placeholder="Type your message here." />`}
      props={[
        {
          name: "variant",
          type: '"default" | "filled" | "underline"',
          defaultValue: '"default"',
          description: "Visual style of the textarea."
        },
        {
          name: "resize",
          type: '"none" | "vertical" | "horizontal" | "both"',
          defaultValue: '"vertical"',
          description: "Resize behavior of the textarea."
        },
        {
          name: "label",
          type: "string",
          defaultValue: "undefined",
          description: "Label for the textarea."
        },
        {
          name: "helperText",
          type: "string",
          defaultValue: "undefined",
          description: "Helper text displayed below the textarea."
        },
        {
          name: "error",
          type: "string",
          defaultValue: "undefined",
          description: "Error message to display."
        },
        {
          name: "showCount",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to show the character count."
        },
        {
          name: "maxLength",
          type: "number",
          defaultValue: "undefined",
          description: "Maximum number of characters allowed."
        }
      ]}
      examples={[
        {
          title: "Variants",
          description: "Different visual styles for the textarea.",
          code: `<div className="space-y-4">
  <NovaTextarea variant="filled" placeholder="Filled variant" />
  <NovaTextarea variant="underline" placeholder="Underline variant" />
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-sm">
              <NovaTextarea variant="filled" placeholder="Filled variant" />
              <NovaTextarea variant="underline" placeholder="Underline variant" />
            </div>
          )
        },
        {
          title: "Validation",
          description: "Textarea with error state.",
          code: `<NovaTextarea
  label="Comment"
  placeholder="Enter your comment"
  error="Comment is required."
/>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaTextarea
                label="Comment"
                placeholder="Enter your comment"
                error="Comment is required."
              />
            </div>
          )
        },
        {
          title: "Character Count",
          description: "Textarea with character limit and counter.",
          code: `<NovaTextarea
  label="Tweet"
  placeholder="What's happening?"
  maxLength={280}
  showCount
/>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaTextarea
                label="Tweet"
                placeholder="What's happening?"
                maxLength={280}
                showCount
              />
            </div>
          )
        }
      ]}
    />
  )
}
