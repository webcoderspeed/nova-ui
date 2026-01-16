"use client"

import type * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaTooltipVariants = cva("", {
  variants: {
    variant: {
      default: "",
      light: "bg-popover text-popover-foreground border",
      dark: "bg-foreground text-background",
    },
    size: {
      sm: "text-xs px-2 py-1",
      md: "text-sm px-3 py-1.5",
      lg: "text-base px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface NovaTooltipProps extends VariantProps<typeof novaTooltipVariants> {
  children: React.ReactNode
  content: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  delayDuration?: number
  className?: string
}

function NovaTooltip({
  children,
  content,
  side = "top",
  align = "center",
  delayDuration = 200,
  variant,
  size,
  className,
}: NovaTooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} align={align} className={cn(novaTooltipVariants({ variant, size }), className)}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export { NovaTooltip, novaTooltipVariants }
