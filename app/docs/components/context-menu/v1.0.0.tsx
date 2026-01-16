"use client"

import {
  NovaContextMenu,
  NovaContextMenuTrigger,
  NovaContextMenuContent,
  NovaContextMenuItem,
  NovaContextMenuCheckboxItem,
  NovaContextMenuRadioItem,
  NovaContextMenuLabel,
  NovaContextMenuSeparator,
  NovaContextMenuShortcut,
  NovaContextMenuGroup,
  NovaContextMenuSub,
  NovaContextMenuSubContent,
  NovaContextMenuSubTrigger,
  NovaContextMenuRadioGroup,
} from "@/components/nova/nova-context-menu"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"

export default function ContextMenuDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Context Menu"
      description="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
      whenToUse={[
        "To provide quick access to actions relevant to a specific item.",
        "As a secondary way to perform actions without cluttering the UI.",
        "To mimic native OS context menus."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `bordered` variants on `NovaContextMenuContent`." },
        { type: "info", content: "Can include nested submenus, checkboxes, and radio groups." }
      ]}
      preview={
        <NovaContextMenu>
          <NovaContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </NovaContextMenuTrigger>
          <NovaContextMenuContent className="w-64">
            <NovaContextMenuItem inset>
              Back
              <NovaContextMenuShortcut>⌘[</NovaContextMenuShortcut>
            </NovaContextMenuItem>
            <NovaContextMenuItem inset disabled>
              Forward
              <NovaContextMenuShortcut>⌘]</NovaContextMenuShortcut>
            </NovaContextMenuItem>
            <NovaContextMenuItem inset>
              Reload
              <NovaContextMenuShortcut>⌘R</NovaContextMenuShortcut>
            </NovaContextMenuItem>
            <NovaContextMenuSeparator />
            <NovaContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <NovaContextMenuShortcut>⌘⇧B</NovaContextMenuShortcut>
            </NovaContextMenuCheckboxItem>
            <NovaContextMenuCheckboxItem>Show Full URLs</NovaContextMenuCheckboxItem>
            <NovaContextMenuSeparator />
            <NovaContextMenuRadioGroup value="pedro">
              <NovaContextMenuLabel inset>People</NovaContextMenuLabel>
              <NovaContextMenuSeparator />
              <NovaContextMenuRadioItem value="pedro">
                Pedro Duarte
              </NovaContextMenuRadioItem>
              <NovaContextMenuRadioItem value="colm">
                Colm Tuite
              </NovaContextMenuRadioItem>
            </NovaContextMenuRadioGroup>
          </NovaContextMenuContent>
        </NovaContextMenu>
      }
      installCommand="npx nova-ui@latest add context-menu"
      importCode={`import {
  NovaContextMenu,
  NovaContextMenuTrigger,
  NovaContextMenuContent,
  NovaContextMenuItem,
  NovaContextMenuCheckboxItem,
  NovaContextMenuRadioItem,
  NovaContextMenuLabel,
  NovaContextMenuSeparator,
  NovaContextMenuShortcut,
  NovaContextMenuGroup,
  NovaContextMenuSub,
  NovaContextMenuSubContent,
  NovaContextMenuSubTrigger,
  NovaContextMenuRadioGroup,
} from "@/components/nova/nova-context-menu"`}
      usageCode={`<NovaContextMenu>
  <NovaContextMenuTrigger>Right click</NovaContextMenuTrigger>
  <NovaContextMenuContent>
    <NovaContextMenuItem>Profile</NovaContextMenuItem>
    <NovaContextMenuItem>Billing</NovaContextMenuItem>
    <NovaContextMenuItem>Team</NovaContextMenuItem>
    <NovaContextMenuItem>Subscription</NovaContextMenuItem>
  </NovaContextMenuContent>
</NovaContextMenu>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "bordered"',
          defaultValue: '"default"',
          description: "Visual style of the context menu content.",
        },
        {
          name: "glass",
          type: "boolean",
          defaultValue: "false",
          description: "Shortcut to enable the glass variant.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent context menu.",
          code: `<NovaContextMenu>
  <NovaContextMenuTrigger className="border border-dashed p-4 rounded">
    Right click (Glass)
  </NovaContextMenuTrigger>
  <NovaContextMenuContent variant="glass">
    <NovaContextMenuItem>New Tab</NovaContextMenuItem>
    <NovaContextMenuItem>New Window</NovaContextMenuItem>
    <NovaContextMenuSeparator />
    <NovaContextMenuItem>Share</NovaContextMenuItem>
  </NovaContextMenuContent>
</NovaContextMenu>`,
          preview: (
            <NovaContextMenu>
              <NovaContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click here (Glass)
              </NovaContextMenuTrigger>
              <NovaContextMenuContent variant="glass" className="w-64">
                <NovaContextMenuItem inset>New Tab</NovaContextMenuItem>
                <NovaContextMenuItem inset>New Window</NovaContextMenuItem>
                <NovaContextMenuSeparator />
                <NovaContextMenuItem inset>Share</NovaContextMenuItem>
              </NovaContextMenuContent>
            </NovaContextMenu>
          )
        }
      ]}
    />
  )
}
