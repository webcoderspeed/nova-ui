"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const novaDropdownMenuContentVariants = cva(
  "z-50 min-w-[8rem] overflow-hidden rounded-xl border p-1 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground",
        glass: "bg-white/70 dark:bg-black/70 border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md",
        gradient: "bg-gradient-to-br from-background via-background/95 to-secondary/20 border-primary/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const NovaDropdownMenu = DropdownMenu
const NovaDropdownMenuTrigger = DropdownMenuTrigger
const NovaDropdownMenuGroup = DropdownMenuGroup
const NovaDropdownMenuPortal = DropdownMenuPortal
const NovaDropdownMenuSub = DropdownMenuSub
const NovaDropdownMenuRadioGroup = DropdownMenuRadioGroup

interface NovaDropdownMenuContentProps
  extends React.ComponentProps<typeof DropdownMenuContent>,
    VariantProps<typeof novaDropdownMenuContentVariants> {}

function NovaDropdownMenuContent({
  className,
  variant,
  ...props
}: NovaDropdownMenuContentProps) {
  return (
    <DropdownMenuContent
      className={cn(novaDropdownMenuContentVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaDropdownMenuSubContent({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent> &
  VariantProps<typeof novaDropdownMenuContentVariants>) {
  return (
    <DropdownMenuSubContent
      className={cn(novaDropdownMenuContentVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaDropdownMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 focus:bg-primary/10 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function NovaDropdownMenuCheckboxItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuCheckboxItem>) {
  return (
    <DropdownMenuCheckboxItem
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 focus:bg-primary/10 focus:text-primary",
        className
      )}
      {...props}
    />
  )
}

function NovaDropdownMenuRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioItem>) {
  return (
    <DropdownMenuRadioItem
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 focus:bg-primary/10 focus:text-primary",
        className
      )}
      {...props}
    />
  )
}

function NovaDropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel>) {
  return (
    <DropdownMenuLabel
      className={cn("px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground", className)}
      {...props}
    />
  )
}

function NovaDropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return (
    <DropdownMenuSeparator
      className={cn("-mx-1 my-1 h-px bg-muted", className)}
      {...props}
    />
  )
}

function NovaDropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return (
    <DropdownMenuShortcut
      className={cn("text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}

function NovaDropdownMenuSubTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger>) {
  return (
    <DropdownMenuSubTrigger
      className={cn(
        "cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 focus:bg-primary/10 focus:text-primary data-[state=open]:bg-primary/10 data-[state=open]:text-primary",
        className
      )}
      {...props}
    />
  )
}

export {
  NovaDropdownMenu,
  NovaDropdownMenuTrigger,
  NovaDropdownMenuContent,
  NovaDropdownMenuItem,
  NovaDropdownMenuCheckboxItem,
  NovaDropdownMenuRadioItem,
  NovaDropdownMenuLabel,
  NovaDropdownMenuSeparator,
  NovaDropdownMenuShortcut,
  NovaDropdownMenuGroup,
  NovaDropdownMenuPortal,
  NovaDropdownMenuSub,
  NovaDropdownMenuSubContent,
  NovaDropdownMenuSubTrigger,
  NovaDropdownMenuRadioGroup,
  novaDropdownMenuContentVariants,
}