"use client"

import * as React from "react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaAspectRatioVariants = cva(
  "overflow-hidden",
  {
    variants: {
      variant: {
        default: "",
        glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10",
        frame: "border-2 border-primary/20 bg-background",
        shadow: "shadow-lg bg-background",
        gradient: "bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10",
      },
      rounded: {
        none: "rounded-none",
        default: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      rounded: "default",
    },
  }
)

export interface NovaAspectRatioProps
  extends React.ComponentProps<typeof AspectRatio>,
    VariantProps<typeof novaAspectRatioVariants> {}

function NovaAspectRatio({ className, variant, rounded, ...props }: NovaAspectRatioProps) {
  return (
    <AspectRatio
      className={cn(novaAspectRatioVariants({ variant, rounded }), className)}
      {...props}
    />
  )
}

export { NovaAspectRatio }
