"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaToggleGroupVariants = cva(
  "flex items-center justify-center gap-1",
  {
    variants: {
      variant: {
        default: "",
        outline: "border p-1 rounded-lg",
        glass: "bg-white/5 p-1 rounded-lg backdrop-blur-sm border border-white/10",
        floating: "bg-background shadow-md p-1 rounded-full border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NovaToggleGroupProps
  extends Omit<React.ComponentProps<typeof ToggleGroup>, "variant">,
    VariantProps<typeof novaToggleGroupVariants> {}

const NovaToggleGroup = React.forwardRef<React.ElementRef<typeof ToggleGroup>, NovaToggleGroupProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <ToggleGroup
        ref={ref}
        className={cn(novaToggleGroupVariants({ variant }), className)}
        {...(props as React.ComponentProps<typeof ToggleGroup>)}
      />
    )
  }
)
NovaToggleGroup.displayName = "NovaToggleGroup"

const novaToggleGroupItemVariants = cva(
  "transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        outline: "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        glass: "hover:bg-white/10 data-[state=on]:bg-white/20 data-[state=on]:text-white rounded-md",
        floating: "rounded-full data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
        glow: "data-[state=on]:text-primary data-[state=on]:shadow-[0_0_8px_rgba(var(--primary),0.5)]",
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

export interface NovaToggleGroupItemProps
  extends Omit<React.ComponentProps<typeof ToggleGroupItem>, "variant" | "size">,
    VariantProps<typeof novaToggleGroupItemVariants> {}

const NovaToggleGroupItem = React.forwardRef<React.ElementRef<typeof ToggleGroupItem>, NovaToggleGroupItemProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <ToggleGroupItem
        ref={ref}
        className={cn(novaToggleGroupItemVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
NovaToggleGroupItem.displayName = "NovaToggleGroupItem"

export { NovaToggleGroup, NovaToggleGroupItem }
