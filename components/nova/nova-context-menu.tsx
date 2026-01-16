"use client"

import * as React from "react"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaContextMenuContentVariants = cva("z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md", {
  variants: {
    variant: {
      default: "bg-popover text-popover-foreground",
      glass: "bg-popover/80 backdrop-blur-md border-primary/20",
      bordered: "border border-border bg-popover",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaContextMenuContentProps
  extends React.ComponentProps<typeof ContextMenuContent>,
    VariantProps<typeof novaContextMenuContentVariants> {
  glass?: boolean
}

function NovaContextMenuContent({
  className,
  variant,
  glass,
  ...props
}: NovaContextMenuContentProps) {
  const finalVariant = glass ? "glass" : variant
  return (
    <ContextMenuContent
      className={cn(novaContextMenuContentVariants({ variant: finalVariant }), className)}
      {...props}
    />
  )
}

export {
  ContextMenu as NovaContextMenu,
  ContextMenuTrigger as NovaContextMenuTrigger,
  NovaContextMenuContent,
  ContextMenuItem as NovaContextMenuItem,
  ContextMenuCheckboxItem as NovaContextMenuCheckboxItem,
  ContextMenuRadioItem as NovaContextMenuRadioItem,
  ContextMenuLabel as NovaContextMenuLabel,
  ContextMenuSeparator as NovaContextMenuSeparator,
  ContextMenuShortcut as NovaContextMenuShortcut,
  ContextMenuGroup as NovaContextMenuGroup,
  ContextMenuPortal as NovaContextMenuPortal,
  ContextMenuSub as NovaContextMenuSub,
  ContextMenuSubContent as NovaContextMenuSubContent,
  ContextMenuSubTrigger as NovaContextMenuSubTrigger,
  ContextMenuRadioGroup as NovaContextMenuRadioGroup,
  novaContextMenuContentVariants,
}
