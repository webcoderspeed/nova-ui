"use client"

import * as React from "react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaCollapsibleVariants = cva("w-full transition-all duration-300", {
  variants: {
    variant: {
      default: "",
      card: "border rounded-md shadow-sm bg-card text-card-foreground",
      minimal: "border-b rounded-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaCollapsibleProps
  extends React.ComponentProps<typeof Collapsible>,
    VariantProps<typeof novaCollapsibleVariants> {}

const NovaCollapsible = React.forwardRef<React.ElementRef<typeof Collapsible>, NovaCollapsibleProps>(
  ({ className, variant, ...props }, ref) => (
    <Collapsible
      ref={ref}
      className={cn(novaCollapsibleVariants({ variant }), className)}
      {...props}
    />
  )
)
NovaCollapsible.displayName = "NovaCollapsible"

export {
  NovaCollapsible,
  CollapsibleTrigger as NovaCollapsibleTrigger,
  CollapsibleContent as NovaCollapsibleContent,
  novaCollapsibleVariants,
}
