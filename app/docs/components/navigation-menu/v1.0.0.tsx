"use client"

import {
  NovaNavigationMenu,
  NovaNavigationMenuList,
  NovaNavigationMenuItem,
  NovaNavigationMenuContent,
  NovaNavigationMenuTrigger,
  NovaNavigationMenuLink,
  NovaNavigationMenuIndicator,
  NovaNavigationMenuViewport,
} from "@/components/nova/nova-navigation-menu"
import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import { cn } from "@/lib/utils"
import * as React from "react"
import Link from "next/link"
import { Box, GraduationCap, Layout, Settings, FileText } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NovaNavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NovaNavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default function NavigationMenuDocsV1() {
  return (
    <ComponentDocTemplate
      badgeText="Navigation"
      title="Navigation Menu"
      description="A collection of links for navigating websites."
      previewClassName="overflow-visible min-h-[500px] items-start pt-20"
      whenToUse={[
        "To provide a primary navigation structure for your application.",
        "When you need a responsive and accessible menu system.",
        "To organize complex site hierarchies."
      ]}
      hints={[
        { type: "info", content: "Supports `glass`, `gradient`, and `neon` variants on the viewport via `NovaNavigationMenu` prop `viewportVariant`." },
        { type: "info", content: "Triggers can accept `NovaButton` variants like `animation` and `rounded`." }
      ]}
      preview={
        <NovaNavigationMenu defaultValue="getting-started">
          <NovaNavigationMenuList>
            <NovaNavigationMenuItem value="getting-started">
              <NovaNavigationMenuTrigger>Getting started</NovaNavigationMenuTrigger>
              <NovaNavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NovaNavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <Box className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Nova UI
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          A comprehensive UI library for building modern web applications with speed and flexibility.
                        </p>
                      </a>
                    </NovaNavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Explore the core concepts and design principles of Nova UI.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    Step-by-step guide to adding Nova UI to your project.
                  </ListItem>
                  <ListItem href="/docs/theming" title="Theming">
                    Customize colors, typography, and styles to match your brand.
                  </ListItem>
                </ul>
              </NovaNavigationMenuContent>
            </NovaNavigationMenuItem>
            <NovaNavigationMenuItem>
              <NovaNavigationMenuTrigger>Components</NovaNavigationMenuTrigger>
              <NovaNavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NovaNavigationMenuContent>
            </NovaNavigationMenuItem>
            <NovaNavigationMenuItem>
              <NovaNavigationMenuLink asChild className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <Link href="/docs">
                  Documentation
                </Link>
              </NovaNavigationMenuLink>
            </NovaNavigationMenuItem>
          </NovaNavigationMenuList>
        </NovaNavigationMenu>
      }
      installCommand="npx nova-ui@latest add navigation-menu"
      importCode={`import {
  NovaNavigationMenu,
  NovaNavigationMenuList,
  NovaNavigationMenuItem,
  NovaNavigationMenuContent,
  NovaNavigationMenuTrigger,
  NovaNavigationMenuLink,
  NovaNavigationMenuIndicator,
  NovaNavigationMenuViewport,
} from "@/components/nova/nova-navigation-menu"`}
      usageCode={`<NovaNavigationMenu>
  <NovaNavigationMenuList>
    <NovaNavigationMenuItem>
      <NovaNavigationMenuTrigger>Item One</NovaNavigationMenuTrigger>
      <NovaNavigationMenuContent>
        <NovaNavigationMenuLink>Link</NovaNavigationMenuLink>
      </NovaNavigationMenuContent>
    </NovaNavigationMenuItem>
  </NovaNavigationMenuList>
</NovaNavigationMenu>`}
      props={[
        {
          name: "viewportVariant",
          type: '"default" | "glass" | "gradient" | "neon"',
          defaultValue: '"default"',
          description: "Visual style of the viewport (the container for the content).",
        },
      ]}
      examples={[
        {
          title: "Glass Viewport",
          description: "Navigation menu with a translucent viewport.",
          code: `<NovaNavigationMenu viewportVariant="glass">
  {/* ... menu items ... */}
</NovaNavigationMenu>`,
          preview: (
            <div className="h-[200px] w-full bg-gradient-to-r from-purple-500 to-pink-500 p-8 flex justify-center items-start rounded-lg">
              <NovaNavigationMenu viewportVariant="glass">
                <NovaNavigationMenuList>
                  <NovaNavigationMenuItem>
                    <NovaNavigationMenuTrigger className="bg-white/20 text-white hover:bg-white/30 hover:text-white">
                      Glass Menu
                    </NovaNavigationMenuTrigger>
                    <NovaNavigationMenuContent>
                       <ul className="grid gap-3 p-4 md:w-[400px]">
                         <ListItem href="#" title="Link 1">Content for link 1</ListItem>
                         <ListItem href="#" title="Link 2">Content for link 2</ListItem>
                       </ul>
                    </NovaNavigationMenuContent>
                  </NovaNavigationMenuItem>
                </NovaNavigationMenuList>
              </NovaNavigationMenu>
            </div>
          )
        }
      ]}
    />
  )
}
