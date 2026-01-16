"use client"

import { useVersion } from "@/components/version-provider"
import SheetDocsV1 from "./v1.0.0"

export default function SheetPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SheetDocsV1 />
    default:
      return <SheetDocsV1 />
  }
}
