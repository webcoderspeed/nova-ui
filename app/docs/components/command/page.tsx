"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"

export default function CommandPage() {
  return (
    <ComponentDocTemplate
      title="Command"
      description="Fast, composable, unstyled command menu for React. Perfect for command palettes, search dialogs, and autocomplete."
      preview={
        <Command className="rounded-lg border shadow-md w-[350px]">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      }
      installCommand="npx nova-ui@latest add command"
      importCode={`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"`}
      usageCode={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

export function MyComponent() {
  return (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`}
      props={[
        { name: "value", type: "string", description: "Controlled search value" },
        { name: "onValueChange", type: "function", description: "Callback when search changes" },
        { name: "filter", type: "function", description: "Custom filter function" },
        { name: "shouldFilter", type: "boolean", default: "true", description: "Enable/disable filtering" },
        { name: "loop", type: "boolean", description: "Loop keyboard navigation" },
      ]}
      examples={[
        {
          title: "With Shortcuts",
          description: "Display keyboard shortcuts for items.",
          code: `<CommandItem>
  <User className="mr-2 h-4 w-4" />
  <span>Profile</span>
  <CommandShortcut>⌘P</CommandShortcut>
</CommandItem>`,
          preview: (
            <Command className="rounded-lg border w-[300px]">
              <CommandList>
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘,</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Dialog", href: "/docs/components/dialog" },
        { name: "Popover", href: "/docs/components/popover" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/command.tsx"
    />
  )
}
