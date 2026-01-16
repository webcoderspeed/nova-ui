"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

const novaCalendarVariants = cva(
  "p-3 rounded-lg transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-background border shadow-sm",
        glass: "bg-white/70 dark:bg-black/70 backdrop-blur-md border-white/20 dark:border-white/10 shadow-xl",
        gradient: "bg-gradient-to-br from-background via-background/95 to-secondary/20 border-primary/10 shadow-lg",
        neon: "bg-black/90 border-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NovaCalendar({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Calendar> &
  VariantProps<typeof novaCalendarVariants>) {
  return (
    <Calendar
      className={cn(novaCalendarVariants({ variant }), className)}
      {...props}
    />
  )
}

export { NovaCalendar }
