"use client"

import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaScrollAreaVariants = cva(
  "relative",
  {
    variants: {
      variant: {
        default: "",
        glass: "[&_[data-slot=scroll-area-scrollbar]]:bg-white/10 [&_[data-slot=scroll-area-scrollbar]]:dark:bg-white/5 [&_[data-slot=scroll-area-thumb]]:bg-white/20 [&_[data-slot=scroll-area-thumb]]:dark:bg-white/10",
        glow: "[&_[data-slot=scroll-area-thumb]]:bg-primary/80 [&_[data-slot=scroll-area-thumb]]:shadow-[0_0_8px_rgba(var(--primary),0.5)]",
        gradient: "[&_[data-slot=scroll-area-thumb]]:bg-gradient-to-b [&_[data-slot=scroll-area-thumb]]:from-primary [&_[data-slot=scroll-area-thumb]]:to-secondary",
        neon: "[&_[data-slot=scroll-area-scrollbar]]:bg-primary/5 [&_[data-slot=scroll-area-thumb]]:bg-primary [&_[data-slot=scroll-area-thumb]]:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)]",
      },
      scrollbarSize: {
        default: "",
        thin: "[&_[data-slot=scroll-area-scrollbar]]:w-1.5 [&_[data-slot=scroll-area-scrollbar][data-orientation=horizontal]]:h-1.5",
        thick: "[&_[data-slot=scroll-area-scrollbar]]:w-3 [&_[data-slot=scroll-area-scrollbar][data-orientation=horizontal]]:h-3",
        hidden: "[&_[data-slot=scroll-area-scrollbar]]:hidden",
      }
    },
    defaultVariants: {
      variant: "default",
      scrollbarSize: "default",
    },
  }
)

export interface NovaScrollAreaProps
  extends React.ComponentProps<typeof ScrollArea>,
    VariantProps<typeof novaScrollAreaVariants> {}

function NovaScrollArea({ className, variant, scrollbarSize, ...props }: NovaScrollAreaProps) {
  return (
    <ScrollArea
      className={cn(novaScrollAreaVariants({ variant, scrollbarSize }), className)}
      {...props}
    />
  )
}

export { NovaScrollArea }
