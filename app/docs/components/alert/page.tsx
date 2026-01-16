"use client"

import { useVersion } from "@/components/version-provider"
import AlertDocsV1 from "./v1.0.0"

export default function AlertPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AlertDocsV1 />
    default:
      return <AlertDocsV1 />
  }
}
