"use client"

import { useVersion } from "@/components/version-provider"
import CardDocsV1 from "./v1.0.0"

export default function CardPage() {
  const { version } = useVersion()

  switch (version) {
    case "1.0.0":
      return <CardDocsV1 />
    default:
      return <CardDocsV1 />
  }
}
