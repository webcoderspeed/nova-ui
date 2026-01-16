"use client"

import type React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { NovaCard, NovaCardContent } from "@/components/nova"
import { Folder, File, FileCode, FileJson, Palette, Settings, Box, Layers } from "lucide-react"

export default function ProjectStructurePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-primary">Getting Started</p>
        <h1 className="text-4xl font-bold tracking-tight">Project Structure</h1>
        <p className="text-lg text-muted-foreground">
          Understanding how Nova.UI organizes files and components for maximum flexibility and maintainability.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          Nova.UI follows a modular architecture that separates concerns while maintaining easy discoverability.
          Components are organized by category and each component is self-contained with its own styles, types, and
          utilities.
        </p>
      </section>

      {/* Directory Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Directory Structure</h2>
        <NovaCard className="bg-card/50 border-border">
          <NovaCardContent className="p-6">
            <div className="font-mono text-sm space-y-1">
              <TreeItem icon={<Folder className="h-4 w-4 text-primary" />} name="your-project/" isFolder />
              <TreeItem icon={<Folder className="h-4 w-4 text-blue-400" />} name="components/" isFolder level={1} />
              <TreeItem icon={<Folder className="h-4 w-4 text-cyan-400" />} name="ui/" isFolder level={2} />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-emerald-400" />}
                name="button.tsx"
                level={3}
                desc="Base button component"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-emerald-400" />}
                name="card.tsx"
                level={3}
                desc="Card components"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-emerald-400" />}
                name="dialog.tsx"
                level={3}
                desc="Dialog/modal component"
              />
              <TreeItem
                icon={<File className="h-4 w-4 text-muted-foreground" />}
                name="..."
                level={3}
                desc="40+ more components"
              />
              <TreeItem icon={<Folder className="h-4 w-4 text-purple-400" />} name="nova/" isFolder level={2} />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-purple-300" />}
                name="nova-button.tsx"
                level={3}
                desc="Enhanced button with animations"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-purple-300" />}
                name="nova-card.tsx"
                level={3}
                desc="Glass card with effects"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-purple-300" />}
                name="index.ts"
                level={3}
                desc="Barrel exports"
              />
              <TreeItem icon={<Folder className="h-4 w-4 text-yellow-400" />} name="lib/" isFolder level={1} />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-yellow-300" />}
                name="utils.ts"
                level={2}
                desc="Utility functions (cn, etc.)"
              />
              <TreeItem icon={<Folder className="h-4 w-4 text-orange-400" />} name="hooks/" isFolder level={1} />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-orange-300" />}
                name="use-mobile.ts"
                level={2}
                desc="Mobile detection hook"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-orange-300" />}
                name="use-toast.ts"
                level={2}
                desc="Toast notification hook"
              />
              <TreeItem icon={<Folder className="h-4 w-4 text-pink-400" />} name="app/" isFolder level={1} />
              <TreeItem
                icon={<Palette className="h-4 w-4 text-pink-300" />}
                name="globals.css"
                level={2}
                desc="Global styles & CSS variables"
              />
              <TreeItem
                icon={<FileCode className="h-4 w-4 text-pink-300" />}
                name="layout.tsx"
                level={2}
                desc="Root layout"
              />
              <TreeItem
                icon={<FileJson className="h-4 w-4 text-amber-400" />}
                name="tailwind.config.ts"
                level={1}
                desc="Tailwind configuration"
              />
              <TreeItem
                icon={<FileJson className="h-4 w-4 text-amber-400" />}
                name="components.json"
                level={1}
                desc="shadcn/ui configuration"
              />
            </div>
          </NovaCardContent>
        </NovaCard>
      </section>

      {/* Component Anatomy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Component Anatomy</h2>
        <p className="text-muted-foreground">
          Each Nova.UI component follows a consistent structure for predictability and ease of use.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <NovaCard className="bg-card/50 border-border">
            <NovaCardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-primary" />
                <h3 className="font-semibold">Base Components</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Located in <code className="text-xs bg-accent px-1.5 py-0.5 rounded">components/ui/</code>. These are
                the core shadcn/ui components with minimal modifications.
              </p>
              <CodeBlock
                code={`// components/ui/button.tsx
import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center...",
  { variants: { ... } }
)

export function Button({ ... }) {
  return <button className={cn(...)} />
}`}
                language="tsx"
              />
            </NovaCardContent>
          </NovaCard>

          <NovaCard className="bg-card/50 border-border">
            <NovaCardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <Layers className="h-5 w-5 text-purple-400" />
                <h3 className="font-semibold">Nova Components</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Located in <code className="text-xs bg-accent px-1.5 py-0.5 rounded">components/nova/</code>. Enhanced
                wrappers with animations, loading states, and extra features.
              </p>
              <CodeBlock
                code={`// components/nova/nova-button.tsx
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function NovaButton({ 
  loading, 
  animate = true,
  ...props 
}) {
  // Enhanced functionality
}`}
                language="tsx"
              />
            </NovaCardContent>
          </NovaCard>
        </div>
      </section>

      {/* Configuration Files */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Configuration Files</h2>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Settings className="h-4 w-4 text-muted-foreground" />
              components.json
            </h3>
            <p className="text-sm text-muted-foreground">
              Configuration for the shadcn/ui CLI. Defines paths, styling preferences, and aliases.
            </p>
            <CodeBlock
              code={`{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
              language="json"
            />
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              globals.css
            </h3>
            <p className="text-sm text-muted-foreground">
              CSS variables for theming. Includes both light and dark mode color definitions.
            </p>
            <CodeBlock
              code={`:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}`}
              language="css"
            />
          </div>
        </div>
      </section>

      {/* Import Aliases */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Import Aliases</h2>
        <p className="text-muted-foreground">
          Nova.UI uses TypeScript path aliases for clean imports. These are configured in
          <code className="text-xs bg-accent px-1.5 py-0.5 rounded mx-1">tsconfig.json</code>.
        </p>
        <CodeBlock
          code={`// Instead of relative imports
import { Button } from "../../../components/ui/button"

// Use path aliases
import { Button } from "@/components/ui/button"
import { NovaButton } from "@/components/nova"
import { cn } from "@/lib/utils"`}
          language="tsx"
        />
      </section>

      {/* Best Practices */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Best Practices</h2>
        <div className="grid gap-3">
          {[
            { title: "Co-locate related files", desc: "Keep component tests and stories next to the component file" },
            { title: "Use barrel exports", desc: "Export multiple components from index.ts for cleaner imports" },
            {
              title: "Extend, don't modify",
              desc: "Create wrapper components instead of modifying base components directly",
            },
            { title: "Keep variants in one place", desc: "Define all variants using cva() at the component level" },
          ].map((practice, i) => (
            <NovaCard key={i} className="bg-card/50 border-border">
              <NovaCardContent className="p-4">
                <h3 className="font-medium">{practice.title}</h3>
                <p className="text-sm text-muted-foreground">{practice.desc}</p>
              </NovaCardContent>
            </NovaCard>
          ))}
        </div>
      </section>
    </div>
  )
}

function TreeItem({
  icon,
  name,
  level = 0,
  isFolder = false,
  desc,
}: {
  icon: React.ReactNode
  name: string
  level?: number
  isFolder?: boolean
  desc?: string
}) {
  return (
    <div className="flex items-center gap-2" style={{ paddingLeft: `${level * 20}px` }}>
      {icon}
      <span className={isFolder ? "font-medium" : ""}>{name}</span>
      {desc && <span className="text-muted-foreground text-xs">— {desc}</span>}
    </div>
  )
}
