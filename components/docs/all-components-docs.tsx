"use client"

import { ComponentDoc } from "./component-doc"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Calendar } from "@/components/ui/calendar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>Yes. It&apos;s animated by default with smooth transitions.</AccordionContent>
            </AccordionItem>
          </Accordion>
        }
        code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
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
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components to your app using the cli.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
            </Alert>
          </div>
        }
        code={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from 'lucide-react'

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
        props={[
          {
            name: "variant",
            type: '"default" | "destructive"',
            default: '"default"',
            description: "Visual style variant",
          },
        ]}
      />

      {/* Alert Dialog */}
      <ComponentDoc
        id="alert-dialog"
        title="Alert Dialog"
        description="A modal dialog that interrupts the user with important content and expects a response."
        preview={
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
        code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
      />

      {/* Aspect Ratio */}
      <ComponentDoc
        id="aspect-ratio"
        title="Aspect Ratio"
        description="Displays content within a desired ratio, useful for images and videos."
        preview={
          <div className="w-[300px]">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
              <img src="/majestic-mountain-vista.png" alt="Landscape" className="h-full w-full object-cover" />
            </AspectRatio>
          </div>
        }
        code={`import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <img src="..." alt="Image" className="object-cover" />
</AspectRatio>`}
        props={[{ name: "ratio", type: "number", default: "1", description: "The desired aspect ratio" }]}
      />

      {/* Avatar */}
      <ComponentDoc
        id="avatar"
        title="Avatar"
        description="An image element with a fallback for representing the user."
        preview={
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="/portrait-woman.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/thoughtful-man.png" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        }
        code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
      />

      {/* Badge */}
      <ComponentDoc
        id="badge"
        title="Badge"
        description="Displays a badge or a component that looks like a badge."
        preview={
          <div className="flex gap-2 flex-wrap">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        }
        code={`import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>`}
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
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        }
        code={`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      {/* Button */}
      <ComponentDoc
        id="button"
        title="Button"
        description="Displays a button or a component that looks like a button."
        preview={
          <div className="flex gap-2 flex-wrap">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        }
        code={`import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
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
          { name: "asChild", type: "boolean", default: "false", description: "Merge props onto child element" },
        ]}
        variants={[
          {
            name: "Sizes",
            preview: (
              <div className="flex gap-2 items-center">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            ),
          },
          {
            name: "With Icons",
            preview: (
              <div className="flex gap-2">
                <Button>
                  <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>
                <Button variant="outline">
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
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
        preview={<Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />}
        code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

const [date, setDate] = useState<Date | undefined>(new Date())

<Calendar
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
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content - Display any content here.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>
        }
        code={`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
      />

      {/* Checkbox */}
      <ComponentDoc
        id="checkbox"
        title="Checkbox"
        description="A control that allows the user to toggle between checked and not checked."
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled" disabled />
              <Label htmlFor="disabled">Disabled</Label>
            </div>
          </div>
        }
        code={`import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
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
          <Collapsible open={collapsibleOpen} onOpenChange={setCollapsibleOpen} className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronsUpDown className="h-4 w-4" />
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
            </CollapsibleContent>
          </Collapsible>
        }
        code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    Content that collapses
  </CollapsibleContent>
</Collapsible>`}
      />

      {/* Command */}
      <ComponentDoc
        id="command"
        title="Command"
        description="Fast, composable, unstyled command menu for React."
        preview={
          <Command className="rounded-lg border shadow-md w-[300px]">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        }
        code={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />

      {/* Context Menu */}
      <ComponentDoc
        id="context-menu"
        title="Context Menu"
        description="Displays a menu to the user triggered by a right-click."
        preview={
          <ContextMenu>
            <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
              Right click here
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
              <ContextMenuItem>Back</ContextMenuItem>
              <ContextMenuItem>Forward</ContextMenuItem>
              <ContextMenuItem>Reload</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        }
        code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger>Right click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Settings</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      />

      {/* Dialog */}
      <ComponentDoc
        id="dialog"
        title="Dialog"
        description="A window overlaid on the primary window, rendering content on top."
        preview={
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>Make changes to your profile here.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
        code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
    {/* Content */}
  </DialogContent>
</Dialog>`}
      />

      {/* Drawer */}
      <ComponentDoc
        id="drawer"
        title="Drawer"
        description="A panel that slides out from the edge of the screen."
        preview={
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p>Drawer content goes here.</p>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        }
        code={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
    {/* Content */}
    <DrawerFooter>
      <DrawerClose>Close</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
      />

      {/* Dropdown Menu */}
      <ComponentDoc
        id="dropdown-menu"
        title="Dropdown Menu"
        description="Displays a menu to the user, triggered by a button."
        preview={
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Open Menu <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        }
        code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      />

      {/* Form - simplified */}
      <ComponentDoc
        id="form"
        title="Form"
        description="Building forms with React Hook Form and Zod validation."
        preview={
          <form className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        }
        code={`import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

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
          <Input {...field} />
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
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar>
                  <AvatarImage src="/nextjs-logo.png" />
                  <AvatarFallback>NX</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@nextjs</h4>
                  <p className="text-sm">The React Framework created and maintained by @vercel.</p>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        }
        code={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

<HoverCard>
  <HoverCardTrigger>Hover me</HoverCardTrigger>
  <HoverCardContent>
    Content shown on hover
  </HoverCardContent>
</HoverCard>`}
      />

      {/* Input */}
      <ComponentDoc
        id="input"
        title="Input"
        description="Displays a form input field or a component that looks like an input field."
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Input disabled placeholder="Disabled" />
          </div>
        }
        code={`import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />`}
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
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        }
        code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
      />

      {/* Label */}
      <ComponentDoc
        id="label"
        title="Label"
        description="Renders an accessible label associated with controls."
        preview={
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-label">Email</Label>
            <Input type="email" id="email-label" placeholder="Email" />
          </div>
        }
        code={`import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

<Label htmlFor="email">Email</Label>
<Input type="email" id="email" />`}
      />

      {/* Menubar */}
      <ComponentDoc
        id="menubar"
        title="Menubar"
        description="A visually persistent menu common in desktop applications."
        preview={
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab</MenubarItem>
                <MenubarItem>New Window</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo</MenubarItem>
                <MenubarItem>Redo</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        }
        code={`import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`}
      />

      {/* Navigation Menu */}
      <ComponentDoc
        id="navigation-menu"
        title="Navigation Menu"
        description="A collection of links for navigating websites."
        preview={
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink
                      href="#"
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent"
                    >
                      <div className="text-sm font-medium">Introduction</div>
                      <p className="text-sm text-muted-foreground">Build accessible components.</p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        }
        code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      />

      {/* Pagination */}
      <ComponentDoc
        id="pagination"
        title="Pagination"
        description="Pagination with page navigation, next and previous links."
        preview={
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        }
        code={`import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      />

      {/* Popover */}
      <ComponentDoc
        id="popover"
        title="Popover"
        description="Displays rich content in a portal, triggered by a button."
        preview={
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        }
        code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>
    Place content here
  </PopoverContent>
</Popover>`}
      />

      {/* Progress */}
      <ComponentDoc
        id="progress"
        title="Progress"
        description="Displays an indicator showing the completion progress of a task."
        preview={
          <div className="w-full max-w-md space-y-4">
            <Progress value={33} />
            <Progress value={66} />
            <Progress value={100} />
          </div>
        }
        code={`import { Progress } from "@/components/ui/progress"

<Progress value={33} />`}
        props={[{ name: "value", type: "number", default: "0", description: "Progress value (0-100)" }]}
      />

      {/* Radio Group */}
      <ComponentDoc
        id="radio-group"
        title="Radio Group"
        description="A set of checkable buttons, known as radio buttons, where only one can be checked at a time."
        preview={
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        }
        code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
</RadioGroup>`}
      />

      {/* Resizable */}
      <ComponentDoc
        id="resizable"
        title="Resizable"
        description="Accessible resizable panel groups and layouts with keyboard support."
        preview={
          <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[100px] items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-[100px] items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        }
        code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>`}
      />

      {/* Scroll Area */}
      <ComponentDoc
        id="scroll-area"
        title="Scroll Area"
        description="Augments native scroll functionality for custom, cross-browser styling."
        preview={
          <ScrollArea className="h-[150px] w-[250px] rounded-md border p-4">
            <div className="space-y-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="text-sm">
                  Item {i + 1} - Scrollable content
                </div>
              ))}
            </div>
          </ScrollArea>
        }
        code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-[200px] w-[350px]">
  {/* Scrollable content */}
