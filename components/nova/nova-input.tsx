"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Eye, EyeOff, X, Check, AlertCircle } from "lucide-react"

const novaInputVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "",
      floating: "",
      underline: "border-0 border-b-2 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary",
      filled: "bg-secondary border-transparent focus-visible:bg-background",
    },
    inputSize: {
      sm: "h-8 text-xs",
      md: "h-9 text-sm",
      lg: "h-11 text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    inputSize: "md",
  },
})

export interface NovaInputProps
  extends Omit<React.ComponentProps<"input">, "size">,
    VariantProps<typeof novaInputVariants> {
  label?: string
  helperText?: string
  error?: string
  success?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  clearable?: boolean
  showPasswordToggle?: boolean
  onClear?: () => void
}

function NovaInput({
  className,
  variant,
  inputSize,
  label,
  helperText,
  error,
  success,
  leftIcon,
  rightIcon,
  clearable,
  showPasswordToggle,
  onClear,
  type,
  value,
  onChange,
  ...props
}: NovaInputProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(value || "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value)
    onChange?.(e)
  }

  const handleClear = () => {
    setInternalValue("")
    onClear?.()
  }

  const displayValue = value !== undefined ? value : internalValue
  const isFloating = variant === "floating"
  const hasValue = Boolean(displayValue)
  const inputType = showPasswordToggle && type === "password" ? (showPassword ? "text" : "password") : type

  return (
    <div className="relative w-full">
      {label && !isFloating && (
        <Label className={cn("mb-1.5 block text-sm", error && "text-destructive")}>{label}</Label>
      )}
      <div className="relative">
        {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{leftIcon}</div>}
        <Input
          type={inputType}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            novaInputVariants({ variant, inputSize }),
            leftIcon && "pl-10",
            (rightIcon || clearable || showPasswordToggle || error || success) && "pr-10",
            error && "border-destructive focus-visible:ring-destructive/50",
            success && "border-green-500 focus-visible:ring-green-500/50",
            isFloating && "peer pt-4",
            className,
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined}
          {...props}
        />
        {isFloating && label && (
          <Label
            className={cn(
              "absolute left-3 transition-all duration-200 pointer-events-none",
              isFocused || hasValue
                ? "top-1 text-xs text-primary"
                : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
            )}
          >
            {label}
          </Label>
        )}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {clearable && hasValue && (
            <button
              type="button"
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          {showPasswordToggle && type === "password" && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
          {error && <AlertCircle className="h-4 w-4 text-destructive" />}
          {success && !error && <Check className="h-4 w-4 text-green-500" />}
          {rightIcon && !error && !success}
        </div>
      </div>
      {(error || helperText) && (
        <p
          id={error ? `${props.id}-error` : `${props.id}-helper`}
          className={cn("mt-1.5 text-xs", error ? "text-destructive" : "text-muted-foreground")}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
}

export { NovaInput, novaInputVariants }
