"use client"

import { useVersion } from "@/components/version-provider"
import AspectRatioDocsV1 from "./v1.0.0"

export default function AspectRatioPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <AspectRatioDocsV1 />
    default:
      return <AspectRatioDocsV1 />
  }
}
