"use client"

import { NovaResizablePanelGroup, NovaResizablePanel, NovaResizableHandle } from "@/components/nova/nova-resizable"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function ResizableDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="v1.0.0"
      title="Resizable"
      description="Accessible resizable panel groups and handles with support for nested groups."
      whenToUse={[
        "To create IDE-like layouts with draggable sidebars.",
        "For split-screen views where the user controls the ratio.",
        "When you need to let users customize the size of workspace panels."
      ]}
      hints={[
        {
          type: "info",
          title: "Nova Enhancement",
          content: "NovaResizableHandle includes a `variant` prop for styling the drag handle, allowing for glass, primary colored, or default appearances."
        }
      ]}
      preview={
        <NovaResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px] min-h-[200px]">
          <NovaResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </NovaResizablePanel>
          <NovaResizableHandle withHandle variant="glass" />
          <NovaResizablePanel defaultSize={50}>
            <NovaResizablePanelGroup direction="vertical">
              <NovaResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </NovaResizablePanel>
              <NovaResizableHandle variant="primary" />
              <NovaResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </NovaResizablePanel>
            </NovaResizablePanelGroup>
          </NovaResizablePanel>
        </NovaResizablePanelGroup>
      }
      installCommand="npx nova-ui@latest add resizable"
      importCode={`import { 
  NovaResizablePanelGroup, 
  NovaResizablePanel, 
  NovaResizableHandle 
} from "@/components/nova/nova-resizable"`}
      usageCode={`import { NovaResizablePanelGroup, NovaResizablePanel, NovaResizableHandle } from "@/components/nova/nova-resizable"

export function ResizableDemo() {
  return (
    <NovaResizablePanelGroup direction="horizontal">
      <NovaResizablePanel>One</NovaResizablePanel>
      <NovaResizableHandle withHandle />
      <NovaResizablePanel>Two</NovaResizablePanel>
    </NovaResizablePanelGroup>
  )
}`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "primary"',
          default: '"default"',
          description: "Visual style variant for the resize handle.",
        },
        {
          name: "withHandle",
          type: "boolean",
          default: "false",
          description: "Whether to show a small grip icon in the center of the handle.",
        }
      ]}
      examples={[
        {
          title: "Primary Handle",
          description: "A resize handle using the primary color.",
          code: `<NovaResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
  <NovaResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">Sidebar</div>
  </NovaResizablePanel>
  <NovaResizableHandle withHandle variant="primary" />
  <NovaResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">Content</div>
  </NovaResizablePanel>
</NovaResizablePanelGroup>`,
          preview: (
            <NovaResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
              <NovaResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">Sidebar</div>
              </NovaResizablePanel>
              <NovaResizableHandle withHandle variant="primary" />
              <NovaResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">Content</div>
              </NovaResizablePanel>
            </NovaResizablePanelGroup>
          )
        }
      ]}
    />
  )
}
