"use client"

import { useVersion } from "@/components/version-provider"
import SonnerDocsV1 from "./v1.0.0"

export default function SonnerPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SonnerDocsV1 />
    default:
      return <SonnerDocsV1 />
  }
}
