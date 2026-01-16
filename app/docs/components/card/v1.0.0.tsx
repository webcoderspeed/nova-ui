"use client"

import { NovaCard, NovaCardHeader, NovaCardTitle, NovaCardDescription, NovaCardContent, NovaCardFooter } from "@/components/nova/nova-card"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaInput } from "@/components/nova/nova-input"
import { NovaLabel } from "@/components/nova/nova-label"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { BellRing, Check } from "lucide-react"

export default function CardDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Card"
      description="Displays a card with header, content, and footer. A flexible container for grouping related content and actions."
      whenToUse={[
        "To group related information (e.g., a user profile, a product details summary).",
        "For dashboard widgets and data visualization containers.",
        "When you need a surface to distinguish content from the background."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaCard includes powerful `variant`, `glow`, and `hover` props to easily create glassmorphism effects, interactive states, and glowing borders without writing custom CSS."
        }
      ]}
      preview={
        <NovaCard className="w-[350px]" variant="elevated">
          <NovaCardHeader>
            <NovaCardTitle>Create project</NovaCardTitle>
            <NovaCardDescription>Deploy your new project in one-click.</NovaCardDescription>
          </NovaCardHeader>
          <NovaCardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <NovaLabel htmlFor="name">Name</NovaLabel>
                  <NovaInput id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <NovaLabel htmlFor="framework">Framework</NovaLabel>
                  <NovaInput id="framework" placeholder="Select" />
                </div>
              </div>
            </form>
          </NovaCardContent>
          <NovaCardFooter className="flex justify-between">
            <NovaButton variant="outline">Cancel</NovaButton>
            <NovaButton>Deploy</NovaButton>
          </NovaCardFooter>
        </NovaCard>
      }
      installCommand="npx nova-ui@latest add card"
      importCode={`import { 
  NovaCard, 
  NovaCardHeader, 
  NovaCardTitle, 
  NovaCardDescription, 
  NovaCardContent, 
  NovaCardFooter 
} from "@/components/nova/nova-card"`}
      usageCode={`import { NovaCard, NovaCardContent, NovaCardDescription, NovaCardFooter, NovaCardHeader, NovaCardTitle } from "@/components/nova/nova-card"

export function CardDemo() {
  return (
    <NovaCard>
      <NovaCardHeader>
        <NovaCardTitle>Card Title</NovaCardTitle>
        <NovaCardDescription>Card Description</NovaCardDescription>
      </NovaCardHeader>
      <NovaCardContent>
        <p>Card Content</p>
      </NovaCardContent>
      <NovaCardFooter>
        <p>Card Footer</p>
      </NovaCardFooter>
    </NovaCard>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "gradient" | "outline" | "elevated" | "interactive"',
          defaultValue: '"default"',
          description: "Visual style variant.",
        },
        {
          name: "glow",
          type: '"none" | "subtle" | "medium" | "strong"',
          defaultValue: '"none"',
          description: "Adds a glowing shadow effect (useful for dark mode).",
        },
        {
          name: "hover",
          type: '"none" | "lift" | "scale" | "glow" | "border"',
          defaultValue: '"none"',
          description: "Interaction effect on hover.",
        },
        {
          name: "padding",
          type: '"none" | "sm" | "md" | "lg"',
          defaultValue: '"md"',
          description: "Controls the padding of child elements.",
        },
        {
          name: "loading",
          type: "boolean",
          defaultValue: "false",
          description: "If true, shows a skeleton loading state.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent card perfect for modern, image-heavy backgrounds.",
          code: `<NovaCard variant="glass" className="w-[350px]">
  <NovaCardHeader>
    <NovaCardTitle>Glass Card</NovaCardTitle>
    <NovaCardDescription>This uses backdrop-blur.</NovaCardDescription>
  </NovaCardHeader>
  <NovaCardContent>
    <p>Content is clearly visible while letting the background shine through.</p>
  </NovaCardContent>
</NovaCard>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
              <NovaCard variant="glass" className="w-[350px]">
                <NovaCardHeader>
                  <NovaCardTitle>Glass Card</NovaCardTitle>
                  <NovaCardDescription>This uses backdrop-blur.</NovaCardDescription>
                </NovaCardHeader>
                <NovaCardContent>
                  <p>Content is clearly visible while letting the background shine through.</p>
                </NovaCardContent>
              </NovaCard>
            </div>
          )
        },
        {
          title: "Interactive & Glowing",
          description: "Cards that respond to user interaction, suitable for clickable items.",
          code: `<NovaCard variant="interactive" glow="medium" hover="lift" className="w-[350px]">
  <NovaCardHeader>
    <NovaCardTitle>Interactive Card</NovaCardTitle>
    <NovaCardDescription>Hover over me!</NovaCardDescription>
  </NovaCardHeader>
  <NovaCardContent>
    <p>I lift up and glow when you hover.</p>
  </NovaCardContent>
</NovaCard>`,
          preview: (
             <NovaCard variant="interactive" glow="medium" hover="lift" className="w-[350px]">
              <NovaCardHeader>
                <NovaCardTitle>Interactive Card</NovaCardTitle>
                <NovaCardDescription>Hover over me!</NovaCardDescription>
              </NovaCardHeader>
              <NovaCardContent>
                <p>I lift up and glow when you hover.</p>
              </NovaCardContent>
            </NovaCard>
          )
        },
        {
          title: "Loading State",
          description: "Built-in skeleton loading state.",
          code: `<NovaCard loading className="w-[350px]" />`,
          preview: <NovaCard loading className="w-[350px]" />
        }
      ]}
    />
  )
}
