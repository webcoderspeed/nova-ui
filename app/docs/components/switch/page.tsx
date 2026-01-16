"use client"

import { useVersion } from "@/components/version-provider"
import SwitchDocsV1 from "./v1.0.0"

export default function SwitchPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SwitchDocsV1 />
    default:
      return <SwitchDocsV1 />
  }
}
