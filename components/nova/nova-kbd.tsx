import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const novaKbdVariants = cva("transition-colors", {
  variants: {
    variant: {
      default: "", // UI Kbd has default styles
      outline: "bg-transparent border border-input",
      ghost: "bg-transparent border-none shadow-none",
      solid: "bg-primary text-primary-foreground border-primary",
    },
    size: {
      default: "",
      sm: "h-4 min-w-4 text-[10px] px-0.5",
      lg: "h-6 min-w-6 text-sm px-1.5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

export interface NovaKbdProps
  extends React.ComponentProps<typeof Kbd>,
    VariantProps<typeof novaKbdVariants> {}

const NovaKbd = React.forwardRef<HTMLElement, NovaKbdProps>(
  ({ className, variant, size, ...props }, ref) => (
    <Kbd
      ref={ref}
      className={cn(novaKbdVariants({ variant, size }), className)}
      {...props}
    />
  )
)
NovaKbd.displayName = "NovaKbd"

const NovaKbdGroup = KbdGroup

export { NovaKbd, NovaKbdGroup }
