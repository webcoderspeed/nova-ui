"use client"

import type * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaSelectVariants = cva("transition-all duration-200", {
  variants: {
    size: {
      sm: "h-8 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base",
    },
    variant: {
      default: "",
      filled: "bg-secondary border-transparent focus:bg-background",
      underline: "border-0 border-b-2 rounded-none px-0 focus:ring-0",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})

export interface NovaSelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface NovaSelectGroup {
  label: string
  options: NovaSelectOption[]
}

export interface NovaSelectProps
  extends Omit<React.ComponentProps<typeof Select>, "children">,
    VariantProps<typeof novaSelectVariants> {
  options?: NovaSelectOption[]
  groups?: NovaSelectGroup[]
  placeholder?: string
  label?: string
  helperText?: string
  error?: string
  className?: string
}

function NovaSelect({
  options,
  groups,
  placeholder = "Select an option",
  label,
  helperText,
  error,
  size,
  variant,
  className,
  ...props
}: NovaSelectProps) {
  return (
    <div className="w-full">
      {label && <Label className={cn("mb-1.5 block", error && "text-destructive")}>{label}</Label>}
      <Select {...props}>
        <SelectTrigger
          className={cn(
            novaSelectVariants({ size, variant }),
            error && "border-destructive focus:ring-destructive/50",
            className,
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </SelectItem>
          ))}
          {groups?.map((group) => (
            <SelectGroup key={group.label}>
              <SelectLabel>{group.label}</SelectLabel>
              {group.options.map((option) => (
                <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      {(error || helperText) && (
        <p className={cn("mt-1.5 text-xs", error ? "text-destructive" : "text-muted-foreground")}>
          {error || helperText}
        </p>
      )}
    </div>
  )
}

export { NovaSelect, novaSelectVariants }
