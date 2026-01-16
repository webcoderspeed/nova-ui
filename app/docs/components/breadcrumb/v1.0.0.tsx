"use client"

import {
  NovaBreadcrumb,
  NovaBreadcrumbList,
  NovaBreadcrumbItem,
  NovaBreadcrumbLink,
  NovaBreadcrumbPage,
  NovaBreadcrumbSeparator,
  NovaBreadcrumbEllipsis,
} from "@/components/nova/nova-breadcrumb"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Home } from "lucide-react"

export default function BreadcrumbDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Breadcrumb"
      description="Displays the path to the current resource using a hierarchy of links."
      whenToUse={[
        "To help users understand their location within a website.",
        "When you have deep navigational structures.",
        "To provide a quick way to navigate back to parent pages."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `minimal` variants." },
        { type: "info", content: "Includes built-in responsive components like `Ellipsis`." },
        { type: "info", content: "Automatically handles separator styling." }
      ]}
      preview={
        <NovaBreadcrumb>
          <NovaBreadcrumbList>
            <NovaBreadcrumbItem>
              <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
            </NovaBreadcrumbItem>
            <NovaBreadcrumbSeparator />
            <NovaBreadcrumbItem>
              <NovaBreadcrumbLink href="/components">Components</NovaBreadcrumbLink>
            </NovaBreadcrumbItem>
            <NovaBreadcrumbSeparator />
            <NovaBreadcrumbItem>
              <NovaBreadcrumbPage>Breadcrumb</NovaBreadcrumbPage>
            </NovaBreadcrumbItem>
          </NovaBreadcrumbList>
        </NovaBreadcrumb>
      }
      installCommand="npx nova-ui@latest add breadcrumb"
      importCode={`import {
  NovaBreadcrumb,
  NovaBreadcrumbList,
  NovaBreadcrumbItem,
  NovaBreadcrumbLink,
  NovaBreadcrumbPage,
  NovaBreadcrumbSeparator,
} from "@/components/nova/nova-breadcrumb"`}
      usageCode={`<NovaBreadcrumb>
  <NovaBreadcrumbList>
    <NovaBreadcrumbItem>
      <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
    </NovaBreadcrumbItem>
    <NovaBreadcrumbSeparator />
    <NovaBreadcrumbItem>
      <NovaBreadcrumbPage>Current Page</NovaBreadcrumbPage>
    </NovaBreadcrumbItem>
  </NovaBreadcrumbList>
</NovaBreadcrumb>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "minimal"',
          defaultValue: '"default"',
          description: "Visual style of the breadcrumb container.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent variant perfect for overlapping on images or colored backgrounds.",
          code: `<NovaBreadcrumb variant="glass">
  <NovaBreadcrumbList>
    <NovaBreadcrumbItem>
      <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
    </NovaBreadcrumbItem>
    <NovaBreadcrumbSeparator />
    <NovaBreadcrumbItem>
      <NovaBreadcrumbPage>Dashboard</NovaBreadcrumbPage>
    </NovaBreadcrumbItem>
  </NovaBreadcrumbList>
</NovaBreadcrumb>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
              <NovaBreadcrumb variant="glass">
                <NovaBreadcrumbList>
                  <NovaBreadcrumbItem>
                    <NovaBreadcrumbLink href="/" className="text-white hover:text-white/80">Home</NovaBreadcrumbLink>
                  </NovaBreadcrumbItem>
                  <NovaBreadcrumbSeparator className="text-white/50" />
                  <NovaBreadcrumbItem>
                    <NovaBreadcrumbPage className="text-white font-semibold">Dashboard</NovaBreadcrumbPage>
                  </NovaBreadcrumbItem>
                </NovaBreadcrumbList>
              </NovaBreadcrumb>
            </div>
          )
        },
        {
          title: "Minimal Variant",
          description: "A compact, uppercase style for dense interfaces.",
          code: `<NovaBreadcrumb variant="minimal">
  <NovaBreadcrumbList>
    <NovaBreadcrumbItem>
      <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
    </NovaBreadcrumbItem>
    <NovaBreadcrumbSeparator />
    <NovaBreadcrumbItem>
      <NovaBreadcrumbPage>Settings</NovaBreadcrumbPage>
    </NovaBreadcrumbItem>
  </NovaBreadcrumbList>
</NovaBreadcrumb>`,
          preview: (
            <NovaBreadcrumb variant="minimal">
              <NovaBreadcrumbList>
                <NovaBreadcrumbItem>
                  <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
                </NovaBreadcrumbItem>
                <NovaBreadcrumbSeparator />
                <NovaBreadcrumbItem>
                  <NovaBreadcrumbPage>Settings</NovaBreadcrumbPage>
                </NovaBreadcrumbItem>
              </NovaBreadcrumbList>
            </NovaBreadcrumb>
          )
        },
        {
          title: "With Icons",
          description: "Using icons for the root or items.",
          code: `<NovaBreadcrumb>
  <NovaBreadcrumbList>
    <NovaBreadcrumbItem>
      <NovaBreadcrumbLink href="/">
        <Home className="h-4 w-4" />
      </NovaBreadcrumbLink>
    </NovaBreadcrumbItem>
    <NovaBreadcrumbSeparator />
    <NovaBreadcrumbItem>
      <NovaBreadcrumbPage>Profile</NovaBreadcrumbPage>
    </NovaBreadcrumbItem>
  </NovaBreadcrumbList>
</NovaBreadcrumb>`,
          preview: (
            <NovaBreadcrumb>
              <NovaBreadcrumbList>
                <NovaBreadcrumbItem>
                  <NovaBreadcrumbLink href="/">
                    <Home className="h-4 w-4" />
                  </NovaBreadcrumbLink>
                </NovaBreadcrumbItem>
                <NovaBreadcrumbSeparator />
                <NovaBreadcrumbItem>
                  <NovaBreadcrumbPage>Profile</NovaBreadcrumbPage>
                </NovaBreadcrumbItem>
              </NovaBreadcrumbList>
            </NovaBreadcrumb>
          )
        }
      ]}
    />
  )
}
