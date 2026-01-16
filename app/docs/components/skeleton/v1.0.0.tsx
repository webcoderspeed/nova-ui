"use client"

import { NovaSkeleton } from "@/components/nova/nova-skeleton"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SkeletonDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      whenToUse={[
        "To improve perceived performance by showing a layout structure immediately.",
        "When data is being fetched asynchronously.",
        "To prevent layout shifts as content loads."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaSkeleton introduces `animation` (pulse, shimmer, wave) and `variant` (card, circle) props for more engaging loading states."
        }
      ]}
      preview={
        <div className="flex items-center space-x-4">
          <NovaSkeleton className="h-12 w-12" variant="circle" />
          <div className="space-y-2">
            <NovaSkeleton className="h-4 w-[250px]" />
            <NovaSkeleton className="h-4 w-[200px]" />
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add skeleton"
      importCode={`import { NovaSkeleton } from "@/components/nova/nova-skeleton"`}
      usageCode={`import { NovaSkeleton } from "@/components/nova/nova-skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <NovaSkeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <NovaSkeleton className="h-4 w-[250px]" />
        <NovaSkeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}`}
      props={[
        {
          name: "animation",
          type: '"pulse" | "shimmer" | "wave"',
          defaultValue: '"pulse"',
          description: "Animation style for the skeleton.",
        },
        {
          name: "variant",
          type: '"default" | "card" | "circle"',
          defaultValue: '"default"',
          description: "Shape variant.",
        },
      ]}
      examples={[
        {
          title: "Shimmer Animation",
          description: "A smooth shimmer effect moving across the element.",
          code: `<div className="space-y-2">
  <NovaSkeleton className="h-4 w-[250px]" animation="shimmer" />
  <NovaSkeleton className="h-4 w-[200px]" animation="shimmer" />
</div>`,
          preview: (
            <div className="space-y-2">
              <NovaSkeleton className="h-4 w-[250px]" animation="shimmer" />
              <NovaSkeleton className="h-4 w-[200px]" animation="shimmer" />
            </div>
          )
        },
        {
          title: "Card Variant",
          description: "Pre-styled skeleton for cards.",
          code: `<NovaSkeleton className="h-[125px] w-[250px] rounded-xl" variant="card" />`,
          preview: <NovaSkeleton className="h-[125px] w-[250px]" variant="card" />
        }
      ]}
    />
  )
}
