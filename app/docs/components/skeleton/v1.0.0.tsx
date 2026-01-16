"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDocsV1() {
  return (
    <ComponentDocTemplate
      title="Skeleton"
      description="Use to show a placeholder while content is loading. Basic version."
      preview={
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Skeleton } from "@/nova-ui/skeleton"`}
      usageCode={`import { Skeleton } from "@/nova-ui/skeleton"

export function MyComponent() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  )
}`}
      props={[{ name: "className", type: "string", description: "Additional CSS classes for sizing and shape" }]}
      examples={[
        {
          title: "Card Skeleton",
          description: "Loading placeholder for a card.",
          code: `<div className="space-y-3">
  <Skeleton className="h-[125px] w-full rounded-xl" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`,
          preview: (
            <div className="space-y-3 w-full max-w-sm">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ),
        },
      ]}
      relatedComponents={[{ name: "Progress", href: "/docs/components/progress" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
