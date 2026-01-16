"use client"

import { useVersion } from "@/components/version-provider"
import PopoverDocsV1 from "./v1.0.0"

export default function PopoverPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <PopoverDocsV1 />
    default:
      return <PopoverDocsV1 />
  }
}
