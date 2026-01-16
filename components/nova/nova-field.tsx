"use client"

import * as React from "react"
import { Field, FieldSet, FieldLegend, FieldGroup, FieldContent } from "@/components/ui/field"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const novaFieldVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        card: "p-4 border rounded-lg bg-card text-card-foreground shadow-sm",
        glass: "p-4 rounded-lg bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20",
        highlight: "p-4 rounded-lg bg-primary/5 border border-primary/10",
        ghost: "opacity-80 hover:opacity-100",
      },
      spacing: {
        default: "gap-3",
        tight: "gap-1.5",
        loose: "gap-6",
      }
    },
    defaultVariants: {
      variant: "default",
      spacing: "default",
    },
  }
)

export interface NovaFieldProps
  extends React.ComponentProps<typeof Field>,
    VariantProps<typeof novaFieldVariants> {}

function NovaField({ className, variant, spacing, ...props }: NovaFieldProps) {
  return (
    <Field
      className={cn(novaFieldVariants({ variant, spacing }), className)}
      {...props}
    />
  )
}

export { NovaField, FieldSet, FieldLegend, FieldGroup, FieldContent }
