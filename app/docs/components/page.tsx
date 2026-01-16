import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Box } from "lucide-react"

const components = [
  {
    name: "Accordion",
    description: "A vertically stacked set of interactive headings",
    href: "/docs/components/accordion",
    category: "Data Display",
  },
  {
    name: "Alert",
    description: "Displays a callout for user attention",
    href: "/docs/components/alert",
    category: "Feedback",
  },
  {
    name: "Alert Dialog",
    description: "A modal dialog that interrupts the user",
    href: "/docs/components/alert-dialog",
    category: "Overlay",
  },
  {
    name: "Aspect Ratio",
    description: "Displays content within a desired ratio",
    href: "/docs/components/aspect-ratio",
    category: "Layout",
  },
  {
    name: "Avatar",
    description: "An image element with a fallback",
    href: "/docs/components/avatar",
    category: "Data Display",
  },
  {
    name: "Badge",
    description: "Displays a badge or a component that looks like a badge",
    href: "/docs/components/badge",
    category: "Data Display",
  },
  {
    name: "Breadcrumb",
    description: "Displays the path to the current resource",
    href: "/docs/components/breadcrumb",
    category: "Navigation",
  },
  {
    name: "Button",
    description: "Displays a button or a component that looks like a button",
    href: "/docs/components/button",
    category: "Inputs",
  },
  {
    name: "Calendar",
    description: "A date field component for picking dates",
    href: "/docs/components/calendar",
    category: "Inputs",
  },
  {
    name: "Card",
    description: "Displays a card with header, content, and footer",
    href: "/docs/components/card",
    category: "Layout",
  },
  {
    name: "Carousel",
    description: "A carousel with motion and swipe gestures",
    href: "/docs/components/carousel",
    category: "Data Display",
  },
  {
    name: "Checkbox",
    description: "A control that allows selecting multiple options",
    href: "/docs/components/checkbox",
    category: "Inputs",
  },
  {
    name: "Collapsible",
    description: "An interactive component which expands/collapses",
    href: "/docs/components/collapsible",
    category: "Data Display",
  },
  {
    name: "Command",
    description: "Fast, composable command menu for React",
    href: "/docs/components/command",
    category: "Overlay",
  },
  {
    name: "Context Menu",
    description: "Displays a menu located at the pointer",
    href: "/docs/components/context-menu",
    category: "Overlay",
  },
  {
    name: "Dialog",
    description: "A window overlaid on the primary window",
    href: "/docs/components/dialog",
    category: "Overlay",
  },
  {
    name: "Drawer",
    description: "A panel that slides out from the edge",
    href: "/docs/components/drawer",
    category: "Overlay",
  },
  {
    name: "Dropdown Menu",
    description: "Displays a menu to the user",
    href: "/docs/components/dropdown-menu",
    category: "Overlay",
  },
  {
    name: "Form",
    description: "Building forms with React Hook Form",
    href: "/docs/components/form",
    category: "Inputs",
  },
  {
    name: "Hover Card",
    description: "For sighted users to preview content",
    href: "/docs/components/hover-card",
    category: "Overlay",
  },
  { name: "Input", description: "Displays a form input field", href: "/docs/components/input", category: "Inputs" },
  {
    name: "Input OTP",
    description: "Accessible one-time password input",
    href: "/docs/components/input-otp",
    category: "Inputs",
  },
  {
    name: "Label",
    description: "Renders an accessible label for form controls",
    href: "/docs/components/label",
    category: "Inputs",
  },
  {
    name: "Menubar",
    description: "A visually persistent menu common in desktop apps",
    href: "/docs/components/menubar",
    category: "Navigation",
  },
  {
    name: "Navigation Menu",
    description: "A collection of links for navigating websites",
    href: "/docs/components/navigation-menu",
    category: "Navigation",
  },
  {
    name: "Pagination",
    description: "Pagination with page navigation and more",
    href: "/docs/components/pagination",
    category: "Navigation",
  },
  {
    name: "Popover",
    description: "Displays rich content in a portal",
    href: "/docs/components/popover",
    category: "Overlay",
  },
  {
    name: "Progress",
    description: "Displays an indicator showing progress",
    href: "/docs/components/progress",
    category: "Feedback",
  },
  {
    name: "Radio Group",
    description: "A set of checkable buttons where only one can be checked",
    href: "/docs/components/radio-group",
    category: "Inputs",
  },
  {
    name: "Resizable",
    description: "Accessible resizable panel groups and layouts",
    href: "/docs/components/resizable",
    category: "Layout",
  },
  {
    name: "Scroll Area",
    description: "Augments native scroll functionality",
    href: "/docs/components/scroll-area",
    category: "Layout",
  },
  {
    name: "Select",
    description: "Displays a list of options for the user to pick from",
    href: "/docs/components/select",
    category: "Inputs",
  },
  {
    name: "Separator",
    description: "Visually or semantically separates content",
    href: "/docs/components/separator",
    category: "Layout",
  },
  {
    name: "Sheet",
    description: "Extends the Dialog component to display content",
    href: "/docs/components/sheet",
    category: "Overlay",
  },
  {
    name: "Skeleton",
    description: "Used to show a placeholder while content is loading",
    href: "/docs/components/skeleton",
    category: "Feedback",
  },
  {
    name: "Slider",
    description: "An input where the user selects a value from a range",
    href: "/docs/components/slider",
    category: "Inputs",
  },
  {
    name: "Switch",
    description: "A control that allows the user to toggle between states",
    href: "/docs/components/switch",
    category: "Inputs",
  },
  {
    name: "Table",
    description: "A responsive table component",
    href: "/docs/components/table",
    category: "Data Display",
  },
  {
    name: "Tabs",
    description: "A set of layered sections of content",
    href: "/docs/components/tabs",
    category: "Navigation",
  },
  { name: "Textarea", description: "Displays a form textarea", href: "/docs/components/textarea", category: "Inputs" },
  {
    name: "Toggle",
    description: "A two-state button that can be on or off",
    href: "/docs/components/toggle",
    category: "Inputs",
  },
  {
    name: "Toggle Group",
    description: "A set of two-state buttons",
    href: "/docs/components/toggle-group",
    category: "Inputs",
  },
  {
    name: "Tooltip",
    description: "A popup that displays information on hover",
    href: "/docs/components/tooltip",
    category: "Overlay",
  },
]

const categories = ["All", "Inputs", "Data Display", "Feedback", "Navigation", "Layout", "Overlay"]

export default function ComponentsPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/docs" className="hover:text-foreground transition-colors">
          Docs
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">Components</span>
      </nav>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Box className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A comprehensive library of beautifully designed, accessible, and customizable components.
        </p>
      </div>

      {/* Category Badges */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-accent"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Components Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link key={component.name} href={component.href}>
            <Card className="h-full border-border/50 hover:border-primary/50 hover:bg-accent/50 transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{component.name}</CardTitle>
                  <Badge variant="secondary" className="text-[10px]">
                    {component.category}
                  </Badge>
                </div>
                <CardDescription className="text-sm line-clamp-2">{component.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
