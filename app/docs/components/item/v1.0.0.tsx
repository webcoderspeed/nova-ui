"use client"

import * as React from "react"
import {
  NovaItem,
  NovaItemContent,
  NovaItemDescription,
  NovaItemHeader,
  NovaItemTitle,
  NovaItemMedia,
  NovaItemActions,
} from "@/components/nova/nova-item"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaAvatar } from "@/components/nova/nova-avatar"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function ItemDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Data Display"
      title="Item"
      description="A composable item component for lists and feeds."
      whenToUse={[
        "To display list items with complex content.",
        "For activity feeds or comment sections.",
        "When you need a consistent item layout."
      ]}
      hints={[
        { type: "info", content: "Supports `hover` and `glow` effects." },
        { type: "info", content: "Media subcomponent supports `zoom` effect." },
        { type: "info", content: "Composable structure with Header, Content, Footer, etc." }
      ]}
      preview={
        <div className="w-full max-w-sm">
          <NovaItem effect="hover" className="border rounded-lg p-4">
            <NovaItemHeader>
              <NovaItemMedia>
                <NovaAvatar fallback="CN" />
              </NovaItemMedia>
              <div className="space-y-1">
                <NovaItemTitle>John Doe</NovaItemTitle>
                <NovaItemDescription>Posted 2 minutes ago</NovaItemDescription>
              </div>
            </NovaItemHeader>
            <NovaItemContent className="mt-4">
              <p className="text-sm text-muted-foreground">
                Just launched my new project! Check it out.
              </p>
            </NovaItemContent>
            <NovaItemActions className="mt-4">
              <NovaButton variant="outline" size="sm">Like</NovaButton>
              <NovaButton variant="ghost" size="sm">Comment</NovaButton>
            </NovaItemActions>
          </NovaItem>
        </div>
      }
      installCommand="npx shadcn@latest add item" // Note: Nova custom component
      importCode={`import { NovaItem, NovaItemHeader, NovaItemTitle } from "@/components/nova/nova-item"`}
      usageCode={`<NovaItem>
  <NovaItemHeader>
    <NovaItemTitle>Title</NovaItemTitle>
  </NovaItemHeader>
  <NovaItemContent>Content</NovaItemContent>
</NovaItem>`}
      props={[
        {
          name: "effect",
          type: '"default" | "hover" | "glow"',
          defaultValue: '"default"',
          description: "Visual effect on hover."
        }
      ]}
      examples={[
        {
          title: "Glow Effect",
          description: "Item with a glow effect on hover.",
          code: `<NovaItem effect="glow" className="border rounded-lg p-4">
  <NovaItemHeader>
    <NovaItemTitle>Glowing Item</NovaItemTitle>
  </NovaItemHeader>
  <NovaItemContent>
    Hover over me to see the glow effect.
  </NovaItemContent>
</NovaItem>`,
          preview: (
            <div className="w-full max-w-sm">
              <NovaItem effect="glow" className="border rounded-lg p-4">
                <NovaItemHeader>
                  <NovaItemTitle>Glowing Item</NovaItemTitle>
                </NovaItemHeader>
                <NovaItemContent>
                  Hover over me to see the glow effect.
                </NovaItemContent>
              </NovaItem>
            </div>
          )
        }
      ]}
    />
  )
}
