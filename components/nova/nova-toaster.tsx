"use client"

import * as React from "react"
import {
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  type ToastProps,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { NovaToast, type NovaToastProps } from "@/components/nova/nova-toast"

export function NovaToaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        return (
          <NovaToast key={id} variant={variant as NovaToastProps["variant"]} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </NovaToast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
