"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function TextareaPage() {
  return (
    <ComponentDocTemplate
      title="Textarea"
      description="Displays a form textarea or a component that looks like a textarea. For multi-line text input."
      preview={<Textarea placeholder="Type your message here." className="w-[350px]" />}
      installCommand="npx nova-ui@latest add textarea"
      importCode={`import { Textarea } from "@/components/ui/textarea"`}
      usageCode={`import { Textarea } from "@/components/ui/textarea"

export function MyComponent() {
  return <Textarea placeholder="Type your message here." />
}`}
      props={[
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "disabled", type: "boolean", description: "Disable the textarea" },
        { name: "rows", type: "number", description: "Number of visible text rows" },
        { name: "value", type: "string", description: "Controlled value" },
        { name: "onChange", type: "function", description: "Callback when value changes" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "With Label",
          description: "Textarea with associated label.",
          code: `<div className="grid gap-1.5">
  <Label htmlFor="message">Your message</Label>
  <Textarea placeholder="Type here..." id="message" />
</div>`,
          preview: (
            <div className="grid w-full max-w-sm gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
          ),
        },
        {
          title: "With Button",
          description: "Textarea with submit button.",
          code: `<div className="grid gap-2">
  <Textarea placeholder="What's on your mind?" />
  <Button>Send message</Button>
</div>`,
          preview: (
            <div className="grid w-full max-w-sm gap-2">
              <Textarea placeholder="What's on your mind?" />
              <Button>Send message</Button>
            </div>
          ),
        },
        {
          title: "Disabled",
          description: "Disabled textarea.",
          code: `<Textarea placeholder="Disabled" disabled />`,
          preview: <Textarea placeholder="Disabled textarea" disabled className="w-[300px]" />,
        },
      ]}
      relatedComponents={[
        { name: "Input", href: "/docs/components/input" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/textarea.tsx"
    />
  )
}
