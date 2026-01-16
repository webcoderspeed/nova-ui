"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const novaTableVariants = cva("w-full caption-bottom text-sm", {
  variants: {
    variant: {
      default: "",
      bordered: "border-collapse [&_td]:border [&_th]:border",
      striped: "[&_tbody_tr:nth-child(even)]:bg-muted/30",
      clean: "[&_td]:border-0 [&_th]:border-0 [&_tr]:border-0",
    },
    density: {
      default: "",
      compact: "[&_td]:p-1 [&_th]:h-8 [&_th]:p-1",
      spacious: "[&_td]:p-4 [&_th]:h-14 [&_th]:p-4",
    },
  },
  defaultVariants: {
    variant: "default",
    density: "default",
  },
})

interface NovaTableProps
  extends React.ComponentProps<typeof Table>,
    VariantProps<typeof novaTableVariants> {}

function NovaTable({
  className,
  variant,
  density,
  ...props
}: NovaTableProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border/40 bg-background/50 backdrop-blur-sm shadow-sm">
      <Table
        className={cn(novaTableVariants({ variant, density }), className)}
        {...props}
      />
    </div>
  )
}

function NovaTableHeader({
  className,
  ...props
}: React.ComponentProps<typeof TableHeader>) {
  return (
    <TableHeader
      className={cn("bg-muted/30 hover:bg-muted/30", className)}
      {...props}
    />
  )
}

function NovaTableBody({
  ...props
}: React.ComponentProps<typeof TableBody>) {
  return <TableBody {...props} />
}

function NovaTableFooter({
  ...props
}: React.ComponentProps<typeof TableFooter>) {
  return <TableFooter {...props} />
}

function NovaTableRow({
  className,
  ...props
}: React.ComponentProps<typeof TableRow>) {
  return (
    <TableRow
      className={cn("hover:bg-muted/50 data-[state=selected]:bg-muted transition-colors duration-200", className)}
      {...props}
    />
  )
}

function NovaTableHead({
  className,
  ...props
}: React.ComponentProps<typeof TableHead>) {
  return (
    <TableHead
      className={cn("text-muted-foreground font-semibold uppercase tracking-wider text-xs", className)}
      {...props}
    />
  )
}

function NovaTableCell({
  className,
  ...props
}: React.ComponentProps<typeof TableCell>) {
  return (
    <TableCell 
      className={cn("tabular-nums", className)}
      {...props} 
    />
  )
}

function NovaTableCaption({
  ...props
}: React.ComponentProps<typeof TableCaption>) {
  return <TableCaption {...props} />
}

export {
  NovaTable,
  NovaTableHeader,
  NovaTableBody,
  NovaTableFooter,
  NovaTableRow,
  NovaTableHead,
  NovaTableCell,
  NovaTableCaption,
  novaTableVariants,
}