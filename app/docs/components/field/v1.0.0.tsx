"use client"

import { NovaField, FieldSet, FieldLegend, FieldContent } from "@/components/nova/nova-field"
import { NovaInput } from "@/components/nova/nova-input"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function FieldDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Field"
      description="A flexible container for form fields, used to group related inputs."
      whenToUse={[
        "To create grouped form sections (e.g., Personal Information, Address).",
        "When you need to visually distinguish a set of inputs from the rest of the form.",
        "For creating fieldset/legend structures accessibly."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaField enhances the standard fieldset with `variant` (card, glass, highlight) and `spacing` props for rapid layout composition."
        }
      ]}
      preview={
        <div className="w-full max-w-md space-y-4">
          <NovaField variant="card">
            <FieldSet>
              <FieldLegend>Personal Information</FieldLegend>
              <FieldContent className="space-y-4">
                <NovaInput label="First Name" placeholder="John" />
                <NovaInput label="Last Name" placeholder="Doe" />
              </FieldContent>
            </FieldSet>
          </NovaField>
          <div className="flex justify-end">
            <NovaButton>Save Changes</NovaButton>
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add field"
      importCode={`import { 
  NovaField, 
  FieldSet, 
  FieldLegend, 
  FieldContent 
} from "@/components/nova/nova-field"`}
      usageCode={`import { NovaField, FieldSet, FieldLegend, FieldContent } from "@/components/nova/nova-field"
import { NovaInput } from "@/components/nova/nova-input"

export function FieldDemo() {
  return (
    <NovaField variant="card">
      <FieldSet>
        <FieldLegend>Account Details</FieldLegend>
        <FieldContent className="space-y-4">
          <NovaInput label="Email" type="email" />
          <NovaInput label="Password" type="password" />
        </FieldContent>
      </FieldSet>
    </NovaField>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "card" | "glass" | "highlight" | "ghost"',
          default: '"default"',
          description: "Visual style of the field container.",
        },
        {
          name: "spacing",
          type: '"default" | "tight" | "loose"',
          default: '"default"',
          description: "Spacing between elements within the field.",
        },
      ]}
      examples={[
        {
          title: "Highlight Variant",
          description: "Useful for emphasizing a specific section of a form.",
          code: `<NovaField variant="highlight">
  <FieldSet>
    <FieldLegend>Important</FieldLegend>
    <FieldContent>
      <p className="text-sm text-muted-foreground">This section is critical.</p>
    </FieldContent>
  </FieldSet>
</NovaField>`,
          preview: (
            <NovaField variant="highlight">
              <FieldSet>
                <FieldLegend>Important</FieldLegend>
                <FieldContent>
                  <p className="text-sm text-muted-foreground">This section is critical.</p>
                </FieldContent>
              </FieldSet>
            </NovaField>
          )
        }
      ]}
    />
  )
}
