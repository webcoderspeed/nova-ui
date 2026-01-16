"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Keyboard, Zap, Info } from "lucide-react"

export default function TooltipDocsV2() {
  return (
    <ComponentDocTemplate
      title="Tooltip"
      description="A popup that displays information related to an element. Beta with rich content and animations."
      badgeText="New in v2.0.0-beta"
      preview={
        <TooltipProvider>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button>
                  <Keyboard className="h-4 w-4 mr-2" />
                  Shortcuts
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">⌘</kbd>
                <span>+</span>
                <kbd className="px-1.5 py-0.5 text-xs bg-muted rounded">K</kbd>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      }
      installCommand="./add-submodule.sh https://github.com/nova-ui/nova-ui.git nova-ui v2.0.0-beta"
      importCode={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nova-ui/tooltip"
// v2.0.0-beta includes NovaTooltip
import { NovaTooltip } from "@/nova-ui/nova-tooltip"`}
      usageCode={`import { NovaTooltip } from "@/nova-ui/nova-tooltip"

export function MyComponent() {
  return (
    <NovaTooltip 
      content="Rich tooltip with animations"
      shortcut={['⌘', 'K']}
      variant="rich"
    >
      <Button>Hover me</Button>
    </NovaTooltip>
  )
}`}
      props={[
        { name: "delayDuration", type: "number", default: "200", description: "Delay before showing" },
        { name: "side", type: '"top" | "right" | "bottom" | "left"', default: '"top"', description: "Preferred side" },
        { name: "sideOffset", type: "number", default: "4", description: "Distance from trigger" },
        { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment" },
        { name: "variant", type: '"default" | "rich"', default: '"default"', description: "Tooltip style (v2)" },
        { name: "shortcut", type: "string[]", description: "Keyboard shortcut keys (v2)" },
      ]}
      examples={[
        {
          title: "With Keyboard Shortcut",
          description: "Show keyboard shortcuts in tooltips.",
          code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button>Save</Button>
  </TooltipTrigger>
  <TooltipContent className="flex items-center gap-1">
    Save
    <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-muted rounded">⌘S</kbd>
  </TooltipContent>
</Tooltip>`,
          preview: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>Save</Button>
                </TooltipTrigger>
                <TooltipContent className="flex items-center gap-1">
                  Save
                  <kbd className="ml-2 px-1.5 py-0.5 text-xs bg-muted rounded">⌘S</kbd>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
        {
          title: "Rich Content",
          description: "Tooltips with icons and formatted content.",
          code: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">
      <Zap className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent className="max-w-xs">
    <div className="flex gap-2">
      <Zap className="h-4 w-4 text-yellow-500 shrink-0" />
      <div>
        <p className="font-medium">Quick Actions</p>
        <p className="text-xs text-muted-foreground">
          Access frequently used features
        </p>
      </div>
    </div>
  </TooltipContent>
</Tooltip>`,
          preview: (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Zap className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="flex gap-2">
                    <Zap className="h-4 w-4 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Quick Actions</p>
                      <p className="text-xs text-muted-foreground">Access frequently used features instantly</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ),
        },
        {
          title: "Info Tooltip",
          description: "Contextual help tooltips.",
          code: `<div className="flex items-center gap-2">
  <span>API Key</span>
  <Tooltip>
    <TooltipTrigger>
      <Info className="h-4 w-4 text-muted-foreground" />
    </TooltipTrigger>
    <TooltipContent side="right" className="max-w-[200px]">
      Your API key is used to authenticate requests. Keep it secret!
    </TooltipContent>
  </Tooltip>
</div>`,
          preview: (
            <TooltipProvider>
              <div className="flex items-center gap-2">
                <span className="text-sm">API Key</span>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-[200px]">
                    Your API key is used to authenticate requests. Keep it secret!
                  </TooltipContent>
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
      sourceLink="https://github.com/nova-ui/nova-ui/tree/v2.0.0-beta"
    />
  )
}
