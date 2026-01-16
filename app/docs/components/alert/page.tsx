"use client"

import { useVersion } from "@/components/version-provider"
import AlertDocsV1 from "./v1.0.0"
import AlertDocsV11 from "./v1.1.0"
import AlertDocsV2 from "./v2.0.0-beta"

export default function AlertPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AlertDocsV1 />
    case "1.1.0":
      return <AlertDocsV11 />
    case "2.0.0-beta":
      return <AlertDocsV2 />
    default:
      return <AlertDocsV11 />
  }
}
