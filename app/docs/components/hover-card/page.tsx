"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export default function HoverCardPage() {
  return (
    <ComponentDocTemplate
      title="Hover Card"
      description="For sighted users to preview content available behind a link. Shows a card on hover with additional information."
      preview={
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="link">@nextjs</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar>
                <AvatarImage src="/nextjs-logo.png" />
                <AvatarFallback>NX</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@nextjs</h4>
                <p className="text-sm">The React Framework – created and maintained by @vercel.</p>
                <div className="flex items-center pt-2">
                  <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                  <span className="text-xs text-muted-foreground">Joined December 2021</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      }
      installCommand="npx nova-ui@latest add hover-card"
      importCode={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"`}
      usageCode={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function MyComponent() {
  return (
    <HoverCard>
      <HoverCardTrigger>Hover me</HoverCardTrigger>
      <HoverCardContent>
        Additional information here
      </HoverCardContent>
    </HoverCard>
  )
}`}
      props={[
        { name: "openDelay", type: "number", default: "700", description: "Delay before showing (ms)" },
        { name: "closeDelay", type: "number", default: "300", description: "Delay before hiding (ms)" },
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open changes" },
      ]}
      examples={[
        {
          title: "User Preview",
          description: "Show user profile on hover.",
          code: `<HoverCard>
  <HoverCardTrigger>@username</HoverCardTrigger>
  <HoverCardContent>
    <Avatar />
    <h4>User Name</h4>
    <p>Bio text here</p>
  </HoverCardContent>
</HoverCard>`,
          preview: (
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="h-auto p-0">
                  @novaui
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>NU</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Nova.UI</h4>
                    <p className="text-sm text-muted-foreground">Beautiful components</p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Tooltip", href: "/docs/components/tooltip" },
        { name: "Popover", href: "/docs/components/popover" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/hover-card.tsx"
    />
  )
}
