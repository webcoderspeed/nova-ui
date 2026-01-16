"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NovaBadge } from "@/components/nova/nova-badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ShimmerBadgePage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/nova-extras" className="hover:text-foreground">
          Nova.UI Extras
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Shimmer Badge</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Shimmer Badge</h1>
          <Badge className="bg-primary/10 text-primary">Nova</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          An eye-catching badge component with animated shimmer effect, pulse animation, and glow options for
          highlighting important information.
        </p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <NovaBadge shimmer>New Feature</NovaBadge>
              <NovaBadge pulse variant="destructive">
                Live
              </NovaBadge>
              <NovaBadge glow variant="secondary">
                Popular
              </NovaBadge>
              <NovaBadge shimmer glow>
                Premium
              </NovaBadge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock
          code={`// components/nova/nova-badge.tsx
"use client"

import * as React from "react"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface NovaBadgeProps extends BadgeProps {
  shimmer?: boolean
  pulse?: boolean
  glow?: boolean
}

const NovaBadge = React.forwardRef<HTMLDivElement, NovaBadgeProps>(
  ({ className, shimmer, pulse, glow, children, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          shimmer && "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
          pulse && "animate-pulse",
          glow && "shadow-[0_0_10px_rgba(var(--primary),0.5)]",
          className
        )}
        {...props}
      >
        {children}
      </Badge>
    )
  }
)
NovaBadge.displayName = "NovaBadge"

export { NovaBadge, type NovaBadgeProps }

// Add to globals.css:
// @keyframes shimmer {
//   100% { transform: translateX(100%); }
// }`}
          language="tsx"
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NovaBadge } from "@/components/nova/nova-badge"

export function ProductCard() {
  return (
    <div className="relative">
      <NovaBadge shimmer className="absolute top-2 right-2">
        New
      </NovaBadge>
      {/* Card content */}
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
                <TableCell className="font-mono text-sm">shimmer</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">false</TableCell>
                <TableCell className="text-sm">Enable shimmer/shine animation</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">pulse</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">false</TableCell>
                <TableCell className="text-sm">Enable pulse animation</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">glow</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">false</TableCell>
                <TableCell className="text-sm">Enable glow shadow effect</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">variant</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">&quot;default&quot;</TableCell>
                <TableCell className="text-sm">Badge color variant (inherited)</TableCell>
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
            <h3 className="text-lg font-medium">All Effects Combined</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 flex gap-4">
                    <NovaBadge shimmer glow>
                      Ultimate
                    </NovaBadge>
                    <NovaBadge pulse glow variant="destructive">
                      Urgent
                    </NovaBadge>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaBadge shimmer glow>Ultimate</NovaBadge>
<NovaBadge pulse glow variant="destructive">Urgent</NovaBadge>`}
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
