"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { NovaDialog } from "@/components/nova/nova-dialog"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function MotionDialogPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/nova-extras" className="hover:text-foreground">
          Nova.UI Extras
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Motion Dialog</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Motion Dialog</h1>
          <Badge className="bg-primary/10 text-primary">Nova</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          An enhanced dialog component with smooth spring animations, backdrop blur, and customizable enter/exit
          transitions.
        </p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6">
            <NovaDialog
              open={open}
              onOpenChange={setOpen}
              trigger={<Button>Open Motion Dialog</Button>}
              title="Motion Dialog"
              description="This dialog has smooth spring animations."
            >
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Notice how the dialog scales and fades in with a spring animation. The backdrop also smoothly blurs
                  the content behind it.
                </p>
                <div className="flex justify-end">
                  <Button onClick={() => setOpen(false)}>Close</Button>
                </div>
              </div>
            </NovaDialog>
          </CardContent>
        </Card>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock
          code={`// components/nova/nova-dialog.tsx
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { X } from 'lucide-react'

interface NovaDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function NovaDialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  className,
}: NovaDialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>}
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ type: "spring", duration: 0.3 }}
                className={cn(
                  "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
                  "rounded-lg border bg-background p-6 shadow-lg",
                  className
                )}
              >
                {title && (
                  <DialogPrimitive.Title className="text-lg font-semibold">
                    {title}
                  </DialogPrimitive.Title>
                )}
                {description && (
                  <DialogPrimitive.Description className="text-sm text-muted-foreground mt-2">
                    {description}
                  </DialogPrimitive.Description>
                )}
                <div className="mt-4">{children}</div>
                <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
                  <X className="h-4 w-4" />
                </DialogPrimitive.Close>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NovaDialog } from "@/components/nova/nova-dialog"
import { Button } from "@/components/ui/button"

export function MyComponent() {
  const [open, setOpen] = useState(false)
  
  return (
    <NovaDialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Open Dialog</Button>}
      title="Dialog Title"
      description="Dialog description here."
    >
      <p>Dialog content goes here.</p>
    </NovaDialog>
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
                <TableCell className="font-mono text-sm">open</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">boolean</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Controlled open state</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">onOpenChange</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">(open: boolean) =&gt; void</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Callback when open state changes</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">trigger</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">ReactNode</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Element that triggers the dialog</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">title</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Dialog title</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">description</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Dialog description</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </section>
    </div>
  )
}
