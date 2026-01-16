"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Plus, Settings, User } from "lucide-react"

export default function TooltipDocsV11() {
  return (
    <ComponentDocTemplate
      title="Tooltip"
      description="A popup that displays information related to an element. Enhanced with positioning options."
      badgeText="Updated in v1.1.0"
      preview={
        <TooltipProvider>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add new item</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v1.1.0"
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
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add new item</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}
      props={[
        { name: "delayDuration", type: "number", default: "200", description: "Delay before showing tooltip" },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Preferred side" },
        { name: "sideOffset", type: "number", default: "4", description: "Distance from trigger" },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "Alignment on the side",
        },
      ]}
      examples={[
        {
          title: "Different Positions",
          description: "Tooltip on different sides.",
          code: `<TooltipProvider>
  <div className="flex gap-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">Top tooltip</TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">Right tooltip</TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
          preview: (
            <TooltipProvider>
              <div className="flex gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">Top tooltip</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">Right tooltip</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          ),
        },
        {
          title: "Icon Buttons",
          description: "Tooltips for icon-only buttons.",
          code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <User className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Profile</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
          preview: (
            <TooltipProvider>
              <div className="flex gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Profile</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Settings</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Popover", href: "/docs/components/popover" },
        { name: "Hover Card", href: "/docs/components/hover-card" },
      ]}
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v1.1.0"
    />
  )
}
