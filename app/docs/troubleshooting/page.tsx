import { CodeBlock } from "@/components/docs/code-block"
import { NovaCard, NovaCardContent } from "@/components/nova/nova-card"
import { NovaAccordion, NovaAccordionContent, NovaAccordionItem, NovaAccordionTrigger } from "@/components/nova/nova-accordion"
import { NovaBadge } from "@/components/nova/nova-badge"
import { AlertTriangle, MessageCircle, Github, BookOpen } from "lucide-react"

const faqs = [
  {
    question: "Components not styling correctly?",
    answer: `Make sure you've configured Tailwind CSS correctly and imported globals.css in your root layout. Also verify that your tailwind.config.ts includes the correct content paths to scan for classes.`,
    code: `// tailwind.config.ts
content: [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
],`,
  },
  {
    question: "Hydration mismatch errors?",
    answer: `This often happens with theme switching. Make sure to add suppressHydrationWarning to your html element and use the disableTransitionOnChange prop on ThemeProvider.`,
    code: `<html lang="en" suppressHydrationWarning>
  <body>
    <ThemeProvider disableTransitionOnChange>
      {children}
    </ThemeProvider>
  </body>
</html>`,
  },
  {
    question: "TypeScript errors with component props?",
    answer: `Ensure you have the correct @types packages installed and your tsconfig.json is properly configured. Nova.UI requires TypeScript 5.0+.`,
    code: `npm install -D @types/react @types/react-dom typescript@latest`,
  },
  {
    question: "Animations not working?",
    answer: `Make sure framer-motion is installed and you're using "use client" directive at the top of components that use animations. Framer Motion requires client-side rendering.`,
    code: `"use client"

import { motion } from "framer-motion"

export function AnimatedComponent() {
  return <motion.div animate={{ opacity: 1 }} />
}`,
  },
  {
    question: "Dark mode not switching?",
    answer: `Verify next-themes is properly configured with attribute="class" and your CSS variables have both light and dark variants defined.`,
    code: `<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
>`,
  },
  {
    question: "Import alias '@/' not working?",
    answer: `Check that your tsconfig.json has the paths configuration set up correctly:`,
    code: `// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`,
  },
  {
    question: "Form validation not showing errors?",
    answer: `Make sure you're using the FormMessage component from Nova.UI and connecting it to react-hook-form's error state properly.`,
    code: `<FormField
  control={form.control}
  name="email"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
      <FormMessage /> {/* This shows errors */}
    </FormItem>
  )}
/>`,
  },
  {
    question: "Components not found after installation?",
    answer: `After adding a component with the CLI, you may need to restart your dev server. Also ensure the component was added to the correct path (usually components/ui/).`,
    code: `# Check if file exists
ls components/ui/

# Restart dev server
npm run dev`,
  },
]

export default function TroubleshootingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Help</p>
        <h1 className="text-4xl font-bold tracking-tight">Troubleshooting</h1>
        <p className="text-lg text-muted-foreground">
          Common issues and their solutions. Can&apos;t find what you&apos;re looking for? Reach out to the community.
        </p>
      </div>

      {/* Common Issues */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Common Issues</h2>
        <NovaAccordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <NovaAccordionItem key={index} value={`item-${index}`} className="border-border">
              <NovaAccordionTrigger className="text-left hover:no-underline">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-amber-500" />
                  {faq.question}
                </span>
              </NovaAccordionTrigger>
              <NovaAccordionContent className="space-y-4">
                <p className="text-muted-foreground">{faq.answer}</p>
                {faq.code && <CodeBlock code={faq.code} language="tsx" />}
              </NovaAccordionContent>
            </NovaAccordionItem>
          ))}
        </NovaAccordion>
      </section>

      {/* Get Help */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Get Help</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <NovaCard className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <NovaCardContent className="p-6">
              <Github className="h-8 w-8 text-foreground mb-3" />
              <h3 className="font-semibold">GitHub Issues</h3>
              <p className="text-sm text-muted-foreground mt-1">Report bugs or request features</p>
              <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                Open an issue →
              </a>
            </NovaCardContent>
          </NovaCard>
          <NovaCard className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <NovaCardContent className="p-6">
              <MessageCircle className="h-8 w-8 text-foreground mb-3" />
              <h3 className="font-semibold">Discord Community</h3>
              <p className="text-sm text-muted-foreground mt-1">Chat with other developers</p>
              <a href="#" className="text-sm text-primary hover:underline mt-2 inline-block">
                Join Discord →
              </a>
            </NovaCardContent>
          </NovaCard>
          <NovaCard className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <NovaCardContent className="p-6">
              <BookOpen className="h-8 w-8 text-foreground mb-3" />
              <h3 className="font-semibold">Documentation</h3>
              <p className="text-sm text-muted-foreground mt-1">Read the full docs</p>
              <a href="/docs" className="text-sm text-primary hover:underline mt-2 inline-block">
                View docs →
              </a>
            </NovaCardContent>
          </NovaCard>
        </div>
      </section>

      {/* Version Info */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Version Information</h2>
        <NovaCard className="bg-card/50 border-border">
          <NovaCardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Nova.UI</span>
                <NovaBadge variant="secondary">v1.0.0</NovaBadge> 
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">React</span>
                <NovaBadge variant="outline">18.x / 19.x</NovaBadge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Next.js</span>
                <NovaBadge variant="outline">14.x / 15.x</NovaBadge>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Tailwind</span>
                <NovaBadge variant="outline">3.x / 4.x</NovaBadge>
              </div>
            </div>
          </NovaCardContent>
        </NovaCard>
      </section>
    </div>
  )
}
