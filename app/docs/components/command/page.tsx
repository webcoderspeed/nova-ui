"use client"

import { useVersion } from "@/components/version-provider"
import CommandDocsV1 from "./v1.0.0"

export default function CommandPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CommandDocsV1 />
    default:
      return <CommandDocsV1 />
  }
}
