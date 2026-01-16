"use client"

import {
  NovaHoverCard,
  NovaHoverCardTrigger,
  NovaHoverCardContent,
} from "@/components/nova/nova-hover-card"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaAvatar, NovaAvatarImage, NovaAvatarFallback } from "@/components/nova/nova-avatar"
import { CalendarDays } from "lucide-react"

export default function HoverCardDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Overlays"
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
      whenToUse={[
        "To provide additional context about a link or button.",
        "To show user profiles or quick stats.",
        "When you want to display information without navigating away."
      ]}
      hints={[
        { type: "info", content: "Supports `glass`, `glow`, and `solid` variants." },
        { type: "info", content: "Use `NovaHoverCardContent` to wrap the content." }
      ]}
      preview={
        <NovaHoverCard>
          <NovaHoverCardTrigger asChild>
            <NovaButton variant="link">@nextjs</NovaButton>
          </NovaHoverCardTrigger>
          <NovaHoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <NovaAvatar src="https://github.com/vercel.png" fallback="VC" />
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">
                  The React Framework – created and maintained by @vercel.
                </p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                  <span className="text-xs text-muted-foreground">
                    Joined December 2021
                  </span>
                </div>
              </div>
            </div>
          </NovaHoverCardContent>
        </NovaHoverCard>
      }
      installCommand="npx nova-ui@latest add hover-card"
      importCode={`import {
  NovaHoverCard,
  NovaHoverCardTrigger,
  NovaHoverCardContent,
} from "@/components/nova/nova-hover-card"`}
      usageCode={`<NovaHoverCard>
  <NovaHoverCardTrigger>Hover</NovaHoverCardTrigger>
  <NovaHoverCardContent>
    The React Framework – created and maintained by @vercel.
  </NovaHoverCardContent>
</NovaHoverCard>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "glow" | "solid"',
          defaultValue: '"default"',
          description: "Visual style of the hover card content.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A hover card with a glassmorphism effect.",
          code: `<NovaHoverCard>
  <NovaHoverCardTrigger>Hover me</NovaHoverCardTrigger>
  <NovaHoverCardContent variant="glass">
    {/* ... content ... */}
  </NovaHoverCardContent>
</NovaHoverCard>`,
          preview: (
            <div className="p-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg flex justify-center">
                <NovaHoverCard>
                <NovaHoverCardTrigger asChild>
                    <NovaButton variant="link" className="text-white hover:text-white/80">Hover me</NovaButton>
                </NovaHoverCardTrigger>
                <NovaHoverCardContent variant="glass" className="w-80">
                    <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Glass Effect</h4>
                        <p className="text-sm">
                        This card uses backdrop-filter to create a frosted glass effect.
                        </p>
                    </div>
                    </div>
                </NovaHoverCardContent>
                </NovaHoverCard>
            </div>
          )
        }
      ]}
    />
  )
}
