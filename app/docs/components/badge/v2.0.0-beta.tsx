"use client"

import { Badge } from "@/components/ui/badge"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Check, AlertCircle, Sparkles } from "lucide-react"

export default function BadgeDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Badge"
      description="V2 badge with dot indicators, pulse animation, gradient variants, and sizes."
      preview={
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge className="bg-gradient-to-r from-primary to-primary/60">
            <Sparkles className="h-3 w-3 mr-1" />
            Gradient
          </Badge>
          <Badge className="animate-pulse">Live</Badge>
          <Badge variant="outline" className="gap-1">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Online
          </Badge>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaBadge } from "@/nova-ui"

// V2 exports additional variants
import { 
  NovaBadge,
  StatusBadge,
  AnimatedBadge,
  GradientBadge 
} from "@/nova-ui"`}
      usageCode={`import { NovaBadge, StatusBadge, GradientBadge } from "@/nova-ui"

// With dot indicator (NEW in v2.0.0)
export function StatusExample() {
  return (
    <StatusBadge status="online">
      Available
    </StatusBadge>
  )
}

// Animated badge (NEW in v2.0.0)
export function AnimatedExample() {
  return (
    <NovaBadge pulse>
      Live
    </NovaBadge>
  )
}

// Gradient badge (NEW in v2.0.0)
export function GradientExample() {
  return (
    <GradientBadge from="from-blue-500" to="to-purple-600">
      Premium
    </GradientBadge>
  )
}

// Different sizes (NEW in v2.0.0)
export function SizesExample() {
  return (
    <>
      <NovaBadge size="sm">Small</NovaBadge>
      <NovaBadge size="default">Default</NovaBadge>
      <NovaBadge size="lg">Large</NovaBadge>
    </>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning"',
          default: '"default"',
          description: "Badge variant. Success and warning are NEW in v2.0.0",
        },
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "Badge size (NEW in v2.0.0)",
        },
        { name: "dismissible", type: "boolean", default: "false", description: "Show dismiss button" },
        { name: "onDismiss", type: "() => void", description: "Callback on dismiss" },
        { name: "icon", type: "ReactNode", description: "Left icon" },
        { name: "dot", type: "boolean", default: "false", description: "Show status dot (NEW in v2.0.0)" },
        {
          name: "dotColor",
          type: "string",
          default: '"bg-green-500"',
          description: "Dot color class (NEW in v2.0.0)",
        },
        { name: "pulse", type: "boolean", default: "false", description: "Pulse animation (NEW in v2.0.0)" },
        { name: "gradient", type: "boolean", default: "false", description: "Enable gradient (NEW in v2.0.0)" },
        { name: "gradientFrom", type: "string", description: "Gradient start color (NEW in v2.0.0)" },
        { name: "gradientTo", type: "string", description: "Gradient end color (NEW in v2.0.0)" },
      ]}
      examples={[
        {
          title: "Status Badges",
          description: "Badges with status indicators.",
          code: `<StatusBadge status="online">Online</StatusBadge>
<StatusBadge status="offline">Offline</StatusBadge>
<StatusBadge status="busy">Busy</StatusBadge>`,
          preview: (
            <div className="flex gap-2">
              <Badge variant="outline" className="gap-1.5">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Online
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gray-400" />
                Offline
              </Badge>
              <Badge variant="outline" className="gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Busy
              </Badge>
            </div>
          ),
        },
        {
          title: "With Icons",
          description: "Badges with leading icons.",
          code: `<NovaBadge icon={<Check />} variant="success">Approved</NovaBadge>
<NovaBadge icon={<AlertCircle />} variant="destructive">Error</NovaBadge>`,
          preview: (
            <div className="flex gap-2">
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                <Check className="h-3 w-3 mr-1" />
                Approved
              </Badge>
              <Badge variant="destructive">
                <AlertCircle className="h-3 w-3 mr-1" />
                Error
              </Badge>
            </div>
          ),
        },
        {
          title: "Sizes",
          description: "Available badge sizes.",
          code: `<NovaBadge size="sm">Small</NovaBadge>
<NovaBadge size="default">Default</NovaBadge>
<NovaBadge size="lg">Large</NovaBadge>`,
          preview: (
            <div className="flex items-center gap-2">
              <Badge className="text-xs px-2 py-0">Small</Badge>
              <Badge>Default</Badge>
              <Badge className="text-sm px-3 py-1">Large</Badge>
            </div>
          ),
        },
        {
          title: "Animated",
          description: "Badge with pulse animation.",
          code: `<NovaBadge pulse variant="destructive">
  <span className="relative flex h-2 w-2 mr-1.5">
    <span className="animate-ping absolute h-full w-full rounded-full bg-current opacity-75" />
    <span className="relative rounded-full h-2 w-2 bg-current" />
  </span>
  Live
</NovaBadge>`,
          preview: (
            <Badge variant="destructive" className="gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-current opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-current" />
              </span>
              Live
            </Badge>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Button", href: "/docs/components/button" },
        { name: "Avatar", href: "/docs/components/avatar" },
        { name: "Shimmer Badge", href: "/docs/nova-extras/shimmer-badge" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
