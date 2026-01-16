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

function NovaRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroup>) {
  return <RadioGroup className={cn("grid gap-3", className)} {...props} />
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
