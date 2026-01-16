"use client"

import { CodeBlock } from "@/components/docs/code-block"
import {
  NovaCard as Card,
  NovaCardContent as CardContent,
  NovaTabs as Tabs,
  NovaTabsContent as TabsContent,
  NovaTabsList as TabsList,
  NovaTabsTrigger as TabsTrigger,
  NovaBadge as Badge,
  NovaTable as Table,
  NovaTableBody as TableBody,
  NovaTableCell as TableCell,
  NovaTableHead as TableHead,
  NovaTableHeader as TableHeader,
  NovaTableRow as TableRow,
  NovaCard
} from "@/components/nova"
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function GlassCardPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/nova-extras" className="hover:text-foreground">
          Nova.UI Extras
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Glass Card</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Glass Card</h1>
          <Badge className="bg-primary/10 text-primary">Nova</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          A glassmorphism card component with backdrop blur, gradient borders, and optional hover glow effects.
        </p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="relative rounded-xl bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <NovaCard variant="glass" hover="glow">
              <div className="p-6 text-center">
                <Sparkles className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Glass Effect</h3>
                <p className="text-sm text-muted-foreground mt-1">With backdrop blur</p>
              </div>
            </NovaCard>
            <NovaCard variant="glass" hover="lift">
              <div className="p-6 text-center">
                <Zap className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Lift Hover</h3>
                <p className="text-sm text-muted-foreground mt-1">Elevates on hover</p>
              </div>
            </NovaCard>
            <NovaCard variant="glass" hover="scale">
              <div className="p-6 text-center">
                <Shield className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">Scale Hover</h3>
                <p className="text-sm text-muted-foreground mt-1">Scales up on hover</p>
              </div>
            </NovaCard>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock
          code={`// components/nova/nova-card.tsx
"use client"

import * as React from "react"
import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface NovaCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient"
  hover?: "none" | "lift" | "glow" | "scale"
}

const NovaCard = React.forwardRef<HTMLDivElement, NovaCardProps>(
  ({ className, variant = "default", hover = "none", children, ...props }, ref) => {
    const variants = {
      default: "bg-card border-border",
      glass: "bg-background/60 backdrop-blur-xl border-white/10",
      gradient: "bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20",
    }

    const hoverEffects = {
      none: {},
      lift: { y: -4, transition: { type: "spring", stiffness: 300 } },
      glow: { boxShadow: "0 0 30px rgba(var(--primary), 0.3)" },
      scale: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-xl border shadow-sm",
          variants[variant],
          className
        )}
        whileHover={hoverEffects[hover]}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
NovaCard.displayName = "NovaCard"

export { NovaCard, type NovaCardProps }`}
          language="tsx"
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NovaCard } from "@/components/nova/nova-card"

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <NovaCard variant="glass" hover="glow">
        <div className="p-6">
          <h3>Feature Title</h3>
          <p>Feature description</p>
        </div>
      </NovaCard>
    </div>
  )
}`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <Card className="bg-card/50 border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-foreground">Prop</TableHead>
                <TableHead className="text-foreground">Type</TableHead>
                <TableHead className="text-foreground">Default</TableHead>
                <TableHead className="text-foreground">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">variant</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">
                  &quot;default&quot; | &quot;glass&quot; | &quot;gradient&quot;
                </TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">&quot;default&quot;</TableCell>
                <TableCell className="text-sm">Visual style of the card</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">hover</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">
                  &quot;none&quot; | &quot;lift&quot; | &quot;glow&quot; | &quot;scale&quot;
                </TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">&quot;none&quot;</TableCell>
                <TableCell className="text-sm">Hover animation effect</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Examples</h2>

        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Gradient Variant</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <NovaCard variant="gradient" hover="lift" className="max-w-sm">
                      <div className="p-6">
                        <h3 className="font-semibold">Gradient Card</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Beautiful gradient background with lift hover effect.
                        </p>
                      </div>
                    </NovaCard>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaCard variant="gradient" hover="lift">
  <div className="p-6">
    <h3 className="font-semibold">Gradient Card</h3>
    <p className="text-sm text-muted-foreground mt-1">
      Beautiful gradient background with lift hover effect.
    </p>
  </div>
</NovaCard>`}
                  language="tsx"
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  )
}
