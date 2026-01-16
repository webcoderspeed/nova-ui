"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function AvatarDocsV1() {
  return (
    <ComponentDocTemplate
      title="Avatar"
      description="An image element with a fallback for representing the user. Basic version."
      preview={
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/nova-ui/avatar"`}
      usageCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/nova-ui/avatar"

export function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="/profile.jpg" alt="User" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  )
}`}
      props={[
        { name: "className", type: "string", description: "Additional CSS classes" },
        { name: "src", type: "string", description: "Image source URL (AvatarImage)" },
        { name: "alt", type: "string", description: "Alt text for image (AvatarImage)" },
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
      ]}
      relatedComponents={[{ name: "Tooltip", href: "/docs/components/tooltip" }]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
