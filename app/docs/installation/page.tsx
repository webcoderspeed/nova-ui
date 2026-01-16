"use client"

import { useState } from "react"
import Link from "next/link"
import { NovaButton } from "@/components/nova/nova-button"
import { NovaTabs, NovaTabsContent, NovaTabsList, NovaTabsTrigger } from "@/components/nova/nova-tabs"
import { NovaCard, NovaCardContent } from "@/components/nova/nova-card"
import { NovaBadge } from "@/components/nova/nova-badge"
import {
  Check,
  Copy,
  ChevronRight,
  ArrowRight,
  Terminal,
  FolderTree,
  Package,
  FileCode,
  GitBranch,
  Download,
} from "lucide-react"

function CodeBlock({ code, language = "bash" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-4 text-sm">
        <code className="text-zinc-100 font-mono whitespace-pre-wrap">{code}</code>
      </pre>
      <NovaButton
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="absolute right-2 top-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
      >
        {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </NovaButton>
    </div>
  )
}

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Installation</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Get started with Nova.UI by adding it as a Git submodule to your project. This approach gives you full control
          over the source code and easy version management.
        </p>
      </div>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <NovaCard className="border-border/50">
          <NovaCardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Node.js 18.0 or later</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Git installed and configured</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Next.js 14+ or React 18+</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Tailwind CSS 3.4+</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>TypeScript (recommended)</span>
              </li>
            </ul>
          </NovaCardContent>
        </NovaCard>
      </section>

      {/* Installation Methods */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Adding Nova.UI</h2>

        <NovaTabs defaultValue="submodule" className="w-full">
          <NovaTabsList className="w-full justify-start rounded-lg bg-muted p-1">
            <NovaTabsTrigger value="submodule" className="rounded-md gap-2">
              <GitBranch className="h-4 w-4" />
              Git Submodule (Recommended)
            </NovaTabsTrigger>
            <NovaTabsTrigger value="script" className="rounded-md gap-2">
              <Terminal className="h-4 w-4" />
              Automated Script
            </NovaTabsTrigger>
            <NovaTabsTrigger value="manual" className="rounded-md gap-2">
              <Package className="h-4 w-4" />
              Manual
            </NovaTabsTrigger>
          </NovaTabsList>

          {/* Git Submodule Method */}
          <NovaTabsContent value="submodule" className="mt-6 space-y-6">
            {/* Step 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">1</NovaBadge>
                <h3 className="text-lg font-medium">Download the setup script</h3>
              </div>
              <p className="text-sm text-muted-foreground">First, download the Nova.UI submodule setup script:</p>
              <CodeBlock
                code={`curl -O https://raw.githubusercontent.com/acefone/nova-ui/main/add-submodule.sh
chmod +x add-submodule.sh`}
              />
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">2</NovaBadge>
                <h3 className="text-lg font-medium">Run the setup script</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Execute the script with the Nova.UI repository URL and your desired path:
              </p>
              <CodeBlock code={`./add-submodule.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0`} />
              <NovaCard className="border-amber-500/30 bg-amber-500/5">
                <NovaCardContent className="pt-4">
                  <p className="text-sm text-amber-200">
                    <strong>Script Parameters:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs">repo-url</code> - The Nova.UI git
                      repository URL
                    </li>
                    <li>
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs">submodule-path</code> - Where to install
                      (e.g., <code className="rounded bg-muted px-1.5 py-0.5 text-xs">src/nova-ui</code>)
                    </li>
                    <li>
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs">branch_or_tag</code> - Version to use
                      (e.g., <code className="rounded bg-muted px-1.5 py-0.5 text-xs">v1.0.0</code>,{" "}
                      <code className="rounded bg-muted px-1.5 py-0.5 text-xs">main</code>)
                    </li>
                  </ul>
                </NovaCardContent>
              </NovaCard>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">3</NovaBadge>
                <h3 className="text-lg font-medium">Configure path alias</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Add the path alias in your <code className="rounded bg-muted px-1.5 py-0.5 text-sm">tsconfig.json</code>
                :
              </p>
              <CodeBlock
                code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/nova-ui": ["./src/nova-ui"],
      "@/nova-ui/*": ["./src/nova-ui/*"]
    }
  }
}`}
                language="json"
              />
            </div>

            {/* Step 4 - Import */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">4</NovaBadge>
                <h3 className="text-lg font-medium">Import and use</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Import components from the <code className="rounded bg-muted px-1.5 py-0.5 text-sm">@/nova-ui</code>{" "}
                directory:
              </p>
              <CodeBlock
                code={`import { NovaButton } from "@/nova-ui"
import { NovaCard, NovaCardHeader, NovaCardContent } from "@/nova-ui"
import { NovaInput } from "@/nova-ui"

export function MyComponent() {
  return (
    <NovaCard>
      <NovaCardHeader>Welcome to Nova.UI</NovaCardHeader>
      <NovaCardContent>
        <NovaInput placeholder="Enter your name" floatingLabel />
        <NovaButton variant="glow" className="mt-4">
          Get Started
        </NovaButton>
      </NovaCardContent>
    </NovaCard>
  )
}`}
                language="tsx"
              />
            </div>
          </NovaTabsContent>

          {/* Automated Script Method */}
          <NovaTabsContent value="script" className="mt-6 space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Use this complete bash script to automate the entire Nova.UI submodule setup process:
              </p>
              <CodeBlock
                code={`#!/bin/bash

# Nova.UI Submodule Setup Script
# Usage:
#   ./add-submodule.sh <repo-url> <submodule-path> [branch_or_tag]
# Example:
#   ./add-submodule.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0

set -e

REPO_URL=$1
SUBMODULE_PATH=$2
BRANCH=\${3:-main}

if [ -z "$REPO_URL" ] || [ -z "$SUBMODULE_PATH" ]; then
  echo "Usage: $0 <repo-url> <submodule-path> [branch_or_tag]"
  exit 1
fi

echo "➡️ Preparing to add submodule from $REPO_URL into $SUBMODULE_PATH (branch/tag: $BRANCH)"

# Clean up existing folder/submodule if present
if git config --file .gitmodules --get-regexp path | grep -q "$SUBMODULE_PATH"; then
  echo "⚠️ Submodule already exists — removing cleanly..."
  git submodule deinit -f "$SUBMODULE_PATH" || true
  git rm -f "$SUBMODULE_PATH" || true
  rm -rf ".git/modules/$SUBMODULE_PATH"
  git commit -m "Removed existing submodule at $SUBMODULE_PATH" || true
elif [ -d "$SUBMODULE_PATH" ]; then
  echo "⚠️ Directory $SUBMODULE_PATH already exists — removing..."
  rm -rf "$SUBMODULE_PATH"
fi

# Add the new submodule
echo "➡️ Adding submodule..."
git submodule add -b "$BRANCH" "$REPO_URL" "$SUBMODULE_PATH"
git submodule update --init --recursive -f "$SUBMODULE_PATH"

cd "$SUBMODULE_PATH"

echo "➡️ Checking out branch/tag $BRANCH..."
git fetch --tags origin
git checkout "$BRANCH" || git checkout -b "$BRANCH" origin/"$BRANCH" || true
git pull origin "$BRANCH" || true

echo "➡️ Cleaning unnecessary files..."
find . -maxdepth 1 ! -name "package.json" \\
                  ! -name "package-lock.json" \\
                  ! -name "pnpm-lock.yaml" \\
                  ! -name "yarn.lock" \\
                  ! -name "dist" \\
                  ! -name "src" \\
                  ! -name "." \\
                  -exec rm -rf {} +

# Move files from components/ui/* to root and delete everything else
if [ -d "components/ui" ]; then
  echo "➡️ Moving files from components/ui to root..."

  shopt -s dotglob nullglob
  mv components/ui/* ./
  shopt -u dotglob nullglob

  echo "🧹 Removing everything except moved UI files..."
  find . -mindepth 1 -maxdepth 1 ! -name "package.json" \\
                                ! -name "package-lock.json" \\
                                ! -name "pnpm-lock.yaml" \\
                                ! -name "yarn.lock" \\
                                ! -name "." \\
                                ! -name "$(basename "$SUBMODULE_PATH")" \\
                                -exec rm -rf {} +

  rm -rf components
  echo "🎉 UI files moved and cleanup complete."
else
  echo "⚠️ components/ui not found!"
fi

echo "➡️ Installing dependencies (with legacy peer deps)..."
if command -v npm &> /dev/null; then
  npm install --legacy-peer-deps
elif command -v yarn &> /dev/null; then
  yarn install
elif command -v pnpm &> /dev/null; then
  pnpm install --shamefully-hoist
else
  echo "⚠️ No package manager (npm/yarn/pnpm) found!"
fi

cd -

git add .gitmodules "$SUBMODULE_PATH"

echo "✅ Done. Submodule ready at $SUBMODULE_PATH"`}
                language="bash"
              />
              <p className="text-sm text-muted-foreground">
                Save this as <code className="rounded bg-muted px-1.5 py-0.5 text-sm">add-submodule.sh</code> and run:
              </p>
              <CodeBlock
                code={`chmod +x add-submodule.sh
./add-submodule.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0`}
              />
            </div>

            {/* What the script does */}
            <NovaCard className="border-border/50">
              <NovaCardContent className="pt-6">
                <h4 className="font-medium mb-3">What this script does:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Removes any existing submodule at the target path</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Adds the Nova.UI repository as a git submodule</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Checks out the specified branch or tag version</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>
                      Moves component files from{" "}
                      <code className="rounded bg-muted px-1 py-0.5 text-xs">components/ui/*</code> to root
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Cleans up unnecessary files for a minimal footprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Installs required dependencies automatically</span>
                  </li>
                </ul>
              </NovaCardContent>
            </NovaCard>
          </NovaTabsContent>

          {/* Manual Method */}
          <NovaTabsContent value="manual" className="mt-6 space-y-6">
            {/* Step 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">1</NovaBadge>
                <h3 className="text-lg font-medium">Clone the repository</h3>
              </div>
              <p className="text-sm text-muted-foreground">Clone Nova.UI directly into your project:</p>
              <CodeBlock
                code={`git clone https://bitbucket.org/acefone/nova-ui.git src/nova-ui
cd src/nova-ui
git checkout v1.0.0  # or your desired version`}
              />
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">2</NovaBadge>
                <h3 className="text-lg font-medium">Install dependencies</h3>
              </div>
              <CodeBlock
                code={`npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install framer-motion gsap
npm install -D tailwindcss-animate`}
              />
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">3</NovaBadge>
                <h3 className="text-lg font-medium">Reorganize files</h3>
              </div>
              <p className="text-sm text-muted-foreground">Move component files to root and clean up:</p>
              <CodeBlock
                code={`cd src/nova-ui
mv components/ui/* ./
rm -rf components app public .next node_modules
rm -f next.config.* tailwind.config.* postcss.config.* .eslintrc.* .gitignore README.md`}
              />
            </div>

            {/* Step 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">4</NovaBadge>
                <h3 className="text-lg font-medium">Create barrel export</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create an <code className="rounded bg-muted px-1.5 py-0.5 text-sm">index.ts</code> file to re-export all
                components:
              </p>
              <CodeBlock
                code={`// src/nova-ui/index.ts
export * from "./nova-button"
export * from "./nova-card"
export * from "./nova-input"
export * from "./nova-badge"
export * from "./nova-dialog"
export * from "./nova-accordion"
export * from "./nova-alert"
export * from "./nova-avatar"
export * from "./nova-progress"
export * from "./nova-tabs"
export * from "./nova-tooltip"
// ... add more components as needed`}
                language="tsx"
              />
            </div>

            {/* Step 5 */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <NovaBadge className="h-7 w-7 rounded-full p-0 flex items-center justify-center">5</NovaBadge>
                <h3 className="text-lg font-medium">Configure path alias</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Add the path alias in your <code className="rounded bg-muted px-1.5 py-0.5 text-sm">tsconfig.json</code>
                :
              </p>
              <CodeBlock
                code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/nova-ui": ["./src/nova-ui"],
      "@/nova-ui/*": ["./src/nova-ui/*"]
    }
  }
}`}
                language="json"
              />
            </div>
          </NovaTabsContent>
        </NovaTabs>
      </section>

      {/* Updating Nova.UI */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <Download className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Updating Nova.UI</h2>
        </div>
        <p className="text-muted-foreground">To update Nova.UI to a newer version, use these commands:</p>
        <CodeBlock
          code={`# Update to latest version on current branch
