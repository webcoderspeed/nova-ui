"use client"

import { NovaSkeleton } from "@/components/nova/nova-skeleton"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function SkeletonDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Feedback"
      title="Skeleton"
      description="Use to show a placeholder while content is loading."
      whenToUse={[
        "To improve perceived performance by providing a visual cue that content is loading.",
        "To reduce layout shift as content loads.",
        "When the exact content size is known or can be estimated."
      ]}
      hints={[
        { type: "info", content: "Supports `pulse`, `shimmer`, and `wave` animation variants." },
        { type: "info", content: "Supports `default`, `card`, and `circle` shape variants." }
      ]}
      preview={
        <div className="flex items-center space-x-4 ">
          <NovaSkeleton variant="circle" className="h-12 w-12 bg-accent-foreground" />
          <div className="space-y-2">
            <NovaSkeleton className="h-4 w-[250px] bg-accent-foreground" />
            <NovaSkeleton className="h-4 w-[200px] bg-accent-foreground" />
          </div>
        </div>
      }
      installCommand="npx nova-ui@latest add skeleton"
      importCode={`import { NovaSkeleton } from "@/components/nova/nova-skeleton"`}
      usageCode={`<NovaSkeleton className="h-4 w-[250px] bg-accent-foreground" />`}
      props={[
        {
          name: "animation",
          type: '"pulse" | "shimmer" | "wave"',
          defaultValue: '"pulse"',
          description: "Animation style of the skeleton.",
        },
        {
          name: "variant",
          type: '"default" | "card" | "circle"',
          defaultValue: '"default"',
          description: "Shape variant of the skeleton.",
        },
      ]}
      examples={[
        {
          title: "Card Skeleton",
          description: "A skeleton placeholder for a card component.",
          code: `<div className="flex flex-col space-y-3">
  <NovaSkeleton variant="card" className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <NovaSkeleton className="h-4 w-[250px] bg-accent-foreground" />
    <NovaSkeleton className="h-4 w-[200px] bg-accent-foreground" />
  </div>
</div>`,
          preview: (
            <div className="flex flex-col space-y-3">
              <NovaSkeleton variant="card" className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <NovaSkeleton className="h-4 w-[250px] bg-accent-foreground" />
                <NovaSkeleton className="h-4 w-[200px] bg-accent-foreground" />
              </div>
            </div>
          )
        },
        {
          title: "Shimmer Animation",
          description: "A skeleton with a shimmer animation.",
          code: `<NovaSkeleton animation="shimmer" className="h-4 w-[250px] bg-accent-foreground" />`,
          preview: (
            <NovaSkeleton animation="shimmer" className="h-4 w-[250px] bg-accent-foreground" />
          )
        },
        {
          title: "Wave Animation",
          description: "A skeleton with a wave animation.",
          code: `<NovaSkeleton animation="wave" className="h-4 w-[250px] bg-accent-foreground" />`,
          preview: (
            <NovaSkeleton animation="wave" className="h-4 w-[250px] bg-accent-foreground" />
          )
        }
      ]}
    />
  )
}
