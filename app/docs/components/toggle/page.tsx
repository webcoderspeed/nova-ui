"use client"

import { useVersion } from "@/components/version-provider"
import ToggleDocsV1 from "./v1.0.0"

export default function TogglePage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ToggleDocsV1 />
    default:
      return <ToggleDocsV1 />
  }
}
