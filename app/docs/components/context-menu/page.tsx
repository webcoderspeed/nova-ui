"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export default function ContextMenuPage() {
  return (
    <ComponentDocTemplate
      title="Context Menu"
      description="Displays a menu to the user triggered by right-click. Supports submenus, checkboxes, and radio items."
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>Save Page As...</ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>Show Bookmarks Bar</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel>People</ContextMenuLabel>
              <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      }
      installCommand="npx nova-ui@latest add context-menu"
      importCode={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"`}
      usageCode={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function MyComponent() {
  return (
    <ContextMenu>
      <ContextMenuTrigger>Right click here</ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Profile</ContextMenuItem>
        <ContextMenuItem>Settings</ContextMenuItem>
        <ContextMenuItem>Logout</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      props={[
        { name: "onOpenChange", type: "function", description: "Callback when menu opens/closes" },
        { name: "modal", type: "boolean", default: "true", description: "Render as modal" },
        { name: "disabled", type: "boolean", description: "Disable the item (ContextMenuItem)" },
        { name: "inset", type: "boolean", description: "Add left padding (ContextMenuItem)" },
      ]}
      examples={[
        {
          title: "With Submenus",
          description: "Nested context menus for complex actions.",
          code: `<ContextMenuSub>
  <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Option 1</ContextMenuItem>
    <ContextMenuItem>Option 2</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>`,
          preview: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
                Right click
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Cut</ContextMenuItem>
                <ContextMenuItem>Copy</ContextMenuItem>
                <ContextMenuItem>Paste</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Dropdown Menu", href: "/docs/components/dropdown-menu" },
        { name: "Menubar", href: "/docs/components/menubar" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/context-menu.tsx"
    />
  )
}
