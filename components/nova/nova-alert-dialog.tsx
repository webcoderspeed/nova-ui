"use client"

import * as React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { NovaButton } from "./nova-button"

const novaAlertDialogContentVariants = cva(
  "border-2 backdrop-blur-md duration-300",
  {
    variants: {
      variant: {
        default: "bg-background/95 border-primary/20 shadow-2xl",
        glass: "bg-white/70 dark:bg-black/70 border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        gradient: "bg-gradient-to-br from-background via-background/95 to-secondary/20 border-primary/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function NovaAlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialog>) {
  return <AlertDialog {...props} />
}

function NovaAlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogTrigger>) {
  return <AlertDialogTrigger {...props} />
}

function NovaAlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPortal>) {
  return <AlertDialogPortal {...props} />
}

function NovaAlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogOverlay>) {
  return (
    <AlertDialogOverlay
      className={cn(
        "bg-black/60 backdrop-blur-[2px]",
        className
      )}
      {...props}
    />
  )
}

interface NovaAlertDialogContentProps
  extends React.ComponentProps<typeof AlertDialogContent>,
    VariantProps<typeof novaAlertDialogContentVariants> {}

function NovaAlertDialogContent({
  className,
  variant,
  ...props
}: NovaAlertDialogContentProps) {
  return (
    <AlertDialogContent
      className={cn(novaAlertDialogContentVariants({ variant }), className)}
      {...props}
    />
  )
}

function NovaAlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogHeader>) {
  return (
    <AlertDialogHeader
      className={cn("gap-3", className)}
      {...props}
    />
  )
}

function NovaAlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogFooter>) {
  return (
    <AlertDialogFooter
      className={cn("gap-3 sm:gap-4", className)}
      {...props}
    />
  )
}

function NovaAlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogTitle>) {
  return (
    <AlertDialogTitle
      className={cn("text-2xl font-bold tracking-tight", className)}
      {...props}
    />
  )
}

function NovaAlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogDescription>) {
  return (
    <AlertDialogDescription
      className={cn("text-base leading-relaxed", className)}
      {...props}
    />
  )
}

function NovaAlertDialogAction({
  className,
  animation = "scale",
  ...props
}: React.ComponentProps<typeof AlertDialogAction> & {
  animation?: "none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"
}) {
  return (
    <AlertDialogAction asChild className={className}>
      <NovaButton animation={animation} {...props} />
    </AlertDialogAction>
  )
}

function NovaAlertDialogCancel({
  className,
  animation = "scale",
  ...props
}: React.ComponentProps<typeof AlertDialogCancel> & {
  animation?: "none" | "pulse" | "bounce" | "shine" | "glow" | "scale" | "ripple"
}) {
  return (
    <AlertDialogCancel asChild className={className}>
      <NovaButton variant="outline" animation={animation} {...props} />
    </AlertDialogCancel>
  )
}

export {
  NovaAlertDialog,
  NovaAlertDialogPortal,
  NovaAlertDialogOverlay,
  NovaAlertDialogTrigger,
  NovaAlertDialogContent,
  NovaAlertDialogHeader,
  NovaAlertDialogFooter,
  NovaAlertDialogTitle,
  NovaAlertDialogDescription,
  NovaAlertDialogAction,
  NovaAlertDialogCancel,
  novaAlertDialogContentVariants,
}