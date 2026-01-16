"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Progress } from "@/components/ui/progress"

export default function ProgressDocsV11() {
  return (
    <ComponentDocTemplate
      title="Progress"
      description="Displays an indicator showing the completion progress of a task. Enhanced styling."
      badgeText="Updated in v1.1.0"
      preview={
        <div className="space-y-4 w-full">
          <Progress value={25} className="w-full" />
          <Progress value={50} className="w-full" />
          <Progress value={75} className="w-full" />
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { Progress } from "@/nova-ui/progress"`}
      usageCode={`import { Progress } from "@/nova-ui/progress"

export function MyComponent() {
  return <Progress value={66} />
}`}
      props={[
        { name: "value", type: "number", default: "0", description: "Progress value (0-100)" },
        { name: "max", type: "number", default: "100", description: "Maximum value" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Multiple Progress Bars",
          description: "Show different progress states.",
          code: `<div className="space-y-4">
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`,
          preview: (
            <div className="space-y-4 w-full">
              <Progress value={25} className="w-full" />
              <Progress value={50} className="w-full" />
              <Progress value={75} className="w-full" />
              <Progress value={100} className="w-full" />
            </div>
          ),
        },
        {
          title: "Custom Colors",
          description: "Style progress with custom colors.",
          code: `<Progress 
  value={60} 
  className="[&>div]:bg-green-500" 
/>`,
          preview: <Progress value={60} className="w-full [&>div]:bg-green-500" />,
        },
      ]}
      relatedComponents={[
        { name: "Skeleton", href: "/docs/components/skeleton" },
        { name: "Slider", href: "/docs/components/slider" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
