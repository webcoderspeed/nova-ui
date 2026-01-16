"use client"

import { useVersion } from "@/components/version-provider"
import LabelDocsV1 from "./v1.0.0"

export default function LabelPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <LabelDocsV1 />
    default:
      return <LabelDocsV1 />
  }
}
