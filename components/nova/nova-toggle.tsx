"use client"

import * as React from "react"
import { Toggle } from "@/components/ui/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaToggleVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        glass: "bg-white/5 hover:bg-white/10 data-[state=on]:bg-white/20 backdrop-blur-sm border-white/10",
        glow: "data-[state=on]:shadow-[0_0_10px_rgba(var(--primary),0.5)] data-[state=on]:text-primary data-[state=on]:border-primary/50",
        neon: "data-[state=on]:text-primary data-[state=on]:shadow-[0_0_5px_theme(colors.primary.DEFAULT)] border border-transparent data-[state=on]:border-primary",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export type NovaToggleProps = Omit<React.ComponentProps<typeof Toggle>, "variant" | "size"> &
    VariantProps<typeof novaToggleVariants>

const NovaToggle = React.forwardRef<React.ComponentRef<typeof Toggle>, NovaToggleProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <Toggle
        ref={ref}
        className={cn(novaToggleVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
NovaToggle.displayName = "NovaToggle"

export { NovaToggle }
