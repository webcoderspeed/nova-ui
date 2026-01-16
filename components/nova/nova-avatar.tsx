"use client"

import type * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaAvatarVariants = cva("relative transition-all duration-200", {
  variants: {
    size: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-16 w-16 text-xl",
      "2xl": "h-20 w-20 text-2xl",
    },
    shape: {
      circle: "rounded-full",
      square: "rounded-md",
      squircle: "rounded-xl",
    },
    ring: {
      none: "",
      primary: "ring-2 ring-primary ring-offset-2 ring-offset-background",
      success: "ring-2 ring-green-500 ring-offset-2 ring-offset-background",
      warning: "ring-2 ring-yellow-500 ring-offset-2 ring-offset-background",
      error: "ring-2 ring-destructive ring-offset-2 ring-offset-background",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
    ring: "none",
  },
})

export interface NovaAvatarProps extends React.ComponentProps<typeof Avatar>, VariantProps<typeof novaAvatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  status?: "online" | "offline" | "busy" | "away"
  showStatus?: boolean
}

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
}

function NovaAvatar({
  className,
  size,
  shape,
  ring,
  src,
  alt,
  fallback,
  status,
  showStatus,
  ...props
}: NovaAvatarProps) {
  const initials = fallback || alt?.charAt(0)?.toUpperCase() || "?"

  return (
    <div className="relative inline-block">
      <Avatar className={cn(novaAvatarVariants({ size, shape, ring }), className)} {...props}>
        {src && <AvatarImage src={src || "/placeholder.svg"} alt={alt || "Avatar"} />}
        <AvatarFallback
          className={cn(shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-md" : "rounded-xl")}
        >
          {initials}
        </AvatarFallback>
      </Avatar>
      {showStatus && status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block rounded-full ring-2 ring-background",
            statusColors[status],
            size === "xs" || size === "sm" ? "h-2 w-2" : size === "xl" || size === "2xl" ? "h-4 w-4" : "h-3 w-3",
          )}
        />
      )}
    </div>
  )
}

// Avatar Group
export interface NovaAvatarGroupProps {
  avatars: Array<NovaAvatarProps>
  max?: number
  size?: NovaAvatarProps["size"]
  className?: string
}

function NovaAvatarGroup({ avatars, max = 4, size = "md", className }: NovaAvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <div className={cn("flex -space-x-3", className)}>
      {visible.map((avatar, i) => (
        <NovaAvatar key={i} {...avatar} size={size} ring="primary" className="border-2 border-background" />
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            novaAvatarVariants({ size }),
            "flex items-center justify-center bg-muted text-muted-foreground border-2 border-background rounded-full",
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  )
}

export { NovaAvatar, NovaAvatarGroup, novaAvatarVariants }
