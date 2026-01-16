"use client"

import { useVersion } from "@/components/version-provider"
import InputGroupDocsV1 from "./v1.0.0"

export default function InputGroupPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <InputGroupDocsV1 />
    default:
      return <InputGroupDocsV1 />
  }
}
