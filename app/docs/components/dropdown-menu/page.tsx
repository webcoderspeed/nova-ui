"use client"

import { useVersion } from "@/components/version-provider"
import DropdownMenuDocsV1 from "./v1.0.0"

export default function DropdownMenuPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <DropdownMenuDocsV1 />
    default:
      return <DropdownMenuDocsV1 />
  }
}
