import { CodeBlock } from "@/components/docs/code-block"
import {
  NovaCard as Card,
  NovaCardContent as CardContent,
  NovaTabs as Tabs,
  NovaTabsContent as TabsContent,
  NovaTabsList as TabsList,
  NovaTabsTrigger as TabsTrigger,
  NovaBadge as Badge
} from "@/components/nova"
import { Layers, Box, Puzzle, ArrowRight } from "lucide-react"

export default function ArchitecturePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Core Concepts</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-foreground">Architecture</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Architecture</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI is built on a layered architecture that promotes composition, reusability, and maintainability. Learn
          how the pieces fit together.
        </p>
      </div>

      {/* Architecture Layers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Layered Design</h2>
        <div className="grid gap-4">
          {[
            {
              layer: "Primitives",
              icon: Box,
              color: "bg-blue-500/10 text-blue-500",
              desc: "Low-level unstyled components from Radix UI providing accessibility and behavior",
              example: "Dialog.Root, Dialog.Trigger, Dialog.Content",
            },
            {
              layer: "Base Components",
              icon: Layers,
              color: "bg-emerald-500/10 text-emerald-500",
              desc: "Styled shadcn/ui components with Tailwind CSS and sensible defaults",
              example: "Button, Card, Input, Dialog",
            },
            {
              layer: "Nova Components",
              icon: Puzzle,
              color: "bg-purple-500/10 text-purple-500",
              desc: "Enhanced wrappers with animations, loading states, and extended functionality",
              example: "NovaButton, NovaCard, NovaDialog",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <Card key={item.layer} className="bg-card/50 border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${item.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">{item.layer}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                      <code className="text-xs bg-accent px-2 py-1 rounded">{item.example}</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Composition Pattern */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Composition Pattern</h2>
        <p className="text-muted-foreground">
          Nova.UI uses the compound component pattern for complex components, allowing flexible composition:
        </p>
        <Tabs defaultValue="usage" className="w-full">
          <TabsList>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
          </TabsList>
          <TabsContent value="usage" className="mt-4">
            <CodeBlock
              code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// Compose the card exactly how you need it
<Card>
  <CardHeader>
    <CardTitle>Flexible Structure</CardTitle>
    <CardDescription>Mix and match parts</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>

// Or use only what you need
<Card>
  <CardContent className="p-6">
    <p>Minimal card with just content</p>
  </CardContent>
</Card>`}
              language="tsx"
            />
          </TabsContent>
          <TabsContent value="anatomy" className="mt-4">
            <CodeBlock
              code={`// Each part is a separate component
const Card = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("rounded-lg border bg-card", className)} {...props} />
))

const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
))

const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-2xl font-semibold", className)} {...props} />
))

// Each can be styled and extended independently`}
              language="tsx"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Variant System */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Variant System</h2>
        <p className="text-muted-foreground">
          Components use <code className="text-xs bg-accent px-1.5 py-0.5 rounded">class-variance-authority</code> (cva)
          for type-safe variants:
        </p>
        <CodeBlock
          code={`import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  // Base styles applied to all variants
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// TypeScript infers all possible variant combinations
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}`}
          language="tsx"
        />
      </section>

      {/* Key Principles */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Key Principles</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Composable", desc: "Build complex UIs from simple, reusable pieces" },
            { title: "Accessible", desc: "WAI-ARIA compliant out of the box via Radix primitives" },
            { title: "Customizable", desc: "Override any style with Tailwind classes" },
            { title: "Type-Safe", desc: "Full TypeScript support with inferred props" },
          ].map((principle) => (
            <Card key={principle.title} className="bg-card/50 border-border">
              <CardContent className="p-4">
                <Badge variant="secondary" className="mb-2">
                  {principle.title}
                </Badge>
                <p className="text-sm text-muted-foreground">{principle.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
