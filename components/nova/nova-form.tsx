"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"

const NovaForm = Form
const NovaFormField = FormField

function NovaFormItem({
  className,
  ...props
}: React.ComponentProps<typeof FormItem>) {
  return (
    <FormItem
      className={cn("group space-y-2", className)}
      {...props}
    />
  )
}

function NovaFormLabel({
  className,
  ...props
}: React.ComponentProps<typeof FormLabel>) {
  return (
    <FormLabel
      className={cn(
        "text-sm font-medium transition-colors duration-200 group-focus-within:text-primary data-[error=true]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

function NovaFormControl({
  ...props
}: React.ComponentProps<typeof FormControl>) {
  return <FormControl {...props} />
}

function NovaFormDescription({
  className,
  ...props
}: React.ComponentProps<typeof FormDescription>) {
  return (
    <FormDescription
      className={cn("text-xs transition-opacity duration-200", className)}
      {...props}
    />
  )
}

function NovaFormMessage({
  className,
  ...props
}: React.ComponentProps<typeof FormMessage>) {
  const { error } = useFormField()

  return (
    <AnimatePresence mode="wait">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -5, height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <FormMessage
            className={cn("font-medium", className)}
            {...props}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export {
  useFormField,
  NovaForm,
  NovaFormItem,
  NovaFormLabel,
  NovaFormControl,
  NovaFormDescription,
  NovaFormMessage,
  NovaFormField,
}