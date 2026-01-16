"use client"

import { NovaAspectRatio } from "@/components/nova/nova-aspect-ratio"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function AspectRatioDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Aspect Ratio"
      description="Displays content within a desired ratio, ensuring consistent media presentation across different screen sizes."
      whenToUse={[
        "When you need to display images, videos, or maps with a fixed width-to-height ratio.",
        "To prevent layout shifts (CLS) by reserving space for media before it loads.",
        "For creating consistent card grids or media galleries."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaAspectRatio adds `variant` and `rounded` props for built-in styling options like glassmorphism, frames, and shadows, eliminating the need for extra wrapper divs."
        }
      ]}
      preview={
        <div className="w-[450px] max-w-full">
          <NovaAspectRatio ratio={16 / 9} variant="glass" rounded="lg">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="object-cover w-full h-full"
            />
          </NovaAspectRatio>
        </div>
      }
      installCommand="npx nova-ui@latest add aspect-ratio"
      importCode={`import { NovaAspectRatio } from "@/components/nova/nova-aspect-ratio"`}
      usageCode={`import { NovaAspectRatio } from "@/components/nova/nova-aspect-ratio"

export function AspectRatioDemo() {
  return (
    <div className="w-[450px]">
      <NovaAspectRatio ratio={16 / 9} variant="glass" rounded="lg">
        <img
          src="..."
          alt="Image"
          className="rounded-md object-cover"
        />
      </NovaAspectRatio>
    </div>
  )
}`}
      props={[
        {
          name: "ratio",
          type: "number",
          defaultValue: "16/9",
          description: "The desired aspect ratio (width / height).",
        },
        {
          name: "variant",
          type: '"default" | "glass" | "frame" | "shadow" | "gradient"',
          defaultValue: '"default"',
          description: "Visual style variant for the container.",
        },
        {
          name: "rounded",
          type: '"none" | "default" | "lg" | "xl" | "full"',
          defaultValue: '"default"',
          description: "Border radius of the container.",
        },
      ]}
      examples={[
        {
          title: "Square Ratio (1:1)",
          description: "Useful for avatars or product thumbnails.",
          code: `<NovaAspectRatio ratio={1} variant="frame" rounded="xl">
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="object-cover w-full h-full"
  />
</NovaAspectRatio>`,
          preview: (
            <div className="w-[200px]">
              <NovaAspectRatio ratio={1} variant="frame" rounded="xl">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="object-cover w-full h-full"
                />
              </NovaAspectRatio>
            </div>
          )
        },
        {
          title: "Glass Variant",
          description: "Adds a subtle glassmorphism effect to the container.",
          code: `<NovaAspectRatio ratio={16 / 9} variant="glass" rounded="lg">
  <img
    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
    alt="Photo by Drew Beamer"
    className="object-cover w-full h-full opacity-80"
  />
</NovaAspectRatio>`,
          preview: (
            <div className="w-[450px] max-w-full">
              <NovaAspectRatio ratio={16 / 9} variant="glass" rounded="lg">
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="object-cover w-full h-full opacity-80"
                />
              </NovaAspectRatio>
            </div>
          )
        }
      ]}
    />
  )
}
