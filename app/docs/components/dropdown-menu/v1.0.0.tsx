"use client"

import {
  NovaDropdownMenu,
  NovaDropdownMenuTrigger,
  NovaDropdownMenuContent,
  NovaDropdownMenuItem,
  NovaDropdownMenuLabel,
  NovaDropdownMenuSeparator,
  NovaDropdownMenuShortcut,
  NovaDropdownMenuGroup,
  NovaDropdownMenuSub,
  NovaDropdownMenuSubContent,
  NovaDropdownMenuSubTrigger,
  NovaDropdownMenuPortal,
} from "@/components/nova/nova-dropdown-menu"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { NovaButton } from "@/components/nova/nova-button"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

export default function DropdownMenuDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Dropdown Menu"
      description="Displays a menu to the user—such as a set of actions or functions—triggered by a button."
      whenToUse={[
        "To group related actions in a compact UI element.",
        "For navigation menus or settings panels.",
        "To declutter the interface by hiding less frequently used actions."
      ]}
      hints={[
        { type: "info", content: "Supports `glass` and `gradient` variants on `NovaDropdownMenuContent`." },
        { type: "info", content: "Items have enhanced focus styles and animations." },
        { type: "info", content: "Includes support for nested submenus." }
      ]}
      preview={
        <NovaDropdownMenu>
          <NovaDropdownMenuTrigger asChild>
            <NovaButton variant="outline">Open Menu</NovaButton>
          </NovaDropdownMenuTrigger>
          <NovaDropdownMenuContent className="w-56">
            <NovaDropdownMenuLabel>My Account</NovaDropdownMenuLabel>
            <NovaDropdownMenuSeparator />
            <NovaDropdownMenuGroup>
              <NovaDropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <NovaDropdownMenuShortcut>⇧⌘P</NovaDropdownMenuShortcut>
              </NovaDropdownMenuItem>
              <NovaDropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <NovaDropdownMenuShortcut>⌘B</NovaDropdownMenuShortcut>
              </NovaDropdownMenuItem>
              <NovaDropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <NovaDropdownMenuShortcut>⌘S</NovaDropdownMenuShortcut>
              </NovaDropdownMenuItem>
              <NovaDropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <NovaDropdownMenuShortcut>⌘K</NovaDropdownMenuShortcut>
              </NovaDropdownMenuItem>
            </NovaDropdownMenuGroup>
            <NovaDropdownMenuSeparator />
            <NovaDropdownMenuGroup>
              <NovaDropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </NovaDropdownMenuItem>
              <NovaDropdownMenuSub>
                <NovaDropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </NovaDropdownMenuSubTrigger>
                <NovaDropdownMenuPortal>
                  <NovaDropdownMenuSubContent>
                    <NovaDropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </NovaDropdownMenuItem>
                    <NovaDropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </NovaDropdownMenuItem>
                    <NovaDropdownMenuSeparator />
                    <NovaDropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </NovaDropdownMenuItem>
                  </NovaDropdownMenuSubContent>
                </NovaDropdownMenuPortal>
              </NovaDropdownMenuSub>
              <NovaDropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
                <NovaDropdownMenuShortcut>⌘+T</NovaDropdownMenuShortcut>
              </NovaDropdownMenuItem>
            </NovaDropdownMenuGroup>
            <NovaDropdownMenuSeparator />
            <NovaDropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </NovaDropdownMenuItem>
            <NovaDropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </NovaDropdownMenuItem>
            <NovaDropdownMenuItem disabled>
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
            </NovaDropdownMenuItem>
            <NovaDropdownMenuSeparator />
            <NovaDropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <NovaDropdownMenuShortcut>⇧⌘Q</NovaDropdownMenuShortcut>
            </NovaDropdownMenuItem>
          </NovaDropdownMenuContent>
        </NovaDropdownMenu>
      }
      installCommand="npx nova-ui@latest add dropdown-menu"
      importCode={`import {
  NovaDropdownMenu,
  NovaDropdownMenuTrigger,
  NovaDropdownMenuContent,
  NovaDropdownMenuItem,
  NovaDropdownMenuLabel,
  NovaDropdownMenuSeparator,
  NovaDropdownMenuShortcut,
  NovaDropdownMenuGroup,
  NovaDropdownMenuSub,
  NovaDropdownMenuSubContent,
  NovaDropdownMenuSubTrigger,
  NovaDropdownMenuPortal,
} from "@/components/nova/nova-dropdown-menu"`}
      usageCode={`<NovaDropdownMenu>
  <NovaDropdownMenuTrigger>Open</NovaDropdownMenuTrigger>
  <NovaDropdownMenuContent>
    <NovaDropdownMenuLabel>My Account</NovaDropdownMenuLabel>
    <NovaDropdownMenuSeparator />
    <NovaDropdownMenuItem>Profile</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>Billing</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>Team</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>Subscription</NovaDropdownMenuItem>
  </NovaDropdownMenuContent>
</NovaDropdownMenu>`}
      props={[
        {
          name: "variant",
          type: '"default" | "glass" | "gradient"',
          defaultValue: '"default"',
          description: "Visual style of the dropdown content.",
        },
      ]}
      examples={[
        {
          title: "Glass Variant",
          description: "A translucent dropdown menu.",
          code: `<NovaDropdownMenu>
  <NovaDropdownMenuTrigger asChild>
    <NovaButton variant="outline">Glass Menu</NovaButton>
  </NovaDropdownMenuTrigger>
  <NovaDropdownMenuContent variant="glass">
    <NovaDropdownMenuItem>Profile</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>Settings</NovaDropdownMenuItem>
  </NovaDropdownMenuContent>
</NovaDropdownMenu>`,
          preview: (
            <div className="p-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
              <NovaDropdownMenu>
                <NovaDropdownMenuTrigger asChild>
                  <NovaButton variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:text-white">Glass Menu</NovaButton>
                </NovaDropdownMenuTrigger>
                <NovaDropdownMenuContent variant="glass">
                  <NovaDropdownMenuItem>Profile</NovaDropdownMenuItem>
                  <NovaDropdownMenuItem>Settings</NovaDropdownMenuItem>
                  <NovaDropdownMenuSeparator />
                  <NovaDropdownMenuItem>Logout</NovaDropdownMenuItem>
                </NovaDropdownMenuContent>
              </NovaDropdownMenu>
            </div>
          )
        },
        {
          title: "Gradient Variant",
          description: "A dropdown with a subtle gradient background.",
          code: `<NovaDropdownMenu>
  <NovaDropdownMenuTrigger asChild>
    <NovaButton variant="outline">Gradient Menu</NovaButton>
  </NovaDropdownMenuTrigger>
  <NovaDropdownMenuContent variant="gradient">
    <NovaDropdownMenuItem>New Tab</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>New Window</NovaDropdownMenuItem>
  </NovaDropdownMenuContent>
</NovaDropdownMenu>`,
          preview: (
            <NovaDropdownMenu>
              <NovaDropdownMenuTrigger asChild>
                <NovaButton variant="outline">Gradient Menu</NovaButton>
              </NovaDropdownMenuTrigger>
              <NovaDropdownMenuContent variant="gradient">
                <NovaDropdownMenuItem>New Tab</NovaDropdownMenuItem>
                <NovaDropdownMenuItem>New Window</NovaDropdownMenuItem>
                <NovaDropdownMenuSeparator />
                <NovaDropdownMenuItem>Share</NovaDropdownMenuItem>
              </NovaDropdownMenuContent>
            </NovaDropdownMenu>
          )
        }
      ]}
    />
  )
}
