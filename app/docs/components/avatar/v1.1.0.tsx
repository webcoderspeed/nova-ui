"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarDocsV11() {
  return (
    <ComponentDocTemplate
      title="Avatar"
      description="An image element with a fallback for representing the user. Enhanced with size variants."
      badgeText="Updated in v1.1.0"
      preview={
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
      importCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/nova-ui/avatar"`}
      usageCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/nova-ui/avatar"

export function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="/profile.jpg" alt="User Name" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  )
}`}
      props={[
        { name: "className", type: "string", description: "Additional CSS classes" },
        { name: "src", type: "string", description: "Image source URL (AvatarImage)" },
        { name: "alt", type: "string", description: "Alt text for the image (AvatarImage)" },
        { name: "delayMs", type: "number", description: "Delay before showing fallback" },
      ]}
      examples={[
        {
          title: "Fallback Only",
          description: "Show initials when no image is available.",
          code: `<Avatar>
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
          preview: (
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          ),
        },
        {
          title: "Different Sizes",
          description: "Customize avatar sizes with className.",
          code: `<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarFallback className="text-xs">SM</AvatarFallback>
  </Avatar>
  <Avatar className="h-12 w-12">
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-16 w-16">
    <AvatarFallback className="text-lg">LG</AvatarFallback>
  </Avatar>
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg">LG</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
        {
          title: "Avatar Group",
          description: "Stack avatars for showing team members.",
          code: `<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>B</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
          preview: (
            <div className="flex -space-x-3">
              <Avatar className="border-2 border-background">
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>B</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>C</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Hover Card", href: "/docs/components/hover-card" },
        { name: "Tooltip", href: "/docs/components/tooltip" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
