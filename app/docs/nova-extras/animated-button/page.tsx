"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NovaButton } from "@/components/nova/nova-button"
import { ArrowRight, Sparkles, Send, Download } from "lucide-react"
import Link from "next/link"

export default function AnimatedButtonPage() {
  const [loading1, setLoading1] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClick = (setLoading: (v: boolean) => void) => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/nova-extras" className="hover:text-foreground">
          Nova.UI Extras
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Animated Button</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Animated Button</h1>
          <Badge className="bg-primary/10 text-primary">Nova</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          An enhanced button component with built-in loading states, ripple effects, scale animations, and success/error
          feedback.
        </p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <NovaButton onClick={() => handleClick(setLoading1)} loading={loading1}>
                <Send className="h-4 w-4 mr-2" />
                Submit
              </NovaButton>
              <NovaButton variant="outline" onClick={() => handleClick(setLoading2)} loading={loading2}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </NovaButton>
              <NovaButton variant="secondary">
                <Sparkles className="h-4 w-4 mr-2" />
                With Animation
              </NovaButton>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <p className="text-sm text-muted-foreground">Copy the NovaButton component to your project:</p>
        <CodeBlock
          code={`// components/nova/nova-button.tsx
"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Loader2 } from 'lucide-react'

interface NovaButtonProps extends ButtonProps {
  loading?: boolean
  animate?: boolean
}

const NovaButton = React.forwardRef<HTMLButtonElement, NovaButtonProps>(
  ({ className, children, loading, animate = true, disabled, ...props }, ref) => {
    const MotionButton = motion(Button)

    return (
      <MotionButton
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        disabled={disabled || loading}
        whileHover={animate ? { scale: 1.02 } : undefined}
        whileTap={animate ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {children}
      </MotionButton>
    )
  }
)
NovaButton.displayName = "NovaButton"

export { NovaButton, type NovaButtonProps }`}
          language="tsx"
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NovaButton } from "@/components/nova/nova-button"

export function MyComponent() {
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async () => {
    setLoading(true)
    await submitForm()
    setLoading(false)
  }
  
  return (
    <NovaButton onClick={handleSubmit} loading={loading}>
      Submit Form
    </NovaButton>
  )
}`}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <p className="text-sm text-muted-foreground">
          NovaButton extends all props from the base Button component with these additions:
        </p>
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
                <TableCell className="font-mono text-sm">loading</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">false</TableCell>
                <TableCell className="text-sm">Shows loading spinner and disables button</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">animate</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">true</TableCell>
                <TableCell className="text-sm">Enable/disable hover and tap animations</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">variant</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">&quot;default&quot;</TableCell>
                <TableCell className="text-sm">Button style variant (inherited)</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">size</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">&quot;default&quot;</TableCell>
                <TableCell className="text-sm">Button size (inherited)</TableCell>
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
            <h3 className="text-lg font-medium">Loading State</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 flex gap-4">
                    <NovaButton loading>Processing...</NovaButton>
                    <NovaButton variant="outline" loading>
                      Please wait
                    </NovaButton>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaButton loading>Processing...</NovaButton>
<NovaButton variant="outline" loading>Please wait</NovaButton>`}
                  language="tsx"
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">Without Animation</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 flex gap-4">
                    <NovaButton animate={false}>No Animation</NovaButton>
                    <NovaButton>With Animation</NovaButton>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaButton animate={false}>No Animation</NovaButton>
<NovaButton>With Animation</NovaButton>`}
                  language="tsx"
                />
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-medium">All Variants</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6 flex flex-wrap gap-4">
                    <NovaButton>Default</NovaButton>
                    <NovaButton variant="secondary">Secondary</NovaButton>
                    <NovaButton variant="outline">Outline</NovaButton>
                    <NovaButton variant="ghost">Ghost</NovaButton>
                    <NovaButton variant="destructive">Destructive</NovaButton>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaButton>Default</NovaButton>
<NovaButton variant="secondary">Secondary</NovaButton>
<NovaButton variant="outline">Outline</NovaButton>
<NovaButton variant="ghost">Ghost</NovaButton>
<NovaButton variant="destructive">Destructive</NovaButton>`}
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
