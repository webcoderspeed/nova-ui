"use client"

import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Loader2, Mail, Sparkles, Zap } from "lucide-react"

export default function ButtonDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Button"
      description="Displays a button or a component that looks like a button. V2 introduces new glow and gradient variants, pulse animations, and enhanced accessibility features."
      preview={
        <div className="flex flex-wrap items-center gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button className="bg-gradient-to-r from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50">
            <Sparkles className="mr-2 h-4 w-4" />
            Glow
          </Button>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaButton } from "@/nova-ui"

// V2 also exports individual button components
import { 
  NovaButton, 
  GlowButton, 
  GradientButton,
  PulseButton 
} from "@/nova-ui"`}
      usageCode={`import { NovaButton, GlowButton } from "@/nova-ui"

export function MyComponent() {
  return (
    <NovaButton variant="default" size="default">
      Click me
    </NovaButton>
  )
}

// NEW in v2.0.0 - Glow variant with animation
export function GlowExample() {
  return (
    <NovaButton variant="glow" pulse>
      <Sparkles className="mr-2 h-4 w-4" />
      Special Action
    </NovaButton>
  )
}

// NEW in v2.0.0 - Gradient button
export function GradientExample() {
  return (
    <NovaButton 
      variant="gradient"
      gradientFrom="from-blue-500"
      gradientTo="to-purple-600"
    >
      Gradient Button
    </NovaButton>
  )
}

// With loading state and haptic feedback
export function LoadingButton() {
  const [loading, setLoading] = useState(false)
  
  return (
    <NovaButton 
      loading={loading}
      hapticFeedback
      onClick={() => setLoading(true)}
    >
      Submit
    </NovaButton>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "glow" | "gradient"',
          default: '"default"',
          description: "The visual style variant of the button. Glow and gradient are NEW in v2.0.0",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg" | "xl" | "icon"',
          default: '"default"',
          description: "The size of the button. XL size is NEW in v2.0.0",
        },
        {
          name: "loading",
          type: "boolean",
          default: "false",
          description: "Shows a loading spinner and disables the button",
        },
        {
          name: "loadingText",
          type: "string",
          description: "Text to display while loading",
        },
        {
          name: "leftIcon",
          type: "ReactNode",
          description: "Icon to display on the left side",
        },
        {
          name: "rightIcon",
          type: "ReactNode",
          description: "Icon to display on the right side",
        },
        {
          name: "pulse",
          type: "boolean",
          default: "false",
          description: "Adds a pulse animation to the button (NEW in v2.0.0)",
        },
        {
          name: "hapticFeedback",
          type: "boolean",
          default: "false",
          description: "Enables haptic feedback on mobile devices (NEW in v2.0.0)",
        },
        {
          name: "gradientFrom",
          type: "string",
          description: "Starting color for gradient variant (NEW in v2.0.0)",
        },
        {
          name: "gradientTo",
          type: "string",
          description: "Ending color for gradient variant (NEW in v2.0.0)",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Change the default rendered element for the one passed as a child",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "When true, prevents the user from interacting with the button",
        },
        { name: "className", type: "string", description: "Additional CSS classes to apply" },
      ]}
      examples={[
        {
          title: "Glow Button",
          description: "New glow variant with animated effect. Perfect for CTAs.",
          code: `<NovaButton variant="glow">
  <Sparkles className="mr-2 h-4 w-4" />
  Get Started
</NovaButton>`,
          preview: (
            <Button className="bg-gradient-to-r from-primary to-primary/60 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
              <Sparkles className="mr-2 h-4 w-4" />
              Get Started
            </Button>
          ),
        },
        {
          title: "Pulse Animation",
          description: "Add attention-grabbing pulse animation.",
          code: `<NovaButton variant="default" pulse>
  <Zap className="mr-2 h-4 w-4" />
  New Feature
</NovaButton>`,
          preview: (
            <Button className="animate-pulse">
              <Zap className="mr-2 h-4 w-4" />
              New Feature
            </Button>
          ),
        },
        {
          title: "With Icon",
          description: "Add an icon to your button for additional context.",
          code: `<NovaButton leftIcon={<Mail className="h-4 w-4" />}>
  Login with Email
</NovaButton>`,
          preview: (
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Login with Email
            </Button>
          ),
        },
        {
          title: "Loading State",
          description: "Show a loading spinner when an action is in progress.",
          code: `<NovaButton loading loadingText="Please wait...">
  Submit
</NovaButton>`,
          preview: (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ),
        },
        {
          title: "All Sizes (including XL)",
          description: "Available size variants with new XL size.",
          code: `<div className="flex items-center gap-4">
  <NovaButton size="sm">Small</NovaButton>
  <NovaButton size="default">Default</NovaButton>
  <NovaButton size="lg">Large</NovaButton>
  <NovaButton size="xl">Extra Large</NovaButton>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button className="h-12 px-8 text-lg">Extra Large</Button>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Toggle", href: "/docs/components/toggle" },
        { name: "Toggle Group", href: "/docs/components/toggle-group" },
        { name: "Animated Button", href: "/docs/nova-extras/animated-button" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
