"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { NovaCard } from "@/components/nova/nova-card"
import { NovaTable, NovaTableBody, NovaTableCell, NovaTableHead, NovaTableHeader, NovaTableRow } from "@/components/nova/nova-table"
import { NovaBadge } from "@/components/nova/nova-badge"
import { NovaTabs, NovaTabsContent, NovaTabsList, NovaTabsTrigger } from "@/components/nova/nova-tabs"

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
              <NovaBadge variant="secondary">lib/utils</NovaBadge>
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
              <NovaBadge variant="secondary">hooks/use-mobile</NovaBadge>
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
              <NovaBadge variant="secondary">hooks/use-toast</NovaBadge>
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

        <NovaTabs defaultValue="button" className="w-full">
          <NovaTabsList>
            <NovaTabsTrigger value="button">NovaButton</NovaTabsTrigger>
            <NovaTabsTrigger value="input">NovaInput</NovaTabsTrigger>
            <NovaTabsTrigger value="card">NovaCard</NovaTabsTrigger>
            <NovaTabsTrigger value="badge">NovaBadge</NovaTabsTrigger>
          </NovaTabsList>

          <NovaTabsContent value="button" className="mt-4"> 
            <NovaCard className="bg-card/50 border-border overflow-hidden">
              <NovaTable>
                <NovaTableHeader>
                  <NovaTableRow className="border-border">
                    <NovaTableHead>Prop</NovaTableHead>
                    <NovaTableHead>Type</NovaTableHead>
                    <NovaTableHead>Default</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">loading</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">boolean</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">false</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">animate</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">boolean</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">true</NovaTableCell>
                  </NovaTableRow>
                </NovaTableBody>
              </NovaTable>
            </NovaCard>
          </NovaTabsContent>  

          <NovaTabsContent value="input" className="mt-4">
            <NovaCard className="bg-card/50 border-border overflow-hidden">
              <NovaTable>
                <NovaTableHeader>
                  <NovaTableRow className="border-border">
                    <NovaTableHead>Prop</NovaTableHead>
                    <NovaTableHead>Type</NovaTableHead>
                    <NovaTableHead>Default</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">floatingLabel</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">string</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">-</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">error</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">string</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">-</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">icon</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">ReactNode</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">-</NovaTableCell>
                  </NovaTableRow>
                </NovaTableBody>
              </NovaTable>
            </NovaCard>
          </NovaTabsContent>



          <NovaTabsContent value="card" className="mt-4">
            <NovaCard className="bg-card/50 border-border overflow-hidden">
              <NovaTable>
                <NovaTableHeader>
                  <NovaTableRow className="border-border">
                    <NovaTableHead>Prop</NovaTableHead>
                    <NovaTableHead>Type</NovaTableHead>
                    <NovaTableHead>Default</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">variant</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">
                      &quot;default&quot; | &quot;glass&quot; | &quot;gradient&quot;
                    </NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">&quot;default&quot;</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">hover</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">
                      &quot;none&quot; | &quot;lift&quot; | &quot;glow&quot; | &quot;scale&quot;
                    </NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">&quot;none&quot;</NovaTableCell>
                  </NovaTableRow>
                </NovaTableBody>
              </NovaTable>
            </NovaCard>
          </NovaTabsContent>

          <NovaTabsContent value="badge" className="mt-4">
            <NovaCard className="bg-card/50 border-border overflow-hidden">
              <NovaTable>
                <NovaTableHeader>
                  <NovaTableRow className="border-border">
                    <NovaTableHead>Prop</NovaTableHead>
                    <NovaTableHead>Type</NovaTableHead>
                    <NovaTableHead>Default</NovaTableHead>
                  </NovaTableRow>
                </NovaTableHeader>
                <NovaTableBody>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">shimmer</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">boolean</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">false</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">pulse</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">boolean</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">false</NovaTableCell>
                  </NovaTableRow>
                  <NovaTableRow className="border-border">
                    <NovaTableCell className="font-mono">glow</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">boolean</NovaTableCell>
                    <NovaTableCell className="font-mono text-muted-foreground">false</NovaTableCell>
                  </NovaTableRow>
                </NovaTableBody>
              </NovaTable>
            </NovaCard>
          </NovaTabsContent>
        </NovaTabs>
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
