"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function TooltipDocsV1() {
  return (
    <ComponentDocTemplate
      title="Tooltip"
      description="A popup that displays information related to an element when it receives focus or hover."
      preview={
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.0.0"
      importCode={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nova-ui/tooltip"`}
      usageCode={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nova-ui/tooltip"

export function MyComponent() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Tooltip content</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
      props={[
        { name: "delayDuration", type: "number", default: "200", description: "Delay before showing tooltip" },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Preferred side" },
        { name: "sideOffset", type: "number", default: "4", description: "Distance from trigger" },
      ]}
      examples={[
        {
          title: "Basic Tooltip",
          description: "Simple hover tooltip.",
          code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
          preview: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Hover</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip text</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Popover", href: "/docs/components/popover" },
        { name: "Hover Card", href: "/docs/components/hover-card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.0.0"
    />
  )
}
