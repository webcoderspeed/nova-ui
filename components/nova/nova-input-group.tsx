"use client"

import * as React from "react"
import { InputGroup, InputGroupAddon, InputGroupButton } from "@/components/ui/input-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaInputGroupVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glow: "focus-within:shadow-[0_0_10px_rgba(var(--primary),0.5)] focus-within:border-primary",
        glass: "bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20",
        neon: "focus-within:border-primary focus-within:shadow-[0_0_5px_theme(colors.primary.DEFAULT),0_0_10px_theme(colors.primary.DEFAULT)]",
        floating: "shadow-lg border-transparent bg-background",
      },
      size: {
        default: "h-9",
        sm: "h-8 text-xs",
        lg: "h-11 text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NovaInputGroupProps
  extends React.ComponentProps<typeof InputGroup>,
    VariantProps<typeof novaInputGroupVariants> {}

function NovaInputGroup({ className, variant, size, ...props }: NovaInputGroupProps) {
  return (
    <InputGroup
      className={cn(novaInputGroupVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { NovaInputGroup, InputGroupAddon, InputGroupButton }
