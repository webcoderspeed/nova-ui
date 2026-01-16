"use client"

import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaSeparatorVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        default: "bg-border",
        glass: "bg-white/20 dark:bg-white/10 backdrop-blur-sm",
        gradient: "bg-gradient-to-r from-transparent via-primary to-transparent",
        glow: "bg-primary/50 shadow-[0_0_10px_rgba(var(--primary),0.5)]",
        dashed: "bg-transparent border-dashed !h-0 !w-0",
        dotted: "bg-transparent border-dotted !h-0 !w-0",
      },
      size: {
        default: "",
        thick: "", 
        heavy: "",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NovaSeparatorProps
  extends React.ComponentProps<typeof Separator>,
    VariantProps<typeof novaSeparatorVariants> {}

function NovaSeparator({ className, variant, size, orientation = "horizontal", ...props }: NovaSeparatorProps) {
  // Logic to handle size and border styles for dashed/dotted variants
  const isBorderVariant = variant === 'dashed' || variant === 'dotted';
  
  let sizeClasses = "";
  
  if (isBorderVariant) {
    if (orientation === 'horizontal') {
        sizeClasses = "border-b-2 w-full"; 
    } else {
        sizeClasses = "border-l-2 h-full";
    }
  } else {
    // Standard size overrides
    if (size === 'thick') {
        sizeClasses = orientation === 'horizontal' ? "!h-[2px]" : "!w-[2px]";
    } else if (size === 'heavy') {
        sizeClasses = orientation === 'horizontal' ? "!h-[4px]" : "!w-[4px]";
    }
  }

  return (
    <Separator
      orientation={orientation}
      className={cn(
        novaSeparatorVariants({ variant, size }), 
        sizeClasses,
        className
      )}
      {...props}
    />
  )
}

export { NovaSeparator }
