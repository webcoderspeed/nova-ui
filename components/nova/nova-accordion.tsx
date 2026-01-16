"use client"

import type * as React from "react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const novaAccordionVariants = cva("", {
  variants: {
    variant: {
      default: "",
      bordered:
        "[&>[data-slot=accordion-item]]:border [&>[data-slot=accordion-item]]:rounded-lg [&>[data-slot=accordion-item]]:px-4 [&>[data-slot=accordion-item]]:mb-2",
      separated:
        "[&>[data-slot=accordion-item]]:border-0 [&>[data-slot=accordion-item]]:bg-secondary/50 [&>[data-slot=accordion-item]]:rounded-lg [&>[data-slot=accordion-item]]:px-4 [&>[data-slot=accordion-item]]:mb-2",
      flush: "[&>[data-slot=accordion-item]]:border-0 [&>[data-slot=accordion-item]]:border-b",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface NovaAccordionProps
  extends React.ComponentProps<typeof Accordion>,
    VariantProps<typeof novaAccordionVariants> {
  items?: Array<{
    value: string
    trigger: React.ReactNode
    content: React.ReactNode
    disabled?: boolean
  }>
}

function NovaAccordion({ className, variant, items, children, ...props }: NovaAccordionProps) {
  return (
    <Accordion className={cn(novaAccordionVariants({ variant }), className)} {...props}>
      {items
        ? items.map((item) => (
            <AccordionItem key={item.value} value={item.value} disabled={item.disabled}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))
        : children}
    </Accordion>
  )
}

export {
  NovaAccordion,
  AccordionItem as NovaAccordionItem,
  AccordionTrigger as NovaAccordionTrigger,
  AccordionContent as NovaAccordionContent,
  novaAccordionVariants,
}
