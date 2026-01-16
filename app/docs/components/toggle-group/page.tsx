"use client"

import { useVersion } from "@/components/version-provider"
import ToggleGroupDocsV1 from "./v1.0.0"

export default function ToggleGroupPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ToggleGroupDocsV1 />
    default:
      return <ToggleGroupDocsV1 />
  }
}
