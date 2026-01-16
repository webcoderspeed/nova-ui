"use client"

import * as React from "react"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react"

const novaAlertVariants = cva("transition-all duration-200", {
  variants: {
    status: {
      default: "",
      success: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400 [&>svg]:text-green-500",
      warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 [&>svg]:text-yellow-500",
      error: "border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive",
      info: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400 [&>svg]:text-blue-500",
    },
    animation: {
      none: "",
      fade: "animate-in fade-in-0 duration-300",
      slide: "animate-in slide-in-from-top-2 duration-300",
    },
  },
  defaultVariants: {
    status: "default",
    animation: "fade",
  },
})

const statusIcons = {
  default: null,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
  info: Info,
}

export interface NovaAlertProps extends React.ComponentProps<typeof Alert>, VariantProps<typeof novaAlertVariants> {
  title?: string
  description?: string
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  showIcon?: boolean
  action?: React.ReactNode
}

function NovaAlert({
  className,
  status,
  animation,
  title,
  description,
  dismissible,
  onDismiss,
  icon,
  showIcon = true,
  action,
  children,
  ...props
}: NovaAlertProps) {
  const [visible, setVisible] = React.useState(true)
  const StatusIcon = status ? statusIcons[status] : null

  if (!visible) return null

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <Alert className={cn(novaAlertVariants({ status, animation }), "relative block", className)} {...props}>
      <div className="flex gap-4">
        {showIcon && (icon || StatusIcon) && (
          <div className="shrink-0">{icon || (StatusIcon && <StatusIcon className="h-4 w-4" />)}</div>
        )}
        <div className="flex-1 space-y-1">
          {title && <AlertTitle className="mb-1">{title}</AlertTitle>}
          {description && <AlertDescription>{description}</AlertDescription>}
          {children}
          {action && <div className="mt-3">{action}</div>}
        </div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </Alert>
  )
}

export { NovaAlert, novaAlertVariants }
