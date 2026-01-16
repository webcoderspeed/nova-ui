"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

export default function ScrollAreaPage() {
  return (
    <ComponentDocTemplate
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling. Provides consistent scrollbar appearance."
      preview={
        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <div key={tag}>
                <div className="text-sm">{tag}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      }
      installCommand="npx nova-ui@latest add scroll-area"
      importCode={`import { ScrollArea } from "@/components/ui/scroll-area"`}
      usageCode={`import { ScrollArea } from "@/components/ui/scroll-area"

export function MyComponent() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Long content here...
    </ScrollArea>
  )
}`}
      props={[
        {
          name: "type",
          type: '"auto" | "always" | "scroll" | "hover"',
          default: '"hover"',
          description: "Scrollbar visibility",
        },
        { name: "scrollHideDelay", type: "number", default: "600", description: "Delay before hiding scrollbar" },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "Horizontal Scroll",
          description: "Scroll area with horizontal scrolling.",
          code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {items.map((item) => (
      <div key={item} className="w-[150px]">
        {item}
      </div>
    ))}
  </div>
</ScrollArea>`,
          preview: (
            <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex h-20 w-[150px] shrink-0 items-center justify-center rounded-md border">
                    Item {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Resizable", href: "/docs/components/resizable" },
        { name: "Table", href: "/docs/components/table" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/scroll-area.tsx"
    />
  )
}
