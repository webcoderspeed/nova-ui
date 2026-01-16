"use client"

import * as React from "react"
import { Spinner } from "@/components/ui/spinner"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaSpinnerVariants = cva(
  "animate-spin",
  {
    variants: {
      variant: {
        default: "text-muted-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        success: "text-green-500",
        warning: "text-yellow-500",
        danger: "text-destructive",
        gradient: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",
        glow: "text-primary drop-shadow-[0_0_8px_rgba(var(--primary),0.8)]",
      },
      size: {
        default: "size-4",
        xs: "size-3",
        sm: "size-3.5",
        lg: "size-6",
        xl: "size-8",
        xxl: "size-12",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NovaSpinnerProps
  extends React.ComponentProps<typeof Spinner>,
    VariantProps<typeof novaSpinnerVariants> {}

function NovaSpinner({ className, variant, size, ...props }: NovaSpinnerProps) {
  return (
    <Spinner
      className={cn(novaSpinnerVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { NovaSpinner }
