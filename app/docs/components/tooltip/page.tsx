"use client"

import { useVersion } from "@/components/version-provider"
import TooltipDocsV1 from "./v1.0.0"
import TooltipDocsV11 from "./v1.1.0"
import TooltipDocsV2 from "./v2.0.0-beta"

export default function TooltipPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <TooltipDocsV1 />
    case "1.1.0":
      return <TooltipDocsV11 />
    case "2.0.0-beta":
      return <TooltipDocsV2 />
    default:
      return <TooltipDocsV11 />
  }
}
