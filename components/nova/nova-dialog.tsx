"use client"

import type * as React from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"

const novaDialogVariants = cva("", {
  variants: {
    animation: {
      default: "",
      slide:
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      scale:
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90",
      fade: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    },
    size: {
      sm: "max-w-sm",
      md: "max-w-lg",
      lg: "max-w-2xl",
      xl: "max-w-4xl",
      full: "max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]",
    },
    position: {
      center: "",
      top: "top-[10%] translate-y-0",
      bottom: "top-auto bottom-4 translate-y-0",
    },
  },
  defaultVariants: {
    animation: "default",
    size: "md",
    position: "center",
  },
})

export interface NovaDialogProps extends React.ComponentProps<typeof Dialog> {
  trigger?: React.ReactNode
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  showClose?: boolean
  animation?: "default" | "slide" | "scale" | "fade"
  size?: "sm" | "md" | "lg" | "xl" | "full"
  position?: "center" | "top" | "bottom"
  className?: string
}

function NovaDialog({
  trigger,
  title,
  description,
  children,
  footer,
  showClose = true,
  animation,
  size,
  position,
  className,
  ...props
}: NovaDialogProps) {
  return (
    <Dialog {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        showCloseButton={showClose}
        className={cn(novaDialogVariants({ animation, size, position }), className)}
      >
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Dialog>
  )
}

// Confirm Dialog
export interface NovaConfirmDialogProps extends Omit<NovaDialogProps, "footer" | "children"> {
  confirmText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  destructive?: boolean
  children?: React.ReactNode
}

function NovaConfirmDialog({
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  destructive,
  children,
  ...props
}: NovaConfirmDialogProps) {
  return (
    <NovaDialog
      {...props}
      footer={
        <>
          <DialogClose asChild>
            <Button variant="outline" onClick={onCancel}>
              {cancelText}
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant={destructive ? "destructive" : "default"} onClick={onConfirm}>
              {confirmText}
            </Button>
          </DialogClose>
        </>
      }
    >
      {children}
    </NovaDialog>
  )
}

export {
  NovaDialog,
  NovaConfirmDialog,
  novaDialogVariants,
  DialogTrigger as NovaDialogTrigger,
  DialogClose as NovaDialogClose,
}
