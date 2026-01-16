"use client"

import { useVersion } from "@/components/version-provider"
import SeparatorDocsV1 from "./v1.0.0"

export default function SeparatorPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SeparatorDocsV1 />
    default:
      return <SeparatorDocsV1 />
  }
}
