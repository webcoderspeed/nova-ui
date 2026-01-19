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
                code={`curl -O https://raw.githubusercontent.com/acefone/nova-ui/main/install-nova.sh
chmod +x install-nova.sh`}
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
              <CodeBlock code={`./install-nova.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0`} />
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

# Nova UI Installation Script
# Usage: ./install-nova.sh [repo_url] [install_path] [version]
# Example: ./install-nova.sh git@webcoderspeed:webcoderspeed/nova-ui.git packages/nova-ui v1.0.0

set -e

REPO_URL=\${1:-"git@webcoderspeed:webcoderspeed/nova-ui.git"}
INSTALL_PATH=\${2:-"packages/nova-ui"}
VERSION=$3

# Colors
GREEN='\x1b[0;32m'
BLUE='\x1b[0;34m'
YELLOW='\x1b[0;33m'
RED='\x1b[0;31m'
NC='\x1b[0m'

echo -e "\${BLUE}
  _   _                  _   _ ___ 
 | \\ | | _____   ____ _ | | | |_ _|
 |  \\| |/ _ \\ \\ / / _\` || | | || | 
 | |\\  | (_) \\ V / (_| || |_| || | 
 |_| \\_|\\___/ \\_/ \\__,_| \\___/|___|
                                   
\${NC}"
echo -e "\${BLUE}🚀 Starting Nova UI Installation...\${NC}"

# Check Git
if ! command -v git &> /dev/null; then
    echo -e "\${RED}❌ Git is not installed.\${NC}"
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "\${RED}❌ Node.js is not installed.\${NC}"
    exit 1
fi

# 1. Add Submodule
echo -e "\n\${BLUE}📂 Adding submodule from \${REPO_URL} to \${INSTALL_PATH}...\${NC}"
if [ -d "$INSTALL_PATH" ]; then
    echo -e "\${YELLOW}⚠️  Directory \${INSTALL_PATH} already exists. Skipping submodule add.\${NC}"
else
    git submodule add "$REPO_URL" "$INSTALL_PATH"
fi

# 1.5 Switch to Version (if specified)
if [ -n "$VERSION" ]; then
    echo -e "\n\${BLUE}🔀 Switching to version \${VERSION}...\${NC}"
    cd "$INSTALL_PATH"
    # Fetch all tags and branches to ensure we can checkout
    git fetch --all --tags
    git checkout "$VERSION"
    cd - > /dev/null
fi

# 2. Install Dependencies
echo -e "\n\${BLUE}📦 Installing dependencies...\${NC}"
# Check if the setup script exists
SETUP_SCRIPT="$INSTALL_PATH/scripts/setup-submodule.mjs"
if [ -f "$SETUP_SCRIPT" ]; then
    node "$SETUP_SCRIPT"
else
    echo -e "\${YELLOW}⚠️  Setup script not found at \${SETUP_SCRIPT}. Skipping dependency installation.\${NC}"
fi

# 3. Cleanup (Clean Setup)
echo -e "\n\${BLUE}🧹 Cleaning up workspace (Keeping only essential files)...\${NC}"
cd "$INSTALL_PATH"

# Create styles directory if it doesn't exist
mkdir -p styles

# Copy global css if it exists in app/globals.css
if [ -f "app/globals.css" ]; then
    cp "app/globals.css" "styles/globals.css"
    echo -e "\${GREEN}✨ Copied app/globals.css to styles/globals.css\${NC}"
fi

# Define the files/folders to KEEP
# We will move them to a temporary directory, delete everything, then move them back
TEMP_DIR=$(mktemp -d)

# Function to safely move if exists
safe_move() {
    if [ -e "$1" ]; then
        cp -R "$1" "$TEMP_DIR/"
    fi
}

safe_move "components"
safe_move "libs"
safe_move "lib" # legacy support
safe_move "hooks"
safe_move "theme-provider.tsx"
safe_move "index.ts"
safe_move "package.json"
safe_move "tsconfig.json"
safe_move "styles" # The one we just created
safe_move "scripts" # Keep scripts for future updates if needed

# Delete everything in the current directory (hidden files too, except .git)
# We need to be careful not to delete .git directory
find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' -exec rm -rf {} +

# Move files back from temp
cp -R "$TEMP_DIR/"* .
rm -rf "$TEMP_DIR"

echo -e "\n\${GREEN}✅ Nova UI installed successfully!\${NC}"
echo -e "   Location: \${INSTALL_PATH}"
echo -e "   Only essential files are retained."`}
                language="bash"
              />
              <p className="text-sm text-muted-foreground">
                Save this as <code className="rounded bg-muted px-1.5 py-0.5 text-sm">install-nova.sh</code> and run:
              </p>
              <CodeBlock
                code={`chmod +x install-nova.sh
./install-nova.sh https://bitbucket.org/acefone/nova-ui.git src/nova-ui v1.0.0`}
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
