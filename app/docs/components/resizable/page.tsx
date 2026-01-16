"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function ResizablePage() {
  return (
    <ComponentDocTemplate
      title="Resizable"
      description="Accessible resizable panel groups and layouts with keyboard support. Build complex IDE-like interfaces."
      preview={
        <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      installCommand="npx nova-ui@latest add resizable"
      importCode={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"`}
      usageCode={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function MyComponent() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      props={[
        { name: "direction", type: '"horizontal" | "vertical"', description: "Panel group direction" },
        { name: "defaultSize", type: "number", description: "Default panel size (percentage)" },
        { name: "minSize", type: "number", description: "Minimum panel size" },
        { name: "maxSize", type: "number", description: "Maximum panel size" },
        { name: "collapsible", type: "boolean", description: "Allow panel to collapse" },
        { name: "onResize", type: "function", description: "Callback when panel resizes" },
      ]}
      examples={[
        {
          title: "Vertical Layout",
          description: "Vertically stacked resizable panels.",
          code: `<ResizablePanelGroup direction="vertical">
  <ResizablePanel>Top</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Bottom</ResizablePanel>
</ResizablePanelGroup>`,
          preview: (
            <ResizablePanelGroup direction="vertical" className="min-h-[200px] max-w-md rounded-lg border">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Top</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Bottom</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Scroll Area", href: "/docs/components/scroll-area" },
        { name: "Separator", href: "/docs/components/separator" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/resizable.tsx"
    />
  )
}
