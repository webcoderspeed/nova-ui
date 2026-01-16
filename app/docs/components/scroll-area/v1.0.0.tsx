"use client"

import { NovaScrollArea } from "@/components/nova/nova-scroll-area"
import { NovaSeparator } from "@/components/nova/nova-separator"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default function ScrollAreaDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling."
      whenToUse={[
        "When you need a scrollable list inside a fixed-height container.",
        "To ensure consistent scrollbar appearance across different browsers and operating systems.",
        "For styling scrollbars to match a specific theme (e.g., neon, glass)."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaScrollArea provides `variant` and `scrollbarSize` props, allowing for easy customization like thin scrollbars, glowing thumbs, or glassmorphism effects."
        }
      ]}
      preview={
        <NovaScrollArea className="h-72 w-48 rounded-md border" variant="glow" scrollbarSize="thin">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <NovaSeparator className="my-2" />
              </div>
            ))}
          </div>
        </NovaScrollArea>
      }
      installCommand="npx nova-ui@latest add scroll-area"
      importCode={`import { NovaScrollArea } from "@/components/nova/nova-scroll-area"`}
      usageCode={`import { NovaScrollArea } from "@/components/nova/nova-scroll-area"

export function ScrollAreaDemo() {
  return (
    <NovaScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving
      jokes all over the place: under the king's pillow, in his soup, even in the
      royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
      then, one day, the people of the kingdom discovered that the jokes were actually
      funny, and they started laughing. And then they started dancing. And then...
    </NovaScrollArea>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "glow" | "gradient" | "neon"',
          defaultValue: '"default"',
          description: "Visual style variant for the scrollbar thumb and track.",
        },
        {
          name: "scrollbarSize",
          type: '"default" | "thin" | "thick" | "hidden"',
          defaultValue: '"default"',
          description: "Controls the thickness of the scrollbar.",
        },
      ]}
      examples={[
        {
          title: "Neon Variant",
          description: "A high-contrast neon style scrollbar.",
          code: `<NovaScrollArea className="h-[200px] w-[350px] rounded-md border p-4" variant="neon">
  {/* Content */}
</NovaScrollArea>`,
          preview: (
            <NovaScrollArea className="h-[200px] w-[350px] rounded-md border p-4" variant="neon">
              <div>
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes were actually
                funny, and they started laughing. And then they started dancing. And then...
              </div>
            </NovaScrollArea>
          )
        },
        {
          title: "Hidden Scrollbar",
          description: "Scrollable content without a visible scrollbar.",
          code: `<NovaScrollArea className="h-[200px] w-[350px] rounded-md border p-4" scrollbarSize="hidden">
  {/* Content */}
</NovaScrollArea>`,
          preview: (
            <NovaScrollArea className="h-[200px] w-[350px] rounded-md border p-4" scrollbarSize="hidden">
              <div>
                 Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes were actually
                funny, and they started laughing. And then they started dancing. And then...
              </div>
            </NovaScrollArea>
          )
        }
      ]}
    />
  )
}
