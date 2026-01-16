"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Progress } from "@/components/ui/progress"

export default function ProgressDocsV1() {
  return (
    <ComponentDocTemplate
      title="Progress"
      description="Displays an indicator showing the completion progress of a task. Basic version."
      preview={<Progress value={60} className="w-full" />}
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Progress } from "@/nova-ui/progress"`}
      usageCode={`import { Progress } from "@/nova-ui/progress"

export function MyComponent() {
  return <Progress value={33} />
}`}
      props={[
        { name: "value", type: "number", default: "0", description: "Progress value (0-100)" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Basic Progress",
          description: "Simple progress indicator.",
          code: `<Progress value={45} />`,
          preview: <Progress value={45} className="w-full" />,
        },
      ]}
      relatedComponents={[{ name: "Skeleton", href: "/docs/components/skeleton" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
