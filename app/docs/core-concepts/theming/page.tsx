"use client"

import { CodeBlock } from "@/components/docs/code-block"
import {
  NovaCard as Card,
  NovaCardContent as CardContent,
  NovaTabs as Tabs,
  NovaTabsContent as TabsContent,
  NovaTabsList as TabsList,
  NovaTabsTrigger as TabsTrigger
} from "@/components/nova"
import { ArrowRight, Sun, Moon } from "lucide-react"

export default function ThemingPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Core Concepts</span>
          <ArrowRight className="h-3 w-3" />
          <span className="text-foreground">Theming</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground">
          Nova.UI uses CSS variables for theming, enabling runtime theme switching, dark mode support, and unlimited
          customization possibilities.
        </p>
      </div>

      {/* CSS Variables */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">CSS Variables</h2>
        <p className="text-muted-foreground">
          All colors are defined as HSL values in CSS variables, making them easy to customize:
        </p>
        <Tabs defaultValue="light" className="w-full">
          <TabsList>
            <TabsTrigger value="light" className="gap-2">
              <Sun className="h-3 w-3" /> Light Mode
            </TabsTrigger>
            <TabsTrigger value="dark" className="gap-2">
              <Moon className="h-3 w-3" /> Dark Mode
            </TabsTrigger>
          </TabsList>
          <TabsContent value="light" className="mt-4">
            <CodeBlock
              code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  
  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;
  
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;
  
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 222.2 84% 4.9%;
  
  --radius: 0.5rem;
}`}
              language="css"
            />
          </TabsContent>
          <TabsContent value="dark" className="mt-4">
            <CodeBlock
              code={`.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  
  --card: 222.2 84% 4.9%;
  --card-foreground: 210 40% 98%;
  
  --popover: 222.2 84% 4.9%;
  --popover-foreground: 210 40% 98%;
  
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  
  --secondary: 217.2 32.6% 17.5%;
  --secondary-foreground: 210 40% 98%;
  
  --muted: 217.2 32.6% 17.5%;
  --muted-foreground: 215 20.2% 65.1%;
  
  --accent: 217.2 32.6% 17.5%;
  --accent-foreground: 210 40% 98%;
  
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  
  --border: 217.2 32.6% 17.5%;
  --input: 217.2 32.6% 17.5%;
  --ring: 212.7 26.8% 83.9%;
}`}
              language="css"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Semantic Colors</h2>
        <p className="text-muted-foreground">Colors are semantic, not literal. This makes theming intuitive:</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "background", usage: "Page/app background", class: "bg-background" },
            { name: "foreground", usage: "Primary text color", class: "bg-foreground" },
            { name: "primary", usage: "Main brand color, CTAs", class: "bg-primary" },
            { name: "secondary", usage: "Secondary actions", class: "bg-secondary" },
            { name: "muted", usage: "Subtle backgrounds", class: "bg-muted" },
            { name: "accent", usage: "Highlights, hover states", class: "bg-accent" },
            { name: "destructive", usage: "Errors, delete actions", class: "bg-destructive" },
            { name: "border", usage: "Borders, dividers", class: "bg-border" },
          ].map((color) => (
            <Card key={color.name} className="bg-card/50 border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 p-4">
                  <div className={`h-10 w-10 rounded-md ${color.class} border border-border`} />
                  <div>
                    <code className="text-sm font-medium">--{color.name}</code>
                    <p className="text-xs text-muted-foreground">{color.usage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Using in Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Using Theme Colors</h2>
        <p className="text-muted-foreground">Tailwind is configured to use these CSS variables:</p>
        <CodeBlock
          code={`// In Tailwind classes
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Button
  </button>
  <p className="text-muted-foreground">Muted text</p>
  <div className="border-border">Bordered element</div>
</div>

// The Tailwind config maps these automatically
// tailwind.config.ts
colors: {
  background: "hsl(var(--background))",
  foreground: "hsl(var(--foreground))",
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... etc
}`}
          language="tsx"
        />
      </section>

      {/* Custom Theme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Creating Custom Themes</h2>
        <p className="text-muted-foreground">Create a custom theme by overriding the CSS variables:</p>
        <CodeBlock
          code={`/* Custom "Ocean" theme */
.theme-ocean {
  --background: 210 50% 10%;
  --foreground: 210 40% 98%;
  
  --primary: 200 100% 50%;
  --primary-foreground: 210 50% 10%;
  
  --secondary: 200 30% 20%;
  --secondary-foreground: 210 40% 98%;
  
  --accent: 180 100% 40%;
  --accent-foreground: 210 50% 10%;
}

/* Apply the theme */
<html className="theme-ocean">
  {/* Your app with ocean colors */}
</html>`}
          language="css"
        />
      </section>

      {/* Dark Mode Implementation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dark Mode</h2>
        <p className="text-muted-foreground">
          Dark mode is enabled by adding the <code className="text-xs bg-accent px-1.5 py-0.5 rounded">dark</code> class
          to the root element:
        </p>
        <CodeBlock
          code={`// Using next-themes for automatic dark mode
import { ThemeProvider } from "next-themes"

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

// Toggle button component
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  )
}`}
          language="tsx"
        />
      </section>
    </div>
  )
}
