"use client"

import { useVersion } from "@/components/version-provider"
import ButtonGroupDocsV1 from "./v1.0.0"

export default function ButtonGroupPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <ButtonGroupDocsV1 />
    default:
      return <ButtonGroupDocsV1 />
  }
}