cd src/nova-ui
git pull origin main

# Or update to a specific version/tag
git fetch --tags
git checkout v1.1.0

# Don't forget to commit the submodule update
cd ../..
git add src/nova-ui
git commit -m "Update Nova.UI to v1.1.0"`}
        />
      </section>

      {/* Project Structure */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FolderTree className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Project Structure</h2>
        </div>
        <NovaCard className="border-border/50">
          <NovaCardContent className="pt-6">
            <pre className="text-sm font-mono text-muted-foreground">
              {`my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── nova-ui/                  # Git submodule
│   │   ├── index.ts              # Barrel export
│   │   ├── nova-button.tsx
│   │   ├── nova-card.tsx
│   │   ├── nova-input.tsx
│   │   ├── nova-dialog.tsx
│   │   ├── nova-badge.tsx
│   │   ├── nova-accordion.tsx
│   │   └── ...
│   ├── components/               # Your custom components
│   │   └── ...
│   └── lib/
│       └── utils.ts
├── .gitmodules                   # Submodule configuration
├── tailwind.config.js
├── tsconfig.json
└── package.json`}
            </pre>
          </NovaCardContent>
        </NovaCard>
      </section>

      {/* Available Components */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <FileCode className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-semibold">Available Components</h2>
        </div>
        <p className="text-muted-foreground">
          After installation, you can import any of these components from{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">@/nova-ui</code>:
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "NovaAccordion", file: "accordion" },
            { name: "NovaAlert", file: "alert" },
            { name: "NovaAlertDialog", file: "alert-dialog" },
            { name: "NovaAspectRatio", file: "aspect-ratio" },
            { name: "NovaAvatar", file: "avatar" },
            { name: "NovaBadge", file: "badge" },
            { name: "NovaBreadcrumb", file: "breadcrumb" },
            { name: "NovaButton", file: "button" },
            { name: "NovaCalendar", file: "calendar" },
            { name: "NovaCard", file: "card" },
            { name: "NovaCarousel", file: "carousel" },
            { name: "NovaCheckbox", file: "checkbox" },
            { name: "NovaCollapsible", file: "collapsible" },
            { name: "NovaCommand", file: "command" },
            { name: "NovaContextMenu", file: "context-menu" },
            { name: "NovaDialog", file: "dialog" },
            { name: "NovaDrawer", file: "drawer" },
            { name: "NovaDropdownMenu", file: "dropdown-menu" },
            { name: "NovaForm", file: "form" },
            { name: "NovaHoverCard", file: "hover-card" },
            { name: "NovaInput", file: "input" },
            { name: "NovaInputOTP", file: "input-otp" },
            { name: "NovaLabel", file: "label" },
            { name: "NovaMenubar", file: "menubar" },
            { name: "NovaNavigationMenu", file: "navigation-menu" },
            { name: "NovaPagination", file: "pagination" },
            { name: "NovaPopover", file: "popover" },
            { name: "NovaProgress", file: "progress" },
            { name: "NovaRadioGroup", file: "radio-group" },
            { name: "NovaResizable", file: "resizable" },
            { name: "NovaScrollArea", file: "scroll-area" },
            { name: "NovaSelect", file: "select" },
            { name: "NovaSeparator", file: "separator" },
            { name: "NovaSheet", file: "sheet" },
            { name: "NovaSkeleton", file: "skeleton" },
            { name: "NovaSlider", file: "slider" },
            { name: "NovaSwitch", file: "switch" },
            { name: "NovaTable", file: "table" },
            { name: "NovaTabs", file: "tabs" },
            { name: "NovaTextarea", file: "textarea" },
            { name: "NovaToggle", file: "toggle" },
            { name: "NovaToggleGroup", file: "toggle-group" },
            { name: "NovaTooltip", file: "tooltip" },
          ].map((component) => (
            <Link
              key={component.name}
              href={`/docs/components/${component.file}`}
              className="rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm font-mono hover:bg-muted transition-colors"
            >
              {component.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Usage Example */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Quick Example</h2>
        <p className="text-muted-foreground">Here's a complete example of using Nova.UI components in your app:</p>
        <CodeBlock
          code={`// app/page.tsx
