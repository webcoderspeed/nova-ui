"use client"

import type * as React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaTabsVariants = cva("", {
  variants: {
    variant: {
      default: "",
      pills:
        "[&>[data-slot=tabs-list]]:bg-transparent [&>[data-slot=tabs-list]]:p-0 [&>[data-slot=tabs-list]]:gap-2 [&_[data-slot=tabs-trigger]]:rounded-full [&_[data-slot=tabs-trigger]]:data-[state=active]:bg-primary [&_[data-slot=tabs-trigger]]:data-[state=active]:text-primary-foreground",
      underline:
        "[&>[data-slot=tabs-list]]:bg-transparent [&>[data-slot=tabs-list]]:border-b [&>[data-slot=tabs-list]]:rounded-none [&>[data-slot=tabs-list]]:p-0 [&_[data-slot=tabs-trigger]]:rounded-none [&_[data-slot=tabs-trigger]]:border-b-2 [&_[data-slot=tabs-trigger]]:border-transparent [&_[data-slot=tabs-trigger]]:data-[state=active]:border-primary [&_[data-slot=tabs-trigger]]:data-[state=active]:bg-transparent [&_[data-slot=tabs-trigger]]:data-[state=active]:shadow-none",
      outline:
        "[&>[data-slot=tabs-list]]:bg-transparent [&>[data-slot=tabs-list]]:p-0 [&>[data-slot=tabs-list]]:gap-2 [&_[data-slot=tabs-trigger]]:border [&_[data-slot=tabs-trigger]]:data-[state=active]:border-primary",
    },
    size: {
      sm: "[&_[data-slot=tabs-trigger]]:text-xs [&_[data-slot=tabs-trigger]]:px-2 [&_[data-slot=tabs-trigger]]:py-1",
      md: "",
      lg: "[&_[data-slot=tabs-trigger]]:text-base [&_[data-slot=tabs-trigger]]:px-4 [&_[data-slot=tabs-trigger]]:py-2",
    },
    fullWidth: {
      true: "[&>[data-slot=tabs-list]]:w-full [&_[data-slot=tabs-trigger]]:flex-1",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    fullWidth: false,
  },
})

export interface NovaTabsProps extends React.ComponentProps<typeof Tabs>, VariantProps<typeof novaTabsVariants> {
  tabs?: Array<{
    value: string
    label: React.ReactNode
    content: React.ReactNode
    icon?: React.ReactNode
    disabled?: boolean
  }>
}

function NovaTabs({ className, variant, size, fullWidth, tabs, children, ...props }: NovaTabsProps) {
  return (
    <Tabs className={cn(novaTabsVariants({ variant, size, fullWidth }), className)} {...props}>
      {tabs ? (
        <>
          <TabsList>
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value} disabled={tab.disabled}>
                {tab.icon && <span className="mr-2">{tab.icon}</span>}
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              {tab.content}
            </TabsContent>
          ))}
        </>
      ) : (
        children
      )}
    </Tabs>
  )
}

export {
  NovaTabs,
  TabsList as NovaTabsList,
  TabsTrigger as NovaTabsTrigger,
  TabsContent as NovaTabsContent,
  novaTabsVariants,
}
