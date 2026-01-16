"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Progress } from "@/components/ui/progress"

export default function ProgressDocsV2() {
  return (
    <ComponentDocTemplate
      title="Progress"
      description="Displays an indicator showing the completion progress of a task. Beta with animations and variants."
      badgeText="New in v2.0.0-beta"
      preview={
        <div className="space-y-4 w-full">
          <Progress value={60} className="w-full h-2" />
          <Progress
            value={80}
            className="w-full h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary/50"
          />
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { Progress } from "@/nova-ui/progress"
// v2.0.0-beta includes NovaProgress
import { NovaProgress } from "@/nova-ui/nova-progress"`}
      usageCode={`import { NovaProgress } from "@/nova-ui/nova-progress"

export function MyComponent() {
  return (
    <NovaProgress 
      value={66} 
      variant="gradient"
      showValue
      animate
    />
  )
}`}
      props={[
        { name: "value", type: "number", default: "0", description: "Progress value (0-100)" },
        { name: "max", type: "number", default: "100", description: "Maximum value" },
        {
          name: "variant",
          type: '"default" | "gradient" | "striped"',
          default: '"default"',
          description: "Visual variant (v2)",
        },
        { name: "showValue", type: "boolean", default: "false", description: "Show percentage label (v2)" },
        { name: "animate", type: "boolean", default: "false", description: "Animate on value change (v2)" },
        { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Progress bar height (v2)" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Gradient Progress",
          description: "Progress bar with gradient fill.",
          code: `<Progress 
  value={75} 
  className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500" 
/>`,
          preview: (
            <Progress
              value={75}
              className="w-full h-3 [&>div]:bg-gradient-to-r [&>div]:from-blue-500 [&>div]:to-purple-500"
            />
          ),
        },
        {
          title: "With Label",
          description: "Show progress percentage.",
          code: `<div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span>Uploading...</span>
    <span>68%</span>
  </div>
  <Progress value={68} />
</div>`,
          preview: (
            <div className="space-y-2 w-full">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Uploading...</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="w-full" />
            </div>
          ),
        },
        {
          title: "Color Variants",
          description: "Different colors for different states.",
          code: `<div className="space-y-3">
  <Progress value={100} className="[&>div]:bg-green-500" />
  <Progress value={60} className="[&>div]:bg-yellow-500" />
  <Progress value={30} className="[&>div]:bg-red-500" />
</div>`,
          preview: (
            <div className="space-y-3 w-full">
              <Progress value={100} className="w-full [&>div]:bg-green-500" />
              <Progress value={60} className="w-full [&>div]:bg-yellow-500" />
              <Progress value={30} className="w-full [&>div]:bg-red-500" />
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Skeleton", href: "/docs/components/skeleton" },
        { name: "Slider", href: "/docs/components/slider" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
