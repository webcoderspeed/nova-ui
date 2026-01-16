"use client"

import { useVersion } from "@/components/version-provider"
import ScrollAreaDocsV1 from "./v1.0.0"

export default function ScrollAreaPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ScrollAreaDocsV1 />
    default:
      return <ScrollAreaDocsV1 />
  }
}
