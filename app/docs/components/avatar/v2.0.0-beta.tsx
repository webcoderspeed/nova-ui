"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function AvatarDocsV2() {
  return (
    <ComponentDocTemplate
      title="Avatar"
      description="An image element with a fallback for representing the user. Beta with status indicators and animations."
      badgeText="New in v2.0.0-beta"
      preview={
        <div className="flex items-center gap-6">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
          </div>
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
          </div>
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-500 ring-2 ring-background" />
          </div>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/nova-ui/avatar"
// v2.0.0-beta includes NovaAvatar with status
import { NovaAvatar } from "@/nova-ui/nova-avatar"`}
      usageCode={`import { NovaAvatar } from "@/nova-ui/nova-avatar"

export function MyComponent() {
  return (
    <NovaAvatar 
      src="/profile.jpg" 
      fallback="UN"
      status="online"
      size="lg"
    />
  )
}`}
      props={[
        { name: "className", type: "string", description: "Additional CSS classes" },
        { name: "src", type: "string", description: "Image source URL" },
        { name: "alt", type: "string", description: "Alt text for the image" },
        { name: "fallback", type: "string", description: "Fallback text (initials)" },
        { name: "status", type: '"online" | "offline" | "away" | "busy"', description: "Status indicator (v2)" },
        { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "Avatar size (v2)" },
        { name: "ring", type: "boolean", default: "false", description: "Show ring on hover (v2)" },
      ]}
      examples={[
        {
          title: "Status Indicators",
          description: "Show user online status.",
          code: `<div className="relative">
  <Avatar>
    <AvatarFallback>ON</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
</div>`,
          preview: (
            <div className="flex gap-4">
              <div className="relative">
                <Avatar>
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
              </div>
              <div className="relative">
                <Avatar>
                  <AvatarFallback>AW</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-yellow-500 ring-2 ring-background" />
              </div>
              <div className="relative">
                <Avatar>
                  <AvatarFallback>OF</AvatarFallback>
                </Avatar>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-gray-500 ring-2 ring-background" />
              </div>
            </div>
          ),
        },
        {
          title: "Animated Hover",
          description: "Scale animation on hover.",
          code: `<Avatar className="transition-transform hover:scale-110">
  <AvatarFallback>HV</AvatarFallback>
</Avatar>`,
          preview: (
            <Avatar className="transition-transform hover:scale-110 cursor-pointer">
              <AvatarFallback>HV</AvatarFallback>
            </Avatar>
          ),
        },
        {
          title: "With Badge",
          description: "Combine with badge for notifications.",
          code: `<div className="relative">
  <Avatar className="h-14 w-14">
    <AvatarFallback>NT</AvatarFallback>
  </Avatar>
  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
    3
  </Badge>
</div>`,
          preview: (
            <div className="relative">
              <Avatar className="h-14 w-14">
                <AvatarFallback>NT</AvatarFallback>
              </Avatar>
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">3</Badge>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Hover Card", href: "/docs/components/hover-card" },
        { name: "Tooltip", href: "/docs/components/tooltip" },
        { name: "Badge", href: "/docs/components/badge" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
