"use client"

import { useVersion } from "@/components/version-provider"
import InputDocsV1 from "./v1.0.0"

export default function InputPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <InputDocsV1 />
    default:
      return <InputDocsV1 />
  }
}
