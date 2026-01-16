"use client"

import { useVersion } from "@/components/version-provider"
import ProgressDocsV1 from "./v1.0.0"

export default function ProgressPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ProgressDocsV1 />
    default:
      return <ProgressDocsV1 />
  }
}