import { 
  NovaButton, 
  NovaCard, 
  NovaCardHeader, 
  NovaCardContent,
  NovaCardFooter,
  NovaInput,
  NovaBadge 
} from "@/nova-ui"

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <NovaCard variant="glass" hover="lift">
        <NovaCardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Welcome to Nova.UI</h2>
            <NovaBadge variant="glow">New</NovaBadge>
          </div>
        </NovaCardHeader>
        <NovaCardContent className="space-y-4">
          <p className="text-muted-foreground">
            Build beautiful interfaces with our enhanced component library.
          </p>
          <NovaInput 
            placeholder="Enter your email" 
            floatingLabel 
            label="Email Address"
          />
        </NovaCardContent>
        <NovaCardFooter>
          <NovaButton variant="glow" loading={false}>
            Get Started
          </NovaButton>
        </NovaCardFooter>
      </NovaCard>
    </div>
  )
}`}
          language="tsx"
        />
      </section>

      {/* Next Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/docs/quick-start"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Quick Start Guide</h3>
              <p className="text-sm text-muted-foreground">Build your first component</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
          <Link
            href="/docs/components/button"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 hover:bg-accent transition-colors"
          >
            <div>
              <h3 className="font-medium">Browse Components</h3>
              <p className="text-sm text-muted-foreground">Explore the component library</p>
            </div>
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  )
}
