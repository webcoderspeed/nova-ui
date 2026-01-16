"use client"

import { NovaInput } from "@/components/nova/nova-input"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Mail, Search } from "lucide-react"

export default function InputDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Input"
      description="Displays a form input field or a component that looks like an input field."
      whenToUse={[
        "When you need to get text data from the user.",
        "For login forms, search bars, and profile editing.",
        "When standard HTML inputs need styling consistency."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaInput is packed with features: `floatingLabel`, `leftIcon`, `rightIcon`, `clearable`, `showPasswordToggle`, and validation states (`error`, `success`)."
        }
      ]}
      preview={
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <NovaInput label="Email" placeholder="example@gmail.com" leftIcon={<Mail className="h-4 w-4" />} />
          <NovaInput floatingLabel="Password" type="password" showPasswordToggle />
          <NovaInput placeholder="Search..." rightIcon={<Search className="h-4 w-4" />} variant="filled" />
          <NovaInput label="Error State" error="Invalid input" defaultValue="Wrong value" />
        </div>
      }
      installCommand="npx nova-ui@latest add input"
      importCode={`import { NovaInput } from "@/components/nova/nova-input"`}
      usageCode={`import { NovaInput } from "@/components/nova/nova-input"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <NovaInput label="Email" type="email" placeholder="Email" />
    </div>
  )
}`}
      props={[
        {
          name: "label",
          type: "string",
          description: "Text label displayed above the input.",
        },
        {
          name: "floatingLabel",
          type: "string",
          description: "Label that moves to the top when focused (activates floating variant).",
        },
        {
          name: "error",
          type: "string",
          description: "Error message displayed below the input.",
        },
        {
          name: "success",
          type: "boolean",
          description: "Visual indicator for success state.",
        },
        {
          name: "variant",
          type: '"default" | "floating" | "underline" | "filled"',
          defaultValue: '"default"',
          description: "Visual style of the input.",
        },
        {
          name: "inputSize",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the input.",
        },
        {
          name: "leftIcon",
          type: "ReactNode",
          description: "Icon displayed inside the input on the left.",
        },
        {
          name: "rightIcon",
          type: "ReactNode",
          description: "Icon displayed inside the input on the right.",
        },
        {
          name: "clearable",
          type: "boolean",
          defaultValue: "false",
          description: "Shows a clear button when value is present.",
        },
        {
          name: "showPasswordToggle",
          type: "boolean",
          defaultValue: "false",
          description: "Shows an eye icon to toggle password visibility.",
        },
      ]}
      examples={[
        {
          title: "Floating Label",
          description: "A Material Design-inspired floating label input.",
          code: `<NovaInput floatingLabel="Username" />`,
          preview: <div className="max-w-sm pt-4"><NovaInput floatingLabel="Username" /></div>
        },
        {
          title: "Underline Variant",
          description: "Minimalist input with only a bottom border.",
          code: `<NovaInput variant="underline" placeholder="Underline input" />`,
          preview: <div className="max-w-sm"><NovaInput variant="underline" placeholder="Underline input" /></div>
        },
        {
          title: "With Icons",
          description: "Input with leading and trailing icons.",
          code: `<NovaInput 
  leftIcon={<Mail className="h-4 w-4" />} 
  rightIcon={<Search className="h-4 w-4" />} 
  placeholder="Search mail..." 
/>`,
          preview: (
            <div className="max-w-sm">
              <NovaInput 
                leftIcon={<Mail className="h-4 w-4" />} 
                rightIcon={<Search className="h-4 w-4" />} 
                placeholder="Search mail..." 
              />
            </div>
          )
        }
      ]}
    />
  )
}
