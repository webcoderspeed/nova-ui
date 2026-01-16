import { CodeBlock } from "@/components/docs/code-block"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CustomThemesPage() {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs/guides" className="hover:text-foreground">
          Guides
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Custom Themes</span>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Custom Themes</h1>
        <p className="text-lg text-muted-foreground">
          Create branded themes by customizing CSS variables. Nova.UI&apos;s theming system makes it easy to match your
          brand colors throughout the entire component library.
        </p>
      </div>

      {/* Creating a Theme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating a Custom Theme</h2>
        <p className="text-muted-foreground">Define your theme colors using HSL values in CSS variables:</p>
        <CodeBlock
          code={`/* globals.css */

/* Ocean Theme */
.theme-ocean {
  --background: 210 50% 8%;
  --foreground: 210 40% 98%;
  
  --card: 210 50% 10%;
  --card-foreground: 210 40% 98%;
  
  --primary: 200 100% 50%;
  --primary-foreground: 210 50% 8%;
  
  --secondary: 200 30% 15%;
  --secondary-foreground: 210 40% 98%;
  
  --accent: 180 100% 40%;
  --accent-foreground: 210 50% 8%;
  
  --muted: 210 30% 15%;
  --muted-foreground: 210 20% 60%;
  
  --destructive: 0 70% 50%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 210 30% 18%;
  --input: 210 30% 18%;
  --ring: 200 100% 50%;
}

/* Forest Theme */
.theme-forest {
  --background: 150 30% 6%;
  --foreground: 150 10% 95%;
  
  --primary: 150 60% 40%;
  --primary-foreground: 150 30% 6%;
  
  /* ... other variables */
}`}
          language="css"
        />
      </section>

      {/* Applying Theme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Applying a Theme</h2>
        <p className="text-muted-foreground">Add the theme class to your HTML element:</p>
        <CodeBlock
          code={`// Static theme
<html className="theme-ocean dark">

// Dynamic theme switching
"use client"

import { useState } from "react"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("default")
  
  return (
    <select 
      value={theme} 
      onChange={(e) => {
        document.documentElement.className = e.target.value
        setTheme(e.target.value)
      }}
    >
      <option value="">Default</option>
      <option value="theme-ocean dark">Ocean</option>
      <option value="theme-forest dark">Forest</option>
    </select>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Color Tool */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">HSL Color Tips</h2>
        <p className="text-muted-foreground">
          HSL (Hue, Saturation, Lightness) makes it easy to create cohesive palettes:
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="bg-card/50 border-border">
            <CardContent className="p-4">
              <h3 className="font-medium">Hue (0-360)</h3>
              <p className="text-sm text-muted-foreground mt-1">The color type. 0=red, 120=green, 240=blue</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-4">
              <h3 className="font-medium">Saturation (0-100%)</h3>
              <p className="text-sm text-muted-foreground mt-1">Color intensity. 0%=gray, 100%=vivid</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50 border-border">
            <CardContent className="p-4">
              <h3 className="font-medium">Lightness (0-100%)</h3>
              <p className="text-sm text-muted-foreground mt-1">Brightness. 0%=black, 100%=white</p>
            </CardContent>
          </Card>
        </div>
        <CodeBlock
          code={`/* Keep same hue, vary saturation/lightness for consistency */
--primary: 200 100% 50%;           /* Vivid blue */
--primary-foreground: 200 100% 10%; /* Dark blue for contrast */

--secondary: 200 30% 20%;          /* Muted blue */
--muted: 200 20% 15%;              /* Even more muted */`}
          language="css"
        />
      </section>
    </div>
  )
}
