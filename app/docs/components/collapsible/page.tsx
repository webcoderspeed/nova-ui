"use client"

import { useVersion } from "@/components/version-provider"
import CollapsibleDocsV1 from "./v1.0.0"

export default function CollapsiblePage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CollapsibleDocsV1 />
    default:
      return <CollapsibleDocsV1 />
  }
}
