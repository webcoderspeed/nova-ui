"use client"

import * as React from "react"
import { Label } from "@/components/ui/label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaLabelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        accent: "text-primary font-semibold",
        error: "text-destructive font-semibold",
        success: "text-green-500 font-semibold",
        warning: "text-yellow-500 font-semibold",
        ghost: "text-muted-foreground font-normal",
        glass: "text-foreground/80 drop-shadow-sm",
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
        xl: "text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NovaLabelProps
  extends React.ComponentProps<typeof Label>,
    VariantProps<typeof novaLabelVariants> {}

function NovaLabel({ className, variant, size, ...props }: NovaLabelProps) {
  return (
    <Label
      className={cn(novaLabelVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { NovaLabel }
