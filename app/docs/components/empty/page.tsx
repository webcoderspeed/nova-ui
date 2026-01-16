"use client"

import { useVersion } from "@/components/version-provider"
import EmptyDocsV1 from "./v1.0.0"

export default function EmptyPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <EmptyDocsV1 />
    default:
      return <EmptyDocsV1 />
  }
}
