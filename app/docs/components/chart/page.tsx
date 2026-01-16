"use client"

import { useVersion } from "@/components/version-provider"
import ChartDocsV1 from "./v1.0.0"

export default function ChartPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ChartDocsV1 />
    default:
      return <ChartDocsV1 />
  }
}
