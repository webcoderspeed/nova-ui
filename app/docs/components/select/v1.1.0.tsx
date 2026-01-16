"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SelectDocsV1_1() {
  return (
    <ComponentDocTemplate
      title="Select"
      description="Displays a list of options with groups and labels support."
      preview={
        <div className="grid gap-2">
          <Label htmlFor="fruit">Fruit</Label>
          <Select>
            <SelectTrigger id="fruit" className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { NovaSelect } from "@/nova-ui"

// Or individual components
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/nova-ui/select"`}
      usageCode={`import { NovaSelect } from "@/nova-ui"

// Using NovaSelect wrapper (NEW in v1.1.0)
export function MySelect() {
  return (
    <NovaSelect
      placeholder="Select option"
      options={[
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange", disabled: true },
      ]}
    />
  )
}

// With groups (NEW in v1.1.0)
export function GroupedSelect() {
  return (
    <NovaSelect
      placeholder="Select"
      groups={[
        { 
          label: "Fruits", 
          options: [
            { value: "apple", label: "Apple" },
            { value: "banana", label: "Banana" },
          ] 
        },
      ]}
    />
  )
}`}
      props={[
        { name: "value", type: "string", description: "Controlled value" },
        { name: "defaultValue", type: "string", description: "Default value" },
        { name: "onValueChange", type: "(value: string) => void", description: "Callback on value change" },
        { name: "disabled", type: "boolean", default: "false", description: "Disable the select" },
        { name: "options", type: "SelectOption[]", description: "Array of options (NEW in v1.1.0)" },
        { name: "groups", type: "SelectGroup[]", description: "Grouped options (NEW in v1.1.0)" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
      ]}
      examples={[
        {
          title: "Grouped Options",
          description: "Select with grouped options.",
          code: `<NovaSelect
  placeholder="Select food"
  groups={[
    { label: "Fruits", options: [...] },
    { label: "Vegetables", options: [...] },
  ]}
/>`,
          preview: (
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select food" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="carrot">Carrot</SelectItem>
                  <SelectItem value="broccoli">Broccoli</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          ),
        },
        {
          title: "With Disabled Option",
          description: "Select with a disabled option.",
          code: `<NovaSelect
  options={[
    { value: "available", label: "Available" },
    { value: "unavailable", label: "Unavailable", disabled: true },
  ]}
/>`,
          preview: (
            <Select>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="unavailable" disabled>
                  Unavailable
                </SelectItem>
              </SelectContent>
            </Select>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Combobox", href: "/docs/components/command" },
        { name: "Radio Group", href: "/docs/components/radio-group" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
