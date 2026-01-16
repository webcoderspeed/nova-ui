"use client"

import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaCheckboxVariants = cva("transition-all duration-200", {
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    color: {
      default: "",
      success: "data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500",
      warning: "data-[state=checked]:bg-yellow-500 data-[state=checked]:border-yellow-500",
      error: "data-[state=checked]:bg-destructive data-[state=checked]:border-destructive",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
})

export interface NovaCheckboxProps
  extends Omit<React.ComponentProps<typeof Checkbox>, "size" | "color">,
    VariantProps<typeof novaCheckboxVariants> {
  label?: string
  description?: string
  error?: string
}

function NovaCheckbox({ className, size, color, label, description, error, id, ...props }: NovaCheckboxProps) {
  const checkboxId = React.useId() // Moved useId hook call to the top level
  const finalId = id || checkboxId

  return (
    <div className="flex gap-3">
      <Checkbox
        id={finalId}
        className={cn(novaCheckboxVariants({ size, color }), error && "border-destructive", className)}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && (
            <Label htmlFor={finalId} className={cn("cursor-pointer", error && "text-destructive")}>
              {label}
            </Label>
          )}
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
          {error && <p className="text-xs text-destructive">{error}</p>}
        </div>
      )}
    </div>
  )
}

export { NovaCheckbox, novaCheckboxVariants }
