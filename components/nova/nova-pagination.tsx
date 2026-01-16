"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const novaPaginationLinkVariants = cva(
  "transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        glow: "hover:shadow-[0_0_10px_rgba(var(--primary),0.5)] hover:border-primary/50",
        glass: "bg-white/10 hover:bg-white/20 backdrop-blur-sm border-white/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface NovaPaginationLinkProps extends React.ComponentProps<typeof PaginationLink>,
  VariantProps<typeof novaPaginationLinkVariants> {}

function NovaPaginationLink({
  className,
  variant,
  ...props
}: NovaPaginationLinkProps) {
  return (
    <PaginationLink
      className={cn(novaPaginationLinkVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaPaginationPrevious({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof PaginationPrevious> &
  VariantProps<typeof novaPaginationLinkVariants>) {
  return (
    <PaginationPrevious
      className={cn(novaPaginationLinkVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaPaginationNext({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof PaginationNext> &
  VariantProps<typeof novaPaginationLinkVariants>) {
  return (
    <PaginationNext
      className={cn(novaPaginationLinkVariants({ variant }), className)}
      {...props}
    />
  )
}

export {
  Pagination as NovaPagination,
  PaginationContent as NovaPaginationContent,
  PaginationEllipsis as NovaPaginationEllipsis,
  PaginationItem as NovaPaginationItem,
  NovaPaginationLink,
  NovaPaginationNext,
  NovaPaginationPrevious,
}
