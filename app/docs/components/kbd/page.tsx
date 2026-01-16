"use client"

import { useVersion } from "@/components/version-provider"
import KbdDocsV1 from "./v1.0.0"

export default function KbdPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <KbdDocsV1 />
    default:
      return <KbdDocsV1 />
  }
}
