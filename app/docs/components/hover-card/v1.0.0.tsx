"use client"

import * as React from "react"
import { CalendarDays } from "lucide-react"
import { NovaHoverCard, NovaHoverCardContent, NovaHoverCardTrigger } from "@/components/nova/nova-hover-card"
import { NovaAvatar } from "@/components/nova/nova-avatar"
import { NovaButton } from "@/components/nova/nova-button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function HoverCardDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Hover Card"
      description="For sighted users to preview content available behind a link."
      whenToUse={[
        "To show user details on hover.",
        "To display additional information without clicking.",
        "For rich tooltips."
      ]}
      hints={[
        { type: "info", content: "Supports `glass`, `glow`, and `solid` variants for content." },
        { type: "info", content: "Can be triggered by any focusable element." }
      ]}
      preview={
        <div className="flex items-center justify-center">
          <NovaHoverCard>
            <NovaHoverCardTrigger asChild>
              <NovaButton variant="link">@nextjs</NovaButton>
            </NovaHoverCardTrigger>
            <NovaHoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <NovaAvatar fallback="VC" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </NovaHoverCardContent>
          </NovaHoverCard>
        </div>
      }
      installCommand="npx shadcn@latest add hover-card"
      importCode={`import { NovaHoverCard, NovaHoverCardContent, NovaHoverCardTrigger } from "@/components/nova/nova-hover-card"`}
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
          description: "Visual style of the hover card content."
        }
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "Hover card with glassmorphism effect.",
          code: `<NovaHoverCard>
  <NovaHoverCardTrigger asChild>
    <NovaButton variant="link">Hover Me</NovaButton>
  </NovaHoverCardTrigger>
  <NovaHoverCardContent variant="glass">
    <p>Glass effect content.</p>
  </NovaHoverCardContent>
</NovaHoverCard>`,
          preview: (
            <div className="flex items-center justify-center">
              <NovaHoverCard>
                <NovaHoverCardTrigger asChild>
                  <NovaButton variant="link">Hover Me</NovaButton>
                </NovaHoverCardTrigger>
                <NovaHoverCardContent variant="glass">
                  <p>Glass effect content.</p>
                </NovaHoverCardContent>
              </NovaHoverCard>
            </div>
          )
        }
      ]}
    />
  )
}
