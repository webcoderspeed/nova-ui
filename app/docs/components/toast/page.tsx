"use client"

import { useVersion } from "@/components/version-provider"
import ToastDocsV1 from "./v1.0.0"

export default function ToastPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ToastDocsV1 />
    default:
      return <ToastDocsV1 />
  }
}
