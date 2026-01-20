"use client"

import { useToast as useUiToast, toast as uiToast } from "@/components/ui/use-toast"
import { type NovaToastProps } from "@/components/nova/nova-toast"

type NovaToastOptions = Omit<NovaToastProps, "variant"> & {
  variant?: NovaToastProps["variant"]
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
}

function useNovaToast() {
  const { toast: originalToast, ...rest } = useUiToast()

  const toast = (props: NovaToastOptions) => {
    return originalToast(props as unknown as Parameters<typeof uiToast>[0])
  }

  return {
    toast,
    ...rest,
  }
}

const novaToast = (props: NovaToastOptions) => {
  return uiToast(props as unknown as Parameters<typeof uiToast>[0])
}

export { useNovaToast, novaToast }
