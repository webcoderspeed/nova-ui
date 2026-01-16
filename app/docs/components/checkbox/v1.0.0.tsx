"use client"

import { NovaCheckbox } from "@/components/nova/nova-checkbox"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function CheckboxDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      whenToUse={[
        "When a user needs to select one or more options from a list.",
        "For binary choices (e.g., 'I agree to terms').",
        "When you need to toggle a setting on or off."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaCheckbox wraps the primitive with a built-in label, description, and error message, plus `size` and `color` variants."
        }
      ]}
      preview={
        <div className="flex flex-col gap-4">
          <NovaCheckbox label="Accept terms and conditions" description="You agree to our Terms of Service and Privacy Policy." />
          <NovaCheckbox label="Subscribe to newsletter" defaultChecked color="success" />
          <NovaCheckbox label="Invalid option" error="You must check this box." color="error" />
        </div>
      }
      installCommand="npx nova-ui@latest add checkbox"
      importCode={`import { NovaCheckbox } from "@/components/nova/nova-checkbox"`}
      usageCode={`import { NovaCheckbox } from "@/components/nova/nova-checkbox"

export function CheckboxDemo() {
  return (
    <div className="items-top flex space-x-2">
      <NovaCheckbox 
        id="terms1" 
        label="Accept terms and conditions"
        description="You agree to our Terms of Service and Privacy Policy."
      />
    </div>
  )
}`}
      props={[
        {
          name: "label",
          type: "string",
          description: "The text label associated with the checkbox.",
        },
        {
          name: "description",
          type: "string",
          description: "Helper text displayed below the label.",
        },
        {
          name: "error",
          type: "string",
          description: "Error message to display.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Size of the checkbox.",
        },
        {
          name: "color",
          type: '"default" | "success" | "warning" | "error"',
          defaultValue: '"default"',
          description: "Color theme for the checked state.",
        },
      ]}
      examples={[
        {
          title: "Size Variants",
          description: "Checkboxes in different sizes.",
          code: `<div className="flex flex-col gap-4">
  <NovaCheckbox size="sm" label="Small" />
  <NovaCheckbox size="md" label="Medium" />
  <NovaCheckbox size="lg" label="Large" />
</div>`,
          preview: (
            <div className="flex flex-col gap-4">
              <NovaCheckbox size="sm" label="Small" />
              <NovaCheckbox size="md" label="Medium" />
              <NovaCheckbox size="lg" label="Large" />
            </div>
          )
        },
        {
          title: "Color Variants",
          description: "Semantic colors for different states.",
          code: `<div className="flex flex-col gap-4">
  <NovaCheckbox defaultChecked color="default" label="Default" />
  <NovaCheckbox defaultChecked color="success" label="Success" />
  <NovaCheckbox defaultChecked color="warning" label="Warning" />
  <NovaCheckbox defaultChecked color="error" label="Error" />
</div>`,
          preview: (
            <div className="flex flex-col gap-4">
              <NovaCheckbox defaultChecked color="default" label="Default" />
              <NovaCheckbox defaultChecked color="success" label="Success" />
              <NovaCheckbox defaultChecked color="warning" label="Warning" />
              <NovaCheckbox defaultChecked color="error" label="Error" />
            </div>
          )
        }
      ]}
    />
  )
}
