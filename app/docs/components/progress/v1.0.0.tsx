"use client"

import { NovaProgress } from "@/components/nova/nova-progress"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { useEffect, useState } from "react"

export default function ProgressDocsV1() {
  const [progress, setProgress] = useState(13)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Progress"
      description="Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
      whenToUse={[
        "To show the status of an ongoing operation.",
        "When you need to indicate how much of a task has been completed.",
        "For loading states where the percentage is known."
      ]}
      hints={[
        { type: "info", content: "Supports `default`, `success`, `warning`, `error`, and `gradient` color variants." },
        { type: "info", content: "Includes `pulse` and `stripe` animation variants." },
        { type: "info", content: "Can display labels and percentage values." }
      ]}
      preview={
        <NovaProgress value={progress} className="w-[60%]" />
      }
      installCommand="npx nova-ui@latest add progress"
      importCode={`import { NovaProgress } from "@/components/nova/nova-progress"`}
      usageCode={`<NovaProgress value={33} />`}
      props={[
        {
          name: "value",
          type: "number",
          description: "The progress value (0-100).",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl"',
          defaultValue: '"md"',
          description: "Height of the progress bar.",
        },
        {
          name: "color",
          type: '"default" | "success" | "warning" | "error" | "gradient"',
          defaultValue: '"default"',
          description: "Color of the progress indicator.",
        },
        {
          name: "animation",
          type: '"none" | "pulse" | "stripe"',
          defaultValue: '"none"',
          description: "Animation style of the progress indicator.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "full"',
          defaultValue: '"full"',
          description: "Border radius of the progress bar.",
        },
        {
          name: "label",
          type: "string",
          description: "Optional label text displayed above the progress bar.",
        },
        {
          name: "showValue",
          type: "boolean",
          defaultValue: "false",
          description: "If true, displays the percentage value.",
        },
        {
          name: "valuePosition",
          type: '"right" | "inside" | "top"',
          defaultValue: '"right"',
          description: "Position of the percentage value.",
        },
      ]}
      examples={[
        {
          title: "With Label and Value",
          description: "Progress bar with a label and percentage value.",
          code: `<NovaProgress value={60} label="Loading..." showValue />`,
          preview: (
            <NovaProgress value={60} label="Loading..." showValue className="w-full max-w-md" />
          )
        },
        {
          title: "Gradient Variant",
          description: "Progress bar with a gradient color.",
          code: `<NovaProgress value={80} color="gradient" />`,
          preview: (
            <NovaProgress value={80} color="gradient" className="w-full max-w-md" />
          )
        },
        {
          title: "Striped Animation",
          description: "Progress bar with a striped animation.",
          code: `<NovaProgress value={45} animation="stripe" />`,
          preview: (
            <div className="bg-slate-950 p-6 rounded-lg w-full max-w-md">
                <NovaProgress value={45} animation="stripe" className="w-full" />
            </div>
          )
        },
        {
          title: "Success Status",
          description: "Progress bar indicating success.",
          code: `<NovaProgress value={100} color="success" />`,
          preview: (
            <NovaProgress value={100} color="success" className="w-full max-w-md" />
          )
        }
      ]}
    />
  )
}
