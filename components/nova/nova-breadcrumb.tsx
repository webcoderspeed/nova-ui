"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"

const novaBreadcrumbVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glass: "bg-white/50 dark:bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 shadow-sm",
        minimal: "text-xs uppercase tracking-wider font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NovaBreadcrumb({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof Breadcrumb> &
  VariantProps<typeof novaBreadcrumbVariants>) {
  return (
    <Breadcrumb
      className={cn(novaBreadcrumbVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaBreadcrumbLink({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbLink>) {
  return (
    <BreadcrumbLink
      className={cn(
        "hover:text-primary transition-colors duration-200 hover:underline underline-offset-4 decoration-primary/50",
        className
      )}
      {...props}
    />
  )
}

function NovaBreadcrumbSeparator({
  className,
  ...props
}: React.ComponentProps<typeof BreadcrumbSeparator>) {
  return (
    <BreadcrumbSeparator
      className={cn("text-muted-foreground/50", className)}
      {...props}
    />
  )
}

export {
  NovaBreadcrumb,
  BreadcrumbList as NovaBreadcrumbList,
  BreadcrumbItem as NovaBreadcrumbItem,
  NovaBreadcrumbLink,
  BreadcrumbPage as NovaBreadcrumbPage,
  NovaBreadcrumbSeparator,
  BreadcrumbEllipsis as NovaBreadcrumbEllipsis,
}
