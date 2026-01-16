"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Sparkles } from "lucide-react"

export default function CardDocsV2Beta() {
  return (
    <ComponentDocTemplate
      title="Card"
      description="Displays a card with header, content, and footer. V2 introduces glass morphism, gradient borders, and animated variants."
      preview={
        <div className="flex gap-4">
          <Card className="w-[300px] transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Standard card style</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Basic card content.</p>
            </CardContent>
          </Card>
          <Card className="w-[300px] backdrop-blur-md bg-background/80 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Glass Card
              </CardTitle>
              <CardDescription>With glass morphism</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Glass effect content.</p>
            </CardContent>
          </Card>
        </div>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import { NovaCard } from "@/nova-ui"

// V2 exports additional card variants
import { 
  NovaCard, 
  GlassCard, 
  GradientCard,
  AnimatedCard 
} from "@/nova-ui"`}
      usageCode={`import { NovaCard, GlassCard } from "@/nova-ui"

// Standard card with new v2 features
export function MyCard() {
  return (
    <NovaCard 
      variant="elevated" 
      hoverable 
      animated
    >
      <NovaCard.Header>
        <NovaCard.Title>Card Title</NovaCard.Title>
      </NovaCard.Header>
      <NovaCard.Content>
        <p>Content here</p>
      </NovaCard.Content>
    </NovaCard>
  )
}

// NEW in v2.0.0 - Glass morphism card
export function GlassExample() {
  return (
    <GlassCard blur="md" opacity={80}>
      <GlassCard.Header>
        <GlassCard.Title>Glass Card</GlassCard.Title>
      </GlassCard.Header>
      <GlassCard.Content>
        <p>Beautiful glass effect</p>
      </GlassCard.Content>
    </GlassCard>
  )
}

// NEW in v2.0.0 - Gradient border card
export function GradientExample() {
  return (
    <NovaCard 
      variant="gradient"
      gradientFrom="from-blue-500"
      gradientTo="to-purple-600"
    >
      <NovaCard.Content>
        <p>Gradient border effect</p>
      </NovaCard.Content>
    </NovaCard>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "elevated" | "glass" | "gradient" | "outline"',
          default: '"default"',
          description: "Card visual variant. Glass and gradient are NEW in v2.0.0",
        },
        { name: "hoverable", type: "boolean", default: "false", description: "Adds hover shadow effect" },
        { name: "clickable", type: "boolean", default: "false", description: "Makes entire card clickable" },
        { name: "animated", type: "boolean", default: "false", description: "Adds entrance animation (NEW in v2.0.0)" },
        {
          name: "blur",
          type: '"sm" | "md" | "lg" | "xl"',
          description: "Blur amount for glass variant (NEW in v2.0.0)",
        },
        {
          name: "opacity",
          type: "number",
          default: "80",
          description: "Background opacity for glass variant (NEW in v2.0.0)",
        },
        { name: "gradientFrom", type: "string", description: "Starting color for gradient variant (NEW in v2.0.0)" },
        { name: "gradientTo", type: "string", description: "Ending color for gradient variant (NEW in v2.0.0)" },
        { name: "className", type: "string", description: "Additional CSS classes for Card" },
        { name: "children", type: "ReactNode", description: "Card content" },
      ]}
      examples={[
        {
          title: "Glass Card",
          description: "Beautiful glass morphism effect.",
          code: `<GlassCard blur="md">
  <GlassCard.Header>
    <GlassCard.Title>
      <Sparkles className="mr-2 h-4 w-4" />
      Glass Effect
    </GlassCard.Title>
  </GlassCard.Header>
  <GlassCard.Content>
    <p>Beautiful frosted glass appearance.</p>
  </GlassCard.Content>
</GlassCard>`,
          preview: (
            <Card className="w-[350px] backdrop-blur-md bg-background/80 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Glass Effect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Beautiful frosted glass appearance.</p>
              </CardContent>
            </Card>
          ),
        },
        {
          title: "Animated Entry",
          description: "Card with entrance animation.",
          code: `<NovaCard animated hoverable>
  <NovaCard.Header>
    <NovaCard.Title>Animated Card</NovaCard.Title>
  </NovaCard.Header>
  <NovaCard.Content>
    <p>Fades in on mount.</p>
  </NovaCard.Content>
</NovaCard>`,
          preview: (
            <Card className="w-[350px] transition-all hover:shadow-lg animate-in fade-in duration-500">
              <CardHeader>
                <CardTitle>Animated Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fades in on mount.</p>
              </CardContent>
            </Card>
          ),
        },
        {
          title: "Card with Actions",
          description: "Card with footer actions.",
          code: `<NovaCard variant="elevated">
  <NovaCard.Header>
    <NovaCard.Title>Confirm Action</NovaCard.Title>
    <NovaCard.Description>Are you sure?</NovaCard.Description>
  </NovaCard.Header>
  <NovaCard.Footer className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Confirm</Button>
  </NovaCard.Footer>
</NovaCard>`,
          preview: (
            <Card className="w-[350px] shadow-lg">
              <CardHeader>
                <CardTitle>Confirm Action</CardTitle>
                <CardDescription>Are you sure?</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Confirm</Button>
              </CardFooter>
            </Card>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Dialog", href: "/docs/components/dialog" },
        { name: "Glass Card", href: "/docs/nova-extras/glass-card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
