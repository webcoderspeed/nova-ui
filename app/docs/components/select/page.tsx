"use client"

import { useVersion } from "@/components/version-provider"
import SelectDocsV1 from "./v1.0.0"

export default function SelectPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <SelectDocsV1 />
    default:
      return <SelectDocsV1 />
  }
}
