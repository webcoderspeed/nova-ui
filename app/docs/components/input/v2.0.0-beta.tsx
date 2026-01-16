"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Search, Eye, Check } from "lucide-react"

export default function InputDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Input"
      description="Displays a form input field. V2 adds floating labels, validation states, character counter, and masking support."
      preview={
        <div className="grid w-full max-w-sm gap-4">
          <div className="relative">
            <Input id="float" className="peer pt-4" placeholder=" " />
            <Label
              htmlFor="float"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Floating Label
            </Label>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="pl-9" placeholder="Search with validation..." />
            <Check className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaInput } from "@/nova-ui"

// V2 exports additional input variants
import { 
  NovaInput, 
  FloatingInput,
  MaskedInput,
  SearchInput 
} from "@/nova-ui"`}
      usageCode={`import { NovaInput, FloatingInput } from "@/nova-ui"

// Floating label input (NEW in v2.0.0)
export function FloatingExample() {
  return (
    <FloatingInput label="Email" type="email" />
  )
}

// With validation state (NEW in v2.0.0)
export function ValidatedInput() {
  return (
    <NovaInput 
      placeholder="Username"
      validation="success"
      validationMessage="Username is available"
    />
  )
}

// With character counter (NEW in v2.0.0)
export function CounterInput() {
  return (
    <NovaInput 
      placeholder="Bio"
      maxLength={100}
      showCounter
    />
  )
}

// Masked input (NEW in v2.0.0)
export function PhoneInput() {
  return (
    <MaskedInput 
      mask="(###) ###-####"
      placeholder="Phone number"
    />
  )
}`}
      props={[
        { name: "type", type: "string", default: '"text"', description: "The type of input" },
        { name: "placeholder", type: "string", description: "Placeholder text" },
        { name: "disabled", type: "boolean", default: "false", description: "Disables the input" },
        { name: "leftIcon", type: "ReactNode", description: "Icon on the left side" },
        { name: "rightIcon", type: "ReactNode", description: "Icon on the right side" },
        { name: "error", type: "string", description: "Error message to display" },
        {
          name: "validation",
          type: '"success" | "error" | "warning"',
          description: "Validation state (NEW in v2.0.0)",
        },
        { name: "validationMessage", type: "string", description: "Validation message (NEW in v2.0.0)" },
        {
          name: "showCounter",
          type: "boolean",
          default: "false",
          description: "Show character counter (NEW in v2.0.0)",
        },
        { name: "maxLength", type: "number", description: "Maximum character length" },
        { name: "mask", type: "string", description: "Input mask pattern (NEW in v2.0.0)" },
        { name: "floatingLabel", type: "string", description: "Floating label text (NEW in v2.0.0)" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Floating Label",
          description: "Input with animated floating label.",
          code: `<FloatingInput label="Email Address" type="email" />`,
          preview: (
            <div className="relative max-w-sm">
              <Input id="float-ex" className="peer pt-4" placeholder=" " />
              <Label
                htmlFor="float-ex"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email Address
              </Label>
            </div>
          ),
        },
        {
          title: "Validation States",
          description: "Input with success/error validation.",
          code: `<NovaInput 
  validation="success"
  validationMessage="Looks good!"
  rightIcon={<Check className="h-4 w-4 text-green-500" />}
/>`,
          preview: (
            <div className="grid max-w-sm gap-1.5">
              <div className="relative">
                <Input className="border-green-500 pr-9" defaultValue="valid@email.com" />
                <Check className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-500" />
              </div>
              <p className="text-sm text-green-500">Looks good!</p>
            </div>
          ),
        },
        {
          title: "With Character Counter",
          description: "Input showing remaining characters.",
          code: `<NovaInput 
  placeholder="Write your bio"
  maxLength={100}
  showCounter
/>`,
          preview: (
            <div className="grid max-w-sm gap-1.5">
              <Input placeholder="Write your bio" maxLength={100} />
              <p className="text-xs text-muted-foreground text-right">0/100</p>
            </div>
          ),
        },
        {
          title: "Password with Toggle",
          description: "Password input with visibility toggle.",
          code: `<NovaInput 
  type="password"
  showPasswordToggle
  placeholder="Enter password"
/>`,
          preview: (
            <div className="relative max-w-sm">
              <Input type="password" className="pr-9" placeholder="Enter password" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <Eye className="h-4 w-4" />
              </button>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Label", href: "/docs/components/label" },
        { name: "Textarea", href: "/docs/components/textarea" },
        { name: "Floating Input", href: "/docs/nova-extras/floating-input" },
        { name: "Form", href: "/docs/components/form" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
