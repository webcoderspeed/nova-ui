"use client"

import * as React from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarGroup,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@/components/ui/menubar"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaMenubarVariants = cva("flex h-10 items-center space-x-1 rounded-md border p-1", {
  variants: {
    variant: {
      default: "bg-background shadow-sm",
      glass: "bg-background/80 backdrop-blur-md border-primary/20",
      floating: "shadow-md border-transparent bg-background/90 backdrop-blur-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaMenubarProps
  extends React.ComponentProps<typeof Menubar>,
    VariantProps<typeof novaMenubarVariants> {}

const NovaMenubar = React.forwardRef<React.ElementRef<typeof Menubar>, NovaMenubarProps>(
  ({ className, variant, ...props }, ref) => (
    <Menubar
      ref={ref}
      className={cn(novaMenubarVariants({ variant }), className)}
      {...props}
    />
  )
)
NovaMenubar.displayName = "NovaMenubar"

export {
  NovaMenubar,
  MenubarMenu as NovaMenubarMenu,
  MenubarTrigger as NovaMenubarTrigger,
  MenubarContent as NovaMenubarContent,
  MenubarItem as NovaMenubarItem,
  MenubarSeparator as NovaMenubarSeparator,
  MenubarLabel as NovaMenubarLabel,
  MenubarCheckboxItem as NovaMenubarCheckboxItem,
  MenubarRadioGroup as NovaMenubarRadioGroup,
  MenubarRadioItem as NovaMenubarRadioItem,
  MenubarPortal as NovaMenubarPortal,
  MenubarGroup as NovaMenubarGroup,
  MenubarSub as NovaMenubarSub,
  MenubarSubContent as NovaMenubarSubContent,
  MenubarSubTrigger as NovaMenubarSubTrigger,
  novaMenubarVariants,
}
