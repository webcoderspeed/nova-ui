"use client"

import { NovaSpinner } from "@/components/nova/nova-spinner"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SpinnerDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Spinner"
      description="A loading spinner component."
      whenToUse={[
        "To indicate a loading state.",
        "When data is being fetched or processed.",
        "To provide visual feedback during async operations."
      ]}
      hints={[
        { type: "info", content: "Supports multiple variants including `glow` and `gradient`." },
        { type: "info", content: "Available in sizes from `xs` to `xxl`." }
      ]}
      preview={
        <div className="flex items-center gap-4">
          <NovaSpinner />
          <NovaSpinner variant="primary" />
          <NovaSpinner variant="secondary" />
          <NovaSpinner variant="success" />
          <NovaSpinner variant="warning" />
          <NovaSpinner variant="danger" />
        </div>
      }
      installCommand="npx nova-ui@latest add spinner"
      importCode={`import { NovaSpinner } from "@/components/nova/nova-spinner"`}
      usageCode={`<NovaSpinner />`}
      props={[
        {
          name: "variant",
          type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "gradient" | "glow"',
          defaultValue: '"default"',
          description: "Visual style of the spinner.",
        },
        {
          name: "size",
          type: '"default" | "xs" | "sm" | "lg" | "xl" | "xxl"',
          defaultValue: '"default"',
          description: "Size of the spinner.",
        },
      ]}
      examples={[
        {
          title: "Sizes",
          description: "Different sizes of the spinner.",
          code: `<div className="flex items-center gap-4">
  <NovaSpinner size="xs" />
  <NovaSpinner size="sm" />
  <NovaSpinner size="default" />
  <NovaSpinner size="lg" />
  <NovaSpinner size="xl" />
  <NovaSpinner size="xxl" />
</div>`,
          preview: (
            <div className="flex items-center gap-4 flex-wrap">
              <NovaSpinner size="xs" />
              <NovaSpinner size="sm" />
              <NovaSpinner size="default" />
              <NovaSpinner size="lg" />
              <NovaSpinner size="xl" />
              <NovaSpinner size="xxl" />
            </div>
          )
        },
        {
          title: "Special Variants",
          description: "Gradient and Glow variants.",
          code: `<div className="flex items-center gap-8 bg-zinc-950 p-8 rounded-lg">
  <NovaSpinner variant="gradient" size="xl" />
  <NovaSpinner variant="glow" size="xl" />
</div>`,
          preview: (
            <div className="flex items-center gap-8 bg-zinc-950 p-8 rounded-lg justify-center">
              <NovaSpinner variant="gradient" size="xl" />
              <NovaSpinner variant="glow" size="xl" />
            </div>
          )
        }
      ]}
    />
  )
}
