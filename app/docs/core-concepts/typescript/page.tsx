"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function TypeScriptPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Core Concepts</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-foreground">TypeScript</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">TypeScript</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI is built with TypeScript from the ground up, providing full type safety, excellent IDE support, and
          self-documenting components.
        </p>
      </div>

      {/* Type-Safe Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Type-Safe Props</h2>
        <p className="text-muted-foreground">
          All components export their prop types, enabling full IntelliSense support:
        </p>
        <CodeBlock
          code={`import { Button, type ButtonProps } from "@/components/ui/button"

// ButtonProps includes all variant types
interface ButtonProps extends 
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

// Usage - IDE shows all available props
<Button
  variant="outline"  // autocomplete: "default" | "destructive" | "outline" | ...
  size="lg"          // autocomplete: "default" | "sm" | "lg" | "icon"
  disabled           // from HTMLButtonElement
  onClick={() => {}} // from HTMLButtonElement
>
  Click me
</Button>`}
          language="tsx"
        />
      </section>

      {/* Component Patterns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Patterns</h2>
        <p className="text-muted-foreground">Nova.UI uses consistent TypeScript patterns across all components:</p>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">forwardRef with Generics</h3>
          <CodeBlock
            code={`import * as React from "react"
import { cn } from "@/lib/utils"

// Properly typed forwardRef component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }`}
            language="tsx"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Discriminated Unions</h3>
          <CodeBlock
            code={`// Component with conditional props
type AlertProps = {
  variant?: "default" | "destructive"
} & (
  | { dismissible: true; onDismiss: () => void }
  | { dismissible?: false; onDismiss?: never }
)

// If dismissible is true, onDismiss is required
<Alert dismissible onDismiss={() => {}} />  // ✓ Valid
<Alert dismissible />                        // ✗ Error: onDismiss required
<Alert />                                    // ✓ Valid`}
            language="tsx"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Generic Components</h3>
          <CodeBlock
            code={`// Generic Select component with type inference
interface SelectProps<T> {
  options: T[]
  value: T
  onChange: (value: T) => void
  getLabel: (option: T) => string
  getValue: (option: T) => string
}

function Select<T>({ options, value, onChange, getLabel, getValue }: SelectProps<T>) {
  // ...
}

// Usage - T is inferred from options
interface User { id: string; name: string }
const users: User[] = [{ id: "1", name: "John" }]

<Select
  options={users}
  value={selectedUser}           // Type: User
  onChange={(user) => {}}        // user: User
  getLabel={(u) => u.name}
  getValue={(u) => u.id}
/>`}
            language="tsx"
          />
        </div>
      </section>

      {/* Utility Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Utility Types</h2>
        <p className="text-muted-foreground">Nova.UI provides utility types for common patterns:</p>
        <CodeBlock
          code={`// Extend HTML element props
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

// Make certain props required
type RequiredProps<T, K extends keyof T> = T & Required<Pick<T, K>>

// Extract component props
type Props = React.ComponentPropsWithoutRef<typeof Button>
type PropsWithRef = React.ComponentPropsWithRef<typeof Button>

// Polymorphic "as" prop
type AsProp<C extends React.ElementType> = {
  as?: C
}

type PolymorphicProps<C extends React.ElementType, Props = {}> = 
  AsProp<C> & 
  Props & 
  Omit<React.ComponentPropsWithoutRef<C>, keyof (AsProp<C> & Props)>`}
          language="tsx"
        />
      </section>

      {/* Strict Mode Tips */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Strict Mode Tips</h2>
        <div className="grid gap-3">
          {[
            {
              tip: "Enable strict mode",
              code: `"strict": true in tsconfig.json`,
              desc: "Catches more errors at compile time",
            },
            {
              tip: "Use unknown over any",
              code: `const data: unknown = await fetch()`,
              desc: "Forces type checking before use",
            },
            {
              tip: "Const assertions for literals",
              code: `const variants = ["sm", "md", "lg"] as const`,
              desc: "Creates readonly tuple types",
            },
            {
              tip: "Satisfies for inference",
              code: `const config = { ... } satisfies Config`,
              desc: "Type-checks while preserving inference",
            },
          ].map((item) => (
            <Card key={item.tip} className="bg-card/50 border-border">
              <CardContent className="p-4 space-y-2">
                <h3 className="font-medium flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  {item.tip}
                </h3>
                <code className="text-xs bg-accent px-2 py-1 rounded block">{item.code}</code>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TSConfig */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recommended TSConfig</h2>
        <CodeBlock
          code={`{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}
          language="json"
        />
      </section>
    </div>
  )
}
