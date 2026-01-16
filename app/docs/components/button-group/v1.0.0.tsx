"use client"

import { NovaButtonGroup, NovaButtonGroupSeparator, NovaButtonGroupText } from "@/components/nova/nova-button-group"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react"

export default function ButtonGroupDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Button Group"
      description="Groups a series of buttons together on a single line or column."
      whenToUse={[
        "To group related actions (e.g., text alignment options).",
        "For toggle-like functionality with multiple options.",
        "To create toolbars."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaButtonGroup supports `variant` (solid, outline) and `orientation` (horizontal, vertical) props to easily style grouped actions."
        }
      ]}
      preview={
        <div className="flex flex-col gap-8">
          <NovaButtonGroup variant="outline">
            <NovaButton variant="ghost" size="icon" className="rounded-none"><Bold className="h-4 w-4" /></NovaButton>
            <NovaButtonGroupSeparator />
            <NovaButton variant="ghost" size="icon" className="rounded-none"><Italic className="h-4 w-4" /></NovaButton>
            <NovaButtonGroupSeparator />
            <NovaButton variant="ghost" size="icon" className="rounded-none"><Underline className="h-4 w-4" /></NovaButton>
          </NovaButtonGroup>

          <NovaButtonGroup variant="solid">
            <NovaButton variant="ghost" size="sm" className="rounded-md">Daily</NovaButton>
            <NovaButton variant="ghost" size="sm" className="rounded-md">Weekly</NovaButton>
            <NovaButton variant="ghost" size="sm" className="rounded-md">Monthly</NovaButton>
          </NovaButtonGroup>
        </div>
      }
      installCommand="npx nova-ui@latest add button-group"
      importCode={`import { 
  NovaButtonGroup, 
  NovaButtonGroupSeparator, 
  NovaButtonGroupText 
} from "@/components/nova/nova-button-group"`}
      usageCode={`import { NovaButtonGroup, NovaButtonGroupSeparator } from "@/components/nova/nova-button-group"
import { NovaButton } from "@/components/nova/nova-button"

export function ButtonGroupDemo() {
  return (
    <NovaButtonGroup variant="outline">
      <NovaButton variant="ghost">One</NovaButton>
      <NovaButtonGroupSeparator />
      <NovaButton variant="ghost">Two</NovaButton>
      <NovaButtonGroupSeparator />
      <NovaButton variant="ghost">Three</NovaButton>
    </NovaButtonGroup>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "solid" | "outline"',
          defaultValue: '"default"',
          description: "Visual style of the container.",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          defaultValue: '"horizontal"',
          description: "Layout direction of the buttons.",
        },
      ]}
      examples={[
        {
          title: "Vertical Orientation",
          description: "Buttons stacked vertically.",
          code: `<NovaButtonGroup orientation="vertical" variant="outline">
  <NovaButton variant="ghost" className="justify-start">Profile</NovaButton>
  <NovaButtonGroupSeparator />
  <NovaButton variant="ghost" className="justify-start">Settings</NovaButton>
  <NovaButtonGroupSeparator />
  <NovaButton variant="ghost" className="justify-start">Logout</NovaButton>
</NovaButtonGroup>`,
          preview: (
            <NovaButtonGroup orientation="vertical" variant="outline">
              <NovaButton variant="ghost" className="justify-start">Profile</NovaButton>
              <NovaButtonGroupSeparator />
              <NovaButton variant="ghost" className="justify-start">Settings</NovaButton>
              <NovaButtonGroupSeparator />
              <NovaButton variant="ghost" className="justify-start">Logout</NovaButton>
            </NovaButtonGroup>
          )
        }
      ]}
    />
  )
}