</ScrollArea>`}
      />

      {/* Select */}
      <ComponentDoc
        id="select"
        title="Select"
        description="Displays a list of options for the user to pick from, triggered by a button."
        preview={
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectContent>
          </Select>
        }
        code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`}
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
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Components</div>
              <Separator orientation="vertical" />
              <div>GitHub</div>
            </div>
          </div>
        }
        code={`import { Separator } from "@/components/ui/separator"

<Separator />
<Separator orientation="vertical" />`}
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>Make changes to your profile here.</SheetDescription>
              </SheetHeader>
              <div className="py-4">Sheet content goes here.</div>
            </SheetContent>
          </Sheet>
        }
        code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
      />

      {/* Skeleton */}
      <ComponentDoc
        id="skeleton"
        title="Skeleton"
        description="Use to show a placeholder while content is loading."
        preview={
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        }
        code={`import { Skeleton } from "@/components/ui/skeleton"

<Skeleton className="h-12 w-12 rounded-full" />
<Skeleton className="h-4 w-[250px]" />`}
      />

      {/* Slider */}
      <ComponentDoc
        id="slider"
        title="Slider"
        description="An input where the user selects a value from within a given range."
        preview={
          <div className="w-full max-w-sm space-y-4">
            <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} />
            <p className="text-sm text-muted-foreground">Value: {sliderValue}</p>
          </div>
        }
        code={`import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[50]} max={100} step={1} />`}
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
            <Button
              variant="outline"
              onClick={() =>
                toast("Scheduled: Catch up", {
                  description: "Friday, February 10, 2024 at 5:57 PM",
                })
              }
            >
              Show Toast with Description
            </Button>
          </div>
        }
        code={`import { Button } from "@/components/ui/button"
import { toast } from "sonner"

<Button onClick={() => toast("Scheduled: Catch up", {
  description: "Friday, February 10, 2024 at 5:57 PM",
})}>
  Show Toast
</Button>`}
      />

      {/* Switch */}
      <ComponentDoc
        id="switch"
        title="Switch"
        description="A control that allows the user to toggle between checked and not checked."
        preview={
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-switch" disabled />
              <Label htmlFor="disabled-switch">Disabled</Label>
            </div>
          </div>
        }
        code={`import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV002</TableCell>
                <TableCell>Pending</TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        }
        code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
      />

      {/* Tabs */}
      <ComponentDoc
        id="tabs"
        title="Tabs"
        description="A set of layered sections of content, displayed one at a time."
        preview={
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border rounded-b-lg">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password" className="p-4 border rounded-b-lg">
              Change your password here.
            </TabsContent>
          </Tabs>
        }
        code={`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account content</TabsContent>
  <TabsContent value="password">Password content</TabsContent>
</Tabs>`}
      />

      {/* Textarea */}
      <ComponentDoc
        id="textarea"
        title="Textarea"
        description="Displays a form textarea or a component that looks like a textarea."
        preview={
          <div className="w-full max-w-sm space-y-4">
            <Textarea placeholder="Type your message here." />
            <Textarea placeholder="Disabled" disabled />
          </div>
        }
        code={`import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Type your message here." />`}
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
            <Button
              variant="outline"
              onClick={() =>
                toast("Scheduled: Catch up", {
                  description: "Friday, February 10, 2024 at 5:57 PM",
                })
              }
            >
              Show Toast with Description
            </Button>
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
            <Toggle aria-label="Toggle italic">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        }
        code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from 'lucide-react'

<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
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
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        }
        code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
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
        code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
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
