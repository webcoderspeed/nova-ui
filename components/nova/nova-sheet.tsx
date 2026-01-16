"use client"

import * as React from "react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaSheetContentVariants = cva("transition-all duration-300", {
  variants: {
    variant: {
      default: "",
      glass: "bg-background/80 backdrop-blur-md border-primary/20",
      solid: "bg-background border-border",
    },
    sheetSize: {
      default: "",
      sm: "sm:max-w-xs",
      lg: "sm:max-w-lg",
      xl: "sm:max-w-xl",
      full: "sm:max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
    sheetSize: "default",
  },
})

export interface NovaSheetContentProps
  extends React.ComponentProps<typeof SheetContent>,
    VariantProps<typeof novaSheetContentVariants> {
  glass?: boolean
}

function NovaSheetContent({
  className,
  variant,
  sheetSize,
  glass,
  children,
  ...props
}: NovaSheetContentProps) {
  const finalVariant = glass ? "glass" : variant
  return (
    <SheetContent
      className={cn(novaSheetContentVariants({ variant: finalVariant, sheetSize }), className)}
      {...props}
    >
      {children}
    </SheetContent>
  )
}

export interface NovaSheetProps extends React.ComponentProps<typeof Sheet> {}

function NovaSheet({ ...props }: NovaSheetProps) {
  return <Sheet {...props} />
}

export {
  NovaSheet,
  NovaSheetContent,
  SheetTrigger as NovaSheetTrigger,
  SheetClose as NovaSheetClose,
  SheetHeader as NovaSheetHeader,
  SheetFooter as NovaSheetFooter,
  SheetTitle as NovaSheetTitle,
  SheetDescription as NovaSheetDescription,
  novaSheetContentVariants,
}
