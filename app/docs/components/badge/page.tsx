"use client"

import { useVersion } from "@/components/version-provider"
import BadgeDocsV1 from "./v1.0.0"

export default function BadgePage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <BadgeDocsV1 />
    default:
      return <BadgeDocsV1 />
  }
}
