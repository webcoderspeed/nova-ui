"use client"

import type * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaSliderVariants = cva("transition-all duration-200", {
  variants: {
    size: {
      sm: "[&>[data-slot=slider-track]]:h-1 [&_[data-slot=slider-thumb]]:h-3 [&_[data-slot=slider-thumb]]:w-3",
      md: "",
      lg: "[&>[data-slot=slider-track]]:h-3 [&_[data-slot=slider-thumb]]:h-5 [&_[data-slot=slider-thumb]]:w-5",
    },
    color: {
      default: "",
      success: "[&_[data-slot=slider-range]]:bg-green-500",
      warning: "[&_[data-slot=slider-range]]:bg-yellow-500",
      error: "[&_[data-slot=slider-range]]:bg-destructive",
      accent: "[&_[data-slot=slider-range]]:bg-accent-foreground",
    },
    variant: {
      default: "",
      gradient: "[&_[data-slot=slider-range]]:bg-gradient-to-r [&_[data-slot=slider-range]]:from-primary [&_[data-slot=slider-range]]:to-purple-500",
      neumorphic: "[&_[data-slot=slider-track]]:shadow-inner [&_[data-slot=slider-thumb]]:shadow-[-2px_-2px_5px_rgba(255,255,255,0.8),2px_2px_5px_rgba(0,0,0,0.2)]",
      glass: "[&_[data-slot=slider-track]]:bg-white/10 [&_[data-slot=slider-thumb]]:bg-white/20 [&_[data-slot=slider-thumb]]:backdrop-blur-md",
      neon: "[&_[data-slot=slider-thumb]]:shadow-[0_0_10px_theme(colors.primary.DEFAULT)] [&_[data-slot=slider-range]]:shadow-[0_0_5px_theme(colors.primary.DEFAULT)]",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    variant: "default",
  },
})

export interface NovaSliderProps
  extends Omit<React.ComponentProps<typeof Slider>, "size" | "color">,
    VariantProps<typeof novaSliderVariants> {
  label?: string
  showValue?: boolean
  formatValue?: (value: number) => string
  marks?: Array<{ value: number; label?: string }>
}

function NovaSlider({
  className,
  size,
  color,
  variant,
  label,
  showValue,
  formatValue = (v) => String(v),
  marks,
  value,
  defaultValue,
  ...props
}: NovaSliderProps) {
  const currentValue = value?.[0] ?? defaultValue?.[0] ?? 0

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between mb-2">
          {label && <Label>{label}</Label>}
          {showValue && <span className="text-sm font-medium">{formatValue(currentValue)}</span>}
        </div>
      )}
      <Slider
        value={value}
        defaultValue={defaultValue}
        className={cn(novaSliderVariants({ size, color, variant }), className)}
        {...props}
      />
      {marks && marks.length > 0 && (
        <div className="relative mt-1">
          {marks.map((mark) => (
            <span
              key={mark.value}
              className="absolute text-xs text-muted-foreground -translate-x-1/2"
              style={{ left: `${((mark.value - (props.min || 0)) / ((props.max || 100) - (props.min || 0))) * 100}%` }}
            >
              {mark.label ?? mark.value}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export { NovaSlider, novaSliderVariants }
