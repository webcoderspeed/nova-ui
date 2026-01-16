"use client"

import { useVersion } from "@/components/version-provider"
import ResizableDocsV1 from "./v1.0.0"

export default function ResizablePage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ResizableDocsV1 />
    default:
      return <ResizableDocsV1 />
  }
}
