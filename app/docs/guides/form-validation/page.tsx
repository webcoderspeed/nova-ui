import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function FormValidationPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Form Validation</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Form Validation</h1>
        <p className="text-lg text-muted-foreground">
          Build robust, type-safe forms using React Hook Form and Zod schema validation with Nova.UI form components.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <CodeBlock code={`npm install react-hook-form @hookform/resolvers zod`} language="bash" />
      </section>

      {/* Basic Form */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Form with Validation</h2>
        <CodeBlock
          code={`"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

// 1. Define your schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[0-9]/, "Password must contain a number"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

type FormValues = z.infer<typeof formSchema>

export function SignUpForm() {
  // 2. Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  // 3. Handle submission
  function onSubmit(data: FormValues) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormDescription>
                At least 8 characters with uppercase and number
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Signing up..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Common Patterns */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Validation Patterns</h2>
        <CodeBlock
          code={`import * as z from "zod"

// Email
z.string().email("Invalid email")

// Password with requirements
z.string()
  .min(8, "Min 8 characters")
  .regex(/[A-Z]/, "Need uppercase")
  .regex(/[a-z]/, "Need lowercase")
  .regex(/[0-9]/, "Need number")

// Phone number
z.string().regex(/^\\+?[1-9]\\d{1,14}$/, "Invalid phone")

// URL
z.string().url("Invalid URL")

// Optional field
z.string().optional()

// Enum/select
z.enum(["admin", "user", "guest"])

// Number range
z.number().min(0).max(100)

// Date
z.date().min(new Date(), "Must be in the future")

// Array with min items
z.array(z.string()).min(1, "Select at least one")

// Conditional validation
z.object({
  hasEmail: z.boolean(),
  email: z.string().email().optional(),
}).refine(
  (data) => !data.hasEmail || data.email,
  { message: "Email required", path: ["email"] }
)`}
          language="tsx"
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid gap-3">
          {[
            { tip: "Client + Server validation", desc: "Always validate on both sides for security" },
            { tip: "Helpful error messages", desc: "Tell users exactly what's wrong and how to fix it" },
            { tip: "Real-time validation", desc: "Use mode: 'onChange' for instant feedback" },
            { tip: "Loading states", desc: "Disable submit and show spinner during submission" },
          ].map((item) => (
            <Card key={item.tip} className="bg-card/50 border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{item.tip}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
