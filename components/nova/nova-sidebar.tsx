"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaSidebarVariants = cva("transition-all duration-300", {
  variants: {
    effect: {
      default: "bg-sidebar",
      glass: "bg-sidebar/80 backdrop-blur-md border-sidebar-border/50",
      solid: "bg-sidebar border-sidebar-border",
    },
  },
  defaultVariants: {
    effect: "default",
  },
})

export interface NovaSidebarProps
  extends React.ComponentProps<typeof Sidebar>,
    VariantProps<typeof novaSidebarVariants> {}

function NovaSidebar({ className, effect, ...props }: NovaSidebarProps) {
  return (
    <Sidebar
      className={cn(novaSidebarVariants({ effect }), className)}
      {...props}
    />
  )
}

export {
  NovaSidebar,
  SidebarProvider as NovaSidebarProvider,
  SidebarContent as NovaSidebarContent,
  SidebarFooter as NovaSidebarFooter,
  SidebarGroup as NovaSidebarGroup,
  SidebarGroupAction as NovaSidebarGroupAction,
  SidebarGroupContent as NovaSidebarGroupContent,
  SidebarGroupLabel as NovaSidebarGroupLabel,
  SidebarHeader as NovaSidebarHeader,
  SidebarInput as NovaSidebarInput,
  SidebarInset as NovaSidebarInset,
  SidebarMenu as NovaSidebarMenu,
  SidebarMenuAction as NovaSidebarMenuAction,
  SidebarMenuBadge as NovaSidebarMenuBadge,
  SidebarMenuButton as NovaSidebarMenuButton,
  SidebarMenuItem as NovaSidebarMenuItem,
  SidebarMenuSkeleton as NovaSidebarMenuSkeleton,
  SidebarMenuSub as NovaSidebarMenuSub,
  SidebarMenuSubButton as NovaSidebarMenuSubButton,
  SidebarMenuSubItem as NovaSidebarMenuSubItem,
  SidebarRail as NovaSidebarRail,
  SidebarSeparator as NovaSidebarSeparator,
  SidebarTrigger as NovaSidebarTrigger,
  useSidebar,
  novaSidebarVariants,
}
