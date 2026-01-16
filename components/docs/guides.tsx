"use client"
import { CodeBlock } from "./code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Guides() {
  return (
    <section data-section="guides" id="guides" className="mt-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">Guides</h2>
        <p className="text-muted-foreground">Step-by-step walkthroughs for common use cases and integrations.</p>
      </div>

      <Tabs defaultValue="themes" className="w-full">
        <TabsList className="mb-6 h-auto flex-wrap justify-start bg-secondary p-1">
          <TabsTrigger value="themes" className="data-[state=active]:bg-background">
            Custom Themes
          </TabsTrigger>
          <TabsTrigger value="i18n" className="data-[state=active]:bg-background">
            i18n & RTL
          </TabsTrigger>
          <TabsTrigger value="animations" className="data-[state=active]:bg-background">
            Animations
          </TabsTrigger>
          <TabsTrigger value="validation" className="data-[state=active]:bg-background">
            Form Validation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="themes" data-section="custom-themes" id="custom-themes" className="scroll-mt-20">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Creating a Custom Theme</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nova.UI uses CSS custom properties for theming, making it easy to customize colors, spacing, and more.
              </p>
              <CodeBlock
                code={`/* globals.css */
:root {
  --primary: oklch(0.7 0.15 180);
  --primary-foreground: oklch(0.12 0.01 260);
  --background: oklch(0.12 0.01 260);
  --foreground: oklch(0.95 0 0);
  --card: oklch(0.16 0.01 260);
  --accent: oklch(0.75 0.12 60);
  --radius: 0.5rem;
}

/* Override for a custom brand theme */
.theme-brand {
  --primary: oklch(0.65 0.2 250);
  --accent: oklch(0.7 0.15 30);
}`}
                language="css"
                filename="globals.css"
                showLineNumbers
              />
              <p className="text-sm text-muted-foreground">
                Apply your theme by adding the class to a parent element or the root.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="i18n" data-section="i18n-rtl" id="i18n-rtl" className="scroll-mt-20">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Internationalization & RTL Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nova.UI includes built-in support for multiple languages and right-to-left text direction.
              </p>
              <CodeBlock
                code={`// lib/i18n.ts
import { createI18n } from "@/components/nova-ui/i18n"

export const i18n = createI18n({
  defaultLocale: "en",
  locales: ["en", "ar", "he", "fa"],
  rtlLocales: ["ar", "he", "fa"],
})

// Usage in component
import { useI18n } from "@/lib/i18n"

export function MyComponent() {
  const { t, locale, dir } = useI18n()
  
  return (
    <div dir={dir}>
      <h1>{t("welcome.title")}</h1>
      <p>{t("welcome.description")}</p>
    </div>
  )
}`}
                language="tsx"
                filename="lib/i18n.ts"
                showLineNumbers
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="animations" data-section="animations" id="animations" className="scroll-mt-20">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Integrating Animations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Combine Framer Motion for React animations and GSAP for complex sequences.
              </p>
              <CodeBlock
                code={`// Framer Motion example
import { motion } from "framer-motion"

export function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

// GSAP ScrollTrigger example
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollReveal({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: ref.current,
      opacity: 0,
      y: 50,
      duration: 0.8,
    })
  }, [])

  return <div ref={ref}>{children}</div>
}`}
                language="tsx"
                filename="components/animations.tsx"
                showLineNumbers
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="validation" data-section="form-validation" id="form-validation" className="scroll-mt-20">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Form Validation with Zod</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nova.UI forms integrate seamlessly with Zod for type-safe validation.
              </p>
              <CodeBlock
                code={`import { z } from "zod"
import { useForm } from "@/components/nova-ui/forms"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginForm() {
  const { register, handleSubmit, errors } = useForm<LoginForm>({
    schema: loginSchema,
  })

  const onSubmit = (data: LoginForm) => {
    console.log("Form submitted:", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("email")} error={errors.email?.message} />
      <Input {...register("password")} type="password" error={errors.password?.message} />
      <Button type="submit">Log In</Button>
    </form>
  )
}`}
                language="tsx"
                filename="components/login-form.tsx"
                showLineNumbers
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
