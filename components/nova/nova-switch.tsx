"use client"

import * as React from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaSwitchVariants = cva("transition-all duration-200", {
  variants: {
    size: {
      sm: "h-4 w-8 [&>span]:h-3 [&>span]:w-3 [&>span]:data-[state=checked]:translate-x-4",
      md: "h-5 w-9 [&>span]:h-4 [&>span]:w-4 [&>span]:data-[state=checked]:translate-x-4",
      lg: "h-6 w-11 [&>span]:h-5 [&>span]:w-5 [&>span]:data-[state=checked]:translate-x-5",
    },
    color: {
      default: "",
      success: "data-[state=checked]:bg-green-500",
      warning: "data-[state=checked]:bg-yellow-500",
      error: "data-[state=checked]:bg-destructive",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})

export interface NovaSwitchProps
  extends Omit<React.ComponentProps<typeof Switch>, "size" | "color">,
    VariantProps<typeof novaSwitchVariants> {
  label?: string
  description?: string
  labelPosition?: "left" | "right"
}

function NovaSwitch({
  className,
  size,
  color,
  label,
  description,
  labelPosition = "right",
  id,
  ...props
}: NovaSwitchProps) {
  const switchId = React.useId() // Moved useId hook to the top level
  const switchElement = (
    <Switch id={id || switchId} className={cn(novaSwitchVariants({ size, color }), className)} {...props} />
  )

  const labelElement = (
    <div className="flex flex-col gap-0.5">
      {label && (
        <Label htmlFor={id || switchId} className="cursor-pointer">
          {label}
        </Label>
      )}
      {description && <p className="text-xs text-muted-foreground">{description}</p>}
    </div>
  )

  return (
    <div className="flex items-center gap-3">
      {labelPosition === "left" && labelElement}
      {switchElement}
      {labelPosition === "right" && labelElement}
    </div>
  )
}

export { NovaSwitch, novaSwitchVariants }
