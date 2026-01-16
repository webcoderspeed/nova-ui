"use client"

import * as React from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaTextareaVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "",
      filled: "bg-secondary border-transparent focus:bg-background",
      underline: "border-0 border-b-2 rounded-none px-0 focus-visible:ring-0",
    },
    resize: {
      none: "resize-none",
      vertical: "resize-y",
      horizontal: "resize-x",
      both: "resize",
    },
  },
  defaultVariants: {
    variant: "default",
    resize: "vertical",
  },
})

export interface NovaTextareaProps
  extends React.ComponentProps<typeof Textarea>,
    VariantProps<typeof novaTextareaVariants> {
  label?: string
  helperText?: string
  error?: string
  showCount?: boolean
  maxLength?: number
}

function NovaTextarea({
  className,
  variant,
  resize,
  label,
  helperText,
  error,
  showCount,
  maxLength,
  value,
  onChange,
  ...props
}: NovaTextareaProps) {
  const [internalValue, setInternalValue] = React.useState(value || "")
  const displayValue = value !== undefined ? value : internalValue
  const charCount = String(displayValue).length

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInternalValue(e.target.value)
    onChange?.(e)
  }

  return (
    <div className="w-full">
      {label && <Label className={cn("mb-1.5 block", error && "text-destructive")}>{label}</Label>}
      <Textarea
        value={displayValue}
        onChange={handleChange}
        maxLength={maxLength}
        className={cn(novaTextareaVariants({ variant, resize }), error && "border-destructive", className)}
        aria-invalid={Boolean(error)}
        {...props}
      />
      <div className="flex justify-between mt-1.5">
        {(error || helperText) && (
          <p className={cn("text-xs", error ? "text-destructive" : "text-muted-foreground")}>{error || helperText}</p>
        )}
        {showCount && (
          <p className="text-xs text-muted-foreground ml-auto">
            {charCount}
            {maxLength && `/${maxLength}`}
          </p>
        )}
      </div>
    </div>
  )
}

export { NovaTextarea, novaTextareaVariants }
