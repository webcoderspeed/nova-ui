"use client"

import { useVersion } from "@/components/version-provider"
import TooltipDocsV1 from "./v1.0.0"

export default function TooltipPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <TooltipDocsV1 />
    default:
      return <TooltipDocsV1 />
  }
}
