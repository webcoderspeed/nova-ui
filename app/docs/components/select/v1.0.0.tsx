"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SelectDocsV1() {
  return (
    <ComponentDocTemplate
      title="Select"
      description="Displays a list of options for the user to pick from."
      preview={
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
          </SelectContent>
        </Select>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/nova-ui/select"`}
      usageCode={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/nova-ui/select"

export function MySelect() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="opt1">Option 1</SelectItem>
        <SelectItem value="opt2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  )
}`}
      props={[
        { name: "value", type: "string", description: "Controlled value" },
        { name: "defaultValue", type: "string", description: "Default value" },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback on value change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the select" },
      ]}
      examples={[
        {
          title: "Basic Select",
          description: "Simple dropdown select.",
          code: `<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
  </SelectContent>
</Select>`,
          preview: (
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Combobox", href: "/docs/components/command" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
