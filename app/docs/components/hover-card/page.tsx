"use client"

import { useVersion } from "@/components/version-provider"
import HoverCardDocsV1 from "./v1.0.0"

export default function HoverCardPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <HoverCardDocsV1 />
    default:
      return <HoverCardDocsV1 />
  }
}
