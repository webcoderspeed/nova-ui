"use client"

import { ComponentDoc } from "./component-doc"
import {
  NovaAccordion, NovaAccordionContent, NovaAccordionItem, NovaAccordionTrigger,
  NovaAlert,
  NovaAlertDialog, NovaAlertDialogAction, NovaAlertDialogCancel, NovaAlertDialogContent, NovaAlertDialogDescription, NovaAlertDialogFooter, NovaAlertDialogHeader, NovaAlertDialogTitle, NovaAlertDialogTrigger,
  NovaAspectRatio,
  NovaAvatar,
  NovaBadge,
  NovaBreadcrumb, NovaBreadcrumbItem, NovaBreadcrumbLink, NovaBreadcrumbList, NovaBreadcrumbPage, NovaBreadcrumbSeparator,
  NovaButton,
  NovaCalendar,
  NovaCard, NovaCardContent, NovaCardDescription, NovaCardFooter, NovaCardHeader, NovaCardTitle,
  NovaCheckbox,
  NovaCollapsible, NovaCollapsibleContent, NovaCollapsibleTrigger,
  NovaCommand, NovaCommandEmpty, NovaCommandGroup, NovaCommandInput, NovaCommandItem, NovaCommandList,
  NovaContextMenu, NovaContextMenuContent, NovaContextMenuItem, NovaContextMenuTrigger,
  NovaDialog,
  NovaDrawer, NovaDrawerClose, NovaDrawerContent, NovaDrawerDescription, NovaDrawerFooter, NovaDrawerHeader, NovaDrawerTitle, NovaDrawerTrigger,
  NovaDropdownMenu, NovaDropdownMenuContent, NovaDropdownMenuItem, NovaDropdownMenuLabel, NovaDropdownMenuSeparator, NovaDropdownMenuTrigger,
  NovaHoverCard, NovaHoverCardContent, NovaHoverCardTrigger,
  NovaInput,
  NovaInputOTP, NovaInputOTPGroup, NovaInputOTPSlot,
  NovaLabel,
  NovaMenubar, NovaMenubarContent, NovaMenubarItem, NovaMenubarMenu, NovaMenubarTrigger,
  NovaNavigationMenu, NovaNavigationMenuContent, NovaNavigationMenuItem, NovaNavigationMenuLink, NovaNavigationMenuList, NovaNavigationMenuTrigger,
  NovaPagination, NovaPaginationContent, NovaPaginationItem, NovaPaginationLink, NovaPaginationNext, NovaPaginationPrevious,
  NovaPopover, NovaPopoverContent, NovaPopoverTrigger,
  NovaProgress,
  NovaRadioGroup, NovaRadioGroupItem,
  NovaResizableHandle, NovaResizablePanel, NovaResizablePanelGroup,
  NovaScrollArea,
  NovaSelect,
  NovaSeparator,
  NovaSheet, NovaSheetContent, NovaSheetDescription, NovaSheetHeader, NovaSheetTitle, NovaSheetTrigger,
  NovaSkeleton,
  NovaSlider,
  NovaSwitch,
  NovaTable, NovaTableBody, NovaTableCell, NovaTableHead, NovaTableHeader, NovaTableRow,
  NovaTabs, NovaTabsContent, NovaTabsList, NovaTabsTrigger,
  NovaTextarea,
  NovaToggle,
  NovaToggleGroup, NovaToggleGroupItem,
  NovaTooltip,
} from "@/components"
import {
  AlertCircle,
  Bold,
  CalendarIcon,
  ChevronDown,
  ChevronsUpDown,
  Copy,
  Italic,
  Mail,
  Settings,
  Terminal,
  Underline,
  User,
} from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

