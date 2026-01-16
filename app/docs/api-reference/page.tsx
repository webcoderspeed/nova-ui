"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiReferencePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Reference</p>
        <h1 className="text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="text-lg text-muted-foreground">
          Complete API documentation for Nova.UI components, hooks, and utilities.
        </p>
      </div>

      {/* Utility Functions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Utility Functions</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <code className="text-primary">cn()</code>
              <Badge variant="secondary">lib/utils</Badge>
            </h3>
            <p className="text-muted-foreground">
              Combines class names using clsx and tailwind-merge for conflict resolution.
            </p>
            <CodeBlock
              code={`import { cn } from "@/lib/utils"

// Basic usage
cn("px-4 py-2", "bg-blue-500")
// → "px-4 py-2 bg-blue-500"

// Conditional classes
cn("base-class", isActive && "active-class")
// → "base-class active-class" (if isActive is true)

// Object syntax
cn("base", { "text-red-500": hasError, "text-green-500": !hasError })

// Handles Tailwind conflicts
cn("px-4", "px-6")
// → "px-6" (later class wins)`}
              language="tsx"
            />
          </div>
        </div>
      </section>

      {/* Hooks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hooks</h2>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <code className="text-primary">useMobile()</code>
              <Badge variant="secondary">hooks/use-mobile</Badge>
            </h3>
            <p className="text-muted-foreground">
              Returns true if the viewport is below the mobile breakpoint (768px).
            </p>
            <CodeBlock
              code={`import { useMobile } from "@/hooks/use-mobile"

function MyComponent() {
  const isMobile = useMobile()
  
  return isMobile ? <MobileNav /> : <DesktopNav />
}`}
              language="tsx"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-medium flex items-center gap-2">
              <code className="text-primary">useToast()</code>
              <Badge variant="secondary">hooks/use-toast</Badge>
            </h3>
            <p className="text-muted-foreground">Hook for displaying toast notifications.</p>
            <CodeBlock
              code={`import { useToast } from "@/hooks/use-toast"

function MyComponent() {
  const { toast } = useToast()
  
  const handleClick = () => {
    toast({
      title: "Success!",
      description: "Your action was completed.",
      variant: "default", // or "destructive"
    })
  }
  
  return <Button onClick={handleClick}>Show Toast</Button>
}`}
              language="tsx"
            />
          </div>
        </div>
      </section>

      {/* Nova Components API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Nova Component Props</h2>
        <p className="text-muted-foreground">Extended props for Nova.UI enhanced components:</p>

        <Tabs defaultValue="button" className="w-full">
          <TabsList>
            <TabsTrigger value="button">NovaButton</TabsTrigger>
            <TabsTrigger value="input">NovaInput</TabsTrigger>
            <TabsTrigger value="card">NovaCard</TabsTrigger>
            <TabsTrigger value="badge">NovaBadge</TabsTrigger>
          </TabsList>

          <TabsContent value="button" className="mt-4">
            <Card className="bg-card/50 border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">loading</TableCell>
                    <TableCell className="font-mono text-muted-foreground">boolean</TableCell>
                    <TableCell className="font-mono text-muted-foreground">false</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">animate</TableCell>
                    <TableCell className="font-mono text-muted-foreground">boolean</TableCell>
                    <TableCell className="font-mono text-muted-foreground">true</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="input" className="mt-4">
            <Card className="bg-card/50 border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">floatingLabel</TableCell>
                    <TableCell className="font-mono text-muted-foreground">string</TableCell>
                    <TableCell className="font-mono text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">error</TableCell>
                    <TableCell className="font-mono text-muted-foreground">string</TableCell>
                    <TableCell className="font-mono text-muted-foreground">-</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">icon</TableCell>
                    <TableCell className="font-mono text-muted-foreground">ReactNode</TableCell>
                    <TableCell className="font-mono text-muted-foreground">-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="card" className="mt-4">
            <Card className="bg-card/50 border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">variant</TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      &quot;default&quot; | &quot;glass&quot; | &quot;gradient&quot;
                    </TableCell>
                    <TableCell className="font-mono text-muted-foreground">&quot;default&quot;</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">hover</TableCell>
                    <TableCell className="font-mono text-muted-foreground">
                      &quot;none&quot; | &quot;lift&quot; | &quot;glow&quot; | &quot;scale&quot;
                    </TableCell>
                    <TableCell className="font-mono text-muted-foreground">&quot;none&quot;</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="badge" className="mt-4">
            <Card className="bg-card/50 border-border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">shimmer</TableCell>
                    <TableCell className="font-mono text-muted-foreground">boolean</TableCell>
                    <TableCell className="font-mono text-muted-foreground">false</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">pulse</TableCell>
                    <TableCell className="font-mono text-muted-foreground">boolean</TableCell>
                    <TableCell className="font-mono text-muted-foreground">false</TableCell>
                  </TableRow>
                  <TableRow className="border-border">
                    <TableCell className="font-mono">glow</TableCell>
                    <TableCell className="font-mono text-muted-foreground">boolean</TableCell>
                    <TableCell className="font-mono text-muted-foreground">false</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* TypeScript */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TypeScript Exports</h2>
        <p className="text-muted-foreground">All components export their prop types for full type safety:</p>
        <CodeBlock
          code={`// Import types alongside components
import { Button, type ButtonProps } from "@/components/ui/button"
import { NovaButton, type NovaButtonProps } from "@/components/nova/nova-button"

// Use in your own components
interface MyButtonProps extends ButtonProps {
  customProp: string
}

// Or extract component props
type DialogProps = React.ComponentPropsWithoutRef<typeof Dialog>`}
          language="tsx"
        />
      </section>
    </div>
  )
}
