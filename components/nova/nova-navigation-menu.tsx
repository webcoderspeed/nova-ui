"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { novaButtonVariants } from "@/components/nova/nova-button"

const novaNavigationMenuViewportVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glass:
          "bg-white/70 dark:bg-black/70 border-white/20 dark:border-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        gradient:
          "bg-gradient-to-br from-background via-background/95 to-secondary/20 border-primary/10",
        neon: "bg-black/90 border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NovaNavigationMenuViewport({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof NavigationMenuViewport> &
  VariantProps<typeof novaNavigationMenuViewportVariants>) {
  return (
    <NavigationMenuViewport
      className={cn(novaNavigationMenuViewportVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaNavigationMenuTrigger({
  className,
  animation,
  rounded,
  ...props
}: React.ComponentProps<typeof NavigationMenuTrigger> &
  VariantProps<typeof novaButtonVariants>) {
  return (
    <NavigationMenuTrigger
      className={cn(
        novaButtonVariants({ animation, rounded }),
        "data-[state=open]:bg-accent/50", // Preserve the open state style from UI component if needed, though novaButton might override
        className
      )}
      {...props}
    />
  )
}

function NovaNavigationMenu({
  children,
  viewport = true,
  viewportVariant,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenu> & {
  viewportVariant?: VariantProps<typeof novaNavigationMenuViewportVariants>["variant"]
}) {
  return (
    <NavigationMenu
      viewport={false}
      className={className}
      {...props}
    >
      {children}
      {viewport && <NovaNavigationMenuViewport variant={viewportVariant} />}
    </NavigationMenu>
  )
}

export {
  NovaNavigationMenu,
  NavigationMenuList as NovaNavigationMenuList,
  NavigationMenuItem as NovaNavigationMenuItem,
  NavigationMenuContent as NovaNavigationMenuContent,
  NovaNavigationMenuTrigger,
  NavigationMenuLink as NovaNavigationMenuLink,
  NavigationMenuIndicator as NovaNavigationMenuIndicator,
  NovaNavigationMenuViewport,
}
