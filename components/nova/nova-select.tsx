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
      ghost: "border-none shadow-none bg-transparent hover:bg-accent hover:text-accent-foreground",
      neumorphic: "border-none shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff] dark:shadow-[5px_5px_10px_#1a1a1a,-5px_-5px_10px_#333333]",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
  },
})

export interface NovaSelectOption {
  value: string
  label: React.ReactNode
  disabled?: boolean
  icon?: React.ElementType
  className?: string
}

export interface NovaSelectGroup {
  label: string
  options: NovaSelectOption[]
}

export interface NovaSelectProps
  extends Omit<React.ComponentProps<typeof Select>, "children">,
    VariantProps<typeof novaSelectVariants> {
  options?: (NovaSelectOption | string)[]
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
          {options?.map((option) => {
            const isString = typeof option === "string"
            const value = isString ? option : option.value
            const label = isString ? option : option.label
            const disabled = isString ? false : option.disabled
            const Icon = !isString ? option.icon : null
            const itemClassName = !isString ? option.className : undefined

            return (
              <SelectItem key={value} value={value} disabled={disabled} className={itemClassName}>
                {Icon ? (
                  <div className="flex items-center gap-3 text-left">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                    <div className="flex-1">{label}</div>
                  </div>
                ) : (
                  label
                )}
              </SelectItem>
            )
          })}
          {groups?.map((group) => (
            <SelectGroup key={group.label}>
              <SelectLabel>{group.label}</SelectLabel>
              {group.options.map((option) => {
                const Icon = option.icon
                return (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={option.className}
                  >
                    {Icon ? (
                      <div className="flex items-center gap-3 text-left">
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground/80" />
                        <div className="flex-1">{option.label}</div>
                      </div>
                    ) : (
                      option.label
                    )}
                  </SelectItem>
                )
              })}
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
