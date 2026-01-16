"use client"

import * as React from "react"
import { Popover, PopoverTrigger, PopoverContent, PopoverAnchor } from "@/components/ui/popover"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaPopoverContentVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 shadow-xl",
        glow: "shadow-[0_0_20px_rgba(var(--primary),0.25)] border-primary/30",
        minimal: "shadow-sm border-none bg-popover/95",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NovaPopoverContentProps
  extends React.ComponentProps<typeof PopoverContent>,
    VariantProps<typeof novaPopoverContentVariants> {}

function NovaPopoverContent({ className, variant, align = "center", sideOffset = 4, ...props }: NovaPopoverContentProps) {
  return (
    <PopoverContent
      align={align}
      sideOffset={sideOffset}
      className={cn(novaPopoverContentVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Popover as NovaPopover, PopoverTrigger as NovaPopoverTrigger, NovaPopoverContent, PopoverAnchor as NovaPopoverAnchor }
