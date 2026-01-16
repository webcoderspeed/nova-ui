"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioPage() {
  return (
    <ComponentDocTemplate
      title="Aspect Ratio"
      description="Displays content within a desired ratio. Useful for images, videos, and responsive content containers."
      preview={
        <div className="w-[300px]">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
            <img src="/landscape-mountain-scenery.jpg" alt="Landscape" className="h-full w-full object-cover" />
          </AspectRatio>
        </div>
      }
      installCommand="npx nova-ui@latest add aspect-ratio"
      importCode={`import { AspectRatio } from "@/components/ui/aspect-ratio"`}
      usageCode={`import { AspectRatio } from "@/components/ui/aspect-ratio"

export function MyComponent() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9}>
        <img src="/image.jpg" alt="Image" className="object-cover" />
      </AspectRatio>
    </div>
  )
}`}
      props={[
        {
          name: "ratio",
          type: "number",
          default: "1",
          description: "The desired aspect ratio (width / height)",
        },
        {
          name: "asChild",
          type: "boolean",
          default: "false",
          description: "Merge props onto the child element",
        },
        { name: "className", type: "string", description: "Additional CSS classes" },
      ]}
      examples={[
        {
          title: "16:9 Ratio",
          description: "Standard widescreen video ratio.",
          code: `<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" className="object-cover" />
</AspectRatio>`,
          preview: (
            <div className="w-[250px]">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                <img src="/video-thumbnail.png" alt="16:9" className="h-full w-full object-cover" />
              </AspectRatio>
            </div>
          ),
        },
        {
          title: "Square (1:1)",
          description: "Perfect for profile pictures or thumbnails.",
          code: `<AspectRatio ratio={1}>
  <img src="/avatar.jpg" className="object-cover" />
</AspectRatio>`,
          preview: (
            <div className="w-[150px]">
              <AspectRatio ratio={1} className="bg-muted rounded-lg overflow-hidden">
                <img src="/professional-headshot.png" alt="Square" className="h-full w-full object-cover" />
              </AspectRatio>
            </div>
          ),
        },
        {
          title: "Portrait (3:4)",
          description: "Common for portrait photos and cards.",
          code: `<AspectRatio ratio={3 / 4}>
  <img src="/portrait.jpg" className="object-cover" />
</AspectRatio>`,
          preview: (
            <div className="w-[150px]">
              <AspectRatio ratio={3 / 4} className="bg-muted rounded-lg overflow-hidden">
                <img src="/portrait-person.png" alt="Portrait" className="h-full w-full object-cover" />
              </AspectRatio>
            </div>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Avatar", href: "/docs/components/avatar" },
        { name: "Card", href: "/docs/components/card" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/aspect-ratio.tsx"
    />
  )
}
