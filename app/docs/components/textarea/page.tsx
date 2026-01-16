"use client"

import { useVersion } from "@/components/version-provider"
import TextareaDocsV1 from "./v1.0.0"

export default function TextareaPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <TextareaDocsV1 />
    default:
      return <TextareaDocsV1 />
  }
}
