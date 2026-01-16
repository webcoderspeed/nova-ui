"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function RadioGroupPage() {
  return (
    <ComponentDocTemplate
      title="Radio Group"
      description="A set of checkable buttons — known as radio buttons — where no more than one of the buttons can be checked at a time."
      preview={
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      }
      installCommand="npx nova-ui@latest add radio-group"
      importCode={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`}
      usageCode={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function MyComponent() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}`}
      props={[
        { name: "value", type: "string", description: "Controlled value" },
        { name: "defaultValue", type: "string", description: "Default selected value" },
        { name: "onValueChange", type: "function", description: "Callback when value changes" },
        { name: "disabled", type: "boolean", description: "Disable the entire group" },
        { name: "required", type: "boolean", description: "Mark as required for forms" },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"vertical"',
          description: "Layout orientation",
        },
      ]}
      examples={[
        {
          title: "Horizontal Layout",
          description: "Radio buttons in a horizontal row.",
          code: `<RadioGroup defaultValue="option-one" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="h1" />
    <Label htmlFor="h1">One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="h2" />
    <Label htmlFor="h2">Two</Label>
  </div>
</RadioGroup>`,
          preview: (
            <RadioGroup defaultValue="option-one" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="h1" />
                <Label htmlFor="h1">One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="h2" />
                <Label htmlFor="h2">Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="h3" />
                <Label htmlFor="h3">Three</Label>
              </div>
            </RadioGroup>
          ),
        },
        {
          title: "With Description",
          description: "Radio options with descriptive text.",
          code: `<RadioGroup>
  <div className="flex items-start space-x-2">
    <RadioGroupItem value="startup" id="startup" />
    <div>
      <Label htmlFor="startup">Startup</Label>
      <p className="text-sm text-muted-foreground">
        Perfect for new projects
      </p>
    </div>
  </div>
</RadioGroup>`,
          preview: (
            <RadioGroup defaultValue="startup" className="space-y-3">
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="startup" id="startup" className="mt-1" />
                <div>
                  <Label htmlFor="startup" className="font-medium">
                    Startup
                  </Label>
                  <p className="text-sm text-muted-foreground">Perfect for new projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="business" id="business" className="mt-1" />
                <div>
                  <Label htmlFor="business" className="font-medium">
                    Business
                  </Label>
                  <p className="text-sm text-muted-foreground">For growing teams</p>
                </div>
              </div>
            </RadioGroup>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Checkbox", href: "/docs/components/checkbox" },
        { name: "Switch", href: "/docs/components/switch" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/radio-group.tsx"
    />
  )
}
