"use client"

import * as React from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaHoverCardContentVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 shadow-lg",
        glow: "shadow-[0_0_15px_rgba(var(--primary),0.3)] border-primary/20",
        solid: "bg-primary text-primary-foreground border-none",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NovaHoverCardContentProps
  extends React.ComponentProps<typeof HoverCardContent>,
    VariantProps<typeof novaHoverCardContentVariants> {}

function NovaHoverCardContent({ className, variant, align = "center", sideOffset = 4, ...props }: NovaHoverCardContentProps) {
  return (
    <HoverCardContent
      align={align}
      sideOffset={sideOffset}
      className={cn(novaHoverCardContentVariants({ variant }), className)}
      {...props}
    />
  )
}

export { HoverCard as NovaHoverCard, HoverCardTrigger as NovaHoverCardTrigger, NovaHoverCardContent }
