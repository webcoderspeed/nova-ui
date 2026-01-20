"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  Toast,
  type ToastProps,
} from "@/components/ui/toast"

const novaToastVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        destructive: "",
        success: "border-green-500 bg-green-500/10 text-green-500 dark:border-green-400 dark:text-green-400",
        warning: "border-yellow-500 bg-yellow-500/10 text-yellow-500 dark:border-yellow-400 dark:text-yellow-400",
        info: "border-blue-500 bg-blue-500/10 text-blue-500 dark:border-blue-400 dark:text-blue-400",
        glass: "bg-white/70 dark:bg-black/70 backdrop-blur-md border-white/20 shadow-lg",
        gradient: "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NovaToastProps extends Omit<ToastProps, "variant">, VariantProps<typeof novaToastVariants> {}

const NovaToast = React.forwardRef<
  React.ElementRef<typeof Toast>,
  NovaToastProps
>(({ className, variant, ...props }, ref) => {
  const isCustomVariant = ["success", "warning", "info", "glass", "gradient"].includes(variant as string)
  const uiVariant = (isCustomVariant ? "default" : variant) as ToastProps["variant"]

  return (
    <Toast
      ref={ref}
      className={cn(novaToastVariants({ variant }), className)}
      variant={uiVariant}
      {...props}
    />
  )
})
NovaToast.displayName = "NovaToast"



export { NovaToast }
