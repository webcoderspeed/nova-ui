"use client"

import { useVersion } from "@/components/version-provider"
import ContextMenuDocsV1 from "./v1.0.0"

export default function ContextMenuPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ContextMenuDocsV1 />
    default:
      return <ContextMenuDocsV1 />
  }
}
