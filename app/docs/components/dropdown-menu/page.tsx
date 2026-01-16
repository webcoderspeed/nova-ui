"use client"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { CreditCard, LogOut, Mail, MessageSquare, Settings, User, UserPlus } from "lucide-react"

export default function DropdownMenuPage() {
  return (
    <ComponentDocTemplate
      title="Dropdown Menu"
      description="Displays a menu to the user — such as a set of actions or functions — triggered by a button."
      preview={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Open Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
      installCommand="npx nova-ui@latest add dropdown-menu"
      importCode={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"`}
      usageCode={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function MyComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}`}
      props={[
        { name: "open", type: "boolean", description: "Controlled open state" },
        { name: "onOpenChange", type: "function", description: "Callback when open changes" },
        { name: "modal", type: "boolean", default: "true", description: "Render as modal" },
        { name: "disabled", type: "boolean", description: "Disable the item" },
        { name: "inset", type: "boolean", description: "Add left padding to item" },
      ]}
      examples={[
        {
          title: "With Submenus",
          description: "Nested dropdown menus.",
          code: `<DropdownMenuSub>
  <DropdownMenuSubTrigger>
    <UserPlus className="mr-2 h-4 w-4" />
    <span>Invite users</span>
  </DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Email</DropdownMenuItem>
    <DropdownMenuItem>Message</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`,
          preview: (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Email
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Context Menu", href: "/docs/components/context-menu" },
        { name: "Menubar", href: "/docs/components/menubar" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/dropdown-menu.tsx"
    />
  )
}