export function AllComponentsDocs() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [sliderValue, setSliderValue] = useState([50])
  const [collapsibleOpen, setCollapsibleOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  return (
    <div className="space-y-4">
      <div data-section="components" className="scroll-mt-20 pt-8 mb-8">
        <h2 className="text-2xl font-bold mb-2">Components</h2>
        <p className="text-muted-foreground">
          All shadcn/ui components with Nova.UI enhancements. Each component is fully customizable and accessible.
        </p>
      </div>

      {/* Accordion */}
      <ComponentDoc
        id="accordion"
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal an associated section of content."
        preview={
          <NovaAccordion type="single" collapsible className="w-full max-w-md">
            <NovaAccordionItem value="item-1">
              <NovaAccordionTrigger>Is it accessible?</NovaAccordionTrigger>
              <NovaAccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</NovaAccordionContent>
            </NovaAccordionItem>
            <NovaAccordionItem value="item-2">
              <NovaAccordionTrigger>Is it styled?</NovaAccordionTrigger>
              <NovaAccordionContent>
                Yes. It comes with default styles that matches the other components aesthetic.
              </NovaAccordionContent>
            </NovaAccordionItem>
            <NovaAccordionItem value="item-3">
              <NovaAccordionTrigger>Is it animated?</NovaAccordionTrigger>
              <NovaAccordionContent>Yes. It&apos;s animated by default with smooth transitions.</NovaAccordionContent>
            </NovaAccordionItem>
          </NovaAccordion>
        }
        code={`import {
  NovaAccordion,
  NovaAccordionContent,
  NovaAccordionItem,
  NovaAccordionTrigger,
} from "@/components"

<NovaAccordion type="single" collapsible>
  <NovaAccordionItem value="item-1">
    <NovaAccordionTrigger>Is it accessible?</NovaAccordionTrigger>
    <NovaAccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </NovaAccordionContent>
  </NovaAccordionItem>
</NovaAccordion>`}
        props={[
          { name: "type", type: '"single" | "multiple"', default: '"single"', description: "Type of accordion" },
          { name: "collapsible", type: "boolean", default: "false", description: "Allow closing all items" },
          { name: "defaultValue", type: "string | string[]", description: "Default open item(s)" },
        ]}
      />

      {/* Alert */}
      <ComponentDoc
        id="alert"
        title="Alert"
        description="Displays a callout for user attention with different variants."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-md">
            <NovaAlert
              icon={<Terminal className="h-4 w-4" />}
              title="Heads up!"
              description="You can add components to your app using the cli."
            />
            <NovaAlert
              status="error"
              icon={<AlertCircle className="h-4 w-4" />}
              title="Error"
              description="Your session has expired. Please log in again."
            />
          </div>
        }
        code={`import { NovaAlert } from "@/components"
import { Terminal } from 'lucide-react'

<NovaAlert
  icon={<Terminal className="h-4 w-4" />}
  title="Heads up!"
  description="You can add components to your app using the cli."
/>`}
        props={[
          {
            name: "status",
            type: '"default" | "success" | "warning" | "error" | "info"',
            default: '"default"',
            description: "Status variant",
          },
          { name: "title", type: "string", description: "Alert title" },
          { name: "description", type: "string", description: "Alert description" },
        ]}
      />

      {/* Alert Dialog */}
      <ComponentDoc
        id="alert-dialog"
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
        preview={
          <NovaAlertDialog>
            <NovaAlertDialogTrigger asChild>
              <NovaButton variant="outline">Delete Account</NovaButton>
            </NovaAlertDialogTrigger>
            <NovaAlertDialogContent>
              <NovaAlertDialogHeader>
                <NovaAlertDialogTitle>Are you absolutely sure?</NovaAlertDialogTitle>
                <NovaAlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </NovaAlertDialogDescription>
              </NovaAlertDialogHeader>
              <NovaAlertDialogFooter>
                <NovaAlertDialogCancel>Cancel</NovaAlertDialogCancel>
                <NovaAlertDialogAction>Continue</NovaAlertDialogAction>
              </NovaAlertDialogFooter>
            </NovaAlertDialogContent>
          </NovaAlertDialog>
        }
        code={`import {
  NovaAlertDialog,
  NovaAlertDialogAction,
  NovaAlertDialogCancel,
  NovaAlertDialogContent,
  NovaAlertDialogDescription,
  NovaAlertDialogFooter,
  NovaAlertDialogHeader,
  NovaAlertDialogTitle,
  NovaAlertDialogTrigger,
  NovaButton,
} from "@/components"

<NovaAlertDialog>
  <NovaAlertDialogTrigger asChild>
    <NovaButton variant="outline">Delete Account</NovaButton>
  </NovaAlertDialogTrigger>
  <NovaAlertDialogContent>
    <NovaAlertDialogHeader>
      <NovaAlertDialogTitle>Are you absolutely sure?</NovaAlertDialogTitle>
      <NovaAlertDialogDescription>
        This action cannot be undone.
      </NovaAlertDialogDescription>
    </NovaAlertDialogHeader>
    <NovaAlertDialogFooter>
      <NovaAlertDialogCancel>Cancel</NovaAlertDialogCancel>
      <NovaAlertDialogAction>Continue</NovaAlertDialogAction>
    </NovaAlertDialogFooter>
  </NovaAlertDialogContent>
</NovaAlertDialog>`}
      />

      {/* Aspect Ratio */}
      <ComponentDoc
        id="aspect-ratio"
        title="Aspect Ratio"
        description="Displays content within a desired ratio, useful for images and videos."
        preview={
          <div className="w-[300px]">
            <NovaAspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
              <img src="/majestic-mountain-vista.png" alt="Landscape" className="h-full w-full object-cover" />
            </NovaAspectRatio>
          </div>
        }
        code={`import { NovaAspectRatio } from "@/components"

<NovaAspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="object-cover" />
</NovaAspectRatio>`}
        props={[{ name: "ratio", type: "number", default: "1", description: "The desired aspect ratio" }]}
      />

      {/* Avatar */}
      <ComponentDoc
        id="avatar"
        title="Avatar"
        description="An image element with a fallback for representing the user."
        preview={
          <div className="flex gap-4">
            <NovaAvatar
              src="/portrait-woman.png"
              alt="User"
              fallback="CN"
            />
            <NovaAvatar
              src="/thoughtful-man.png"
              alt="User"
              fallback="JD"
            />
            <NovaAvatar
              fallback="AB"
            />
          </div>
        }
        code={`import { NovaAvatar } from "@/components"

<NovaAvatar
  src="https://github.com/shadcn.png"
  alt="@shadcn"
  fallback="CN"
/>`}
      />

      {/* Badge */}
      <ComponentDoc
        id="badge"
        title="Badge"
        description="Displays a badge or a component that looks like a badge."
        preview={
          <div className="flex gap-2 flex-wrap">
            <NovaBadge>Default</NovaBadge>
            <NovaBadge variant="secondary">Secondary</NovaBadge>
            <NovaBadge variant="destructive">Destructive</NovaBadge>
            <NovaBadge variant="outline">Outline</NovaBadge>
          </div>
        }
        code={`import { NovaBadge } from "@/components"

<NovaBadge>Default</NovaBadge>
<NovaBadge variant="secondary">Secondary</NovaBadge>
<NovaBadge variant="destructive">Destructive</NovaBadge>
<NovaBadge variant="outline">Outline</NovaBadge>`}
        props={[
          {
            name: "variant",
            type: '"default" | "secondary" | "destructive" | "outline"',
            default: '"default"',
            description: "Visual style variant",
          },
        ]}
      />

      {/* Breadcrumb */}
      <ComponentDoc
        id="breadcrumb"
        title="Breadcrumb"
        description="Displays the path to the current resource using a hierarchy of links."
        preview={
          <NovaBreadcrumb>
            <NovaBreadcrumbList>
              <NovaBreadcrumbItem>
                <NovaBreadcrumbLink href="#">Home</NovaBreadcrumbLink>
              </NovaBreadcrumbItem>
              <NovaBreadcrumbSeparator />
              <NovaBreadcrumbItem>
                <NovaBreadcrumbLink href="#">Components</NovaBreadcrumbLink>
              </NovaBreadcrumbItem>
              <NovaBreadcrumbSeparator />
              <NovaBreadcrumbItem>
                <NovaBreadcrumbPage>Breadcrumb</NovaBreadcrumbPage>
              </NovaBreadcrumbItem>
            </NovaBreadcrumbList>
          </NovaBreadcrumb>
        }
        code={`import {
  NovaBreadcrumb,
  NovaBreadcrumbItem,
  NovaBreadcrumbLink,
  NovaBreadcrumbList,
  NovaBreadcrumbPage,
  NovaBreadcrumbSeparator,
} from "@/components"

<NovaBreadcrumb>
  <NovaBreadcrumbList>
    <NovaBreadcrumbItem>
      <NovaBreadcrumbLink href="/">Home</NovaBreadcrumbLink>
    </NovaBreadcrumbItem>
    <NovaBreadcrumbSeparator />
    <NovaBreadcrumbItem>
      <NovaBreadcrumbPage>Current</NovaBreadcrumbPage>
    </NovaBreadcrumbItem>
  </NovaBreadcrumbList>
</NovaBreadcrumb>`}
      />

      {/* Button */}
      <ComponentDoc
        id="button"
        title="Button"
        description="Displays a button or a component that looks like a button. Enhanced with animations and loading states."
        preview={
          <div className="flex gap-2 flex-wrap items-center">
            <NovaButton>Default</NovaButton>
            <NovaButton variant="secondary">Secondary</NovaButton>
            <NovaButton variant="destructive">Destructive</NovaButton>
            <NovaButton variant="outline">Outline</NovaButton>
            <NovaButton variant="ghost">Ghost</NovaButton>
            <NovaButton variant="link">Link</NovaButton>
            <NovaButton animation="pulse">Pulse</NovaButton>
            <NovaButton animation="bounce">Bounce</NovaButton>
            <NovaButton animation="shine">Shine</NovaButton>
            <NovaButton animation="glow">Glow</NovaButton>
            <NovaButton animation="ripple">Ripple</NovaButton>
            <NovaButton rounded="full">Rounded</NovaButton>
            <NovaButton loading>Loading</NovaButton>
          </div>
        }
        code={`import { NovaButton } from "@/components"

<NovaButton>Default</NovaButton>
<NovaButton variant="secondary">Secondary</NovaButton>
<NovaButton animation="shine">Shine Effect</NovaButton>
<NovaButton animation="ripple">Ripple Effect</NovaButton>
<NovaButton rounded="full">Rounded</NovaButton>
<NovaButton loading>Loading</NovaButton>`}
        props={[
          {
            name: "variant",
            type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
            default: '"default"',
            description: "Visual style variant",
          },
          {
            name: "size",
            type: '"default" | "sm" | "lg" | "icon"',
            default: '"default"',
            description: "Button size",
          },
          {
            name: "animation",
            type: '"none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"',
            default: '"scale"',
            description: "Animation effect on hover/click",
          },
          {
            name: "rounded",
            type: '"default" | "full" | "none"',
            default: '"default"',
            description: "Border radius style",
          },
          {
            name: "loading",
            type: "boolean",
            default: "false",
            description: "Shows loading spinner",
          },
          {
            name: "loadingText",
            type: "string",
            description: "Text to show when loading",
          },
          {
            name: "leftIcon",
            type: "ReactNode",
            description: "Icon to display on the left",
          },
          {
            name: "rightIcon",
            type: "ReactNode",
            description: "Icon to display on the right",
          },
          { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element" },
        ]}
        variants={[
          {
            name: "Sizes",
            preview: (
              <div className="flex gap-2 items-center">
                <NovaButton size="sm">Small</NovaButton>
                <NovaButton>Default</NovaButton>
                <NovaButton size="lg">Large</NovaButton>
                <NovaButton size="icon">
                  <Settings className="h-4 w-4" />
                </NovaButton>
              </div>
            ),
          },
          {
            name: "With Icons",
            preview: (
              <div className="flex gap-2">
                <NovaButton>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </NovaButton>
                <NovaButton variant="outline">
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </NovaButton>
              </div>
            ),
          },
        ]}
      />

      {/* Calendar */}
      <ComponentDoc
        id="calendar"
        title="Calendar"
        description="A date field component that allows users to enter and edit date."
        preview={<NovaCalendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />}
        code={`import { NovaCalendar } from "@/components"
import { useState } from "react"

const [date, setDate] = useState<Date | undefined>(new Date())

<NovaCalendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-md border"
/>`}
        props={[
          { name: "mode", type: '"single" | "multiple" | "range"', default: '"single"', description: "Selection mode" },
          { name: "selected", type: "Date | Date[]", description: "Currently selected date(s)" },
          { name: "onSelect", type: "(date: Date) => void", description: "Callback when date is selected" },
        ]}
      />

      {/* Card */}
      <ComponentDoc
        id="card"
        title="Card"
        description="Displays a card with header, content, and footer."
        preview={
          <NovaCard className="w-[350px]">
            <NovaCardHeader>
              <NovaCardTitle>Card Title</NovaCardTitle>
              <NovaCardDescription>Card Description</NovaCardDescription>
            </NovaCardHeader>
            <NovaCardContent>
              <p>Card Content - Display any content here.</p>
            </NovaCardContent>
            <NovaCardFooter>
              <NovaButton className="w-full">Action</NovaButton>
            </NovaCardFooter>
          </NovaCard>
        }
        code={`import {
  NovaCard,
  NovaCardContent,
  NovaCardDescription,
  NovaCardFooter,
  NovaCardHeader,
  NovaCardTitle,
} from "@/components"

<NovaCard>
  <NovaCardHeader>
    <NovaCardTitle>Card Title</NovaCardTitle>
    <NovaCardDescription>Card Description</NovaCardDescription>
  </NovaCardHeader>
  <NovaCardContent>
    <p>Card Content</p>
  </NovaCardContent>
  <NovaCardFooter>
    <NovaButton>Action</NovaButton>
  </NovaCardFooter>
</NovaCard>`}
      />

      {/* Checkbox */}
      <ComponentDoc
        id="checkbox"
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <NovaCheckbox id="terms" />
              <NovaLabel htmlFor="terms">Accept terms and conditions</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaCheckbox id="disabled" disabled />
              <NovaLabel htmlFor="disabled">Disabled</NovaLabel>
            </div>
          </div>
        }
        code={`import { NovaCheckbox } from "@/components"
import { NovaLabel } from "@/components"

<div className="flex items-center space-x-2">
  <NovaCheckbox id="terms" />
  <NovaLabel htmlFor="terms">Accept terms and conditions</NovaLabel>
</div>`}
        props={[
          { name: "checked", type: "boolean", description: "Controlled checked state" },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the checkbox" },
        ]}
      />

      {/* Collapsible */}
      <ComponentDoc
        id="collapsible"
        title="Collapsible"
        description="An interactive component which expands/collapses a panel."
        preview={
          <NovaCollapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <NovaCollapsibleTrigger asChild>
                <NovaButton variant="ghost" size="sm">
                  <ChevronsUpDown className="h-4 w-4" />
                </NovaButton>
              </NovaCollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
            <NovaCollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
            </NovaCollapsibleContent>
          </NovaCollapsible>
        }
        code={`import {
  NovaCollapsible,
  NovaCollapsibleContent,
  NovaCollapsibleTrigger,
} from "@/components"

<NovaCollapsible open={isOpen} onOpenChange={setIsOpen}>
  <NovaCollapsibleTrigger>Toggle</NovaCollapsibleTrigger>
  <NovaCollapsibleContent>
    Content that collapses
  </NovaCollapsibleContent>
</NovaCollapsible>`}
      />

      {/* Command */}
      <ComponentDoc
        id="command"
        title="Command"
        description="Fast, composable, unstyled command menu for React."
        preview={
          <NovaCommand className="rounded-lg border shadow-md w-[300px]">
            <NovaCommandInput placeholder="Type a command or search..." />
            <NovaCommandList>
              <NovaCommandEmpty>No results found.</NovaCommandEmpty>
              <NovaCommandGroup heading="Suggestions">
                <NovaCommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </NovaCommandItem>
                <NovaCommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </NovaCommandItem>
              </NovaCommandGroup>
            </NovaCommandList>
          </NovaCommand>
        }
        code={`import {
  NovaCommand,
  NovaCommandEmpty,
  NovaCommandGroup,
  NovaCommandInput,
  NovaCommandItem,
  NovaCommandList,
} from "@/components"

<NovaCommand>
  <NovaCommandInput placeholder="Search..." />
  <NovaCommandList>
    <NovaCommandEmpty>No results.</NovaCommandEmpty>
    <NovaCommandGroup heading="Suggestions">
      <NovaCommandItem>Calendar</NovaCommandItem>
      <NovaCommandItem>Settings</NovaCommandItem>
    </NovaCommandGroup>
  </NovaCommandList>
</NovaCommand>`}
      />

      {/* Context Menu */}
      <ComponentDoc
        id="context-menu"
        title="Context Menu"
        description="Displays a menu to the user triggered by a right-click."
        preview={
          <NovaContextMenu>
            <NovaContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </NovaContextMenuTrigger>
            <NovaContextMenuContent className="w-64">
              <NovaContextMenuItem>Back</NovaContextMenuItem>
              <NovaContextMenuItem>Forward</NovaContextMenuItem>
              <NovaContextMenuItem>Reload</NovaContextMenuItem>
            </NovaContextMenuContent>
          </NovaContextMenu>
        }
        code={`import {
  NovaContextMenu,
  NovaContextMenuContent,
  NovaContextMenuItem,
  NovaContextMenuTrigger,
} from "@/components"

<NovaContextMenu>
  <NovaContextMenuTrigger>Right click me</NovaContextMenuTrigger>
  <NovaContextMenuContent>
    <NovaContextMenuItem>Profile</NovaContextMenuItem>
    <NovaContextMenuItem>Settings</NovaContextMenuItem>
  </NovaContextMenuContent>
</NovaContextMenu>`}
      />

      {/* Dialog */}
      <ComponentDoc
        id="dialog"
        title="Dialog"
        description="A window overlaid on the primary window, rendering content on top."
        preview={
          <NovaDialog
            trigger={<NovaButton variant="outline">Open Dialog</NovaButton>}
            title="Edit Profile"
            description="Make changes to your profile here."
            footer={<NovaButton type="submit">Save changes</NovaButton>}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <NovaLabel htmlFor="name" className="text-right">
                  Name
                </NovaLabel>
                <NovaInput id="name" defaultValue="Pedro Duarte" className="col-span-3" />
              </div>
            </div>
          </NovaDialog>
        }
        code={`import { NovaDialog, NovaButton, NovaInput, NovaLabel } from "@/components"

<NovaDialog
  trigger={<NovaButton variant="outline">Open Dialog</NovaButton>}
  title="Edit Profile"
  description="Make changes to your profile here."
  footer={<NovaButton type="submit">Save changes</NovaButton>}
>
  <div className="grid gap-4 py-4">
    <div className="grid grid-cols-4 items-center gap-4">
      <NovaLabel htmlFor="name" className="text-right">
        Name
      </NovaLabel>
      <NovaInput id="name" defaultValue="Pedro Duarte" className="col-span-3" />
    </div>
  </div>
</NovaDialog>`}
      />

      {/* Drawer */}
      <ComponentDoc
        id="drawer"
        title="Drawer"
        description="A panel that slides out from the edge of the screen."
        preview={
          <NovaDrawer>
            <NovaDrawerTrigger asChild>
              <NovaButton variant="outline">Open Drawer</NovaButton>
            </NovaDrawerTrigger>
            <NovaDrawerContent>
              <NovaDrawerHeader>
                <NovaDrawerTitle>Move Goal</NovaDrawerTitle>
                <NovaDrawerDescription>Set your daily activity goal.</NovaDrawerDescription>
              </NovaDrawerHeader>
              <div className="p-4">
                <p>Drawer content goes here.</p>
              </div>
              <NovaDrawerFooter>
                <NovaButton>Submit</NovaButton>
                <NovaDrawerClose asChild>
                  <NovaButton variant="outline">Cancel</NovaButton>
                </NovaDrawerClose>
              </NovaDrawerFooter>
            </NovaDrawerContent>
          </NovaDrawer>
        }
        code={`import {
  NovaDrawer,
  NovaDrawerClose,
  NovaDrawerContent,
  NovaDrawerDescription,
  NovaDrawerFooter,
  NovaDrawerHeader,
  NovaDrawerTitle,
  NovaDrawerTrigger,
} from "@/components"

<NovaDrawer>
  <NovaDrawerTrigger>Open</NovaDrawerTrigger>
  <NovaDrawerContent>
    <NovaDrawerHeader>
      <NovaDrawerTitle>Title</NovaDrawerTitle>
    </NovaDrawerHeader>
    {/* Content */}
    <NovaDrawerFooter>
      <NovaDrawerClose>Close</NovaDrawerClose>
    </NovaDrawerFooter>
  </NovaDrawerContent>
</NovaDrawer>`}
      />

      {/* Dropdown Menu */}
      <ComponentDoc
        id="dropdown-menu"
        title="Dropdown Menu"
        description="Displays a menu to the user, triggered by a button."
        preview={
          <NovaDropdownMenu>
            <NovaDropdownMenuTrigger asChild>
              <NovaButton variant="outline">
                Open Menu <ChevronDown className="ml-2 h-4 w-4" />
              </NovaButton>
            </NovaDropdownMenuTrigger>
            <NovaDropdownMenuContent className="w-56">
              <NovaDropdownMenuLabel>My Account</NovaDropdownMenuLabel>
              <NovaDropdownMenuSeparator />
              <NovaDropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </NovaDropdownMenuItem>
              <NovaDropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </NovaDropdownMenuItem>
            </NovaDropdownMenuContent>
          </NovaDropdownMenu>
        }
        code={`import {
  NovaDropdownMenu,
  NovaDropdownMenuContent,
  NovaDropdownMenuItem,
  NovaDropdownMenuTrigger,
} from "@/components"

<NovaDropdownMenu>
  <NovaDropdownMenuTrigger>Open</NovaDropdownMenuTrigger>
  <NovaDropdownMenuContent>
    <NovaDropdownMenuItem>Profile</NovaDropdownMenuItem>
    <NovaDropdownMenuItem>Settings</NovaDropdownMenuItem>
  </NovaDropdownMenuContent>
</NovaDropdownMenu>`}
      />

      {/* Form - simplified */}
      <ComponentDoc
        id="form"
        title="Form"
        description="Building forms with React Hook Form and Zod validation."
        preview={
          <form className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <NovaLabel htmlFor="email">Email</NovaLabel>
              <NovaInput id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <NovaLabel htmlFor="password">Password</NovaLabel>
              <NovaInput id="password" type="password" />
            </div>
            <NovaButton type="submit" className="w-full">
              Submit
            </NovaButton>
          </form>
        }
        code={`import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

const form = useForm({ resolver: zodResolver(schema) })

<Form {...form}>
  <FormField
    control={form.control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <NovaInput {...field} />
        </FormControl>
      </FormItem>
    )}
  />
</Form>`}
      />

      {/* Hover Card */}
      <ComponentDoc
        id="hover-card"
        title="Hover Card"
        description="For sighted users to preview content available behind a link."
        preview={
          <NovaHoverCard>
            <NovaHoverCardTrigger asChild>
              <NovaButton variant="link">@nextjs</NovaButton>
            </NovaHoverCardTrigger>
            <NovaHoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <NovaAvatar src="/nextjs-logo.png" fallback="NX" />
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">The React Framework created and maintained by @vercel.</p>
                </div>
              </div>
            </NovaHoverCardContent>
          </NovaHoverCard>
        }
        code={`import {
  NovaHoverCard,
  NovaHoverCardContent,
  NovaHoverCardTrigger,
} from "@/components"

<NovaHoverCard>
  <NovaHoverCardTrigger>Hover me</NovaHoverCardTrigger>
  <NovaHoverCardContent>
    Content shown on hover
  </NovaHoverCardContent>
</NovaHoverCard>`}
      />

      {/* Input */}
      <ComponentDoc
        id="input"
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <NovaInput type="email" placeholder="Email" />
            <NovaInput type="password" placeholder="Password" />
            <NovaInput disabled placeholder="Disabled" />
          </div>
        }
        code={`import { NovaInput } from "@/components"

<NovaInput type="email" placeholder="Email" />
<NovaInput type="password" placeholder="Password" />
<NovaInput disabled placeholder="Disabled" />`}
        props={[
          { name: "type", type: "string", default: '"text"', description: "HTML input type" },
          { name: "placeholder", type: "string", description: "Placeholder text" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the input" },
        ]}
      />

      {/* Input OTP */}
      <ComponentDoc
        id="input-otp"
        title="Input OTP"
        description="Accessible one-time password component with copy paste functionality."
        preview={
          <NovaInputOTP maxLength={6}>
            <NovaInputOTPGroup>
              <NovaInputOTPSlot index={0} />
              <NovaInputOTPSlot index={1} />
              <NovaInputOTPSlot index={2} />
              <NovaInputOTPSlot index={3} />
              <NovaInputOTPSlot index={4} />
              <NovaInputOTPSlot index={5} />
            </NovaInputOTPGroup>
          </NovaInputOTP>
        }
        code={`import {
  NovaInputOTP,
  NovaInputOTPGroup,
  NovaInputOTPSlot,
} from "@/components"

<NovaInputOTP maxLength={6}>
  <NovaInputOTPGroup>
    <NovaInputOTPSlot index={0} />
    <NovaInputOTPSlot index={1} />
    <NovaInputOTPSlot index={2} />
    <NovaInputOTPSlot index={3} />
    <NovaInputOTPSlot index={4} />
    <NovaInputOTPSlot index={5} />
  </NovaInputOTPGroup>
</NovaInputOTP>`}
      />

      {/* Label */}
      <ComponentDoc
        id="label"
        title="Label"
        description="Renders an accessible label associated with controls."
        preview={
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <NovaLabel htmlFor="email-label">Email</NovaLabel>
            <NovaInput type="email" id="email-label" placeholder="Email" />
          </div>
        }
        code={`import { NovaLabel } from "@/components"
import { NovaInput } from "@/components"

<NovaLabel htmlFor="email">Email</NovaLabel>
<NovaInput type="email" id="email" />`}
      />

      {/* Menubar */}
      <ComponentDoc
        id="menubar"
        title="Menubar"
        description="A visually persistent menu common in desktop applications."
        preview={
          <NovaMenubar>
            <NovaMenubarMenu>
              <NovaMenubarTrigger>File</NovaMenubarTrigger>
              <NovaMenubarContent>
                <NovaMenubarItem>New Tab</NovaMenubarItem>
                <NovaMenubarItem>New Window</NovaMenubarItem>
              </NovaMenubarContent>
            </NovaMenubarMenu>
            <NovaMenubarMenu>
              <NovaMenubarTrigger>Edit</NovaMenubarTrigger>
              <NovaMenubarContent>
                <NovaMenubarItem>Undo</NovaMenubarItem>
                <NovaMenubarItem>Redo</NovaMenubarItem>
              </NovaMenubarContent>
            </NovaMenubarMenu>
          </NovaMenubar>
        }
        code={`import {
  NovaMenubar,
  NovaMenubarContent,
  NovaMenubarItem,
  NovaMenubarMenu,
  NovaMenubarTrigger,
} from "@/components"

<NovaMenubar>
  <NovaMenubarMenu>
    <NovaMenubarTrigger>File</NovaMenubarTrigger>
    <NovaMenubarContent>
      <NovaMenubarItem>New Tab</NovaMenubarItem>
    </NovaMenubarContent>
  </NovaMenubarMenu>
</NovaMenubar>`}
      />

      {/* Navigation Menu */}
      <ComponentDoc
        id="navigation-menu"
        title="Navigation Menu"
        description="A collection of links for navigating websites."
        preview={
          <NovaNavigationMenu>
            <NovaNavigationMenuList>
              <NovaNavigationMenuItem>
                <NovaNavigationMenuTrigger>Getting started</NovaNavigationMenuTrigger>
                <NovaNavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NovaNavigationMenuLink
                      href="#"
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Introduction</div>
                      <p className="text-sm text-muted-foreground">Build accessible components.</p>
                    </NovaNavigationMenuLink>
                  </div>
                </NovaNavigationMenuContent>
              </NovaNavigationMenuItem>
            </NovaNavigationMenuList>
          </NovaNavigationMenu>
        }
        code={`import {
  NovaNavigationMenu,
  NovaNavigationMenuContent,
  NovaNavigationMenuItem,
  NovaNavigationMenuLink,
  NovaNavigationMenuList,
  NovaNavigationMenuTrigger,
} from "@/components"

<NovaNavigationMenu>
  <NovaNavigationMenuList>
    <NovaNavigationMenuItem>
      <NovaNavigationMenuTrigger>Item</NovaNavigationMenuTrigger>
      <NovaNavigationMenuContent>
        <NovaNavigationMenuLink>Link</NovaNavigationMenuLink>
      </NovaNavigationMenuContent>
    </NovaNavigationMenuItem>
  </NovaNavigationMenuList>
</NovaNavigationMenu>`}
      />

      {/* Pagination */}
      <ComponentDoc
        id="pagination"
        title="Pagination"
        description="Pagination with page navigation, next and previous links."
        preview={
          <NovaPagination>
            <NovaPaginationContent>
              <NovaPaginationItem>
                <NovaPaginationPrevious href="#" />
              </NovaPaginationItem>
              <NovaPaginationItem>
                <NovaPaginationLink href="#">1</NovaPaginationLink>
              </NovaPaginationItem>
              <NovaPaginationItem>
                <NovaPaginationLink href="#" isActive>
                  2
                </NovaPaginationLink>
              </NovaPaginationItem>
              <NovaPaginationItem>
                <NovaPaginationLink href="#">3</NovaPaginationLink>
              </NovaPaginationItem>
              <NovaPaginationItem>
                <NovaPaginationNext href="#" />
              </NovaPaginationItem>
            </NovaPaginationContent>
          </NovaPagination>
        }
        code={`import {
  NovaPagination,
  NovaPaginationContent,
  NovaPaginationItem,
  NovaPaginationLink,
  NovaPaginationNext,
  NovaPaginationPrevious,
} from "@/components"

<NovaPagination>
  <NovaPaginationContent>
    <NovaPaginationItem>
      <NovaPaginationPrevious href="#" />
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationLink href="#">1</NovaPaginationLink>
    </NovaPaginationItem>
    <NovaPaginationItem>
      <NovaPaginationNext href="#" />
    </NovaPaginationItem>
  </NovaPaginationContent>
</NovaPagination>`}
      />

      {/* Popover */}
      <ComponentDoc
        id="popover"
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
        preview={
          <NovaPopover>
            <NovaPopoverTrigger asChild>
              <NovaButton variant="outline">Open Popover</NovaButton>
            </NovaPopoverTrigger>
            <NovaPopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                </div>
              </div>
            </NovaPopoverContent>
          </NovaPopover>
        }
        code={`import {
  NovaPopover,
  NovaPopoverContent,
  NovaPopoverTrigger,
} from "@/components"

<NovaPopover>
  <NovaPopoverTrigger>Open</NovaPopoverTrigger>
  <NovaPopoverContent>
    Place content here
  </NovaPopoverContent>
</NovaPopover>`}
      />

      {/* Progress */}
      <ComponentDoc
        id="progress"
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
        preview={
          <div className="w-full max-w-md space-y-4">
            <NovaProgress value={33} />
            <NovaProgress value={66} />
            <NovaProgress value={100} />
          </div>
        }
        code={`import { NovaProgress } from "@/components"

<NovaProgress value={33} />`}
        props={[{ name: "value", type: "number", default: "0", description: "Progress value (0-100)" }]}
      />

      {/* Radio Group */}
      <ComponentDoc
        id="radio-group"
        title="Radio Group"
        description="A set of checkable buttons, known as radio buttons, where only one can be checked at a time."
        preview={
          <NovaRadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="default" id="r1" />
              <NovaLabel htmlFor="r1">Default</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="comfortable" id="r2" />
              <NovaLabel htmlFor="r2">Comfortable</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaRadioGroupItem value="compact" id="r3" />
              <NovaLabel htmlFor="r3">Compact</NovaLabel>
            </div>
          </NovaRadioGroup>
        }
        code={`import { NovaRadioGroup, NovaRadioGroupItem } from "@/components"
import { NovaLabel } from "@/components"

<NovaRadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <NovaRadioGroupItem value="option-one" id="option-one" />
    <NovaLabel htmlFor="option-one">Option One</NovaLabel>
  </div>
</NovaRadioGroup>`}
      />

      {/* Resizable */}
      <ComponentDoc
        id="resizable"
        title="Resizable"
        description="Accessible resizable panel groups and layouts with keyboard support."
        preview={
          <NovaResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
            <NovaResizablePanel defaultSize={50}>
              <div className="flex h-[100px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </NovaResizablePanel>
            <NovaResizableHandle />
            <NovaResizablePanel defaultSize={50}>
              <div className="flex h-[100px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </NovaResizablePanel>
          </NovaResizablePanelGroup>
        }
        code={`import {
  NovaResizableHandle,
  NovaResizablePanel,
  NovaResizablePanelGroup,
} from "@/components"

<NovaResizablePanelGroup direction="horizontal">
  <NovaResizablePanel>One</NovaResizablePanel>
  <NovaResizableHandle />
  <NovaResizablePanel>Two</NovaResizablePanel>
</NovaResizablePanelGroup>`}
      />

      {/* Scroll Area */}
      <ComponentDoc
        id="scroll-area"
        title="Scroll Area"
        description="Augments native scroll functionality for custom, cross-browser styling."
        preview={
          <NovaScrollArea className="h-[150px] w-[250px] rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1} - Scrollable content
                </div>
              ))}
            </div>
          </NovaScrollArea>
        }
        code={`import { NovaScrollArea } from "@/components"

<NovaScrollArea className="h-[200px] w-[350px]">
  {/* Scrollable content */}
</NovaScrollArea>`}
      />

      {/* Select */}
      <ComponentDoc
        id="select"
        title="Select"
        description="Displays a list of options for the user to pick from, triggered by a button."
        preview={
          <NovaSelect
            className="w-[180px]"
            placeholder="Select a fruit"
            options={[
              { value: "apple", label: "Apple" },
              { value: "banana", label: "Banana" },
              { value: "orange", label: "Orange" },
            ]}
            
          />
        }
        code={`import { NovaSelect } from "@/components"

<NovaSelect
  placeholder="Select"
  options={[
    { value: "apple", label: "Apple" },
  ]}
/>`}
      />

      {/* Separator */}
      <ComponentDoc
        id="separator"
        title="Separator"
        description="Visually or semantically separates content."
        preview={
          <div className="w-full max-w-sm">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Nova.UI</h4>
              <p className="text-sm text-muted-foreground">An open-source design system.</p>
            </div>
            <NovaSeparator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Docs</div>
              <NovaSeparator orientation="vertical" />
              <div>Components</div>
              <NovaSeparator orientation="vertical" />
              <div>GitHub</div>
            </div>
          </div>
        }
        code={`import { NovaSeparator } from "@/components"

<NovaSeparator />
<NovaSeparator orientation="vertical" />`}
        props={[
          {
            name: "orientation",
            type: '"horizontal" | "vertical"',
            default: '"horizontal"',
            description: "Orientation",
          },
        ]}
      />

      {/* Sheet */}
      <ComponentDoc
        id="sheet"
        title="Sheet"
        description="Extends the Dialog component to display content that complements the main content."
        preview={
          <NovaSheet>
            <NovaSheetTrigger asChild>
              <NovaButton variant="outline">Open Sheet</NovaButton>
            </NovaSheetTrigger>
            <NovaSheetContent>
              <NovaSheetHeader>
                <NovaSheetTitle>Edit Profile</NovaSheetTitle>
                <NovaSheetDescription>Make changes to your profile here.</NovaSheetDescription>
              </NovaSheetHeader>
              <div className="py-4">Sheet content goes here.</div>
            </NovaSheetContent>
          </NovaSheet>
        }
        code={`import {
  NovaSheet,
  NovaSheetContent,
  NovaSheetDescription,
  NovaSheetHeader,
  NovaSheetTitle,
  NovaSheetTrigger,
} from "@/components"

<NovaSheet>
  <NovaSheetTrigger>Open</NovaSheetTrigger>
  <NovaSheetContent>
    <NovaSheetHeader>
      <NovaSheetTitle>Title</NovaSheetTitle>
    </NovaSheetHeader>
  </NovaSheetContent>
</NovaSheet>`}
      />

      {/* Skeleton */}
      <ComponentDoc
        id="skeleton"
        title="Skeleton"
        description="Use to show a placeholder while content is loading."
        preview={
          <div className="flex items-center space-x-4">
            <NovaSkeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <NovaSkeleton className="h-4 w-[250px]" />
              <NovaSkeleton className="h-4 w-[200px]" />
            </div>
          </div>
        }
        code={`import { NovaSkeleton } from "@/components"

<NovaSkeleton className="h-12 w-12 rounded-full" />
<NovaSkeleton className="h-4 w-[250px]" />`}
      />

      {/* Slider */}
      <ComponentDoc
        id="slider"
        title="Slider"
        description="An input where the user selects a value from within a given range."
        preview={
          <div className="w-full max-w-sm space-y-4">
            <NovaSlider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
            <p className="text-sm text-muted-foreground">Value: {sliderValue}</p>
          </div>
        }
        code={`import { NovaSlider } from "@/components"

<NovaSlider defaultValue={[50]} max={100} step={1} />`}
        props={[
          { name: "value", type: "number[]", description: "Controlled value" },
          { name: "defaultValue", type: "number[]", description: "Default value" },
          { name: "max", type: "number", default: "100", description: "Maximum value" },
          { name: "step", type: "number", default: "1", description: "Step increment" },
        ]}
      />

      {/* Sonner (Toast) */}
      <ComponentDoc
        id="sonner"
        title="Sonner"
        description="An opinionated toast component for React."
        preview={
          <div className="flex gap-2">
            <NovaButton
              variant="outline"
              onClick={() =>
                toast("Scheduled: Catch up", {
                  description: "Friday, February 10, 2024 at 5:57 PM",
                })
              }
            >
              Show Toast with Description
            </NovaButton>
          </div>
        }
        code={`import { NovaButton } from "@/components"
import { toast } from "sonner"

<NovaButton onClick={() => toast("Scheduled: Catch up", {
  description: "Friday, February 10, 2024 at 5:57 PM",
})}>
  Show Toast
</NovaButton>`}
      />

      {/* Switch */}
      <ComponentDoc
        id="switch"
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <NovaSwitch id="airplane-mode" />
              <NovaLabel htmlFor="airplane-mode">Airplane Mode</NovaLabel>
            </div>
            <div className="flex items-center space-x-2">
              <NovaSwitch id="disabled-switch" disabled />
              <NovaLabel htmlFor="disabled-switch">Disabled</NovaLabel>
            </div>
          </div>
        }
        code={`import { NovaSwitch } from "@/components"
import { NovaLabel } from "@/components"

<div className="flex items-center space-x-2">
  <NovaSwitch id="airplane-mode" />
  <NovaLabel htmlFor="airplane-mode">Airplane Mode</NovaLabel>
</div>`}
        props={[
          { name: "checked", type: "boolean", description: "Controlled checked state" },
          { name: "onCheckedChange", type: "(checked: boolean) => void", description: "Change handler" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the switch" },
        ]}
      />

      {/* Table */}
      <ComponentDoc
        id="table"
        title="Table"
        description="A responsive table component."
        preview={
          <NovaTable>
            <NovaTableHeader>
              <NovaTableRow>
                <NovaTableHead className="w-[100px]">Invoice</NovaTableHead>
                <NovaTableHead>Status</NovaTableHead>
                <NovaTableHead className="text-right">Amount</NovaTableHead>
              </NovaTableRow>
            </NovaTableHeader>
            <NovaTableBody>
              <NovaTableRow>
                <NovaTableCell className="font-medium">INV001</NovaTableCell>
                <NovaTableCell>Paid</NovaTableCell>
                <NovaTableCell className="text-right">$250.00</NovaTableCell>
              </NovaTableRow>
              <NovaTableRow>
                <NovaTableCell className="font-medium">INV002</NovaTableCell>
                <NovaTableCell>Pending</NovaTableCell>
                <NovaTableCell className="text-right">$150.00</NovaTableCell>
              </NovaTableRow>
            </NovaTableBody>
          </NovaTable>
        }
        code={`import {
  NovaTable,
  NovaTableBody,
  NovaTableCell,
  NovaTableHead,
  NovaTableHeader,
  NovaTableRow,
} from "@/components"

<NovaTable>
  <NovaTableHeader>
    <NovaTableRow>
      <NovaTableHead>Column</NovaTableHead>
    </NovaTableRow>
  </NovaTableHeader>
  <NovaTableBody>
    <NovaTableRow>
      <NovaTableCell>Cell</NovaTableCell>
    </NovaTableRow>
  </NovaTableBody>
</NovaTable>`}
      />

      {/* Tabs */}
      <ComponentDoc
        id="tabs"
        title="Tabs"
        description="A set of layered sections of content, displayed one at a time."
        preview={
          <NovaTabs defaultValue="account" className="w-[400px]">
            <NovaTabsList>
              <NovaTabsTrigger value="account">Account</NovaTabsTrigger>
              <NovaTabsTrigger value="password">Password</NovaTabsTrigger>
            </NovaTabsList>
            <NovaTabsContent value="account" className="p-4 border rounded-b-lg">
              Make changes to your account here.
            </NovaTabsContent>
            <NovaTabsContent value="password" className="p-4 border rounded-b-lg">
              Change your password here.
            </NovaTabsContent>
          </NovaTabs>
        }
        code={`import { NovaTabs, NovaTabsContent, NovaTabsList, NovaTabsTrigger } from "@/components"

<NovaTabs defaultValue="account">
  <NovaTabsList>
    <NovaTabsTrigger value="account">Account</NovaTabsTrigger>
    <NovaTabsTrigger value="password">Password</NovaTabsTrigger>
  </NovaTabsList>
  <NovaTabsContent value="account">Account content</NovaTabsContent>
  <NovaTabsContent value="password">Password content</NovaTabsContent>
</NovaTabs>`}
      />

      {/* Textarea */}
      <ComponentDoc
        id="textarea"
        title="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
        preview={
          <div className="w-full max-w-sm space-y-4">
            <NovaTextarea placeholder="Type your message here." />
            <NovaTextarea placeholder="Disabled" disabled />
          </div>
        }
        code={`import { NovaTextarea } from "@/components"

<NovaTextarea placeholder="Type your message here." />`}
        props={[
          { name: "placeholder", type: "string", description: "Placeholder text" },
          { name: "disabled", type: "boolean", default: "false", description: "Disable the textarea" },
        ]}
      />

      {/* Toast */}
      <ComponentDoc
        id="toast"
        title="Toast"
        description="A succinct message that is displayed temporarily."
        preview={
          <div className="flex gap-2">
            <NovaButton
              variant="outline"
              onClick={() =>
                toast("Scheduled: Catch up", {
                  description: "Friday, February 10, 2024 at 5:57 PM",
                })
              }
            >
              Show Toast with Description
            </NovaButton>
          </div>
        }
        code={`import { useToast } from "@/hooks/use-toast"
import { toast } from "sonner"

// Using sonner
toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
  action: {
    label: "Undo",
    onClick: () => console.log("Undo"),
  },
})`}
      />

      {/* Toggle */}
      <ComponentDoc
        id="toggle"
        title="Toggle"
        description="A two-state button that can be either on or off."
        preview={
          <div className="flex gap-2">
            <NovaToggle aria-label="Toggle italic">
              <Bold className="h-4 w-4" />
            </NovaToggle>
            <NovaToggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </NovaToggle>
            <NovaToggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </NovaToggle>
          </div>
        }
        code={`import { NovaToggle } from "@/components"
import { Bold } from 'lucide-react'

<NovaToggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</NovaToggle>`}
        props={[
          {
            name: "variant",
            type: '"default" | "outline"',
            default: '"default"',
            description: "Visual style variant",
          },
          { name: "size", type: '"default" | "sm" | "lg"', default: '"default"', description: "Toggle size" },
          { name: "pressed", type: "boolean", description: "Controlled pressed state" },
        ]}
      />

      {/* Toggle Group */}
      <ComponentDoc
        id="toggle-group"
        title="Toggle Group"
        description="A set of two-state buttons that can be toggled on or off."
        preview={
          <NovaToggleGroup type="multiple">
            <NovaToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </NovaToggleGroupItem>
            <NovaToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </NovaToggleGroupItem>
            <NovaToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </NovaToggleGroupItem>
          </NovaToggleGroup>
        }
        code={`import { NovaToggleGroup, NovaToggleGroupItem } from "@/components"

<NovaToggleGroup type="multiple">
  <NovaToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </NovaToggleGroupItem>
  <NovaToggleGroupItem value="italic">
    <Italic className="h-4 w-4" />
  </NovaToggleGroupItem>
</NovaToggleGroup>`}
        props={[
          { name: "type", type: '"single" | "multiple"', required: true, description: "Selection mode" },
          { name: "value", type: "string | string[]", description: "Controlled value" },
        ]}
      />

      {/* Tooltip */}
      <ComponentDoc
        id="tooltip"
        title="Tooltip"
        description="A popup that displays information related to an element when the element receives focus or is hovered."
        preview={
          <NovaTooltip content={<p>Add to library</p>}>
            <NovaButton variant="outline">Hover me</NovaButton>
          </NovaTooltip>
        }
        code={`import { NovaTooltip, NovaButton } from "@/components"

<NovaTooltip content={<p>Tooltip content</p>}>
  <NovaButton variant="outline">Hover</NovaButton>
</NovaTooltip>`}
        props={[
          { name: "delayDuration", type: "number", default: "200", description: "Delay before showing (ms)" },
          {
            name: "side",
            type: '"top" | "right" | "bottom" | "left"',
            default: '"top"',
            description: "Preferred side",
          },
        ]}
      />
    </div>
  )
}
