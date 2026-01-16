"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { NovaInput } from "@/components/nova/nova-input"
import { ArrowRight, Mail, Lock, User } from "lucide-react"
import Link from "next/link"

export default function FloatingInputPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/nova-extras" className="hover:text-foreground">
          Nova.UI Extras
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Floating Input</span>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Floating Input</h1>
          <Badge className="bg-primary/10 text-primary">Nova</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          An enhanced input component with animated floating labels, focus effects, and built-in error state handling.
        </p>
      </div>

      {/* Preview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <Card className="bg-card/50 border-border">
          <CardContent className="p-6 space-y-6">
            <div className="grid gap-4 max-w-md">
              <NovaInput
                floatingLabel="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<Mail className="h-4 w-4" />}
              />
              <NovaInput
                floatingLabel="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="h-4 w-4" />}
              />
              <NovaInput
                floatingLabel="Username"
                error="Username is already taken"
                icon={<User className="h-4 w-4" />}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Installation</h2>
        <CodeBlock
          code={`// components/nova/nova-input.tsx
"use client"

import * as React from "react"
import { Input, type InputProps } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface NovaInputProps extends InputProps {
  floatingLabel?: string
  error?: string
  icon?: React.ReactNode
}

const NovaInput = React.forwardRef<HTMLInputElement, NovaInputProps>(
  ({ className, floatingLabel, error, icon, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const hasValue = Boolean(props.value || props.defaultValue)

    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10">
            {icon}
          </div>
        )}
        <Input
          ref={ref}
          className={cn(
            "peer transition-all duration-200",
            icon && "pl-10",
            floatingLabel && "pt-4",
            error && "border-destructive focus-visible:ring-destructive",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {floatingLabel && (
          <Label
            className={cn(
              "absolute left-3 transition-all duration-200 pointer-events-none",
              icon && "left-10",
              isFocused || hasValue
                ? "top-1 text-xs text-primary"
                : "top-1/2 -translate-y-1/2 text-muted-foreground"
            )}
          >
            {floatingLabel}
          </Label>
        )}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs text-destructive mt-1"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }
)
NovaInput.displayName = "NovaInput"

export { NovaInput, type NovaInputProps }`}
          language="tsx"
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Usage</h2>
        <CodeBlock
          code={`import { NovaInput } from "@/components/nova/nova-input"

export function LoginForm() {
  return (
    <form className="space-y-4">
      <NovaInput 
        floatingLabel="Email Address" 
        type="email"
        icon={<Mail className="h-4 w-4" />}
      />
      <NovaInput 
        floatingLabel="Password" 
        type="password"
        icon={<Lock className="h-4 w-4" />}
      />
    </form>
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
                <TableCell className="font-mono text-sm">floatingLabel</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Label text that floats on focus</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">error</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">string</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Error message to display</TableCell>
              </TableRow>
              <TableRow className="border-border">
                <TableCell className="font-mono text-sm">icon</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">ReactNode</TableCell>
                <TableCell className="font-mono text-sm text-muted-foreground">-</TableCell>
                <TableCell className="text-sm">Icon to display on the left</TableCell>
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
            <h3 className="text-lg font-medium">With Error State</h3>
            <Tabs defaultValue="preview" className="w-full">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview" className="mt-4">
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-6">
                    <NovaInput floatingLabel="Email" error="Please enter a valid email address" className="max-w-md" />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="code" className="mt-4">
                <CodeBlock
                  code={`<NovaInput 
  floatingLabel="Email" 
  error="Please enter a valid email address"
/>`}
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
