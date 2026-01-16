"use client"

import type React from "react"

import { ComponentDocTemplate } from "@/components/docs/component-doc-template"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

const ListItem = forwardRef<React.ComponentRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export default function NavigationMenuPage() {
  return (
    <ComponentDocTemplate
      title="Navigation Menu"
      description="A collection of links for navigating websites. Supports dropdown menus with rich content."
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/docs/components" title="Components">
                    Browse all available components.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      installCommand="npx nova-ui@latest add navigation-menu"
      importCode={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"`}
      usageCode={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function MyComponent() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid p-4 w-[400px]">
              <li>Link 1</li>
              <li>Link 2</li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`}
      props={[
        { name: "value", type: "string", description: "Controlled value of active item" },
        { name: "onValueChange", type: "function", description: "Callback when value changes" },
        { name: "delayDuration", type: "number", default: "200", description: "Delay before showing content" },
        {
          name: "skipDelayDuration",
          type: "number",
          default: "300",
          description: "Skip delay when moving between items",
        },
      ]}
      examples={[
        {
          title: "Simple Links",
          description: "Navigation without dropdowns.",
          code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
          preview: (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Docs</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ),
        },
      ]}
      relatedComponents={[
        { name: "Menubar", href: "/docs/components/menubar" },
        { name: "Breadcrumb", href: "/docs/components/breadcrumb" },
      ]}
      sourceLink="https://github.com/shadcn-ui/ui/blob/main/apps/www/registry/default/ui/navigation-menu.tsx"
    />
  )
}
