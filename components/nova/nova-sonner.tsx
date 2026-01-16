"use client"

import * as React from "react"
import { Toaster as Sonner } from "sonner"
import { useTheme } from "next-themes"

type ToasterProps = React.ComponentProps<typeof Sonner>

function NovaSonner({ ...props }: ToasterProps) {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:transition-all group-[.toaster]:duration-300",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          error: "group-[.toaster]:!border-destructive group-[.toaster]:!text-destructive group-[.toaster]:!bg-destructive/10",
          success: "group-[.toaster]:!border-green-500 group-[.toaster]:!text-green-500 group-[.toaster]:!bg-green-500/10",
          warning: "group-[.toaster]:!border-yellow-500 group-[.toaster]:!text-yellow-500 group-[.toaster]:!bg-yellow-500/10",
          info: "group-[.toaster]:!border-blue-500 group-[.toaster]:!text-blue-500 group-[.toaster]:!bg-blue-500/10",
        },
      }}
      {...props}
    />
  )
}

export { NovaSonner }
