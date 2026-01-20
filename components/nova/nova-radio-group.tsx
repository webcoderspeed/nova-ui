"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const novaRadioGroupItemVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glow: "data-[state=checked]:shadow-[0_0_10px_rgba(var(--primary),0.5)]",
        pulse: "data-[state=checked]:animate-pulse",
      },
      size: {
        default: "size-4",
        lg: "size-5",
        xl: "size-6",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const novaRadioGroupVariants = cva(
  "grid gap-3",
  {
    variants: {
      variant: {
        default: "",
        card: "grid-cols-2 gap-4",
        glow: "",
        pill: "flex flex-wrap gap-2",
      }
    },
    defaultVariants: {
      variant: "default",
    }
  }
)

export interface NovaRadioGroupProps
  extends React.ComponentProps<typeof RadioGroup>,
    VariantProps<typeof novaRadioGroupVariants> {}

function NovaRadioGroup({
  className,
  variant,
  ...props
}: NovaRadioGroupProps) {
  return <RadioGroup className={cn(novaRadioGroupVariants({ variant }), className)} {...props} />
}

function NovaRadioGroupItem({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof RadioGroupItem> &
  VariantProps<typeof novaRadioGroupItemVariants>) {
  return (
    <RadioGroupItem
      className={cn(novaRadioGroupItemVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { NovaRadioGroup, NovaRadioGroupItem }
