"use client"

import { useVersion } from "@/components/version-provider"
import ProgressDocsV1 from "./v1.0.0"
import ProgressDocsV11 from "./v1.1.0"
import ProgressDocsV2 from "./v2.0.0-beta"

export default function ProgressPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ProgressDocsV1 />
    case "1.1.0":
      return <ProgressDocsV11 />
    case "2.0.0-beta":
      return <ProgressDocsV2 />
    default:
      return <ProgressDocsV11 />
  }
}
