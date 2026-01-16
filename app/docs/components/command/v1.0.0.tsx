"use client"

import {
  NovaCommand,
  NovaCommandInput,
  NovaCommandList,
  NovaCommandEmpty,
  NovaCommandGroup,
  NovaCommandItem,
  NovaCommandShortcut,
  NovaCommandSeparator,
  NovaCommandDialog,
} from "@/components/nova/nova-command"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react"
import { useState, useEffect } from "react"

export default function CommandDocsV1() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Command"
      description="Fast, composable, unstyled command menu for React."
      whenToUse={[
        "To provide a keyboard-accessible menu for common actions.",
        "For global search functionality.",
        "As a replacement for complex dropdowns or selects."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `bordered` variants." },
        { type: "info", content: "Can be used as a standalone component or within a dialog (`NovaCommandDialog`)." },
        { type: "info", content: "Includes filtering and keyboard navigation out of the box." }
      ]}
      preview={
        <div className="w-full max-w-[450px] p-4 bg-muted/20 rounded-xl border">
          <NovaCommand className="rounded-lg border shadow-md">
            <NovaCommandInput placeholder="Type a command or search..." />
            <NovaCommandList>
              <NovaCommandEmpty>No results found.</NovaCommandEmpty>
              <NovaCommandGroup heading="Suggestions">
                <NovaCommandItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </NovaCommandItem>
                <NovaCommandItem>
                  <Smile className="mr-2 h-4 w-4" />
                  <span>Search Emoji</span>
                </NovaCommandItem>
                <NovaCommandItem>
                  <Calculator className="mr-2 h-4 w-4" />
                  <span>Calculator</span>
                </NovaCommandItem>
              </NovaCommandGroup>
              <NovaCommandSeparator />
              <NovaCommandGroup heading="Settings">
                <NovaCommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <NovaCommandShortcut>⌘P</NovaCommandShortcut>
                </NovaCommandItem>
                <NovaCommandItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <NovaCommandShortcut>⌘B</NovaCommandShortcut>
                </NovaCommandItem>
                <NovaCommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <NovaCommandShortcut>⌘S</NovaCommandShortcut>
                </NovaCommandItem>
              </NovaCommandGroup>
            </NovaCommandList>
          </NovaCommand>
        </div>
      }
      installCommand="npx nova-ui@latest add command"
      importCode={`import {
  NovaCommand,
  NovaCommandDialog,
  NovaCommandInput,
  NovaCommandList,
  NovaCommandEmpty,
  NovaCommandGroup,
  NovaCommandItem,
  NovaCommandShortcut,
  NovaCommandSeparator,
} from "@/components/nova/nova-command"`}
      usageCode={`<NovaCommand>
  <NovaCommandInput placeholder="Type a command or search..." />
  <NovaCommandList>
    <NovaCommandEmpty>No results found.</NovaCommandEmpty>
    <NovaCommandGroup heading="Suggestions">
      <NovaCommandItem>Calendar</NovaCommandItem>
      <NovaCommandItem>Search Emoji</NovaCommandItem>
      <NovaCommandItem>Calculator</NovaCommandItem>
    </NovaCommandGroup>
    <NovaCommandSeparator />
    <NovaCommandGroup heading="Settings">
      <NovaCommandItem>Profile</NovaCommandItem>
      <NovaCommandItem>Billing</NovaCommandItem>
      <NovaCommandItem>Settings</NovaCommandItem>
    </NovaCommandGroup>
  </NovaCommandList>
</NovaCommand>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "bordered"',
          defaultValue: '"default"',
          description: "Visual style of the command menu.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent variant.",
          code: `<NovaCommand variant="glass">
  <NovaCommandInput placeholder="Glass command..." />
  <NovaCommandList>
    {/* items */}
  </NovaCommandList>
</NovaCommand>`,
          preview: (
            <div className="p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg w-full max-w-[450px]">
              <NovaCommand variant="glass" className="rounded-lg border shadow-md">
                <NovaCommandInput placeholder="Glass command..." />
                <NovaCommandList>
                  <NovaCommandEmpty>No results found.</NovaCommandEmpty>
                  <NovaCommandGroup heading="Actions">
                    <NovaCommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </NovaCommandItem>
                    <NovaCommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </NovaCommandItem>
                  </NovaCommandGroup>
                </NovaCommandList>
              </NovaCommand>
            </div>
          )
        }
      ]}
    />
  )
}
