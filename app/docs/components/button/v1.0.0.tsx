"use client"

import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Mail, Loader2, Send } from "lucide-react"

export default function ButtonDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Button"
      description="Displays a button or a component that looks like a button."
      whenToUse={[
        "To trigger an action or event (e.g., submitting a form, opening a dialog).",
        "For navigation links that look like buttons.",
        "When you need a primary call-to-action."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaButton adds `animation` (ripple, shine, glow, etc.), `loading` states, and `rounded` variants to the standard button, making it highly interactive out of the box."
        }
      ]}
      preview={
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 flex-wrap">
            <NovaButton>Default</NovaButton>
            <NovaButton variant="secondary">Secondary</NovaButton>
            <NovaButton variant="destructive">Destructive</NovaButton>
            <NovaButton variant="outline">Outline</NovaButton>
            <NovaButton variant="ghost">Ghost</NovaButton>
            <NovaButton variant="link">Link</NovaButton>
          </div>
          <div className="flex gap-4 flex-wrap">
            <NovaButton animation="ripple">Ripple Effect</NovaButton>
            <NovaButton animation="shine">Shine Effect</NovaButton>
            <NovaButton animation="glow" variant="default">Glow Effect</NovaButton>
          </div>
          <div className="flex gap-4 flex-wrap">
            <NovaButton loading>Loading</NovaButton>
            <NovaButton leftIcon={<Mail className="mr-2 h-4 w-4" />}>Login with Email</NovaButton>
            <NovaButton rightIcon={<Send className="ml-2 h-4 w-4" />}>Send Message</NovaButton>
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add button"
      importCode={`import { NovaButton } from "@/components/nova/nova-button"`}
      usageCode={`import { NovaButton } from "@/components/nova/nova-button"
import { Mail } from "lucide-react"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <NovaButton>Click me</NovaButton>
      <NovaButton animation="ripple">Ripple</NovaButton>
      <NovaButton leftIcon={<Mail className="mr-2 h-4 w-4" />}>
        Login with Email
      </NovaButton>
    </div>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
          defaultValue: '"default"',
          description: "The visual style of the button.",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "icon"',
          defaultValue: '"default"',
          description: "The size of the button.",
        },
        {
          name: "animation",
          type: '"none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"',
          defaultValue: '"scale"',
          description: "Interaction animation.",
        },
        {
          name: "rounded",
          type: '"default" | "full" | "none"',
          defaultValue: '"default"',
          description: "Border radius style.",
        },
        {
          name: "loading",
          type: "boolean",
          defaultValue: "false",
          description: "Shows a loading spinner and disables the button.",
        },
        {
          name: "loadingText",
          type: "string",
          description: "Text to display while loading.",
        },
        {
          name: "leftIcon",
          type: "ReactNode",
          description: "Icon to display before the button text.",
        },
        {
          name: "rightIcon",
          type: "ReactNode",
          description: "Icon to display after the button text.",
        },
      ]}
      examples={[
        {
          title: "Loading State",
          description: "Button with a loading spinner.",
          code: `<NovaButton loading>Please wait</NovaButton>`,
          preview: <NovaButton loading>Please wait</NovaButton>
        },
        {
          title: "Rounded Variants",
          description: "Different border radius options.",
          code: `<div className="flex gap-4">
  <NovaButton rounded="none">Square</NovaButton>
  <NovaButton rounded="default">Default</NovaButton>
  <NovaButton rounded="full">Pill</NovaButton>
</div>`,
          preview: (
            <div className="flex gap-4">
              <NovaButton rounded="none">Square</NovaButton>
              <NovaButton rounded="default">Default</NovaButton>
              <NovaButton rounded="full">Pill</NovaButton>
            </div>
          )
        }
      ]}
    />
  )
}
