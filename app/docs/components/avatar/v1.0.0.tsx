"use client"

import * as React from "react"
import { NovaAvatar } from "@/components/nova/nova-avatar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function AvatarDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Avatar"
      description="An image element with a fallback for representing the user."
      whenToUse={[
        "To display user profile pictures.",
        "To show team members or contributors.",
        "When you need a consistent way to represent entities."
      ]}
      hints={[
        { type: "info", content: "Supports `circle`, `square`, and `squircle` shapes." },
        { type: "info", content: "Includes status indicators (online, offline, etc.)." },
        { type: "info", content: "Can have different ring colors." }
      ]}
      preview={
        <div className="flex items-center gap-4">
          <NovaAvatar src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />
          <NovaAvatar fallback="AB" status="online" showStatus />
          <NovaAvatar src="https://github.com/shadcn.png" shape="squircle" size="lg" ring="primary" />
        </div>
      }
      installCommand="npx shadcn@latest add avatar"
      importCode={`import { NovaAvatar } from "@/components/nova/nova-avatar"`}
      usageCode={`<NovaAvatar src="https://github.com/shadcn.png" alt="@shadcn" fallback="CN" />`}
      props={[
        {
          name: "size",
          type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
          defaultValue: '"md"',
          description: "Size of the avatar."
        },
        {
          name: "shape",
          type: '"circle" | "square" | "squircle"',
          defaultValue: '"circle"',
          description: "Shape of the avatar."
        },
        {
          name: "ring",
          type: '"none" | "primary" | "success" | "warning" | "error"',
          defaultValue: '"none"',
          description: "Ring color around the avatar."
        },
        {
          name: "status",
          type: '"online" | "offline" | "busy" | "away"',
          defaultValue: "undefined",
          description: "Status indicator color."
        },
        {
          name: "showStatus",
          type: "boolean",
          defaultValue: "false",
          description: "Whether to show the status indicator."
        }
      ]}
      examples={[
        {
          title: "Sizes",
          description: "Available sizes for the avatar.",
          code: `<div className="flex items-center gap-4">
  <NovaAvatar size="xs" fallback="XS" />
  <NovaAvatar size="sm" fallback="SM" />
  <NovaAvatar size="md" fallback="MD" />
  <NovaAvatar size="lg" fallback="LG" />
  <NovaAvatar size="xl" fallback="XL" />
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaAvatar size="xs" fallback="XS" />
              <NovaAvatar size="sm" fallback="SM" />
              <NovaAvatar size="md" fallback="MD" />
              <NovaAvatar size="lg" fallback="LG" />
              <NovaAvatar size="xl" fallback="XL" />
            </div>
          )
        },
        {
          title: "Shapes",
          description: "Different shapes for the avatar.",
          code: `<div className="flex items-center gap-4">
  <NovaAvatar shape="circle" fallback="C" />
  <NovaAvatar shape="square" fallback="S" />
  <NovaAvatar shape="squircle" fallback="Sq" />
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaAvatar shape="circle" fallback="C" />
              <NovaAvatar shape="square" fallback="S" />
              <NovaAvatar shape="squircle" fallback="Sq" />
            </div>
          )
        },
        {
          title: "Status Indicators",
          description: "Avatars with status indicators.",
          code: `<div className="flex items-center gap-4">
  <NovaAvatar fallback="On" status="online" showStatus />
  <NovaAvatar fallback="Off" status="offline" showStatus />
  <NovaAvatar fallback="Bs" status="busy" showStatus />
  <NovaAvatar fallback="Aw" status="away" showStatus />
</div>`,
          preview: (
            <div className="flex items-center gap-4">
              <NovaAvatar fallback="On" status="online" showStatus />
              <NovaAvatar fallback="Off" status="offline" showStatus />
              <NovaAvatar fallback="Bs" status="busy" showStatus />
              <NovaAvatar fallback="Aw" status="away" showStatus />
            </div>
          )
        }
      ]}
    />
  )
}
