"use client"

import { useVersion } from "@/components/version-provider"
import RadioGroupDocsV1 from "./v1.0.0"

export default function RadioGroupPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <RadioGroupDocsV1 />
    default:
      return <RadioGroupDocsV1 />
  }
}
