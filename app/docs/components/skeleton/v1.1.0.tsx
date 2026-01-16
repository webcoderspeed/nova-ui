"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonDocsV11() {
  return (
    <ComponentDocTemplate
      title="Skeleton"
      description="Use to show a placeholder while content is loading. Enhanced patterns."
      badgeText="Updated in v1.1.0"
      preview={
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { Skeleton } from "@/nova-ui/skeleton"`}
      usageCode={`import { Skeleton } from "@/nova-ui/skeleton"

export function MyComponent() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
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
        {
          title: "List Skeleton",
          description: "Loading placeholder for a list.",
          code: `<div className="space-y-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  ))}
</div>`,
          preview: (
            <div className="space-y-4 w-full max-w-md">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Profile Skeleton",
          description: "Loading placeholder for user profile.",
          code: `<div className="flex flex-col items-center space-y-4">
  <Skeleton className="h-20 w-20 rounded-full" />
  <Skeleton className="h-5 w-32" />
  <Skeleton className="h-4 w-48" />
</div>`,
          preview: (
            <div className="flex flex-col items-center space-y-4">
              <Skeleton className="h-20 w-20 rounded-full" />
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Progress", href: "/docs/components/progress" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
