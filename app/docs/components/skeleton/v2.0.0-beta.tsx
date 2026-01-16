"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SkeletonDocsV2() {
  return (
    <ComponentDocTemplate
      title="Skeleton"
      description="Use to show a placeholder while content is loading. Beta with animation variants."
      badgeText="New in v2.0.0-beta"
      preview={
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { Skeleton } from "@/nova-ui/skeleton"
// v2.0.0-beta includes NovaSkeleton
import { NovaSkeleton } from "@/nova-ui/nova-skeleton"`}
      usageCode={`import { NovaSkeleton } from "@/nova-ui/nova-skeleton"

export function MyComponent() {
  return (
    <NovaSkeleton 
      variant="shimmer"
      shape="circle"
      size="lg"
    />
  )
}`}
      props={[
        { name: "className", type: "string", description: "Additional CSS classes" },
        {
          name: "variant",
          type: '"pulse" | "shimmer" | "wave"',
          default: '"pulse"',
          description: "Animation variant (v2)",
        },
        { name: "shape", type: '"rect" | "circle" | "text"', default: '"rect"', description: "Shape preset (v2)" },
        { name: "size", type: '"sm" | "md" | "lg"', description: "Size preset (v2)" },
      ]}
      examples={[
        {
          title: "Card Skeleton",
          description: "Full card loading state.",
          code: `<Card>
  <CardHeader>
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-3 w-[100px]" />
      </div>
    </div>
  </CardHeader>
  <CardContent className="space-y-3">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
    <Skeleton className="h-4 w-3/5" />
  </CardContent>
</Card>`,
          preview: (
            <Card className="w-full max-w-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-3 w-[100px]" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-3/5" />
              </CardContent>
            </Card>
          ),
        },
        {
          title: "Table Skeleton",
          description: "Loading state for data tables.",
          code: `<div className="space-y-3">
  <div className="flex gap-4">
    <Skeleton className="h-8 flex-1" />
    <Skeleton className="h-8 flex-1" />
    <Skeleton className="h-8 flex-1" />
  </div>
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex gap-4">
      <Skeleton className="h-6 flex-1" />
      <Skeleton className="h-6 flex-1" />
      <Skeleton className="h-6 flex-1" />
    </div>
  ))}
</div>`,
          preview: (
            <div className="space-y-3 w-full">
              <div className="flex gap-4">
                <Skeleton className="h-8 flex-1" />
                <Skeleton className="h-8 flex-1" />
                <Skeleton className="h-8 flex-1" />
              </div>
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-6 flex-1" />
                  <Skeleton className="h-6 flex-1" />
                  <Skeleton className="h-6 flex-1" />
                </div>
              ))}
            </div>
          ),
        },
        {
          title: "Grid Skeleton",
          description: "Loading state for image grids.",
          code: `<div className="grid grid-cols-3 gap-4">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <Skeleton key={i} className="aspect-square rounded-lg" />
  ))}
</div>`,
          preview: (
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="aspect-square rounded-lg" />
              ))}
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Progress", href: "/docs/components/progress" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
