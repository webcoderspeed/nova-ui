"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { NovaButton } from "@/components/nova/nova-button"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

interface DocsPagerProps {
  navItems: NavItem[]
  pathname: string
}

export function DocsPager({ navItems, pathname }: DocsPagerProps) {
  const flattenedLinks = navItems.reduce((acc, item) => {
    if (item.children) {
      return [...acc, ...item.children]
    }
    return [...acc, item]
  }, [] as NavItem[])

  const activeIndex = flattenedLinks.findIndex((link) => link.href === pathname)
  const prev = activeIndex > 0 ? flattenedLinks[activeIndex - 1] : null
  const next = activeIndex < flattenedLinks.length - 1 ? flattenedLinks[activeIndex + 1] : null

  if (!prev && !next) return null

  return (
    <div className="flex flex-row items-center justify-between border-t border-border pt-6 mt-12">
      {prev ? (
        <NovaButton variant="ghost" className="h-auto p-0 hover:bg-transparent" asChild>
          <Link href={prev.href} className="flex flex-col items-start gap-1">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </span>
            <span className="text-base font-medium text-foreground hover:underline">
              {prev.title}
            </span>
          </Link>
        </NovaButton>
      ) : (
        <div />
      )}
      {next ? (
        <NovaButton variant="ghost" className="h-auto p-0 hover:bg-transparent" asChild>
          <Link href={next.href} className="flex flex-col items-end gap-1">
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              Next
              <ChevronRight className="h-4 w-4" />
            </span>
            <span className="text-base font-medium text-foreground hover:underline">
              {next.title}
            </span>
          </Link>
        </NovaButton>
      ) : (
        <div />
      )}
    </div>
  )
}
