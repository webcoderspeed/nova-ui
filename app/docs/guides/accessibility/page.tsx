"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function AccessibilityPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Accessibility</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Accessibility</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI is built on Radix UI primitives, providing excellent accessibility out of the box. Learn best
          practices for building inclusive interfaces.
        </p>
      </div>

      {/* Built-in Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Built-in Accessibility</h2>
        <p className="text-muted-foreground">Nova.UI components include these accessibility features automatically:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { feature: "Keyboard Navigation", desc: "Full keyboard support for all interactive components" },
            { feature: "Focus Management", desc: "Proper focus trapping in modals and dropdowns" },
            { feature: "ARIA Attributes", desc: "Correct roles, states, and properties" },
            { feature: "Screen Reader Support", desc: "Meaningful announcements and labels" },
          ].map((item) => (
            <Card key={item.feature} className="bg-card/50 border-border">
              <CardContent className="p-4 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">{item.feature}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>

        <h3 className="text-lg font-medium">Use Semantic HTML</h3>
        <CodeBlock
          code={`// Good - semantic elements
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Page Title</h1>
    <section aria-labelledby="intro">
      <h2 id="intro">Introduction</h2>
    </section>
  </article>
</main>
<footer>...</footer>

// Avoid - div soup
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>`}
          language="tsx"
        />

        <h3 className="text-lg font-medium mt-6">Label Form Inputs</h3>
        <CodeBlock
          code={`// Good - associated label
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" />

// Good - aria-label for icon buttons
<Button aria-label="Close dialog">
  <X className="h-4 w-4" />
</Button>

// Good - visually hidden label
<Label htmlFor="search" className="sr-only">Search</Label>
<Input id="search" placeholder="Search..." />`}
          language="tsx"
        />

        <h3 className="text-lg font-medium mt-6">Color Contrast</h3>
        <CodeBlock
          code={`/* Ensure 4.5:1 contrast ratio for normal text */
/* Ensure 3:1 contrast ratio for large text (18px+) */

/* Nova.UI's default theme meets WCAG AA standards */
/* Test your custom themes with contrast checkers */

/* Don't rely on color alone */
<Badge variant="destructive">
  <AlertTriangle className="h-3 w-3 mr-1" />
  Error  {/* Icon + text, not just red color */}
</Badge>`}
          language="tsx"
        />

        <h3 className="text-lg font-medium mt-6">Motion & Animations</h3>
        <CodeBlock
          code={`// Respect user's motion preferences
import { motion } from "framer-motion"

const prefersReducedMotion = 
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

<motion.div
  animate={{ x: 100 }}
  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
/>

// Or in CSS
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
          language="tsx"
        />
      </section>

      {/* Testing */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Testing Accessibility</h2>
        <div className="grid gap-3">
          {[
            { tool: "Keyboard-only navigation", desc: "Tab through your app without a mouse" },
            { tool: "Screen reader testing", desc: "Use VoiceOver (Mac) or NVDA (Windows)" },
            { tool: "axe DevTools", desc: "Browser extension for automated testing" },
            { tool: "Lighthouse", desc: "Built-in Chrome accessibility audit" },
          ].map((item) => (
            <Card key={item.tool} className="bg-card/50 border-border">
              <CardContent className="p-4">
                <h3 className="font-medium">{item.tool}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
